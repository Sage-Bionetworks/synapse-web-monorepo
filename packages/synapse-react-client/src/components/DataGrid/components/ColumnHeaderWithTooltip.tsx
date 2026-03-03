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
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
      <span>{name}</span>
      {showPinIcon && (
        <Tooltip
          title={isPinned ? 'Unpin column' : 'Pin column'}
          placement="top"
          enterNextDelay={TOOLTIP_DELAY_SHOW}
        >
          <IconButton
            size="small"
            color="inherit"
            onClick={onTogglePin}
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
  )
}
