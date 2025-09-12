import { ContainerProps } from '@mui/material'
import {
  ColumnMultiValueFunction,
  ColumnSingleValueFilterOperator,
} from '@sage-bionetworks/synapse-types'
import { PortalDOIConfiguration } from 'synapse-react-client/components/GenericCard/PortalDOI/PortalDOIConfiguration'

export type DetailsPageProps = {
  header?: React.ReactNode
  children?: React.ReactNode
  showMenu?: boolean // default to true
  searchParams?: {
    [index: string]: string
  }
  sql: string
  sqlOperator?: ColumnSingleValueFilterOperator | ColumnMultiValueFunction
  additionalFiltersSessionStorageKey?: string
  ContainerProps?: ContainerProps
  /** The set of column name(s) which define the main unique key of the column (used to define the canonical URL for SEO) */
  resourcePrimaryKey?: string[]
  /** Configuration for displaying a DOI */
  portalDOIConfiguration?: PortalDOIConfiguration
}
