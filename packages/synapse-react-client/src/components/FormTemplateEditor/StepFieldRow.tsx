import { useSortable } from '@dnd-kit/react/sortable'
import { FormTemplateField } from '@sage-bionetworks/synapse-client'
import {
  Box,
  Checkbox,
  Collapse,
  FormControlLabel,
  IconButton,
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
import {
  SchemaPropertyContext,
  submissionContextLabel,
} from '@/utils/jsonschema/submissionContext'
import styles from './dragHandle.module.scss'
import { detectFieldType, fieldTypeLabel } from './schemaFieldUtils'
import { SLOT_SORTABLE_TYPE } from './sortableIds'

export type StepFieldRowProps = {
  /** Sortable id assigned by parent: `slot:{stepIndex}:{fieldIndex}`. */
  sortableId: string
  /** Position within its step's fields array. */
  sortableIndex: number
  /** Sortable group; slots only reorder within the same step. */
  sortableGroup: string
  field: FormTemplateField
  /** The schema property this slot resolves to, if it still exists. */
  resolvedProperty: RJSFSchema | undefined
  /** Which submission context (per the schema's `x-synapse-submissionContext` convention)
   * gates this field, derived from `resolvedProperty`. */
  context: SchemaPropertyContext
  /** Underlying property key (the segment after `/` in `schemaPath`). */
  propertyKey: string
  isFirst: boolean
  isLast: boolean
  onChange: (patch: Partial<FormTemplateField>) => void
  onMoveUp: () => void
  onMoveDown: () => void
  onRemove: () => void
}

/**
 * A slot row inside a step. Compact by default — shows the field's display
 * name. Expand to reveal slot-specific config: (for file fields) an
 * optional template file handle. Sortable within its parent step.
 */
export function StepFieldRow({
  sortableId,
  sortableIndex,
  sortableGroup,
  field,
  resolvedProperty,
  context,
  propertyKey,
  isFirst,
  isLast,
  onChange,
  onMoveUp,
  onMoveDown,
  onRemove,
}: StepFieldRowProps) {
  const [expanded, setExpanded] = useState(false)

  const { ref, handleRef, isDragging } = useSortable({
    id: sortableId,
    index: sortableIndex,
    group: sortableGroup,
    type: SLOT_SORTABLE_TYPE,
    accept: SLOT_SORTABLE_TYPE,
  })

  const type = resolvedProperty ? detectFieldType(resolvedProperty) : null
  const displayLabel = resolvedProperty?.title || propertyKey
  const isFileField = type === 'file'
  const isUnresolved = !resolvedProperty

  let caption = `Missing field: ${field.schemaPath}`
  if (!isUnresolved) {
    const captionParts = [fieldTypeLabel(type)]
    if (context !== 'ALWAYS') {
      captionParts.push(submissionContextLabel(context))
    }
    if (field.isPublic) {
      captionParts.push('Public')
    }
    caption = captionParts.join(' · ')
  }

  return (
    <Paper
      ref={ref}
      variant="outlined"
      sx={{
        p: 1,
        opacity: isDragging ? 0.5 : 1,
        backgroundColor: 'action.hover',
        borderColor: isUnresolved ? 'error.main' : undefined,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <Box
          ref={handleRef}
          role="button"
          tabIndex={0}
          aria-label="Drag to reorder field"
          className={styles.dragHandle}
          sx={{ color: 'text.secondary' }}
        >
          <DragHandleIcon fontSize="small" />
        </Box>
        <IconButton
          size="small"
          onClick={() => setExpanded(prev => !prev)}
          aria-label={expanded ? 'Collapse field' : 'Expand field'}
        >
          {expanded ? (
            <ExpandLessIcon fontSize="small" />
          ) : (
            <ExpandMoreIcon fontSize="small" />
          )}
        </IconButton>
        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Typography variant="body2" noWrap title={displayLabel}>
            {displayLabel}
          </Typography>
          <Typography
            variant="caption"
            color={isUnresolved ? 'error' : 'text.secondary'}
          >
            {caption}
          </Typography>
        </Box>
        <IconButton
          size="small"
          disabled={isFirst}
          onClick={onMoveUp}
          aria-label="Move field up"
        >
          <UpIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          disabled={isLast}
          onClick={onMoveDown}
          aria-label="Move field down"
        >
          <DownIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          onClick={onRemove}
          aria-label="Remove field from step"
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Box>

      <Collapse in={expanded} unmountOnExit>
        <Stack spacing={1} sx={{ pt: 1, pl: 4 }}>
          {isFileField && (
            // Raw ID entry, no format validation -- FormTemplateField#templateFileHandleId is a
            // string; a number input would risk precision loss or reformatting for large ids.
            <TextField
              label="Template file handle ID"
              value={field.templateFileHandleId ?? ''}
              onChange={e =>
                onChange({
                  templateFileHandleId: e.target.value || undefined,
                })
              }
              size="small"
              fullWidth
              helperText="Optional"
            />
          )}
          <FormControlLabel
            control={
              <Checkbox
                checked={field.isPublic ?? false}
                onChange={e => onChange({ isPublic: e.target.checked })}
              />
            }
            label="Publicly viewable after approval"
          />
          <Typography variant="caption" color="text.secondary">
            Answers appear in this AR's public submission info once a submission
            is approved. Snapshotted at submit time.
          </Typography>
        </Stack>
      </Collapse>
    </Paper>
  )
}
