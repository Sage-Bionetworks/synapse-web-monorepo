import { UserBadge } from '@/components/UserCard/UserBadge'
import { formatDate } from '@/utils/functions/DateFormatter'
import { Typography } from '@mui/material'
import { AccessType, Submission } from '@sage-bionetworks/synapse-types'
import dayjs from 'dayjs'
import { toLower, upperFirst } from 'lodash-es'
import { ReactNode } from 'react'

export const SUBMISSION_PRINT_TITLE = 'Data Access Request'

/** e.g. `GAIN_ACCESS` → `Gain` */
export function formatAccessorChangeType(type: AccessType): string {
  return upperFirst(toLower(type.substring(0, type.indexOf('_'))))
}

function PrintedUserName(props: { userId: string }) {
  return (
    <UserBadge
      userId={props.userId}
      showFullName
      showCardOnHover={false}
      disableLink
    />
  )
}

function PrintedField(props: { label: string; children: ReactNode }) {
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

export type SubmissionPrintHeaderProps = {
  submission: Submission
  accessRequirementName: string | undefined
  displayedSubmissionState: ReactNode
}

/**
 * The title and submission details that open the printed submission, in place of the page's
 * sidebar. Users are named in full with their username, so the printout identifies them on its own.
 */
export function SubmissionPrintHeader(props: SubmissionPrintHeaderProps) {
  const { submission, accessRequirementName, displayedSubmissionState } = props
  return (
    <header className="SubmissionPrintHeader">
      <Typography variant="headline1" component="h1">
        {SUBMISSION_PRINT_TITLE}
      </Typography>
      <dl>
        <PrintedField label="Access Requirement">
          {accessRequirementName} ({submission.accessRequirementId})
        </PrintedField>
        <PrintedField label="Submission ID">{submission.id}</PrintedField>
        <PrintedField label="Status">{displayedSubmissionState}</PrintedField>
        <PrintedField label="Submitted By">
          <PrintedUserName userId={submission.submittedBy} />
        </PrintedField>
        <PrintedField label="Submitted On">
          {formatDate(dayjs(submission.submittedOn))}
        </PrintedField>
        <PrintedField label="Data Requesters">
          {submission.accessorChanges.map(accessorChange => (
            <span key={accessorChange.userId} className="PrintedDataRequester">
              <PrintedUserName userId={accessorChange.userId} /> —{' '}
              {formatAccessorChangeType(accessorChange.type)}
            </span>
          ))}
        </PrintedField>
        {submission.researchProjectSnapshot && (
          <>
            <PrintedField label="Institution">
              {submission.researchProjectSnapshot.institution}
            </PrintedField>
            <PrintedField label="Project Lead">
              {submission.researchProjectSnapshot.projectLead}
            </PrintedField>
          </>
        )}
      </dl>
    </header>
  )
}
