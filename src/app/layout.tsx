import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syneDisplay = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-display",
  display: "swap",
});

const jakartaBody = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Firtiansyah Okta Resama (Okta) | Front-End Developer",
  description:
    "Personal Front-End Developer portfolio of Firtiansyah Okta Resama, building fast web interfaces with Next.js, Laravel, and Docker.",
};

export interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * Root Server Component layout providing editorial font variables and skip-to-content accessibility.
 */
export default function RootLayout({ children }: RootLayoutProps): React.JSX.Element {
  return (
    <html
      lang="en"
      className={`${syneDisplay.variable} ${jakartaBody.variable} ${jetbrainsMono.variable} dark`}
    >
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
