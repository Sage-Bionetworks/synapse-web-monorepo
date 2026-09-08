import { Box, Checkbox, FormControlLabel, Radio } from '@mui/material'
import { ReactNode } from 'react'

type EnumFacetFilterOptionProps = {
  readonly id: string
  readonly label: ReactNode
  readonly count?: number
  readonly isDropdown: boolean
  readonly checked: boolean
  readonly onChange: (selected: boolean) => void
  readonly onHover: () => void
  readonly inputType: 'checkbox' | 'radio'
}

export function EnumFacetFilterOption(props: EnumFacetFilterOptionProps) {
  const {
    id,
    label,
    count,
    isDropdown,
    checked,
    onChange,
    onHover,
    inputType,
  } = props

  const control = inputType === 'checkbox' ? <Checkbox /> : <Radio />

  return (
    <Box
      className="EnumFacetFilter__checkboxContainer"
      onClick={() => {
        // If this is a dropdown option, clicking anywhere in the field should toggle selection
        if (isDropdown) {
          onChange(!checked)
        }
      }}
      onMouseEnter={onHover}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <FormControlLabel
        control={control}
        className="EnumFacetFilter__checkbox"
        sx={{
          overflowWrap: 'anywhere',
          // Let the label shrink so the count stays in a consistent column
          // (and custom node labels can truncate rather than overflow the row).
          flex: 1,
          minWidth: 0,
          '& .MuiFormControlLabel-label': { minWidth: 0, overflow: 'hidden' },
        }}
        onClick={event => event.stopPropagation()}
        onChange={(_event, newValue) => {
          onChange(newValue)
        }}
        key={`${id}`}
        checked={checked}
        label={label}
      />

      {count != null && (
        <>
          {isDropdown && (
            <span
              className="EnumFacetFilter__count"
              style={{ flexShrink: 0, marginLeft: 8 }}
            >
              ({count.toLocaleString()})
            </span>
          )}
          {!isDropdown && (
            <div
              className="EnumFacetFilter__count"
              style={{ flexShrink: 0, marginLeft: 8 }}
            >
              {count.toLocaleString()}
            </div>
          )}
        </>
      )}
    </Box>
  )
}
