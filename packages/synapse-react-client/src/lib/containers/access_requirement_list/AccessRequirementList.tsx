import { sortBy } from 'lodash-es'
import React, { useEffect, useState } from 'react'
import { SynapseClient, SynapseConstants } from '../../utils/'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'
import { useGetCurrentUserProfile } from '../../utils/hooks/SynapseAPI/user/useUserBundle'
import useCompare from '../../utils/hooks/useCompare'
import useGetInfoFromIds, {
  UseGetInfoFromIdsProps,
} from '../../utils/hooks/useGetInfoFromIds'
import { getAllAccessRequirements } from '../../utils/SynapseClient'
import { useSynapseContext } from '../../utils/SynapseContext'
import {
  AccessRequirementStatus,
  ACTAccessRequirement,
  EntityHeader,
  ManagedACTAccessRequirement,
  RequestInterface,
  SelfSignAccessRequirement,
  TermsOfUseAccessRequirement,
} from '../../utils/synapseTypes'
import { AccessRequirement } from '../../utils/synapseTypes/AccessRequirement/AccessRequirement'
import { ManagedACTAccessRequirementStatus } from '../../utils/synapseTypes/AccessRequirement/ManagedACTAccessRequirementStatus'
import IconSvg from '../IconSvg'
import StandaloneLoginForm from '../auth/StandaloneLoginForm'
import AccessApprovalCheckMark from './AccessApprovalCheckMark'
import ACTAccessRequirementComponent from './ACTAccessRequirement'
import CancelRequestDataAccess from './managedACTAccess/CancelRequestDataAccess'
import ManagedACTAccessRequirementComponentNew from './managedACTAccess/ManagedACTAccessRequirement'
import RequestDataAccessStep1 from './managedACTAccess/RequestDataAccessStep1'
import RequestDataAccessStep2 from './managedACTAccess/RequestDataAccessStep2'
import RequestDataAccessSuccess from './managedACTAccess/RequestDataAccessSuccess'
import SelfSignAccessRequirementComponent from './SelfSignAccessRequirement'
import TermsOfUseAccessRequirementComponent from './TermsOfUseAccessRequirement'
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
} from '@mui/material'

type AccessRequirementAndStatus = {
  accessRequirement: AccessRequirement
  accessRequirementStatus: AccessRequirementStatus
}

export type AccessRequirementListProps = {
  entityId: string // will show this entity info
  accessRequirementFromProps?: Array<AccessRequirement>
  onHide?: () => void
  renderAsModal?: boolean
  numberOfFilesAffected?: number // if provided, will show this instead of the entity information
}

export type RequestDataStepCallbackArgs = {
  managedACTAccessRequirement?: ManagedACTAccessRequirement
  step: number
  researchProjectId?: string
  formSubmitRequestObject?: RequestInterface
}

export enum SUPPORTED_ACCESS_REQUIREMENTS {
  SelfSignAccessRequirement = 'org.sagebionetworks.repo.model.SelfSignAccessRequirement',
  TermsOfUseAccessRequirement = 'org.sagebionetworks.repo.model.TermsOfUseAccessRequirement',
  ManagedACTAccessRequirement = 'org.sagebionetworks.repo.model.ManagedACTAccessRequirement',
  ACTAccessRequirement = 'org.sagebionetworks.repo.model.ACTAccessRequirement',
}

