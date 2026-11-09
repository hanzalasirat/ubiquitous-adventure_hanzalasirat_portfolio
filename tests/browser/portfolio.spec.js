import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

async function english(page, path = "") {
  await page.goto(`./${path}`);
  await page.getByRole("button", { name: "EN", exact: true }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
}

test("Dari home and English light mode retain preferences without overflow", async ({
  page,
}, testInfo) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("./");
  await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "کدنویسی",
  );
  await page.screenshot({
    path: testInfo.outputPath("dari-dark.png"),
    fullPage: true,
  });
  await page.getByRole("button", { name: "EN", exact: true }).click();
  await page.getByRole("button", { name: "Change color theme" }).click();
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("dir", "ltr");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Thoughtful code.",
  );
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > innerWidth + 1,
  );
  expect(overflow).toBe(false);
  await page.screenshot({
    path: testInfo.outputPath("english-light.png"),
    fullPage: true,
  });
  expect(errors).toEqual([]);
});

test("project filters, deep links and refresh work", async ({ page }) => {
  await english(page, "#/projects");
  await page.getByRole("button", { name: "Education", exact: true }).click();
  await expect(page.locator(".project-card")).toHaveCount(1);
  await expect(page.locator(".project-card")).toContainText(
    "School Management System",
  );
  await page
    .getByRole("link", { name: "Explore project", exact: true })
    .click();
  await expect(page).toHaveURL(/#\/projects\/school-management$/);
  await page.reload();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "School Management System",
  );
  await expect(page.locator("main")).toContainText(
    "Source code and live demo links have not been added yet.",
  );
});

test("skip link focuses content without changing hash route", async ({
  page,
}) => {
  await english(page, "#/projects");
  const before = page.url();
  await page.locator(".skip-link").focus();
  await page.locator(".skip-link").press("Enter");
  await expect(page.locator("main")).toBeFocused();
  expect(page.url()).toBe(before);
});

test("mobile navigation closes with Escape and restores focus", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "Mobile menu only");
  await english(page);
  const toggle = page.getByRole("button", { name: "Toggle navigation" });
  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(toggle).toBeFocused();
  await toggle.click();
  await page
    .locator("nav")
    .getByRole("link", { name: "Contact", exact: true })
    .click();
  await expect(page).toHaveURL(/#\/contact$/);
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
});

test("contact form validates fields and uses the correct destination", async ({
  page,
}) => {
  await english(page, "#/contact");
  await expect(
    page.getByRole("link", { name: /hanzalasirat4@gmail.com/ }),
  ).toHaveAttribute("href", "mailto:hanzalasirat4@gmail.com");
  await expect(
    page.getByRole("button", { name: "Open email draft" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Open email draft" }).click();
  expect(
    await page.locator("form").evaluate((form) => form.checkValidity()),
  ).toBe(false);
  await expect(page.getByRole("status")).toBeEmpty();
  await page.getByLabel("Your name").fill("Test visitor");
  await page.getByLabel("Your email").fill("visitor@example.com");
  await page.getByLabel("Subject", { exact: true }).fill("A project");
  await page.getByLabel("Your message").fill("Let’s discuss a project.");
  expect(
    await page.locator("form").evaluate((form) => form.checkValidity()),
  ).toBe(true);
  // Do not invoke an external mail client from the test runner.
});

test("weather lookup handles a provider outage", async ({ page }) => {
  await english(page, "#/lab");
  await page.route("https://geocoding-api.open-meteo.com/**", (route) =>
    route.abort(),
  );
  await page.getByLabel("City name").fill("Kabul");
  await page
    .getByRole("button", { name: "Check weather", exact: true })
    .click();
  await expect(
    page.getByText(
      "Weather is unavailable. Check the city name or try again later.",
    ),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Check weather", exact: true }),
  ).toBeEnabled();
});

test("unknown routes have a usable recovery link", async ({ page }) => {
  await english(page, "#/does-not-exist");
  await expect(page.getByRole("heading", { name: "404" })).toBeVisible();
  await page.getByRole("link", { name: "Return home" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Thoughtful code.",
  );
});

for (const language of ["fa", "en"]) {
  for (const theme of ["dark", "light"]) {
    test(`WCAG checks: ${language}, ${theme}`, async ({ page }) => {
      await page.goto("./");
      if (language === "en")
        await page.getByRole("button", { name: "EN", exact: true }).click();
      if (theme === "light")
        await page.locator(".header-controls button").last().click();
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(results.violations).toEqual([]);
    });
  }
}
