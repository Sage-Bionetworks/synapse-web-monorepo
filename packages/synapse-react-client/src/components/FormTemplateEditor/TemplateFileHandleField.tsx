import { DialogBase } from '@/components/DialogBase'
import {
  BasicFileHandleUpload,
  FileUploadHandle,
} from '@/components/file/upload/BasicFileHandleUpload'
import { FileHandleLink } from '@/components/widgets/FileHandleLink'
import {
  Close as RemoveIcon,
  UploadFile as UploadIcon,
} from '@mui/icons-material'
import {
  Alert,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import { FileHandleAssociateType } from '@sage-bionetworks/synapse-types'
import { useRef, useState } from 'react'

export type TemplateFileHandleFieldProps = {
  /** The slot's `templateFileHandleId`, if one is attached. */
  fileHandleId: string | undefined
  /**
   * The FormTemplate's id, used to build the download association. Undefined for a template
   * that has not been saved yet (a brand-new draft), in which case download is unavailable
   * until the first save.
   */
  formTemplateId: string | undefined
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
  formTemplateId,
  onChange,
}: TemplateFileHandleFieldProps) {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [validationError, setValidationError] = useState<string | null>(null)
  const uploadRef = useRef<FileUploadHandle | null>(null)

  return (
    <Box>
      <Typography variant="caption" color="text.secondary" component="div">
        Template file
      </Typography>
      <Stack direction="row" spacing={1} alignItems="center">
        {fileHandleId ? (
          <>
            {formTemplateId ? (
              <FileHandleLink
                fileHandleAssociation={{
                  fileHandleId,
                  // AccessRequirementAttachment is reused here as a stand-in; a FormTemplate is
                  // not itself an AccessRequirement, so this download may need a dedicated
                  // FileHandleAssociateType from the server once one exists.
                  associateObjectType:
                    FileHandleAssociateType.AccessRequirementAttachment,
                  associateObjectId: formTemplateId,
                }}
                showDownloadIcon
              />
            ) : (
              <Typography variant="body2" color="text.secondary">
                {/* TODO: Once the dedicated FileHandleAssociateType for FormTemplate exists, update this message to show the current file name and allow downloading the current file. */}
                Uploaded — save the template to enable download
              </Typography>
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
