import {
  ColumnSingleValueFilterOperator,
  FacetColumnRequest,
  Query,
  QueryFilter,
} from '@sage-bionetworks/synapse-types'
import { buildCohortHandOff } from './cohortHandOff'

const participantsTableId = 'syn90000001'
const raceFilter: QueryFilter = {
  concreteType: 'org.sagebionetworks.repo.model.table.FilterGroup',
  operator: 'AND',
  children: [
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
      columnName: 'race',
      operator: ColumnSingleValueFilterOperator.IN,
      values: ['Asian'],
    },
  ],
}
const sexFacet: FacetColumnRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
  columnName: 'sex',
  facetValues: ['Female'],
}

describe('buildCohortHandOff', () => {
  it("carries the participant query's filters and facets into cohort c1, referenced by a defining-condition filter, without sort, limit or offset", () => {
    const participantQuery: Query = {
      sql: `SELECT * FROM ${participantsTableId}`,
      additionalFilters: [raceFilter],
      selectedFacets: [sexFacet],
      sort: [{ column: 'race', direction: 'ASC' }],
      limit: 25,
      offset: 50,
    }

    expect(buildCohortHandOff(participantQuery, participantsTableId)).toEqual({
      cohort: {
        name: 'c1',
        query: {
          sql: `SELECT individualId FROM ${participantsTableId}`,
          additionalFilters: [raceFilter],
          selectedFacets: [sexFacet],
        },
      },
      filter: {
        concreteType: 'org.sagebionetworks.repo.model.table.ColumnCohortFilter',
        columnName: 'individualId',
        cohortName: 'c1',
        isDefiningCondition: true,
      },
    })
  })

  it.each<[string, Query]>([
    ['no filters or facets', { sql: `SELECT * FROM ${participantsTableId}` }],
    [
      'empty filters and facets',
      {
        sql: `SELECT * FROM ${participantsTableId}`,
        additionalFilters: [],
        selectedFacets: [],
      },
    ],
  ])(
    'returns no cohort when the participant query has %s (every participant)',
    (_case, participantQuery) => {
      expect(
        buildCohortHandOff(participantQuery, participantsTableId),
      ).toBeUndefined()
    },
  )
})
