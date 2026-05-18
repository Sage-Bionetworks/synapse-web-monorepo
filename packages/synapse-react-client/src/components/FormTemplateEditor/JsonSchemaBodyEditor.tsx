import {
  Alert,
  Box,
  Button,
  Chip,
  FormControlLabel,
  IconButton,
  MenuItem,
  Paper,
  Stack,
  Switch,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material'
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  ArrowDownward as DownIcon,
  ArrowUpward as UpIcon,
} from '@mui/icons-material'
import { RJSFSchema } from '@rjsf/utils'
import { useEffect, useMemo, useState } from 'react'
import { moveItem } from './utils'

type JsonSchemaBodyEditorProps = {
  value: RJSFSchema
  onChange: (next: RJSFSchema) => void
}

type ViewMode = 'simple' | 'json'

type SimpleFieldType = 'text' | 'number' | 'boolean' | 'choice' | 'file'

const FIELD_TYPE_OPTIONS: { value: SimpleFieldType; label: string }[] = [
  { value: 'text', label: 'Text' },
  { value: 'number', label: 'Number' },
  { value: 'boolean', label: 'Yes / No' },
  { value: 'choice', label: 'Multiple choice' },
  { value: 'file', label: 'File upload' },
]

/**
 * Lightweight JSON Schema body editor with two modes:
 * - Simple (default): a per-property form for non-technical users
 * - JSON: the raw JSON textarea with validation feedback
 *
 * Only flat schemas (top-level properties with primitive types) are editable
 * in simple mode — anything more advanced (patterns, nested objects, etc.)
 * surfaces as read-only with a prompt to switch to JSON mode.
 */
export function JsonSchemaBodyEditor({
  value,
  onChange,
}: JsonSchemaBodyEditorProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('simple')

  return (
    <Stack spacing={2}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Alert severity="info" variant="outlined" sx={{ flexGrow: 1, mr: 2 }}>
          The schema is the data contract. Each field here becomes a question
          your requesters can answer.
        </Alert>
        <ToggleButtonGroup
          value={viewMode}
          exclusive
          size="small"
          onChange={(_, next) => next && setViewMode(next)}
          aria-label="Schema editor view"
        >
          <ToggleButton value="simple">Simple</ToggleButton>
          <ToggleButton value="json">JSON</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {viewMode === 'simple' ? (
        <SimpleSchemaEditor value={value} onChange={onChange} />
      ) : (
        <JsonTextEditor value={value} onChange={onChange} />
      )}
    </Stack>
  )
}

/* -------------------------------------------------------------------------- */
/* Simple (per-property) editor                                               */
/* -------------------------------------------------------------------------- */

