import React from 'react'
import { SynapseQueries } from 'synapse-react-client'
import {
  FileHandleAssociateType,
  FileHandleAssociation,
} from '@sage-bionetworks/synapse-types'
import Skeleton from '@mui/material/Skeleton'

export type SourceAppImageProps = {
  fileHandleId: string | null
  friendlyName?: string
}

// Refactored into it's own class, thinking that using a prefetch resource would improve loading performance of the images, but it does not.
const SourceAppImage: React.FC<SourceAppImageProps> = (
  props: SourceAppImageProps,
) => {
  const { fileHandleId, friendlyName } = props
  const fha: FileHandleAssociation = {
    associateObjectId: 'syn45291362',
    associateObjectType: FileHandleAssociateType.TableEntity,
    fileHandleId: fileHandleId ?? '',
  }
  const stablePresignedUrl = SynapseQueries.useGetStablePresignedUrl(
    fha,
    true,
    {
      enabled: !!fileHandleId,
    },
  )

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
