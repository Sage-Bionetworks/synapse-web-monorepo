import InfiniteTableLayout from '@/components/layout/InfiniteTableLayout'
import StyledTanStackTable from '@/components/TanStackTable/StyledTanStackTable'
import {
  SearchManagementResource,
  SearchManagementResourceListRequest,
  SearchManagementResourceType,
} from '@/synapse-queries/searchmanagement/SearchManagementResourceType'
import { useListSearchManagementResourcesInfinite } from '@/synapse-queries/searchmanagement/useSearchManagement'
import { formatDate } from '@/utils/functions/DateFormatter'
import AddCircleTwoTone from '@mui/icons-material/AddCircleTwoTone'
import EditTwoTone from '@mui/icons-material/EditTwoTone'
import { Alert, Box, Button, IconButton, Typography } from '@mui/material'
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import dayjs from 'dayjs'
import { useMemo, useState } from 'react'
import { OrganizationAutocomplete } from './OrganizationAutocomplete'
import {
  getQualifiedName,
  SEARCH_MANAGEMENT_RESOURCE_LABELS,
} from './SearchManagementUtils'
import { SearchResourceEditorDialog } from './SearchResourceEditorDialog'

const columnHelper = createColumnHelper<SearchManagementResource>()

function getColumns(onClickEdit: (resource: SearchManagementResource) => void) {
  return [
    columnHelper.display({
      id: 'qualifiedName',
      header: 'Qualified Name',
      cell: ctx => getQualifiedName(ctx.row.original),
    }),
    columnHelper.accessor('description', {
      header: 'Description',
      cell: ctx => ctx.getValue(),
    }),
    columnHelper.accessor('modifiedOn', {
      header: 'Modified On',
      cell: ctx => {
        const modifiedOn = ctx.getValue()
        return modifiedOn ? formatDate(dayjs(modifiedOn)) : null
      },
    }),
    columnHelper.accessor('id', {
      header: 'ID',
      cell: ctx => ctx.getValue(),
    }),
    columnHelper.display({
      id: 'actions',
      header: '',
      meta: { textAlign: 'right' },
      cell: ctx => (
        <IconButton
          aria-label={`Edit ${getQualifiedName(ctx.row.original)}`}
          onClick={() => onClickEdit(ctx.row.original)}
        >
          <EditTwoTone />
        </IconButton>
      ),
    }),
  ]
}

export type SearchResourceTableProps = {
  resourceType: SearchManagementResourceType
}

type EditorState = {
  open: boolean
  resource?: SearchManagementResource
}

/**
 * Lists the saved resources of one Search Management type, filterable by Organization, with create and edit actions.
 */
export function SearchResourceTable({
  resourceType,
}: SearchResourceTableProps) {
  const { singular, plural } = SEARCH_MANAGEMENT_RESOURCE_LABELS[resourceType]
  const [organizationName, setOrganizationName] = useState<string | null>(null)
  const [editorState, setEditorState] = useState<EditorState>({
    open: false,
  })

  const request = useMemo<SearchManagementResourceListRequest>(
    () => ({ organizationName: organizationName ?? undefined }),
    [organizationName],
  )
  const {
    data,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useListSearchManagementResourcesInfinite(resourceType, request)
  const resources = useMemo<SearchManagementResource[]>(
    () => data?.pages.flatMap(page => page.results ?? []) ?? [],
    [data],
  )

  const columns = useMemo(
    () => getColumns(resource => setEditorState({ open: true, resource })),
    [],
  )
  const table = useReactTable({
    data: resources,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 2,
          mb: 2,
        }}
      >
        <Box sx={{ width: 360 }}>
          <OrganizationAutocomplete
            label="Organization"
            value={organizationName}
            onChange={setOrganizationName}
            helperText="Leave empty to show every Organization."
          />
        </Box>
        <Button
          variant="contained"
          startIcon={<AddCircleTwoTone />}
          onClick={() => setEditorState({ open: true })}
          sx={{ flexShrink: 0 }}
        >
          Create {singular}
        </Button>
      </Box>
      {error ? (
        <Alert severity="error">{error.reason}</Alert>
      ) : (
        <InfiniteTableLayout
          table={<StyledTanStackTable table={table} />}
          isLoading={isLoading}
          isEmpty={!isLoading && resources.length === 0}
          noResults={
            <Typography variant="body1">No {plural} found.</Typography>
          }
          hasNextPage={hasNextPage}
          onFetchNextPageClicked={() => {
            void fetchNextPage()
          }}
          isFetchingNextPage={isFetchingNextPage}
        />
      )}
      <SearchResourceEditorDialog
        resourceType={resourceType}
        open={editorState.open}
        resource={editorState.resource}
        onClose={() => setEditorState(state => ({ ...state, open: false }))}
      />
    </Box>
  )
}
