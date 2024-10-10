import { ContainerProps } from '@mui/material'
import {
  ColumnMultiValueFunction,
  ColumnSingleValueFilterOperator,
} from '@sage-bionetworks/synapse-types'
import { IconName } from 'synapse-react-client'
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
}>
