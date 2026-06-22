import { Box, IconButton, Tooltip } from '@mui/material'
import { PushPin, PushPinOutlined } from '@mui/icons-material'
import { TOOLTIP_DELAY_SHOW } from '@/components/SynapseTable/SynapseTableConstants'

type ColumnHeaderWithTooltipProps = {
  name: string
  description?: string
  isRequired?: boolean
  showPinIcon?: boolean
  isPinned?: boolean
  onTogglePin?: () => void
}

/**
 * Renders a column header. When a description is provided, hovering the column
 * name shows it as a native tooltip; otherwise the column name is shown (useful
 * for truncated headers). An optional pin icon is shown on the right.
 */
export function ColumnHeaderWithTooltip({
  name,
  description,
  isRequired = false,
  showPinIcon = false,
  isPinned = false,
  onTogglePin,
}: ColumnHeaderWithTooltipProps) {
  return (
    <Box
      data-column-id={name}
      sx={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr) auto',
        gap: 0.5,
        width: '100%',
        alignItems: 'center',
        minWidth: 0,
      }}
    >
      {/* Text area - shrinks first */}
      <Box
        component="span"
        sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          minWidth: 0,
        }}
        title={description || name}
      >
        {name}
        {isRequired && (
          <Box component="span" sx={{ color: 'error.main', ml: 0.25 }}>
            *
          </Box>
        )}
      </Box>

      {/* Icons area - fixed size, never shrinks */}
      <Box sx={{ display: 'flex', gap: 0.5, flexShrink: 0 }}>
        {showPinIcon && onTogglePin && (
          <Tooltip
            title={isPinned ? 'Unpin column' : 'Pin column'}
            placement="top"
            enterNextDelay={TOOLTIP_DELAY_SHOW}
          >
            <IconButton
              size="small"
              color="inherit"
              aria-label={isPinned ? 'Unpin column' : 'Pin column'}
              // Use onMouseDown instead of onClick to prevent column selection
              // when clicking the pin icon. stopPropagation prevents event bubbling.
              onMouseDown={e => {
                e.stopPropagation()
                onTogglePin()
              }}
              sx={{
                color: 'inherit',
                opacity: isPinned ? 1 : 0.7,
                '&:hover': {
                  opacity: 1,
                },
              }}
            >
              {isPinned ? (
                <PushPin fontSize="inherit" />
              ) : (
                <PushPinOutlined fontSize="inherit" />
              )}
            </IconButton>
          </Tooltip>
        )}
      </Box>
    </Box>
  )
}
