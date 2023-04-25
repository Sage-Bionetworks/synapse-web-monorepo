import React, { useState } from 'react'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'
import useGetInfoFromIds, {
  UseGetInfoFromIdsProps,
} from '../../utils/hooks/useGetInfoFromIds'
import {
  EntityHeader,
  ManagedACTAccessRequirement,
  Renewal,
  Request,
} from '../../utils/synapseTypes'
import { AccessRequirement } from '../../utils/synapseTypes/AccessRequirement/AccessRequirement'
import IconSvg from '../IconSvg'
import StandaloneLoginForm from '../auth/StandaloneLoginForm'
import CancelRequestDataAccess from './managedACTAccess/CancelRequestDataAccess'
import RequestDataAccessStep1 from './managedACTAccess/RequestDataAccessStep1'
import RequestDataAccessStep2 from './managedACTAccess/RequestDataAccessStep2'
import RequestDataAccessSuccess from './managedACTAccess/RequestDataAccessSuccess'
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Link,
  Stack,
  styled,
  Typography,
  TypographyProps,
} from '@mui/material'
import AuthenticatedRequirement from './AuthenticatedRequirement'
import CertificationRequirement from './CertificationRequirement'
import ValidationRequirement from './ValidationRequirement'
import { StyledComponent } from '@emotion/styled'
import {
  useGetAccessRequirementsForEntity,
  useSortAccessRequirementIdsByCompletion,
} from '../../utils/hooks/SynapseAPI'
import TwoFactorAuthEnabledRequirement from './TwoFactorAuthEnabledRequirement'
import { AccessRequirementListItem } from './AccessRequirementListItem'
import { useSynapseContext } from '../../utils/SynapseContext'

export type AccessRequirementListProps = {
  entityId: string // will show this entity info
  accessRequirementFromProps?: Array<AccessRequirement>
  onHide: () => void
  renderAsModal?: boolean
  numberOfFilesAffected?: number // if provided, will show this instead of the entity information
}

export type RequestDataStepCallbackArgs = {
  managedACTAccessRequirement?: ManagedACTAccessRequirement
  step: number
  researchProjectId?: string
  dataAccessRequest?: Request | Renewal
}

export enum SUPPORTED_ACCESS_REQUIREMENTS {
  SelfSignAccessRequirement = 'org.sagebionetworks.repo.model.SelfSignAccessRequirement',
  TermsOfUseAccessRequirement = 'org.sagebionetworks.repo.model.TermsOfUseAccessRequirement',
  ManagedACTAccessRequirement = 'org.sagebionetworks.repo.model.ManagedACTAccessRequirement',
  ACTAccessRequirement = 'org.sagebionetworks.repo.model.ACTAccessRequirement',
}

const DialogSubsectionHeader: StyledComponent<TypographyProps> = styled(
  Typography,
  {
    label: 'DialogSubsectionHeader',
  },
)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(2),
  paddingBottom: theme.spacing(1),
  fontSize: '18px',
  fontWeight: 'bold',
  borderBottom: '1px solid',
  borderColor: theme.palette.grey['200'],
}))
DialogSubsectionHeader.defaultProps = {
  ...DialogSubsectionHeader.defaultProps,
  variant: 'h4',
}

export const checkHasUnsupportedRequirement = (
  accessRequirements: Array<AccessRequirement>,
): boolean => {
  return accessRequirements.filter(isARUnsupported).length > 0
}

const isARUnsupported = (accessRequirement: AccessRequirement) => {
  switch (accessRequirement.concreteType) {
    case SUPPORTED_ACCESS_REQUIREMENTS.ACTAccessRequirement:
    case SUPPORTED_ACCESS_REQUIREMENTS.ManagedACTAccessRequirement:
    case SUPPORTED_ACCESS_REQUIREMENTS.TermsOfUseAccessRequirement:
    case SUPPORTED_ACCESS_REQUIREMENTS.SelfSignAccessRequirement:
      return false
    default:
      return true
  }
}

/**
 * The AccessRequirementList component renders a set of {@link AccessRequirement}s (either pre-defined, or those applied
 * to an entity, based on provided props).
 *
 * The component shows the user the approval status of each AR and provides a workflow for accepting the terms of or
 * creating a submission for any of the Access Requirements.
 */
