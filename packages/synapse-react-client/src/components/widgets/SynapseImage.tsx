import { ImageFileHandle } from '@/components/widgets/ImageFileHandle'
import { useGetEntity } from '@/synapse-queries/index'
import {
  FileEntity,
  FileHandle,
  FileHandleAssociateType,
  FileHandleAssociation,
} from '@sage-bionetworks/synapse-types'
import classNames from 'classnames'
import { CSSProperties, useMemo } from 'react'

export type SynapseImageProps = {
  wikiId?: string
  synapseId?: string
  version?: number
  fileName?: string
  fileResults?: FileHandle[]
  params: {
    align: string
    scale: string
    // this should be treated as a boolean, but the actual type that will come through
    // is a string which I don't want to mis-represent
    responsive: string
    altText: string
  }
}

function SynapseImage(props: SynapseImageProps) {
  const { synapseId, version, wikiId, fileResults, fileName, params } = props

  const { data: fileEntity } = useGetEntity<FileEntity>(
    synapseId || '',
    version,
    {
      enabled: Boolean(synapseId),
    },
  )

  const fileHandleAssociation: FileHandleAssociation | undefined =
    useMemo(() => {
      if (synapseId && fileEntity) {
        return {
          associateObjectId: synapseId,
          associateObjectType: FileHandleAssociateType.FileEntity,
          fileHandleId: fileEntity.dataFileHandleId,
        }
      } else if (wikiId && fileName && fileResults) {
        const { id } = fileResults.filter(el => el.fileName === fileName)[0]
        return {
          associateObjectId: wikiId,
          associateObjectType: FileHandleAssociateType.WikiAttachment,
          fileHandleId: id,
        }
      }
      return undefined
    }, [fileEntity, fileName, fileResults, synapseId, wikiId])

  const { align = '', altText = 'synapse image' } = params

  let scale = 'auto'
  if (params.scale && params.scale !== '100') {
    scale = `${Number(params.scale)}%`
  }

  const alignLowerCase = align.toLowerCase()
  let className = ''
  if (alignLowerCase === 'left') {
    className = 'floatLeft'
  }
  if (alignLowerCase === 'right') {
    className = 'floatright'
  }
  if (alignLowerCase === 'center') {
    className = 'align-center'
  }
  const style: CSSProperties = {
    maxWidth: scale,
    height: 'auto',
  }

  if (!fileHandleAssociation) {
    return <></>
  }

  return (
    <ImageFileHandle
      fileHandleAssociation={fileHandleAssociation}
      imgProps={{
        alt: altText,
        className: classNames('img-fluid', className),
        style,
      }}
    />
  )
}
export default SynapseImage
