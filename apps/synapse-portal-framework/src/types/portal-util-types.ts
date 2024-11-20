import { ContainerProps } from '@mui/material'
import {
  ColumnMultiValueFunction,
  ColumnSingleValueFilterOperator,
} from '@sage-bionetworks/synapse-types'

export type DetailsPageProps = React.PropsWithChildren<{
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
}>
