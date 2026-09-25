import { useDraggable } from '@dnd-kit/react'
import { Box, Chip, Paper, Stack, Typography } from '@mui/material'
import { DragIndicator as DragHandleIcon } from '@mui/icons-material'
import { RJSFSchema } from '@rjsf/utils'
import {
  SchemaPropertyContext,
  submissionContextLabel,
} from '@/utils/jsonschema/submissionContext'
import styles from './dragHandle.module.scss'
import {
  detectFieldType,
  FIELD_DRAG_TYPE,
  fieldTypeLabel,
} from './schemaFieldUtils'

export type FieldLibraryRowProps = {
  propertyKey: string
  property: RJSFSchema
  isRequired: boolean
  /** Which submission context (per the schema's `x-synapse-submissionContext` convention)
   * gates this property. `ALWAYS` properties show no badge. */
  context: SchemaPropertyContext
  isUsedInSteps: boolean
  onClick: () => void
}

/**
 * A compact row in the field library. Click anywhere to edit the field's
 * definition; grab the drag indicator on the left to bind it to a step.
 * Rows already bound to a step are non-draggable.
 */
export function FieldLibraryRow({
  propertyKey,
  property,
  isRequired,
  context,
  isUsedInSteps,
  onClick,
}: FieldLibraryRowProps) {
  const type = detectFieldType(property)
  const displayLabel = property.title || propertyKey

  const { ref, handleRef, isDragging } = useDraggable({
    id: `field:${propertyKey}`,
    type: FIELD_DRAG_TYPE,
    data: { propertyKey },
    disabled: isUsedInSteps,
  })

  return (
    <Paper
      ref={ref}
      variant="outlined"
      sx={{
        p: 1.25,
        transition: 'opacity 120ms',
        opacity: isDragging ? 0.4 : 1,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <Box
          ref={handleRef}
          role="button"
          tabIndex={isUsedInSteps ? -1 : 0}
          aria-label={
            isUsedInSteps ? 'Already bound to a step' : 'Drag to bind to a step'
          }
          className={styles.dragHandle}
          sx={{
            color: isUsedInSteps ? 'text.disabled' : 'text.secondary',
            cursor: isUsedInSteps ? 'not-allowed' : undefined,
          }}
        >
          <DragHandleIcon fontSize="small" />
        </Box>
        <Box
          role="button"
          tabIndex={0}
          aria-label={`Edit ${displayLabel}`}
          onClick={onClick}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              onClick()
            }
          }}
          sx={{
            flexGrow: 1,
            minWidth: 0,
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            cursor: 'pointer',
            borderRadius: 1,
            p: 0.5,
            m: -0.5,
            '&:hover': { backgroundColor: 'action.hover' },
          }}
        >
          <Box sx={{ flexGrow: 1, minWidth: 0 }}>
            <Typography
              variant="body2"
              fontWeight={500}
              noWrap
              title={displayLabel}
            >
              {displayLabel}
            </Typography>
            <Stack
              direction="row"
              spacing={0.5}
              alignItems="center"
              sx={{ mt: 0.25 }}
            >
              <Typography variant="caption" color="text.secondary">
                {fieldTypeLabel(type)}
              </Typography>
              {isRequired && (
                <>
                  <Typography variant="caption" color="text.secondary">
                    ·
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Required
                  </Typography>
                </>
              )}
              {context !== 'ALWAYS' && (
                <>
                  <Typography variant="caption" color="text.secondary">
                    ·
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {submissionContextLabel(context)}
                  </Typography>
                </>
              )}
            </Stack>
          </Box>
          <Chip
            label={isUsedInSteps ? 'In step' : 'Unbound'}
            size="small"
            color={isUsedInSteps ? 'success' : 'warning'}
            variant="outlined"
          />
        </Box>
      </Box>
    </Paper>
  )
}
