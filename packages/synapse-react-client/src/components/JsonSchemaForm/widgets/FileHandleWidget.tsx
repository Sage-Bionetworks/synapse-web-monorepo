import {
  CustomFormContext,
  FileHandleAssociateObject,
} from '@/components/JsonSchemaForm/CustomFormContext'
import { DialogBase } from '@/components/DialogBase'
import { BasicFileHandleUpload } from '@/components/file/upload/BasicFileHandleUpload'
import { FileHandleLink } from '@/components/widgets/FileHandleLink'
import {
  isFileHandleIdValue,
  TEMPLATE_FILE_HANDLE_ID_OPTION,
} from '@/utils/jsonschema/schemaData'
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
import { Widget, WidgetProps } from '@rjsf/utils'
import { FileHandleAssociation } from '@sage-bionetworks/synapse-types'
import { useState } from 'react'

/**
 * Widget for a property with the `synapse-filehandle-id` format: uploads, replaces, clears, and shows the file that
 * answers the question, and offers the field's template file for download.
 *
 * The answer is a file handle ID. The upload creates a file handle that only its creator can access until the request
 * that references it is saved, so the owner of the form decides how a file is downloaded through
 * {@link CustomFormContext.fileHandleWidget}.
 */
export const FileHandleWidget: Widget = (props: WidgetProps) => {
  const { id, label, value, onChange, disabled, readonly, options } = props
  const context = (props.registry.formContext as CustomFormContext)
    .fileHandleWidget
  const [dialogOpen, setDialogOpen] = useState(false)
  const [validationError, setValidationError] = useState<string | null>(null)

  const canEdit = !!context?.canEdit && !disabled && !readonly
  const templateFileHandleId = options[TEMPLATE_FILE_HANDLE_ID_OPTION]
  const answer = isFileHandleIdValue(value) ? String(value) : undefined

  function closeDialog() {
    setDialogOpen(false)
    setValidationError(null)
  }

  return (
    <Box id={id}>
      {typeof templateFileHandleId === 'string' && templateFileHandleId && (
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
          <Typography variant="caption" color="text.secondary">
            Template
          </Typography>
          <FileLink
            fileHandleId={templateFileHandleId}
            association={toAssociation(
              context?.templateObject,
              templateFileHandleId,
            )}
          />
        </Stack>
      )}
      <Stack direction="row" spacing={1} alignItems="center">
        {answer ? (
          <>
            <FileLink
              fileHandleId={answer}
              association={toAssociation(
                context?.answerFileHandleIds.includes(answer)
                  ? context.answerObject
                  : undefined,
                answer,
              )}
            />
            <IconButton
              size="small"
              disabled={!canEdit}
              onClick={() => onChange(undefined)}
              aria-label="Remove file"
            >
              <RemoveIcon fontSize="small" />
            </IconButton>
          </>
        ) : (
          <Typography variant="body2" color="text.secondary">
            No file uploaded
          </Typography>
        )}
        <Button
          size="small"
          startIcon={<UploadIcon fontSize="small" />}
          disabled={!canEdit}
          onClick={() => setDialogOpen(true)}
        >
          {answer ? 'Replace' : 'Upload'}
        </Button>
      </Stack>
      <DialogBase
        open={dialogOpen}
        onCancel={closeDialog}
        title={`Upload ${label || 'file'}`}
        maxWidth="sm"
        content={
          <>
            <BasicFileHandleUpload
              allowMultipleUpload={false}
              disableDragAndDrop={true}
              onValidationError={setValidationError}
              onFileUploadComplete={newFileHandleId => {
                onChange(newFileHandleId)
                closeDialog()
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
          <Button variant="outlined" onClick={closeDialog}>
            Cancel
          </Button>
        }
      />
    </Box>
  )
}

function toAssociation(
  object: FileHandleAssociateObject | undefined,
  fileHandleId: string,
): FileHandleAssociation | undefined {
  return object ? { fileHandleId, ...object } : undefined
}

function FileLink(props: {
  fileHandleId: string
  association: FileHandleAssociation | undefined
}) {
  const { fileHandleId, association } = props
  return association ? (
    <FileHandleLink fileHandleAssociation={association} showDownloadIcon />
  ) : (
    <FileHandleLink creatorFileHandleId={fileHandleId} showDownloadIcon />
  )
}
