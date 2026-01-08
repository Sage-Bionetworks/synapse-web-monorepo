/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_PORTAL_NAME: string
  readonly VITE_PORTAL_DESCRIPTION: string
  readonly VITE_PORTAL_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Import MUI type augmentations from 'react-ui' so we can use custom property values defined for our MUI theme
import 'synapse-react-client/react-ui/types/ThemeTypes'

import 'synapse-react-client/types/tanstack-table-augmentation'
