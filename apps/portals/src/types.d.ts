/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_PORTAL_NAME: string
  readonly VITE_PORTAL_DESCRIPTION: string
  readonly VITE_PORTAL_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// eslint-disable-next-line import/no-unresolved
import 'synapse-react-client/src/theme/ThemeTypes'
