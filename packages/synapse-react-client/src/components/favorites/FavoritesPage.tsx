import NoSearchResults from '@/assets/icons/NoSearchResults'
import { useGetFavorites } from '@/synapse-queries/user/useFavorites'
import { useSynapseContext } from '@/stores/SynapseContext/SynapseContext'
import {
  convertToEntityType,
  entityTypeToFriendlyName,
} from '@/utils/functions/EntityTypeUtils'
import { PRODUCTION_ENDPOINT_CONFIG } from '@/utils/functions/getEndpoint'
import { InputAdornment, Stack, TextField } from '@mui/material'
import { EntityHeader } from '@sage-bionetworks/synapse-types'
import {
  createColumnHelper,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useEffect, useMemo, useState } from 'react'
import { EntityTypeIcon } from '../EntityIcon'
import { ErrorBanner } from '../error/ErrorBanner'
import IconSvg from '../IconSvg/IconSvg'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import ColumnHeader from '../TanStackTable/ColumnHeader'
import StyledTanStackTable from '../TanStackTable/StyledTanStackTable'
import FavoriteButton from './FavoriteButton'

// Local types used for client-side sorting
export type SortField = 'name' | 'type'
export type SortDirection = 'ASC' | 'DESC'
export type Sort = {
  field: SortField
  direction: SortDirection
}

const columnHelper = createColumnHelper<EntityHeader>()

const columns = [
  columnHelper.display({
    id: 'removeFavorite',
    cell: ctx => <FavoriteButton entityId={ctx.row.original.id} />,
    size: 60,
    enableResizing: false,
    meta: {
      textAlign: 'center',
    },
  }),
  columnHelper.accessor('name', {
    cell: ctx => (
      <a
        rel="noopener noreferrer"
        href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}Synapse:${ctx.row.original.id}`}
      >
        {ctx.row.original.name}
      </a>
    ),
    enableGlobalFilter: true,
    header: props => <ColumnHeader {...props} title={'Name'} />,
    size: 400,
    enableColumnFilter: false,
    sortingFn: 'alphanumeric',
    enableSorting: true,
  }),
  columnHelper.accessor('type', {
    cell: ctx => {
      const entityType = convertToEntityType(ctx.row.original.type)
      return (
        <>
          <EntityTypeIcon type={entityType} style={{ marginRight: '5px' }} />
          {entityTypeToFriendlyName(entityType)}
        </>
      )
    },
    header: props => <ColumnHeader {...props} title={'Type'} />,
    size: 160,
    enableGlobalFilter: false,
    sortingFn: 'alphanumeric',
    filterFn: 'arrIncludes',
    meta: {
      enableMultipleSelect: true,
      filterVariant: 'enumeration',
      getDisplayText: value =>
        entityTypeToFriendlyName(convertToEntityType(value)),
    },
    enableSorting: true,
  }),
]

export default function FavoritesPage() {
  const { accessToken } = useSynapseContext()
  const [searchText, setSearchText] = useState<string>('')
  const [error, setError] = useState<Error>()
  const { data, isLoading, isError, error: newError } = useGetFavorites()

  const favorites = useMemo(() => data ?? [], [data])

  const favoritesTable = useReactTable<EntityHeader>({
    data: favorites,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    globalFilterFn: 'includesString',
    state: {
      globalFilter: searchText,
    },
    columnResizeMode: 'onChange',
  })

  useEffect(() => {
    if (isError && newError) {
      setError(newError)
    }
  }, [isError, newError])

  useEffect(() => {
    if (!accessToken) {
      setError(new Error('Please sign in to access your favorites.'))
    } else {
      setError(undefined)
    }
  }, [accessToken])

  if (error) {
    return <ErrorBanner error={error} />
  }

  const hasFavoritesMatchingQuery = favoritesTable.getRowModel().rows.length > 0

  return (
    <div className="FavoritesPage">
      <TextField
        type="search"
        placeholder="Favorite Name"
        value={searchText}
        onChange={event => {
          setSearchText(event.target.value)
        }}
        fullWidth
        sx={{ mb: 4, maxWidth: '800px' }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <IconSvg icon="search" wrap={false} />
              </InputAdornment>
            ),
          },
        }}
      />
      <StyledTanStackTable table={favoritesTable} fullWidth={false} />
      {!hasFavoritesMatchingQuery && !isLoading && (
        <Stack
          sx={{
            my: 2,
            gap: 1,
            textAlign: 'center',
          }}
        >
          <NoSearchResults height={'150px'} />
          {data?.length == 0 ? (
            <p>You currently have no favorites</p>
          ) : (
            <p>No matching favorites found</p>
          )}
        </Stack>
      )}

      {isLoading && (
        <div className="placeholder">
          <SynapseSpinner size={30} />
        </div>
      )}
    </div>
  )
}
