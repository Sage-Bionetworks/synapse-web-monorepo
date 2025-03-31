import { useSearchAccessSubmissionsInfinite } from '@/synapse-queries/dataaccess/useDataAccessSubmission'
import { formatDate } from '@/utils/functions/DateFormatter'
import { ACT_TEAM_ID } from '@/utils/SynapseConstants'
import { Button, Stack, Typography } from '@mui/material'
import {
  Direction,
  SubmissionReviewerFilterType,
  SubmissionSearchRequest,
  SubmissionSearchResult,
  SubmissionSearchSort,
  SubmissionSortField,
  SubmissionState,
} from '@sage-bionetworks/synapse-types'
import {
  createColumnHelper,
  getCoreRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import dayjs from 'dayjs'
import { upperFirst } from 'lodash-es'
import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import ColumnHeader from '../TanStackTable/ColumnHeader'
import StyledTanStackTable from '../TanStackTable/StyledTanStackTable'
import { UserBadge } from '../UserCard/UserBadge'
import UserOrTeamBadge from '../UserOrTeamBadge/UserOrTeamBadge'

const columnHelper = createColumnHelper<SubmissionSearchResult>()
const columns = [
  columnHelper.accessor('id', {
    header: props => <ColumnHeader {...props} title={'Request'} />,
    enableSorting: false,
    cell: ctx => (
      <Link to={`/Submissions/${ctx.getValue()}`}>{ctx.getValue()}</Link>
    ),
  }),
  columnHelper.accessor('accessRequirementName', {
    header: props => (
      <ColumnHeader {...props} title={'Access Requirement Name'} />
    ),
    enableSorting: false,
  }),
  columnHelper.accessor('submitterId', {
    header: props => <ColumnHeader {...props} title={'Submitter'} />,
    enableSorting: false,
    cell: ctx => <UserOrTeamBadge principalId={ctx.getValue()} />,
  }),
  columnHelper.accessor('state', {
    header: props => <ColumnHeader {...props} title={'Status'} />,
    enableSorting: false,
    cell: ctx => upperFirst(ctx.getValue().toLocaleLowerCase()),
  }),

  columnHelper.accessor('accessorChanges', {
    header: props => <ColumnHeader {...props} title={'Requesters'} />,
    enableSorting: false,
    cell: ctx => (
      <Stack gap={1}>
        <UserOrTeamBadge principalId={ctx.row.original.submitterId} />
        {ctx
          .getValue()
          .filter(user => ctx.row.original.submitterId !== user.userId)
          .map(requester => (
            <UserBadge
              key={requester.userId}
              userId={requester.userId}
              className="requester"
            />
          ))}
      </Stack>
    ),
  }),
  columnHelper.accessor('accessRequirementReviewerIds', {
    header: props => <ColumnHeader {...props} title={'Reviewer(s)'} />,
    enableSorting: false,
    cell: ctx => (
      <Stack gap={1}>
        {ctx.getValue().length === 0 ? (
          <UserOrTeamBadge principalId={ACT_TEAM_ID} />
        ) : (
          ctx
            .getValue()
            .map(reviewerId => (
              <UserOrTeamBadge key={reviewerId} principalId={reviewerId} />
            ))
        )}
      </Stack>
    ),
  }),
  columnHelper.accessor('createdOn', {
    header: props => <ColumnHeader {...props} title={'Created Date'} />,
    enableSorting: true,
    cell: ctx => formatDate(dayjs(ctx.getValue())),
    sortDescFirst: true,
  }),
]

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

function getSortApiRequestFromTableSortState(
  sortingState: SortingState,
): SubmissionSearchSort[] | undefined {
  if (sortingState.length === 0) {
    return undefined
  }
  const sort = sortingState[0]
  let field: SubmissionSortField = SubmissionSortField.CREATED_ON
  if (sort.id === 'createdOn') {
    field = SubmissionSortField.CREATED_ON
  } else if (sort.id === 'modifiedOn') {
    field = SubmissionSortField.MODIFIED_ON
  }
  return [
    {
      field,
      direction: sort.desc ? Direction.DESC : Direction.ASC,
    },
  ]
}

export function AccessRequestSubmissionTable({
  showSubmitter = false,
  showStatus = false,
  showRequesters = false,
  accessorId,
  accessRequirementId,
  reviewerId,
  submissionState,
  reviewerFilterType,
}: AccessRequestSubmissionTableProps) {
  const [tableSortState, setTableSortState] = useState<SortingState>([
    {
      desc: true,
      id: 'createdOn',
    },
  ])

  const searchRequest: SubmissionSearchRequest = useMemo(
    () => ({
      accessorId,
      accessRequirementId,
      submissionState,
      reviewerId,
      reviewerFilterType,
      sort: getSortApiRequestFromTableSortState(tableSortState),
    }),
    [
      accessorId,
      accessRequirementId,
      submissionState,
      reviewerId,
      reviewerFilterType,
      tableSortState,
    ],
  )

  const { data, hasNextPage, fetchNextPage, isLoading } =
    useSearchAccessSubmissionsInfinite(searchRequest)

  const accessSubmissions = useMemo(
    () => data?.pages.flatMap(page => page.results) ?? [],
    [data?.pages],
  )

  const table = useReactTable<SubmissionSearchResult>({
    data: accessSubmissions,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    enableFilters: false, // filters are handled by separate controls
    manualSorting: true,
    onSortingChange: setTableSortState,
    state: {
      sorting: tableSortState,
      columnVisibility: {
        submitterId: showSubmitter,
        state: showStatus,
        accessorChanges: showRequesters,
      },
    },
    columnResizeMode: 'onChange',
  })

  return (
    <div className={'AccessSubmissionTable'}>
      <StyledTanStackTable table={table} fullWidth={true} />
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
      {hasNextPage && (
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            void fetchNextPage()
          }}
        >
          Show More
        </Button>
      )}
    </div>
  )
}
