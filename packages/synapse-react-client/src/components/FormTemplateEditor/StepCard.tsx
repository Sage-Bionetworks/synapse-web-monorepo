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
import pluralize from 'pluralize'
import { useState } from 'react'
import {
  pointerToPropertyKey,
  propertyKeyToPointer,
  ResolvedSchemaProperty,
  resolveSchemaPropertyAtPointer,
} from '@/utils/jsonschema/submissionContext'
import dragHandleStyles from './dragHandle.module.scss'
import dropTargetStyles from './dropTarget.module.scss'
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
import { BIND_FIELD_LABEL, EditableFormTemplateStep, moveItem } from './utils'

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
  unboundProperties: ResolvedSchemaProperty[]
  /** The full JSON Schema, used to resolve display labels for slot rows. */
  jsonSchema: RJSFSchema
  /** The FormTemplate's id, if it has been saved. Threaded down to file-field template uploads. */
  formTemplateId: string | undefined
  /** If true, render expanded by default (first step). */
  defaultExpanded: boolean
  onChange: (patch: Partial<FormTemplateStep>) => void
  onBindField: (propertyKey: string) => void
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
  formTemplateId,
  defaultExpanded,
  onChange,
  onBindField,
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

  const fieldCountLabel = pluralize('field', step.fields.length, true)

  return (
    <Paper
      ref={ref}
      variant="outlined"
      className={`${dropTargetStyles.dropTarget} ${dragHandleStyles.dragSource}`}
      data-drop-target={isDropTarget}
      data-dragging={isDragging}
      sx={{ p: 1.5 }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <Box
          ref={handleRef}
          role="button"
          tabIndex={0}
          aria-label="Drag to reorder step"
          className={dragHandleStyles.dragHandle}
          sx={{ color: 'text.secondary' }}
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
        <IconButton
          size="small"
          disabled={isFirst}
          onClick={onMoveUp}
          aria-label="Move step up"
        >
          <UpIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          disabled={isLast}
          onClick={onMoveDown}
          aria-label="Move step down"
        >
          <DownIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" onClick={onRemove} aria-label="Remove step">
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
            className={dropTargetStyles.dropTarget}
            data-drop-target={isSlotDropTarget}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              mb: 1,
              p: 0.5,
              borderRadius: 1,
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
                    propertyKey={
                      pointerToPropertyKey(field.schemaPath) ?? field.schemaPath
                    }
                    isFirst={fieldIdx === 0}
                    isLast={fieldIdx === step.fields.length - 1}
                    formTemplateId={formTemplateId}
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
              label={BIND_FIELD_LABEL}
              value=""
              onChange={e => {
                if (e.target.value) onBindField(e.target.value)
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
                unboundProperties.map(p => {
                  const pointer = propertyKeyToPointer(p.propertyKey)
                  return (
                    <MenuItem key={p.propertyKey} value={p.propertyKey}>
                      {p.subSchema.title
                        ? `${p.subSchema.title} (${pointer})`
                        : pointer}
                    </MenuItem>
                  )
                })
              )}
            </TextField>
          </Stack>
        </Box>
      </Collapse>
    </Paper>
  )
}
