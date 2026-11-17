import { z } from "zod";

/**
 * Validates incoming reviewer notes submitted through the quick-ping contact form.
 */
export const reviewerNoteSchema = z.object({
  senderName: z
    .string()
    .trim()
    .min(2, "Sender name must be at least 2 characters.")
    .max(60, "Sender name must be 60 characters or fewer."),
  senderRole: z.enum(
    ["Tech Lead", "Recruiter / HR", "Fellow Developer", "Visitor"],
    {
      errorMap: () => ({ message: "Please select a valid role category." }),
    }
  ),
  contactChannel: z
    .string()
    .trim()
    .min(4, "Please provide a valid email or contact handle.")
    .max(100, "Contact handle is too long."),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(500, "Message must be 500 characters or fewer."),
});

export type ReviewerNoteInput = z.infer<typeof reviewerNoteSchema>;

export interface ReviewerNoteRecord extends ReviewerNoteInput {
  id: string;
  submittedAtIso: string;
}

/**
 * Validates filter queries applied to the tech stack section.
 */
export const stackFilterSchema = z.enum([
  "ALL",
  "Next.js",
  "Tailwind CSS",
  "Laravel",
  "Docker & CI/CD",
]);

export type StackFilterCategory = z.infer<typeof stackFilterSchema>;
