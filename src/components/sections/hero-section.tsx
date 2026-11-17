"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Magnet } from "@/components/ui/magnet";
import type { CandidateProfile } from "@/lib/data/profile-data";

export interface HeroSectionProps {
  profile: CandidateProfile;
}

/**
 * Spacious, minimal English Hero section with GSAP entrance choreography.
 */
export function HeroSection({ profile }: HeroSectionProps): React.JSX.Element {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".gsap-hero-item",
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.1,
            ease: "power3.out",
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      aria-labelledby="hero-heading"
      className="border-b border-[#1F1F1F] bg-[#0A0A0A] px-5 pt-10 pb-16 sm:px-8 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="gsap-hero-item flex flex-wrap items-center gap-4">
          <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-[#666666] bg-[#141414]">
            <Image
              src={profile.avatarPath}
              alt={profile.fullName}
              width={112}
              height={112}
              priority={true}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-base font-bold text-[#F5F5F3]">{profile.fullName}</p>
          </div>
        </div>

        <h1
          id="hero-heading"
          className="gsap-hero-item mt-5 font-display text-[clamp(1.85rem,3.6vw,3.15rem)] leading-[1.08] font-extrabold tracking-tight text-[#F5F5F3]"
        >
          Hi, I&apos;m {profile.nickname}.
          <span className="mt-1 block text-[#B3B3B3]">{profile.heroTagline}</span>
        </h1>

        <p className="gsap-hero-item mt-4 max-w-xl text-base leading-relaxed text-[#B3B3B3] sm:text-lg">
          {profile.shortBio}
        </p>

        <div className="gsap-hero-item mt-7 flex flex-wrap items-center gap-3">
          <Magnet padding={70} magnetStrength={3}>
            <a
              href="#archive"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#D4FF00] px-5 py-2.5 text-sm font-bold text-[#0A0A0A] transition-colors hover:bg-[#e2ff4d]"
            >
              View Selected Works
            </a>
          </Magnet>
          <Magnet padding={70} magnetStrength={3}>
            <a
              href="#identity"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[#666666] bg-[#141414] px-5 py-2.5 text-sm font-medium text-[#F5F5F3] transition-colors hover:border-[#D4FF00] hover:text-[#D4FF00]"
            >
              About Me
            </a>
          </Magnet>
        </div>
      </div>
    </section>
  );
}
