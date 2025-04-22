import { SkeletonTable } from '@/components/Skeleton'
import { useSearchAccessSubmissionUserRequestsInfinite } from '@/synapse-queries/dataaccess/useDataAccessSubmission'
import { formatDate } from '@/utils/functions/DateFormatter'
import { Button, Typography } from '@mui/material'
import {
  Direction,
  SubmissionSearchSort,
  SubmissionSortField,
  UserSubmissionSearchResult,
} from '@sage-bionetworks/synapse-client'
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
import ColumnHeader from '../../TanStackTable/ColumnHeader'
import StyledTanStackTable from '../../TanStackTable/StyledTanStackTable'
import UserOrTeamBadge from '@/components/UserOrTeamBadge/UserOrTeamBadge'
import { USER_ACCESS_HISTORY_SUBMISSION_SUBPATH } from './RouteConstants'

const columnHelper = createColumnHelper<UserSubmissionSearchResult>()
const columns = [
  columnHelper.accessor('accessRequirementName', {
    header: props => (
      <ColumnHeader {...props} title={'Access Requirement Name'} />
    ),
    enableSorting: false,
    enableColumnFilter: false,
  }),
  columnHelper.accessor('state', {
    header: props => <ColumnHeader {...props} title={'Status'} />,
    enableSorting: false,
    cell: ctx => {
      if (
        ctx.row.original.userAccessApproval &&
        ctx.row.original.userAccessApproval.expiredOn &&
        dayjs(ctx.row.original.userAccessApproval.expiredOn).isBefore(dayjs())
      ) {
        return 'Expired'
      }
      return upperFirst(ctx.getValue()!.toLocaleLowerCase())
    },
    enableColumnFilter: false,
    size: 75,
  }),
  columnHelper.accessor('createdOn', {
    header: props => <ColumnHeader {...props} title={'Date Submitted'} />,
    enableSorting: true,
    cell: ctx => formatDate(dayjs(ctx.getValue())),
    sortDescFirst: true,
    enableColumnFilter: false,
  }),
  columnHelper.display({
    id: 'expires',
    header: props => <ColumnHeader {...props} title={'Expires'} />,
    enableSorting: false,
    cell: ctx => {
      if (
        ctx.row.original.userAccessApproval &&
        ctx.row.original.userAccessApproval.expiredOn
      ) {
        return formatDate(dayjs(ctx.row.original.userAccessApproval.expiredOn))
      }
      return null
    },
    size: 75,
    enableColumnFilter: false,
  }),

  columnHelper.accessor('submitterId', {
    header: props => <ColumnHeader {...props} title={'Submitter'} />,
    enableSorting: false,
    cell: ctx => <UserOrTeamBadge principalId={ctx.getValue()} />,
    enableColumnFilter: false,
  }),

  columnHelper.accessor('id', {
    header: props => <ColumnHeader {...props} title={''} />,
    enableSorting: false,
    cell: ctx => (
      <>
        <Link
          to={`/${USER_ACCESS_HISTORY_SUBMISSION_SUBPATH}/${ctx.getValue()}`}
        >
          View Request
        </Link>
      </>
    ),
    size: 95,
    enableColumnFilter: false,
  }),
]

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

export function UserAccessRequestHistoryTable() {
  const [tableSortState, setTableSortState] = useState<SortingState>([
    {
      desc: true,
      id: 'createdOn',
    },
  ])

  const {
    data: infiniteData,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useSearchAccessSubmissionUserRequestsInfinite({
    sort: getSortApiRequestFromTableSortState(tableSortState),
  })

  const data = useMemo(
    () => infiniteData?.pages.flatMap(page => page.results || []) || [],
    [infiniteData],
  )

  const table = useReactTable({
    data: data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualSorting: true,
    columnResizeMode: 'onChange',
    state: {
      sorting: tableSortState,
    },
    onSortingChange: setTableSortState,
  })

  if (isLoading) {
    return <SkeletonTable numCols={columns.length} fullWidthCells />
  }

  if (data.length === 0) {
    return (
      <Typography variant={'body1'} sx={{ textAlign: 'center', my: 2 }}>
        You have no access requests
      </Typography>
    )
  }

  return (
    <>
      <StyledTanStackTable table={table} fullWidth={true} />
      {hasNextPage && (
        <Button
          variant="outlined"
          onClick={() => void fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          Load More
        </Button>
      )}
    </>
  )
}
