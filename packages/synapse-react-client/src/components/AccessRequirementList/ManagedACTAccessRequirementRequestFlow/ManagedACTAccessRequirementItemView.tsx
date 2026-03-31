import { formatDate } from '@/utils/functions/DateFormatter'
import { Alert, Box, ButtonProps, Link, Typography } from '@mui/material'
import Stack from '@mui/material/Stack'
import {
  ManagedACTAccessRequirement,
  ManagedACTAccessRequirementStatus,
  RestrictionInformationResponse,
  SubmissionState,
} from '@sage-bionetworks/synapse-types'
import dayjs from 'dayjs'
import { ReactNode, useState } from 'react'
import { RequirementItemStatus } from '../AccessApprovalCheckMark'
import RequirementItem from '../RequirementItem/RequirementItem'

export type ManagedACTAccessRequirementItemViewProps = {
  /**
   * The ManagedACTAccessRequirement to be displayed.
   */
  accessRequirement: ManagedACTAccessRequirement
  /**
   * The user's status for this access requirement.
   */
  accessRequirementStatus?: ManagedACTAccessRequirementStatus
  /**
   * A ReactNode that contains the wiki page content for this access requirement.
   */
  wikiPage?: ReactNode
  /**
   * Whether the component is currently loading data.
   */
  isLoading: boolean
  /**
   * If available, the restriction information relevant to the subject that this
   * access requirement is being displayed for.
   *
   * This is used to determine if the user is exempt from meeting this requirement.
   */
  restrictionInformation?: RestrictionInformationResponse
  /**
   * Invoked when the user clicks the "I do not accept" button.
   */
  onRejectTerms: () => void
  /**
   * Invoked when the user clicks the "Request access" button.
   */
  onRequestAccess: () => void
  /**
   * Invoked when the user clicks the "Cancel Request" button (only shown if a request is active).
   */
  onCancelDataAccessRequest: () => void
  /**
   * ReactNode to display if there is an error in the component.
   */
  error?: ReactNode
  /**
   * Whether the a request to cancel the data access request is currently pending.
   */
  cancelRequestIsPending: boolean
}

const APPROVED_TEXT = 'Your data access request has been approved.'
const EXEMPT_TEXT =
  'This data access requirement is fulfilled by your team membership and permissions.'

/**
 * Translate the ManagedACTAccessRequirementStatus and exemption status into a the
 * RequirementItemStatus displayed by the UI
 * @param status
 * @param isExempt
 */
function getRequirementItemUiState(
  status: ManagedACTAccessRequirementStatus,
  isExempt: boolean,
): RequirementItemStatus {
  if (isExempt) {
    return RequirementItemStatus.COMPLETE
  }

  // If there's no current submission, check the isApproved flag directly
  if (!status.currentSubmissionStatus) {
    return status.isApproved
      ? RequirementItemStatus.COMPLETE
      : RequirementItemStatus.LOCKED
  }

  switch (status.currentSubmissionStatus.state) {
    case SubmissionState.APPROVED:
      return status.isApproved
        ? RequirementItemStatus.COMPLETE
        : RequirementItemStatus.LOCKED
    case SubmissionState.SUBMITTED:
      return RequirementItemStatus.PENDING
    case SubmissionState.REJECTED:
    case SubmissionState.CANCELLED:
    default:
      return RequirementItemStatus.LOCKED
  }
}

/**
 * Gets the action buttons to display for a ManagedACTAccessRequirement based on the current state of the requirement.
 * @param accessRequirementStatus - the user's status for the access requirement
 * @param isExempt - whether the user is exempt from submitting a request for this access requirement
 * @param cancelRequestIsPending - whether a request to cancel the data access request is currently pending
 * @param callbacks - callbacks to invoke when the user clicks the action buttons
 */
function getActionButtonProps(
  accessRequirementStatus: ManagedACTAccessRequirementStatus,
  isExempt: boolean,
  cancelRequestIsPending: boolean,
  callbacks: {
    onRequestAccess: () => void
    onRejectTerms: () => void
    onCancelDataAccessRequest: () => void
  },
): ButtonProps[] {
  const { onRequestAccess, onRejectTerms, onCancelDataAccessRequest } =
    callbacks

  const actions: ButtonProps[] = []

  if (accessRequirementStatus) {
    if (accessRequirementStatus.currentSubmissionStatus == null) {
      actions.push({
        variant: 'outlined',
        onClick: onRequestAccess,
        // Show "Update Request" if approved, "Request access" otherwise
        children: accessRequirementStatus.isApproved
          ? 'Update Request'
          : 'Request access',
      })
      if (!isExempt && !accessRequirementStatus.isApproved) {
        actions.push({
          variant: 'text',
          onClick: onRejectTerms,
          children: 'I do not accept',
        })
      }
    } else if (
      [
        SubmissionState.APPROVED,
        SubmissionState.REJECTED,
        SubmissionState.CANCELLED,
      ].includes(accessRequirementStatus.currentSubmissionStatus.state)
    ) {
      actions.push({
        variant: 'outlined',
        onClick: onRequestAccess,
        children: 'Update Request',
      })
    } else if (
      accessRequirementStatus.currentSubmissionStatus.state ===
      SubmissionState.SUBMITTED
    ) {
      actions.push({
        variant: 'outlined',
        onClick: onCancelDataAccessRequest,
        children: 'Cancel Request',
        loading: cancelRequestIsPending,
      })
    }
  }
  return actions
}

