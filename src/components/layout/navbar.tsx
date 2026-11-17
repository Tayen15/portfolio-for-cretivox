"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Magnet } from "@/components/ui/magnet";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#identity" },
  { label: "Works", href: "#archive" },
  { label: "Contact", href: "#initiative" },
];

/**
 * Minimalist sticky top navigation with generous spacing and keyboard-accessible mobile drawer.
 */
export function Navbar(): React.JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("#manifesto");

  const closeMenu = useCallback((): void => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const sectionIds = ["manifesto", "identity", "archive", "initiative"];
    const handleScroll = (): void => {
      const scrollPosition = window.scrollY + 240;
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${id}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-[#1F1F1F] bg-[#0A0A0A]/90 backdrop-blur-xs">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a
          href="#manifesto"
          className="inline-flex min-h-[44px] items-center gap-2.5 text-sm font-bold tracking-tight text-[#F5F5F3]"
        >
          <span className="h-2 w-2 rounded-full bg-[#D4FF00]" aria-hidden="true" />
          <span>Okta.</span>
          <span className="font-mono-code text-xs font-normal text-[#8F8F8F]">
            // Front-End Dev
          </span>
        </a>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActiveSection(item.href)}
                className={`inline-flex min-h-[44px] items-center rounded-lg px-3.5 py-2 text-sm transition-colors ${
                  isActive
                    ? "font-semibold text-[#D4FF00]"
                    : "text-[#B3B3B3] hover:text-[#F5F5F3]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center md:flex">
          <Magnet padding={55} magnetStrength={3.5}>
            <a
              href="#initiative"
              className="inline-flex min-h-[44px] items-center rounded-lg bg-[#D4FF00] px-4 py-2 text-xs font-bold text-[#0A0A0A] transition-colors hover:bg-[#e2ff4d]"
            >
              Get in touch
            </a>
          </Magnet>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav-drawer"
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-[#666666] bg-[#141414] px-3.5 py-2 font-mono-code text-xs font-semibold text-[#F5F5F3] md:hidden"
        >
          {isMobileMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav
          id="mobile-nav-drawer"
          aria-label="Mobile navigation"
          className="border-t border-[#1F1F1F] bg-[#121212] px-5 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.href);
                    closeMenu();
                  }}
                  className="flex min-h-[44px] items-center justify-between rounded-lg border border-[#666666] bg-[#0A0A0A] px-4 py-2.5 text-sm font-medium text-[#F5F5F3]"
                >
                  <span>{item.label}</span>
                  <span className="font-mono-code text-xs text-[#D4FF00]">-&gt;</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
