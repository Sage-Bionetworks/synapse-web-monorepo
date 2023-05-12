declare module 'react-native-rss-parser'
declare module '*.svg' {
  import * as React from 'react'

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >
}
declare module 'column-resizer'
