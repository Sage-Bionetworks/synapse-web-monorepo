import { Box, Divider, TextField, Typography } from '@mui/material'
import {
  FileHandleAssociateType,
  FileHandleAssociation,
  Renewal,
  Request,
  UploadCallbackResp,
} from '@sage-bionetworks/synapse-types'
import AccessorRequirementHelpText from '../ManagedACTAccessRequirementRequestFlow/AccessorRequirementHelpText'
import DataAccessRequestAccessorsEditor from '../ManagedACTAccessRequirementRequestFlow/DataAccessRequestAccessorsEditor'
import { EDUC_COLLABORATOR_LIMIT } from '../ManagedACTAccessRequirementRequestFlow/DataAccessRequestAccessorsFilesForm/DataAccessRequestAccessorsFilesForm'
import DucUploadSection from '../ManagedACTAccessRequirementRequestFlow/DucUploadSection'
import PrincipalInvestigatorFields from '../ManagedACTAccessRequirementRequestFlow/PrincipalInvestigatorFields'
import { AccessorStepAccessRequirement } from '../ManagedACTAccessRequirementRequestFlow/requestFlowTypes'
import SigningOfficialFields from '../ManagedACTAccessRequirementRequestFlow/SigningOfficialFields'
import { FirstClassFieldValues, isRenewalRequest } from './firstClassFields'

export type FirstClassFieldsProps = {
  accessRequirement: AccessorStepAccessRequirement
  request: Request | Renewal
  values: FirstClassFieldValues
  onChange: (changes: Partial<FirstClassFieldValues>) => void
  disabled: boolean
  isLoading: boolean
  onDucUpload: (response: UploadCallbackResp) => void
}

/**
 * The always-present questions of a JsonSchemaAccessRequirement request: who is requesting access, the eDUC
 * participants, and the DUC when it is uploaded rather than signed electronically.
 */
export default function FirstClassFields(props: FirstClassFieldsProps) {
  const {
    accessRequirement,
    request,
    values,
    onChange,
    disabled,
    isLoading,
    onDucUpload,
  } = props
  const isEDucEnabled = Boolean(accessRequirement.eDucTemplateId)
  const isRenewal = isRenewalRequest(request)
  const uploadedDucAssociations: FileHandleAssociation[] =
    request.ducFileHandleId
      ? [
          {
            fileHandleId: request.ducFileHandleId,
            associateObjectType:
              FileHandleAssociateType.DataAccessRequestAttachment,
            associateObjectId: String(request.id),
          },
        ]
      : []

  return (
    <Box
      component={'form'}
      // Must set a minHeight to ensure the user picker in the DataAccessRequestAccessorsEditor doesn't get cut off
      sx={{ minHeight: '475px' }}
      onSubmit={e => e.preventDefault()}
    >
      <Typography variant={'body1'} sx={{ mb: 2, fontSize: '16px' }}>
        Please provide the information below to submit the request for access.
      </Typography>
      {isEDucEnabled && (
        <>
          <TextField
            id="institution"
            label="Your Institution"
            placeholder="Full, unabbreviated name of the institution you are affiliated with"
            fullWidth
            disabled={disabled}
            value={values.institution}
            required
            onChange={e => onChange({ institution: e.target.value })}
            sx={{ mb: 2.5 }}
          />
          <TextField
            id="pi-name"
            label="First and last names of your Project Lead or PI"
            placeholder="First and last name of individual leading the project, ex: Jane Smith"
            fullWidth
            disabled={disabled}
            value={values.piName}
            required
            onChange={e => onChange({ piName: e.target.value })}
            sx={{ mb: 2.5 }}
          />
          <PrincipalInvestigatorFields
            userId={values.piUserId}
            email={values.piEmail}
            disabled={disabled}
            onUserIdChange={piUserId => onChange({ piUserId })}
            onEmailChange={piEmail => onChange({ piEmail })}
          />
          <SigningOfficialFields
            name={values.signingOfficialName}
            email={values.signingOfficialEmail}
            disabled={disabled}
            onNameChange={signingOfficialName =>
              onChange({ signingOfficialName })
            }
            onEmailChange={signingOfficialEmail =>
              onChange({ signingOfficialEmail })
            }
          />
        </>
      )}
      <DataAccessRequestAccessorsEditor
        accessorChanges={values.accessorChanges}
        onChange={updater =>
          onChange({ accessorChanges: [...updater(values.accessorChanges)] })
        }
        isRenewal={isRenewal}
        collaboratorLimit={isEDucEnabled ? EDUC_COLLABORATOR_LIMIT : undefined}
        helpText={
          <AccessorRequirementHelpText
            accessRequirement={accessRequirement}
            isEDucEnabled={isEDucEnabled}
          />
        }
      />
      {accessRequirement.isDUCRequired && !isEDucEnabled && (
        <>
          <Divider sx={{ my: 4 }} />
          <DucUploadSection
            accessRequirement={accessRequirement}
            isLoading={isLoading}
            uploadedDucAssociations={uploadedDucAssociations}
            onUpload={onDucUpload}
          />
        </>
      )}
    </Box>
  )
}
