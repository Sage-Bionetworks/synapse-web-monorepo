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
  resourcePrimaryKey: string[]
  /**
   * Set to true for SSG portals where the canonical URL is emitted via the route's
   * meta() export (so it is present in pre-rendered HTML). Prevents DetailsPageDocumentMetadata
   * from running and overwriting the static canonical tag after hydration.
   */
  disableCanonicalUrl?: boolean
  /** Configuration for displaying a DOI */
  portalDOIConfiguration?: PortalDOIConfiguration
}
