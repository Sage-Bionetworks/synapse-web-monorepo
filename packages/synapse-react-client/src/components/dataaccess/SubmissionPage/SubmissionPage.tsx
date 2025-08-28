import AccessRequirementList from '@/components/AccessRequirementList/AccessRequirementList'
import { CancelDataAccessRequestConfirmationModal } from '@/components/dataaccess/SubmissionPage/CancelDataAccessRequestConfirmationModal'
import { ApproveSubmissionConfirmationModal } from '@/components/dataaccess/SubmissionPage/ApproveSubmissionConfirmationModal'
import { displayToast } from '@/components/ToastMessage'
import {
  useGetAccessRequirementACL,
  useGetAccessRequirements,
  useGetAccessRequirementWikiPageKey,
} from '@/synapse-queries/dataaccess/useAccessRequirements'
import useGetDataAccessSubmission from '@/synapse-queries/dataaccess/useDataAccessSubmission'
import { useGetCurrentUserProfile } from '@/synapse-queries/user'
import { useGetUserAccessApproval } from '@/synapse-queries/dataaccess/useAccessApprovals'
import { formatDate } from '@/utils/functions/DateFormatter'
import { ACT_TEAM_ID } from '@/utils/SynapseConstants'
import { Button, Grid, Skeleton, Stack, Typography } from '@mui/material'
import {
  ACCESS_TYPE,
  FileHandleAssociateType,
  ManagedACTAccessRequirement,
  Submission,
  SubmissionState,
} from '@sage-bionetworks/synapse-types'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import { isEmpty, toLower, upperFirst } from 'lodash-es'
import { Fragment, ReactNode, useMemo, useState } from 'react'
import { useNavigate } from 'react-router'
import { ErrorBanner, SynapseErrorBoundary } from '../../error/ErrorBanner'
import MarkdownSynapse from '../../Markdown/MarkdownSynapse'
import { UserBadge } from '../../UserCard/UserBadge'
import UserOrTeamBadge from '../../UserOrTeamBadge/UserOrTeamBadge'
import { FileHandleLink } from '../../widgets/FileHandleLink'
import RejectDataAccessRequestModal from '../RejectDataAccessRequestModal'

dayjs.extend(duration)

export type SubmissionPageProps = {
  /** The ID of the submission to view */
  submissionId: string | number
  /** If true, display reviewer controls on the page */
  isReviewer: boolean // There is currently no API to check if a user has review permissions on a specific submission ID
}

function DataAccessSubmissionFileHandleLink(props: {
  submissionId: string
  fileHandleId: string
}) {
  const { submissionId, fileHandleId } = props
  const fileHandleAssociation = useMemo(
    () => ({
      fileHandleId: fileHandleId,
      associateObjectId: submissionId,
      associateObjectType:
        FileHandleAssociateType.DataAccessSubmissionAttachment,
    }),
    [fileHandleId, submissionId],
  )
  return (
    <FileHandleLink
      key={fileHandleId}
      showDownloadIcon={true}
      fileHandleAssociation={fileHandleAssociation}
    />
  )
}

type AccessRequirementWikiType = {
  accessRequirementId: string
}

function AccessRequirementWiki(props: AccessRequirementWikiType) {
  const { data: wikiPageKey } = useGetAccessRequirementWikiPageKey(
    props.accessRequirementId,
    {
      throwOnError: true,
    },
  )

  return wikiPageKey ? (
    <div className="AccessRequirementWikiContainer">
      <div className="AccessRequirementWikiContent">
        <Typography variant="headline1">Access Requirement</Typography>
        <hr />
        <MarkdownSynapse
          wikiId={wikiPageKey?.wikiPageId}
          ownerId={wikiPageKey?.ownerObjectId}
          objectType={wikiPageKey?.ownerObjectType}
        />
      </div>
    </div>
  ) : (
    <Skeleton width={'100%'} height={'600px'} />
  )
}

/**
 * returns true iff the userId is a requester and/or listed on the accessor changes on the submission.
 * @param userId
 * @param submission
 */
function isRequesterOnSubmission(userId: string, submission: Submission) {
  return (
    submission.submittedBy === userId ||
    Boolean(submission.accessorChanges.find(acc => acc.userId === userId))
  )
}

