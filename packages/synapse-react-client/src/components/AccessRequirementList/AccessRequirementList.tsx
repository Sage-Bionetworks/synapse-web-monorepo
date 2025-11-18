import {
  useGetAccessRequirementsForEntity,
  useGetAccessRequirementsForTeam,
  useSortAccessRequirementIdsByCompletion,
} from '@/synapse-queries'
import {
  storeRedirectURLForOneSageLoginAndGotoURL,
  useSynapseContext,
} from '@/utils'
import { StyledComponent } from '@emotion/styled'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  styled,
  Typography,
  TypographyProps,
} from '@mui/material'
import {
  AccessRequirement,
  ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  ManagedACTAccessRequirement,
  Renewal,
  Request,
  RestrictableObjectType,
  SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  TERMS_OF_USE_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
} from '@sage-bionetworks/synapse-types'
import noop from 'lodash-es/noop'
import groupBy from 'lodash-es/groupBy'
import { ReactNode, useMemo, useState } from 'react'
import DialogBaseTitle from '@/react-ui/components/DialogBaseTitle'
import { EntityLink } from '../EntityLink/EntityLink'
import IconSvg from '../IconSvg/IconSvg'
import UserOrTeamBadge from '../UserOrTeamBadge'
import { AccessRequirementListItem } from './AccessRequirementListItem'
import { useCanShowManagedACTWikiInWizard } from './AccessRequirementListUtils'
import CancelRequestDataAccess from './ManagedACTAccessRequirementRequestFlow/CancelRequestDataAccess'
import DataAccessRequestAccessorsFilesForm from './ManagedACTAccessRequirementRequestFlow/DataAccessRequestAccessorsFilesForm/DataAccessRequestAccessorsFilesForm'
import RequestDataAccessSuccess from './ManagedACTAccessRequirementRequestFlow/RequestDataAccessSuccess'
import ResearchProjectForm from './ManagedACTAccessRequirementRequestFlow/ResearchProjectForm/ResearchProjectForm'
import AuthenticatedRequirement from './RequirementItem/AuthenticatedRequirement'
import CertificationRequirement from './RequirementItem/CertificationRequirement'
import TwoFactorAuthEnabledRequirement from './RequirementItem/TwoFactorAuthEnabledRequirement'
import ValidationRequirement from './RequirementItem/ValidationRequirement'
import { useOneSageURL } from '@/utils/hooks'

export type AccessRequirementListProps = {
  /* if provided, will show this instead of the entity information */
  numberOfFilesAffected?: number
  /* if provided, will show this instead of the entity information or numberOfFilesAffected */
  requestObjectName?: string
  /* If true, this component will render in its own modal */
  renderAsModal?: boolean
  /* Overrides the default dialog title. This only applies if renderAsModal is true */
  dialogTitle?: string
  /* Called when the user rejects the terms of a listed AccessRequirement. If renderAsModal is true, this is also called when the user closes the modal. */
  onHide: () => void
  /* Displays the provided list of access requirements, instead of the ones fetched using the subject ID */
  accessRequirementFromProps?: Array<AccessRequirement>
  /* If provided, displays these actions on when viewing all ARs */
  customDialogActions?: ReactNode
  /* Optional callback invoked if a submission is created via this component */
  onSubmissionCreated?: (submissionId: string) => void
} & (
  | {
      /**
       * Fetches the access requirements associated with an entity
       * @deprecated Please use `subjectId` and `subjectType`
       */
      entityId: string
    }
  | {
      /**
       * Fetches the access requirements associated with a team
       * @deprecated Please use `subjectId` and `subjectType`
       */
      teamId: string
    }
  | {
      /* The ID of the object for which access is being requested */
      subjectId?: string
      /* The type of the object for which access is being requested */
      subjectType?: RestrictableObjectType
    }
)

const SUPPORTED_ACCESS_REQUIREMENT_TYPES_SORTED: AccessRequirement['concreteType'][] =
  [
    SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
    TERMS_OF_USE_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
    MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
    ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  ]

const SUPPORTED_ACCESS_REQUIREMENT_TYPES = new Set<
  AccessRequirement['concreteType']
