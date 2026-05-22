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

  // If enabled, show the SynapseChat dialog in portals
  PORTAL_CHAT = 'PORTAL_CHAT',

  // If enabled, opening Curator for a CurationTask uses or creates a GridSession linked to the task,
  // with authorizationMode SOURCE_BENEFACTOR.
  CURATOR_LINK_TASK_TO_GRID_SESSION = 'CURATOR_LINK_TASK_TO_GRID_SESSION',

  // If enabled, show the new version of the ADKP homepage
  ADKP_HOMEPAGE_V2 = 'ADKP_HOMEPAGE_V2',
}
