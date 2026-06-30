/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_PORTAL_NAME: string
  readonly VITE_PORTAL_DESCRIPTION: string
  readonly VITE_PORTAL_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Import MUI type augmentations from 'synapse-react-client' so we can use custom property values defined for our MUI theme
import 'synapse-react-client/ThemeTypes'
