import { SxProps, Theme } from '@mui/material'

/**
 * CSS class name for HasAccess components in chips to ensure consistent sizing
 */
export const CHIP_ICON_CLASS = 'chip-icon-sized'

/**
 * Shared styling for chips in the SynapseSearchResultsCard
 * Used by both EntityType chip and HasAccess chip for consistent appearance
 */
export const searchResultsCardChipStyles: SxProps<Theme> = {
  backgroundColor: '#DAE9E7',
  fontSize: '15px',
  textTransform: 'capitalize',
  padding: '12px',
  marginRight: '8px',
  '.MuiChip-label': {
    pl: '5px',
    pr: 0,
  },
}
