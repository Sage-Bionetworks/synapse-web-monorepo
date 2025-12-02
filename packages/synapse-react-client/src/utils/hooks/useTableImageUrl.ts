import { useGetStablePresignedUrl } from '@/synapse-queries'
import {
  FileHandleAssociation,
  FileHandleAssociateType,
} from '@sage-bionetworks/synapse-types'

const useTableImageUrl = (imageFileHandleId: string, entityId: string) => {
  const fha: FileHandleAssociation = {
    associateObjectId: entityId,
    associateObjectType: FileHandleAssociateType.TableEntity,
    fileHandleId: imageFileHandleId ?? '',
  }
  const stablePresignedUrl = useGetStablePresignedUrl(fha, false, {
    enabled: !!imageFileHandleId,
  })

  return stablePresignedUrl?.dataUrl
}

export default useTableImageUrl
