import { ORIENTATION_BANNER_KEYS } from '@/components/OrientationBanner'

/** Bootstrapped principals */
/** The group representing all users logged-in to Synapse */
export const AUTHENTICATED_PRINCIPAL_ID = 273948
/** The group representing all logged-in Synapse users AND anonymous */
export const PUBLIC_PRINCIPAL_ID = 273949
/** The single user representing all unauthenticated users */
export const ANONYMOUS_PRINCIPAL_ID = 273950

export const PUBLIC_PRINCIPAL_IDS = [
  AUTHENTICATED_PRINCIPAL_ID,
  PUBLIC_PRINCIPAL_ID,
  ANONYMOUS_PRINCIPAL_ID,
]

/** The Synapse Access and Compliance team */
export const ACT_TEAM_ID = 464532
/** The team containing Synapse users whose HTML files may be rendered without sanitization */
export const TRUSTED_HTML_USERS_TEAM_ID = '3351236'

/** QueryBundleRequest constants */
export const BUNDLE_MASK_QUERY_RESULTS: number = 1
export const BUNDLE_MASK_QUERY_COUNT: number = 2
export const BUNDLE_MASK_QUERY_SELECT_COLUMNS: number = 4
export const BUNDLE_MASK_QUERY_MAX_ROWS_PER_PAGE: number = 8
export const BUNDLE_MASK_QUERY_COLUMN_MODELS: number = 16
export const BUNDLE_MASK_QUERY_FACETS: number = 32
export const BUNDLE_MASK_SUM_FILES_SIZE_BYTES: number = 64
export const BUNDLE_MASK_LAST_UPDATED_ON = 0x80
export const BUNDLE_MASK_COMBINED_SQL = 0x100
export const BUNDLE_MASK_ACTIONS_REQUIRED = 0x200

export const ALL_QUERY_BUNDLE_PARTS =
  BUNDLE_MASK_QUERY_RESULTS |
  BUNDLE_MASK_QUERY_COUNT |
  BUNDLE_MASK_QUERY_SELECT_COLUMNS |
  BUNDLE_MASK_QUERY_MAX_ROWS_PER_PAGE |
  BUNDLE_MASK_QUERY_COLUMN_MODELS |
  BUNDLE_MASK_QUERY_FACETS |
  BUNDLE_MASK_SUM_FILES_SIZE_BYTES |
  BUNDLE_MASK_LAST_UPDATED_ON |
  BUNDLE_MASK_COMBINED_SQL |
  BUNDLE_MASK_ACTIONS_REQUIRED

/** Row Types  */
export const STUDY: string = 'study'
/** Unannotated value for query */
export const VALUE_NOT_SET = 'org.sagebionetworks.UNDEFINED_NULL_NOTSET'
export const FRIENDLY_VALUE_NOT_SET = 'Not Assigned'
// for study icons
export const STUDY_ACTIVE: string = 'study active'
export const STUDY_COMPLETE: string = 'study complete'
export const DATABASE: string = 'database'
export const PROGRAM: string = 'program'
export const DATASET = 'dataset'
export const AMP_CONSORTIUM: string = 'AMP_Consortium'
export const FUNDER = 'funder'
export const PUBLICATION: string = 'publication'
export const STANDARD_DATA_MODEL: string = 'standard'
export const TOOL: string = 'tool'
export const EXTERNAL_RESOURCE: string = 'external resource'
export const GENERIC_CARD = 'GENERIC_CARD'
export const OBSERVATION_CARD = 'observation_card'
export const RELEASE_CARD = 'release_card'
export const COMPUTATIONAL: string = 'computational'
export const COMPUTATIONAL_TOOL: string = 'computational tool'
export const EXPERIMENTAL: string = 'experimental'
export const EXPERIMENTAL_TOOL: string = 'experimental tool'
export const CLINICAL: string = 'clinical'
export const PROJECT: string = 'Project'
export const GRANT: string = 'Grant'
export const ORGANIZATION: string = 'ORGANIZATION'
export const CONTRIBUTOR: string = 'contributor'
export const PERSON: string = 'PERSON'
export const TREE_HORIZONTAL: string = 'tree_horizontal'
export const MOUSE: string = 'MOUSE'
export const TRANSLATIONAL: string = 'TRANSLATIONAL'
export const EXPLORE: string = 'explore'
export const SEARCH: string = 'search'
export const CHART: string = 'chart'
export const FILTER: string = 'filter'
export const SQL_EDITOR: string = 'sqleditor'
export const DOWNLOAD: string = 'download'
export const EXPAND: string = 'expand'
export const COLLAPSE: string = 'collapse'
export const CLOSE: string = 'close'
export const SORTUP: string = 'sortup'
export const SORTDOWN: string = 'sortdown'
export const SETTINGS: string = 'settings'
export const COLUMNS: string = 'columns'
export const COLUMNSDARK: string = 'columnsdark'
export const VERTICAL_DOTS: string = 'verticaldots'
export const CHALLENGE: string = 'challenge'
export const FILE: string = 'file'
export const CHART2: string = 'chart2'
export const EXTERNALLINK: string = 'externallink'
export const EASY_DIFFICULTY: string = 'easy-difficulty'
export const MEDIUM_DIFFICULTY: string = 'medium-difficulty'
export const VARIABLE_DIFFICULTY: string = 'variable-difficulty'
export const DOWNLOAD_PERMISSION_REQUIRED: string =
  'download-permission-required'

