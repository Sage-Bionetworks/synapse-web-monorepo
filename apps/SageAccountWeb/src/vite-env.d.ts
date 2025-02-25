/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SYNAPSE_REPO_ENDPOINT: string
  readonly VITE_SYNAPSE_PORTAL_ENDPOINT: string
  readonly VITE_TERMS_AND_CONDITIONS_TABLE_ID: string
  readonly VITE_TERMS_AND_CONDITIONS_TABLE_VERSION: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
