import React, { CSSProperties } from 'react'
import {
  FileHandleAssociateType,
  FileHandleAssociation,
} from '@sage-bionetworks/synapse-types'
import { useGetStablePresignedUrl } from '../synapse-queries'
import { Fade } from '@mui/material'
import { useFadeTransition } from 'src/utils/hooks/useFadeTransition'

export type ImageFromSynapseTableProps = {
  tableId: string
  fileHandleId: string | null
  alt?: string
  style?: CSSProperties
  fadeInTimeoutMs?: number
}

const ImageFromSynapseTable: React.FC<ImageFromSynapseTableProps> = (
  props: ImageFromSynapseTableProps,
) => {
  const { tableId, fileHandleId, alt, style, fadeInTimeoutMs = 0 } = props
  const { delayedState: fileHandleIdInState, visible } = useFadeTransition({
    state: fileHandleId,
    fadeInTimeoutMs,
  })
  const fha: FileHandleAssociation = {
    associateObjectId: tableId,
    associateObjectType: FileHandleAssociateType.TableEntity,
    fileHandleId: (fileHandleIdInState as string) ?? '',
  }
  const stablePresignedUrl = useGetStablePresignedUrl(fha, false, {
    enabled: !!fileHandleIdInState,
  })

  const dataUrl = stablePresignedUrl?.dataUrl
  const error = stablePresignedUrl?.queryResult?.error

  if (error || !dataUrl) {
    return <></>
  }
  return (
    <Fade in={visible} timeout={fadeInTimeoutMs}>
      <img
        style={style}
        alt={alt ? `${alt}` : 'Image from table'}
        src={dataUrl}
      />
    </Fade>
  )
}

export default ImageFromSynapseTable
