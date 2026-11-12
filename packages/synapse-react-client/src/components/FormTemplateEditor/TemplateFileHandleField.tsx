import { DialogBase } from '@/components/DialogBase'
import {
  BasicFileHandleUpload,
  FileUploadHandle,
} from '@/components/file/upload/BasicFileHandleUpload'
import { FileHandleLink } from '@/components/widgets/FileHandleLink'
import RemoveIcon from '@mui/icons-material/Close'
import UploadIcon from '@mui/icons-material/UploadFile'
import {
  Alert,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import { FormTemplate } from '@sage-bionetworks/synapse-client'
import { FileHandleAssociation } from '@sage-bionetworks/synapse-types'
import { useMemo, useRef, useState } from 'react'
import { getTemplateDocumentAssociation } from './utils'

export type TemplateFileHandleFieldProps = {
  /** The slot's `templateFileHandleId`, if one is attached. */
  fileHandleId: string | undefined
  /**
   * The saved version of the template, if any. A file that it lists in its attachments is
   * downloaded through it; any other file (e.g. one uploaded since the last save) is
   * downloaded directly as a file handle the current user uploaded.
   */
  savedTemplate: FormTemplate | undefined
  onChange: (fileHandleId: string | undefined) => void
}

/**
 * Upload/download control for a file field's optional template attachment
 * (`FormTemplateField.templateFileHandleId`) — e.g. a fillable document requesters must
 * download, complete, and re-upload to answer this slot. Uploads immediately via
 * `BasicFileHandleUpload` in a dialog; download reuses `FileHandleLink`.
 */
export function TemplateFileHandleField({
  fileHandleId,
  savedTemplate,
  onChange,
}: TemplateFileHandleFieldProps) {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [validationError, setValidationError] = useState<string | null>(null)
  const uploadRef = useRef<FileUploadHandle | null>(null)
  // FileHandleLink refetches whenever the association's identity changes.
  const fileHandleAssociation = useMemo<FileHandleAssociation | undefined>(
    () =>
      fileHandleId
        ? getTemplateDocumentAssociation(savedTemplate, fileHandleId)
        : undefined,
    [fileHandleId, savedTemplate],
  )

  return (
    <Box>
      <Typography variant="caption" color="text.secondary" component="div">
        Template file
      </Typography>
      <Stack direction="row" spacing={1} alignItems="center">
        {fileHandleId ? (
          <>
            {/* A file that no saved version lists yet is one that the current user uploaded, so it is downloaded directly. */}
            {fileHandleAssociation ? (
              <FileHandleLink
                fileHandleAssociation={fileHandleAssociation}
                showDownloadIcon
              />
            ) : (
              <FileHandleLink
                creatorFileHandleId={fileHandleId}
                showDownloadIcon
              />
            )}
            <IconButton
              size="small"
              onClick={() => onChange(undefined)}
              aria-label="Remove template file"
            >
              <RemoveIcon fontSize="small" />
            </IconButton>
          </>
        ) : (
          <Typography variant="body2" color="text.secondary">
            None
          </Typography>
        )}
        <Button
          size="small"
          startIcon={<UploadIcon fontSize="small" />}
          onClick={() => setDialogOpen(true)}
        >
          {fileHandleId ? 'Replace' : 'Upload'}
        </Button>
      </Stack>

      <DialogBase
        open={dialogOpen}
        onCancel={() => setDialogOpen(false)}
        title="Upload template file"
        maxWidth="sm"
        content={
          <>
            <BasicFileHandleUpload
              ref={uploadRef}
              allowMultipleUpload={false}
              disableDragAndDrop={true}
              onValidationError={setValidationError}
              onFileUploadComplete={newFileHandleId => {
                onChange(newFileHandleId)
                setDialogOpen(false)
              }}
            />
            {validationError && (
              <Alert severity="error" sx={{ mt: 2 }}>
                {validationError}
              </Alert>
            )}
          </>
        }
        actions={
          <Button variant="outlined" onClick={() => setDialogOpen(false)}>
            Cancel
          </Button>
        }
      />
    </Box>
  )
}
