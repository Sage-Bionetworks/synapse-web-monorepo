import { Button, Stack, Typography } from '@mui/material'
import {
  Direction,
  SubmissionReviewerFilterType,
  SubmissionSearchRequest,
  SubmissionSearchSort,
  SubmissionSortField,
  SubmissionState,
} from '@sage-bionetworks/synapse-types'
import dayjs from 'dayjs'
import { upperFirst } from 'lodash-es'
import { useMemo, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router'
import SortIcon from '../../assets/icons/Sort'
import { useSearchAccessSubmissionsInfinite } from '../../synapse-queries/dataaccess/useDataAccessSubmission'
import { formatDate } from '../../utils/functions/DateFormatter'
import { ACT_TEAM_ID } from '../../utils/SynapseConstants'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import { UserBadge } from '../UserCard/UserBadge'
import UserOrTeamBadge from '../UserOrTeamBadge/UserOrTeamBadge'

export type AccessRequestSubmissionTableProps = {
  showSubmitter?: boolean
  showStatus?: boolean
  showRequesters?: boolean
  accessorId?: string
  accessRequirementId?: string
  reviewerId?: string
  submissionState?: SubmissionState
  reviewerFilterType?: SubmissionReviewerFilterType
}

export function AccessRequestSubmissionTable({
  showSubmitter,
  showStatus,
  showRequesters,
  accessorId,
  accessRequirementId,
  reviewerId,
  submissionState,
  reviewerFilterType,
}: AccessRequestSubmissionTableProps) {
  const [sort, setSort] = useState<SubmissionSearchSort>({
    field: SubmissionSortField.CREATED_ON,
    direction: Direction.DESC,
  })

  const searchRequest: SubmissionSearchRequest = useMemo(
    () => ({
      accessorId,
      accessRequirementId,
      submissionState,
      reviewerId,
      reviewerFilterType,
      sort: [sort],
    }),
    [
      accessorId,
      accessRequirementId,
      submissionState,
      reviewerId,
      reviewerFilterType,
      sort,
    ],
  )

  const { data, hasNextPage, fetchNextPage, isLoading } =
    useSearchAccessSubmissionsInfinite(searchRequest)

  const accessSubmissions = data?.pages.flatMap(page => page.results) ?? []

  const onSort = (field: SubmissionSortField) => {
    if (sort.field === field) {
      setSort({ field, direction: sort.direction === 'DESC' ? 'ASC' : 'DESC' })
    } else {
      setSort({ field, direction: 'DESC' })
    }
  }
  return (
    <div className="bootstrap-4-backport AccessSubmissionTable">
      <Table striped borderless bordered={false}>
        <thead>
          <tr>
            <th>REQUEST</th>
            <th>Access Requirement Name</th>
            {showSubmitter && <th>Submitter</th>}
            {showStatus && <th>Status</th>}
            {showRequesters && <th>Requesters</th>}
            <th>Reviewer(s)</th>
            <th>
              Created Date
              <SortIcon
                role="button"
                style={{ float: 'right' }}
                active={sort.field === SubmissionSortField.CREATED_ON}
                aria-label="Sort by Created On"
                direction={
                  sort.field === SubmissionSortField.CREATED_ON
                    ? sort.direction === 'DESC'
                      ? 'DESC'
                      : 'ASC'
                    : 'DESC'
                }
                onClick={() => onSort(SubmissionSortField.CREATED_ON)}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {accessSubmissions.map(item => {
            return (
              <tr key={item.id}>
                <td>
                  <Link to={`/Submissions/${item.id}`}>{item.id}</Link>
                </td>
                <td>{item.accessRequirementName}</td>
                {showSubmitter && (
                  <td>
                    <UserOrTeamBadge principalId={item.submitterId} />
                  </td>
                )}
                {showStatus && (
                  <td>{upperFirst(item.state.toLocaleLowerCase())}</td>
                )}
                {showRequesters && (
                  <td>
                    <UserOrTeamBadge principalId={item.submitterId} />
                    {item.accessorChanges
                      .filter(user => item.submitterId !== user.userId)
                      .map(requester => (
                        <li key={requester.userId}>
                          <UserBadge
                            userId={requester.userId}
                            className="requester"
                          />
                        </li>
                      ))}
                  </td>
                )}
                <td>
                  <Stack gap={1}>
                    {item.accessRequirementReviewerIds.length === 0 ? (
                      <UserOrTeamBadge principalId={ACT_TEAM_ID} />
                    ) : (
                      item.accessRequirementReviewerIds.map(reviewerId => (
                        <UserOrTeamBadge
                          key={reviewerId}
                          principalId={reviewerId}
                        />
                      ))
                    )}
                  </Stack>
                </td>
                <td>{formatDate(dayjs(item.createdOn))}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      {isLoading && (
        <div className="SRC-center-text">
          <SynapseSpinner size={40} />
        </div>
      )}
      {!isLoading && accessSubmissions.length == 0 && (
        <Typography className="SRC-center-text" variant="body1">
          No Results
        </Typography>
      )}
      {!hasNextPage ? (
        ''
      ) : (
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            fetchNextPage()
          }}
        >
          Show More
        </Button>
      )}
    </div>
  )
}