export const DEFAULT_PAGE_SIZE: number = 25
// For User Profile Cards
export const AVATAR = 'AVATAR'

/** @deprecated use the UserBadge component */
export const SMALL_USER_CARD = 'SMALL USER CARD'
export const MEDIUM_USER_CARD = 'MEDIUM USER CARD'
export const LARGE_USER_CARD = 'LARGE USER CARD'

export type UserCardSize =
  | typeof AVATAR
  | typeof SMALL_USER_CARD
  | typeof MEDIUM_USER_CARD
  | typeof LARGE_USER_CARD

export const SEPERATOR = 'SEPERATOR'

// For internal testing only
export const _TIME_DELAY = 75
export const SRC_SIGN_IN_CLASS = 'SRC-SIGN-IN-CLASS'
export const EXPERIMENTAL_MODE_COOKIE = 'SynapseTestWebsite'

// UserBundle constants
export const USER_BUNDLE_MASK_USER_PROFILE = 0x1
export const USER_BUNDLE_MASK_ORCID = 0x2
export const USER_BUNDLE_MASK_VERIFICATION_SUBMISSION = 0x4
export const USER_BUNDLE_MASK_IS_CERTIFIED = 0x8
export const USER_BUNDLE_MASK_IS_VERIFIED = 0x10
export const USER_BUNDLE_MASK_IS_ACT_MEMBER = 0x20
export const USER_BUNDLE_MASK_IS_AR_REVIEWER = 0x40
// SessionStorage keys for info from ids
export const USER_PROFILE_STORAGE_KEY = 'INFO_FROM_IDS_USER_PROFILE'
export const ENTITY_HEADER_STORAGE_KEY = 'INFO_FROM_IDS_ENTITY_HEADER'
export const EVALUATIONS_STORAGE_KEY = 'INFO_FROM_IDS_EVALUATION_QUEUE'

export const DATETIME_UTC_COOKIE_KEY =
  'org.sagebionetworks.synapse.datetime.utc'

export const BASE = 1024,
  KB = BASE,
  MB = KB * BASE,
  GB = MB * BASE,
  TB = GB * BASE

export const DAY_IN_MS = 1000 * 60 * 60 * 24

/* The ID of the table in production that contains the canned responses for the data access submission rejection form. */
export const REJECT_SUBMISSION_CANNED_RESPONSES_TABLE = 'syn50683097'
/* The ID of the table in production that contains the canned responses for the profile validation rejection form. */
export const REJECT_VALIDATION_CANNED_RESPONSES_TABLE = 'syn63119445'
export const AUTHENTICATION_RECEIPT_LOCALSTORAGE_KEY =
  'last_user_authentication_receipt'

/** URL constants */
export const URL_TERMS_CONDITIONS_AGREEMENT =
  'https://www.synapse.org/TrustCenter:TermsOfService'

