import { Chip, ChipProps } from '@mui/material'
import { castCellValueToString } from './AutocompleteColumn'
import { AutocompleteMultipleEnumOption } from './AutocompleteMultipleEnumColumn'

export interface GridAutocompleteChipProps extends Omit<ChipProps, 'label'> {
  option: AutocompleteMultipleEnumOption
}

export function GridAutocompleteChip({
  option,
  ...chipProps
}: GridAutocompleteChipProps) {
  return (
    <Chip
      {...chipProps}
      label={castCellValueToString(option)}
      sx={{
        fontSize: '0.75rem',
        height: '24px',
        margin: '1px',
        flexShrink: 0,
        ...chipProps.sx,
      }}
    />
  )
}
