import { useMutation } from '@tanstack/react-query'
import { useCreateFolderPath } from './useCreateFolderPath'

/**
 * Given a File to upload as a FileEntity, create a matching directory structure (as necessary)
 * and return the ID of the folder in which the file should be uploaded.
 */
export function useCreatePathsAndGetParentId() {
  const { mutateAsync: createFolderPath } = useCreateFolderPath()

  return useMutation({
    mutationFn: (args: { file: File; rootContainerId: string }) => {
      const { file, rootContainerId } = args
      const relativePath = file.webkitRelativePath
      // Create folders as necessary based on the path
      if (relativePath) {
        const path = relativePath
          .split('/')
          // remove the file name
          .slice(0, -1)
        return createFolderPath({ rootContainerId, path }).then(parentId => ({
          file,
          parentId,
        }))
      } else {
        // There is no relative path, so just use the passed rootContainerId
        return Promise.resolve({
          file,
          parentId: rootContainerId,
        })
      }
    },
  })
}
