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
import { useMemo, useState } from 'react'
import { FieldLibraryRow } from './FieldLibraryRow'

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
 * collects). Each row is clickable and opens the field definition drawer.
 */
export function FieldLibrary({
  jsonSchema,
  usedPaths,
  selectedPropertyKey,
  onSelectField,
  onCreateField,
}: FieldLibraryProps) {
  const [search, setSearch] = useState('')

  const propEntries = useMemo(
    () =>
      Object.entries(
        (jsonSchema.properties ?? {}) as Record<string, RJSFSchema>,
      ),
    [jsonSchema.properties],
  )
  const requiredSet = useMemo(
    () => new Set(jsonSchema.required ?? []),
    [jsonSchema.required],
  )

  const filtered = useMemo(() => {
    if (!search) return propEntries
    const needle = search.toLowerCase()
    return propEntries.filter(([key, prop]) => {
      const haystack = `${key} ${prop.title ?? ''}`.toLowerCase()
      return haystack.includes(needle)
    })
  }, [propEntries, search])

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

        {propEntries.length === 0 ? (
          <Alert severity="info">
            No fields yet. Click "New" to start collecting information.
          </Alert>
        ) : filtered.length === 0 ? (
          <Alert severity="info">No fields match "{search}".</Alert>
        ) : (
          <Stack spacing={0.75}>
            {filtered.map(([key, prop]) => (
              <Box
                key={key}
                sx={
                  selectedPropertyKey === key
                    ? {
                        outline: theme =>
                          `2px solid ${theme.palette.primary.main}`,
                        outlineOffset: '-2px',
                        borderRadius: 1,
                      }
                    : undefined
                }
              >
                <FieldLibraryRow
                  propertyKey={key}
                  property={prop}
                  isRequired={requiredSet.has(key)}
                  isUsedInSteps={usedPaths.has(`/${key}`)}
                  onClick={() => onSelectField(key)}
                />
              </Box>
            ))}
          </Stack>
        )}
      </Stack>
    </Paper>
  )
}
