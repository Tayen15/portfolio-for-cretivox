"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Magnet } from "@/components/ui/magnet";
import type { CandidateProfile } from "@/lib/data/profile-data";

export interface IdentityExplorerProps {
  profile: CandidateProfile;
}

interface OrbitTechItem {
  id: string;
  name: string;
  usage: string;
  angleDeg: number;
  tiltDeg: number;
  renderIcon: () => React.JSX.Element;
}

const ORBIT_TECH_ITEMS: OrbitTechItem[] = [
  {
    id: "nextjs",
    name: "Next.js",
    usage: "App Router architecture for ASTRO 2026, PEMIRA E-Voting, and ORMIK Explore.",
    angleDeg: -90,
    tiltDeg: -6,
    renderIcon: () => (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="#0A0A0A" />
        <path
          d="M8.5 16.5V8.2l8.9 10.7"
          stroke="#F5F5F3"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M15.2 8.2v5.3"
          stroke="#F5F5F3"
          strokeWidth="1.7"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    id: "typescript",
    name: "TypeScript",
    usage: "Strict type safety across UI components, Zod schemas, and Server Actions.",
    angleDeg: -45,
    tiltDeg: 5,
    renderIcon: () => (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path
          d="M13.5 11.8H10.7V19H8.8v-7.2H6v-1.6h7.5v1.6Zm5.6 5.1c0 1.4-1.1 2.3-2.9 2.3-1.1 0-2-.3-2.6-.7v-1.8c.7.5 1.5.9 2.4.9.8 0 1.2-.3 1.2-.7 0-.5-.4-.7-1.4-1.1-1.3-.5-2.1-1.2-2.1-2.5 0-1.4 1.1-2.3 2.8-2.3.9 0 1.7.2 2.2.5v1.7c-.6-.4-1.3-.6-2-.6-.7 0-1.1.3-1.1.7 0 .5.4.7 1.3 1.1 1.4.6 2.2 1.2 2.2 2.5Z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    usage: "Responsive layouts, fluid typography, and consistent spacing across breakpoints.",
    angleDeg: 0,
    tiltDeg: -4,
    renderIcon: () => (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#06B6D4]" fill="currentColor" aria-hidden="true">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.12 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.62 7.15 14.48 6 12 6Zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.12 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.62 13.15 9.48 12 7 12Z" />
      </svg>
    ),
  },
  {
    id: "laravel",
    name: "Laravel",
    usage: "Production e-commerce marketplace and invitation back-ends built at Indi Technology.",
    angleDeg: 45,
    tiltDeg: 6,
    renderIcon: () => (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#FF2D20]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="m4 7 4-2 4 2v6l4-2 4 2v4l-8 4-8-4V7Z" strokeLinejoin="round" />
        <path d="m4 7 4 2 4-2M8 9v8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "docker",
    name: "Docker",
    usage: "Containerized web deployments and reproducible homelab services.",
    angleDeg: 90,
    tiltDeg: -5,
    renderIcon: () => (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#2496ED]" fill="currentColor" aria-hidden="true">
        <path d="M13 6h2v2h-2V6Zm-3 0h2v2h-2V6Zm0 3h2v2h-2V9Zm-3 0h2v2H7V9Zm6 0h2v2h-2V9Zm7.2 2.3c-.6-.4-1.7-.5-2.6-.3-.2-1-.9-1.8-1.8-2.3l-.4-.2-.2.4c-.4.7-.5 1.7-.1 2.5-.5.3-1.3.4-2 .4H3.1l-.1.6c-.2 1.8.2 3.6 1.2 5 1.2 1.7 3 2.5 5.4 2.5 4.8 0 8.5-2.2 10.2-6.2.7 0 2.1 0 2.8-1.4.1-.1.3-.6.4-.8l-.8-.2Z" />
      </svg>
    ),
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    usage: "Relational database paired with Drizzle ORM for real-time quota and voting integrity.",
    angleDeg: 135,
    tiltDeg: 5,
    renderIcon: () => (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#336791]" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
        <ellipse cx="12" cy="6.5" rx="7" ry="3" />
        <path d="M5 6.5v11c0 1.66 3.13 3 7 3s7-1.34 7-3v-11" />
        <path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3" />
      </svg>
    ),
  },
  {
    id: "gsap",
    name: "GSAP",
    usage: "Scroll-triggered choreography and smooth kinetic entrance animations.",
    angleDeg: 180,
    tiltDeg: -6,
    renderIcon: () => (
      <span className="font-mono-code text-[11px] font-extrabold tracking-tight text-[#0A0A0A]">
        GSAP
      </span>
    ),
  },
  {
    id: "git",
    name: "Git & CI/CD",
    usage: "Automated build checks, branch workflows, and zero-downtime deployments.",
    angleDeg: 225,
    tiltDeg: 4,
    renderIcon: () => (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#F05032]" fill="currentColor" aria-hidden="true">
        <path d="M21.62 11.11 12.89 2.38a1.3 1.3 0 0 0-1.84 0L9.22 4.21l2.31 2.31a1.54 1.54 0 0 1 1.95 1.97l2.23 2.23a1.55 1.55 0 1 1-.93.88l-2.08-2.08v5.48a1.55 1.55 0 1 1-1.28-.04V9.38a1.55 1.55 0 0 1-.84-2.03L8.3 5.07 2.38 11a1.3 1.3 0 0 0 0 1.84l8.73 8.73a1.3 1.3 0 0 0 1.84 0l8.67-8.67a1.3 1.3 0 0 0 0-1.84Z" />
      </svg>
    ),
  },
];

/**
 * Combined About Me & Orbital Tech Stack section.
 * Left: concise English narrative paragraphs and key facts.
 * Right: avatar surrounded by interactive tech stack tiles inspired by albertirgi.com.
 */
export function IdentityExplorer({ profile }: IdentityExplorerProps): React.JSX.Element {
  const [selectedTechId, setSelectedTechId] = useState<string>(ORBIT_TECH_ITEMS[0].id);
  const activeTech =
    ORBIT_TECH_ITEMS.find((item) => item.id === selectedTechId) ?? ORBIT_TECH_ITEMS[0];

  return (
    <section
      id="identity"
      aria-labelledby="identity-heading"
      className="border-b border-[#1F1F1F] bg-[#0A0A0A] px-5 py-20 sm:px-8 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Left column: About Me concise paragraphs */}
          <div className="lg:col-span-6">
            <p className="font-mono-code text-xs text-[#D4FF00]">01 / About Me</p>
            <h2
              id="identity-heading"
              className="mt-2 font-display text-3xl font-bold text-[#F5F5F3] sm:text-4xl"
            >
              A builder&apos;s discipline, a designer&apos;s eye.
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#B3B3B3]">
              <p>
                I&apos;m {profile.fullName} ({profile.nickname}), a {profile.age}-year-old{" "}
                {profile.major} student in Semester {profile.semester} at {profile.university}.
                Starting from Software Engineering at SMKN 1 Depok, I focus on shipping clean,
                responsive interfaces backed by reliable web architecture.
              </p>
              <p>
                During my internship at {profile.experience.company}, I built a Laravel e-commerce
                marketplace and digital invitation platform. Today I pair Next.js, TypeScript, and
                Tailwind CSS with Docker and CI/CD pipelines so every release stays fast and
                predictable.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-[#1F1F1F] pt-6 font-mono-code text-xs text-[#B3B3B3]">
              <span>{profile.university} · Sem {profile.semester}</span>
              <span>{profile.age} y/o · {profile.zodiac.sign}</span>
              <span>{profile.experience.company} Intern</span>
            </div>
          </div>

          {/* Right column: Orbital Tech Stack Showcase */}
          <div className="flex flex-col items-center lg:col-span-6">
            <div className="relative mx-auto aspect-square w-full max-w-[330px] sm:max-w-[390px]">
              {/* Subtle orbital guide ring */}
              <div
                aria-hidden="true"
                className="absolute inset-[14%] rounded-full border border-dashed border-[#2A2A2A]"
              />

              {/* Center circular avatar */}
              <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-[#2E2E2E] bg-[#141414] shadow-2xl sm:h-34 sm:w-34">
                  <Image
                    src={profile.avatarPath}
                    alt={profile.fullName}
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-2 flex justify-center">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#333333] bg-[#141414] px-3 py-1 font-mono-code text-[11px] font-medium text-[#F5F5F3]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D4FF00]" aria-hidden="true" />
                    <span>{activeTech.name}</span>
                  </span>
                </div>
              </div>

              {/* Orbiting tech stack tiles */}
              {ORBIT_TECH_ITEMS.map((tech) => {
                const rad = (tech.angleDeg * Math.PI) / 180;
                const radiusPct = 39;
                const leftPct = 50 + radiusPct * Math.cos(rad);
                const topPct = 50 + radiusPct * Math.sin(rad);
                const isSelected = tech.id === activeTech.id;

                return (
                  <div
                    key={tech.id}
                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${leftPct.toFixed(2)}%`,
                      top: `${topPct.toFixed(2)}%`,
                    }}
                  >
                    <Magnet padding={36} magnetStrength={4} exclusive={false}>
                      <button
                        type="button"
                        onClick={() => setSelectedTechId(tech.id)}
                        onMouseEnter={() => setSelectedTechId(tech.id)}
                        aria-label={`Inspect ${tech.name}`}
                        aria-pressed={isSelected}
                        style={{ transform: `rotate(${tech.tiltDeg}deg)` }}
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5F5F3] shadow-lg transition-all sm:h-14 sm:w-14 ${
                          isSelected
                            ? "ring-2 ring-[#D4FF00] ring-offset-2 ring-offset-[#0A0A0A] scale-105"
                            : "opacity-90 hover:opacity-100 hover:scale-105"
                        }`}
                      >
                        {tech.renderIcon()}
                      </button>
                    </Magnet>
                  </div>
                );
              })}
            </div>

            {/* Selected Tech Stack Context Readout */}
            <div className="mt-4 w-full max-w-[390px] rounded-xl border border-[#262626] bg-[#121212] px-4 py-3 text-center">
              <p className="font-mono-code text-xs font-bold text-[#D4FF00]">
                {activeTech.name}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[#B3B3B3]">
                {activeTech.usage}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
