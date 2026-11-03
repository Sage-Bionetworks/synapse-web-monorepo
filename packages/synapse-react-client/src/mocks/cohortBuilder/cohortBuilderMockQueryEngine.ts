import {
  BUNDLE_MASK_COMBINED_SQL,
  BUNDLE_MASK_LAST_UPDATED_ON,
  BUNDLE_MASK_QUERY_COLUMN_MODELS,
  BUNDLE_MASK_QUERY_COUNT,
  BUNDLE_MASK_QUERY_FACETS,
  BUNDLE_MASK_QUERY_MAX_ROWS_PER_PAGE,
  BUNDLE_MASK_QUERY_RESULTS,
  BUNDLE_MASK_QUERY_SELECT_COLUMNS,
} from '@/utils/SynapseConstants'
import { AggregateDataConfiguration } from '@sage-bionetworks/synapse-client/generated/models/AggregateDataConfiguration'
import { BelowThresholdErrorResponse } from '@sage-bionetworks/synapse-client/generated/models/BelowThresholdErrorResponse'
import { ColumnModel } from '@sage-bionetworks/synapse-client/generated/models/ColumnModel'
import { ErrorResponse } from '@sage-bionetworks/synapse-client/generated/models/ErrorResponse'
import { FacetColumnResult } from '@sage-bionetworks/synapse-client/generated/models/FacetColumnResult'
import { QueryResultBundle } from '@sage-bionetworks/synapse-client/generated/models/QueryResultBundle'
import { RowSuppressionErrorResponse } from '@sage-bionetworks/synapse-client/generated/models/RowSuppressionErrorResponse'
import { TableQueryResult } from '@sage-bionetworks/synapse-client/generated/models/TableQueryResult'
import { TableSelectColumn } from '@sage-bionetworks/synapse-client/generated/models/TableSelectColumn'
import {
  CohortDefinition,
  ColumnCohortFilter,
  ColumnMultiValueFunction,
  ColumnMultiValueFunctionQueryFilter,
  ColumnSingleValueFilterOperator,
  ColumnSingleValueQueryFilter,
  FacetColumnRequest,
  Query,
  QueryBundleRequest,
  QueryFilter,
  SortItem,
} from '@sage-bionetworks/synapse-types'
import {
  CohortBuilderMockProfile,
  DATA_REFERENCE_COLUMN_NAME,
  PARTICIPANT_ID_COLUMN_NAME,
  REFERENCE_TYPE_COLUMN_NAME,
  STUDY_COLUMN_NAME,
} from './cohortBuilderMockProfiles'
import {
  CohortBuilderSyntheticData,
  createSeededRandom,
  MaterialRow,
} from './cohortBuilderSyntheticData'

/**
 * Which access tier the mocked caller has on the participants source:
 * - `FULL`: the caller met the access requirement (exact results, rows allowed).
 * - `AGGREGATE_ONLY`: authenticated but unapproved (count gate, post-processed
 *   facets, no participant rows).
 */
export type CohortBuilderAccess = 'FULL' | 'AGGREGATE_ONLY'

export type CohortBuilderMockErrorBody =
  | ErrorResponse
  | BelowThresholdErrorResponse
  | RowSuppressionErrorResponse

export type CohortBuilderMockQueryResult =
  | { status: 200; body: QueryResultBundle }
  | { status: number; body: CohortBuilderMockErrorBody }

export const MOCK_BELOW_THRESHOLD_HTTP_STATUS = 403
export const MOCK_ROW_SUPPRESSED_HTTP_STATUS = 403

const DATA_VIRTUAL_TABLE_ID_COLUMN_NAME = 'id'
const DATA_VIRTUAL_TABLE_NAME_COLUMN_NAME = 'name'
const MOCK_LAST_UPDATED_ON = '2026-10-01T00:00:00.000Z'
const MOCK_MAX_ROWS_PER_PAGE = 1000

type CellValue = string | number | readonly string[]
type VirtualTableRow = Readonly<Record<string, CellValue>>
type Perspective = 'PARTICIPANTS' | 'DATA'

class MockQueryError extends Error {
  constructor(
    readonly status: number,
    readonly body: CohortBuilderMockErrorBody,
  ) {
    super(body.reason)
  }
}

function invalidQuery(reason: string): MockQueryError {
  return new MockQueryError(400, {
    concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
    reason,
  })
}

