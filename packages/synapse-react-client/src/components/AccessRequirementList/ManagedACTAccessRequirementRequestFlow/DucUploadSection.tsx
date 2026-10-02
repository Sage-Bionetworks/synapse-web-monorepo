import { Typography } from '@mui/material'
import {
  FileHandleAssociateType,
  FileHandleAssociation,
  UploadCallbackResp,
} from '@sage-bionetworks/synapse-types'
import { SynapseErrorBoundary } from '../../error/ErrorBanner'
import DocumentTemplate from './DocumentTemplate'
import { AccessorStepAccessRequirement } from './requestFlowTypes'
import { longFieldLabelSx } from './styles'
import { UploadDocumentField } from './UploadDocumentField'

export type DucUploadSectionProps = {
  accessRequirement: AccessorStepAccessRequirement
  isLoading: boolean
  uploadedDucAssociations: FileHandleAssociation[]
  onUpload: (response: UploadCallbackResp) => void
}

/**
 * Lets the user download the DUC template of a non-eDUC access requirement and upload the completed certificate.
 */
export default function DucUploadSection(props: DucUploadSectionProps) {
  const { accessRequirement, isLoading, uploadedDucAssociations, onUpload } =
    props
  return (
    <>
      {accessRequirement.ducTemplateFileHandleId && (
        <DocumentTemplate
          title={'Download DUC Template'}
          description={
            'As a first step, you will need to download the most current version of the Data Use Certificate.'
          }
          fileHandleAssociation={{
            fileHandleId: accessRequirement.ducTemplateFileHandleId,
            associateObjectType:
              FileHandleAssociateType.AccessRequirementAttachment,
            associateObjectId: String(accessRequirement.id),
          }}
          downloadButtonText={'Download DUC Template'}
        />
      )}
      <Typography variant={'headline3'} sx={{ mt: 4, mb: 2 }}>
        Fill out and upload a Data Use Certificate
      </Typography>
      <Typography variant={'body1'} sx={{ ...longFieldLabelSx, my: 2 }}>
        You must download and fill out a Data Use Certificate (DUC). Be sure to
        upload the completed DUC below once you&apos;ve completed it.
      </Typography>
      <Typography variant={'body1'} component={'ol'} sx={longFieldLabelSx}>
        <li>Download the DUC template file.</li>
        <li>
          Fill out the DUC template, following the instructions in the file.
        </li>
        <li>Upload the completed certificate using the button below:</li>
      </Typography>
      <SynapseErrorBoundary>
        <UploadDocumentField
          id={'duc'}
          isLoading={isLoading}
          uploadCallback={onUpload}
          documentName={'Data Use Certificate'}
          fileHandleAssociations={uploadedDucAssociations}
        />
      </SynapseErrorBoundary>
    </>
  )
}
