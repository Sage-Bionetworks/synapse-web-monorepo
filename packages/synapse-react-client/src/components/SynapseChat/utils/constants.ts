/**
 * Maximum number of attachments on a single chat message. This is a product limit, below the
 * backend's limit of 20 attachments per agent session.
 */
export const MAX_AGENT_CHAT_ATTACHMENTS = 10

/** Maximum size, in bytes, of a single attachment. */
export const MAX_ATTACHMENT_FILE_SIZE_BYTES = 100 * 1024 * 1024

/**
 * Content types accepted for chat attachments, in the order they are listed to the user. By
 * product decision this is narrower than the backend, which also accepts JSON.
 */
export const APPROVED_ATTACHMENT_CONTENT_TYPES = [
  'application/pdf',
  'text/csv',
  'text/tab-separated-values',
  'text/plain',
] as const

export type ApprovedAttachmentContentType =
  (typeof APPROVED_ATTACHMENT_CONTENT_TYPES)[number]