/**
 * Page for a Data Access Submission. Supports the following user types:
 *  - ACT member or other designated reviewer can view, and choose to approve or reject.
 *  - Data Access Request submitter can view and modify their own submission.
 *  - Data Access Request requester (who is not a submitter) can view their own submission.
 */
export default function SubmissionPage(props: SubmissionPageProps) {
  const { submissionId, isReviewer } = props
  const [showRejectionDialog, setShowRejectionDialog] = useState(false)

  const { data: currentUserProfile } = useGetCurrentUserProfile()

  const {
    data: submission,
    isLoading: isLoadingSubmission,
    error: submissionLoadingError,
  } = useGetDataAccessSubmission(submissionId)
  const isRequester = Boolean(
    submission &&
      currentUserProfile &&
      isRequesterOnSubmission(currentUserProfile.ownerId, submission),
  )

  const { data: accessApproval, isLoading: isLoadingAccessApproval } =
    useGetUserAccessApproval(String(submissionId), {
      enabled:
        isRequester &&
        submission &&
        submission.state === SubmissionState.APPROVED,
    })

  const isExpired = Boolean(
    accessApproval && dayjs(accessApproval.expiredOn).isBefore(dayjs()),
  )

  const isSubmitter =
    submission && submission.submittedBy === currentUserProfile?.ownerId

  const { data: accessRequirement } =
    useGetAccessRequirements<ManagedACTAccessRequirement>(
      parseInt(submission?.accessRequirementId!),
      { enabled: !!submission },
    )

  const { data: acl, isLoading: isLoadingACL } = useGetAccessRequirementACL(
    submission?.accessRequirementId!,
    { enabled: !!submission, throwOnError: true },
  )

  const [showUpdateRequestDialog, setShowUpdateRequestDialog] = useState(false)
  const [
    showCancelRequestConfirmationDialog,
    setShowCancelRequestConfirmationDialog,
  ] = useState(false)
  const [showApprovalConfirmation, setShowApprovalConfirmation] =
    useState(false)

  const navigate = useNavigate()

  const reviewerIds = acl?.resourceAccess
    .filter(ra => ra.accessType.includes(ACCESS_TYPE.REVIEW_SUBMISSIONS))
    .map(ra => ra.principalId)

  const displayedSubmissionState: ReactNode = useMemo(() => {
    if (submission && !isLoadingAccessApproval) {
      if (isExpired) {
        return 'Expired'
      }
      return submission.state
    }
    return <Skeleton width={100} />
  }, [isExpired, isLoadingAccessApproval, submission])

  if (submissionLoadingError) {
    return <ErrorBanner error={submissionLoadingError} />
  }
  return (
    <Grid container={true} spacing={4} className="SubmissionPage">
      {showUpdateRequestDialog && accessRequirement && (
        <AccessRequirementList
          renderAsModal={true}
          accessRequirementFromProps={[accessRequirement]}
          onHide={() => setShowUpdateRequestDialog(false)}
          onSubmissionCreated={submissionId => {
            setShowUpdateRequestDialog(false)
            displayToast('Data access request submitted', 'success', {
              primaryButtonConfig: {
                text: 'View Request',
                onClick: () => {
                  navigate('/submissions/' + submissionId)
                },
              },
            })
          }}
        />
      )}
      <ApproveSubmissionConfirmationModal
        open={showApprovalConfirmation}
        onClose={() => {
          setShowApprovalConfirmation(false)
        }}
        submissionId={String(submissionId)}
      />
      {showRejectionDialog && (
        <RejectDataAccessRequestModal
          // Previously, we used a 'key' prop to reset the modal form when it was opened,
          // but removing the key and re-rendering the JSX achieves the same functionality in a more straightforward way.
          submissionId={submissionId}
          open={showRejectionDialog}
          onClose={() => setShowRejectionDialog(false)}
        />
      )}
      <Grid
        className="SubmissionSummary"
        size={{
          xs: 12,
          sm: 4,
          lg: 3,
        }}
      >
        <Typography variant="dataFieldKey" gutterBottom>
          Status
        </Typography>
        <Typography
          variant="headline3"
          sx={{ textTransform: 'uppercase' }}
          gutterBottom
        >
          {displayedSubmissionState}
        </Typography>
        <br />
        {isLoadingSubmission && <Skeleton width={200} />}
        {submission &&
          isReviewer &&
          submission.state === SubmissionState.SUBMITTED && (
            <div className="ButtonContainer">
              <Button
                onClick={() => {
                  setShowApprovalConfirmation(true)
                }}
                color="success"
                variant="contained"
              >
                Approve
              </Button>
              <Button
                onClick={() => {
                  setShowRejectionDialog(true)
                }}
                color="error"
                variant="contained"
              >
                Reject
              </Button>
            </div>
          )}

        {submission && isSubmitter && (
          <div className="ButtonContainer">
            <CancelDataAccessRequestConfirmationModal
              open={showCancelRequestConfirmationDialog}
              submissionId={String(submissionId)}
              accessRequirementId={submission?.accessRequirementId || ''}
              onClose={() => setShowCancelRequestConfirmationDialog(false)}
            />
            {submission.state === SubmissionState.SUBMITTED && (
              <Button
                onClick={() => {
                  setShowCancelRequestConfirmationDialog(true)
                }}
                color="primary"
                variant="outlined"
              >
                Cancel Request
              </Button>
            )}
            {submission.state !== SubmissionState.SUBMITTED && (
              <Button
                onClick={() => {
                  setShowUpdateRequestDialog(true)
                }}
                color="primary"
                variant="outlined"
              >
                {submission.state === SubmissionState.APPROVED
                  ? 'Update'
                  : 'Modify'}{' '}
                Request
              </Button>
            )}
          </div>
        )}
        <Typography variant="dataFieldKey" gutterBottom>
          Access Requirement Name
        </Typography>

        <Typography variant="smallText1" gutterBottom>
          {accessRequirement?.name ?? <Skeleton width={100} />}
        </Typography>
        <br />

        {isReviewer && (
          <>
            <Typography variant="dataFieldKey" gutterBottom>
              Assigned Reviewer
            </Typography>
            <Stack>
              {isLoadingACL && <Skeleton width={100} />}
              {!isLoadingACL &&
                !isEmpty(reviewerIds) &&
                reviewerIds!.map(id => {
                  return <UserOrTeamBadge key={id} principalId={id} />
                })}
              {!isLoadingACL && isEmpty(reviewerIds) && (
                <UserOrTeamBadge principalId={ACT_TEAM_ID} />
              )}
            </Stack>
            <br />
          </>
        )}
        <Typography variant="dataFieldKey" gutterBottom>
          Conditions
        </Typography>
        {accessRequirement ? (
          <Typography variant="smallText1" component={'div'} gutterBottom>
            <ul>
              <li>
                Expiration period:{' '}
                {dayjs
                  .duration({
                    milliseconds: accessRequirement.expirationPeriod,
                  })
                  .asDays()}{' '}
                day(s)
                {accessRequirement.expirationPeriod === 0 && ' (no expiration)'}
              </li>

              {accessRequirement.isCertifiedUserRequired && (
                <li>User must be Certified</li>
              )}
              {accessRequirement.isValidatedProfileRequired && (
                <li>User Profile must be Validated</li>
              )}
              {accessRequirement.isDUCRequired && <li>DUC is required</li>}
              {accessRequirement.isIDURequired && <li>IDU is required</li>}
              {accessRequirement.isIDUPublic && (
                <li>IDU will be made public</li>
              )}
              {accessRequirement.isIRBApprovalRequired && (
                <li>IRB Approval is required</li>
              )}
              {accessRequirement.areOtherAttachmentsRequired && (
                <li>Other attachments are required</li>
              )}
            </ul>
          </Typography>
        ) : (
          <Skeleton width={100} />
        )}
        <br />
        <div className="SubmissionSummaryGrid">
          <Typography variant="dataFieldKey">Submitted By</Typography>
          <Typography variant="smallText1">
            {submission ? (
              <UserBadge userId={submission.submittedBy} />
            ) : (
              <Skeleton width={100} />
            )}
          </Typography>
          <Typography variant="dataFieldKey">Submitted On</Typography>
          <Typography variant="smallText1">
            {submission ? (
              formatDate(dayjs(submission.submittedOn))
            ) : (
              <Skeleton width={100} />
            )}
          </Typography>
          {isReviewer && (
            <>
              <Typography variant="dataFieldKey">Modified By</Typography>
              <Typography variant="smallText1">
                {submission ? (
                  <UserBadge userId={submission.modifiedBy} />
                ) : (
                  <Skeleton width={100} />
                )}
              </Typography>
            </>
          )}
          <Typography variant="dataFieldKey">Modified On</Typography>
          <Typography variant="smallText1">
            {submission ? (
              formatDate(dayjs(submission.modifiedOn))
            ) : (
              <Skeleton width={100} />
            )}
          </Typography>
          <Typography className="Key" variant="dataFieldKey">
            Data Requesters
            {`${submission ? ` (${submission.accessorChanges.length})` : ''}`}
          </Typography>
          {submission ? (
            submission.accessorChanges.map(accessorChange => (
              <Fragment key={accessorChange.userId}>
                <Typography className="Key DataAccessor" variant="smallText1">
                  <span style={{ whiteSpace: 'nowrap' }}>
                    <UserBadge
                      key={accessorChange.userId}
                      userId={accessorChange.userId}
                    />
                  </span>
                </Typography>
                <Typography className="Value DataAccessor" variant="smallText1">
                  {upperFirst(
                    toLower(
                      accessorChange.type.substring(
                        0,
                        accessorChange.type.indexOf('_'),
                      ),
                    ),
                  )}
                </Typography>
              </Fragment>
            ))
          ) : (
            <Skeleton width={100} />
          )}
          <Typography className="Key" variant="dataFieldKey">
            Institution
          </Typography>
          <Typography className="Value" variant="smallText1">
            {submission ? (
              submission.researchProjectSnapshot.institution
            ) : (
              <Skeleton width={100} />
            )}
          </Typography>
          <Typography className="Key" variant="dataFieldKey">
            Project Lead
          </Typography>
          <Typography className="Value" variant="smallText1">
            {submission ? (
              submission.researchProjectSnapshot.projectLead
            ) : (
              <Skeleton width={100} />
            )}
          </Typography>
        </div>
      </Grid>
      <Grid
        size={{
          xs: 12,
          sm: 8,
          lg: 9,
        }}
      >
        <Stack sx={{ gap: 2 }}>
          <SynapseErrorBoundary>
            {submission ? (
              <AccessRequirementWiki
                accessRequirementId={submission.accessRequirementId}
              />
            ) : (
              <></>
            )}
          </SynapseErrorBoundary>
          {submission?.rejectedReason && (
            <section>
              <Typography variant="headline1" gutterBottom>
                Reason for rejection given by reviewer
              </Typography>
              <hr />
              <Typography
                variant="body1"
                style={{ whiteSpace: 'pre-line' }}
                gutterBottom
              >
                {submission.rejectedReason}
              </Typography>
            </section>
          )}
          <section>
            <Typography variant="headline1">
              Contents of the Access Request
              <hr />
            </Typography>
            <Stack
              sx={{
                gap: 2,
              }}
            >
              {submission?.researchProjectSnapshot
                ?.intendedDataUseStatement && (
                <section>
                  <Typography variant="headline2" gutterBottom>
                    Intended Data Use Statement
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{ whiteSpace: 'pre-line' }}
                    gutterBottom
                  >
                    {
                      submission.researchProjectSnapshot
                        .intendedDataUseStatement
                    }
                  </Typography>
                </section>
              )}
              <Typography variant="headline2" gutterBottom>
                Documents
              </Typography>
              {submission?.ducFileHandleId && (
                <section>
                  <Typography variant="smallText2">
                    Data Use Certificate (DUC)
                  </Typography>
                  <DataAccessSubmissionFileHandleLink
                    submissionId={submission.id}
                    fileHandleId={submission.ducFileHandleId}
                  />
                </section>
              )}
              {submission?.irbFileHandleId && (
                <section>
                  <Typography variant="smallText2" gutterBottom>
                    IRB Approval Letter
                  </Typography>
                  <DataAccessSubmissionFileHandleLink
                    submissionId={submission.id}
                    fileHandleId={submission.irbFileHandleId}
                  />
                </section>
              )}
              {submission?.attachments && (
                <section>
                  <Typography variant="smallText2" gutterBottom>
                    Other Attachments
                  </Typography>
                  {submission.attachments.map(fileHandleId => (
                    <Fragment key={fileHandleId}>
                      <DataAccessSubmissionFileHandleLink
                        submissionId={submission.id}
                        fileHandleId={fileHandleId}
                      />
                      <br />
                    </Fragment>
                  ))}
                </section>
              )}
            </Stack>
          </section>
        </Stack>
      </Grid>
    </Grid>
  )
}
