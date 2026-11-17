import { ColumnAnalyzerOverrideEntry } from '@sage-bionetworks/synapse-client'
import AddCircleOutline from '@mui/icons-material/AddCircleOutline'
import DeleteOutline from '@mui/icons-material/DeleteOutline'
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { PayloadEditorProps } from './PayloadEditorProps'
import { ReferenceOrInlineInput } from './ReferenceOrInlineInput'
import {
  EMPTY_COLUMN_ANALYZER_OVERRIDE_ENTRY,
  TEXT_ANALYZER_SETTINGS_EXAMPLE,
} from './SearchResourcePayload'
import { useKeyedRows } from './useKeyedRows'

const getAnalyzerInputKey = (rowKey: number) => `overrides.${rowKey}.analyzer`

/**
 * Edits the ordered per-column entries of a Column Analyzer Override.
 */
export function ColumnAnalyzerOverridesEditor({
  initialPayload,
  onChange,
  onInputValidityChange,
}: PayloadEditorProps<'COLUMN_ANALYZER_OVERRIDE'>) {
  const { rows, addRow, updateRow, removeRow } =
    useKeyedRows<ColumnAnalyzerOverrideEntry>(initialPayload.overrides ?? [])

  const report = (overrides: ColumnAnalyzerOverrideEntry[]) =>
    onChange({ overrides })

  return (
    <Stack sx={{ gap: 2 }}>
      <Box>
        <Typography variant="body1" sx={{ fontWeight: 700 }}>
          Column Overrides
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Each entry applies an analyzer and/or semantic (vector) search to the
          column with that name. At least one entry is required.
        </Typography>
      </Box>
      {rows.map(({ key, value: entry }, index) => (
        <Paper key={key} variant="outlined" sx={{ p: 2 }}>
          <Stack
            sx={{ flexDirection: 'row', alignItems: 'flex-start', gap: 2 }}
          >
            <TextField
              label="Column Name"
              required
              value={entry.columnName ?? ''}
              onChange={e =>
                report(updateRow(key, { ...entry, columnName: e.target.value }))
              }
              sx={{ flexGrow: 1 }}
            />
            <FormControlLabel
              label="Semantic search"
              control={
                <Checkbox
                  checked={!!entry.semantic}
                  onChange={e =>
                    report(
                      updateRow(key, { ...entry, semantic: e.target.checked }),
                    )
                  }
                />
              }
              sx={{ mt: 1 }}
            />
            <IconButton
              aria-label={`Remove column override ${index + 1}`}
              disabled={rows.length === 1}
              onClick={() => {
                onInputValidityChange(getAnalyzerInputKey(key), true)
                report(removeRow(key))
              }}
              sx={{ mt: 1 }}
            >
              <DeleteOutline />
            </IconButton>
          </Stack>
          <Box sx={{ mt: 2 }}>
            <ReferenceOrInlineInput
              label="Analyzer"
              optional
              referenceType="TEXT_ANALYZER"
              value={entry.analyzer as unknown}
              onChange={analyzer =>
                report(updateRow(key, { ...entry, analyzer }))
              }
              onValidityChange={isValid =>
                onInputValidityChange(getAnalyzerInputKey(key), isValid)
              }
              inlineExample={TEXT_ANALYZER_SETTINGS_EXAMPLE}
              inlineHelperText="The contents of OpenSearch settings.analysis, used for this column only."
            />
          </Box>
        </Paper>
      ))}
      <Box>
        <Button
          variant="outlined"
          startIcon={<AddCircleOutline />}
          onClick={() => report(addRow(EMPTY_COLUMN_ANALYZER_OVERRIDE_ENTRY))}
        >
          Add Column Override
        </Button>
      </Box>
    </Stack>
  )
}
