import TemplateDownloadBar from '@/components/AccessRequirementList/ManagedACTAccessRequirementRequestFlow/TemplateDownloadBar'
import { UploadDocumentField } from '@/components/AccessRequirementList/ManagedACTAccessRequirementRequestFlow/UploadDocumentField'
import {
  CustomFormContext,
  FileHandleAssociateObject,
} from '@/components/JsonSchemaForm/CustomFormContext'
import { FileHandleLink } from '@/components/widgets/FileHandleLink'
import {
  isFileHandleIdValue,
  TEMPLATE_FILE_HANDLE_ID_OPTION,
} from '@/utils/jsonschema/schemaData'
import RemoveIcon from '@mui/icons-material/Close'
import { Alert, Box, IconButton, Stack, Typography } from '@mui/material'
import { Widget, WidgetProps } from '@rjsf/utils'
import {
  FileHandleAssociation,
  UploadCallbackResp,
} from '@sage-bionetworks/synapse-types'
import { useState } from 'react'

/**
 * Widget for a property with the `synapse-filehandle-id` format: uploads, replaces, clears, and shows the file that
 * answers the question, and offers the field's template file for download. The upload and the download of the file
 * are those of the ManagedACT request flow.
 *
 * The answer is a file handle ID. The upload creates a file handle that only its creator can access until the request
 * that references it is saved, so the owner of the form decides how a file is downloaded through
 * {@link CustomFormContext.fileHandleWidget}.
 */
export const FileHandleWidget: Widget = (props: WidgetProps) => {
  const { id, label, onChange, disabled, readonly, options } = props
  const value: unknown = props.value
  const context = (props.registry.formContext as CustomFormContext)
    .fileHandleWidget
  const [uploadError, setUploadError] = useState<string>()

  const canEdit = !!context?.canEdit && !disabled && !readonly
  const templateFileHandleId: unknown = options[TEMPLATE_FILE_HANDLE_ID_OPTION]
  const answer = isFileHandleIdValue(value) ? String(value) : undefined
  const answerAssociation = toAssociation(
    context?.answerFileHandleIds.includes(answer ?? '')
      ? context?.answerObject
      : undefined,
    answer,
  )

  function onUploadComplete(response: UploadCallbackResp) {
    if (response.success && response.resp) {
      setUploadError(undefined)
      onChange(response.resp.fileHandleId)
    } else {
      // The other answers of the step are not touched
      setUploadError(
        (response.error as { reason?: string } | undefined)?.reason ??
          'The file could not be uploaded.',
      )
    }
  }

  return (
    <Box id={id}>
      {typeof templateFileHandleId === 'string' && templateFileHandleId && (
        <TemplateDownloadBar
          button={
            <FileLink
              fileHandleId={templateFileHandleId}
              association={toAssociation(
                context?.templateObject,
                templateFileHandleId,
              )}
              buttonLabel="Download Template"
            />
          }
        >
          <Typography variant="body1">
            Download the template, complete it, and upload the completed file.
          </Typography>
        </TemplateDownloadBar>
      )}
      <UploadDocumentField
        id={`${id}-upload`}
        documentName={label || 'file'}
        uploadCallback={onUploadComplete}
        onUploadingChange={isUploading =>
          context?.onUploadingChange?.(id, isUploading)
        }
        fileHandleAssociations={answerAssociation ? [answerAssociation] : []}
        onClearAttachment={canEdit ? () => onChange(undefined) : undefined}
        disabled={!canEdit}
      />
      {answer && !answerAssociation && (
        // The request does not list the file yet, so only the user who uploaded it can download it
        <Stack direction="row" alignItems="center">
          <FileLink fileHandleId={answer} association={undefined} />
          <IconButton
            size="small"
            disabled={!canEdit}
            onClick={() => onChange(undefined)}
            aria-label="Remove file"
          >
            <RemoveIcon fontSize="small" />
          </IconButton>
        </Stack>
      )}
      {uploadError && <Alert severity="error">{uploadError}</Alert>}
    </Box>
  )
}

function toAssociation(
  object: FileHandleAssociateObject | undefined,
  fileHandleId: string | undefined,
): FileHandleAssociation | undefined {
  return object && fileHandleId ? { fileHandleId, ...object } : undefined
}

function FileLink(props: {
  fileHandleId: string
  association: FileHandleAssociation | undefined
  /** If set, the link is an outlined button with this label. */
  buttonLabel?: string
}) {
  const { fileHandleId, association, buttonLabel } = props
  const buttonProps = buttonLabel
    ? { buttonVariant: 'outlined' as const, displayValue: buttonLabel }
    : {}
  return association ? (
    <FileHandleLink
      fileHandleAssociation={association}
      showDownloadIcon
      {...buttonProps}
    />
  ) : (
    <FileHandleLink
      creatorFileHandleId={fileHandleId}
      showDownloadIcon
      {...buttonProps}
    />
  )
}