export default function AccessRequirementList(
  props: AccessRequirementListProps,
) {
  const {
    entityId,
    onHide,
    accessRequirementFromProps,
    renderAsModal,
    numberOfFilesAffected,
  } = props
  const { accessToken } = useSynapseContext()
  const isSignedIn = !!accessToken
  const [requestDataStep, setRequestDataStep] = useState<number>()
  const [managedACTAccessRequirement, setManagedACTAccessRequirement] =
    useState<ManagedACTAccessRequirement>()
  const [researchProjectId, setResearchProjectId] = useState<string>('')
  const [dataAccessRequest, setDataAccessRequest] = useState<
    Request | Renewal | undefined
  >()

  const entityHeaderProps: UseGetInfoFromIdsProps = {
    ids: [entityId],
    type: 'ENTITY_HEADER',
  }

  const entityInformation = useGetInfoFromIds<EntityHeader>(entityHeaderProps)

  const { data: fetchedRequirements } = useGetAccessRequirementsForEntity(
    entityId,
    {
      enabled: Boolean(!accessRequirementFromProps && entityId),
    },
  )

  const accessRequirements = accessRequirementFromProps ?? fetchedRequirements

  const { data: sortedAccessRequirementIds } =
    useSortAccessRequirementIdsByCompletion(
      (accessRequirements ?? []).map(ar => String(ar.id)),
      {
        enabled: !!accessRequirements,
        // Set the stale time to infinity because we don't want to refetch this and change the order
        staleTime: Infinity,
      },
    )

  const requestDataStepCallback = (props: RequestDataStepCallbackArgs) => {
    const {
      managedACTAccessRequirement,
      step,
      researchProjectId,
      dataAccessRequest: newDataAccessRequest,
    } = props
    if (managedACTAccessRequirement) {
      // required for step 1, 2 form
      setManagedACTAccessRequirement(managedACTAccessRequirement)
    }
    if (researchProjectId) {
      setResearchProjectId(researchProjectId)
    }
    if (newDataAccessRequest) {
      setDataAccessRequest(newDataAccessRequest)
    }
    setRequestDataStep(step)
  }

  const anyARsRequireTwoFactorAuth = accessRequirements?.some(
    accessRequirement =>
      accessRequirement.concreteType ===
        'org.sagebionetworks.repo.model.ManagedACTAccessRequirement' &&
      accessRequirement.isTwoFaRequired,
  )

  const anyARsRequireCertification = accessRequirements?.some(
    accessRequirement =>
      (accessRequirement.concreteType ===
        'org.sagebionetworks.repo.model.ManagedACTAccessRequirement' ||
        accessRequirement.concreteType ===
          'org.sagebionetworks.repo.model.SelfSignAccessRequirement') &&
      accessRequirement.isCertifiedUserRequired,
  )

  const anyARsRequireProfileValidation = accessRequirements?.some(
    accessRequirement =>
      (accessRequirement.concreteType ===
        'org.sagebionetworks.repo.model.ManagedACTAccessRequirement' ||
        accessRequirement.concreteType ===
          'org.sagebionetworks.repo.model.SelfSignAccessRequirement') &&
      accessRequirement.isValidatedProfileRequired,
  )

  const content = (
    <>
      <DialogTitle>
        <Stack direction="row" alignItems={'center'} gap={'5px'}>
          Data Access Request
          <Box sx={{ flexGrow: 1 }} />
          <IconButton onClick={onHide}>
            <IconSvg icon={'close'} wrap={false} sx={{ color: 'grey.700' }} />
          </IconButton>
        </Stack>
      </DialogTitle>

      <DialogContent>
        <div>
          <DialogSubsectionHeader sx={{ mt: 0 }}>
            Access For:
          </DialogSubsectionHeader>
          <Typography variant={'body1'} component={'span'}>
            <IconSvg icon="file" sx={{ width: '30px' }} />{' '}
            {numberOfFilesAffected ? (
              `${numberOfFilesAffected} File(s)`
            ) : (
              <Link
                href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Synapse:${entityId}`}
              >
                {entityInformation[0]?.name}
              </Link>
            )}
          </Typography>
          <DialogSubsectionHeader>What do I need to do?</DialogSubsectionHeader>
          <AuthenticatedRequirement />
          {anyARsRequireCertification && <CertificationRequirement />}
          {anyARsRequireProfileValidation && <ValidationRequirement />}
          {anyARsRequireTwoFactorAuth && <TwoFactorAuthEnabledRequirement />}
          {sortedAccessRequirementIds
            ?.map(id => accessRequirements!.find(ar => id === String(ar.id))!)
            ?.map(accessRequirement => {
              return (
                <React.Fragment key={accessRequirement.id}>
                  <AccessRequirementListItem
                    accessRequirement={accessRequirement}
                    entityId={entityId}
                    onHide={onHide}
                    onRequestAccess={accessRequirement => {
                      const nextStep = isSignedIn ? 1 : 4
                      requestDataStepCallback({
                        managedACTAccessRequirement: accessRequirement,
                        step: nextStep,
                      })
                    }}
                  />
                </React.Fragment>
              )
            })}
        </div>
      </DialogContent>
    </>
  )

  let renderContent = content
  if (renderAsModal) {
    switch (requestDataStep) {
      case 1:
        renderContent = (
          <RequestDataAccessStep1
            managedACTAccessRequirement={managedACTAccessRequirement!}
            onSave={researchProject => {
              requestDataStepCallback({
                managedACTAccessRequirement,
                step: 2,
                researchProjectId: researchProject.id,
              })
            }}
            onHide={onHide}
          />
        )
        break
      case 2:
        renderContent = (
          <RequestDataAccessStep2
            researchProjectId={researchProjectId}
            managedACTAccessRequirement={managedACTAccessRequirement!}
            entityId={entityId} // for form submission after save
            onHide={onHide}
            onCancel={dataAccessRequestInProgress => {
              requestDataStepCallback({
                step: 3,
                dataAccessRequest: dataAccessRequestInProgress,
              })
            }}
            onSubmissionCreated={() => {
              requestDataStepCallback({ step: 5 })
            }}
          />
        )
        break
      case 3:
        renderContent = (
          <CancelRequestDataAccess
            modifiedDataAccessRequest={dataAccessRequest}
            onHide={onHide} // for closing dialogs
          />
        )
        break
      case 4:
        renderContent = (
          <>
            <DialogTitle>Please Log In</DialogTitle>
            <DialogContent className={'AccessRequirementList login-modal '}>
              <StandaloneLoginForm
                sessionCallback={() => {
                  window.location.reload()
                }}
              />
            </DialogContent>
          </>
        )
        break
      case 5:
        renderContent = <RequestDataAccessSuccess onHide={onHide} />
        break
      default:
        renderContent = content
    }
    return (
      <Dialog
        className={'AccessRequirementList'}
        onClose={onHide}
        open={true}
        fullWidth
        maxWidth="md"
      >
        {renderContent}
      </Dialog>
    )
  }
  return <Box className="AccessRequirementList">{renderContent}</Box>
}