>(SUPPORTED_ACCESS_REQUIREMENT_TYPES_SORTED)

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

export const checkHasUnsupportedRequirement = (
  accessRequirements: Array<AccessRequirement>,
): boolean => {
  return accessRequirements.some(isARUnsupported)
}

const isARUnsupported = (accessRequirement: AccessRequirement) => {
  return !SUPPORTED_ACCESS_REQUIREMENT_TYPES.has(accessRequirement.concreteType)
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
    onHide = noop,
    renderAsModal = false,
    numberOfFilesAffected,
    requestObjectName,
    customDialogActions,
    onSubmissionCreated = noop,
  } = props

  const isShowingRequirementsForEntity = 'entityId' in props
  const isShowingRequirementsForTeam = 'teamId' in props
  const isShowingRequirementsFromProps = 'accessRequirementFromProps' in props

  const subjectId =
    'subjectId' in props
      ? props.subjectId
      : isShowingRequirementsForEntity
      ? props.entityId
      : isShowingRequirementsForTeam
      ? props.teamId
      : undefined

  const subjectType =
    'subjectType' in props
      ? props.subjectType
      : isShowingRequirementsForEntity
      ? RestrictableObjectType.ENTITY
      : isShowingRequirementsForTeam
      ? RestrictableObjectType.TEAM
      : undefined

  let { dialogTitle = 'Data Access Request' } = props
  const { isAuthenticated } = useSynapseContext()
  const [requestDataStep, setRequestDataStep] = useState<RequestDataStep>(
    RequestDataStep.SHOW_ALL_ARS,
  )
  const oneSageURL = useOneSageURL()
  const [managedACTAccessRequirement, setManagedACTAccessRequirement] =
    useState<ManagedACTAccessRequirement>()
  const [researchProjectId, setResearchProjectId] = useState<string>('')
  const [dataAccessRequest, setDataAccessRequest] = useState<
    Request | Renewal | undefined
  >()

  const canShowManagedACTWikiInWizard = useCanShowManagedACTWikiInWizard()

  const { data: fetchedRequirementsForTeam } = useGetAccessRequirementsForTeam(
    subjectId!,
    {
      enabled:
        subjectId !== undefined && subjectType === RestrictableObjectType.TEAM,
    },
  )
  const { data: fetchedRequirementsForEntity } =
    useGetAccessRequirementsForEntity(subjectId!, {
      enabled:
        subjectId !== undefined &&
        subjectType === RestrictableObjectType.ENTITY,
    })

  const requirementsFromProps = isShowingRequirementsFromProps
    ? props.accessRequirementFromProps
    : undefined

  const accessRequirements =
    requirementsFromProps ??
    fetchedRequirementsForEntity ??
    fetchedRequirementsForTeam

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

  const sortedGroupedAccessRequirementsByType = useMemo(() => {
    if (accessRequirements && sortedAccessRequirementIds) {
      // SWC-7218: Group by access requirement type
      const groupedAccessRequirementsByType = groupBy(
        accessRequirements,
        'concreteType',
      )
      const sortedByTypeAndStatus =
        SUPPORTED_ACCESS_REQUIREMENT_TYPES_SORTED.map(type => {
          const arsOfType = groupedAccessRequirementsByType[type]
          if (arsOfType) {
            return sortedAccessRequirementIds.map(
              id => arsOfType.find(ar => id === String(ar.id))!,
            )
          }
          return []
        })
          .flat()
          .filter((item): item is AccessRequirement => item !== undefined)
      return sortedByTypeAndStatus
    }
    return undefined
  }, [accessRequirements, sortedAccessRequirementIds])

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
        MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE &&
      accessRequirement.isTwoFaRequired,
  )

  const anyARsRequireCertification = accessRequirements?.some(
    accessRequirement =>
      (accessRequirement.concreteType ===
        MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE ||
        accessRequirement.concreteType ===
          SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE) &&
      accessRequirement.isCertifiedUserRequired,
  )

  const anyARsRequireProfileValidation = accessRequirements?.some(
    accessRequirement =>
      (accessRequirement.concreteType ===
        MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE ||
        accessRequirement.concreteType ===
          SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE) &&
      accessRequirement.isValidatedProfileRequired,
  )

  const requestDetails = useMemo(() => {
    // Prioritize requestObjectName, then the number of files affected, then the entity/team name
    if (requestObjectName) return requestObjectName
    if (numberOfFilesAffected)
      return (
        <>
          <IconSvg icon="file" sx={{ width: '30px' }} /> {numberOfFilesAffected}{' '}
          File(s)
        </>
      )
    if (
      subjectId !== undefined &&
      subjectType === RestrictableObjectType.ENTITY
    ) {
      return <EntityLink entity={subjectId} />
    } else if (subjectType === RestrictableObjectType.TEAM) {
      return <UserOrTeamBadge principalId={subjectId} />
    } else {
      console.warn(
        `Unhandled case for AccessRequirementList requestDetails: ${subjectType}: ${subjectId}`,
      )
      return <></>
    }
  }, [numberOfFilesAffected, requestObjectName, subjectId, subjectType])

  const dialogWidth =
    [
      RequestDataStep.UPDATE_ACCESSORS_AND_FILES,
      RequestDataStep.UPDATE_RESEARCH_PROJECT,
    ].includes(requestDataStep) && canShowManagedACTWikiInWizard
      ? 'xl'
      : 'md'

  let renderContent = <></>
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
          subjectId={subjectId ?? ''}
          subjectType={subjectType ?? RestrictableObjectType.ENTITY}
          onHide={onHide}
          onCancel={dataAccessRequestInProgress => {
            requestDataStepCallback({
              step: RequestDataStep.PROMPT_CANCEL,
              dataAccessRequest: dataAccessRequestInProgress,
            })
          }}
          onSubmissionCreated={submissionId => {
            requestDataStepCallback({ step: RequestDataStep.COMPLETE })
            onSubmissionCreated(submissionId)
          }}
          onBackClicked={() => {
            requestDataStepCallback({
              step: RequestDataStep.UPDATE_RESEARCH_PROJECT,
            })
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
      // Send to OneSage login page
      storeRedirectURLForOneSageLoginAndGotoURL(oneSageURL.toString())
      dialogTitle = 'Please Log In'
      renderContent = <></>
      break
    case RequestDataStep.COMPLETE:
      renderContent = <RequestDataAccessSuccess onHide={onHide} />
      break
    case RequestDataStep.SHOW_ALL_ARS:
    default:
      renderContent = (
        <>
          {renderAsModal ? (
            <DialogBaseTitle title={dialogTitle} onCancel={onHide} />
          ) : (
            <Typography variant="h5" sx={{ mb: 2 }}>
              {dialogTitle}
            </Typography>
          )}
          <DialogContent>
            <DialogSubsectionHeader variant={'h4'} sx={{ mt: 0 }}>
              What is this request for?
            </DialogSubsectionHeader>
            <Typography variant={'body1'} component={'span'}>
              {requestDetails}
            </Typography>
            <DialogSubsectionHeader variant={'h4'}>
              What do I need to do?
            </DialogSubsectionHeader>
            <AuthenticatedRequirement />
            {anyARsRequireCertification && <CertificationRequirement />}
            {anyARsRequireProfileValidation && <ValidationRequirement />}
            {anyARsRequireTwoFactorAuth && <TwoFactorAuthEnabledRequirement />}
            {sortedGroupedAccessRequirementsByType?.map(accessRequirement => {
              return (
                <AccessRequirementListItem
                  key={accessRequirement.id}
                  accessRequirement={accessRequirement}
                  subjectId={subjectId}
                  subjectType={subjectType}
                  onHide={onHide}
                  onRequestAccess={accessRequirement => {
                    const nextStep = isAuthenticated
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
          <DialogActions>
            {customDialogActions ? (
              customDialogActions
            ) : (
              <>
                {renderAsModal && (
                  <Button variant="contained" onClick={onHide}>
                    Close
                  </Button>
                )}
              </>
            )}
          </DialogActions>
        </>
      )
  }

  if (renderAsModal) {
    return (
      <Dialog maxWidth={dialogWidth} fullWidth open={true} onClose={onHide}>
        {renderContent}
      </Dialog>
    )
  }

  return <>{renderContent}</>
}
