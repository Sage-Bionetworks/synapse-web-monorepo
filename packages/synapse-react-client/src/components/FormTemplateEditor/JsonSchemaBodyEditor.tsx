import { JsonTextField } from '@/components/JsonTextField/JsonTextField'
import { RJSFSchema } from '@rjsf/utils'

type JsonSchemaBodyEditorProps = {
  value: RJSFSchema
  onChange: (next: RJSFSchema) => void
}

/**
 * Edits a JSON Schema as raw JSON. Calls `onChange` only when the text parses; otherwise shows
 * the parse error. `value` is read only on mount, so remount with a new `key` to load a
 * different schema.
 */
export function JsonSchemaBodyEditor({
  value,
  onChange,
}: JsonSchemaBodyEditorProps) {
  return (
    <JsonTextField
      label="Raw JSON Schema"
      value={value}
      onChange={next => onChange(next as RJSFSchema)}
    />
  )
}
