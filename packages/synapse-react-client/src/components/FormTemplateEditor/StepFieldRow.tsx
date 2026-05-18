import { useSortable } from '@dnd-kit/react/sortable'

export const SLOT_SORTABLE_TYPE = 'slot'
import {
  FormTemplateField,
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
import { detectFieldType, fieldTypeLabel } from './schemaFieldUtils'

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
 * name. Expand to reveal slot-specific config: submission context and
 * (for file fields) an optional template file handle. Sortable within its
 * parent step.
 */
export function StepFieldRow({
  sortableId,
  sortableIndex,
  sortableGroup,
  field,
  resolvedProperty,
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

  return (
    <Paper
      ref={ref}
      variant="outlined"
      sx={{
        p: 1,
        opacity: isDragging ? 0.5 : 1,
        backgroundColor: isUnresolved ? 'error.light' : 'action.hover',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <Box
          ref={handleRef}
          aria-label="Drag to reorder field"
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
            {isUnresolved
              ? `Missing field: ${field.schemaPath}`
              : `${fieldTypeLabel(type)}${
                  field.submissionContext !== SubmissionContext.ALWAYS
                    ? ` · ${contextLabel(field.submissionContext)}`
                    : ''
                }`}
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
        <Stack direction="row" spacing={1} sx={{ pt: 1, pl: 4 }}>
          <TextField
            select
            label="Submission context"
            value={field.submissionContext}
            onChange={e =>
              onChange({
                submissionContext: e.target.value as SubmissionContext,
              })
            }
            size="small"
            fullWidth
          >
            <MenuItem value={SubmissionContext.ALWAYS}>Always</MenuItem>
            <MenuItem value={SubmissionContext.REQUEST_ONLY}>
              Request only
            </MenuItem>
            <MenuItem value={SubmissionContext.RENEWAL_ONLY}>
              Renewal only
            </MenuItem>
          </TextField>
          {isFileField && (
            <TextField
              label="Template file handle ID"
              type="number"
              value={field.templateFileHandleId ?? ''}
              onChange={e =>
                onChange({
                  templateFileHandleId: e.target.value
                    ? parseInt(e.target.value)
                    : undefined,
                })
              }
              size="small"
              fullWidth
              helperText="Optional"
            />
          )}
        </Stack>
      </Collapse>
    </Paper>
  )
}

function contextLabel(ctx: SubmissionContext): string {
  switch (ctx) {
    case SubmissionContext.ALWAYS:
      return 'Always'
    case SubmissionContext.REQUEST_ONLY:
      return 'Request only'
    case SubmissionContext.RENEWAL_ONLY:
      return 'Renewal only'
  }
}
