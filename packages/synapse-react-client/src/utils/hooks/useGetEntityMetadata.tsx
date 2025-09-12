import {
  useGetDefaultUploadDestination,
  useGetEntity,
  useGetEntityBundle,
  useGetUploadDestinationForStorageLocation,
} from '@/synapse-queries'
import { isContainerType } from '../functions/EntityTypeUtils'
import {
  getDataFileHandle,
  getFileHandleStorageInfo,
  getUploadDestinationString,
} from '../functions/FileHandleUtils'

const useGetEntityMetadata = (entityId: string, versionNumber?: number) => {
  const { data: entityBundle, isLoading: isEntityBundleLoading } =
    useGetEntityBundle(entityId, versionNumber)

  const isContainer = !!(
    entityBundle?.entityType && isContainerType(entityBundle.entityType)
  )
  const fileHandle = entityBundle && getDataFileHandle(entityBundle)
  const parentId = entityBundle?.entity?.parentId
  const storageLocationId = fileHandle?.storageLocationId
  const { data: projectEntity, isLoading: isLoadingProjectEntity } =
    useGetEntity(entityBundle?.path.path[1].id ?? '', undefined, {
      enabled: !!entityBundle,
    })

  // Note: defaultUploadDestination can't be used for non-container entities
  // since the service checks that any entity in the path to the root has some
  // project setting with a storage location, but does not look at the file entity's
  // storage location id. Since a user can upload a file in any storage location
  // and put it anywhere in the hierarchy, the file entity storage location id
  // is where the file handle was actually uploaded. We must use a service that
  // takes the storage location id in the input to get the storage location for a
  // file entity.
  const {
    data: storageLocationUploadDestination,
    isLoading: isStorageLocationUploadDestinationLoading,
  } = useGetUploadDestinationForStorageLocation(parentId!, storageLocationId!, {
    enabled:
      !isContainer && parentId !== undefined && storageLocationId != null,
  })

  const {
    data: defaultUploadDestination,
    isLoading: isDefaultUploadDestinationLoading,
  } = useGetDefaultUploadDestination(entityId, { enabled: isContainer })

  const isLoading =
    isEntityBundleLoading ||
    isStorageLocationUploadDestinationLoading ||
    isDefaultUploadDestinationLoading ||
    isLoadingProjectEntity

  const uploadDestinationString =
    defaultUploadDestination &&
    getUploadDestinationString(defaultUploadDestination)

  const fileHandleStorageInfo =
    fileHandle &&
    getFileHandleStorageInfo(fileHandle, storageLocationUploadDestination)

  const downloadAlias =
    entityBundle?.entity.name !== entityBundle?.fileName
      ? entityBundle?.fileName
      : undefined

  return {
    entityBundle,
    fileHandle,
    isContainer,
    downloadAlias,
    fileHandleStorageInfo,
    storageLocationUploadDestination,
    uploadDestinationString,
    projectEntity,
    isLoading,
  }
}

export default useGetEntityMetadata
