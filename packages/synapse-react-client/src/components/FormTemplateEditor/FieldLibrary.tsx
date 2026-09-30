import {
  Alert,
  Box,
  Button,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { Add as AddIcon, Search as SearchIcon } from '@mui/icons-material'
import { RJSFSchema } from '@rjsf/utils'
import { ReactNode, useMemo, useState } from 'react'
import {
  listResolvedSchemaProperties,
  propertyKeyToPointer,
} from '@/utils/jsonschema/submissionContext'
import { FieldLibraryRow } from './FieldLibraryRow'
import fieldLibraryStyles from './FieldLibrary.module.scss'

export type FieldLibraryProps = {
  jsonSchema: RJSFSchema
  /** Set of JSON pointers (e.g. `/institution`) currently bound to a step. */
  usedPaths: Set<string>
  selectedPropertyKey: string | null
  onSelectField: (propertyKey: string) => void
  onCreateField: () => void
}

/**
 * Left pane: a compact list of all schema properties (the "fields" the form
 * collects) -- both unconditional and any gated behind an
 * `x-synapse-submissionContext` conditional. Each row is clickable and opens
 * the field definition drawer.
 */
export function FieldLibrary({
  jsonSchema,
  usedPaths,
  selectedPropertyKey,
  onSelectField,
  onCreateField,
}: FieldLibraryProps) {
  const [search, setSearch] = useState('')

  const resolvedProperties = useMemo(
    () => listResolvedSchemaProperties(jsonSchema),
    [jsonSchema],
  )

  const filtered = useMemo(() => {
    if (!search) return resolvedProperties
    const searchTerm = search.toLowerCase()
    return resolvedProperties.filter(p => {
      const entryAsString =
        `${p.propertyKey} ${p.subSchema.title ?? ''}`.toLowerCase()
      return entryAsString.includes(searchTerm)
    })
  }, [resolvedProperties, search])

  let fieldList: ReactNode
  if (resolvedProperties.length === 0) {
    fieldList = (
      <Alert severity="info">
        No fields yet. Click "New" to start collecting information.
      </Alert>
    )
  } else if (filtered.length === 0) {
    fieldList = <Alert severity="info">No fields match "{search}".</Alert>
  } else {
    fieldList = (
      <Stack spacing={0.75}>
        {filtered.map(p => (
          <Box
            key={p.propertyKey}
            className={fieldLibraryStyles.selectedRow}
            data-selected={selectedPropertyKey === p.propertyKey}
          >
            <FieldLibraryRow
              propertyKey={p.propertyKey}
              property={p.subSchema}
              isRequired={p.isRequired}
              context={p.context}
              isUsedInSteps={usedPaths.has(propertyKeyToPointer(p.propertyKey))}
              onClick={() => onSelectField(p.propertyKey)}
            />
          </Box>
        ))}
      </Stack>
    )
  }

  return (
    <Paper variant="outlined" sx={{ p: 2, height: '100%' }}>
      <Box sx={{ mb: 1 }}>
        <Typography variant="subtitle2">Fields</Typography>
        <Typography variant="caption" color="text.secondary">
          Define the data you want to collect. Click a field to edit it.
        </Typography>
      </Box>

      <Stack spacing={1.5}>
        <Stack direction="row" spacing={1} alignItems="center">
          <TextField
            placeholder="Search fields…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            size="small"
            fullWidth
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                ),
              },
              htmlInput: { 'aria-label': 'Search fields' },
            }}
          />
          <Button
            size="small"
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={onCreateField}
          >
            New
          </Button>
        </Stack>

        {fieldList}
      </Stack>
    </Paper>
  )
}