function SimpleSchemaEditor({ value, onChange }: JsonSchemaBodyEditorProps) {
  const propEntries = useMemo(
    () =>
      Object.entries((value.properties ?? {}) as Record<string, RJSFSchema>),
    [value],
  )
  const requiredList = useMemo(() => value.required ?? [], [value])
  const requiredSet = useMemo(() => new Set(requiredList), [requiredList])
  const existingKeys = useMemo(
    () => new Set(propEntries.map(([k]) => k)),
    [propEntries],
  )

  const writeProperties = (
    nextProps: Record<string, RJSFSchema>,
    nextRequired?: string[],
  ) => {
    onChange({
      ...value,
      properties: nextProps,
      required: nextRequired ?? requiredList,
    })
  }

  const updateProperty = (key: string, patch: Partial<RJSFSchema>) => {
    const nextProps = {
      ...((value.properties ?? {}) as Record<string, RJSFSchema>),
    }
    nextProps[key] = { ...(nextProps[key] ?? {}), ...patch }
    writeProperties(nextProps)
  }

  const replaceProperty = (key: string, next: RJSFSchema) => {
    const nextProps = {
      ...((value.properties ?? {}) as Record<string, RJSFSchema>),
    }
    nextProps[key] = next
    writeProperties(nextProps)
  }

  const setRequired = (key: string, isReq: boolean) => {
    const nextRequired = requiredList.filter(k => k !== key)
    if (isReq) nextRequired.push(key)
    onChange({ ...value, required: nextRequired })
  }

  const removeProperty = (key: string) => {
    const nextProps = {
      ...((value.properties ?? {}) as Record<string, RJSFSchema>),
    }
    delete nextProps[key]
    const nextRequired = requiredList.filter(k => k !== key)
    writeProperties(nextProps, nextRequired)
  }

  const moveProperty = (idx: number, direction: -1 | 1) => {
    const reordered = moveItem(propEntries, idx, direction)
    const nextProps: Record<string, RJSFSchema> = {}
    for (const [k, v] of reordered) nextProps[k] = v
    writeProperties(nextProps)
  }

  const addProperty = () => {
    const title = 'New field'
    const key = generatePropertyKey(title, existingKeys)
    const nextProps = {
      ...((value.properties ?? {}) as Record<string, RJSFSchema>),
    }
    nextProps[key] = { type: 'string', title, description: '' }
    writeProperties(nextProps)
  }

  return (
    <Stack spacing={2}>
      <TextField
        label="Form title"
        value={value.title ?? ''}
        onChange={e => onChange({ ...value, title: e.target.value })}
        size="small"
        fullWidth
        helperText="Shown at the top of the form. Optional."
      />

      <Stack spacing={1.5}>
        {propEntries.length === 0 && (
          <Alert severity="info">
            No fields yet. Click "Add field" to start collecting information
            from requesters.
          </Alert>
        )}

        {propEntries.map(([key, prop], idx) => (
          <PropertyRow
            key={key}
            propertyKey={key}
            property={prop}
            isRequired={requiredSet.has(key)}
            isFirst={idx === 0}
            isLast={idx === propEntries.length - 1}
            onChange={patch => updateProperty(key, patch)}
            onChangeType={type =>
              replaceProperty(key, applyFieldType(prop, type))
            }
            onChangeRequired={isReq => setRequired(key, isReq)}
            onRemove={() => removeProperty(key)}
            onMoveUp={() => moveProperty(idx, -1)}
            onMoveDown={() => moveProperty(idx, 1)}
          />
        ))}
      </Stack>

      <Box>
        <Button
          size="small"
          startIcon={<AddIcon />}
          variant="outlined"
          onClick={addProperty}
        >
          Add field
        </Button>
      </Box>
    </Stack>
  )
}

type PropertyRowProps = {
  propertyKey: string
  property: RJSFSchema
  isRequired: boolean
  isFirst: boolean
  isLast: boolean
  onChange: (patch: Partial<RJSFSchema>) => void
  onChangeType: (type: SimpleFieldType) => void
  onChangeRequired: (isReq: boolean) => void
  onRemove: () => void
  onMoveUp: () => void
  onMoveDown: () => void
}

function PropertyRow({
  propertyKey,
  property,
  isRequired,
  isFirst,
  isLast,
  onChange,
  onChangeType,
  onChangeRequired,
  onRemove,
  onMoveUp,
  onMoveDown,
}: PropertyRowProps) {
  const detectedType = detectFieldType(property)
  const isAdvanced = detectedType === null

  return (
    <Paper variant="outlined" sx={{ p: 2 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          mb: 1,
        }}
      >
        <Chip
          label={propertyKey}
          size="small"
          variant="outlined"
          sx={{ fontFamily: 'monospace' }}
        />
        <Box sx={{ flexGrow: 1 }} />
        <IconButton size="small" disabled={isFirst} onClick={onMoveUp}>
          <UpIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" disabled={isLast} onClick={onMoveDown}>
          <DownIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" onClick={onRemove}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Box>

      {isAdvanced ? (
        <Alert severity="warning" variant="outlined">
          This field uses settings not supported by the simple editor. Switch to
          the JSON view to edit it.
        </Alert>
      ) : (
        <Stack spacing={1.5}>
          <TextField
            label="Question label"
            value={property.title ?? ''}
            onChange={e => onChange({ title: e.target.value })}
            size="small"
            fullWidth
          />
          <TextField
            label="Help text"
            value={property.description ?? ''}
            onChange={e => onChange({ description: e.target.value })}
            size="small"
            multiline
            rows={2}
            fullWidth
            helperText="Shown to the requester below the question."
          />
          <Stack direction="row" spacing={1} alignItems="center">
            <TextField
              select
              label="Field type"
              value={detectedType}
              onChange={e => onChangeType(e.target.value as SimpleFieldType)}
              size="small"
              sx={{ flexGrow: 1 }}
            >
              {FIELD_TYPE_OPTIONS.map(opt => (
                <MenuItem key={opt.value} value={opt.value}>
                  {opt.label}
                </MenuItem>
              ))}
            </TextField>
            <FormControlLabel
              control={
                <Switch
                  checked={isRequired}
                  onChange={e => onChangeRequired(e.target.checked)}
                />
              }
              label="Required"
            />
          </Stack>

          {detectedType === 'choice' && (
            <ChoiceOptionsEditor
              options={(property.enum as string[] | undefined) ?? []}
              onChange={next => onChange({ enum: next })}
            />
          )}

          {detectedType === 'file' && (
            <Alert severity="info" variant="outlined">
              Requesters will be prompted to upload a file. ACT can attach a
              downloadable template to this field on the form template.
            </Alert>
          )}
        </Stack>
      )}
    </Paper>
  )
}