/**
 * Renders a {@link RequirementItem} for a ManagedACTAccessRequirement, which allows a user to see if they have met the
 * requirement, and if not, complete a data access request to apply for access.
 *
 * This is a UI-only component that does not make any requests to external stores, and is exported for testing/Storybook only.
 */
export function ManagedACTAccessRequirementItemView(
  props: ManagedACTAccessRequirementItemViewProps,
) {
  const {
    accessRequirement,
    accessRequirementStatus,
    isLoading,
    wikiPage,
    restrictionInformation,
    onRejectTerms,
    onRequestAccess,
    error,
    onCancelDataAccessRequest,
    cancelRequestIsPending,
  } = props
  const restrictionFulfillment =
    restrictionInformation?.restrictionDetails?.find(
      ar => ar.accessRequirementId === accessRequirement.id,
    )

  const [collapseWikiContent, setCollapseWikiContent] = useState<boolean>(true)

  const isApproved = accessRequirementStatus?.isApproved
  const isExempt = Boolean(restrictionFulfillment?.isExempt)

  const requirementTermsWikiContent = (
    <Stack gap={2}>
      {wikiPage}
      {accessRequirementStatus?.currentSubmissionStatus?.state ===
        SubmissionState.SUBMITTED && (
        <Alert className={'access-requirement-list-alert'} severity={'info'}>
          <strong>You have submitted a data access request.</strong>
        </Alert>
      )}
      {accessRequirementStatus?.currentSubmissionStatus?.state ===
        SubmissionState.APPROVED &&
        isApproved && (
          <Alert
            className={'access-requirement-list-alert'}
            severity={'success'}
          >
            <strong>Your data access request has been approved.</strong>
          </Alert>
        )}
      {accessRequirementStatus?.currentSubmissionStatus?.state ===
        SubmissionState.APPROVED &&
        !isApproved && (
          <Alert
            className={'access-requirement-list-alert'}
            severity={'warning'}
          >
            <Typography variant={'smallText1'} gutterBottom>
              <strong>Your data access has been revoked.</strong>
            </Typography>
            {accessRequirementStatus.expiredOn &&
              dayjs(accessRequirementStatus.expiredOn).isBefore(dayjs()) && (
                <Typography variant={'smallText1'} gutterBottom>
                  Your access expired on{' '}
                  {formatDate(dayjs(accessRequirementStatus.expiredOn))}.
                </Typography>
              )}
          </Alert>
        )}
      {accessRequirementStatus?.currentSubmissionStatus?.state ===
        SubmissionState.REJECTED && (
        <Alert className={'access-requirement-list-alert'} severity={'error'}>
          <Typography variant={'body1'} gutterBottom>
            <strong>Your data access request has been rejected.</strong>
          </Typography>
          <Typography
            variant={'body1'}
            gutterBottom
            sx={{ whiteSpace: 'pre-line' }}
          >
            {accessRequirementStatus?.currentSubmissionStatus.rejectedReason ||
              ''}
          </Typography>
        </Alert>
      )}
      {accessRequirementStatus?.currentSubmissionStatus?.state ===
        SubmissionState.CANCELLED && (
        <Alert className={'access-requirement-list-alert'} severity={'info'}>
          <Typography variant={'body1'}>
            Your data access request has been canceled.
          </Typography>
        </Alert>
      )}
    </Stack>
  )

  let actions: ButtonProps[] = []
  if (!isLoading && accessRequirementStatus) {
    actions = getActionButtonProps(
      accessRequirementStatus,
      isExempt,
      cancelRequestIsPending,
      {
        onRequestAccess,
        onRejectTerms,
        onCancelDataAccessRequest,
      },
    )
  }

  let requirementItemState: RequirementItemStatus =
    RequirementItemStatus.LOADING
  if (!isLoading && accessRequirementStatus) {
    requirementItemState = getRequirementItemUiState(
      accessRequirementStatus,
      isExempt,
    )
  }

  return (
    <RequirementItem
      data-testid="ManagedACTAccessRequirementItem"
      status={requirementItemState}
      actions={actions}
    >
      {/*  If not approved/exempt, show the terms */}
      {!isApproved && !isExempt && <>{requirementTermsWikiContent}</>}
      {(isApproved || isExempt) && (
        <>
          <Typography variant={'body1'}>
            {isApproved && APPROVED_TEXT} {isExempt && EXEMPT_TEXT}{' '}
            <Link
              role={'button'}
              onClick={() => {
                setCollapseWikiContent(!collapseWikiContent)
              }}
            >
              {collapseWikiContent ? 'View Terms' : 'Hide Terms'}
            </Link>
          </Typography>
          {!collapseWikiContent && (
            <Box sx={{ my: 1 }}>{requirementTermsWikiContent}</Box>
          )}
        </>
      )}
      {error}
    </RequirementItem>
  )
}

export default ManagedACTAccessRequirementItemView
