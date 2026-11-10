import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
async function english(page: import("@playwright/test").Page, path = "/") {
  await page.goto(path);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
}
test("home renders without runtime errors or overflow", async ({
  page,
}, info) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await english(page);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Bold ideas.",
  );
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth > innerWidth + 1,
    ),
  ).toBe(false);
  await page.screenshot({
    path: info.outputPath("premium-dark.png"),
    fullPage: true,
    animations: "disabled",
  });
  expect(errors).toEqual([]);
});
test("language and color theme persist after reload", async ({
  page,
}, info) => {
  await english(page);
  await page.getByRole("button", { name: "Switch to Dari" }).click();
  await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
  await page.getByRole("button", { name: "تغییر حالت رنگ" }).click();
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await expect(page.locator("html")).toHaveAttribute("lang", "fa-AF");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth > innerWidth + 1,
    ),
  ).toBe(false);
  await page.screenshot({
    path: info.outputPath("premium-dari-light.png"),
    fullPage: true,
    animations: "disabled",
  });
});
test("filters and pre-rendered case-study refresh", async ({ page }) => {
  await english(page);
  await page.locator(".filters").getByRole("button", { name: "Education", exact: true }).click();
  await expect(page.locator(".project-card")).toHaveCount(1);
  await page.getByRole("link", { name: "View case study" }).click();
  await expect(page).toHaveURL(/\/projects\/school-management\//);
  await page.reload();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "School Management System",
  );
});
test("skills support pointer and keyboard navigation", async ({ page }) => {
  await english(page);
  await page.getByRole("tab", { name: "Databases", exact: true }).click();
  await expect(page.getByRole("tabpanel")).toContainText("PostgreSQL");
  await page
    .getByRole("tab", { name: "Databases", exact: true })
    .press("ArrowRight");
  await expect(page.getByRole("tabpanel")).toContainText("GitHub");
});
test("mobile menu closes with Escape and follows section links", async ({
  page,
}, info) => {
  test.skip(info.project.name !== "mobile", "Mobile navigation only");
  await english(page);
  const menu = page.getByRole("button", { name: "Toggle menu" });
  await menu.click();
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(menu).toBeFocused();
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await menu.click();
  await page
    .locator("nav")
    .getByRole("link", { name: "Contact", exact: true })
    .click();
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(page).toHaveURL(/#contact$/);
});
test("missing credentials and testimonials are explicitly identified", async ({
  page,
}) => {
  await english(page);
  await page
    .getByRole("button", { name: "Education", exact: true })
    .last()
    .click();
  await expect(page.locator(".pending-card")).toContainText("Verified details");
  await expect(page.locator(".testimonial-card")).toContainText(
    "No verified client feedback",
  );
  await expect(
    page.getByRole("link", { name: "Request my CV" }),
  ).toHaveAttribute("href", "#contact");
});
test("contact validation and configured backend submission states", async ({
  page,
}) => {
  await english(page);
  const form = page.locator(".contact-panel form");
  await page.getByRole("button", { name: "Send message" }).click();
  expect(
    await form.evaluate((el) => (el as HTMLFormElement).checkValidity()),
  ).toBe(false);
  await page.getByLabel("Your name", { exact: true }).fill("Test visitor");
  await page
    .getByLabel("Email address", { exact: true })
    .fill("visitor@example.com");
  await page.getByLabel("What’s on your mind?").fill("A project");
  await page.getByLabel("A little more about it").fill("An idea to discuss.");
  await page.route("https://example.test/contact", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: "{}",
      headers: { "access-control-allow-origin": "*" },
    }),
  );
  await page.getByRole("button", { name: "Send message" }).click();
  await expect(page.getByRole("status")).toContainText(
    "submitted successfully",
  );
  await page.getByLabel("Your name", { exact: true }).fill("Test visitor");
  await page
    .getByLabel("Email address", { exact: true })
    .fill("visitor@example.com");
  await page.getByLabel("What’s on your mind?").fill("A project");
  await page.getByLabel("A little more about it").fill("An idea to discuss.");
  await page.unroute("https://example.test/contact");
  await page.route("https://example.test/contact", (route) => route.abort());
  await page.getByRole("button", { name: "Send message" }).click();
  await expect(page.getByRole("status")).toContainText(
    "could not be submitted",
  );
});
test("custom 404 offers a working home link", async ({ page }) => {
  await english(page, "/404.html");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "off-script",
  );
  await page.getByRole("link", { name: "Back to the portfolio" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Bold ideas.",
  );
});
for (const lang of ["en", "fa"])
  for (const theme of ["dark", "light"])
    test(`WCAG ${lang} ${theme}`, async ({ page }) => {
      await english(page);
      if (lang === "fa")
        await page.getByRole("button", { name: "Switch to Dari" }).click();
      if (theme === "light")
        await page
          .getByRole("button", {
            name: lang === "en" ? "Toggle color theme" : "تغییر حالت رنگ",
          })
          .click();
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(results.violations).toEqual([]);
    });