function ChoiceOptionsEditor({
  options,
  onChange,
}: {
  options: string[]
  onChange: (next: string[]) => void
}) {
  const update = (idx: number, next: string) => {
    onChange(options.map((o, i) => (i === idx ? next : o)))
  }
  const remove = (idx: number) => {
    onChange(options.filter((_, i) => i !== idx))
  }
  const add = () => {
    onChange([...options, `Option ${options.length + 1}`])
  }

  return (
    <Box sx={{ pl: 1, borderLeft: 2, borderColor: 'divider' }}>
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ display: 'block', mb: 0.5 }}
      >
        Choices
      </Typography>
      <Stack spacing={1}>
        {options.map((opt, idx) => (
          <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <TextField
              value={opt}
              onChange={e => update(idx, e.target.value)}
              size="small"
              fullWidth
            />
            <IconButton
              size="small"
              onClick={() => remove(idx)}
              disabled={options.length <= 1}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        ))}
        <Box>
          <Button size="small" startIcon={<AddIcon />} onClick={add}>
            Add choice
          </Button>
        </Box>
      </Stack>
    </Box>
  )
}

/* -------------------------------------------------------------------------- */
/* JSON (raw) editor                                                          */
/* -------------------------------------------------------------------------- */

function JsonTextEditor({ value, onChange }: JsonSchemaBodyEditorProps) {
  const [text, setText] = useState(() => JSON.stringify(value, null, 2))
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setText(JSON.stringify(value, null, 2))
  }, [value])

  const handleChange = (next: string) => {
    setText(next)
    try {
      const parsed = JSON.parse(next)
      setError(null)
      onChange(parsed)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Invalid JSON')
    }
  }

  return (
    <TextField
      value={text}
      onChange={e => handleChange(e.target.value)}
      error={!!error}
      helperText={error ?? ' '}
      multiline
      rows={14}
      fullWidth
      slotProps={{
        input: {
          sx: { fontFamily: 'monospace', fontSize: '0.85rem' },
        },
      }}
    />
  )
}

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function detectFieldType(prop: RJSFSchema | undefined): SimpleFieldType | null {
  if (!prop || typeof prop !== 'object') return null
  if (prop.format === 'synapse-filehandle-id') return 'file'
  if (prop.type === 'string' && Array.isArray(prop.enum)) return 'choice'
  if (prop.type === 'string' && !prop.format) return 'text'
  if (prop.type === 'number' || prop.type === 'integer') return 'number'
  if (prop.type === 'boolean') return 'boolean'
  return null
}

/** Build a fresh schema body for the given simple type, preserving label and help text. */
function applyFieldType(prev: RJSFSchema, type: SimpleFieldType): RJSFSchema {
  const next: RJSFSchema = {
    title: prev.title,
    description: prev.description,
  }
  switch (type) {
    case 'text':
      next.type = 'string'
      break
    case 'number':
      next.type = 'number'
      break
    case 'boolean':
      next.type = 'boolean'
      break
    case 'choice':
      next.type = 'string'
      next.enum =
        Array.isArray(prev.enum) && prev.enum.length > 0
          ? prev.enum
          : ['Option 1']
      break
    case 'file':
      next.type = 'number'
      next.format = 'synapse-filehandle-id'
      break
  }
  return next
}

/** Derive a unique camelCase JSON property key from a display title. */
function generatePropertyKey(title: string, existingKeys: Set<string>): string {
  const base =
    title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .map((w, i) => (i === 0 ? w : w.charAt(0).toUpperCase() + w.slice(1)))
      .join('') || 'field'
  let key = base
  let i = 1
  while (existingKeys.has(key)) {
    i += 1
    key = `${base}${i}`
  }
  return key
}
