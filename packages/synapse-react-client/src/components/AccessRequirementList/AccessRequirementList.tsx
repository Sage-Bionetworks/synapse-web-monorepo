import React, { useMemo, useState } from 'react'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'
import useGetInfoFromIds, {
  UseGetInfoFromIdsProps,
} from '../../utils/hooks/useGetInfoFromIds'
import {
  AccessRequirement,
  EntityHeader,
  ManagedACTAccessRequirement,
  Renewal,
  Request,
} from '@sage-bionetworks/synapse-types'
import IconSvg from '../IconSvg/IconSvg'
import StandaloneLoginForm from '../Authentication/StandaloneLoginForm'
import CancelRequestDataAccess from './ManagedACTAccessRequirementRequestFlow/CancelRequestDataAccess'
import ResearchProjectForm from './ManagedACTAccessRequirementRequestFlow/ResearchProjectForm'
import DataAccessRequestAccessorsFilesForm from './ManagedACTAccessRequirementRequestFlow/DataAccessRequestAccessorsFilesForm'
import RequestDataAccessSuccess from './ManagedACTAccessRequirementRequestFlow/RequestDataAccessSuccess'
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
import AuthenticatedRequirement from './RequirementItem/AuthenticatedRequirement'
import CertificationRequirement from './RequirementItem/CertificationRequirement'
import ValidationRequirement from './RequirementItem/ValidationRequirement'
import { StyledComponent } from '@emotion/styled'
import {
  useGetAccessRequirementsForEntity,
  useGetAccessRequirementsForTeam,
  useSortAccessRequirementIdsByCompletion,
} from '../../synapse-queries'
import TwoFactorAuthEnabledRequirement from './RequirementItem/TwoFactorAuthEnabledRequirement'
import { AccessRequirementListItem } from './AccessRequirementListItem'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import { useCanShowManagedACTWikiInWizard } from './AccessRequirementListUtils'

export type AccessRequirementListProps = {
  entityId: string // will show this entity info
  teamId?: string // will show this team info
  accessRequirementFromProps?: Array<AccessRequirement>
  onHide: () => void
  renderAsModal?: boolean
  numberOfFilesAffected?: number // if provided, will show this instead of the entity information
  requestObjectName?: string // if provided, will show this instead of the entity information or numberOfFilesAffected
  dialogTitle?: string // if provided, will show this instead of Data Access Request
}

const SUPPORTED_ACCESS_REQUIREMENTS = new Set<
  AccessRequirement['concreteType']
>([
  'org.sagebionetworks.repo.model.SelfSignAccessRequirement',
  'org.sagebionetworks.repo.model.TermsOfUseAccessRequirement',
  'org.sagebionetworks.repo.model.ManagedACTAccessRequirement',
  'org.sagebionetworks.repo.model.ACTAccessRequirement',
])

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
  return !SUPPORTED_ACCESS_REQUIREMENTS.has(accessRequirement.concreteType)
}

/**
 * Represents a distinct screen in the wizard used to apply to a ManagedACTAccessRequirement
 */
enum RequestDataStep {
  SHOW_ALL_ARS = 0,
  UPDATE_RESEARCH_PROJECT = 1,
  UPDATE_ACCESSORS_AND_FILES = 2,
  PROMPT_CANCEL = 3,
  PROMPT_LOGIN = 4,
  COMPLETE = 5,
}

export type RequestDataStepCallbackArgs = {
  step: RequestDataStep
  managedACTAccessRequirement?: ManagedACTAccessRequirement
  researchProjectId?: string
  dataAccessRequest?: Request | Renewal
}

