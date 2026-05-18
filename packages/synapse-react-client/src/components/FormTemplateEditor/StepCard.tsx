import { useSortable } from '@dnd-kit/react/sortable'
import {
  FormTemplateField,
  FormTemplateStep,
  SubmissionContext,
} from '@/utils/types/AccessRequirementFormTypes'
import {
  Box,
  Collapse,
  IconButton,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import {
  ArrowDownward as DownIcon,
  Delete as DeleteIcon,
  DragIndicator as DragHandleIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
  ArrowUpward as UpIcon,
} from '@mui/icons-material'
import { RJSFSchema } from '@rjsf/utils'
import { useState } from 'react'
import { StepFieldRow, SLOT_SORTABLE_TYPE } from './StepFieldRow'
import { FIELD_DRAG_TYPE } from './FieldLibraryRow'
import { moveItem, normalizePointer } from './utils'

export const STEP_SORTABLE_GROUP = 'steps'
export const STEP_SORTABLE_TYPE = 'step'
export const STEP_ID_PREFIX = 'step:'
export const SLOT_GROUP_PREFIX = 'slots:'

export type StepCardProps = {
  step: FormTemplateStep
  stepIndex: number
  isFirst: boolean
  isLast: boolean
  /** Properties not yet bound to any step in the template. */
  unboundProperties: Array<{ propertyKey: string; displayLabel: string }>
  /** The full JSON Schema, used to resolve display labels for slot rows. */
  jsonSchema: RJSFSchema
  /** If true, render expanded by default (first step). */
  defaultExpanded: boolean
  onChange: (patch: Partial<FormTemplateStep>) => void
  onMoveUp: () => void
  onMoveDown: () => void
  onRemove: () => void
}

export function StepCard({
  step,
  stepIndex,
  isFirst,
  isLast,
  unboundProperties,
  jsonSchema,
  defaultExpanded,
  onChange,
  onMoveUp,
  onMoveDown,
  onRemove,
}: StepCardProps) {
  const [expanded, setExpanded] = useState(defaultExpanded)

  // Step is sortable within its group, and also accepts field drops to bind.
  const { ref, handleRef, isDragging, isDropTarget } = useSortable({
    id: `${STEP_ID_PREFIX}${stepIndex}`,
    index: stepIndex,
    group: STEP_SORTABLE_GROUP,
    type: STEP_SORTABLE_TYPE,
    accept: [STEP_SORTABLE_TYPE, FIELD_DRAG_TYPE],
    data: { stepIndex },
  })

  const properties = (jsonSchema.properties ?? {}) as Record<string, RJSFSchema>

  const handleFieldChange = (
    fieldIdx: number,
    patch: Partial<FormTemplateField>,
  ) => {
    onChange({
      fields: step.fields.map((f, i) =>
        i === fieldIdx ? { ...f, ...patch } : f,
      ),
    })
  }

  const handleFieldMove = (fieldIdx: number, direction: -1 | 1) => {
    onChange({ fields: moveItem(step.fields, fieldIdx, direction) })
  }

  const handleFieldRemove = (fieldIdx: number) => {
    onChange({ fields: step.fields.filter((_, i) => i !== fieldIdx) })
  }

  const handleAddField = (schemaPath: string) => {
    const path = normalizePointer(schemaPath)
    const newField: FormTemplateField = {
      schemaPath: path,
      uiDefinition: {},
      submissionContext: SubmissionContext.ALWAYS,
    }
    onChange({ fields: [...step.fields, newField] })
  }

  const fieldCountLabel = `${step.fields.length} ${
    step.fields.length === 1 ? 'field' : 'fields'
  }`

  return (
    <Paper
      ref={ref}
      variant="outlined"
      sx={{
        p: 1.5,
        opacity: isDragging ? 0.5 : 1,
        transition: 'outline-color 120ms, background-color 120ms',
        outline: isDropTarget
          ? theme => `2px dashed ${theme.palette.primary.main}`
          : '2px dashed transparent',
        outlineOffset: '-2px',
        backgroundColor: isDropTarget ? 'action.hover' : undefined,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <Box
          ref={handleRef}
          aria-label="Drag to reorder step"
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: 'text.secondary',
            cursor: 'grab',
            touchAction: 'none',
            '&:active': { cursor: 'grabbing' },
          }}
        >
          <DragHandleIcon fontSize="small" />
        </Box>
        <IconButton
          size="small"
          onClick={() => setExpanded(prev => !prev)}
          aria-label={expanded ? 'Collapse step' : 'Expand step'}
        >
          {expanded ? (
            <ExpandLessIcon fontSize="small" />
          ) : (
            <ExpandMoreIcon fontSize="small" />
          )}
        </IconButton>
        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Typography variant="body2" fontWeight={500} noWrap>
            Step {stepIndex + 1}: {step.title || '(untitled)'}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {fieldCountLabel}
          </Typography>
        </Box>
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

      <Collapse in={expanded} unmountOnExit>
        <Box sx={{ pt: 1.5 }}>
          <TextField
            label="Title"
            value={step.title}
            onChange={e => onChange({ title: e.target.value })}
            size="small"
            fullWidth
            sx={{ mb: 1 }}
          />
          <TextField
            label="Description"
            value={step.description ?? ''}
            onChange={e => onChange({ description: e.target.value })}
            size="small"
            multiline
            rows={2}
            fullWidth
            sx={{ mb: 1.5 }}
          />

          <Stack spacing={1}>
            {step.fields.map((field, fieldIdx) => {
              const key = pointerToKey(field.schemaPath)
              return (
                <StepFieldRow
                  key={`${field.schemaPath}-${fieldIdx}`}
                  sortableId={`slot:${stepIndex}:${fieldIdx}`}
                  sortableIndex={fieldIdx}
                  sortableGroup={`${SLOT_GROUP_PREFIX}${stepIndex}`}
                  field={field}
                  resolvedProperty={key ? properties[key] : undefined}
                  propertyKey={key ?? field.schemaPath}
                  isFirst={fieldIdx === 0}
                  isLast={fieldIdx === step.fields.length - 1}
                  onChange={patch => handleFieldChange(fieldIdx, patch)}
                  onMoveUp={() => handleFieldMove(fieldIdx, -1)}
                  onMoveDown={() => handleFieldMove(fieldIdx, 1)}
                  onRemove={() => handleFieldRemove(fieldIdx)}
                />
              )
            })}

            <TextField
              select
              size="small"
              label="Bind field"
              value=""
              onChange={e => {
                if (e.target.value) handleAddField(e.target.value)
              }}
              disabled={unboundProperties.length === 0}
              helperText={
                unboundProperties.length === 0
                  ? 'All fields are bound to a step.'
                  : 'Add a field from the library to this step.'
              }
            >
              {unboundProperties.length === 0 ? (
                <MenuItem value="" disabled>
                  All fields bound
                </MenuItem>
              ) : (
                unboundProperties.map(p => (
                  <MenuItem key={p.propertyKey} value={`/${p.propertyKey}`}>
                    {p.displayLabel}
                  </MenuItem>
                ))
              )}
            </TextField>
          </Stack>
        </Box>
      </Collapse>
    </Paper>
  )
}

// SLOT_SORTABLE_TYPE is re-exported here for FormTemplateEditor convenience.
export { SLOT_SORTABLE_TYPE }

/** Convert a single-segment JSON pointer like `/institution` back to `institution`. */
function pointerToKey(pointer: string): string | null {
  if (!pointer.startsWith('/')) return null
  const segment = pointer.slice(1)
  if (!segment || segment.includes('/')) return null
  return segment
}
