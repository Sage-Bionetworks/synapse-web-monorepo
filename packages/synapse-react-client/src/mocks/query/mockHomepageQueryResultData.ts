import { QueryResultBundle } from '@sage-bionetworks/synapse-types'

export const mockHomepageTrendingTableId = 'syn61597084'
export const mockHomepageTrendingQueryResultBundle: QueryResultBundle = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  queryResult: {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
    queryResults: {
      concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
      tableId: mockHomepageTrendingTableId,
      etag: 'DEFAULT',
      headers: [
        {
          name: 'last_updated',
          columnType: 'DATE',
          id: '215940',
        },
        {
          name: 'PROJECT_ID',
          columnType: 'ENTITYID',
          id: '84937',
        },
        {
          name: 'N_UNIQUE_USERS',
          columnType: 'INTEGER',
          id: '215948',
        },
        {
          name: 'LAST_ACTIVITY',
          columnType: 'DATE',
          id: '215953',
        },
        {
          name: 'TOTAL_DATA_SIZE_GIB',
          columnType: 'DOUBLE',
          id: '215950',
        },
      ],
      rows: [
        {
          rowId: 1,
          versionNumber: 0,
          values: [
            '1719945678000',
            'syn2580853',
            '516',
            '1719705600000',
            '829758.5592',
          ],
        },
        {
          rowId: 2,
          versionNumber: 0,
          values: [
            '1719945678000',
            'syn51364943',
            '214',
            '1719705600000',
            '8736.523279',
          ],
        },
        {
          rowId: 3,
          versionNumber: 0,
          values: [
            '1719945678000',
            'syn3193805',
            '206',
            '1719705600000',
            '124.5026659',
          ],
        },
        {
          rowId: 4,
          versionNumber: 0,
          values: [
            '1719945678000',
            'syn51156910',
            '161',
            '1719705600000',
            '178.0276532',
          ],
        },
        {
          rowId: 5,
          versionNumber: 0,
          values: [
            '1719945678000',
            'syn53708249',
            '156',
            '1719705600000',
            '213.1385169',
          ],
        },
        {
          rowId: 6,
          versionNumber: 0,
          values: [
            '1719945678000',
            'syn7222066',
            '122',
            '1719705600000',
            '22.81682772',
          ],
        },
        {
          rowId: 7,
          versionNumber: 0,
          values: [
            '1719945678000',
            'syn26451327',
            '64',
            '1719705600000',
            '0.01012620237',
          ],
        },
        {
          rowId: 8,
          versionNumber: 0,
          values: [
            '1719945678000',
            'syn26710600',
            '57',
            '1719705600000',
            '24149.56074',
          ],
        },
        {
          rowId: 9,
          versionNumber: 0,
          values: [
            '1719945678000',
            'syn4921369',
            '55',
            '1719705600000',
            '281850.5702',
          ],
        },
        {
          rowId: 10,
          versionNumber: 0,
          values: [
            '1719945678000',
            'syn51761394',
            '47',
            '1719705600000',
            '2059.131812',
          ],
        },
      ],
    },
  },
}

export const mockHomepageGeneralStatsTableId = 'syn61588163'
export const mockHomepageGeneralStatsQueryResultBundle: QueryResultBundle = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  queryResult: {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
    queryResults: {
      concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
      tableId: mockHomepageGeneralStatsTableId,
      etag: 'DEFAULT',
      headers: [
        {
          name: 'last_updated',
          columnType: 'DATE',
          id: '215940',
        },
        {
          name: 'total_data_size_in_pib',
          columnType: 'DOUBLE',
          id: '215937',
        },
        {
          name: 'active_users_last_month',
          columnType: 'INTEGER',
          id: '215941',
        },
        {
          name: 'total_downloads_last_month',
          columnType: 'INTEGER',
          id: '215942',
        },
      ],
      rows: [
        {
          rowId: 1,
          versionNumber: 0,
          values: ['1719902813000', '3.219719125', '5655', '5089860'],
        },
      ],
    },
  },
}

export const mockHomepageSynapseInActionTableId = 'syn61670075'
export const mockHomepageSynapseInActionQueryResultBundle: QueryResultBundle = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  queryResult: {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
    queryResults: {
      concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
      tableId: 'syn61670075',
      etag: '1c1c44ef-5c81-45ff-96d9-12aa16848025',
      headers: [
        {
          name: 'friendlyName',
          columnType: 'STRING',
          id: '188120',
        },
        {
          name: 'title',
          columnType: 'STRING',
          id: '117361',
        },
        {
          name: 'description',
          columnType: 'STRING',
          id: '216102',
        },
        {
          name: 'tags',
          columnType: 'STRING_LIST',
          id: '216103',
        },
        {
          name: 'image',
          columnType: 'FILEHANDLEID',
          id: '127219',
        },
        {
          name: 'logo',
          columnType: 'FILEHANDLEID',
          id: '132752',
        },
      ],
      rows: [
        {
          rowId: 1,
          versionNumber: 6,
          values: [
            'BSMN Portal',
            'Advancing mental health and development',
            'Exploring genetic changes in the brain is key to understanding neuropsychiatric conditions We provide in-depth sequencing datasets and computational tools to find new interventions for Bipolar Disorder, Schizophrenia, and Autism Spectrum Disorder.',
            '["Schizophrenia", "Autism"]',
            '144330224',
            '144330422',
          ],
        },
        {
          rowId: 2,
          versionNumber: 6,
          values: [
            'AD Knowledge Portal',
            'Halting Neurodegeneration',
            'Growing datasets, and the connections between them, offer fresh hope in the treatment of Alzheimer’s disease and related dementias. The AD Knowledge Portal is a one-of-a-kind community platform for insights into the aging brain. The portal is helping researchers to identify new biomarkers and drug targets for Alzheimer’s, as well as better ways to understand patient symptoms.',
            '["Alzheimer’s Disease"]',
            '144330219',
            '144330430',
          ],
        },
        {
          rowId: 3,
          versionNumber: 6,
          values: [
            'NF Portal',
            'Solving the mystery of rare diseases',
            'Understudied conditions like neurofibromatosis (NF) and schwannomatosis have little to no treatment options. We offer a hub for research tools, experimental data, and community initiatives that can generate breakthroughs.',
            '["Neurofibromatosis"]',
            '144330210',
            '144330440',
          ],
        },
      ],
    },
  },
}
