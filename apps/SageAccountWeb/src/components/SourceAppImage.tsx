import React, { useEffect, useState } from 'react'
import { SynapseClient } from 'synapse-react-client/dist/utils'
import { FileHandleAssociateType } from 'synapse-react-client/dist/utils/synapseTypes'
import Skeleton from '@mui/material/Skeleton'

export type SourceAppImageProps = {
  fileHandleId: string | null
}

// Refactored into it's own class, thinking that using a prefetch resource would improve loading performance of the images, but it does not.
const SourceAppImage: React.FC<SourceAppImageProps> = (
  props: SourceAppImageProps,
) => {
  const { fileHandleId } = props
  const [svg, setSvg] = useState<string>('')
  useEffect(() => {
    if (fileHandleId) {
      SynapseClient.getActualFileHandleByIdURL(
        fileHandleId,
        undefined,
        FileHandleAssociateType.TableEntity,
        'syn45291362',
        true,
      ).then(source => {
        setSvg(source)
      })
    }
  }, [fileHandleId])
  return svg ? (
    <div className="SourceAppImage" dangerouslySetInnerHTML={{ __html: svg }} />
  ) : (
    <Skeleton variant="rectangular" width={250} height={65} />
  )
}

export default SourceAppImage
