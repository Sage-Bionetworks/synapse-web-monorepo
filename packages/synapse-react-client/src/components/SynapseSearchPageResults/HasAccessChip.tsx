import { useHasAccess } from '../HasAccess/HasAccessV2'
import { Chip } from '@mui/material'
import { searchResultsCardChipStyles } from '../SynapseSearchPageResults/chipStyles'

export interface HasAccessChipProps {
  entityId: string
  size?: 'normal' | 'small'
}

export function HasAccessChip({ entityId }: HasAccessChipProps) {
  const {
    accessText,
    icon,
    handleGetAccess,
    isClickable,
    accessRequirementDialog,
  } = useHasAccess(entityId)

  return (
    <>
      <Chip
        label={accessText}
        icon={icon}
        onClick={isClickable ? handleGetAccess : undefined}
        sx={{
          ...searchResultsCardChipStyles,
          ...(isClickable && {
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'action.hover',
            },
          }),
        }}
      />
      {accessRequirementDialog}
    </>
  )
}

export default HasAccessChip
