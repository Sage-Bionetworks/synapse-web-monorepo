import { Reference, EntityRef } from '@sage-bionetworks/synapse-types'

export function datasetItemToReference(datasetItem: EntityRef): Reference {
  return {
    targetId: datasetItem.entityId,
    targetVersionNumber: datasetItem.versionNumber,
  }
}
