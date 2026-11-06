import AddCircleOutline from '@mui/icons-material/AddCircleOutline'
import DeleteOutline from '@mui/icons-material/DeleteOutline'
import {
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import {
  SearchPipelineBindingFromJSON,
  SearchPipelineBindingToJSON,
} from '@sage-bionetworks/synapse-client'
import { useState } from 'react'
import { PayloadEditorProps } from './PayloadEditorProps'
import { ReferenceOrInlineInput } from './ReferenceOrInlineInput'
import {
  INLINE_COLUMN_ANALYZER_OVERRIDE_EXAMPLE,
  parseWireSearchPipeline,
  SEARCH_PIPELINE_SETTINGS_EXAMPLE,
  SearchResourcePayload,
  TEXT_ANALYZER_SETTINGS_EXAMPLE,
} from './SearchResourcePayload'
import { useKeyedRows } from './useKeyedRows'

const getOverrideInputKey = (rowKey: number) =>
  `columnAnalyzerOverrides.${rowKey}`

/**
 * Edits the analyzer, pipeline, and column overrides that a Search Configuration bundles together.
 */
export function SearchConfigurationEditor({
  initialPayload,
  onChange,
  onInputValidityChange,
}: PayloadEditorProps<'SEARCH_CONFIGURATION'>) {
  const [payload, setPayload] = useState(initialPayload)
  const { rows, addRow, updateRow, removeRow } = useKeyedRows<unknown>(
    initialPayload.columnAnalyzerOverrides ?? [],
  )

  const update = (patch: SearchResourcePayload<'SEARCH_CONFIGURATION'>) => {
    const next = { ...payload, ...patch }
    setPayload(next)
    onChange(next)
  }

  const updateOverrides = (overrides: unknown[]) =>
    update({
      columnAnalyzerOverrides: overrides.length > 0 ? overrides : undefined,
    })

  return (
    <Stack sx={{ gap: 3 }}>
      <ReferenceOrInlineInput
        label="Default Analyzer"
        optional
        referenceType="TEXT_ANALYZER"
        value={initialPayload.defaultAnalyzer as unknown}
        onChange={defaultAnalyzer => update({ defaultAnalyzer })}
        onValidityChange={isValid =>
          onInputValidityChange('defaultAnalyzer', isValid)
        }
        inlineExample={TEXT_ANALYZER_SETTINGS_EXAMPLE}
        inlineHelperText="The contents of OpenSearch settings.analysis."
        helperText="Used for every column without an override. If omitted, the platform default analyzer is used."
      />
      <ReferenceOrInlineInput
        label="Default Search Pipeline"
        optional
        referenceType="SEARCH_PIPELINE"
        value={SearchPipelineBindingToJSON(
          initialPayload.defaultSearchPipeline,
        )}
        onChange={wireBinding => {
          const defaultSearchPipeline = parseWireSearchPipeline(
            wireBinding,
            SearchPipelineBindingFromJSON,
          )
          // JSON that parses but isn't pipeline-shaped must block saving rather than be dropped as "None".
          onInputValidityChange(
            'defaultSearchPipelineShape',
            wireBinding === undefined || defaultSearchPipeline !== undefined,
          )
          update({ defaultSearchPipeline })
        }}
        onValidityChange={isValid =>
          onInputValidityChange('defaultSearchPipeline', isValid)
        }
        inlineExample={SEARCH_PIPELINE_SETTINGS_EXAMPLE}
        inlineHelperText="An OpenSearch search pipeline with phase_results_processors."
        helperText="Controls how keyword and semantic scores are normalized and combined in hybrid search."
      />
      <Stack sx={{ gap: 2 }}>
        <Box>
          <Typography variant="body1" sx={{ fontWeight: 700 }}>
            Column Analyzer Overrides
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Overrides are applied in order. If more than one override lists the
            same column name, the first match wins.
          </Typography>
        </Box>
        {rows.map(({ key, value }, index) => (
          <Paper key={key} variant="outlined" sx={{ p: 2 }}>
            <Stack
              sx={{ flexDirection: 'row', alignItems: 'flex-start', gap: 1 }}
            >
              <ReferenceOrInlineInput
                label={`Column Analyzer Override ${index + 1}`}
                referenceType="COLUMN_ANALYZER_OVERRIDE"
                value={value}
                onChange={override => updateOverrides(updateRow(key, override))}
                onValidityChange={isValid =>
                  onInputValidityChange(getOverrideInputKey(key), isValid)
                }
                inlineExample={INLINE_COLUMN_ANALYZER_OVERRIDE_EXAMPLE}
                inlineHelperText='A Column Analyzer Override written inline, e.g. { "overrides": [...] }.'
              />
              <IconButton
                aria-label={`Remove column analyzer override ${index + 1}`}
                onClick={() => {
                  onInputValidityChange(getOverrideInputKey(key), true)
                  updateOverrides(removeRow(key))
                }}
              >
                <DeleteOutline />
              </IconButton>
            </Stack>
          </Paper>
        ))}
        <Box>
          <Button
            variant="outlined"
            startIcon={<AddCircleOutline />}
            onClick={() => updateOverrides(addRow(undefined))}
          >
            Add Column Analyzer Override
          </Button>
        </Box>
      </Stack>
    </Stack>
  )
}
