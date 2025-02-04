import { Button, Typography } from '@mui/material'
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
import { useSearchAccessApprovalsInfinite } from '../../synapse-queries/dataaccess/useAccessApprovals'
import { formatDate } from '../../utils/functions/DateFormatter'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
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

  const { data, hasNextPage, fetchNextPage, isLoading } =
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

  return (
    <div className="AccessApprovalsTable">
      <StyledTanStackTable table={table} />
      {isLoading && (
        <div className="SRC-center-text">
          <SynapseSpinner size={40} />
        </div>
      )}
      {!isLoading && accessApprovals.length === 0 && (
        <Typography className="SRC-center-text" variant="body1">
          No Results
        </Typography>
      )}
      {hasNextPage && (
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
