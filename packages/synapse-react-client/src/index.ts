import { displayToast } from './components'
import * as SynapseTheme from './theme'
import Palettes from './theme/palette/Palettes'
import {
  SynapseConstants,
  SynapseContextConsumer,
  SynapseContextProvider,
  SynapseUtilityFunctions,
  useSynapseContext,
} from './utils'
import FullContextProvider, {
  defaultQueryClientConfig,
} from './utils/context/FullContextProvider'
import * as AppUtils from './utils/AppUtils'
import * as RegularExpressions from './utils/functions/RegularExpressions'
import SynapseClient, { HttpClient } from './synapse-client'
import * as SynapseQueries from './synapse-queries'
import WebhookDashboard from './components/Webhook/WebhookDashboard'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'

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
  SynapseClientError,
  SynapseConstants,
  SynapseContextUtils,
  SynapseTheme,
  SynapseQueries,
  SynapseUtilityFunctions,
  Palettes,
  AppUtils,
  RegularExpressions,
  displayToast,
  WebhookDashboard,
}
