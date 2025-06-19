import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'

type EnumFacetFilterOptionProps = {
  readonly id: string
  readonly label: string
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
            <span className="EnumFacetFilter__count">
              ({count.toLocaleString()})
            </span>
          )}
          {!isDropdown && (
            <div className="EnumFacetFilter__count">
              {count.toLocaleString()}
            </div>
          )}
        </>
      )}
    </Box>
  )
}
