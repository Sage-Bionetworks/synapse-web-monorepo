export type FeatureFlags = Record<FeatureFlagEnum, boolean>

export enum FeatureFlagEnum {
  // If enabled, show the new header component that uses the HeaderSearchBox component
  PORTAL_SEARCH_HEADER = 'PORTAL_SEARCH_HEADER',

  // If enabled, allow viewing & editing the 'description' string field on entities
  DESCRIPTION_FIELD = 'DESCRIPTION_FIELD',

  // If enabled, use the re-implemented ACL Editor for entities
  REACT_ENTITY_ACL_EDITOR = 'REACT_ENTITY_ACL_EDITOR',

  // If enabled, show the chatbot entrypoint from the new Synapse Homepage
  HOMEPAGE_CHATBOT = 'HOMEPAGE_CHATBOT',

  // If enabled, account settings will link to a page to manage webhooks
  WEBHOOKS_UI = 'WEBHOOKS_UI',

  // If enabled, load the Crisp chat widget
  CRISP_CHAT = 'CRISP_CHAT',

  // If enabled, show the Download Ineligible for Packaging Files button on the download cart page
  DOWNLOAD_CART_INELIGIBLE_FILE_DOWNLOADS = 'DOWNLOAD_CART_INELIGIBLE_FILE_DOWNLOADS',

  // If enabled, show the SynapseChat dialog in portals
  PORTAL_CHAT = 'PORTAL_CHAT',

  // If enabled, prevent users from opening Curator for a CurationTask which is unassigned
  CURATOR_DISABLE_OPEN_FOR_UNASSIGNED_TASKS = 'CURATOR_DISABLE_OPEN_FOR_UNASSIGNED_TASKS',

  // If enabled, show the new version of the ADKP homepage
  ADKP_HOMEPAGE_V2 = 'ADKP_HOMEPAGE_V2',
}
