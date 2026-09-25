import { useDroppable } from '@dnd-kit/react'
import { useSortable } from '@dnd-kit/react/sortable'
import {
  FormTemplateField,
  FormTemplateStep,
} from '@sage-bionetworks/synapse-client'
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
import { StepFieldRow } from './StepFieldRow'
import {
  FIELD_DRAG_TYPE,
  slotGroupId,
  SLOT_SORTABLE_TYPE,
  slotSortableId,
  stepSortableId,
  STEP_SORTABLE_GROUP,
  STEP_SORTABLE_TYPE,
} from './sortableIds'
import { EditableFormTemplateStep, moveItem, normalizePointer } from './utils'
import { resolveSchemaPropertyAtPointer } from '@/utils/jsonschema/submissionContext'

/**
 * The slot list must lose to the slot rows inside it so that dragging over a populated step
 * targets a row (which resolves to a precise insertion index) and only an empty or below-the-last-
 * row region falls through to the list itself.
 */
const SLOT_LIST_COLLISION_PRIORITY = 1

export type StepCardProps = {
  step: EditableFormTemplateStep
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
    id: stepSortableId(step),
    index: stepIndex,
    group: STEP_SORTABLE_GROUP,
    type: STEP_SORTABLE_TYPE,
    accept: [STEP_SORTABLE_TYPE, FIELD_DRAG_TYPE],
    data: { stepIndex },
  })

  // The slot list is the drop target for slots dragged in from another step, which is the only
  // way to reach a step whose list is empty and therefore has no slot rows to target.
  const { ref: slotListRef, isDropTarget: isSlotDropTarget } = useDroppable({
    id: slotGroupId(step),
    accept: SLOT_SORTABLE_TYPE,
    collisionPriority: SLOT_LIST_COLLISION_PRIORITY,
  })

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
      isPublic: false,
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

          <Box
            ref={slotListRef}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              mb: 1,
              p: 0.5,
              borderRadius: 1,
              transition: 'outline-color 120ms, background-color 120ms',
              outline: isSlotDropTarget
                ? theme => `2px dashed ${theme.palette.primary.main}`
                : '2px dashed transparent',
              backgroundColor: isSlotDropTarget ? 'action.hover' : undefined,
            }}
          >
            {step.fields.length === 0 ? (
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ p: 1 }}
              >
                Drag a field here, or bind one below.
              </Typography>
            ) : (
              step.fields.map((field, fieldIdx) => {
                const key = pointerToKey(field.schemaPath)
                const resolved = resolveSchemaPropertyAtPointer(
                  jsonSchema,
                  field.schemaPath,
                )
                return (
                  <StepFieldRow
                    key={field.schemaPath}
                    sortableId={slotSortableId(field)}
                    sortableIndex={fieldIdx}
                    sortableGroup={slotGroupId(step)}
                    field={field}
                    resolvedProperty={resolved?.subSchema}
                    context={resolved?.context ?? 'ALWAYS'}
                    propertyKey={key ?? field.schemaPath}
                    isFirst={fieldIdx === 0}
                    isLast={fieldIdx === step.fields.length - 1}
                    onChange={patch => handleFieldChange(fieldIdx, patch)}
                    onMoveUp={() => handleFieldMove(fieldIdx, -1)}
                    onMoveDown={() => handleFieldMove(fieldIdx, 1)}
                    onRemove={() => handleFieldRemove(fieldIdx)}
                  />
                )
              })
            )}
          </Box>

          <Stack spacing={1}>
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

/** Convert a single-segment JSON pointer like `/institution` back to `institution`. */
function pointerToKey(pointer: string): string | null {
  if (!pointer.startsWith('/')) return null
  const segment = pointer.slice(1)
  if (!segment || segment.includes('/')) return null
  return segment
}
