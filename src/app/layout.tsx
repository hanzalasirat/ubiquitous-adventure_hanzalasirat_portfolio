import type { Metadata, Viewport } from "next";
import { Provider } from "@/components/provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";
const origin =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://hanzala-sirat-portfolio-review.reflectiveblueberry.chatgpt.site";
export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: {
    default: "Hanzala Sirat — Full-stack Developer",
    template: "%s | Hanzala Sirat",
  },
  description:
    "Hanzala Sirat is a full-stack developer in Kabul, Afghanistan. Explore web applications, thoughtful interfaces and practical management systems.",
  openGraph: {
    type: "website",
    title: "Hanzala Sirat — Creative Engineering",
    description: "Bold ideas. Thoughtful experiences.",
    images: ["/social-card.svg"],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: false, follow: false },
  icons: { icon: "/favicon.svg" },
};
export const viewport: Viewport = { themeColor: "#101113" };
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" data-theme="dark" suppressHydrationWarning>
      <body>
        <Provider>
          <Header />
          <main id="main" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </Provider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Hanzala Sirat",
              jobTitle: "Full Stack Developer",
              url: origin,
              sameAs: ["https://github.com/hanzalasirat"],
            }),
          }}
        />
      </body>
    </html>
  );
}
