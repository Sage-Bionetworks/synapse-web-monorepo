import { QueryResultBundle } from '@sage-bionetworks/synapse-types'

const syn51735464GroupBySpecies: QueryResultBundle = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  queryResult: {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
    queryResults: {
      concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
      tableId: 'syn51735464',
      etag: 'DEFAULT',
      headers: [
        {
          name: 'species',
          columnType: 'STRING',
        },
      ],
      rows: [
        {
          values: ['Mus musculus'],
        },
        {
          values: ['Rattus norvegicus'],
        },
        {
          values: ['Saccharomyces'],
        },
      ],
    },
  },
}

export default syn51735464GroupBySpecies
