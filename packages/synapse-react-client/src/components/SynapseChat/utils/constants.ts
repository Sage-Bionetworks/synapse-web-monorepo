/** Maximum number of attachments allowed on a single AgentChatRequest. */
export const MAX_AGENT_CHAT_ATTACHMENTS = 10

/** Maximum size, in bytes, of a single attachment. */
export const MAX_ATTACHMENT_FILE_SIZE_BYTES = 100 * 1024 * 1024

/** Content types accepted for chat attachments, in the order they are listed to the user. */
export const APPROVED_ATTACHMENT_CONTENT_TYPES = [
  'application/pdf',
  'text/csv',
  'text/tab-separated-values',
  'text/plain',
] as const

export type ApprovedAttachmentContentType =
  (typeof APPROVED_ATTACHMENT_CONTENT_TYPES)[number]
