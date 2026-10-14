import { useListEDucTemplates } from '@/synapse-queries'
import {
  Alert,
  Autocomplete,
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material'
import { EDucTemplate } from '@sage-bionetworks/synapse-client'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import {
  FileHandleAssociateType,
  FileHandleAssociation,
  FileUploadComplete,
  ManagedACTAccessRequirement,
  UploadCallbackResp,
} from '@sage-bionetworks/synapse-types'
import { useEffect, useMemo, useState } from 'react'
import { UploadDocumentField } from '../AccessRequirementList/ManagedACTAccessRequirementRequestFlow/UploadDocumentField'
import { SynapseErrorBoundary } from '../error/ErrorBanner'

export const DUC_TEMPLATE_UPLOAD_ERROR =
  'There was an error uploading the DUC template. '

export type DataUseCertificateSettings = Pick<
  ManagedACTAccessRequirement,
  'id' | 'isDUCRequired' | 'ducTemplateFileHandleId' | 'eDucTemplateId'
>

export type DataUseCertificateFieldsProps = {
  accessRequirement: DataUseCertificateSettings
  /* Called with the settings that changed; the caller merges them into its copy of the AR. */
  onChange: (changes: Partial<DataUseCertificateSettings>) => void
  isLoading: boolean
}

export function DataUseCertificateFields(props: DataUseCertificateFieldsProps) {
  const { accessRequirement, onChange, isLoading } = props

  const [uploadDucTemplateError, setUploadDucTemplateError] = useState<
    string | null
  >(null)

  const ducTemplateFileHandleAssociation = useMemo(() => {
    if (accessRequirement.ducTemplateFileHandleId) {
      const ducTemplateFileHandleAssociation: FileHandleAssociation = {
        fileHandleId: accessRequirement.ducTemplateFileHandleId,
        associateObjectType:
          FileHandleAssociateType.AccessRequirementAttachment,
        associateObjectId: accessRequirement.id.toString(),
      }
      return ducTemplateFileHandleAssociation
    }
    return undefined
  }, [accessRequirement.ducTemplateFileHandleId, accessRequirement.id])

  const {
    data: eDucTemplateData,
    isLoading: isLoadingEDucTemplates,
    hasNextPage: hasNextEDucTemplatePage,
    fetchNextPage: fetchNextEDucTemplatePage,
  } = useListEDucTemplates()
  // Auto-fetch all pages so the dropdown always shows the complete template list.
  useEffect(() => {
    if (hasNextEDucTemplatePage) {
      void fetchNextEDucTemplatePage()
    }
  }, [hasNextEDucTemplatePage, fetchNextEDucTemplatePage])
  const eDucTemplates = useMemo(
    () => eDucTemplateData?.pages.flatMap(page => page.results ?? []) ?? [],
    [eDucTemplateData],
  )
  const selectedEDucTemplate = useMemo(
    () =>
      eDucTemplates.find(
        template => template.templateId === accessRequirement.eDucTemplateId,
      ) ?? null,
    [eDucTemplates, accessRequirement.eDucTemplateId],
  )

  const uploadDucTemplateCallback = (data: UploadCallbackResp) => {
    if (data.resp && data.success) {
      setUploadDucTemplateError(null)
      // Files are uploaded and synced with the server immediately
      const uploadResponse: FileUploadComplete = data.resp
      onChange({
        ducTemplateFileHandleId: uploadResponse.fileHandleId,
        eDucTemplateId: undefined, // mutually exclusive with file upload
      })
    } else if (!data.success && data.error) {
      setUploadDucTemplateError(
        `${DUC_TEMPLATE_UPLOAD_ERROR} ${
          (data.error as SynapseClientError).reason
        }`,
      )
    }
  }

  return (
    <>
      <Typography
        variant="body1"
        sx={{
          fontWeight: 700,
        }}
      >
        DUC
      </Typography>
      <FormControlLabel
        control={<Checkbox />}
        label="DUC is required."
        checked={accessRequirement.isDUCRequired}
        onChange={(_event, checked: boolean) =>
          onChange({ isDUCRequired: checked })
        }
      />
      <SynapseErrorBoundary>
        <UploadDocumentField
          id="duc"
          isLoading={isLoading}
          disabled={!accessRequirement.isDUCRequired}
          uploadCallback={resp => uploadDucTemplateCallback(resp)}
          documentName="Template DUC"
          fileHandleAssociations={
            ducTemplateFileHandleAssociation
              ? [ducTemplateFileHandleAssociation]
              : undefined
          }
          isMultiFileUpload={false}
          uploadBtnVariant="contained"
        />
        {uploadDucTemplateError && (
          <Alert severity="error" sx={{ marginTop: 2 }}>
            {uploadDucTemplateError}
          </Alert>
        )}
      </SynapseErrorBoundary>
      <Box sx={{ mt: 2 }}>
        <Autocomplete<EDucTemplate>
          id="eDucTemplate"
          options={eDucTemplates}
          loading={isLoadingEDucTemplates}
          disabled={!accessRequirement.isDUCRequired}
          value={selectedEDucTemplate}
          onChange={(_event, template) =>
            onChange({ eDucTemplateId: template?.templateId })
          }
          getOptionLabel={template => template.name ?? ''}
          isOptionEqualToValue={(option, value) =>
            option.templateId === value.templateId
          }
          renderInput={params => (
            <TextField
              {...params}
              label="eDUC template (electronic signing)"
              helperText="Optional. Select a DocuSign template to enable the eDUC signing flow for this Access Requirement."
            />
          )}
        />
      </Box>
    </>
  )
}
