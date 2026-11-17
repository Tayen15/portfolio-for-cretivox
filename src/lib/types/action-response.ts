/**
 * Standardized response contract for Next.js Server Actions.
 * Enforces explicit discrimination between success payloads and validation/runtime failures.
 */
export type ActionResponse<T> =
  | { success: true; data: T }
  | { success: false; error: string; code?: string };
