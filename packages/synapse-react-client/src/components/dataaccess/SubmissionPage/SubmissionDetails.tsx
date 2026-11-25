import { formatDate } from '@/utils/functions/DateFormatter'
import { Typography } from '@mui/material'
import {
  AccessType,
  ManagedACTAccessRequirement,
  Submission,
} from '@sage-bionetworks/synapse-types'
import dayjs from 'dayjs'
import { toLower, upperFirst } from 'lodash-es'
import { Fragment, ReactNode } from 'react'
import { UserBadge } from '../../UserCard/UserBadge'
import styles from './SubmissionDetails.module.scss'

/** e.g. `GAIN_ACCESS` → `Gain` */
function formatAccessorChangeType(type: AccessType): string {
  return upperFirst(toLower(type.substring(0, type.indexOf('_'))))
}

function SubmissionDetail(props: { label: string; children: ReactNode }) {
  return (
    <>
      <Typography variant="dataFieldKey" component="dt">
        {props.label}
      </Typography>
      <Typography variant="smallText1" component="dd">
        {props.children}
      </Typography>
    </>
  )
}

function SubmissionUser(props: { userId: string }) {
  return (
    <UserBadge
      userId={props.userId}
      showFullName
      className={styles.userBadge}
    />
  )
}

export type SubmissionDetailsProps = {
  submission: Submission
  /** Shown by ID alone until it loads */
  accessRequirement: ManagedACTAccessRequirement | undefined
  isReviewer: boolean
}

/** The submission's details, shown in the page's sidebar and as the header of its printed copy. */
export function SubmissionDetails(props: SubmissionDetailsProps) {
  const { submission, accessRequirement, isReviewer } = props
  return (
    <dl className={styles.details}>
      <SubmissionDetail label="Access Requirement">
        {accessRequirement
          ? `${accessRequirement.name} (${submission.accessRequirementId})`
          : submission.accessRequirementId}
      </SubmissionDetail>
      <SubmissionDetail label="Submission ID">{submission.id}</SubmissionDetail>
      <SubmissionDetail label="Submitted By">
        <SubmissionUser userId={submission.submittedBy} />
      </SubmissionDetail>
      <SubmissionDetail label="Submitted On">
        {formatDate(dayjs(submission.submittedOn))}
      </SubmissionDetail>
      {isReviewer && (
        <SubmissionDetail label="Modified By">
          <SubmissionUser userId={submission.modifiedBy} />
        </SubmissionDetail>
      )}
      <SubmissionDetail label="Modified On">
        {formatDate(dayjs(submission.modifiedOn))}
      </SubmissionDetail>
      <SubmissionDetail
        label={`Data Requesters (${submission.accessorChanges.length})`}
      >
        <span className={styles.requesters}>
          {submission.accessorChanges.map(accessorChange => (
            <Fragment key={accessorChange.userId}>
              <span>
                <SubmissionUser userId={accessorChange.userId} />
              </span>
              <span>{formatAccessorChangeType(accessorChange.type)}</span>
            </Fragment>
          ))}
        </span>
      </SubmissionDetail>
      {submission.researchProjectSnapshot && (
        <>
          <SubmissionDetail label="Institution">
            {submission.researchProjectSnapshot.institution}
          </SubmissionDetail>
          <SubmissionDetail label="Project Lead">
            {submission.researchProjectSnapshot.projectLead}
          </SubmissionDetail>
        </>
      )}
    </dl>
  )
}
