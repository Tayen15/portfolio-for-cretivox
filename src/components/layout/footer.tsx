import React from "react";
import type { CandidateProfile } from "@/lib/data/profile-data";

export interface FooterProps {
  profile: CandidateProfile;
}

/**
 * Clean, minimal footer with direct external links.
 */
export function Footer({ profile }: FooterProps): React.JSX.Element {
  return (
    <footer className="border-t border-[#1F1F1F] bg-[#0A0A0A] px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col justify-between gap-4 text-xs text-[#B3B3B3] sm:flex-row sm:items-center">
        <p>
          {profile.fullName} · {profile.batchLabel}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={profile.links.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center text-[#F5F5F3] transition-colors hover:text-[#D4FF00]"
          >
            hi.oktaa.my.id
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center text-[#F5F5F3] transition-colors hover:text-[#D4FF00]"
          >
            GitHub
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center text-[#F5F5F3] transition-colors hover:text-[#D4FF00]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