/** Column models of both VirtualTables, derived from the synthetic data's profile. */
export function getCohortBuilderColumnModels(data: CohortBuilderSyntheticData) {
  const { profile, dataAttributeNames } = data
  let nextColumnId = 1
  const column = (
    name: string,
    columnType: ColumnModel['columnType'],
    isFaceted: boolean,
  ): ColumnModel => ({
    id: String(nextColumnId++),
    name,
    columnType,
    facetType: isFaceted ? 'enumeration' : undefined,
  })
  const participants: ColumnModel[] = [
    column(PARTICIPANT_ID_COLUMN_NAME, 'STRING', false),
    column(STUDY_COLUMN_NAME, 'STRING', true),
    ...profile.participantAttributes.map(attribute =>
      column(attribute.name, 'STRING', true),
    ),
    ...dataAttributeNames.map(name => column(name, 'STRING_LIST', true)),
  ]
  const dataReferences: ColumnModel[] = [
    column(DATA_VIRTUAL_TABLE_ID_COLUMN_NAME, 'ENTITYID', false),
    column(DATA_VIRTUAL_TABLE_NAME_COLUMN_NAME, 'STRING', false),
    column(REFERENCE_TYPE_COLUMN_NAME, 'STRING', true),
    column(STUDY_COLUMN_NAME, 'STRING', true),
    ...dataAttributeNames.map(name => column(name, 'STRING', true)),
  ]
  return { participants, dataReferences }
}

// -----------------------------------------------------------------------------
// Filter evaluation
// -----------------------------------------------------------------------------

