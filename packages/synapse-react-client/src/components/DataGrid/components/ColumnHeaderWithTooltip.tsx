import { Box, IconButton, Tooltip } from '@mui/material'
import { HelpTwoTone } from '@mui/icons-material'
import { TOOLTIP_DELAY_SHOW } from '@/components/SynapseTable/SynapseTableConstants'

type ColumnHeaderWithTooltipProps = {
  name: string
  description?: string
}

/**
 * Renders a column header with an optional help icon showing the column description.
 * Adopts the help icon pattern from ColumnHeader for consistent UX.
 */
export function ColumnHeaderWithTooltip({
  name,
  description,
}: ColumnHeaderWithTooltipProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
      <span>{name}</span>
      {description && (
        <Tooltip
          title={description}
          placement="top"
          enterNextDelay={TOOLTIP_DELAY_SHOW}
        >
          <IconButton size="small">
            <HelpTwoTone fontSize="inherit" />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  )
}
