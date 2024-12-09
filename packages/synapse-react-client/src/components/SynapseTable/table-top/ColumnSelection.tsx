import { CSSProperties, SyntheticEvent, useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { ElementWithTooltip } from '../../widgets/ElementWithTooltip'
import { SelectColumn } from '@sage-bionetworks/synapse-types'
import IconSvg from '../../IconSvg/IconSvg'
import { useQueryVisualizationContext } from '../../QueryVisualizationWrapper'

type ColumnSelectionProps = {
  headers?: SelectColumn[]
  isColumnSelected: string[]
  /* 
      The dropdown state is held in SynapseTable because the EllipsisDropdown has
      an option to open the dropdown, 'show columns'
    */
  show?: boolean
  onChange?: () => void
  toggleColumnSelection: (name: string) => void
  darkTheme?: boolean
}

type MetadataEvent = {
  source: 'select' | 'click' | 'rootClose' | 'keydown'
}

const tooltipColumnSelectionId = 'addAndRemoveColumns'

export function ColumnSelection(props: ColumnSelectionProps) {
  const { headers, isColumnSelected, toggleColumnSelection, darkTheme } = props

  const { getColumnDisplayName } = useQueryVisualizationContext()
  const [show, setShow] = useState(false)
  const onDropdownClick = (
    _show: boolean,
    _event: SyntheticEvent<Dropdown, Event>,
    metadata: MetadataEvent,
  ) => {
    if (metadata.source === 'rootClose') {
      setShow(false)
    } else {
      setShow(true)
    }
  }
  return (
    <Dropdown
      as="span"
      onToggle={(
        show: boolean,
        event: SyntheticEvent<Dropdown, Event>,
        metadata: MetadataEvent,
      ) => onDropdownClick(show, event, metadata)}
      show={show}
      drop="down"
    >
      <ElementWithTooltip
        tooltipText={'Show/Hide Columns'}
        icon={darkTheme ? 'columnsdark' : 'columns'}
        darkTheme={darkTheme}
      ></ElementWithTooltip>

      {/* There's a known issue if the number of dropdown items is very large, ~30+, the dropdown
          will unexpectedly render with the list going upwards instead of downwards.
        */}
      <Dropdown.Menu
        id={`${tooltipColumnSelectionId}-dropdown`}
        className="SRC-primary-color-hover-dropdown"
        alignRight={true}
      >
        {headers?.map(header => {
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
            <Dropdown.Item
              onClick={() => toggleColumnSelection(name)}
              key={name}
            >
              <span className={maybeShowPrimaryColor} style={iconStyle}>
                <IconSvg icon="check" sx={{ width: '14px' }} />
              </span>
              {getColumnDisplayName(name)}
            </Dropdown.Item>
          )
        })}
      </Dropdown.Menu>
    </Dropdown>
  )
}