function likeToRegExp(pattern: string): RegExp {
  const escaped = pattern
    .replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`)
    .replaceAll('%', '.*')
    .replaceAll('_', '.')
  return new RegExp(`^${escaped}$`, 'i')
}

function compareCellValues(a: string | number, b: string | number): number {
  const aNumber = Number(a)
  const bNumber = Number(b)
  if (Number.isFinite(aNumber) && Number.isFinite(bNumber)) {
    return aNumber - bNumber
  }
  return String(a).localeCompare(String(b))
}

function singleValueMatches(
  value: string | number,
  operator: ColumnSingleValueFilterOperator,
  values: readonly string[],
): boolean {
  switch (operator) {
    case ColumnSingleValueFilterOperator.EQUAL:
    case ColumnSingleValueFilterOperator.IN:
      return values.includes(String(value))
    case ColumnSingleValueFilterOperator.LIKE:
      return values.some(pattern => likeToRegExp(pattern).test(String(value)))
    case ColumnSingleValueFilterOperator.NOT_EQUAL:
      return values.every(v => String(value) !== v)
    case ColumnSingleValueFilterOperator.GREATER_THAN:
      return compareCellValues(value, values[0]) > 0
    case ColumnSingleValueFilterOperator.GREATER_THAN_OR_EQUAL:
      return compareCellValues(value, values[0]) >= 0
    case ColumnSingleValueFilterOperator.LESS_THAN:
      return compareCellValues(value, values[0]) < 0
    case ColumnSingleValueFilterOperator.LESS_THAN_OR_EQUAL:
      return compareCellValues(value, values[0]) <= 0
    case ColumnSingleValueFilterOperator.BETWEEN:
      return (
        compareCellValues(value, values[0]) >= 0 &&
        compareCellValues(value, values[1]) <= 0
      )
    default:
      throw invalidQuery(`Unsupported operator: ${operator}`)
  }
}

function singleValueFilterMatches(
  row: VirtualTableRow | MaterialRow,
  filter: ColumnSingleValueQueryFilter,
): boolean {
  if (!(filter.columnName in row)) {
    throw invalidQuery(`Column does not exist: ${filter.columnName}`)
  }
  const cell = row[filter.columnName]
  const isEmpty = Array.isArray(cell) ? cell.length === 0 : cell === ''
  if (filter.operator === ColumnSingleValueFilterOperator.IS_NULL) {
    return isEmpty
  }
  if (filter.operator === ColumnSingleValueFilterOperator.IS_NOT_NULL) {
    return !isEmpty
  }
  const cellValues: readonly (string | number)[] = Array.isArray(cell)
    ? cell
    : [cell as string | number]
  return cellValues.some(value =>
    singleValueMatches(value, filter.operator, filter.values),
  )
}

/** What a filter needs beyond the row: which columns are lists, and the resolved values of each request-scoped cohort. */
type FilterContext = {
  listColumnNames: ReadonlySet<string>
  cohortValues: ReadonlyMap<string, ReadonlySet<string>>
}

function multiValueFilterMatches(
  row: VirtualTableRow | MaterialRow,
  filter: ColumnMultiValueFunctionQueryFilter,
  context: FilterContext,
): boolean {
  if (!context.listColumnNames.has(filter.columnName)) {
    throw invalidQuery(
      `${filter.function} can only be used on a multi-value (list) column: ${filter.columnName}`,
    )
  }
  const cell = row[filter.columnName] as readonly string[]
  if (filter.function === ColumnMultiValueFunction.HAS_LIKE) {
    return filter.values.some(pattern =>
      cell.some(value => likeToRegExp(pattern).test(value)),
    )
  }
  return cell.some(value => filter.values.includes(value))
}

function cohortFilterMatches(
  row: VirtualTableRow | MaterialRow,
  filter: ColumnCohortFilter,
  context: FilterContext,
): boolean {
  // A plain cohort filter must name a column of the queried table; a defining one is evaluated on MATERIAL rows.
  if (!(filter.columnName in row)) {
    throw invalidQuery(`Column does not exist: ${filter.columnName}`)
  }
  // An empty cohort expands to IN (NULL), which matches nothing.
  return (
    context.cohortValues
      .get(filter.cohortName)
      ?.has(String(row[filter.columnName])) ?? false
  )
}

/** Evaluates a query filter against one row. */
function filterMatches(
  row: VirtualTableRow | MaterialRow,
  filter: QueryFilter,
  context: FilterContext,
): boolean {
  switch (filter.concreteType) {
    case 'org.sagebionetworks.repo.model.table.FilterGroup': {
      const children = filter.children ?? []
      const matches =
        filter.operator === 'OR'
          ? children.some(child => filterMatches(row, child, context))
          : children.every(child => filterMatches(row, child, context))
      return filter.not ? !matches : matches
    }
    case 'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter':
      return singleValueFilterMatches(row, filter)
    case 'org.sagebionetworks.repo.model.table.ColumnMultiValueFunctionQueryFilter':
      return multiValueFilterMatches(row, filter, context)
    case 'org.sagebionetworks.repo.model.table.ColumnCohortFilter':
      return cohortFilterMatches(row, filter, context)
    default:
      throw invalidQuery(
        `The Cohort Builder mock does not support ${filter.concreteType}`,
      )
  }
}

function facetSelectionMatches(
  row: VirtualTableRow,
  selection: FacetColumnRequest,
): boolean {
  const cell = row[selection.columnName]
  const cellValues: readonly (string | number)[] = Array.isArray(cell)
    ? cell
    : [cell as string | number]
  if (
    selection.concreteType ===
    'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest'
  ) {
    return cellValues.some(value =>
      selection.facetValues.includes(String(value)),
    )
  }
  return cellValues.some(
    value =>
      (selection.min === undefined ||
        compareCellValues(value, selection.min) >= 0) &&
      (selection.max === undefined ||
        compareCellValues(value, selection.max) <= 0),
  )
}

// -----------------------------------------------------------------------------
// VirtualTable materialization (the defining SQL's GROUP BY)
// -----------------------------------------------------------------------------

function groupByParticipant(
  rows: readonly MaterialRow[],
  data: CohortBuilderSyntheticData,
): VirtualTableRow[] {
  const byParticipant = new Map<string, MaterialRow[]>()
  for (const row of rows) {
    const participantId = row[PARTICIPANT_ID_COLUMN_NAME]
    const group = byParticipant.get(participantId)
    if (group) {
      group.push(row)
    } else {
      byParticipant.set(participantId, [row])
    }
  }
  return Array.from(byParticipant.values(), group => {
    const first = group[0]
    const participantRow: Record<string, CellValue> = {
      [PARTICIPANT_ID_COLUMN_NAME]: first[PARTICIPANT_ID_COLUMN_NAME],
      [STUDY_COLUMN_NAME]: first[STUDY_COLUMN_NAME],
    }
    for (const attribute of data.profile.participantAttributes) {
      participantRow[attribute.name] = first[attribute.name]
    }
    for (const name of data.dataAttributeNames) {
      participantRow[name] = Array.from(
        new Set(group.map(row => row[name])),
      ).sort((a, b) => a.localeCompare(b))
    }
    return participantRow
  })
}

function groupByDataReference(
  rows: readonly MaterialRow[],
  data: CohortBuilderSyntheticData,
): VirtualTableRow[] {
  const referenceIds = new Set(rows.map(row => row[DATA_REFERENCE_COLUMN_NAME]))
  return Array.from(referenceIds, referenceId => {
    const reference = data.references.get(referenceId)!
    return {
      [DATA_VIRTUAL_TABLE_ID_COLUMN_NAME]: reference.id,
      [DATA_VIRTUAL_TABLE_NAME_COLUMN_NAME]: reference.name,
      [REFERENCE_TYPE_COLUMN_NAME]: reference.referenceType,
      [STUDY_COLUMN_NAME]: reference.study,
      ...reference.attributes,
    }
  })
}

// -----------------------------------------------------------------------------
// Facets and post-processing
// -----------------------------------------------------------------------------

function hashString(value: string): number {
  // FNV-1a, 32-bit
  let hash = 0x811c9dc5
  for (const character of value) {
    hash ^= character.codePointAt(0)!
    hash = Math.imul(hash, 0x01000193)
  }
  return hash >>> 0
}

/**
 * Adds Laplace noise (scale 1/epsilon) and clamps at zero, like the backend's
 * NOISE algorithm. The mock derives the noise from `noiseKey` so a re-render of
 * the same query shows the same counts; the backend re-samples per execution.
 */
function addLaplaceNoise(
  count: number,
  epsilon: number,
  noiseKey: string,
): number {
  const u = createSeededRandom(hashString(noiseKey))() - 0.5
  const noise = -(1 / epsilon) * Math.sign(u) * Math.log(1 - 2 * Math.abs(u))
  return Math.max(0, Math.round(count + noise))
}

function countFacetValues(
  rows: readonly VirtualTableRow[],
  columnName: string,
): Map<string, number> {
  const counts = new Map<string, number>()
  for (const row of rows) {
    const cell = row[columnName]
    const values: readonly string[] =
      typeof cell === 'object' ? cell : [String(cell)]
    for (const value of values) {
      counts.set(value, (counts.get(value) ?? 0) + 1)
    }
  }
  return counts
}

function buildFacet(
  columnName: string,
  counts: ReadonlyMap<string, number>,
  selectedValues: readonly string[],
  aggregateConfig: AggregateDataConfiguration | undefined,
  noiseKeyPrefix: string,
): FacetColumnResult {
  const sortedCounts = Array.from(counts).sort(
    ([valueA, countA], [valueB, countB]) =>
      countB - countA || valueA.localeCompare(valueB),
  )
  const postProcessing = aggregateConfig?.facetPostProcessingConfig
  const parameters = postProcessing?.parameters
  if (
    postProcessing?.algorithm === 'ROUNDING' &&
    parameters?.concreteType ===
      'org.sagebionetworks.repo.model.FacetRoundingParameters'
  ) {
    const binSize = parameters.roundTo ?? 1
    return {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultBinnedValues',
      columnName,
      facetType: 'enumeration',
      binSize,
      binnedValues: sortedCounts.map(([value, count]) => ({
        value,
        binMin: Math.floor(count / binSize) * binSize,
        isSelected: selectedValues.includes(value),
      })),
    }
  }
  const epsilon =
    postProcessing?.algorithm === 'NOISE' &&
    parameters?.concreteType ===
      'org.sagebionetworks.repo.model.FacetNoiseParameters'
      ? (parameters.epsilon ?? 1)
      : undefined
  return {
    concreteType:
      'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
    columnName,
    facetType: 'enumeration',
    facetValues: sortedCounts.map(([value, count]) => ({
      value,
      count:
        epsilon === undefined
          ? count
          : addLaplaceNoise(
              count,
              epsilon,
              `${noiseKeyPrefix}\u0000${columnName}\u0000${value}`,
            ),
      isSelected: selectedValues.includes(value),
    })),
  }
}

// -----------------------------------------------------------------------------
// Combined SQL (for the Query Builder's SQL summary)
// -----------------------------------------------------------------------------

function sqlLiteral(value: string): string {
  return `'${value.replaceAll("'", "''")}'`
}

