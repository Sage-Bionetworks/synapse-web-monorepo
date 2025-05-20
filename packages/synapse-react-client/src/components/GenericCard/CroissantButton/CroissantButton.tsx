import GenericCardActionButton from '@/components/GenericCard/GenericCardActionButton'
import ConditionalWrapper from '@/components/utils/ConditionalWrapper'
import { useGetCroissantUrl } from '@/synapse-queries/croissant/useGetCroissantUrl'
import Skeleton from '@mui/material/Skeleton'

type CroissantButtonProps = {
  /** The synID of the dataset */
  datasetId: number
  /** The version number of the dataset */
  datasetVersionNumber: number
}

/**
 * Given a Synapse ID and version number of a dataset, this component will render a button that links to the Croissant
 * metadata for that dataset.
 */
function CroissantButton(props: CroissantButtonProps) {
  const { datasetId, datasetVersionNumber } = props

  const { data: croissantUrl, isLoading } = useGetCroissantUrl(
    datasetId,
    datasetVersionNumber,
  )

  if (!croissantUrl && !isLoading) {
    return null
  }

  return (
    <ConditionalWrapper
      condition={isLoading}
      wrapper={Skeleton}
      wrapperProps={{ role: 'progressbar' }}
    >
      <GenericCardActionButton
        href={croissantUrl || '#'}
        target={'_blank'}
        variant="outlined"
        startIcon={'\uD83E\uDD50'} // Croissant emoji
      >
        Croissant
      </GenericCardActionButton>
    </ConditionalWrapper>
  )
}

export default CroissantButton
