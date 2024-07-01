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
  ColumnSort,
  createColumnHelper,
  getCoreRowModel,
  SortingState,
  Table,
  useReactTable,
} from '@tanstack/react-table'
import React, { useMemo, useState } from 'react'
import { useSearchAccessRequirementsInfinite } from '../../synapse-queries'
import ColumnHeader from '../styled/ColumnHeader'
import { Link, Typography } from '@mui/material'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'
import { EntityLink } from '../EntityLink'
import UserOrTeamBadge from '../UserOrTeamBadge/UserOrTeamBadge'
import { ACT_TEAM_ID } from '../../utils/SynapseConstants'
import { formatDate } from '../../utils/functions/DateFormatter'
import dayjs from 'dayjs'

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
  }),
  columnHelper.accessor('name', {
    header: props => (
      <ColumnHeader {...props} title={'Access Requirement Name'} />
    ),
    cell: ({ getValue }) => getValue(),
    enableSorting: true,
  }),
  columnHelper.accessor('type', {
    header: props => <ColumnHeader {...props} title={'Type'} />,
    cell: ({ getValue }) =>
      accessRequirementConcreteTypeValueToDisplayValue(getValue()),
    enableSorting: false,
  }),
  columnHelper.accessor('relatedProjectIds', {
    header: props => <ColumnHeader {...props} title={'Related to Projects'} />,
    cell: ({ getValue }) => (
      <>
        {getValue().map(projectId => (
          <React.Fragment key={projectId}>
            <EntityLink entity={projectId} />{' '}
            <Typography
              component={'span'}
              variant={'smallText1'}
              color={'grey.700'}
            >
              ({projectId})
            </Typography>
            <br />
          </React.Fragment>
        ))}
      </>
    ),
    enableSorting: false,
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
  }),
  columnHelper.accessor('modifiedOn', {
    header: props => <ColumnHeader {...props} title={'Last Modified'} />,
    cell: ({ getValue }) => formatDate(dayjs(getValue())),
    enableSorting: false,
  }),
  columnHelper.accessor('createdOn', {
    header: props => <ColumnHeader {...props} title={'Created On'} />,
    cell: ({ getValue }) => formatDate(dayjs(getValue())),
    enableSorting: true,
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
}

export function useAccessRequirementTable(
  opts: UseAccessRequirementTableOptions,
) {
  const { nameOrID, relatedProjectId, reviewerId, accessType } = opts
  const [sortingState, setSortingState] = useState<SortingState>(
    DEFAULT_SORTING_STATE,
  )

  // Map the @tanstack/react-table state object to the Synapse API object
  const apiRequestSortState: AccessRequirementSearchRequest['sort'] =
    useMemo(() => {
      return sortingState.map((s: ColumnSort): AccessRequirementSearchSort => {
        const direction: SortDirection = s.desc ? 'DESC' : 'ASC'

        if (s.id == 'createdOn') {
          return {
            field: 'CREATED_ON',
            direction,
          }
        } else if (s.id == 'name') {
          return {
            field: 'NAME',
            direction,
          }
        } else {
          throw new Error(
            `Could not map sort field ${s.id} to AccessRequirementSortField`,
          )
        }
      })
    }, [sortingState])

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
      }
    }, [
      nameOrID,
      relatedProjectId,
      reviewerId,
      accessType,
      apiRequestSortState,
    ])

  const { data, hasNextPage, fetchNextPage, isLoading } =
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
      },
      onSortingChange: setSortingState,
      getRowId: row => row.id,
      getCoreRowModel: getCoreRowModel(),
      columnResizeMode: 'onChange',
      manualSorting: true,
      enableMultiSort: false,
      // Sort is required for this API call, so prevent the user from removing the sort.
      enableSortingRemoval: false,
    })

  return { table, isLoading, hasNextPage, fetchNextPage }
}
