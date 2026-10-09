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
import {
  ColumnMultiValueFunction,
  ColumnSingleValueFilterOperator,
  FacetColumnRequest,
  QueryBundleRequest,
  QueryFilter,
  SortItem,
} from '@sage-bionetworks/synapse-types'
import {
  DATA_REFERENCE_COLUMN_NAME,
  PARTICIPANT_COUNT_COLUMN_NAME,
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
 *   facets, no participant rows, small participant counts suppressed).
 */
export type CohortBuilderAccess = 'FULL' | 'AGGREGATE_ONLY'

export type CohortBuilderMockErrorBody =
  | ErrorResponse
  | BelowThresholdErrorResponse
  | RowSuppressionErrorResponse

export type CohortBuilderMockQueryResult =
  | { status: 200; body: QueryResultBundle }
  | { status: number; body: CohortBuilderMockErrorBody }

// The OpenAPI spec does not state which HTTP status accompanies these errors.
export const MOCK_BELOW_THRESHOLD_HTTP_STATUS = 400
export const MOCK_ROW_SUPPRESSED_HTTP_STATUS = 400

/** Sentinel the backend returns for a participant count masked by MASK_BELOW_THRESHOLD. */
export const MASKED_PARTICIPANT_COUNT = -1

const DATA_VIRTUAL_TABLE_ID_COLUMN_NAME = 'id'
const DATA_VIRTUAL_TABLE_NAME_COLUMN_NAME = 'name'
const MOCK_LAST_UPDATED_ON = '2026-10-01T00:00:00.000Z'
const MOCK_MAX_ROWS_PER_PAGE = 1000

type CellValue = string | number | readonly string[]
type VirtualTableRow = Readonly<Record<string, CellValue>>
type Perspective = 'PARTICIPANTS' | 'DATA'

/** A request as sent over the wire; `aggregateDataPreview` is not yet in the legacy types. */
export type CohortBuilderQueryBundleRequest = QueryBundleRequest & {
  aggregateDataPreview?: AggregateDataConfiguration
}

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
    column(PARTICIPANT_COUNT_COLUMN_NAME, 'INTEGER', false),
  ]
  return { participants, dataReferences }
}

// -----------------------------------------------------------------------------
// Filter evaluation
// -----------------------------------------------------------------------------

function likeToRegExp(pattern: string): RegExp {
  const escaped = pattern
    .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    .replace(/%/g, '.*')
    .replace(/_/g, '.')
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

/**
 * Evaluates a query filter against one row. `listColumnNames` identifies the
 * row's multi-value columns, which accept only HAS / HAS_LIKE.
 */
function filterMatches(
  row: VirtualTableRow | MaterialRow,
  filter: QueryFilter,
  listColumnNames: ReadonlySet<string>,
): boolean {
  switch (filter.concreteType) {
    case 'org.sagebionetworks.repo.model.table.FilterGroup': {
      const children = filter.children ?? []
      const matches =
        filter.operator === 'OR'
          ? children.some(child => filterMatches(row, child, listColumnNames))
          : children.every(child => filterMatches(row, child, listColumnNames))
      return filter.not ? !matches : matches
    }
    case 'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter': {
      if (!(filter.columnName in row)) {
        throw invalidQuery(`Column does not exist: ${filter.columnName}`)
      }
      const cell = row[filter.columnName]
      if (filter.operator === ColumnSingleValueFilterOperator.IS_NULL) {
        return Array.isArray(cell) ? cell.length === 0 : cell === ''
      }
      if (filter.operator === ColumnSingleValueFilterOperator.IS_NOT_NULL) {
        return Array.isArray(cell) ? cell.length > 0 : cell !== ''
      }
      const cellValues: readonly (string | number)[] = Array.isArray(cell)
        ? cell
        : [cell as string | number]
      return cellValues.some(value =>
        singleValueMatches(value, filter.operator, filter.values),
      )
    }
    case 'org.sagebionetworks.repo.model.table.ColumnMultiValueFunctionQueryFilter': {
      if (!listColumnNames.has(filter.columnName)) {
        throw invalidQuery(
          `${filter.function} can only be used on a multi-value (list) column: ${filter.columnName}`,
        )
      }
      const cell = row[filter.columnName] as readonly string[]
      return filter.function === ColumnMultiValueFunction.HAS_LIKE
        ? filter.values.some(pattern =>
            cell.some(value => likeToRegExp(pattern).test(value)),
          )
        : cell.some(value => filter.values.includes(value))
    }
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
      ).sort()
    }
    return participantRow
  })
}