const SQL_OPERATOR_BY_FILTER_OPERATOR: Partial<
  Record<ColumnSingleValueFilterOperator, string>
> = {
  EQUAL: '=',
  NOT_EQUAL: '<>',
  GREATER_THAN: '>',
  GREATER_THAN_OR_EQUAL: '>=',
  LESS_THAN: '<',
  LESS_THAN_OR_EQUAL: '<=',
  LIKE: 'LIKE',
}

function filterToSql(filter: QueryFilter): string {
  switch (filter.concreteType) {
    case 'org.sagebionetworks.repo.model.table.FilterGroup': {
      const joined = (filter.children ?? [])
        .map(filterToSql)
        .join(` ${filter.operator ?? 'AND'} `)
      return `${filter.not ? 'NOT ' : ''}(${joined})`
    }
    case 'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter': {
      const column = `"${filter.columnName}"`
      switch (filter.operator) {
        case ColumnSingleValueFilterOperator.IN:
          return `${column} IN (${filter.values.map(sqlLiteral).join(', ')})`
        case ColumnSingleValueFilterOperator.IS_NULL:
          return `${column} IS NULL`
        case ColumnSingleValueFilterOperator.IS_NOT_NULL:
          return `${column} IS NOT NULL`
        case ColumnSingleValueFilterOperator.BETWEEN:
          return `${column} BETWEEN ${sqlLiteral(filter.values[0])} AND ${sqlLiteral(filter.values[1])}`
        default: {
          const sqlOperator = SQL_OPERATOR_BY_FILTER_OPERATOR[filter.operator]
          const predicates = filter.values.map(
            value => `${column} ${sqlOperator} ${sqlLiteral(value)}`,
          )
          return predicates.length === 1
            ? predicates[0]
            : `(${predicates.join(' OR ')})`
        }
      }
    }
    case 'org.sagebionetworks.repo.model.table.ColumnMultiValueFunctionQueryFilter':
      return `"${filter.columnName}" ${filter.function} (${filter.values.map(sqlLiteral).join(', ')})`
    case 'org.sagebionetworks.repo.model.table.ColumnCohortFilter':
      return `"${filter.columnName}" IN COHORT(${filter.cohortName})`
    default:
      return ''
  }
}

