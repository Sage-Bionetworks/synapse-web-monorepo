declare let pluralize: any

declare module 'plotly.js-basic-dist' {
  import PlotlyTyped from 'plotly.js'
  export default PlotlyTyped
}

/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_PORTAL_NAME: string
  readonly VITE_PORTAL_DESCRIPTION: string
  readonly VITE_PORTAL_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
