import { JsonTextField } from '@/components/JsonTextField/JsonTextField'
import { SearchManagementResourceType } from '@/synapse-queries/searchmanagement/SearchManagementResourceType'
import {
  FormControl,
  FormHelperText,
  FormLabel,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material'
import { ReactNode, useState } from 'react'
import { SearchResourceAutocomplete } from './SearchResourceAutocomplete'
import {
  isSearchResourceReference,
  SEARCH_MANAGEMENT_RESOURCE_LABELS,
} from './SearchManagementUtils'

type ReferenceOrInlineMode = 'none' | 'saved' | 'inline'

export type ReferenceOrInlineInputProps = {
  label: string
  /** The type of saved resource a `{ $ref }` value points to. */
  referenceType: SearchManagementResourceType
  /** If true, the slot may be left empty ('None'), reported as `undefined`. */
  optional?: boolean
  /** Wire-format (JSON) value; read only on mount. */
  value: unknown
  /** Called with `{ $ref: '{org}-{name}' }`, the parsed inline JSON, or `undefined`. */
  onChange: (value: unknown) => void
  /** Called with false while the inline JSON is invalid or 'Saved' mode has no selection. */
  onValidityChange: (isValid: boolean) => void
  /** Prefills the inline JSON when switching to 'Inline JSON' without an existing inline value. */
  inlineExample?: unknown
  helperText?: ReactNode
  inlineHelperText?: ReactNode
}

const EMPTY_INLINE_EXAMPLE = {}

function getInitialMode(
  value: unknown,
  optional: boolean,
): ReferenceOrInlineMode {
  if (value === undefined || value === null) {
    return optional ? 'none' : 'saved'
  }
  return isSearchResourceReference(value) ? 'saved' : 'inline'
}

/**
 * Edits a value that is either a reference to a saved Search Management resource (`{ $ref }`) or the equivalent JSON
 * written inline.
 */
export function ReferenceOrInlineInput({
  label,
  referenceType,
  optional = false,
  value,
  onChange,
  onValidityChange,
  inlineExample = EMPTY_INLINE_EXAMPLE,
  helperText,
  inlineHelperText,
}: ReferenceOrInlineInputProps) {
  const [mode, setMode] = useState(() => getInitialMode(value, optional))
  const [reference, setReference] = useState<string | null>(() =>
    isSearchResourceReference(value) ? value.$ref : null,
  )
  const [inlineValue, setInlineValue] = useState<unknown>(() =>
    mode === 'inline' ? value : inlineExample,
  )
  const singular = SEARCH_MANAGEMENT_RESOURCE_LABELS[referenceType].singular

  const report = (next: unknown, isValid: boolean) => {
    onChange(next)
    onValidityChange(isValid)
  }

  const handleModeChange = (nextMode: ReferenceOrInlineMode) => {
    setMode(nextMode)
    switch (nextMode) {
      case 'none':
        report(undefined, true)
        break
      case 'saved':
        report(
          reference === null ? undefined : { $ref: reference },
          reference !== null,
        )
        break
      case 'inline':
        // The inline field remounts showing the last valid JSON, so it starts out valid.
        report(inlineValue, true)
        break
    }
  }

  const handleReferenceChange = (nextReference: string | null) => {
    setReference(nextReference)
    report(
      nextReference === null ? undefined : { $ref: nextReference },
      nextReference !== null,
    )
  }

  const handleInlineChange = (next: unknown) => {
    setInlineValue(next)
    onChange(next)
  }

  return (
    <FormControl component="fieldset" fullWidth>
      <FormLabel component="legend" sx={{ mb: 1 }}>
        {label}
      </FormLabel>
      <ToggleButtonGroup
        exclusive
        size="small"
        value={mode}
        onChange={(_event, next: ReferenceOrInlineMode | null) => {
          if (next !== null) {
            handleModeChange(next)
          }
        }}
        aria-label={`${label} source`}
        sx={{ mb: 1.5 }}
      >
        {optional && <ToggleButton value="none">None</ToggleButton>}
        <ToggleButton value="saved">Saved {singular}</ToggleButton>
        <ToggleButton value="inline">Inline JSON</ToggleButton>
      </ToggleButtonGroup>
      {mode === 'saved' && (
        <SearchResourceAutocomplete
          resourceType={referenceType}
          label={`Saved ${singular}`}
          valueType="qualifiedName"
          value={reference}
          onChange={handleReferenceChange}
          required
        />
      )}
      {mode === 'inline' && (
        <JsonTextField
          label={`Inline ${singular} JSON`}
          value={inlineValue}
          onChange={handleInlineChange}
          onValidityChange={onValidityChange}
          helperText={inlineHelperText}
          rows={8}
          required
        />
      )}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}
