import { useHasAccess } from '../HasAccess/useHasAccess'
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
    accessRequirementDialog,
    setDisplayAccessRequirement,
  } = useHasAccess(entityId)

  return (
    <>
      <Chip
        label={accessText}
        icon={icon}
        sx={{ ...searchResultsCardChipStyles }}
        onClick={() => setDisplayAccessRequirement(true)}
      />
      {accessRequirementDialog}
    </>
  )
}

export default HasAccessChip
