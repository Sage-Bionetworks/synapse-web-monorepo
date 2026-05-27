import { Chip, ChipProps, SxProps, Theme } from '@mui/material'
import isEqual from 'lodash-es/isEqual'
import { memo, useMemo } from 'react'
import { castCellValueToString } from './AutocompleteColumn'
import { AutocompleteMultipleEnumOption } from './AutocompleteMultipleEnumColumn'

const GRID_AUTOCOMPLETE_CHIP_BASE_SX = {
  fontSize: '0.75rem',
  height: '24px',
  margin: '1px',
  flexShrink: 0,
} as const

export interface GridAutocompleteChipProps
  extends Omit<ChipProps, 'label' | 'sx'> {
  option: AutocompleteMultipleEnumOption
  active?: boolean
}

function GridAutocompleteChipInner({
  option,
  active = false,
  ...chipProps
}: GridAutocompleteChipProps) {
  const label = useMemo(() => castCellValueToString(option), [option])
  const sx = useMemo<SxProps<Theme>>(
    () => ({
      ...GRID_AUTOCOMPLETE_CHIP_BASE_SX,
      maxWidth: active ? 'none' : '120px',
    }),
    [active],
  )
  return <Chip {...chipProps} label={label} sx={sx} />
}

// Memoization contract: callers must pass stable references for onDelete and
// other handler/style props. AutocompleteMultipleEnumCell satisfies this by
// maintaining a per-index onDelete map keyed off refs to the latest state.
// `option` is compared deeply because enum values may be objects/arrays.
function areGridAutocompleteChipPropsEqual(
  prev: GridAutocompleteChipProps,
  next: GridAutocompleteChipProps,
) {
  return (
    isEqual(prev.option, next.option) &&
    prev.active === next.active &&
    prev.onDelete === next.onDelete &&
    prev.disabled === next.disabled &&
    prev.tabIndex === next.tabIndex &&
    (prev as { 'data-tag-index'?: number })['data-tag-index'] ===
      (next as { 'data-tag-index'?: number })['data-tag-index'] &&
    prev.className === next.className
  )
}

export const GridAutocompleteChip = memo(
  GridAutocompleteChipInner,
  areGridAutocompleteChipPropsEqual,
)
