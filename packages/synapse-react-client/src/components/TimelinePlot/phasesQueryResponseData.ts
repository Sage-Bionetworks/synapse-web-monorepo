import { QueryResultBundle } from '@sage-bionetworks/synapse-types'

const SPECIES_COLUMN_NAME = 'species'
const OBSERVATION_PHASE_COLUMN_NAME = 'observationphase'

const hardcodedPhasesQueryResponseData: QueryResultBundle = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  queryResult: {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
    queryResults: {
      concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
      tableId: 'syn52408661',
      etag: 'a3270cb2-4373-4e12-9981-e12326e54ad1',
      headers: [
        {
          name: 'species',
          columnType: 'STRING',
          id: '152514',
        },
        {
          name: 'observationPhase',
          columnType: 'STRING',
          id: '197976',
        },
        {
          name: 'observationPhaseOrder',
          columnType: 'INTEGER',
          id: '198102',
        },
        {
          name: 'observationTimeMax',
          columnType: 'INTEGER',
          id: '198103',
        },
        {
          name: 'observationTimeUnits',
          columnType: 'STRING',
          id: '198101',
        },
      ],
      rows: [
        {
          rowId: 9,
          versionNumber: 4,
          values: ['Danio rerio', 'embryo', '1', '7', 'days'],
        },
        {
          rowId: 10,
          versionNumber: 4,
          values: ['Danio rerio', 'larval', '2', '3', 'months'],
        },
        {
          rowId: 11,
          versionNumber: 4,
          values: ['Danio rerio', 'juvenile', '3', '6', 'months'],
        },
        {
          rowId: 12,
          versionNumber: 4,
          values: ['Danio rerio', 'adult', '4', '12', 'months'],
        },
        {
          rowId: 16,
          versionNumber: 4,
          values: ['Drosophila', 'embryo', '1', '24', 'hours'],
        },
        {
          rowId: 17,
          versionNumber: 4,
          values: ['Drosophila', 'larval', '2', '5', 'days'],
        },
        {
          rowId: 18,
          versionNumber: 4,
          values: ['Drosophila', 'pupal', '3', '12', 'days'],
        },
        {
          rowId: 19,
          versionNumber: 4,
          values: ['Drosophila', 'adult', '4', '5', 'weeks'],
        },
        {
          rowId: 1,
          versionNumber: 4,
          values: ['Mus musculus', 'prenatal', '1', '21', 'days'],
        },
        {
          rowId: 2,
          versionNumber: 4,
          values: ['Mus musculus', 'postnatal', '2', '6', 'months'],
        },
        {
          rowId: 20,
          versionNumber: 4,
          values: ['Rattus norvegicus', 'prenatal', '1', '23', 'days'],
        },
        {
          rowId: 21,
          versionNumber: 4,
          values: ['Rattus norvegicus', 'neonatal', '2', '4', 'weeks'],
        },
        {
          rowId: 22,
          versionNumber: 4,
          values: ['Rattus norvegicus', 'weanling', '3', '2', 'months'],
        },
        {
          rowId: 23,
          versionNumber: 4,
          values: ['Rattus norvegicus', 'juvenile', '4', '3', 'months'],
        },
        {
          rowId: 24,
          versionNumber: 4,
          values: ['Rattus norvegicus', 'adolescent', '5', '6', 'months'],
        },
        {
          rowId: 25,
          versionNumber: 4,
          values: ['Rattus norvegicus', 'adult', '6', '12', 'months'],
        },
        {
          rowId: 13,
          versionNumber: 4,
          values: ['Saccharomyces', 'log phase', '1', '7', 'days'],
        },
        {
          rowId: 14,
          versionNumber: 4,
          values: ['Saccharomyces', 'stationary phase', '2', '2', 'weeks'],
        },
        {
          rowId: 15,
          versionNumber: 4,
          values: ['Saccharomyces', 'death phase', '3', '3', 'weeks'],
        },
        {
          rowId: 3,
          versionNumber: 4,
          values: ['Sus scrofa', 'prenatal', '1', '115', 'days'],
        },
        {
          rowId: 4,
          versionNumber: 4,
          values: ['Sus scrofa', 'neonatal', '2', '3', 'months'],
        },
        {
          rowId: 5,
          versionNumber: 4,
          values: ['Sus scrofa', 'weanling', '3', '6', 'months'],
        },
        {
          rowId: 6,
          versionNumber: 4,
          values: ['Sus scrofa', 'juvenile', '4', '12', 'months'],
        },
        {
          rowId: 7,
          versionNumber: 4,
          values: ['Sus scrofa', 'adolescent', '5', '2', 'years'],
        },
        {
          rowId: 8,
          versionNumber: 4,
          values: ['Sus scrofa', 'adult', '6', '3', 'years'],
        },
      ],
    },
  },
}

export const phaseSpeciesIndex =
  hardcodedPhasesQueryResponseData.queryResult?.queryResults.headers.findIndex(
    header => header.name.toLowerCase() === SPECIES_COLUMN_NAME,
  )!
export const phaseObservationIndex =
  hardcodedPhasesQueryResponseData.queryResult?.queryResults.headers.findIndex(
    header => header.name.toLowerCase() === OBSERVATION_PHASE_COLUMN_NAME,
  )!

export default hardcodedPhasesQueryResponseData
