import {
  featuredDatasetsTable,
  generalStatsMetricsTable,
  past30DaysDownloadMetricsTable,
  searchAutocompleteTable,
  synapseInActionTable,
} from '../../components/SynapseHomepageV2/SynapseHomepageV2'
import {
  mockHomepageFeaturedDatasetsQueryResultBundle,
  mockHomepageGeneralStatsQueryResultBundle,
  mockHomepageSearchAutocompleteQueryResultBundle,
  mockHomepageSynapseInActionQueryResultBundle,
  mockHomepageTrendingQueryResultBundle,
} from '../query/mockHomepageQueryResultData'
import { registerTableQueryResult } from '../msw/handlers/tableQueryService'

export function registerSynapseHomepageMockQueries() {
  registerTableQueryResult(
    {
      sql: `SELECT * FROM ${past30DaysDownloadMetricsTable}`,
      sort: [
        {
          column: 'last_updated',
          direction: 'DESC',
        },
        {
          column: 'N_UNIQUE_USERS',
          direction: 'DESC',
        },
      ],
    },
    mockHomepageTrendingQueryResultBundle,
  )
  registerTableQueryResult(
    {
      sql: `SELECT * FROM ${generalStatsMetricsTable}`,
      sort: [
        {
          column: 'last_updated',
          direction: 'DESC',
        },
      ],
    },
    mockHomepageGeneralStatsQueryResultBundle,
  )
  registerTableQueryResult(
    {
      sql: `SELECT * FROM ${synapseInActionTable}`,
      sort: [
        {
          column: 'order',
          direction: 'ASC',
        },
      ],
    },
    mockHomepageSynapseInActionQueryResultBundle,
  )
  registerTableQueryResult(
    {
      sql: `SELECT * FROM ${featuredDatasetsTable}`,
      sort: [],
    },
    mockHomepageFeaturedDatasetsQueryResultBundle,
  )
  registerTableQueryResult(
    {
      sql: `SELECT * FROM ${searchAutocompleteTable}`,
    },
    mockHomepageSearchAutocompleteQueryResultBundle,
  )
}
