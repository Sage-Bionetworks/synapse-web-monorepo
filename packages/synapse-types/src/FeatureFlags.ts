export type FeatureFlags = Record<FeatureFlagEnum, boolean>

export enum FeatureFlagEnum {
  // If enabled, show the new header component that uses the HeaderSearchBox component
  PORTAL_SEARCH_HEADER = 'PORTAL_SEARCH_HEADER',

  // If enabled, allow viewing & editing the 'description' string field on entities
  DESCRIPTION_FIELD = 'DESCRIPTION_FIELD',

  // Allow creation of VirtualTable entities
  VIRTUALTABLE_SUPPORT = 'VIRTUALTABLE_SUPPORT',

  // If enabled, use the re-implemented ACL Editor for entities
  REACT_ENTITY_ACL_EDITOR = 'REACT_ENTITY_ACL_EDITOR',

  // If enabled, show the chatbot entrypoint from the new Synapse Homepage
  HOMEPAGE_CHATBOT = 'HOMEPAGE_CHATBOT',

  // If enabled, account settings will link to a page to manage webhooks
  WEBHOOKS_UI = 'WEBHOOKS_UI',

  // If enabled, load the Crisp chat widget
  CRISP_CHAT = 'CRISP_CHAT',

  // If enabled, show the Download All Files button on the download cart page
  DOWNLOAD_CART_INDIVIDUAL_FILE_DOWNLOADS = 'DOWNLOAD_CART_INDIVIDUAL_FILE_DOWNLOADS',
}
