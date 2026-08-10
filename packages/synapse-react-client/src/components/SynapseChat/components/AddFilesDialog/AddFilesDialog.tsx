import {
  BasicFileHandleUpload,
  FileUploadHandle,
} from '@/components/file/upload/BasicFileHandleUpload'
import { UploaderState } from '@/utils/hooks/useUploadFileEntity/useUploadFiles'
import { Alert, Button, Typography } from '@mui/material'
import { useRef, useState } from 'react'
import { DialogBase } from '@/components/DialogBase'
import { getContentTypeLabel } from '../AttachmentChip/AttachmentChip'
import {
  APPROVED_ATTACHMENT_CONTENT_TYPES,
  MAX_AGENT_CHAT_ATTACHMENTS,
  MAX_ATTACHMENT_FILE_SIZE_BYTES,
} from '../../utils/constants'
import { ChatAttachment } from '../../utils/types'

const MAX_FILE_SIZE_MB = Math.round(
  MAX_ATTACHMENT_FILE_SIZE_BYTES / (1024 * 1024),
)

export const ALLOWED_FILE_TYPES_LABEL = APPROVED_ATTACHMENT_CONTENT_TYPES.map(
  contentType => getContentTypeLabel(contentType).toLowerCase(),
).join(', ')

export type AddFilesDialogProps = {
  open: boolean
  /**
   * Invoked when the dialog should close (Cancel, Done, backdrop click, or the close button).
   * Attachments that finished uploading while the dialog was open remain attached -- both
   * buttons close the dialog the same way; removing an attachment is done via its chip's own
   * remove control in the strip, not through this dialog.
   */
  onClose: () => void
  /** The number of attachments already attached, used to enforce the max attachment count cumulatively. */
  currentAttachmentCount: number
  /** Invoked once per file, in upload-completion order, as each upload finishes. */
  onAttachmentUploaded: (attachment: ChatAttachment) => void
  /** Invoked whenever the uploader's state changes, so the caller can disable Send while uploading. */
  onUploadStateChange?: (state: UploaderState) => void
}

/**
 * Modal for attaching local files to a Curie chat message. Files are uploaded immediately on
 * selection (see BasicFileHandleUpload); this dialog is a thin wrapper that applies the chat
 * attachment limits and surfaces validation errors inline.
 */
export function AddFilesDialog({
  open,
  onClose,
  currentAttachmentCount,
  onAttachmentUploaded,
  onUploadStateChange,
}: AddFilesDialogProps) {
  const [validationError, setValidationError] = useState<string | null>(null)
  const uploadRef = useRef<FileUploadHandle | null>(null)

  return (
    <DialogBase
      open={open}
      onCancel={onClose}
      title="Add files"
      maxWidth="sm"
      content={
        <>
          <BasicFileHandleUpload
            ref={uploadRef}
            allowMultipleUpload={true}
            disableFolderUpload={true}
            disableDragAndDrop={true}
            acceptedContentTypes={APPROVED_ATTACHMENT_CONTENT_TYPES}
            maxFileSizeBytes={MAX_ATTACHMENT_FILE_SIZE_BYTES}
            maxFiles={MAX_AGENT_CHAT_ATTACHMENTS}
            currentFileCount={currentAttachmentCount}
            onValidationError={setValidationError}
            onStateChange={onUploadStateChange}
            onFileUploadComplete={(fileHandleId, file) => {
              onAttachmentUploaded({
                fileHandleId,
                fileName: file.name,
                contentType: file.type,
                sizeBytes: file.size,
              })
            }}
          />
          <Typography sx={{ fontWeight: 700, mt: 2 }}>Limitations</Typography>
          <Typography component="ul" sx={{ pl: 3, m: 0 }}>
            <li>
              {MAX_AGENT_CHAT_ATTACHMENTS} files maximum, up to{' '}
              {MAX_FILE_SIZE_MB} MB per file
            </li>
            <li>Allowed file types: {ALLOWED_FILE_TYPES_LABEL}</li>
          </Typography>
          {validationError && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {validationError}
            </Alert>
          )}
        </>
      }
      actions={
        <>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={onClose}>
            Done
          </Button>
        </>
      }
    />
  )
}

export default AddFilesDialog
