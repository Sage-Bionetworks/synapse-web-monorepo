declare module '*.svg' {
  import React from 'react'

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >
}
declare module 'column-resizer'
