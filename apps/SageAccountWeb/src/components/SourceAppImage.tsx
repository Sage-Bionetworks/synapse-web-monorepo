import React from 'react'
import { SynapseQueries } from 'synapse-react-client'
import {
  FileHandleAssociateType,
  FileHandleAssociation,
} from '@sage-bionetworks/synapse-types'
import Skeleton from '@mui/material/Skeleton'

export type SourceAppImageProps = {
  fileHandleId: string | null
}

// Refactored into it's own class, thinking that using a prefetch resource would improve loading performance of the images, but it does not.
const SourceAppImage: React.FC<SourceAppImageProps> = (
  props: SourceAppImageProps,
) => {
  const { fileHandleId } = props
  const fha: FileHandleAssociation = {
    associateObjectId: 'syn45291362',
    associateObjectType: FileHandleAssociateType.TableEntity,
    fileHandleId: fileHandleId ?? '',
  }
  const { data: svg } = SynapseQueries.useGetPresignedUrlContentFromFHA(
    fha,
    true,
    { enabled: !!fileHandleId },
  )

  const icon = svg ? (
    <div className="SourceAppImage" dangerouslySetInnerHTML={{ __html: svg }} />
  ) : (
    <Skeleton variant="rectangular" width={250} height={65} />
  )

  return icon
}

export default SourceAppImage
