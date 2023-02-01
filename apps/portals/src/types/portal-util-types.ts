import { SynapseConfig } from './portal-config'
import { SQLOperator } from 'synapse-react-client/dist/utils/functions/sqlFunctions'
import { Icon } from 'synapse-react-client/dist/containers/IconSvg'

/* 
  These are types that come up frequently between portals but are an
  implementation detail, not a core type that should be relied up in 
  the portal.
*/
// The props for DetailsPageProps are kept here so that
// the configuration files can import the type

export type ResolveSynId = {
  title?: boolean
  value?: boolean
}

type ToggleConfigs = {
  icon1: Icon
  config1: RowSynapseConfig
  icon2: Icon
  config2: RowSynapseConfig
}

type RowToPropTransform = {
  standalone?: boolean // if true then dont inject props
  resolveSynId?: ResolveSynId
  tableSqlKeys?: string[]
  columnName?: string
  injectMarkdown?: boolean
  showTitleSeperator?: boolean
  overrideSqlSourceTable?: boolean // use the search param value for the table sql:  SELECT * FROM <search-param-value>.<rowVersionNumber>
  toggleConfigs?: ToggleConfigs // PORTALS-2229: set if we should show a toggle
}

export type RowSynapseConfig = SynapseConfig & RowToPropTransform

/**
 * The content of a DetailsPage is either a tab layout, or config array, but not both
 */
export type DetailsPageContent =
  | { tabLayout: DetailsPageTabProps[] }
  | { synapseConfigArray: RowSynapseConfig[] }

export type DetailsPageProps = DetailsPageContent & {
  showMenu?: boolean // default to true
  searchParams?: {
    [index: string]: string
  }
  sql: string
  sqlOperator?: SQLOperator
}

export type DetailsPageTabProps = DetailsPageContent & {
  /** The title of the tab shown in the UI */
  title: string
  /** The path string that will be used to route the content of the tab. Must be unique across a set of tabs */
  uriValue: string
  iconName?: string
  cssClass?: string
  toolTip?: string
}
