import CloseIcon from '@mui/icons-material/Close'
import { Box, IconButton, Tooltip, Typography } from '@mui/material'
import styles from './AttachmentChip.module.scss'

export type AttachmentChipStatus = 'default' | 'failed'

export type AttachmentChipProps = {
  /**
   * Display name for the attachment. For a pending/just-uploaded attachment this is the real
   * filename; for a restored/polled turn where file metadata isn't available, pass the
   * fileHandleId instead.
   */
  label: string
  /**
   * MIME content type, used to derive a short type label (e.g. "PDF"). Omit when the type is
   * unknown (e.g. a restored turn).
   */
  contentType?: string
  /**
   * @default 'default'
   */
  status?: AttachmentChipStatus
  /** Shown in a tooltip on the chip when `status` is 'failed'. */
  errorMessage?: string
  /** If provided, renders a remove ("x") button; invoked when clicked. */
  onRemove?: () => void
  /** Accessible label for the remove button. @default `Remove ${label}` */
  removeButtonLabel?: string
}

const CONTENT_TYPE_LABELS: Record<string, string> = {
  'application/pdf': 'PDF',
  'text/plain': 'TXT',
  'text/csv': 'CSV',
  'application/json': 'JSON',
  'text/tab-separated-values': 'TSV',
}

export function getContentTypeLabel(contentType?: string): string {
  if (!contentType) {
    return 'FILE'
  }
  return CONTENT_TYPE_LABELS[contentType] ?? 'FILE'
}

/**
 * Displays a single chat attachment as a chip with a filename and type label. Used both for
 * attachments still pending send (with a remove button) and for attachments on a sent/restored
 * chat turn (read-only, optionally showing a server-reported failure).
 */
export function AttachmentChip({
  label,
  contentType,
  status = 'default',
  errorMessage,
  onRemove,
  removeButtonLabel = `Remove ${label}`,
}: AttachmentChipProps) {
  const isFailed = status === 'failed'

  const chip = (
    <Box
      className={styles.chip}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        border: '1px solid',
        borderColor: isFailed ? 'error.main' : 'grey.300',
        borderRadius: '8px',
        boxShadow: '0px 1px 1px rgba(0,0,0,0.05)',
        p: '10px',
      }}
    >
      <Box sx={{ minWidth: 0, flex: 1 }}>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 700,
            fontSize: '14px',
            color: isFailed ? 'error.main' : 'grey.900',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: '12px', color: 'grey.600' }}
        >
          {isFailed ? 'Failed' : getContentTypeLabel(contentType)}
        </Typography>
      </Box>
      {onRemove && (
        <IconButton
          type="button"
          aria-label={removeButtonLabel}
          onClick={onRemove}
          size="small"
          className={styles.removeBadge}
          sx={{
            border: '1px solid',
            borderColor: 'grey.300',
            backgroundColor: 'white',
            width: '16px',
            height: '16px',
          }}
        >
          <CloseIcon sx={{ fontSize: '10px' }} />
        </IconButton>
      )}
    </Box>
  )

  if (isFailed && errorMessage) {
    return <Tooltip title={errorMessage}>{chip}</Tooltip>
  }
  return chip
}

export default AttachmentChip
