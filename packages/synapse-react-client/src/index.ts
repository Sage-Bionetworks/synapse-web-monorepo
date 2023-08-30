import * as SynapseTheme from './theme'
import Palettes from './theme/palette/Palettes'
import {
  SynapseContextConsumer,
  SynapseContextProvider,
  useSynapseContext,
} from './utils'
import {
  FullContextProvider,
  defaultQueryClientConfig,
} from './utils/context/FullContextProvider'
import * as AppUtils from './utils/AppUtils'
import * as RegularExpressions from './utils/functions/RegularExpressions'
import * as SynapseComponents from './components'
import SynapseClient, { HttpClient } from './synapse-client'
import * as SynapseQueries from './synapse-queries'

export * from './components'
export * from './utils'

const SynapseContextUtils = {
  SynapseContextProvider,
  SynapseContextConsumer,
  useSynapseContext,
  FullContextProvider,
  defaultQueryClientConfig,
}

export {
  HttpClient,
  SynapseClient,
  SynapseComponents,
  SynapseContextUtils,
  SynapseTheme,
  SynapseQueries,
  Palettes,
  AppUtils,
  RegularExpressions,
}
