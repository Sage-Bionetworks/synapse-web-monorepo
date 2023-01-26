import { SynapseClient } from '../../utils'
import { FileEntity } from '../../utils/synapseTypes'

//gets a file entity with content
export async function getFileEntityData(
  token: string,
  entityId: string,
  versionNumber?: string,
  onError?: (error: { message: string }) => void,
): Promise<{ version?: number; content: JSON }> {
  try {
    const entity: FileEntity = await SynapseClient.getEntity(
      token,
      entityId,
      versionNumber,
    )
    const fileHandleContent = await SynapseClient.getFileResult(
      entity,
      token,
      true,
      true,
    )
    const fileContent = await SynapseClient.getFileHandleContent(
      fileHandleContent.fileHandle!,
      fileHandleContent.preSignedURL!,
    )
    const content = JSON.parse(fileContent)
    return {
      version: entity.versionNumber,
      content: content,
    }
  } catch (error) {
    const newError = {
      message: `${error.message}:  configuration data for ${entityId} failed to load`,
    }
    if (onError) {
      onError(newError)
    }
    return Promise.reject(newError)
  }
}