/** Class names */
export const LOGIN_BACK_BUTTON_CLASS_NAME = 'login-flow-back-button'

/* Login methods */
export const LOGIN_METHOD_EMAIL = 'EMAIL'
export const LOGIN_METHOD_OAUTH2_GOOGLE = 'GOOGLE'
export const LOGIN_METHOD_OAUTH2_ARCUS = 'ARCUS'
export const LOGIN_METHOD_OAUTH2_ORCID = 'ORCID'
export const LOGIN_METHOD_OAUTH2_SAGE_BIONETWORKS = 'SAGE_BIONETWORKS'

export const ARCUS_SOURCE_APP_ID = 'arcusbio'

export const OAUTH2_PROVIDERS = {
  [LOGIN_METHOD_OAUTH2_ARCUS]: 'ARCUS_BIOSCIENCES',
  [LOGIN_METHOD_OAUTH2_GOOGLE]: 'GOOGLE_OAUTH_2_0',
  [LOGIN_METHOD_OAUTH2_ORCID]: 'ORCID',
  [LOGIN_METHOD_OAUTH2_SAGE_BIONETWORKS]: 'SAGE_BIONETWORKS',
}

export const EXTERNAL_COMPUTE_ENV_DISCLAIMER =
  'external_compute_env_disclaimer_acknowledged'

/* Last login information */
export const CURRENT_SOURCEAPP_NAME_LOCALSTORAGE_KEY =
  'current_sourceapp_friendly_name'
export const LAST_LOGIN_METHOD_LOCALSTORAGE_KEY = 'last_login_method'
export const LAST_LOGIN_SOURCEAPP_NAME_LOCALSTORAGE_KEY =
  'last_login_sourceapp_friendly_name'
export const LAST_LOGIN_SOURCEAPP_URL_LOCALSTORAGE_KEY =
  'last_login_sourceapp_url'
export const LAST_LOGIN_DATE_LOCALSTORAGE_KEY = 'last_login_date'

export const ACCESS_TOKEN_COOKIE_KEY =
  'org.sagebionetworks.security.user.login.token'
export const LAST_PLACE_LOCALSTORAGE_KEY = 'last_place_url'

export const ACCOUNT_SITE_PROMPTED_FOR_LOGIN_COOKIE_KEY =
  'org.sagebionetworks.account.promptedforlogin'

/* Persistent localStorage keys on SWC logout */
export const PERSISTENT_LOCAL_STORAGE_KEYS = [
  ...ORIENTATION_BANNER_KEYS,
  EXTERNAL_COMPUTE_ENV_DISCLAIMER,
]

export const PRIVACY_POLICY_LINK =
  'https://www.synapse.org/TrustCenter:PrivacyPolicy'
export const CHILD_MINOR_ADDENDUM_LINK =
  'https://www.synapse.org/TrustCenter:ChildMinorAddendum'

export const SYNAPSE_BACKEND_PRODUCTION_URL =
  'https://repo-prod.prod.sagebase.org'
export const SYNAPSE_BACKEND_STAGING_URL =
  'https://repo-staging.prod.sagebase.org'
export const SYNAPSE_BACKEND_DEV_URL = 'https://repo-dev.dev.sagebase.org'

export const ONE_SAGE_PRODUCTION_URL = 'https://accounts.synapse.org'
export const ONE_SAGE_STAGING_URL = 'https://staging.accounts.synapse.org'
export const ONE_SAGE_DEV_URL = 'https://dev.accounts.synapse.org'
export const ONE_SAGE_APPID_QUERY_PARAM_KEY = 'appId'

export const SAGE_OFFERINGS_HELP_URL =
  'https://help.synapse.org/docs/Sage-Offerings.2965078125.html'

// Grid Page URL Query Parameters
export const GRID_PAGE_SESSION_ID_QUERY_PARAM = 'sessionId'
export const GRID_PAGE_AGENT_REGISTRATION_ID_QUERY_PARAM = 'agentRegistrationId'
export const GRID_PAGE_TASK_ID_QUERY_PARAM = 'taskId'

// Search Page URL Query Parameters
export const SEARCH_PAGE_QUERY_PARAM = 'query'
