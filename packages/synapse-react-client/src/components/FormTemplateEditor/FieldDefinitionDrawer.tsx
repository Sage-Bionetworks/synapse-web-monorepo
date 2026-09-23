import {
  Alert,
  Box,
  Button,
  Drawer,
  FormControlLabel,
  IconButton,
  MenuItem,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material'
import { Close as CloseIcon, Delete as DeleteIcon } from '@mui/icons-material'
import { RJSFSchema } from '@rjsf/utils'
import { useEffect, useState } from 'react'
import { SchemaPropertyContext } from '@/utils/jsonschema/submissionContext'
import { ChoiceOptionsEditor } from './ChoiceOptionsEditor'
import {
  applyFieldType,
  detectFieldType,
  FIELD_TYPE_OPTIONS,
  sanitizePropertyKey,
  SimpleFieldType,
} from './schemaFieldUtils'

const SUBMISSION_CONTEXT_OPTIONS: {
  value: SchemaPropertyContext
  label: string
}[] = [
  { value: 'ALWAYS', label: 'Always' },
  { value: 'REQUEST_ONLY', label: 'Initial request only' },
  { value: 'RENEWAL_ONLY', label: 'Renewal only' },
]

export type FieldDefinitionDrawerProps = {
  open: boolean
  propertyKey: string | null
  /** All property keys currently defined in the schema, including this one. */
  existingKeys: Set<string>
  property: RJSFSchema | null
  isRequired: boolean
  /**
   * Which submission context this property applies to (per the schema's
   * `x-synapse-submissionContext` `allOf` convention). Editable here via a guided select box.
   * This component only calls `onChangeContext`; a container elsewhere in the authoring flow is
   * responsible for moving the property's definition between the schema's top-level `properties`
   * and the matching `allOf` branch so ACT never has to hand-edit `allOf` for the common case.
   */
  context: SchemaPropertyContext
  /** True when this field is bound to one or more steps. Affects delete affordance. */
  isUsedInSteps: boolean
  /**
   * True when this property's key collides with a first-class field that always renders
   * statically outside the template (institution, PI, signing official, accessor changes, DUC).
   * Non-blocking — both would render, so this is a warning, not an error.
   */
  isFirstClassCollision: boolean
  onClose: () => void
  onUpdate: (patch: Partial<RJSFSchema>) => void
  onRenameKey: (newKey: string) => void
  onReplace: (next: RJSFSchema) => void
  onChangeRequired: (isRequired: boolean) => void
  onChangeContext: (context: SchemaPropertyContext) => void
  onRemove: () => void
}

/**
 * Slide-in drawer for editing a single field's JSON Schema definition (label, help text, type,
 * required, submission context, choice options, file format).
 */
export function FieldDefinitionDrawer({
  open,
  propertyKey,
  existingKeys,
  property,
  isRequired,
  context,
  isUsedInSteps,
  isFirstClassCollision,
  onClose,
  onUpdate,
  onRenameKey,
  onReplace,
  onChangeRequired,
  onChangeContext,
  onRemove,
}: FieldDefinitionDrawerProps) {
  const type = property ? detectFieldType(property) : null
  const isAdvanced = property !== null && type === null

  // Local draft so keystrokes don't rename the property until the key is confirmed valid and
  // unique. `propertyKey` doubles as both this field's *identity* and its *current value*: a
  // container elsewhere in the authoring flow may live-derive it from the question label as a
  // slug until the editor manually diverges, so `propertyKey` can legitimately change out from
  // under an open, unmodified draft, not just when switching to a different field. A
  // `key`-driven remount can't distinguish those two cases (there's no separate stable field
  // id), and remounting on every derived-slug keystroke would tear down this input's DOM node
  // mid-edit. An effect resyncing the draft is the correct fit here.
  const [keyDraft, setKeyDraft] = useState(propertyKey ?? '')
  useEffect(() => {
    setKeyDraft(propertyKey ?? '')
  }, [propertyKey])

  const keyError =
    keyDraft.length === 0
      ? 'Required'
      : keyDraft !== propertyKey && existingKeys.has(keyDraft)
        ? 'Already used by another field'
        : null

  const commitKeyDraft = () => {
    if (keyError || !propertyKey) {
      setKeyDraft(propertyKey ?? '')
      return
    }
    if (keyDraft !== propertyKey) onRenameKey(keyDraft)
  }

  const handleChangeType = (next: SimpleFieldType) => {
    if (!property) return
    onReplace(applyFieldType(property, next))
  }

  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor="right"
      slotProps={{ paper: { sx: { width: { xs: '100%', sm: 480 } } } }}
    >
      <Box
        sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Edit field
          </Typography>
          <IconButton onClick={onClose} aria-label="Close field editor">
            <CloseIcon />
          </IconButton>
        </Box>

        {propertyKey && (
          <TextField
            label="Property key"
            value={keyDraft}
            onChange={e => setKeyDraft(sanitizePropertyKey(e.target.value))}
            onBlur={commitKeyDraft}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                e.preventDefault()
                commitKeyDraft()
              }
            }}
            error={keyError !== null}
            helperText={
              keyError ??
              'Identifies this field in the JSON Schema and submitted requests.'
            }
            size="small"
            fullWidth
            sx={{ mb: 2 }}
            slotProps={{ input: { sx: { fontFamily: 'monospace' } } }}
          />
        )}

        {property && (
          <TextField
            select
            label="Submission context"
            value={context}
            onChange={e =>
              onChangeContext(e.target.value as SchemaPropertyContext)
            }
            size="small"
            fullWidth
            sx={{ mb: 2 }}
            helperText="Controls whether requesters are asked this question on an initial request, a renewal, or both."
          >
            {SUBMISSION_CONTEXT_OPTIONS.map(opt => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </TextField>
        )}

        {isFirstClassCollision && (
          <Alert severity="warning" sx={{ mb: 2 }}>
            "{propertyKey}" has the same key as a first-class field
            (institution, PI, signing official, accessor changes, or DUC) that
            is always shown to the requester separately. Requesters may see this
            question twice.
          </Alert>
        )}

        <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
          {!property ? (
            <Alert severity="info">No field selected.</Alert>
          ) : isAdvanced ? (
            <Alert severity="warning" variant="outlined">
              This field uses settings not supported by the simple editor. Edit
              it via the advanced raw JSON Schema view.
            </Alert>
          ) : (
            <Stack spacing={2}>
              <TextField
                label="Question label"
                value={property.title ?? ''}
                onChange={e => onUpdate({ title: e.target.value })}
                size="small"
                fullWidth
              />
              <TextField
                label="Help text"
                value={property.description ?? ''}
                onChange={e => onUpdate({ description: e.target.value })}
                size="small"
                multiline
                rows={3}
                fullWidth
                helperText="Shown to the requester below the question."
              />
              <Stack direction="row" spacing={1} alignItems="center">
                <TextField
                  select
                  label="Field type"
                  value={type}
                  onChange={e =>
                    handleChangeType(e.target.value as SimpleFieldType)
                  }
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

              {type === 'choice' && (
                // Keyed so switching to a different field remounts it, resetting its internal
                // row ids -- otherwise they'd stay sized to the *previous* field's option count
                // (this component persists across field switches; only `property` changes).
                <ChoiceOptionsEditor
                  key={propertyKey}
                  options={(property.enum as string[] | undefined) ?? []}
                  onChange={next => onUpdate({ enum: next })}
                />
              )}

              {type === 'file' && (
                <Alert severity="info" variant="outlined">
                  Requesters will be prompted to upload a file. You can attach a
                  downloadable template to this field on each step that uses it.
                </Alert>
              )}
            </Stack>
          )}
        </Box>

        <Box
          sx={{
            pt: 2,
            display: 'flex',
            justifyContent: 'space-between',
            gap: 1,
          }}
        >
          <Button
            color="error"
            startIcon={<DeleteIcon />}
            onClick={onRemove}
            disabled={!property}
          >
            {isUsedInSteps ? 'Delete (will unbind from steps)' : 'Delete field'}
          </Button>
          <Button variant="contained" onClick={onClose}>
            Done
          </Button>
        </Box>
      </Box>
    </Drawer>
  )
}
