import {
  APPROVED_ATTACHMENT_CONTENT_TYPES,
  MAX_AGENT_CHAT_ATTACHMENTS,
  MAX_ATTACHMENT_FILE_SIZE_BYTES,
} from './constants'

const CONTENT_TYPE_LABELS: Record<string, string> = {
  'application/pdf': 'PDF',
  'text/plain': 'TXT',
  'text/csv': 'CSV',
  'application/json': 'JSON',
  'text/tab-separated-values': 'TSV',
}

/** A short label for an attachment's MIME type, e.g. "PDF". Unknown or missing types are "FILE". */
export function getContentTypeLabel(contentType?: string): string {
  if (!contentType) {
    return 'FILE'
  }
  return CONTENT_TYPE_LABELS[contentType] ?? 'FILE'
}

export const MAX_ATTACHMENT_FILE_SIZE_MB = Math.round(
  MAX_ATTACHMENT_FILE_SIZE_BYTES / (1024 * 1024),
)

export const ALLOWED_FILE_TYPES_LABEL = APPROVED_ATTACHMENT_CONTENT_TYPES.map(
  contentType => getContentTypeLabel(contentType).toLowerCase(),
).join(', ')

export const ATTACHMENT_COUNT_AND_SIZE_LIMIT_LABEL = `${MAX_AGENT_CHAT_ATTACHMENTS} files maximum, up to ${MAX_ATTACHMENT_FILE_SIZE_MB} MB per file`
