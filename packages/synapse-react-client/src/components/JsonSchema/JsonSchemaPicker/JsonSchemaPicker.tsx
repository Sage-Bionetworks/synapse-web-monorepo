import { CheckBoxCell } from '@/components/EntityHeaderTable/EntityHeaderTableCellRenderers'
import StyledVirtualTanStackTable from '@/components/TanStackTable/StyledVirtualTanStackTable'
import ColumnHeader from '@/components/TanStackTable/ColumnHeader'
import {
  useListJsonSchemasInfinite,
  useListJsonSchemaVersions,
} from '@/synapse-queries'
import { formatDate } from '@/utils/functions/DateFormatter'
import {
  Alert,
  Autocomplete,
  CircularProgress,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import { createFilterOptions } from '@mui/material/Autocomplete'
import {
  JsonSchemaInfo,
  JsonSchemaVersionInfo,
  Organization,
} from '@sage-bionetworks/synapse-client'
import {
  CellContext,
  ColumnDef,
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useVirtualizer } from '@tanstack/react-virtual'
import dayjs from 'dayjs'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import styles from './JsonSchemaPicker.module.scss'
import {
  LOADING_ORGANIZATIONS_OPTION,
  useJsonSchemaOrganizations,
} from './useJsonSchemaOrganizations'
import {
  getSchemaId,
  JsonSchemaSelection,
  useJsonSchemaSelection,
} from './useJsonSchemaSelection'
import { VersionSelectionType } from './VersionSelectionType'

export type { JsonSchemaSelection } from './useJsonSchemaSelection'

export type JsonSchemaPickerProps = {
  /**
   * Invoked whenever the selected schema and/or version changes. `undefined` when nothing is
   * selected, or when a version selection is required but has not yet resolved.
   */
  onSelectionChange: (selection: JsonSchemaSelection | undefined) => void
  /** If provided, and a matching Organization is found, it will be preselected. */
  defaultOrganizationName?: string
  /**
   * Controls whether a concrete numbered version must be selected, or if "Latest" is an
   * option. Defaults to {@link VersionSelectionType.REQUIRED}. Assumed to be fixed for the
   * lifetime of a single JsonSchemaPicker instance -- to change it, remount the component (e.g.
   * with a new `key`) rather than changing this prop in place.
   */
  versionSelectionType?: VersionSelectionType
  /**
   * The initially-selected schema/version, e.g. when editing an existing selection.
   * Note: only `versionInfo` (not a bare `$id`) can be used to resolve the initially selected
   * row, since the row lookup requires the schema's organization and schema name.
   */
  initialSelected?: JsonSchemaSelection
}

export const LATEST_OPTION_VALUE = '__LATEST__'

const filterOrganizationOptions = createFilterOptions<Organization>()

function getVersionOptionValue(version: JsonSchemaVersionInfo): string {
  return version.versionId ?? version.$id ?? ''
}

function getVersionOptionLabel(version: JsonSchemaVersionInfo): string {
  return version.semanticVersion ?? `Version ${version.versionId ?? ''}`
}

type JsonSchemaVersionSelectProps = {
  schema: JsonSchemaInfo
  isSelected: boolean
  versionSelectionType: VersionSelectionType
  selectedVersionInfo: JsonSchemaVersionInfo | undefined
  onVersionChange: (versionInfo: JsonSchemaVersionInfo | undefined) => void
}

/**
 * Renders the version <Select> for the currently-selected row.
 */
function JsonSchemaVersionSelect(props: JsonSchemaVersionSelectProps) {
  const {
    schema,
    isSelected,
    versionSelectionType,
    selectedVersionInfo,
    onVersionChange,
  } = props

  const { data, isLoading, isError, error } = useListJsonSchemaVersions(
    schema.organizationName ?? '',
    schema.schemaName ?? '',
    { enabled: isSelected },
  )

  const versions = useMemo(
    // The API returns versions lowest-to-highest semantic version; reverse so the highest
    // (latest) version is displayed first.
    () => [...(data ?? [])].reverse(),
    [data],
  )

  if (!isSelected) {
    return null
  }

  if (isError) {
    return (
      <Alert severity="error">
        {error?.reason ?? 'An error occurred while loading versions.'}
      </Alert>
    )
  }

  if (isLoading || versions.length === 0) {
    return <CircularProgress size={16} aria-label="Loading versions" />
  }

  const showLatestOption =
    versionSelectionType === VersionSelectionType.LATEST_ALLOWED
  const value = selectedVersionInfo
    ? getVersionOptionValue(selectedVersionInfo)
    : showLatestOption
      ? LATEST_OPTION_VALUE
      : ''

  return (
    <Select
      native
      fullWidth
      size="small"
      value={value}
      inputProps={{ 'aria-label': `Version for ${schema.schemaName}` }}
      onClick={event => {
        event.stopPropagation()
      }}
      onChange={event => {
        event.stopPropagation()
        const newValue = event.target.value
        if (newValue === LATEST_OPTION_VALUE) {
          onVersionChange(undefined)
        } else {
          onVersionChange(
            versions.find(
              version => getVersionOptionValue(version) === newValue,
            ),
          )
        }
      }}
    >
      {showLatestOption && <option value={LATEST_OPTION_VALUE}>Latest</option>}
      {versions.map(version => (
        <option
          key={getVersionOptionValue(version)}
          value={getVersionOptionValue(version)}
        >
          {getVersionOptionLabel(version)}
        </option>
      ))}
    </Select>
  )
}

// Cell renderer wrapper for the version column, transforming props to use JsonSchemaVersionSelect
function VersionColumnCell(context: CellContext<JsonSchemaInfo, unknown>) {
  const meta = context.table.options.meta?.jsonSchemaVersionSelection
  if (!meta) {
    return null
  }
  const isSelected = context.row.getIsSelected()
  return (
    <JsonSchemaVersionSelect
      schema={context.row.original}
      isSelected={isSelected}
      versionSelectionType={meta.versionSelectionType}
      selectedVersionInfo={isSelected ? meta.selectedVersionInfo : undefined}
      onVersionChange={meta.onVersionChange}
    />
  )
}

const columnHelper = createColumnHelper<JsonSchemaInfo>()

const STATIC_COLUMNS: ColumnDef<JsonSchemaInfo, any>[] = [
  {
    id: 'select',
    header: '',
    cell: CheckBoxCell,
    maxSize: 50,
  },
  columnHelper.accessor('schemaName', {
    header: props => <ColumnHeader {...props} title="Schema Name" />,
    enableColumnFilter: false,
    enableSorting: false,
  }),
  {
    id: 'version',
    header: props => <ColumnHeader {...props} title="Version" />,
    cell: VersionColumnCell,
  },
  columnHelper.accessor('createdOn', {
    header: props => <ColumnHeader {...props} title="Created on" />,
    enableColumnFilter: false,
    enableSorting: false,
    cell: info => {
      const value = info.getValue()
      return value ? formatDate(dayjs(value)) : ''
    },
  }),
]

export function JsonSchemaPicker(props: JsonSchemaPickerProps) {
  const {
    onSelectionChange,
    defaultOrganizationName,
    versionSelectionType = VersionSelectionType.REQUIRED,
    initialSelected,
  } = props

  const {
    selectedOrganization,
    setSelectedOrganization,
    organizationOptions,
    isLoadingAllOrganizations,
    isError: isOrganizationsError,
    error: organizationsError,
  } = useJsonSchemaOrganizations(defaultOrganizationName)

  const organizationName = selectedOrganization?.name

  const {
    data: schemasData,
    isLoading: isLoadingSchemas,
    isError: isSchemasError,
    error: schemasError,
    hasNextPage: hasNextSchemasPage,
    isFetchingNextPage: isFetchingNextSchemasPage,
    fetchNextPage: fetchNextSchemasPage,
  } = useListJsonSchemasInfinite(organizationName ?? '')

  const schemas = useMemo(
    () => schemasData?.pages.flatMap(page => page.page ?? []) ?? [],
    [schemasData],
  )

  const {
    rowSelection,
    selectedVersionInfo,
    handleRowSelectionChange,
    handleVersionChange,
  } = useJsonSchemaSelection({
    schemas,
    versionSelectionType,
    onSelectionChange,
    initialSelected,
  })

  const tableMeta = useMemo(
    () => ({
      jsonSchemaVersionSelection: {
        versionSelectionType,
        selectedVersionInfo,
        onVersionChange: handleVersionChange,
      },
    }),
    [versionSelectionType, selectedVersionInfo, handleVersionChange],
  )

  const table = useReactTable<JsonSchemaInfo>({
    data: schemas,
    columns: STATIC_COLUMNS,
    state: { rowSelection },
    meta: tableMeta,
    getRowId: row => getSchemaId(row),
    enableRowSelection: true,
    enableMultiRowSelection: false,
    onRowSelectionChange: handleRowSelectionChange,
    getCoreRowModel: getCoreRowModel(),
  })

  const tableContainerRef = useRef<HTMLDivElement>(null)
  const rowVirtualizer = useVirtualizer({
    count: schemas.length,
    estimateSize: () => 48,
    getScrollElement: () => tableContainerRef.current,
    overscan: 5,
  })

  // Called on scroll, and after data/callback changes, to fetch more schemas as the user
  // approaches the bottom of the table.
  const fetchMoreOnBottomReached = useCallback(
    (containerRefElement?: HTMLDivElement | null) => {
      if (containerRefElement) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement
        if (
          scrollHeight - scrollTop - clientHeight < 500 &&
          !isFetchingNextSchemasPage &&
          hasNextSchemasPage
        ) {
          void fetchNextSchemasPage()
        }
      }
    },
    [fetchNextSchemasPage, isFetchingNextSchemasPage, hasNextSchemasPage],
  )

  useEffect(() => {
    fetchMoreOnBottomReached(tableContainerRef.current)
  }, [schemas, fetchMoreOnBottomReached])

  return (
    <div className={styles.jsonSchemaPicker}>
      <Autocomplete<Organization, false, false, false>
        className={styles.organizationAutocomplete}
        options={organizationOptions}
        value={selectedOrganization}
        loading={isLoadingAllOrganizations}
        getOptionLabel={org =>
          org === LOADING_ORGANIZATIONS_OPTION
            ? 'Loading organizations…'
            : (org.name ?? '')
        }
        getOptionDisabled={org => org === LOADING_ORGANIZATIONS_OPTION}
        filterOptions={(options, params) => {
          const filtered = filterOrganizationOptions(
            options.filter(org => org !== LOADING_ORGANIZATIONS_OPTION),
            params,
          )
          return isLoadingAllOrganizations
            ? [LOADING_ORGANIZATIONS_OPTION, ...filtered]
            : filtered
        }}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        onChange={(_event, newValue) => setSelectedOrganization(newValue)}
        renderInput={params => (
          <TextField
            {...params}
            label="Organization"
            placeholder="Select an organization"
            slotProps={{
              input: {
                ...params.InputProps,
                endAdornment: (
                  <>
                    {isLoadingAllOrganizations && (
                      <CircularProgress
                        color="inherit"
                        size={16}
                        aria-label="Loading organizations"
                      />
                    )}
                    {params.InputProps.endAdornment}
                  </>
                ),
              },
            }}
          />
        )}
      />
      {isOrganizationsError && (
        <Alert severity="error">
          {organizationsError?.reason ??
            'An error occurred while loading organizations.'}
        </Alert>
      )}
      {!isOrganizationsError && !selectedOrganization && (
        <Typography variant="body1">
          Select an organization to see its schemas.
        </Typography>
      )}
      {selectedOrganization && isLoadingSchemas && (
        <CircularProgress aria-label="Loading schemas" />
      )}
      {selectedOrganization && isSchemasError && (
        <Alert severity="error">
          {schemasError?.reason ?? 'An error occurred while loading schemas.'}
        </Alert>
      )}
      {selectedOrganization &&
        !isLoadingSchemas &&
        !isSchemasError &&
        schemas.length === 0 && (
          <Alert severity="info">No schemas found for this organization.</Alert>
        )}
      {selectedOrganization &&
        !isLoadingSchemas &&
        !isSchemasError &&
        schemas.length > 0 && (
          <StyledVirtualTanStackTable<JsonSchemaInfo>
            table={table}
            rowVirtualizer={rowVirtualizer}
            striped
            styledTableContainerProps={{
              ref: tableContainerRef,
              className: styles.schemaTableContainer,
            }}
            onTableContainerScroll={target =>
              fetchMoreOnBottomReached(target as HTMLDivElement)
            }
          />
        )}
    </div>
  )
}

export default JsonSchemaPicker
