import type { Metadata } from "next";
import "@fontsource/syne/700.css";
import "@fontsource/syne/800.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Firtiansyah Okta Resama (Okta) | Front-End Developer",
  description:
    "Personal Front-End Developer portfolio of Firtiansyah Okta Resama, building fast web interfaces with Next.js, Laravel, and Docker.",
};

export interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * Root Server Component layout providing self-hosted editorial fonts and skip-to-content accessibility.
 */
export default function RootLayout({ children }: RootLayoutProps): React.JSX.Element {
  return (
    <html lang="en" className="dark">
      <body className="min-h-dvh bg-[#0A0A0A] text-[#F5F5F3] antialiased">
        <a
          href="#manifesto"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-[#D4FF00] focus:px-4 focus:py-3 focus:font-mono-code focus:text-sm focus:font-bold focus:text-[#0A0A0A]"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
