export type FeatureFlags = Record<FeatureFlagEnum, boolean>

export enum FeatureFlagEnum {
  // If enabled, show the new header component that uses the HeaderSearchBox component
  PORTAL_SEARCH_HEADER = 'PORTAL_SEARCH_HEADER',

  // If enabled, show the chatbot entrypoint from the new Synapse Homepage
  HOMEPAGE_CHATBOT = 'HOMEPAGE_CHATBOT',

  // If enabled, account settings will link to a page to manage webhooks
  WEBHOOKS_UI = 'WEBHOOKS_UI',

  // If enabled, load the Crisp chat widget
  CRISP_CHAT = 'CRISP_CHAT',

  // If enabled, show the SynapseChat dialog in portals
  PORTAL_CHAT = 'PORTAL_CHAT',

  // If enabled, show the Curie launcher widget in portals
  CURIE_CHAT_WIDGET = 'CURIE_CHAT_WIDGET',

  // If enabled, shows a "New Task" button on the metadata tasks page
  CURATION_TASK_PAGE_SHOW_NEW_TASK_BUTTON = 'CURATION_TASK_PAGE_SHOW_NEW_TASK_BUTTON',

  // If enabled, show the Models section in the ELITE portal (nav item, Explore tab, and Search tab)
  ELITE_PORTAL_MODELS = 'ELITE_PORTAL_MODELS',

  // If enabled, opens the RDCA-DAP data access request form when requesting access to an Aridhia dataset
  AMPALS_RDCA_DAP_FORM_ENABLED = 'AMPALS_RDCA_DAP_FORM_ENABLED',

  // Reserved for unit tests. Not configured in Stack Builder; do not use in production code.
  TEST_ONLY = 'TEST_ONLY',
}
