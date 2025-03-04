/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SYNAPSE_REPO_ENDPOINT: string
  readonly VITE_SYNAPSE_PORTAL_ENDPOINT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
