import { Chip } from '@mui/material'
import { DATASET_HOSTING_CONFIG, DatasetHostingType } from './DatasetHosting'

export type DatasetHostingAdornmentProps = {
  hostingType: DatasetHostingType
  /** Use the header variant (outlined + white) for dark header backgrounds. */
  isHeader?: boolean
}

/**
 * Small scannable chip that summarizes where a dataset's files live
 * (e.g. "Synapse Hosted", "Externally Hosted"). Rendered next to the dataset
 * type on cards and detail-page headers, complementing the hosting-aware action
 * button, which is a CTA rather than a scan target.
 */
export function DatasetHostingAdornment(props: DatasetHostingAdornmentProps) {
  const { hostingType, isHeader = false } = props
  const label = DATASET_HOSTING_CONFIG[hostingType].chipLabel
  if (isHeader) {
    return (
      <Chip
        label={label}
        size="small"
        variant="outlined"
        sx={{ color: 'white', borderColor: 'white' }}
      />
    )
  }
  return <Chip label={label} size="small" />
}

export default DatasetHostingAdornment
