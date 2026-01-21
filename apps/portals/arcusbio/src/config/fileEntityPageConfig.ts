import { FileEntityPageConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'

const fileEntityPageConfig: FileEntityPageConfig = {
  showWiki: true,
  showProvenance: true,
  showContentSize: true,
  showContentMd5: true,
  showStorageLocation: false,
  showModifiedOn: true,
  showAnnotations: true,
  restrictSynapseLinkCardToEditableEntity: true,
}

export default fileEntityPageConfig