/**
 * The AccessRequirementListV2 component renders a set of {@link AccessRequirement}s (either pre-defined, or those applied
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
    teamId,
    onHide,
    accessRequirementFromProps,
    renderAsModal,
    numberOfFilesAffected,
    requestObjectName,
    dialogTitle = 'Data Access Request',
  } = props
  const { accessToken } = useSynapseContext()
  const isSignedIn = !!accessToken
  const [requestDataStep, setRequestDataStep] = useState<RequestDataStep>(
    RequestDataStep.SHOW_ALL_ARS,
  )
  const [managedACTAccessRequirement, setManagedACTAccessRequirement] =
    useState<ManagedACTAccessRequirement>()
  const [researchProjectId, setResearchProjectId] = useState<string>('')
  const [dataAccessRequest, setDataAccessRequest] = useState<
    Request | Renewal | undefined
  >()

  const entityHeaderProps: UseGetInfoFromIdsProps<EntityHeader> = {
    ids: [entityId],
    type: 'ENTITY_HEADER',
  }
  const canShowManagedACTWikiInWizard = useCanShowManagedACTWikiInWizard()

  const entityInformation = useGetInfoFromIds<EntityHeader>(entityHeaderProps)

  const { data: fetchedRequirementsForTeam } = useGetAccessRequirementsForTeam(
    teamId!,
    {
      enabled: Boolean(!accessRequirementFromProps && teamId),
    },
  )
  const { data: fetchedRequirementsForEntity } =
    useGetAccessRequirementsForEntity(entityId, {
      enabled: Boolean(!accessRequirementFromProps && entityId && !teamId),
    })

  const fetchedRequirements = teamId
    ? fetchedRequirementsForTeam
    : fetchedRequirementsForEntity

  const accessRequirements = accessRequirementFromProps ?? fetchedRequirements

  /**
   * Set the initial ordering of the Access Requirements to show complete ARs first. The individual AR Item components
   * retrieve and render status independently, so this data only determines ordering. For this reason, the query data
   * should not be invalidated or updated as the user progresses through the workflow.
   */
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

  const requestDetails = useMemo(() => {
    // Prioritize requestObjectName, then the number of files affected, then the entity name
    if (requestObjectName) return requestObjectName
    if (numberOfFilesAffected)
      return (
        <>
          <IconSvg icon="file" sx={{ width: '30px' }} /> {numberOfFilesAffected}{' '}
          File(s)
        </>
      )
    return (
      <>
        <IconSvg icon="file" sx={{ width: '30px' }} />{' '}
        <Link
          href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Synapse:${entityId}`}
        >
          {entityInformation[0]?.name}
        </Link>
      </>
    )
  }, [entityId, entityInformation, numberOfFilesAffected, requestObjectName])

  const content = (
    <>
      <DialogTitle>
        <Stack direction="row" alignItems={'center'} gap={'5px'}>
          {dialogTitle}
          <Box sx={{ flexGrow: 1 }} />
          <IconButton onClick={onHide}>
            <IconSvg icon={'close'} wrap={false} sx={{ color: 'grey.700' }} />
          </IconButton>
        </Stack>
      </DialogTitle>

      <DialogContent>
        <DialogSubsectionHeader sx={{ mt: 0 }}>
          What is this request for?
        </DialogSubsectionHeader>
        <Typography variant={'body1'} component={'span'}>
          {requestDetails}
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
              <AccessRequirementListItem
                key={accessRequirement.id}
                accessRequirement={accessRequirement}
                entityId={entityId}
                onHide={onHide}
                onRequestAccess={accessRequirement => {
                  const nextStep = isSignedIn
                    ? RequestDataStep.UPDATE_RESEARCH_PROJECT
                    : RequestDataStep.PROMPT_LOGIN
                  requestDataStepCallback({
                    managedACTAccessRequirement: accessRequirement,
                    step: nextStep,
                  })
                }}
              />
            )
          })}
      </DialogContent>
    </>
  )

  const dialogWidth =
    [
      RequestDataStep.UPDATE_ACCESSORS_AND_FILES,
      RequestDataStep.UPDATE_RESEARCH_PROJECT,
    ].includes(requestDataStep) && canShowManagedACTWikiInWizard
      ? 'xl'
      : 'md'

  let renderContent = content
  if (renderAsModal) {
    switch (requestDataStep) {
      case RequestDataStep.UPDATE_RESEARCH_PROJECT:
        renderContent = (
          <ResearchProjectForm
            managedACTAccessRequirement={managedACTAccessRequirement!}
            onSave={researchProject => {
              requestDataStepCallback({
                managedACTAccessRequirement,
                step: RequestDataStep.UPDATE_ACCESSORS_AND_FILES,
                researchProjectId: researchProject.id,
              })
            }}
            onHide={onHide}
          />
        )
        break
      case RequestDataStep.UPDATE_ACCESSORS_AND_FILES:
        renderContent = (
          <DataAccessRequestAccessorsFilesForm
            researchProjectId={researchProjectId}
            managedACTAccessRequirement={managedACTAccessRequirement!}
            entityId={entityId} // for form submission after save
            onHide={onHide}
            onCancel={dataAccessRequestInProgress => {
              requestDataStepCallback({
                step: RequestDataStep.PROMPT_CANCEL,
                dataAccessRequest: dataAccessRequestInProgress,
              })
            }}
            onSubmissionCreated={() => {
              requestDataStepCallback({ step: RequestDataStep.COMPLETE })
            }}
          />
        )
        break
      case RequestDataStep.PROMPT_CANCEL:
        renderContent = (
          <CancelRequestDataAccess
            modifiedDataAccessRequest={dataAccessRequest}
            onHide={onHide} // for closing dialogs
          />
        )
        break
      case RequestDataStep.PROMPT_LOGIN:
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
      case RequestDataStep.COMPLETE:
        renderContent = <RequestDataAccessSuccess onHide={onHide} />
        break
      case RequestDataStep.SHOW_ALL_ARS:
        renderContent = content
        break
      default:
        renderContent = content
    }
    return (
      <Dialog maxWidth={dialogWidth} fullWidth open={true} onClose={onHide}>
        {renderContent}
      </Dialog>
    )
  }
  return <Box>{renderContent}</Box>
}