function groupByDataReference(
  rows: readonly MaterialRow[],
  data: CohortBuilderSyntheticData,
): VirtualTableRow[] {
  const participantsByReference = new Map<string, Set<string>>()
  for (const row of rows) {
    const referenceId = row[DATA_REFERENCE_COLUMN_NAME]
    const participants = participantsByReference.get(referenceId) ?? new Set()
    participants.add(row[PARTICIPANT_ID_COLUMN_NAME])
    participantsByReference.set(referenceId, participants)
  }
  return Array.from(participantsByReference, ([referenceId, participants]) => {
    const reference = data.references.get(referenceId)!
    return {
      [DATA_VIRTUAL_TABLE_ID_COLUMN_NAME]: reference.id,
      [DATA_VIRTUAL_TABLE_NAME_COLUMN_NAME]: reference.name,
      [REFERENCE_TYPE_COLUMN_NAME]: reference.referenceType,
      [STUDY_COLUMN_NAME]: reference.study,
      ...reference.attributes,
      [PARTICIPANT_COUNT_COLUMN_NAME]: participants.size,
    }
  })
}

// -----------------------------------------------------------------------------
// Facets and post-processing
// -----------------------------------------------------------------------------

function hashString(value: string): number {
  // FNV-1a, 32-bit
  let hash = 0x811c9dc5
  for (let i = 0; i < value.length; i++) {
    hash ^= value.charCodeAt(i)
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
  return `'${value.replace(/'/g, "''")}'`
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

function executeQuery(
  data: CohortBuilderSyntheticData,
  request: CohortBuilderQueryBundleRequest,
  access: CohortBuilderAccess,
): QueryResultBundle {
  const { profile } = data
  const perspective: Perspective | undefined =
    request.entityId === profile.participantsVirtualTableId
      ? 'PARTICIPANTS'
      : request.entityId === profile.dataVirtualTableId
        ? 'DATA'
        : undefined
  if (!perspective) {
    throw new MockQueryError(404, {
      concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
      reason: `The Cohort Builder mock has no table ${request.entityId}`,
    })
  }
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
  const additionalFilters = query.additionalFilters ?? []
  const selectedFacets = query.selectedFacets ?? []
  const isAggregateOnly = access === 'AGGREGATE_ONLY'
  const aggregateConfig: AggregateDataConfiguration | undefined =
    isAggregateOnly
      ? {
          suppressionThreshold: profile.suppressionThreshold,
          countSuppressionStrategy: profile.countSuppressionStrategy,
          facetPostProcessingConfig: profile.facetPostProcessingConfig,
        }
      : request.aggregateDataPreview

  // The participant VT projects individualId, a quasi-identifier, so the
  // backend withholds its rows from aggregate-only callers during preflight.
  if (
    isAggregateOnly &&
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

  const definingFilters = additionalFilters.filter(
    filter => filter.isDefiningCondition,
  )
  const outerFilters = additionalFilters.filter(
    filter => !definingFilters.includes(filter),
  )
  const materialRows = data.materialRows.filter(row =>
    definingFilters.every(filter => filterMatches(row, filter, new Set())),
  )
  const virtualTableRows =
    perspective === 'PARTICIPANTS'
      ? groupByParticipant(materialRows, data)
      : groupByDataReference(materialRows, data)

  const applyOuterFilters = (excludedFacetColumnName?: string) =>
    virtualTableRows.filter(
      row =>
        outerFilters.every(filter =>
          filterMatches(row, filter, listColumnNames),
        ) &&
        selectedFacets.every(
          selection =>
            selection.columnName === excludedFacetColumnName ||
            facetSelectionMatches(row, selection),
        ),
    )
  let resultRows = applyOuterFilters()

  if (aggregateConfig) {
    const resultReferenceIds = new Set(
      resultRows.map(row => row[DATA_VIRTUAL_TABLE_ID_COLUMN_NAME]),
    )
    // The backend may gate the data VT on its row count instead; that is
    // unconfirmed, so the mock gates both perspectives on cohort participants.
    const cohortSize =
      perspective === 'PARTICIPANTS'
        ? resultRows.length
        : new Set(
            materialRows
              .filter(row =>
                resultReferenceIds.has(row[DATA_REFERENCE_COLUMN_NAME]),
              )
              .map(row => row[PARTICIPANT_ID_COLUMN_NAME]),
          ).size
    const threshold = aggregateConfig.suppressionThreshold
    if (cohortSize > 0 && cohortSize < threshold) {
      throw new MockQueryError(MOCK_BELOW_THRESHOLD_HTTP_STATUS, {
        concreteType:
          'org.sagebionetworks.repo.model.table.BelowThresholdErrorResponse',
        reason: `The number of matching participants is below the minimum of ${threshold}. Adjust your filters to include more participants.`,
        errorCode: 'BELOW_THRESHOLD',
        suppressionThreshold: threshold,
      })
    }
  }

  if (isAggregateOnly && perspective === 'DATA') {
    const threshold = profile.suppressionThreshold
    const isBelowThreshold = (row: VirtualTableRow) => {
      const count = row[PARTICIPANT_COUNT_COLUMN_NAME] as number
      return count > 0 && count < threshold
    }
    resultRows =
      profile.countSuppressionStrategy === 'MASK_BELOW_THRESHOLD'
        ? resultRows.map(row =>
            isBelowThreshold(row)
              ? {
                  ...row,
                  [PARTICIPANT_COUNT_COLUMN_NAME]: MASKED_PARTICIPANT_COUNT,
                }
              : row,
          )
        : resultRows.filter(row => !isBelowThreshold(row))
  }

  const bundle: QueryResultBundle = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  }
  const selectColumns = columnModels.map(({ id, name, columnType }) => ({
    id,
    name,
    columnType,
  }))
  if (partMask & BUNDLE_MASK_QUERY_RESULTS) {
    const offset = query.offset ?? 0
    const page = sortRows(resultRows, query.sort).slice(
      offset,
      offset + (query.limit ?? resultRows.length),
    )
    bundle.queryResult = {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
      queryResults: {
        concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
        tableId: request.entityId,
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
  if (partMask & BUNDLE_MASK_QUERY_COUNT) {
    bundle.queryCount = resultRows.length
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
    const noiseKeyPrefix = JSON.stringify([additionalFilters, selectedFacets])
    bundle.facets = columnModels
      .filter(column => column.facetType === 'enumeration')
      .map(({ name }) => {
        const selection = selectedFacets.find(
          facet => facet.columnName === name,
        )
        return buildFacet(
          name!,
          countFacetValues(applyOuterFilters(name), name!),
          selection?.concreteType ===
            'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest'
            ? selection.facetValues
            : [],
          aggregateConfig,
          noiseKeyPrefix,
        )
      })
    bundle.facetPostProcessingApplied =
      aggregateConfig?.facetPostProcessingConfig !== undefined
  }
  if (partMask & BUNDLE_MASK_LAST_UPDATED_ON) {
    bundle.lastUpdatedOn = MOCK_LAST_UPDATED_ON
  }
  if (partMask & BUNDLE_MASK_COMBINED_SQL) {
    const predicates = additionalFilters.map(filterToSql).filter(Boolean)
    bundle.combinedSql = `SELECT * FROM ${request.entityId}${
      predicates.length > 0 ? ` WHERE ${predicates.join(' AND ')}` : ''
    }`
  }
  return bundle
}

/**
 * Emulates a Cohort Builder 2.0 table query against synthetic data, returning
 * either a QueryResultBundle or the error the backend would return.
 */
export function runCohortBuilderMockQuery(
  data: CohortBuilderSyntheticData,
  request: CohortBuilderQueryBundleRequest,
  access: CohortBuilderAccess,
): CohortBuilderMockQueryResult {
  try {
    return { status: 200, body: executeQuery(data, request, access) }
  } catch (error) {
    if (error instanceof MockQueryError) {
      return { status: error.status, body: error.body }
    }
    throw error
  }
}
