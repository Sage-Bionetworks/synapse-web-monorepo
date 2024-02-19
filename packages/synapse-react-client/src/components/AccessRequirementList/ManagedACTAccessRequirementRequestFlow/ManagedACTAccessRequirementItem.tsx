import React, { useState } from 'react'
import MarkdownSynapse from '../../Markdown/MarkdownSynapse'
import {
  ManagedACTAccessRequirement,
  ManagedACTAccessRequirementStatus,
  SubmissionState,
} from '@sage-bionetworks/synapse-types'
import { AlertProps } from './DataAccessRequestAccessorsFilesForm/DataAccessRequestAccessorsFilesForm'
import { Alert, Box, ButtonProps, Link, Typography } from '@mui/material'
import RequirementItem from '../RequirementItem/RequirementItem'
import {
  useCancelDataAccessRequest,
  useGetAccessRequirementStatus,
  useGetAccessRequirementWikiPageKey,
} from '../../../synapse-queries'
import { RequirementItemStatus } from '../AccessApprovalCheckMark'

export type ManagedACTAccessRequirementItemProps = {
  accessRequirement: ManagedACTAccessRequirement
  onHide: () => void
  onRequestAccess: () => void
}

/**
 * Renders a {@link RequirementItem} for a ManagedACTAccessRequirement, which allows a user to see if they have met the
 * requirement, and if not, complete a data access request to apply for access.
 */
export default function ManagedACTAccessRequirementItem(
  props: ManagedACTAccessRequirementItemProps,
) {
  const { accessRequirement, onHide, onRequestAccess } = props
  const { data: wikiPage } = useGetAccessRequirementWikiPageKey(
    accessRequirement.id.toString(),
  )
  const { data: accessRequirementStatus, isLoading } =
    useGetAccessRequirementStatus<ManagedACTAccessRequirementStatus>(
      String(accessRequirement.id),
    )
  const { mutate: cancelDataAccessRequest } = useCancelDataAccessRequest({
    onError: e => {
      console.error('Error cancelling data access request', e)
      setAlert({
        key: 'error',
        message: (
          <>
            <strong>Error canceling your data access request.</strong>
            <br />
            Please try again later.
          </>
        ),
      })
    },
  })

  const [hideMarkdown, setHideMarkdown] = useState<boolean>(true)
  const [alert, setAlert] = useState<AlertProps | undefined>()

  const isApproved = accessRequirementStatus?.isApproved

  let markdown = <></>

  if (wikiPage) {
    markdown = (
      <div>
        {
          <MarkdownSynapse // remove React mount/unmount error
            wikiId={wikiPage.wikiPageId}
            ownerId={wikiPage.ownerObjectId}
            objectType={wikiPage.ownerObjectType}
          />
        }
        {
          /* Alert message */
          alert && (
            <Alert
              className={'access-requirement-list-alert'}
              severity={alert.key}
            >
              {alert.message}
            </Alert>
          )
        }
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
              <strong>Your data access request has been revoked.</strong>
            </Alert>
          )}
        {accessRequirementStatus?.currentSubmissionStatus?.state ===
          SubmissionState.REJECTED && (
          <Alert className={'access-requirement-list-alert'} severity={'error'}>
            <>
              <strong>Your data access request has been rejected.</strong>
              <br />
              {accessRequirementStatus?.currentSubmissionStatus
                .rejectedReason || ''}
            </>
          </Alert>
        )}
        {accessRequirementStatus?.currentSubmissionStatus?.state ===
          SubmissionState.CANCELLED && (
          <Alert
            className={'access-requirement-list-alert'}
            severity={'success'}
          >
            <strong>Your data access request has been canceled.</strong>
          </Alert>
        )}
      </div>
    )
  }

  const actions: ButtonProps[] = []

  if (accessRequirementStatus) {
    if (accessRequirementStatus.currentSubmissionStatus == null) {
      actions.push({
        variant: 'outlined',
        onClick: onRequestAccess,
        children: 'Request access',
      })
      actions.push({
        variant: 'text',
        onClick: onHide,
        children: 'I do not accept',
      })
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
        onClick: () => {
          cancelDataAccessRequest({
            submissionId:
              accessRequirementStatus.currentSubmissionStatus!.submissionId,
            accessRequirementId: String(accessRequirement.id),
          })
        },
        children: 'Cancel Request',
      })
    }
  }

  let requirementItemState: RequirementItemStatus =
    RequirementItemStatus.LOADING
  if (!isLoading) {
    switch (accessRequirementStatus?.currentSubmissionStatus?.state) {
      case SubmissionState.APPROVED:
        requirementItemState = accessRequirementStatus?.isApproved
          ? RequirementItemStatus.COMPLETE
          : RequirementItemStatus.LOCKED
        break
      case SubmissionState.SUBMITTED:
        requirementItemState = RequirementItemStatus.PENDING
        break
      case SubmissionState.REJECTED:
      case SubmissionState.CANCELLED:
      default:
        requirementItemState = RequirementItemStatus.LOCKED
    }
  }

  return (
    <RequirementItem
      data-testid="ManagedACTAccessRequirementItem"
      status={requirementItemState}
      actions={actions}
    >
      {/*  If not approved, show the terms */}
      {!isApproved && <>{markdown}</>}
      {isApproved && (
        <>
          <Typography variant={'body1'}>
            Your data access request has been approved.{' '}
            <Link
              role={'button'}
              onClick={() => {
                setHideMarkdown(!hideMarkdown)
              }}
            >
              {hideMarkdown ? 'View Terms' : 'Hide Terms'}
            </Link>
          </Typography>
          {!hideMarkdown && <Box sx={{ my: 1 }}>{markdown}</Box>}
        </>
      )}
    </RequirementItem>
  )
}
