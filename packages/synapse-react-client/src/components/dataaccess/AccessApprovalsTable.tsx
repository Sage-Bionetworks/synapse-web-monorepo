import InfiniteTableLayout from '@/components/layout/InfiniteTableLayout'
import { useSearchAccessApprovalsInfinite } from '@/synapse-queries/dataaccess/useAccessApprovals'
import { formatDate } from '@/utils/functions/DateFormatter'
import { PRODUCTION_ENDPOINT_CONFIG } from '@/utils/functions/getEndpoint'
import {
  AccessApprovalSearchRequest,
  AccessApprovalSearchResult,
  AccessApprovalSearchSort,
  AccessApprovalSortField,
  Direction,
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
import ColumnHeader from '../TanStackTable/ColumnHeader'
import StyledTanStackTable from '../TanStackTable/StyledTanStackTable'
import UserOrTeamBadge from '../UserOrTeamBadge/index'

const columnHelper = createColumnHelper<AccessApprovalSearchResult>()
const columns = [
  columnHelper.accessor('accessRequirementId', {
    header: props => <ColumnHeader {...props} title={'AR ID'} />,
    enableSorting: false,
    cell: ctx => (
      <a
        href={`${
          PRODUCTION_ENDPOINT_CONFIG.PORTAL
        }AccessRequirement:AR_ID=${ctx.getValue()}`}
        target={'_blank'}
      >
        {ctx.getValue()}
      </a>
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
  columnHelper.accessor('modifiedOn', {
    header: props => <ColumnHeader {...props} title={'Modified Date'} />,
    enableSorting: true,
    cell: ctx => formatDate(dayjs(ctx.getValue())),
  }),
  columnHelper.accessor('expiredOn', {
    header: props => <ColumnHeader {...props} title={'Expires'} />,
    enableSorting: true,
    cell: ctx => (
      <span
        className={`${
          ctx.getValue()
            ? new Date() > new Date(ctx.getValue())
              ? 'expired'
              : ''
            : 'non-expire'
        } remove-border`}
      >
        {ctx.getValue() ? formatDate(dayjs(ctx.getValue())) : 'Never'}
      </span>
    ),
  }),
]

function getSortApiRequestFromTableSortState(
  sortingState: SortingState,
): AccessApprovalSearchSort[] | undefined {
  if (sortingState.length === 0) {
    return undefined
  }
  const sort = sortingState[0]
  let field: AccessApprovalSortField = AccessApprovalSortField.MODIFIED_ON
  if (sort.id === 'modifiedOn') {
    field = AccessApprovalSortField.MODIFIED_ON
  } else if (sort.id === 'expiredOn') {
    field = AccessApprovalSortField.EXPIRED_ON
  }
  return [
    {
      field,
      direction: sort.desc ? Direction.DESC : Direction.ASC,
    },
  ]
}

export type AccessApprovalsTableProps = {
  accessorId: string
  accessRequirementId?: string
}
export function AccessApprovalsTable({
  accessorId,
  accessRequirementId,
}: AccessApprovalsTableProps) {
  const [tableSortState, setTableSortState] = useState<SortingState>([
    {
      desc: true,
      id: 'modifiedOn',
    },
  ])

  const searchRequest: AccessApprovalSearchRequest = useMemo(
    () => ({
      accessorId,
      accessRequirementId,
      sort: getSortApiRequestFromTableSortState(tableSortState),
    }),
    [accessorId, accessRequirementId, tableSortState],
  )

  const { data, hasNextPage, fetchNextPage, isLoading, isFetchingNextPage } =
    useSearchAccessApprovalsInfinite(searchRequest)
  const accessApprovals = useMemo(
    () => data?.pages.flatMap(page => page.results) ?? [],
    [data?.pages],
  )

  const table = useReactTable<AccessApprovalSearchResult>({
    data: accessApprovals,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    manualSorting: true,
    onSortingChange: setTableSortState,
    state: {
      sorting: tableSortState,
    },
    columnResizeMode: 'onChange',
  })

  const isEmpty = !isLoading && table.getRowModel().rows.length === 0

  return (
    <div className="AccessApprovalsTable">
      <InfiniteTableLayout
        table={<StyledTanStackTable table={table} />}
        isLoading={isLoading}
        isEmpty={isEmpty}
        hasNextPage={hasNextPage}
        onFetchNextPageClicked={() => {
          void fetchNextPage()
        }}
        isFetchingNextPage={isFetchingNextPage}
      />
    </div>
  )
}
