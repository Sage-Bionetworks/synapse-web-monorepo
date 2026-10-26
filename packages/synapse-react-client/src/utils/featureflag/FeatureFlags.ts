import { startCase } from 'lodash-es'

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

  // If enabled, ACT members see the Form Templates tab in the reviewer (ACT) dashboard, and can create and edit
  // Access Requirements that collect a schema-driven form
  ACT_DASHBOARD_FORM_TEMPLATES = 'ACT_DASHBOARD_FORM_TEMPLATES',

  // If enabled, SWC shows options to insert experimental widgets in the wiki editor
  ADD_WIKI_WIDGETS = 'ADD_WIKI_WIDGETS',

  // If enabled, SWC shows a visibility chip (e.g. public/private) on the project title bar
  PROJECT_VISIBILITY_CHIP = 'PROJECT_VISIBILITY_CHIP',

  // If enabled, SWC shows the query builder control on table and view pages
  QUERY_BUILDER_CONTROL = 'QUERY_BUILDER_CONTROL',

  // Reserved for unit tests. Not configured in Stack Builder; do not use in production code.
  TEST_ONLY = 'TEST_ONLY',
}

export type ExperimentalFeatureScope = 'SYNAPSE' | 'PORTALS' | 'ACCOUNTS'

type FeatureFlagConfig = {
  /** Apps whose experimental features menu may list this flag */
  scopes: ExperimentalFeatureScope[]
  /** Overrides the name derived from the feature flag key */
  displayName?: string
  /** Whether this feature is only available to ACT members */
  actMembersOnly?: boolean
}

export const FEATURE_FLAG_CONFIG: Record<FeatureFlagEnum, FeatureFlagConfig> = {
  [FeatureFlagEnum.PORTAL_SEARCH_HEADER]: { scopes: [] },
  [FeatureFlagEnum.HOMEPAGE_CHATBOT]: { scopes: [] },
  [FeatureFlagEnum.WEBHOOKS_UI]: { scopes: [] },
  [FeatureFlagEnum.CRISP_CHAT]: { scopes: [] },
  [FeatureFlagEnum.PORTAL_CHAT]: { scopes: [] },
  [FeatureFlagEnum.CURIE_CHAT_WIDGET]: { scopes: [] },
  [FeatureFlagEnum.CURATION_TASK_PAGE_SHOW_NEW_TASK_BUTTON]: {
    scopes: ['SYNAPSE'],
    displayName: 'New Tasks Button',
  },
  [FeatureFlagEnum.ELITE_PORTAL_MODELS]: { scopes: [] },
  [FeatureFlagEnum.AMPALS_RDCA_DAP_FORM_ENABLED]: { scopes: [] },
  [FeatureFlagEnum.ACT_DASHBOARD_FORM_TEMPLATES]: {
    scopes: ['SYNAPSE'],
    displayName: 'ACT Dashboard Form Templates',
    actMembersOnly: true,
  },
  [FeatureFlagEnum.ADD_WIKI_WIDGETS]: { scopes: ['SYNAPSE'] },
  [FeatureFlagEnum.PROJECT_VISIBILITY_CHIP]: { scopes: ['SYNAPSE'] },
  [FeatureFlagEnum.QUERY_BUILDER_CONTROL]: { scopes: ['SYNAPSE'] },
  [FeatureFlagEnum.TEST_ONLY]: { scopes: [] },
}

export function getFeatureFlagDisplayName(flag: FeatureFlagEnum): string {
  return FEATURE_FLAG_CONFIG[flag]?.displayName ?? startCase(flag.toLowerCase())
}
