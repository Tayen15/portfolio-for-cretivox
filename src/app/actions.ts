"use server";

import {
  reviewerNoteSchema,
  type ReviewerNoteInput,
  type ReviewerNoteRecord,
} from "@/lib/schemas/profile-schema";
import type { ActionResponse } from "@/lib/types/action-response";

/**
 * Validates and processes a quick message from the contact drawer.
 * Returns a typed ActionResponse union so the client renders explicit error or success states.
 */
export async function submitReviewerNoteAction(
  rawInput: unknown
): Promise<ActionResponse<ReviewerNoteRecord>> {
  const parsed = reviewerNoteSchema.safeParse(rawInput);

  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0];
    return {
      success: false,
      error: firstIssue ? firstIssue.message : "Form input is incomplete.",
      code: "VALIDATION_ERROR",
    };
  }

  const validData: ReviewerNoteInput = parsed.data;

  await new Promise<void>((resolve) => {
    setTimeout(() => resolve(), 300);
  });

  const record: ReviewerNoteRecord = {
    ...validData,
    id: `CRTX-${Date.now().toString(36).toUpperCase()}`,
    submittedAtIso: new Date().toISOString(),
  };

  return {
    success: true,
    data: record,
  };
}
