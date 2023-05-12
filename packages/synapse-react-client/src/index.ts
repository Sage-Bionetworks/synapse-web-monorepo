import 'regenerator-runtime/runtime'
import { displayToast } from './components/ToastMessage'
import * as SynapseTheme from './theme'
import Palettes from './theme/palette/Palettes'
import {
  SynapseContextConsumer,
  SynapseContextProvider,
  useSynapseContext,
} from './utils/SynapseContext'
import './theme/ThemeTypes'
import FullContextProvider, {
  defaultQueryClientConfig,
} from './utils/FullContextProvider'
import * as AppUtils from './utils/AppUtils'
import * as RegularExpressions from './utils/functions/RegularExpressions'
import { SynapseClientError } from './utils/SynapseClientError'
import * as SynapseComponents from './components'
import SynapseClient from './synapse-client'
import * as SynapseQueries from './synapse-queries'
import { SynapseConstants, SynapseUtilityFunctions } from './utils'

// we exclude this from main.scss because react doesn't like importing an svg
// with a relative import.
import './style/components/_spinner.scss'

const SynapseContext = {
  SynapseContextProvider,
  SynapseContextConsumer,
  useSynapseContext,
  FullContextProvider,
  defaultQueryClientConfig,
}

export {
  SynapseClient,
  SynapseClientError,
  SynapseConstants,
  SynapseComponents,
  SynapseContext,
  SynapseTheme,
  SynapseQueries,
  SynapseUtilityFunctions,
  Palettes,
  AppUtils,
  RegularExpressions,
  displayToast,
}
