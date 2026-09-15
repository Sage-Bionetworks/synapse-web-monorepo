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
import { useState } from 'react'
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

  // The draft exists only while the key is being edited, and is tagged with the key it was started
  // from. When `propertyKey` changes underneath it (switching fields, or the container re-slugging
  // the key from the label) the draft no longer applies and the prop is shown again.
  const [keyDraft, setKeyDraft] = useState<{
    forKey: string | null
    value: string
  } | null>(null)
  const displayedKey =
    keyDraft?.forKey === propertyKey ? keyDraft.value : (propertyKey ?? '')

  let keyError: string | null = null
  if (displayedKey.length === 0) {
    keyError = 'Required'
  } else if (displayedKey !== propertyKey && existingKeys.has(displayedKey)) {
    keyError = 'Already used by another field'
  }

  const commitKeyDraft = () => {
    if (propertyKey && !keyError && displayedKey !== propertyKey) {
      onRenameKey(displayedKey)
    }
    setKeyDraft(null)
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
            value={displayedKey}
            onChange={e =>
              setKeyDraft({
                forKey: propertyKey,
                value: sanitizePropertyKey(e.target.value),
              })
            }
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

              {(type === 'choice' || type === 'multiChoice') && (
                <ChoiceOptionsEditor
                  options={
                    type === 'choice'
                      ? ((property.enum as string[] | undefined) ?? [])
                      : (((property.items as RJSFSchema | undefined)?.enum as
                          | string[]
                          | undefined) ?? [])
                  }
                  onChange={next =>
                    type === 'choice'
                      ? onUpdate({ enum: next })
                      : onUpdate({
                          items: {
                            ...(property.items as RJSFSchema),
                            enum: next,
                          },
                        })
                  }
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
