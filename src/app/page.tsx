import React, { Suspense } from "react";
import { candidateProfileData } from "@/lib/data/profile-data";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { IdentityExplorer } from "@/components/sections/identity-explorer";
import { ProjectShowcase } from "@/components/sections/project-showcase";
import { ContactSection } from "@/components/sections/contact-section";

function SectionFallback({ label }: { label: string }): React.JSX.Element {
  return (
    <div
      role="status"
      className="border-b border-[#1F1F1F] bg-[#0A0A0A] px-6 py-16 font-mono-code text-xs text-[#D4FF00]"
    >
      [LOADING SECTION: {label}...]
    </div>
  );
}

/**
 * Main Server Component page assembling Hero, About Me (+ Orbital Tech Stack), Selected Works, and Contact.
 */
export default function HomePage(): React.JSX.Element {
  return (
    <div className="min-h-dvh bg-[#0A0A0A] text-[#F5F5F3]">
      <Navbar />
      <main>
        <Suspense fallback={<SectionFallback label="01 // INTRO" />}>
          <HeroSection profile={candidateProfileData} />
        </Suspense>

        <Suspense fallback={<SectionFallback label="02 // ABOUT ME" />}>
          <IdentityExplorer profile={candidateProfileData} />
        </Suspense>

        <Suspense fallback={<SectionFallback label="03 // WORKS" />}>
          <ProjectShowcase projects={candidateProfileData.projects} />
        </Suspense>

        <Suspense fallback={<SectionFallback label="04 // CONTACT" />}>
          <ContactSection profile={candidateProfileData} />
        </Suspense>
      </main>
      <Footer profile={candidateProfileData} />
    </div>
  );
}
