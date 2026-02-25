import { Tooltip } from '@mui/material'
import { TOOLTIP_DELAY_SHOW } from '@/components/SynapseTable/SynapseTableConstants'

type ColumnHeaderWithTooltipProps = {
  name: string
  description?: string
}

/**
 * Renders a column header with an optional tooltip showing the column description.
 * If no description is provided, renders only the column name.
 */
export function ColumnHeaderWithTooltip({
  name,
  description,
}: ColumnHeaderWithTooltipProps) {
  if (!description) {
    return <>{name}</>
  }

  return (
    <Tooltip
      title={description}
      placement="top"
      enterNextDelay={TOOLTIP_DELAY_SHOW}
    >
      <span>{name}</span>
    </Tooltip>
  )
}
