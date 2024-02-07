import React from 'react'
import { SynapseConstants } from '../../utils'
import {
  getAdditionalFilters,
  parseEntityIdFromSqlStatement,
  SQLOperator,
} from '../../utils/functions/SqlFunctions'
import {
  QueryBundleRequest,
  SortDirection,
} from '@sage-bionetworks/synapse-types'
import CardContainer from '../CardContainer/CardContainer'
import { ErrorBanner } from '../error/ErrorBanner'
import { GenericCardSchema } from '../GenericCard'
import { IconSvgProps } from '../IconSvg'
import {
  QueryVisualizationWrapper,
  QueryVisualizationWrapperProps,
} from '../QueryVisualizationWrapper'
import { QueryContextConsumer } from '../QueryContext'
import { QueryWrapper } from '../QueryWrapper'
import QuerySortSelector from '../QuerySortSelector'
import { NoContentPlaceholderType } from '../SynapseTable/NoContentPlaceholderType'
import { IconOptions } from '../Icon/Icon'
import { DEFAULT_PAGE_SIZE } from '../../utils/SynapseConstants'

/**
 *  Used when a column value should link to an external URL defined by a value in another column.
 *  Currently only works in SynapseTable (not cards!)
 */
export interface ColumnSpecifiedLink {
  isMarkdown: false
  /* The column which should have the displayed value */
  matchColumnName: string
  /* The column which has the link. If the link is empty, the value will be displayed without a link. */
  linkColumnName: string
  // If set, also show a tooltip
  tooltipText?: string
}

/**
 *  Used when a column value should be previewed
 *  Currently only works in SynapseTable (not cards!)
 */
export interface EntityImage {
  // the columns whos value will be used for the markdown
  matchColumnName: string
  isEntityImage: boolean
}

export enum TargetEnum {
  CURRENT_WINDOW = '_self',
  NEW_WINDOW = '_blank',
  PARENT_FRAME = '_parent',
  FULL_WINDOW_BODY = '_top',
}

export interface CardLink {
  baseURL: string
  // the key that will go into the url
  URLColumnName: string
  // the column name whose value will be used as the display text
  matchColumnName: string
  // If set, use the rowID as the column value.  Otherwise, use the value in the matchColumnName column
  overrideValueWithRowID?: boolean
  // If true, value will be processed as Markdown
  isMarkdown: false
  // the value that will go into the url link should be surrounded with parenthesis, making the search
  // param study=(ROSMAP) instead of study=ROSMAP
  wrapValueWithParens?: boolean
  // If set and a value exists in this column for the row, just use this value for the href
  overrideLinkURLColumnName?: string
  // If set, also show a tooltip
  tooltipText?: string
  // If set, will specify where to open the link
  target?: TargetEnum
}

export type MarkdownLink = {
  isMarkdown: true
  // the columns whos value will be used for the markdown
  matchColumnName: string
  // If set, also show a tooltip
  tooltipText?: string
}

export type SortConfiguration = {
  // the column that the query should be sorted on by default
  defaultColumn: string
  // the direction that the defaultColumn should be sorted on by default
  defaultDirection: SortDirection
  // the columns that the UI should surface as sortable
  sortableColumns: string[]
}

export type CTACardLink = {
  // link text
  text: string
  // column name to use for href
  link: string
}

export type DescriptionConfig = {
  isMarkdown?: boolean
  showFullDescriptionByDefault?: boolean
}

// Specify the indices in the values [] that should be rendered specially
export type LabelLinkConfig = (
  | MarkdownLink
  | CardLink
  | ColumnSpecifiedLink
  | EntityImage
)[]

export type ColumnIconConfigs = {
  columns: {
    [index: string]: {
      [index: string]: IconSvgProps
    }
  }
}

export type CommonCardProps = {
  genericCardSchema?: GenericCardSchema
  secondaryLabelLimit?: number
  titleLinkConfig?: CardLink
  ctaLinkConfig?: CTACardLink
  labelLinkConfig?: LabelLinkConfig
  descriptionConfig?: DescriptionConfig
  rgbIndex?: number
  columnIconOptions?: ColumnIconConfigs
}
export type CardConfiguration = {
  type: string
  hasInternalLink?: boolean
  iconOptions?: IconOptions
  initialLimit?: number
} & CommonCardProps

export type CardContainerLogicProps = {
  limit?: number
  title?: string
  sqlOperator?: SQLOperator
  searchParams?: Record<string, string>
  isHeader?: boolean
  isAlignToLeftNav?: boolean
  sql: string
  sortConfig?: SortConfiguration
} & CardConfiguration &
  Pick<
    QueryVisualizationWrapperProps,
    | 'rgbIndex'
    | 'unitDescription'
    | 'columnAliases'
    | 'noContentPlaceholderType'
    | 'additionalFiltersSessionStorageKey'
  >

/**
 * Class wraps around CardContainer and serves as a standalone logic container for rendering cards.
 */
export const CardContainerLogic = (props: CardContainerLogicProps) => {
  const entityId = parseEntityIdFromSqlStatement(props.sql)
  const queryFilters = getAdditionalFilters(
    props.additionalFiltersSessionStorageKey,
    props.searchParams,
    props.sqlOperator,
  )
  const { sortConfig, columnAliases } = props
  const defaultSortItems = sortConfig
    ? [
        {
          column: sortConfig.defaultColumn,
          direction: sortConfig.defaultDirection,
        },
      ]
    : undefined
  const initQueryRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId: entityId,
    query: {
      sql: props.sql,
      limit: props.limit ?? DEFAULT_PAGE_SIZE,
      sort: defaultSortItems,
      additionalFilters: queryFilters,
    },
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
      SynapseConstants.BUNDLE_MASK_QUERY_COUNT |
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_MAX_ROWS_PER_PAGE |
      SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
      SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
      SynapseConstants.BUNDLE_MASK_SUM_FILES_SIZE_BYTES |
      SynapseConstants.BUNDLE_MASK_LAST_UPDATED_ON,
  }

  return (
    <QueryWrapper {...props} initQueryRequest={initQueryRequest} isInfinite>
      <QueryVisualizationWrapper
        rgbIndex={props.rgbIndex}
        unitDescription={props.unitDescription}
        columnAliases={columnAliases}
        noContentPlaceholderType={
          props.noContentPlaceholderType ?? NoContentPlaceholderType.STATIC
        }
      >
        {sortConfig && <QuerySortSelector sortConfig={sortConfig} />}
        <CardContainer {...props} />
        <QueryContextConsumer>
          {queryContext => <ErrorBanner error={queryContext?.error} />}
        </QueryContextConsumer>
      </QueryVisualizationWrapper>
    </QueryWrapper>
  )
}

export default CardContainerLogic
