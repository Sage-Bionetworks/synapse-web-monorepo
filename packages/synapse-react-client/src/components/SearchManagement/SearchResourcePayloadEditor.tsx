import { JsonTextField } from '@/components/JsonTextField/JsonTextField'
import { SearchManagementResourceType } from '@/synapse-queries/searchmanagement/SearchManagementResourceType'
import {
  SearchPipelineFromJSON,
  SearchPipelineToJSON,
} from '@sage-bionetworks/synapse-client'
import { ColumnAnalyzerOverridesEditor } from './ColumnAnalyzerOverridesEditor'
import { PayloadEditorProps } from './PayloadEditorProps'
import { SearchConfigurationEditor } from './SearchConfigurationEditor'
import {
  parseWireSearchPipeline,
  SearchResourcePayload,
} from './SearchResourcePayload'

export type SearchResourcePayloadEditorProps = PayloadEditorProps & {
  resourceType: SearchManagementResourceType
}

/**
 * Edits the type-specific fields of a Search Management resource.
 */
export function SearchResourcePayloadEditor({
  resourceType,
  initialPayload,
  onChange,
  onInputValidityChange,
}: SearchResourcePayloadEditorProps) {
  switch (resourceType) {
    case 'TEXT_ANALYZER':
      return (
        <JsonTextField
          label="Settings"
          required
          value={
            (initialPayload as SearchResourcePayload<'TEXT_ANALYZER'>)
              .settings as unknown
          }
          onChange={settings => onChange({ settings })}
          onValidityChange={isValid =>
            onInputValidityChange('settings', isValid)
          }
          helperText={
            'The contents of OpenSearch settings.analysis: an object with any of the root keys char_filter, tokenizer, filter, and analyzer. analyzer.default is required. Reference a saved Synonym Set in the filter map with {"$ref": "{org}-{name}"}.'
          }
        />
      )
    case 'SYNONYM_SET':
      return (
        <JsonTextField
          label="Definition"
          required
          value={
            (initialPayload as SearchResourcePayload<'SYNONYM_SET'>)
              .definition as unknown
          }
          onChange={definition => onChange({ definition })}
          onValidityChange={isValid =>
            onInputValidityChange('definition', isValid)
          }
          helperText={
            'The full OpenSearch synonym_graph (or synonym) token filter. Use "a, b, c" for equivalent terms and "a, b => c" for directional expansion.'
          }
        />
      )
    case 'SEARCH_PIPELINE':
      return (
        <JsonTextField
          label="Settings"
          required
          value={SearchPipelineToJSON(
            (initialPayload as SearchResourcePayload<'SEARCH_PIPELINE'>)
              .settings,
          )}
          onChange={wireSettings =>
            onChange({
              settings: parseWireSearchPipeline(
                wireSettings,
                SearchPipelineFromJSON,
              ),
            })
          }
          onValidityChange={isValid =>
            onInputValidityChange('settings', isValid)
          }
          helperText="An OpenSearch search pipeline: phase_results_processors with one normalization-processor that sets the normalization (min_max, l2, z_score) and combination (arithmetic_mean, harmonic_mean, geometric_mean) techniques."
        />
      )
    case 'COLUMN_ANALYZER_OVERRIDE':
      return (
        <ColumnAnalyzerOverridesEditor
          initialPayload={
            initialPayload as SearchResourcePayload<'COLUMN_ANALYZER_OVERRIDE'>
          }
          onChange={onChange}
          onInputValidityChange={onInputValidityChange}
        />
      )
    case 'SEARCH_CONFIGURATION':
      return (
        <SearchConfigurationEditor
          initialPayload={
            initialPayload as SearchResourcePayload<'SEARCH_CONFIGURATION'>
          }
          onChange={onChange}
          onInputValidityChange={onInputValidityChange}
        />
      )
  }
}
