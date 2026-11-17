"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ScrollStack, ScrollStackItem } from "@/components/ui/scroll-stack";
import { Magnet } from "@/components/ui/magnet";
import type { FeaturedProject } from "@/lib/data/profile-data";

export interface ProjectShowcaseProps {
  projects: FeaturedProject[];
}

interface LiveSitePreviewProps {
  project: FeaturedProject;
}

/**
 * Renders an instant live homepage preview inside a browser container without requiring manual image uploads.
 * Uses a live scaled iframe for frameable deployments and an automated Microlink snapshot when X-Frame-Options: DENY is set.
 */
function LiveSitePreview({ project }: LiveSitePreviewProps): React.JSX.Element {
  const [iframeLoaded, setIframeLoaded] = useState<boolean>(false);

  return (
    <div
      className={`relative h-full w-full overflow-hidden rounded-2xl border border-white/10 p-4 pb-0 sm:p-6 sm:pb-0 ${project.previewSurfaceTone}`}
    >
      <div className="flex h-full flex-col overflow-hidden rounded-t-xl border border-b-0 border-white/15 bg-[#0A0A0A] shadow-2xl">
        {/* Compact browser bar */}
        <div className="flex h-8 shrink-0 items-center justify-between border-b border-white/10 bg-[#141414] px-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-[#3A3A3A]" />
            <span className="h-2 w-2 rounded-full bg-[#3A3A3A]" />
            <span className="h-2 w-2 rounded-full bg-[#3A3A3A]" />
          </div>
          <span className="truncate font-mono-code text-[11px] text-[#B3B3B3]">
            {project.liveDomain}
          </span>
          <span className="font-mono-code text-[10px] text-[#D4FF00]">LIVE</span>
        </div>

        {/* Live site viewport */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A0A0A]">
          {project.previewType === "screenshot" && project.previewScreenshotUrl ? (
            <Image
              src={project.previewScreenshotUrl}
              alt={`${project.title} live website preview`}
              width={1200}
              height={750}
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <>
              {!iframeLoaded && (
                <div
                  role="status"
                  className="absolute inset-0 flex items-center justify-center bg-[#0A0A0A] font-mono-code text-xs text-[#B3B3B3]"
                >
                  Loading live preview ({project.liveDomain})...
                </div>
              )}
              <iframe
                src={project.liveUrl}
                title={`${project.title} live preview`}
                loading="lazy"
                onLoad={() => setIframeLoaded(true)}
                className="pointer-events-none h-[250%] w-[250%] origin-top-left scale-[0.4] border-0 bg-white"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Selected Works section powered by React Bits <ScrollStack /> with Albert Irgi inspired split cards
 * and instant live website previews.
 */
export function ProjectShowcase({ projects }: ProjectShowcaseProps): React.JSX.Element {
  return (
    <section
      id="archive"
      aria-labelledby="archive-heading"
      className="border-b border-[#1F1F1F] bg-[#0A0A0A] px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono-code text-xs text-[#D4FF00]">02 / Selected Works</p>
            <h2
              id="archive-heading"
              className="mt-2 font-display text-2xl font-bold text-[#F5F5F3] sm:text-4xl"
            >
              Systems in Production
            </h2>
          </div>
          <p className="font-mono-code text-xs text-[#B3B3B3]">
            Scroll to stack · Live previews
          </p>
        </div>

        <ScrollStack
          useWindowScroll={true}
          itemDistance={90}
          itemStackDistance={22}
          stackPosition="12%"
          itemScale={0.04}
          baseScale={0.86}
          dimAmount={0.25}
          holdDistance={140}
        >
          {projects.map((project) => (
            <ScrollStackItem
              key={project.id}
              itemClassName="p-6 sm:p-8 lg:p-10"
            >
              <div
                id={`project-panel-${project.id}`}
                className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12"
              >
                {/* Left column: Index, Title, concise 1-sentence copy, tags, Visit site CTA */}
                <div className="flex h-full flex-col justify-between gap-6 lg:col-span-5">
                  <div>
                    <div className="flex items-center justify-between font-mono-code text-xs text-[#8F8F8F]">
                      <span>{project.indexLabel}</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="mt-5 font-display text-2xl font-extrabold tracking-tight text-[#F5F5F3] sm:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#B3B3B3]">
                      {project.oneLineSummary}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-[#333333] bg-[#1A1A1A] px-3 py-1 font-mono-code text-[11px] text-[#B3B3B3]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Magnet padding={65} magnetStrength={3}>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] items-center rounded-full bg-[#F5F5F3] px-5 py-2.5 text-xs font-bold text-[#0A0A0A] transition-colors hover:bg-[#D4FF00]"
                      >
                        Visit site
                      </a>
                    </Magnet>
                  </div>
                </div>

                {/* Right column: Instant Live Website Preview */}
                <div className="lg:col-span-7">
                  <LiveSitePreview project={project} />
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
