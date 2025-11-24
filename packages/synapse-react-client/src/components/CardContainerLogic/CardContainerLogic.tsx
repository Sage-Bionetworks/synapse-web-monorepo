import { CardConfiguration } from '@/components/CardContainer/CardConfiguration'
import { CardLink } from '@/components/CardContainer/CardLink'
import { LockedColumn, SynapseConstants, UniqueFacetIdentifier } from '@/utils'
import {
  getAdditionalFilters,
  parseEntityIdFromSqlStatement,
  SQLOperator,
} from '@/utils/functions/SqlFunctions'
import { DEFAULT_PAGE_SIZE } from '@/utils/SynapseConstants'
import {
  Query,
  QueryBundleRequest,
  SelectColumn,
  SortDirection,
} from '@sage-bionetworks/synapse-types'
import React, { useMemo } from 'react'
import ColumnFilter from '../ColumnFilter/ColumnFilter'
import { IconSvgProps } from '../IconSvg'
import QuerySortSelector from '../QuerySortSelector'
import {
  QueryVisualizationWrapper,
  QueryVisualizationWrapperProps,
} from '../QueryVisualizationWrapper'
import { QueryWrapper } from '../QueryWrapper'
import { QueryWrapperErrorBoundary } from '../QueryWrapperErrorBoundary'
import { RowSetView } from '../QueryWrapperPlotNav/RowSetView'
import { NoContentPlaceholderType } from '../SynapseTable/NoContentPlaceholderType'

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
  // don't show the link if it's not defined; currently gives empty link that causes page reload, which is confusing
  noLinkIfEmpty?: boolean
}

export type DescriptionConfig = {
  isMarkdown?: boolean
  showFullDescriptionByDefault?: boolean
}

export type MapValueToReactComponentConfig = {
  // The column to apply the mapping to
  matchColumnName: string
  Component: React.ComponentType<{
    /* The value of the table cell. If the column is a _LIST type, then the LIST will be parsed and this will be a string array. */
    value: string | string[] | null
    selectColumn: SelectColumn
  }>
  // discriminator
  isMapValueToReactNodeConfig: true
}

// Specify the indices in the values [] that should be rendered specially
export type LabelLinkConfig = (
  | MarkdownLink
  | CardLink
  | ColumnSpecifiedLink
  | EntityImage
  | MapValueToReactComponentConfig
)[]

export type ColumnIconConfigs = {
  columns: {
    [index: string]: {
      [index: string]: IconSvgProps
    }
  }
}

export type QueryOrDeprecatedSearchParams = {
  /** The initial SQL query which will be used to populate the data in the component */
  query?: Query
  /** @deprecated use `query` */
  sql?: string
  /** Optional limit for the number of cards shown per page
   * @deprecated use `query */
  limit?: number
  /** Applies filters to the query where the key is the column name and the value is the value to filter on.
   * The filter function is controlled by sqlOperator.
   * @deprecated use `query` */
  searchParams?: Record<string, string>
  /** Operator used in the filter created using the searchParams prop
   * @deprecated use `query` */
  sqlOperator?: SQLOperator
}

export type CardContainerLogicProps = QueryOrDeprecatedSearchParams & {
  /** Optional title to display above the component */
  title?: string
  isAlignToLeftNav?: boolean
  /** Provide a `SortConfiguration` that can be used to render UI to toggle the sorting of the cards. */
  sortConfig?: SortConfiguration
  /** Configuration used to render UI that can be used to alter a filter against a column with enumerated facets. */
  topLevelEnumeratedFacetToFilter?: UniqueFacetIdentifier
  /** Optional column to 'lock'; Values and filter controls for a locked column will not be displayed in the UI. */
  lockedColumn?: LockedColumn
  /** Optionally limit the initial number of cards shown on the first page */
  initialLimit?: number
  multiCardList?: boolean
  cardConfiguration: CardConfiguration
} & Pick<
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
export function CardContainerLogic(props: CardContainerLogicProps) {
  const { sql: deprecatedSql } = props
  const sql = props.query?.sql ?? deprecatedSql ?? ''
  const entityId = parseEntityIdFromSqlStatement(sql)

  const { sortConfig, columnAliases, topLevelEnumeratedFacetToFilter } = props
  const defaultSortItems = useMemo(
    () =>
      sortConfig
        ? [
            {
              column: sortConfig.defaultColumn,
              direction: sortConfig.defaultDirection,
            },
          ]
        : undefined,
    [sortConfig],
  )

  const initQueryRequest: QueryBundleRequest = useMemo(() => {
    let query: Query
    if (props.query) {
      query = {
        sort: defaultSortItems,
        limit: DEFAULT_PAGE_SIZE,
        ...props.query,
      }
    } else {
      // Deprecated props were used
      const queryFilters = getAdditionalFilters(
        props.searchParams,
        props.sqlOperator,
        props.additionalFiltersSessionStorageKey,
      )
      query = {
        sql: props.sql!,
        limit: props.limit ?? DEFAULT_PAGE_SIZE,
        sort: defaultSortItems,
        additionalFilters: queryFilters,
      }
    }

    return {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      entityId: entityId,
      query: query,
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
  }, [
    defaultSortItems,
    entityId,
    props.additionalFiltersSessionStorageKey,
    props.limit,
    props.query,
    props.searchParams,
    props.sql,
    props.sqlOperator,
  ])

  /**
   * Fully re-render the uncontrolled QueryWrapper component when the initial query changes. This eliminates a class of
   * bugs where our 'derived' state (the current query), which should be reset, is out of sync with props.
   *
   * See https://legacy.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key
   */
  const queryWrapperKey = JSON.stringify(initQueryRequest)

  return (
    <QueryWrapper
      {...props}
      initQueryRequest={initQueryRequest}
      isInfinite
      key={queryWrapperKey}
    >
      <QueryVisualizationWrapper
        rgbIndex={props.rgbIndex}
        unitDescription={props.unitDescription}
        columnAliases={columnAliases}
        noContentPlaceholderType={
          props.noContentPlaceholderType ?? NoContentPlaceholderType.STATIC
        }
      >
        <QueryWrapperErrorBoundary>
          {sortConfig && <QuerySortSelector sortConfig={sortConfig} />}
          {topLevelEnumeratedFacetToFilter && (
            <ColumnFilter
              topLevelEnumeratedFacetToFilter={topLevelEnumeratedFacetToFilter}
            />
          )}
          <RowSetView
            cardConfiguration={props.cardConfiguration}
            initialLimit={props.initialLimit}
            multiCardList={props.multiCardList}
          />
        </QueryWrapperErrorBoundary>
      </QueryVisualizationWrapper>
    </QueryWrapper>
  )
}

export default CardContainerLogic
