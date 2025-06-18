import { useGetEntity } from '@/synapse-queries'
import { isFileEntity } from '@/utils/types/IsType'
import Skeleton from '@mui/material/Skeleton'
import { FileHandleAssociateType } from '@sage-bionetworks/synapse-types'
import DirectDownload, { DirectFileDownloadProps } from './DirectDownload'

export type FileEntityDirectDownloadProps = Omit<
  DirectFileDownloadProps,
  'associatedObjectId' | 'associatedObjectType' | 'fileHandleId'
> & {
  entityId: string
  entityVersionNumber?: string | number
}

export default function FileEntityDirectDownload(
  props: FileEntityDirectDownloadProps,
) {
  const { entityId, entityVersionNumber } = props

  const { data: entity, isLoading } = useGetEntity(
    entityId,
    entityVersionNumber,
  )

  if (isLoading) {
    return <Skeleton />
  }

  if (!entity || (entity && !isFileEntity(entity))) {
    return <></>
  }

  return (
    <DirectDownload
      fileHandleId={entity?.dataFileHandleId}
      associatedObjectId={entityId}
      associatedObjectType={FileHandleAssociateType.FileEntity}
      {...props}
    />
  )
}
