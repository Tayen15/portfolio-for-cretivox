"use client";

import React, { useState } from "react";
import type { CandidateProfile } from "@/lib/data/profile-data";
import type { StackFilterCategory } from "@/lib/schemas/profile-schema";

export interface CapabilityMatrixProps {
  profile: CandidateProfile;
}

const FILTER_OPTIONS: StackFilterCategory[] = [
  "ALL",
  "Next.js",
  "Tailwind CSS",
  "Laravel",
  "Docker & CI/CD",
];

/**
 * Minimalist Tech Stack section in English with clean category pills.
 */
export function CapabilityMatrix({ profile }: CapabilityMatrixProps): React.JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<StackFilterCategory>("ALL");

  const filteredCapabilities = profile.capabilities.filter(
    (item) => selectedCategory === "ALL" || item.category === selectedCategory
  );

  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="border-b border-[#1F1F1F] bg-[#0A0A0A] px-5 py-20 sm:px-8 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono-code text-xs text-[#D4FF00]">03 / Tech Stack</p>
            <h2
              id="capabilities-heading"
              className="mt-2 font-display text-2xl font-bold text-[#F5F5F3] sm:text-4xl"
            >
              Core Engineering Tools
            </h2>
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter tech stack category">
            {FILTER_OPTIONS.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={isActive}
                  className={`min-h-[44px] rounded-lg border px-3.5 py-2 font-mono-code text-xs transition-colors ${
                    isActive
                      ? "border-[#D4FF00] bg-[#D4FF00] font-bold text-[#0A0A0A]"
                      : "border-[#666666] bg-[#121212] text-[#F5F5F3] hover:border-[#D4FF00]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {filteredCapabilities.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-[#262626] bg-[#121212] p-6"
            >
              <h3 className="font-display text-lg font-bold text-[#F5F5F3]">{item.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#B3B3B3]">
                {item.shortUsage}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
