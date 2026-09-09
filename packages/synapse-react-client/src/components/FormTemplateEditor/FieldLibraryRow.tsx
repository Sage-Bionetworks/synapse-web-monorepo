import { useDraggable } from '@dnd-kit/react'
import { Box, Chip, Paper, Stack, Typography } from '@mui/material'
import { DragIndicator as DragHandleIcon } from '@mui/icons-material'
import { RJSFSchema } from '@rjsf/utils'
import { detectFieldType, fieldTypeLabel } from './schemaFieldUtils'

export type FieldLibraryRowProps = {
  propertyKey: string
  property: RJSFSchema
  isRequired: boolean
  isUsedInSteps: boolean
  onClick: () => void
}

export const FIELD_DRAG_TYPE = 'field'

/**
 * A compact row in the field library. Click anywhere to edit the field's
 * definition; grab the drag indicator on the left to bind it to a step.
 * Rows already bound to a step are non-draggable.
 */
export function FieldLibraryRow({
  propertyKey,
  property,
  isRequired,
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
      onClick={onClick}
      sx={{
        p: 1.25,
        cursor: 'pointer',
        transition: 'background-color 120ms, opacity 120ms',
        opacity: isDragging ? 0.4 : 1,
        '&:hover': { backgroundColor: 'action.hover' },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <Box
          ref={handleRef}
          aria-label={
            isUsedInSteps ? 'Already bound to a step' : 'Drag to bind to a step'
          }
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: isUsedInSteps ? 'text.disabled' : 'text.secondary',
            cursor: isUsedInSteps ? 'not-allowed' : 'grab',
            touchAction: 'none',
            '&:active': { cursor: 'grabbing' },
          }}
          onClick={e => e.stopPropagation()}
        >
          <DragHandleIcon fontSize="small" />
        </Box>
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
          </Stack>
        </Box>
        <Chip
          label={isUsedInSteps ? 'In step' : 'Unbound'}
          size="small"
          color={isUsedInSteps ? 'success' : 'warning'}
          variant="outlined"
        />
      </Box>
    </Paper>
  )
}
