import { displayToast } from './components'
import * as SynapseTheme from './theme'
import Palettes from '@/react-ui/theme/palette'
import {
  SynapseClientError,
  SynapseConstants,
  SynapseContextConsumer,
  SynapseContextProvider,
  SynapseUtilityFunctions,
  useSynapseContext,
} from './utils'
import FullContextProvider, {
  defaultQueryClientConfig,
} from '@/stores/FullContextProvider/FullContextProvider'
import * as AppUtils from './utils/AppUtils'
import * as RegularExpressions from './utils/functions/RegularExpressions'
import SynapseClient, { HttpClient } from './synapse-client'
import * as SynapseQueries from './synapse-queries'
import WebhookDashboard from './components/Webhook/WebhookDashboard/WebhookDashboard'

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
