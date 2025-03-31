import { LockedColumn, SynapseConstants, UniqueFacetIdentifier } from '@/utils'
import { getAdditionalFilters, parseEntityIdFromSqlStatement, SQLOperator } from '@/utils/functions/SqlFunctions'
import { DEFAULT_PAGE_SIZE } from '@/utils/SynapseConstants'
import { QueryBundleRequest, SortDirection } from '@sage-bionetworks/synapse-types'
import ColumnFilter from '../ColumnFilter/ColumnFilter'
import { GenericCardSchema } from '../GenericCard'
import { IconOptions } from '../Icon/Icon'
import { IconSvgProps } from '../IconSvg'
import QuerySortSelector from '../QuerySortSelector'
import { QueryVisualizationWrapper, QueryVisualizationWrapperProps } from '../QueryVisualizationWrapper'
import { QueryWrapper } from '../QueryWrapper'
import { QueryWrapperErrorBoundary } from '../QueryWrapperErrorBoundary'
import { RowSetView } from '../QueryWrapperPlotNav/RowSetView'
import { ReleaseCardConfig } from '../ReleaseCard'
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

export enum TargetEnum {
  CURRENT_WINDOW = '_self',
  NEW_WINDOW = '_blank',
  PARENT_FRAME = '_parent',
  FULL_WINDOW_BODY = '_top',
}

export type CardLink =
  | {
      // the column name whose value will be used as the display text
      matchColumnName: string
      // If set, use the rowID as the column value.  Otherwise, use the value in the matchColumnName column
      overrideValueWithRowID?: boolean
      // If true, value will be processed as Markdown
      isMarkdown: false
      // If set, also show a tooltip
      tooltipText?: string
      // If set, will specify where to open the link
      target?: TargetEnum
    } & (
      | {
          baseURL: string
          // the key that will go into the url
          URLColumnName: string
          // the value that will go into the url link should be surrounded with parenthesis, making the search
          // param study=(ROSMAP) instead of study=ROSMAP
          wrapValueWithParens?: boolean
          // If true, the data is a synID and the entity name should be resolved
          resolveEntityName?: boolean
        }
      | {
          // If set and a value exists in this column for the row, just use this value (or a transform of this value) for the href
          overrideLinkURLColumnName: string
          // Optionally apply a transform to each value of the overrideLinkURLColumn
          overrideLinkURLColumnTransform?: (columnValue: string) => string
        }
    )

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
  releaseCardConfig?: ReleaseCardConfig
}
export type CardConfiguration = {
  type: string
  hasInternalLink?: boolean
  iconOptions?: IconOptions
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
  topLevelEnumeratedFacetToFilter?: UniqueFacetIdentifier
  lockedColumn?: LockedColumn
  initialLimit?: number
  multiCardList?: boolean
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
export function CardContainerLogic(props: CardContainerLogicProps) {
  const entityId = parseEntityIdFromSqlStatement(props.sql)
  const queryFilters = getAdditionalFilters(
    props.additionalFiltersSessionStorageKey,
    props.searchParams,
    props.sqlOperator,
  )
  const { sortConfig, columnAliases, topLevelEnumeratedFacetToFilter } = props
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
            cardConfiguration={props}
            initialLimit={props.initialLimit}
            multiCardList={props.multiCardList}
          />
        </QueryWrapperErrorBoundary>
      </QueryVisualizationWrapper>
    </QueryWrapper>
  )
}

export default CardContainerLogic