export const checkHasUnsportedRequirement = (
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

export const sortAccessRequirementByCompletion = async (
  accessToken: string | undefined,
  requirements: Array<AccessRequirement>,
): Promise<Array<AccessRequirementAndStatus>> => {
  const statuses = requirements.map(req => {
    return SynapseClient.getAccessRequirementStatus(accessToken, req.id)
  })
  const accessRequirementStatuses = await Promise.all(statuses)

  const requirementsAndStatuses = requirements.map(req => {
    return {
      accessRequirement: req,
      accessRequirementStatus: accessRequirementStatuses.find(
        el => Number(el.accessRequirementId) === req.id,
      )!,
    }
  })

  const sortedRequirementsAndStatuses = sortBy(
    requirementsAndStatuses,
    reqAndStatus => {
      // if its true then it should come first, which means that it should be higher in the list
      // which is sorted ascendingly
      return -1 * Number(reqAndStatus.accessRequirementStatus.isApproved)
    },
  )

  return sortedRequirementsAndStatuses
}

export default function AccessRequirementList({
  entityId,
  onHide,
  accessRequirementFromProps,
  renderAsModal,
  numberOfFilesAffected,
}: AccessRequirementListProps) {
  const { accessToken } = useSynapseContext()

  const [accessRequirements, setAccessRequirements] = useState<
    Array<AccessRequirementAndStatus> | undefined
  >(undefined)

  const [requestDataStep, setRequestDataStep] = useState<number>()
  const [managedACTAccessRequirement, setManagedACTAccessRequirement] =
    useState<ManagedACTAccessRequirement>()
  const [researchProjectId, setresearchProjectId] = useState<string>('')
  const [formSubmitRequestObject, setFormSubmitRequestObject] =
    useState<RequestInterface>()

  const entityHeaderProps: UseGetInfoFromIdsProps = {
    ids: [entityId],
    type: 'ENTITY_HEADER',
  }

  const hasTokenChanged = useCompare(accessToken)
  const shouldUpdateData = hasTokenChanged || !accessRequirements

  const entityInformation = useGetInfoFromIds<EntityHeader>(entityHeaderProps)

  const { data: user } = useGetCurrentUserProfile()

  useEffect(() => {
    let isCancelled = false

    const getAccessRequirements = async () => {
      try {
        if (!shouldUpdateData) {
          return
        }
        if (!accessRequirementFromProps) {
          const requirements = await getAllAccessRequirements(
            accessToken,
            entityId,
          )
          const sortedAccessRequirements =
            await sortAccessRequirementByCompletion(accessToken, requirements)
          if (!isCancelled) {
            setAccessRequirements(sortedAccessRequirements)
          }
        } else {
          const sortedAccessRequirements =
            await sortAccessRequirementByCompletion(
              accessToken,
              accessRequirementFromProps,
            )
          if (!isCancelled) {
            setAccessRequirements(sortedAccessRequirements)
          }
        }

        // we use a functional update below https://reactjs.org/docs/hooks-reference.html#functional-updates
        // because we want react hooks to update without a dependency on accessRequirements
      } catch (err) {
        console.error('Error on get access requirements: ', err)
      }
    }

    getAccessRequirements()

    return () => {
      isCancelled = true
    }
  }, [accessToken, entityId, accessRequirementFromProps, shouldUpdateData])

  // Using Boolean(value) converts undefined,null, 0,'',false -> false
  // one alternative to using Boolean(value) is the double bang operator !!value,
  // but doesn't ready well
  const isSignedIn: boolean = Boolean(accessToken)

  /**
   * Returns rendering for the access requirement.
   *
   * Only supports SelfSignAccessRequirement and TermsOfUseAccessRequirement
   *
   * @param {AccessRequirement} accessRequirement accessRequirement being rendered
   */
  const renderAccessRequirement = (
    accessRequirement: AccessRequirement,
    accessRequirementStatus: AccessRequirementStatus,
  ) => {
    switch (accessRequirement.concreteType) {
      case SUPPORTED_ACCESS_REQUIREMENTS.SelfSignAccessRequirement:
        return (
          <SelfSignAccessRequirementComponent
            accessRequirement={accessRequirement as SelfSignAccessRequirement}
            accessRequirementStatus={accessRequirementStatus}
            user={user}
            onHide={onHide}
            entityId={entityId}
          />
        )
      case SUPPORTED_ACCESS_REQUIREMENTS.TermsOfUseAccessRequirement:
        return (
          <TermsOfUseAccessRequirementComponent
            accessRequirement={accessRequirement as TermsOfUseAccessRequirement}
            accessRequirementStatus={accessRequirementStatus}
            user={user}
            onHide={onHide}
            entityId={entityId}
          />
        )
      case SUPPORTED_ACCESS_REQUIREMENTS.ManagedACTAccessRequirement:
        return (
          <ManagedACTAccessRequirementComponentNew
            accessRequirement={accessRequirement as ManagedACTAccessRequirement}
            accessRequirementStatus={
              accessRequirementStatus as ManagedACTAccessRequirementStatus
            }
            user={user}
            onHide={onHide}
            entityId={entityId}
            requestDataStepCallback={requestDataStepCallback}
          />
        )
      case SUPPORTED_ACCESS_REQUIREMENTS.ACTAccessRequirement:
        return (
          <ACTAccessRequirementComponent
            accessRequirement={accessRequirement as ACTAccessRequirement}
            accessRequirementStatus={accessRequirementStatus}
            user={user}
            onHide={onHide}
            entityId={entityId}
          />
        )
      // case not supported yet
      default:
        return undefined
    }
  }

  const requestDataStepCallback = (props: RequestDataStepCallbackArgs) => {
    const {
      managedACTAccessRequirement,
      step,
      researchProjectId,
      formSubmitRequestObject,
    } = props
    if (managedACTAccessRequirement) {
      // required for step 1, 2 form
      setManagedACTAccessRequirement(managedACTAccessRequirement)
    }
    if (researchProjectId) {
      setresearchProjectId(researchProjectId)
    }
    if (formSubmitRequestObject) {
      setFormSubmitRequestObject(formSubmitRequestObject)
    }
    setRequestDataStep(step)
  }

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
          <h4 className="AccessRequirementList__instruction AccessRequirementList__access">
            Access For:
          </h4>
          <span className="AccessRequirementList__file-icon-container">
            <IconSvg icon="file" sx={{ width: '30px' }} />
          </span>
          &nbsp;
          {numberOfFilesAffected && (
            <span>{numberOfFilesAffected} File(s)</span>
          )}
          {!numberOfFilesAffected && (
            <a
              className="AccessRequirementList__register-text-link"
              href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Synapse:${entityId}`}
            >
              {entityInformation[0]?.name}
            </a>
          )}
          <h4
            className="AccessRequirementList__instruction"
            style={{ marginTop: '3rem' }}
          >
            What do I need to do?
          </h4>
          <div className="requirement-container">
            <AccessApprovalCheckMark isCompleted={isSignedIn} />
            <div>
              {!isSignedIn && (
                <>
                  <p className="AccessRequirementList__signin">
                    <a
                      className={`${SynapseConstants.SRC_SIGN_IN_CLASS} SRC-boldText `}
                    >
                      Sign in&nbsp;
                    </a>
                    with a Sage Platform (Synapse) user account.
                  </p>
                  <p>
                    If you do not have a Sage Account, you can
                    <a
                      className="register-text-link bold-text"
                      href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!RegisterAccount:0`}
                    >
                      &nbsp;Register for free.
                    </a>
                  </p>
                </>
              )}
              {isSignedIn && (
                <p>
                  You have signed in with the Sage Platform (Synapse) user
                  account <b>{user?.userName}@synapse.org</b>
                </p>
              )}
            </div>
          </div>
          {accessRequirements?.map(
            ({ accessRequirement, accessRequirementStatus }) => {
              return (
                <React.Fragment key={accessRequirement.id}>
                  {renderAccessRequirement(
                    accessRequirement,
                    accessRequirementStatus,
                  )}
                </React.Fragment>
              )
            },
          )}
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
            requestDataStepCallback={requestDataStepCallback}
            onHide={() => onHide?.()}
          />
        )
        break
      case 2:
        renderContent = (
          <RequestDataAccessStep2
            user={user!}
            researchProjectId={researchProjectId}
            managedACTAccessRequirement={managedACTAccessRequirement!}
            entityId={entityId} // for form submission after save
            requestDataStepCallback={requestDataStepCallback}
            onHide={() => onHide?.()}
          />
        )
        break
      case 3:
        renderContent = (
          <CancelRequestDataAccess
            formSubmitRequestObject={formSubmitRequestObject}
            onHide={() => onHide?.()} // for closing dialogs
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
        renderContent = <RequestDataAccessSuccess onHide={() => onHide?.()} />
        break
      default:
        renderContent = content
    }
    return (
      <Dialog
        className={
          !requestDataStep
            ? 'AccessRequirementList'
            : 'AccessRequirementList modal-auto-height'
        }
        onClose={() => onHide?.()}
        open={true}
        fullWidth
        maxWidth="md"
      >
        {renderContent}
      </Dialog>
    )
  }
  return <div className="AccessRequirementList">{renderContent}</div>
}
