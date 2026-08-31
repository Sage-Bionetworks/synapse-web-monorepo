/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_PORTAL_NAME: string
  readonly VITE_PORTAL_DESCRIPTION: string
  readonly VITE_PORTAL_KEY: string
  readonly VITE_ARIDHIA_GATEWAY_URL: string
  readonly VITE_ARIDHIA_SUBJECT_TOKEN_ISSUER: string
  readonly VITE_ARIDHIA_FAIR_PORTAL_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Import MUI type augmentations from 'synapse-react-client' so we can use custom property values defined for our MUI theme
import 'synapse-react-client/ThemeTypes'

import 'synapse-react-client/types/tanstack-table-augmentation'
