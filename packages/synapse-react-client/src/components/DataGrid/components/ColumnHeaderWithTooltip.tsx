import { Box, IconButton, Tooltip } from '@mui/material'
import { HelpTwoTone, PushPin, PushPinOutlined } from '@mui/icons-material'
import { TOOLTIP_DELAY_SHOW } from '@/components/SynapseTable/SynapseTableConstants'

type ColumnHeaderWithTooltipProps = {
  name: string
  description?: string
  showPinIcon?: boolean
  isPinned?: boolean
  onTogglePin?: () => void
}

/**
 * Renders a column header with an optional help icon showing the column description.
 * Adopts the help icon pattern from ColumnHeader for consistent UX.
 */
export function ColumnHeaderWithTooltip({
  name,
  description,
  showPinIcon = false,
  isPinned = false,
  onTogglePin,
}: ColumnHeaderWithTooltipProps) {
  return (
    <Box
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
        title={name} // Native tooltip for truncated text
      >
        {name}
      </Box>

      {/* Icons area - fixed size, never shrinks */}
      <Box sx={{ display: 'flex', gap: 0.5, flexShrink: 0 }}>
        {showPinIcon && (
          <Tooltip
            title={isPinned ? 'Unpin column' : 'Pin column'}
            placement="top"
            enterNextDelay={TOOLTIP_DELAY_SHOW}
          >
            <IconButton
              size="small"
              color="inherit"
              onMouseDown={e => {
                e.stopPropagation()
                onTogglePin?.()
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
        {description && (
          <Tooltip
            title={description}
            placement="top"
            enterNextDelay={TOOLTIP_DELAY_SHOW}
          >
            <IconButton size="small" color="inherit">
              <HelpTwoTone fontSize="inherit" />
            </IconButton>
          </Tooltip>
        )}
      </Box>
    </Box>
  )
}
