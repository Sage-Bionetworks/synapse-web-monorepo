import React, { CSSProperties, useEffect, useState } from 'react'
import {
  FileHandleAssociateType,
  FileHandleAssociation,
} from '@sage-bionetworks/synapse-types'
import { useGetStablePresignedUrl } from '../synapse-queries'
import { Fade } from '@mui/material'

export type ImageFromSynapseTableProps = {
  tableId: string
  fileHandleId: string | null
  friendlyName?: string
  style?: CSSProperties
  fadeInTimeoutMs?: number
}

const ImageFromSynapseTable: React.FC<ImageFromSynapseTableProps> = (
  props: ImageFromSynapseTableProps,
) => {
  const {
    tableId,
    fileHandleId,
    friendlyName,
    style,
    fadeInTimeoutMs = 0,
  } = props
  const [visible, setVisible] = useState(true)
  const [fileHandleIdInState, setFileHandleIdInState] = useState(fileHandleId)
  useEffect(() => {
    // Trigger fade out
    setVisible(false)

    // Wait for the fade out duration and then change content and fade in
    const timeoutId = setTimeout(() => {
      setFileHandleIdInState(fileHandleId)
      setVisible(true)
    }, fadeInTimeoutMs)

    // Cleanup timeout if the component unmounts or if fileHandleId changes again before timeout
    return () => clearTimeout(timeoutId)
  }, [fileHandleId])

  const fha: FileHandleAssociation = {
    associateObjectId: tableId,
    associateObjectType: FileHandleAssociateType.TableEntity,
    fileHandleId: fileHandleIdInState ?? '',
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
        alt={friendlyName ? `${friendlyName}` : 'Image from table'}
        src={dataUrl}
      />
    </Fade>
  )
}

export default ImageFromSynapseTable