// -----------------------------------------------------------------------------
// Query execution
// -----------------------------------------------------------------------------

function sortRows(
  rows: VirtualTableRow[],
  sort: readonly SortItem[] | undefined,
): VirtualTableRow[] {
  if (!sort || sort.length === 0) {
    return rows
  }
  return [...rows].sort((a, b) => {
    for (const { column, direction } of sort) {
      const toComparable = (cell: CellValue) =>
        Array.isArray(cell) ? cell.join(',') : (cell as string | number)
      const comparison = compareCellValues(
        toComparable(a[column]),
        toComparable(b[column]),
      )
      if (comparison !== 0) {
        return direction === 'DESC' ? -comparison : comparison
      }
    }
    return 0
  })
}

function getPerspective(
  profile: CohortBuilderMockProfile,
  entityId: string,
): Perspective {
  if (entityId === profile.participantsVirtualTableId) {
    return 'PARTICIPANTS'
  }
  if (entityId === profile.dataVirtualTableId) {
    return 'DATA'
  }
  throw new MockQueryError(404, {
    concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
    reason: `The Cohort Builder mock has no table ${entityId}`,
  })
}

function getAggregateConfig(
  profile: CohortBuilderMockProfile,
  request: QueryBundleRequest,
  access: CohortBuilderAccess,
): AggregateDataConfiguration | undefined {
  // A data manager's preview applies only to callers who already have full access.
  if (access === 'FULL') {
    return request.aggregateDataPreview
  }
  return {
    suppressionThreshold: profile.suppressionThreshold,
    countSuppressionStrategy: profile.countSuppressionStrategy,
    facetPostProcessingConfig: profile.facetPostProcessingConfig,
  }
}

function assertRowsAllowed(
  perspective: Perspective,
  partMask: number,
  isAggregateOnlyRead: boolean,
): void {
  // The participant VT projects individualId, a quasi-identifier, so the backend withholds its rows during preflight
  // from aggregate-only callers and from data manager previews.
  if (
    isAggregateOnlyRead &&
    perspective === 'PARTICIPANTS' &&
    (partMask & BUNDLE_MASK_QUERY_RESULTS) !== 0
  ) {
    throw new MockQueryError(MOCK_ROW_SUPPRESSED_HTTP_STATUS, {
      concreteType:
        'org.sagebionetworks.repo.model.table.RowSuppressionErrorResponse',
      reason:
        'Row results are withheld because the query projects a quasi-identifier column. Re-run the query without requesting row results.',
      errorCode: 'ROW_SUPPRESSED',
      rowSuppressionReasonCode: 'QID_PROJECTED',
    })
  }
}

function assertAboveSuppressionThreshold(
  matchedRowCount: number,
  aggregateConfig: AggregateDataConfiguration | undefined,
): void {
  if (!aggregateConfig) {
    return
  }
  // Like the backend's COUNT(*) gate, both perspectives count the rows of the
  // queried VirtualTable: participants, or files and datasets.
  const threshold = aggregateConfig.suppressionThreshold
  if (matchedRowCount > 0 && matchedRowCount < threshold) {
    throw new MockQueryError(MOCK_BELOW_THRESHOLD_HTTP_STATUS, {
      concreteType:
        'org.sagebionetworks.repo.model.table.BelowThresholdErrorResponse',
      reason: `The number of records matched by this query is below the minimum threshold of ${threshold} required to return a result.`,
      errorCode: 'BELOW_THRESHOLD',
      suppressionThreshold: threshold,
    })
  }
}

type MatchedRows = {
  rows: VirtualTableRow[]
  /** The matching rows when one column's facet selection is ignored, as that column's facet counts require. */
  ignoringFacetSelection: (columnName: string) => VirtualTableRow[]
}

