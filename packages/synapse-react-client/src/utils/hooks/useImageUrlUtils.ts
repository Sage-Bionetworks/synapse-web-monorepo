import { useGetStablePresignedUrl } from '@/synapse-queries'
import {
  FileHandleAssociateType,
  FileHandleAssociation,
} from '@sage-bionetworks/synapse-types'

export const useImageUrl = (fileId: string, entityId: string) => {
  const fha: FileHandleAssociation = {
    associateObjectId: entityId,
    associateObjectType: FileHandleAssociateType.TableEntity,
    fileHandleId: fileId || '',
  }
  const stablePresignedUrl = useGetStablePresignedUrl(fha, false, {
    enabled: !!fileId,
  })
  const dataUrl = stablePresignedUrl?.dataUrl

  return dataUrl
}
