import MenuItem from '@mui/material/MenuItem'
import { SelectColumn } from '@sage-bionetworks/synapse-types'
import { CSSProperties } from 'react'
import IconSvg from '../../IconSvg/IconSvg'
import { useQueryVisualizationContext } from '../../QueryVisualizationWrapper'
import { ElementWithTooltip } from '../../widgets/ElementWithTooltip'

type ColumnSelectionProps = {
  headers?: SelectColumn[]
  isColumnSelected: string[]
  onChange?: () => void
  toggleColumnSelection: (name: string) => void
  darkTheme?: boolean
}

export function ColumnSelection(props: ColumnSelectionProps) {
  const { headers, isColumnSelected, toggleColumnSelection, darkTheme } = props

  const { getColumnDisplayName } = useQueryVisualizationContext()
  return (
    <ElementWithTooltip
      tooltipText={'Show/Hide Columns'}
      icon={darkTheme ? 'columnsdark' : 'columns'}
      darkTheme={darkTheme}
      menuItems={headers?.map(header => {
        const { name } = header
        const isCurrentColumnSelected = isColumnSelected.includes(name)
        const iconStyle: CSSProperties = {
          width: '11px',
          marginRight: '10px',
          visibility: isCurrentColumnSelected ? undefined : 'hidden',
        }
        const maybeShowPrimaryColor = isCurrentColumnSelected
          ? 'SRC-primary-text-color'
          : ''
        return (
          <MenuItem onClick={() => toggleColumnSelection(name)} key={name}>
            <span className={maybeShowPrimaryColor} style={iconStyle}>
              <IconSvg icon="check" sx={{ width: '14px' }} />
            </span>
            {getColumnDisplayName(name)}
          </MenuItem>
        )
      })}
    />
  )
}