function matchRows(
  data: CohortBuilderSyntheticData,
  perspective: Perspective,
  query: Query,
  context: FilterContext,
): MatchedRows {
  const additionalFilters = query.additionalFilters ?? []
  const selectedFacets = query.selectedFacets ?? []
  const definingFilters = additionalFilters.filter(
    filter => filter.isDefiningCondition,
  )
  const outerFilters = additionalFilters.filter(
    filter => !filter.isDefiningCondition,
  )
  // MATERIAL columns are all scalars.
  const materialContext: FilterContext = {
    ...context,
    listColumnNames: new Set(),
  }
  const materialRows = data.materialRows.filter(row =>
    definingFilters.every(filter =>
      filterMatches(row, filter, materialContext),
    ),
  )
  const virtualTableRows =
    perspective === 'PARTICIPANTS'
      ? groupByParticipant(materialRows, data)
      : groupByDataReference(materialRows, data)
  const filterRows = (ignoredFacetColumnName?: string) =>
    virtualTableRows.filter(
      row =>
        outerFilters.every(filter => filterMatches(row, filter, context)) &&
        selectedFacets.every(
          selection =>
            selection.columnName === ignoredFacetColumnName ||
            facetSelectionMatches(row, selection),
        ),
    )
  return { rows: filterRows(), ignoringFacetSelection: filterRows }
}

function toQueryResult(
  entityId: string,
  columnModels: readonly ColumnModel[],
  selectColumns: TableSelectColumn[],
  rows: VirtualTableRow[],
  query: Query,
): TableQueryResult {
  const offset = query.offset ?? 0
  const page = sortRows(rows, query.sort).slice(
    offset,
    offset + (query.limit ?? rows.length),
  )
  return {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
    queryResults: {
      concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
      tableId: entityId,
      headers: selectColumns,
      rows: page.map(row => ({
        values: columnModels.map(({ name }) => {
          const cell = row[name!]
          return Array.isArray(cell) ? JSON.stringify(cell) : String(cell)
        }),
      })),
    },
  }
}

function buildFacets(
  columnModels: readonly ColumnModel[],
  query: Query,
  matchedRows: MatchedRows,
  aggregateConfig: AggregateDataConfiguration | undefined,
): FacetColumnResult[] {
  const selectedFacets = query.selectedFacets ?? []
  const noiseKeyPrefix = JSON.stringify([
    query.additionalFilters ?? [],
    selectedFacets,
  ])
  return columnModels
    .filter(column => column.facetType === 'enumeration')
    .map(({ name }) => {
      const selection = selectedFacets.find(facet => facet.columnName === name)
      return buildFacet(
        name!,
        countFacetValues(matchedRows.ignoringFacetSelection(name!), name!),
        selection?.concreteType ===
          'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest'
          ? selection.facetValues
          : [],
        aggregateConfig,
        noiseKeyPrefix,
      )
    })
}

function toCombinedSql(entityId: string, filters: readonly QueryFilter[]) {
  const predicates = filters.map(filterToSql).filter(Boolean)
  const where =
    predicates.length > 0 ? ` WHERE ${predicates.join(' AND ')}` : ''
  return `SELECT * FROM ${entityId}${where}`
}

// -----------------------------------------------------------------------------
// Request-scoped cohorts (design doc §5)
// -----------------------------------------------------------------------------

/** The stack default of `org.sagebionetworks.table.query.cohort.max.values`. */
export const MOCK_MAX_COHORT_VALUES = 10_000
const MAX_COHORTS_PER_QUERY = 5
const COHORT_NAME_PATTERN = /^[A-Za-z_]\w*$/
const COHORT_SQL_PATTERN = /^\s*SELECT\s+(\w+)\s+FROM\s+(syn\d+)\s*$/i

export type CohortBuilderMockQueryOptions = {
  /** Maximum number of distinct values in one cohort. Defaults to {@link MOCK_MAX_COHORT_VALUES}. */
  maxCohortValues?: number
}

type CohortReference = {
  filter: ColumnCohortFilter
  /** True when the filter, or the top-level filter containing it, is a defining condition. */
  isDefining: boolean
}

function findCohortReferences(
  filters: readonly QueryFilter[],
  isDefining = false,
): CohortReference[] {
  return filters.flatMap(filter => {
    const filterIsDefining = isDefining || filter.isDefiningCondition === true
    if (
      filter.concreteType === 'org.sagebionetworks.repo.model.table.FilterGroup'
    ) {
      return findCohortReferences(filter.children ?? [], filterIsDefining)
    }
    return filter.concreteType ===
      'org.sagebionetworks.repo.model.table.ColumnCohortFilter'
      ? [{ filter, isDefining: filterIsDefining }]
      : []
  })
}

type ParsedCohort = {
  name: string
  query: Query
  perspective: Perspective
  columnName: string
  columnType: string
  columnModels: ColumnModel[]
}

