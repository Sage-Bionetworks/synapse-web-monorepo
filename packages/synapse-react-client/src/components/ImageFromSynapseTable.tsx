import { useGetStablePresignedUrl } from '@/synapse-queries'
import {
  FileHandleAssociateType,
  FileHandleAssociation,
} from '@sage-bionetworks/synapse-types'
import { CSSProperties } from 'react'

export type ImageFromSynapseTableProps = {
  tableId: string
  fileHandleId: string | null
  alt?: string
  style?: CSSProperties
}

function ImageFromSynapseTable(props: ImageFromSynapseTableProps) {
  const { tableId, fileHandleId, alt, style } = props
  const fha: FileHandleAssociation = {
    associateObjectId: tableId,
    associateObjectType: FileHandleAssociateType.TableEntity,
    fileHandleId: fileHandleId ?? '',
  }
  const stablePresignedUrl = useGetStablePresignedUrl(fha, false, {
    enabled: !!fileHandleId,
  })

  const dataUrl = stablePresignedUrl?.dataUrl
  const error = stablePresignedUrl?.queryResult?.error

  if (error || !dataUrl) {
    return <></>
  }
  return (
    <img
      style={style}
      alt={alt ? `${alt}` : 'Image from table'}
      src={dataUrl}
    />
  )
}

export default ImageFromSynapseTable
