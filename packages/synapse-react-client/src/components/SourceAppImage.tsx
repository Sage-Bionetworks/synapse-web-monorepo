import { useGetStablePresignedUrl } from '@/synapse-queries'
import Skeleton from '@mui/material/Skeleton'
import {
  FileHandleAssociateType,
  FileHandleAssociation,
} from '@sage-bionetworks/synapse-types'

export type SourceAppImageProps = {
  sourceAppConfigTableID: string
  fileHandleId: string | null
  friendlyName?: string
}

// Refactored into it's own class, thinking that using a prefetch resource would improve loading performance of the images, but it does not.
function SourceAppImage(props: SourceAppImageProps) {
  const { sourceAppConfigTableID, fileHandleId, friendlyName } = props
  const fha: FileHandleAssociation = {
    associateObjectId: sourceAppConfigTableID,
    associateObjectType: FileHandleAssociateType.TableEntity,
    fileHandleId: fileHandleId ?? '',
  }
  const stablePresignedUrl = useGetStablePresignedUrl(fha, true, {
    enabled: !!fileHandleId,
  })

  const dataUrl = stablePresignedUrl?.dataUrl
  const error = stablePresignedUrl?.queryResult?.error

  if (error) {
    return <></>
  }
  const icon = dataUrl ? (
    <img
      className="SourceAppImage"
      alt={friendlyName ? `${friendlyName} logo` : 'Application logo'}
      src={dataUrl}
    />
  ) : (
    <Skeleton variant="rectangular" width={250} height={65} />
  )

  return icon
}

export default SourceAppImage