/** Validates a cohort definition's shape without running it. */
function parseCohort(
  data: CohortBuilderSyntheticData,
  cohort: CohortDefinition,
): ParsedCohort {
  const { name, query } = cohort
  if (
    (query.cohorts?.length ?? 0) > 0 ||
    findCohortReferences(query.additionalFilters ?? []).length > 0
  ) {
    throw invalidQuery(`Cohort '${name}' cannot reference other cohorts.`)
  }
  if (
    (query.sort?.length ?? 0) > 0 ||
    query.limit !== undefined ||
    query.offset !== undefined
  ) {
    throw invalidQuery(`Cohort '${name}' cannot use sort, limit or offset.`)
  }
  const sqlMatch = COHORT_SQL_PATTERN.exec(query.sql)
  if (!sqlMatch) {
    throw invalidQuery(
      `Cohort '${name}' must select exactly one plain column from a single table.`,
    )
  }
  const [, columnName, tableId] = sqlMatch
  const perspective = getPerspective(data.profile, tableId)
  const columnModels =
    getCohortBuilderColumnModels(data)[
      perspective === 'PARTICIPANTS' ? 'participants' : 'dataReferences'
    ]
  const column = columnModels.find(model => model.name === columnName)
  if (!column?.columnType || column.columnType.endsWith('_LIST')) {
    throw invalidQuery(
      `Cohort '${name}' must select a non-list column of ${tableId}: ${columnName}`,
    )
  }
  return {
    name,
    query,
    perspective,
    columnName,
    columnType: column.columnType,
    columnModels,
  }
}

/** Runs a parsed cohort query as the caller and returns the cohort's distinct values. */
function runCohortQuery(
  data: CohortBuilderSyntheticData,
  cohort: ParsedCohort,
  request: QueryBundleRequest,
  access: CohortBuilderAccess,
  maxCohortValues: number,
): Set<string> {
  const { rows } = matchRows(data, cohort.perspective, cohort.query, {
    listColumnNames: new Set(
      cohort.columnModels
        .filter(model => model.columnType?.endsWith('_LIST'))
        .map(model => model.name!),
    ),
    cohortValues: new Map(),
  })
  const values = new Set(rows.map(row => String(row[cohort.columnName])))
  if (values.size > maxCohortValues) {
    throw new MockQueryError(400, {
      concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
      reason: `Cohort '${cohort.name}' exceeds the maximum of ${maxCohortValues} values.`,
      errorCode: 'COHORT_TOO_LARGE',
    })
  }
  if (access === 'AGGREGATE_ONLY') {
    assertAboveSuppressionThreshold(
      values.size,
      getAggregateConfig(data.profile, request, access),
    )
  }
  return values
}

function assertCohortReferenceAllowed(
  data: CohortBuilderSyntheticData,
  reference: CohortReference,
  cohort: ParsedCohort,
  columnModels: readonly ColumnModel[],
  access: CohortBuilderAccess,
): void {
  const { filter, isDefining } = reference
  // A defining-condition filter is resolved against the VirtualTable's source (MATERIAL), whose columns are strings.
  const sourceColumnType =
    data.materialRows.length > 0 && filter.columnName in data.materialRows[0]
      ? 'STRING'
      : undefined
  const referencedColumnType = isDefining
    ? sourceColumnType
    : columnModels.find(model => model.name === filter.columnName)?.columnType
  if (referencedColumnType === undefined) {
    throw invalidQuery(`Column does not exist: ${filter.columnName}`)
  }
  if (referencedColumnType !== cohort.columnType) {
    throw invalidQuery(
      `The column type of cohort '${filter.cohortName}' (${cohort.columnType}) does not match ${filter.columnName} (${referencedColumnType}).`,
    )
  }
  // §5.6: a cohort from an aggregate-only source may only filter a quasi-identifier column (of a query that is itself
  // aggregate-only, which both mock VirtualTables are for this caller).
  const isQuasiIdentifier =
    filter.columnName === PARTICIPANT_ID_COLUMN_NAME ||
    data.profile.participantAttributes.some(
      attribute =>
        attribute.name === filter.columnName && attribute.isQuasiIdentifier,
    )
  if (access === 'AGGREGATE_ONLY' && !isQuasiIdentifier) {
    throw new MockQueryError(403, {
      concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
      reason: `A cohort from an aggregate-only source can only filter a quasi-identifier column, and ${filter.columnName} is not one.`,
    })
  }
}

