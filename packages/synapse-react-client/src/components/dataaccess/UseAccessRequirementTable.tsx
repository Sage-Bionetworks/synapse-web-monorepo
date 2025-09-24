import { useSearchAccessRequirementsInfinite } from '@/synapse-queries'
import { formatDate } from '@/utils/functions/DateFormatter'
import { PRODUCTION_ENDPOINT_CONFIG } from '@/utils/functions/getEndpoint'
import { ACT_TEAM_ID } from '@/utils/SynapseConstants'
import { Link, Typography } from '@mui/material'
import {
  ACCESS_REQUIREMENT_CONCRETE_TYPE,
  ACCESS_TYPE,
  AccessRequirementSearchRequest,
  AccessRequirementSearchResult,
  AccessRequirementSearchSort,
  ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_DISPLAY_VALUE,
  ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  LOCK_ACCESS_REQUIREMENT_CONCRETE_TYPE_DISPLAY_VALUE,
  LOCK_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_DISPLAY_VALUE,
  MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE_DISPLAY_VALUE,
  SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  SortDirection,
  TERMS_OF_USE_ACCESS_REQUIREMENT_CONCRETE_TYPE_DISPLAY_VALUE,
  TERMS_OF_USE_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
} from '@sage-bionetworks/synapse-types'
import {
  ColumnFiltersState,
  ColumnSort,
  createColumnHelper,
  getCoreRowModel,
  getFacetedUniqueValues as defaultGetFacetedUniqueValues,
  SortingState,
  Table,
  Updater,
  useReactTable,
} from '@tanstack/react-table'
import dayjs from 'dayjs'
import { noop } from 'lodash-es'
import { Fragment, useCallback, useMemo, useState } from 'react'
import { EntityLink } from '../EntityLink'
import ColumnHeader from '../TanStackTable/ColumnHeader'
import UserOrTeamBadge from '../UserOrTeamBadge/UserOrTeamBadge'

export function accessRequirementConcreteTypeValueToDisplayValue(
  accessRequirementConcreteTypeValue: ACCESS_REQUIREMENT_CONCRETE_TYPE,
) {
  switch (accessRequirementConcreteTypeValue) {
    case TERMS_OF_USE_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE:
      return TERMS_OF_USE_ACCESS_REQUIREMENT_CONCRETE_TYPE_DISPLAY_VALUE
    case SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE: {
      return SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE_DISPLAY_VALUE
    }
    case MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE:
      return MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_DISPLAY_VALUE
    case ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE:
      return ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_DISPLAY_VALUE
    case LOCK_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE:
      return LOCK_ACCESS_REQUIREMENT_CONCRETE_TYPE_DISPLAY_VALUE
    default:
      return 'Unknown'
  }
}

const ALL_ACCESS_REQUIREMENT_CONCRETE_TYPES = [
  TERMS_OF_USE_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  LOCK_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
]

const isIntegerInput = (v: string): boolean => {
  return /^\d+$/.test(v)
}
const columnHelper = createColumnHelper<AccessRequirementSearchResult>()
const columns = [
  columnHelper.accessor('id', {
    header: props => <ColumnHeader {...props} title={'AR ID'} />,
    cell: ({ getValue }) => (
      <Link
        href={`${
          PRODUCTION_ENDPOINT_CONFIG.PORTAL
        }AccessRequirement:AR_ID=${getValue()}`}
      >
        {getValue()}
      </Link>
    ),
    enableSorting: false,
    enableColumnFilter: false,
  }),
  columnHelper.accessor('name', {
    header: props => (
      <ColumnHeader {...props} title={'Access Requirement Name'} />
    ),
    cell: ({ getValue }) => getValue(),
    enableSorting: true,
    enableColumnFilter: false,
  }),
  columnHelper.accessor('type', {
    header: props => <ColumnHeader {...props} title={'Type'} />,
    cell: ({ getValue }) =>
      accessRequirementConcreteTypeValueToDisplayValue(getValue()),
    enableSorting: false,
    enableColumnFilter: true,
    meta: {
      filterVariant: 'enumeration',
      getDisplayText: accessRequirementConcreteTypeValueToDisplayValue,
      enableMultipleSelect: false,
    },
  }),
  columnHelper.accessor('relatedProjectIds', {
    header: props => <ColumnHeader {...props} title={'Related to Projects'} />,
    cell: ({ getValue }) => (
      <>
        {getValue().map(projectId => (
          <Fragment key={projectId}>
            <EntityLink entity={projectId} />{' '}
            <Typography
              component={'span'}
              variant={'smallText1'}
              sx={{
                color: 'grey.700',
              }}
            >
              ({projectId})
            </Typography>
            <br />
          </Fragment>
        ))}
      </>
    ),
    enableSorting: false,
    enableColumnFilter: false,
  }),
  columnHelper.accessor('reviewerIds', {
    header: props => <ColumnHeader {...props} title={'Reviewer'} />,
    cell: ({ getValue }) => (
      <>
        {getValue().length === 0 ? (
          <UserOrTeamBadge principalId={ACT_TEAM_ID} />
        ) : (
          getValue().map(reviewerId => (
            <UserOrTeamBadge key={reviewerId} principalId={reviewerId} />
          ))
        )}
      </>
    ),
    enableSorting: false,
    enableColumnFilter: false,
  }),
  columnHelper.accessor('modifiedOn', {
    header: props => <ColumnHeader {...props} title={'Last Modified'} />,
    cell: ({ getValue }) => formatDate(dayjs(getValue())),
    enableSorting: false,
    enableColumnFilter: false,
  }),
  columnHelper.accessor('createdOn', {
    header: props => <ColumnHeader {...props} title={'Created On'} />,
    cell: ({ getValue }) => formatDate(dayjs(getValue())),
    enableSorting: true,
    enableColumnFilter: false,
  }),
]
const DEFAULT_SORTING_STATE: SortingState = [
  {
    desc: true,
    id: 'createdOn',
  },
]
type UseAccessRequirementTableOptions = {
  nameOrID?: string
  relatedProjectId?: string
  reviewerId?: string
  accessType?: ACCESS_TYPE
  typeFilter?: string
  onTypeFilterChange?: (typeFilter: string | undefined) => void
}

