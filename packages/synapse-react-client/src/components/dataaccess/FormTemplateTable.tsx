import { useSearchFormTemplatesInfinite } from '@/synapse-queries/dataaccess/useFormTemplate'
import { SearchOutlined } from '@mui/icons-material'
import {
  Alert,
  Box,
  Button,
  Chip,
  FormControlLabel,
  InputAdornment,
  Skeleton,
  Switch,
  TextField,
  Typography,
} from '@mui/material'
import { useDebouncedState } from '@react-hookz/web'
import { FormTemplate } from '@sage-bionetworks/synapse-client'
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import ColumnHeader from '../TanStackTable/ColumnHeader'
import StyledTanStackTable from '../TanStackTable/StyledTanStackTable'
import { keepPreviousData } from '@tanstack/react-query'

export const FORM_TEMPLATES_ROUTE = 'FormTemplates'
export const NEW_FORM_TEMPLATE_ROUTE = `${FORM_TEMPLATES_ROUTE}/new`
export const FORM_TEMPLATE_ROUTE = `${FORM_TEMPLATES_ROUTE}/:templateId`
export const FORM_TEMPLATES_PATH = `/${FORM_TEMPLATES_ROUTE}`
export const NEW_FORM_TEMPLATE_PATH = `/${NEW_FORM_TEMPLATE_ROUTE}`
export const getFormTemplatePath = (templateId: string) =>
  `${FORM_TEMPLATES_PATH}/${templateId}`

// Time to wait after the search input changes before sending a new request
export const NAME_SEARCH_DEBOUNCE_DELAY_MS = 500

const columnHelper = createColumnHelper<FormTemplate>()

const columns = [
  columnHelper.accessor('name', {
    header: props => <ColumnHeader {...props} title={'Name'} />,
    cell: ({ row, getValue }) =>
      row.original.id ? (
        <Link to={getFormTemplatePath(row.original.id)}>{getValue()}</Link>
      ) : (
        getValue()
      ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor('versionNumber', {
    header: props => <ColumnHeader {...props} title={'Version'} />,
    enableColumnFilter: false,
  }),
  columnHelper.accessor('deprecated', {
    header: props => <ColumnHeader {...props} title={'Status'} />,
    cell: ({ getValue }) =>
      getValue() ? <Chip label={'Deprecated'} size={'small'} /> : null,
    enableColumnFilter: false,
  }),
]

export function FormTemplateTable() {
  const navigate = useNavigate()
  const [name, setName] = useDebouncedState<string>(
    '',
    NAME_SEARCH_DEBOUNCE_DELAY_MS,
  )
  const [includeDeprecated, setIncludeDeprecated] = useState(false)

  const request = useMemo(
    () => ({ name: name || undefined, includeDeprecated }),
    [name, includeDeprecated],
  )
  const {
    data,
    isLoading,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useSearchFormTemplatesInfinite(request, {
    // keepPreviousData avoids a flicker when the request changes
    placeholderData: keepPreviousData,
  })

  const templates = useMemo(
    () => data?.pages.flatMap(page => page.results ?? []) ?? [],
    [data],
  )

  const table = useReactTable<FormTemplate>({
    data: templates,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getRowId: row => row.id ?? '',
  })

  const errorAlert = error && (
    <Alert severity={'error'}>
      <strong>Sorry, we couldn&apos;t load the form templates.</strong>
      <br />
      {error.reason}
    </Alert>
  )

  let content
  if (isLoading) {
    content = <Skeleton variant={'rectangular'} height={200} />
  } else if (error && !data) {
    content = errorAlert
  } else if (templates.length === 0) {
    content = (
      <Typography variant={'body1'} sx={{ textAlign: 'center', my: 2 }}>
        No form templates found.
      </Typography>
    )
  } else {
    content = (
      <>
        <StyledTanStackTable
          table={table}
          styledTableContainerProps={{ sx: { my: 2 } }}
        />
        {/* A failed "Load more" keeps the loaded rows; clicking "Load more" again retries */}
        {errorAlert}
        {hasNextPage && (
          <Button
            variant={'outlined'}
            disabled={isFetchingNextPage}
            onClick={() => void fetchNextPage()}
          >
            Load more
          </Button>
        )}
      </>
    )
  }

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          // The text field's label sits above its input, so align to the bottom to line up with the input
          alignItems: 'flex-end',
          gap: 2,
          flexWrap: 'wrap',
          mb: 2,
        }}
      >
        <TextField
          label={'Filter by template name'}
          type={'text'}
          size={'small'}
          onChange={e => setName(e.target.value)}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position={'end'}>
                  <SearchOutlined />
                </InputAdornment>
              ),
            },
          }}
          sx={{ minWidth: 300 }}
        />
        <FormControlLabel
          label={'Include deprecated'}
          // Drop the inherited bottom margin so the switch lines up with the input
          sx={{ mb: 0 }}
          control={
            <Switch
              // The hidden input's default margin overflows the switch and scrolls it when checked
              sx={{ '& .MuiSwitch-input': { m: 0 } }}
              checked={includeDeprecated}
              onChange={e => setIncludeDeprecated(e.target.checked)}
            />
          }
        />
        <Button
          variant={'contained'}
          sx={{ ml: 'auto' }}
          onClick={() => void navigate(NEW_FORM_TEMPLATE_PATH)}
        >
          Create template
        </Button>
      </Box>
      {content}
    </Box>
  )
}

export default FormTemplateTable