/** Validates the query's cohorts and their references, runs each cohort query, and returns each cohort's values. */
function resolveCohorts(
  data: CohortBuilderSyntheticData,
  request: QueryBundleRequest,
  access: CohortBuilderAccess,
  columnModels: readonly ColumnModel[],
  maxCohortValues: number,
): Map<string, Set<string>> {
  const cohorts = request.query.cohorts ?? []
  const references = findCohortReferences(request.query.additionalFilters ?? [])
  if (cohorts.length > MAX_COHORTS_PER_QUERY) {
    throw invalidQuery(
      `A query can define at most ${MAX_COHORTS_PER_QUERY} cohorts.`,
    )
  }
  const names = new Set<string>()
  for (const { name } of cohorts) {
    if (!COHORT_NAME_PATTERN.test(name)) {
      throw invalidQuery(`Cohort name must be a simple identifier: ${name}`)
    }
    if (names.has(name)) {
      throw invalidQuery(`Cohort names must be unique: ${name}`)
    }
    names.add(name)
  }
  const referencedNames = new Set(
    references.map(reference => reference.filter.cohortName),
  )
  for (const name of referencedNames) {
    if (!names.has(name)) {
      throw invalidQuery(`Cohort is not defined: ${name}`)
    }
  }
  for (const name of names) {
    if (!referencedNames.has(name)) {
      throw invalidQuery(`Cohort is defined but never referenced: ${name}`)
    }
  }
  const parsed = new Map(
    cohorts.map(cohort => [cohort.name, parseCohort(data, cohort)]),
  )
  for (const reference of references) {
    assertCohortReferenceAllowed(
      data,
      reference,
      parsed.get(reference.filter.cohortName)!,
      columnModels,
      access,
    )
  }
  return new Map(
    Array.from(parsed, ([name, cohort]) => [
      name,
      runCohortQuery(data, cohort, request, access, maxCohortValues),
    ]),
  )
}

function executeQuery(
  data: CohortBuilderSyntheticData,
  request: QueryBundleRequest,
  access: CohortBuilderAccess,
  options: CohortBuilderMockQueryOptions,
): QueryResultBundle {
  const perspective = getPerspective(data.profile, request.entityId)
  const columnModels =
    getCohortBuilderColumnModels(data)[
      perspective === 'PARTICIPANTS' ? 'participants' : 'dataReferences'
    ]
  const listColumnNames = new Set(
    columnModels
      .filter(column => column.columnType?.endsWith('_LIST'))
      .map(column => column.name!),
  )
  const partMask = request.partMask ?? 0
  const { query } = request
  const aggregateConfig = getAggregateConfig(data.profile, request, access)
  assertRowsAllowed(perspective, partMask, aggregateConfig !== undefined)
  const cohortValues = resolveCohorts(
    data,
    request,
    access,
    columnModels,
    options.maxCohortValues ?? MOCK_MAX_COHORT_VALUES,
  )
  const matchedRows = matchRows(data, perspective, query, {
    listColumnNames,
    cohortValues,
  })
  assertAboveSuppressionThreshold(matchedRows.rows.length, aggregateConfig)

  const bundle: QueryResultBundle = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  }
  const selectColumns = columnModels.map(({ id, name, columnType }) => ({
    id,
    name,
    columnType,
  }))
  if (partMask & BUNDLE_MASK_QUERY_RESULTS) {
    bundle.queryResult = toQueryResult(
      request.entityId,
      columnModels,
      selectColumns,
      matchedRows.rows,
      query,
    )
  }
  if (partMask & BUNDLE_MASK_QUERY_COUNT) {
    bundle.queryCount = matchedRows.rows.length
  }
  if (partMask & BUNDLE_MASK_QUERY_SELECT_COLUMNS) {
    bundle.selectColumns = selectColumns
  }
  if (partMask & BUNDLE_MASK_QUERY_MAX_ROWS_PER_PAGE) {
    bundle.maxRowsPerPage = MOCK_MAX_ROWS_PER_PAGE
  }
  if (partMask & BUNDLE_MASK_QUERY_COLUMN_MODELS) {
    bundle.columnModels = columnModels
  }
  if (partMask & BUNDLE_MASK_QUERY_FACETS) {
    bundle.facets = buildFacets(
      columnModels,
      query,
      matchedRows,
      aggregateConfig,
    )
    bundle.facetPostProcessingApplied =
      aggregateConfig?.facetPostProcessingConfig !== undefined
  }
  if (partMask & BUNDLE_MASK_LAST_UPDATED_ON) {
    bundle.lastUpdatedOn = MOCK_LAST_UPDATED_ON
  }
  if (partMask & BUNDLE_MASK_COMBINED_SQL) {
    bundle.combinedSql = toCombinedSql(
      request.entityId,
      query.additionalFilters ?? [],
    )
  }
  return bundle
}

/**
 * Emulates a Cohort Builder 2.0 table query against synthetic data, returning
 * either a QueryResultBundle or the error the backend would return.
 */
export function runCohortBuilderMockQuery(
  data: CohortBuilderSyntheticData,
  request: QueryBundleRequest,
  access: CohortBuilderAccess,
  options: CohortBuilderMockQueryOptions = {},
): CohortBuilderMockQueryResult {
  try {
    return { status: 200, body: executeQuery(data, request, access, options) }
  } catch (error) {
    if (error instanceof MockQueryError) {
      return { status: error.status, body: error.body }
    }
    throw error
  }
}