function columnSortToAccessRequirementSearchSort(
  columnSort: ColumnSort,
): AccessRequirementSearchSort {
  const direction: SortDirection = columnSort.desc ? 'DESC' : 'ASC'

  if (columnSort.id == 'createdOn') {
    return {
      field: 'CREATED_ON',
      direction,
    }
  } else if (columnSort.id == 'name') {
    return {
      field: 'NAME',
      direction,
    }
  } else {
    throw new Error(
      `Could not map sort field ${columnSort.id} to AccessRequirementSortField`,
    )
  }
}

function getTypeFilterFromColumnFilters(
  columnFilters?: ColumnFiltersState,
): string | undefined {
  const matchingFilter = (columnFilters || []).find(f => f.id === 'type')
  const filterValues = matchingFilter?.value
  if (filterValues) {
    return (filterValues as string[])[0]
  }
  return undefined
}

export function useAccessRequirementTable(
  opts: UseAccessRequirementTableOptions,
) {
  const {
    nameOrID,
    relatedProjectId,
    reviewerId,
    accessType,
    typeFilter,
    onTypeFilterChange = noop,
  } = opts
  const [sortingState, setSortingState] = useState<SortingState>(
    DEFAULT_SORTING_STATE,
  )

  const columnFilters = useMemo(
    () => (typeFilter ? [{ id: 'type', value: [typeFilter] }] : []),
    [typeFilter],
  )

  const onColumnFiltersChange = useCallback(
    (updaterOrValue: Updater<ColumnFiltersState>) => {
      const newValue: ColumnFiltersState =
        typeof updaterOrValue === 'function'
          ? updaterOrValue(columnFilters)
          : updaterOrValue

      // Unlike the other controls, the type filter control is inside the table. State is still stored in the parent component.
      // When the user updates the filter, this function will fire, so we must propagate changes to the type filter to the parent.
      const typeFilter = getTypeFilterFromColumnFilters(newValue)
      onTypeFilterChange(typeFilter)
    },
    [columnFilters, onTypeFilterChange],
  )

  // Map the @tanstack/react-table sort state object to the Synapse API object
  const apiRequestSortState: AccessRequirementSearchRequest['sort'] = useMemo(
    () => sortingState.map(columnSortToAccessRequirementSearchSort),
    [sortingState],
  )

  const searchRequest: Omit<AccessRequirementSearchRequest, 'nextPageToken'> =
    useMemo(() => {
      // SWC-6615: If the input string is a single integer, assume it's the AR ID.  Otherwise, use as the nameContains field.
      let nameContains: string | undefined = undefined
      let ids: number[] | undefined = undefined
      if (nameOrID !== undefined) {
        const nameOrIDTrimmed = nameOrID.trim()
        if (isIntegerInput(nameOrIDTrimmed)) {
          ids = [Number.parseInt(nameOrIDTrimmed)]
        } else {
          nameContains = nameOrIDTrimmed
        }
      }
      return {
        ids,
        nameContains,
        relatedProjectId,
        reviewerId,
        accessType,
        sort: apiRequestSortState,
        type: typeFilter,
      }
    }, [
      nameOrID,
      relatedProjectId,
      reviewerId,
      accessType,
      apiRequestSortState,
      typeFilter,
    ])

  const { data, hasNextPage, fetchNextPage, isLoading, isFetchingNextPage } =
    useSearchAccessRequirementsInfinite(searchRequest)

  const accessRequirements = useMemo(
    () => data?.pages.flatMap(page => page.results) ?? [],
    [data],
  )

  const table: Table<AccessRequirementSearchResult> =
    useReactTable<AccessRequirementSearchResult>({
      data: accessRequirements,
      columns: columns,
      state: {
        sorting: sortingState,
        columnFilters: columnFilters,
      },
      getFacetedUniqueValues: (
        table: Table<AccessRequirementSearchResult>,
        columnId: string,
      ) => {
        if (columnId === 'type') {
          // Hard-code the set of possible access requirement types with count = 0 to indicate that we don't have facet counts.
          return () =>
            new Map(ALL_ACCESS_REQUIREMENT_CONCRETE_TYPES.map(v => [v, 0]))
        }
        return defaultGetFacetedUniqueValues<AccessRequirementSearchResult>()(
          table,
          columnId,
        )
      },
      onSortingChange: setSortingState,
      onColumnFiltersChange: onColumnFiltersChange,
      getRowId: row => row.id,
      getCoreRowModel: getCoreRowModel(),
      columnResizeMode: 'onChange',
      manualSorting: true,
      enableMultiSort: false,
      // Sort is required for this API call, so prevent the user from removing the sort.
      enableSortingRemoval: false,
      manualFiltering: true,
    })

  return { table, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage }
}
