import { getSortApiRequestFromTableSortState } from '@/components/dataaccess/UserAccessRequestHistory/SubmissionSortStateTranslator'
import InfiniteTableLayout from '@/components/layout/InfiniteTableLayout'
import { SkeletonTable } from '@/components/Skeleton'
import UserOrTeamBadge from '@/components/UserOrTeamBadge/UserOrTeamBadge'
import { useSearchAccessSubmissionUserRequestsInfinite } from '@/synapse-queries/dataaccess/useDataAccessSubmission'
import { formatDate } from '@/utils/functions/DateFormatter'
import { Typography } from '@mui/material'
import { UserSubmissionSearchResult } from '@sage-bionetworks/synapse-client'
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

  const isEmpty = !isLoading && table.getRowModel().rows.length === 0

  return (
    <InfiniteTableLayout
      table={<StyledTanStackTable table={table} fullWidth={true} />}
      isLoading={isLoading}
      loader={<SkeletonTable numCols={columns.length} fullWidthCells />}
      isEmpty={isEmpty}
      noResults={
        <Typography variant={'body1'} sx={{ textAlign: 'center', my: 2 }}>
          You have no access requests
        </Typography>
      }
      hasNextPage={hasNextPage}
      onFetchNextPageClicked={() => {
        void fetchNextPage()
      }}
      isFetchingNextPage={isFetchingNextPage}
    />
  )
}
