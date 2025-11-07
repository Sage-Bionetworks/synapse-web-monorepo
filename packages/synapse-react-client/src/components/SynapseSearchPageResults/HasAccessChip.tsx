import { useHasAccess } from '../HasAccess/HasAccessV2'
import { Chip } from '@mui/material'
import { searchResultsCardChipStyles } from '../SynapseSearchPageResults/chipStyles'

export interface HasAccessChipProps {
  entityId: string
  size?: 'normal' | 'small'
}

export function HasAccessChip({ entityId }: HasAccessChipProps) {
  const { accessText, icon } = useHasAccess(entityId)

  return (
    <>
      <Chip
        label={accessText}
        icon={icon}
        sx={{ ...searchResultsCardChipStyles }}
      />
    </>
  )
}

export default HasAccessChip
