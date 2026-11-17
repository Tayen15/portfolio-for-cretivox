"use client";

import React, { useState } from "react";
import { submitReviewerNoteAction } from "@/app/actions";
import { Magnet } from "@/components/ui/magnet";
import type { CandidateProfile } from "@/lib/data/profile-data";
import type { ReviewerNoteRecord } from "@/lib/schemas/profile-schema";

export interface ContactSectionProps {
  profile: CandidateProfile;
}

/**
 * Clean, spacious English Contact section inspired by albertirgi.com.
 * Features side-by-side email & copy pills plus an optional compact Server Action note drawer.
 */
export function ContactSection({ profile }: ContactSectionProps): React.JSX.Element {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const [senderName, setSenderName] = useState<string>("");
  const [contactChannel, setContactChannel] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "loading" | "error" | "success"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [lastRecord, setLastRecord] = useState<ReviewerNoteRecord | null>(null);

  const handleCopyEmail = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(profile.links.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setSubmissionStatus("loading");
    setErrorMessage("");

    const response = await submitReviewerNoteAction({
      senderName,
      senderRole: "Tech Lead",
      contactChannel,
      message,
    });

    if (!response.success) {
      setSubmissionStatus("error");
      setErrorMessage(response.error);
      return;
    }

    setLastRecord(response.data);
    setSubmissionStatus("success");
    setMessage("");
  };

  return (
    <section
      id="initiative"
      aria-labelledby="initiative-heading"
      className="bg-[#0A0A0A] px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <p className="font-mono-code text-xs text-[#D4FF00]">03 / Contact</p>
        <h2
          id="initiative-heading"
          className="mt-3 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-tight font-extrabold text-[#F5F5F3]"
        >
          Let&apos;s work together.
        </h2>
        <p className="mt-3 max-w-lg text-base leading-relaxed text-[#B3B3B3]">
          Have a project, front-end role, or question in mind? Send an email or leave a quick note below.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Magnet padding={60} magnetStrength={3.5}>
            <a
              href={`mailto:${profile.links.email}`}
              className="inline-flex min-h-[48px] items-center rounded-full bg-[#D4FF00] px-6 py-3 text-sm font-bold text-[#0A0A0A] transition-colors hover:bg-[#e2ff4d]"
            >
              {profile.links.email}
            </a>
          </Magnet>

          <Magnet padding={60} magnetStrength={3.5}>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex min-h-[48px] items-center rounded-full border border-[#666666] bg-[#121212] px-6 py-3 text-sm font-medium text-[#F5F5F3] transition-colors hover:border-[#D4FF00] hover:text-[#D4FF00]"
            >
              {copiedEmail ? "Copied!" : "Copy email"}
            </button>
          </Magnet>

          <Magnet padding={60} magnetStrength={3.5}>
            <button
              type="button"
              onClick={() => setIsDrawerOpen((prev) => !prev)}
              aria-expanded={isDrawerOpen}
              className="inline-flex min-h-[48px] items-center rounded-full border border-[#666666] bg-[#121212] px-6 py-3 text-sm font-medium text-[#F5F5F3] transition-colors hover:border-[#D4FF00] hover:text-[#D4FF00]"
            >
              {isDrawerOpen ? "Close form" : "Quick message"}
            </button>
          </Magnet>
        </div>

        {isDrawerOpen && (
          <div className="mt-8 max-w-xl rounded-2xl border border-[#262626] bg-[#121212] p-6">
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="sender-name" className="block text-xs text-[#B3B3B3]">
                    Name
                  </label>
                  <input
                    id="sender-name"
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Your Name"
                    className="mt-1 min-h-[44px] w-full rounded-lg border border-[#666666] bg-[#0A0A0A] px-3.5 py-2 text-sm text-[#F5F5F3] placeholder:text-[#8F8F8F]"
                  />
                </div>
                <div>
                  <label htmlFor="contact-channel" className="block text-xs text-[#B3B3B3]">
                    Email or Contact
                  </label>
                  <input
                    id="contact-channel"
                    type="text"
                    value={contactChannel}
                    onChange={(e) => setContactChannel(e.target.value)}
                    placeholder="email@example.com"
                    className="mt-1 min-h-[44px] w-full rounded-lg border border-[#666666] bg-[#0A0A0A] px-3.5 py-2 text-sm text-[#F5F5F3] placeholder:text-[#8F8F8F]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="reviewer-message" className="block text-xs text-[#B3B3B3]">
                  Message
                </label>
                <textarea
                  id="reviewer-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write a short note for Okta..."
                  className="mt-1 w-full rounded-lg border border-[#666666] bg-[#0A0A0A] p-3.5 text-sm text-[#F5F5F3] placeholder:text-[#8F8F8F]"
                />
              </div>

              {submissionStatus === "idle" && !lastRecord && (
                <p role="status" className="font-mono-code text-xs text-[#8F8F8F]">
                  No messages sent in this session yet.
                </p>
              )}

              {submissionStatus === "loading" && (
                <p role="status" className="font-mono-code text-xs text-[#D4FF00]">
                  Sending message...
                </p>
              )}

              {submissionStatus === "error" && (
                <p role="alert" className="font-mono-code text-xs text-[#D4FF00]">
                  Validation error: {errorMessage}
                </p>
              )}

              {submissionStatus === "success" && lastRecord && (
                <p role="status" className="font-mono-code text-xs text-[#D4FF00]">
                  Sent (#{lastRecord.id}) from {lastRecord.senderName}.
                </p>
              )}

              <button
                type="submit"
                disabled={submissionStatus === "loading"}
                className="inline-flex min-h-[44px] items-center rounded-lg bg-[#D4FF00] px-5 py-2.5 text-xs font-bold text-[#0A0A0A] transition-colors hover:bg-[#e2ff4d]"
              >
                Send message
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
