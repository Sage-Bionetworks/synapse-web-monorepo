import { ContainerProps } from '@mui/material'
import {
  ColumnMultiValueFunction,
  ColumnSingleValueFilterOperator,
} from '@sage-bionetworks/synapse-types'
import { IconName } from 'synapse-react-client'
import { DetailsPageTabConfig } from '../components/DetailsPage/DetailsPageTabs'
import { SynapseConfig } from './portal-config'

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
  icon1: IconName
  config1: RowSynapseConfig
  icon2: IconName
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

export type DetailsPageProps = React.PropsWithChildren<{
  showMenu?: boolean // default to true
  searchParams?: {
    [index: string]: string
  }
  sql: string
  sqlOperator?: ColumnSingleValueFilterOperator | ColumnMultiValueFunction
  additionalFiltersSessionStorageKey?: string
  ContainerProps?: ContainerProps
  /**
   * If provided, the DetailsPage will render UI to navigate between tabs.
   * The details page component itself will not render the tab content. To render the tab content,
   * you must define child routes that will render in the DetailsPage's `Outlet`, and you may not
   * pass your own children to the DetailsPage component
   */
  tabRoutes?: DetailsPageTabConfig[]
}>
