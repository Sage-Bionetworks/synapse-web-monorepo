import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import { registerTableQueryResult } from '../msw/handlers/tableQueryService'
import {
  featuredDatasetsTable,
  generalStatsMetricsTable,
  past30DaysDownloadMetricsTable,
  searchAutocompleteTable,
  synapseInActionTable,
} from '../../components/SynapseHomepageV2/SynapseHomepageV2'

export const mockHomepageTrendingQueryResultBundle: QueryResultBundle = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  queryResult: {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
    queryResults: {
      concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
      tableId: 'syn61597084',
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

export const mockHomepageGeneralStatsQueryResultBundle: QueryResultBundle = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  queryResult: {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
    queryResults: {
      concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
      tableId: 'syn61588163',
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

// id syn61609402
export const mockHomepageFeaturedDatasetsQueryResultBundle: QueryResultBundle =
  {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
    queryResult: {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
      queryResults: {
        concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
        tableId: 'syn61609402',
        etag: 'e8d57a89-5545-433e-9a29-0d70cf79b458',
        headers: [
          {
            name: 'id',
            columnType: 'ENTITYID',
            id: '81721',
          },
          {
            name: 'isFeatured',
            columnType: 'BOOLEAN',
            id: '121541',
          },
          {
            name: 'community',
            columnType: 'STRING',
            id: '216210',
          },
          {
            name: 'name',
            columnType: 'STRING',
            id: '85359',
          },
          {
            name: 'description',
            columnType: 'MEDIUMTEXT',
            id: '194033',
          },
          {
            name: 'contributors',
            columnType: 'STRING',
            id: '216211',
          },
          {
            name: 'keywords',
            columnType: 'STRING_LIST',
            id: '116273',
          },
          {
            name: 'individuals',
            columnType: 'STRING',
            id: '216212',
          },
          {
            name: 'image',
            columnType: 'FILEHANDLEID',
            id: '127219',
          },
          {
            name: 'size',
            columnType: 'DOUBLE',
            id: '111683',
          },
          {
            name: 'sizeUnit',
            columnType: 'STRING',
            id: '216213',
          },
          {
            name: 'dimensions',
            columnType: 'STRING',
            id: '216214',
          },
        ],
        rows: [
          {
            rowId: 3,
            versionNumber: 24,
            values: [
              'syn52623570',
              'true',
              'Arthritis and Autoimmune and Related Diseases',
              'AMP RA/SLE Phase II Single Cell CyTOF PBMC Profiling Data',
              'This dataset includes single cell CyTOF data from the AMP RA/SLE Phase II study, profiling PBMCs across five panels (B cell, T cell, Myeloid, NK cell, and Granulocyte) from individuals with autoimmune conditions and controls. ',
              'Accelerating Medicines Partnership',
              '["Rheumatoid Arthritis", "Systemic Lupus Erythematosus"]',
              '331',
              null,
              '353',
              'GB',
              null,
            ],
          },
          {
            rowId: 4,
            versionNumber: 24,
            values: [
              'syn53132831',
              'true',
              'Neurofibromatosis',
              'Whole exome sequencing of Johns Hopkins NF1 Biospecimen Repository cohort',
              'Whole exome sequencing of 68 patients, with seven labeled primary tumor types and control samples.',
              'Johns Hopkins Medical Institute',
              '["preclinical therapeutics", "rare disease"]',
              '68',
              null,
              '1.16',
              'TB',
              null,
            ],
          },
          {
            rowId: 6,
            versionNumber: 24,
            values: [
              'syn55234548',
              'true',
              'GENIE',
              'GENIE Release 15.1-public',
              'Latest release of the data within GENIE shared with the global research community. The database currently contains CLIA-/ISO-certified genomic data obtained during the course of routine practice at multiple international institutions',
              'AACR Project GENIE',
              '["real-world data", "clinical-grade"]',
              '171957',
              null,
              '1.8',
              'GB',
              null,
            ],
          },
          {
            rowId: 13,
            versionNumber: 25,
            values: [
              'syn51732482',
              'true',
              "Alzheimer's Disease",
              "The Accelerating Medicines Partnership Alzheimer's Disease Diverse Cohorts Study",
              'This study provides post-mortem whole genome sequencing and brain bulk RNA sequencing data from over 850 individuals, including 288 Black or African American individuals and 330 Hispanic individuals representing the spectrum of Alzheimer’s Disease phenotypes.',
              'AMP-AD Consortium',
              '["Alzheimer’s Disease", "genomics", "diversity"]',
              null,
              null,
              null,
              null,
              null,
            ],
          },
          {
            rowId: 14,
            versionNumber: 26,
            values: [
              'syn4993293',
              'true',
              'Digital Health',
              'mPower Mobile Parkinson Disease Study',
              'mPower is a large, longitudinal study which piloted new approaches to monitoring key indicators of Parkinson disease progression and diagnosis incorporating traditional behavioral symptom measurements along with novel metrics gleaned from sensor-rich mobile devices.',
              'Sage Bionetworks',
              '["neurology", "Parkinson\'s"]',
              '8320',
              null,
              null,
              null,
              null,
            ],
          },
        ],
      },
    },
  }

//id syn61670515
export const mockHomepageSearchAutocompleteQueryResultBundle: QueryResultBundle =
  {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
    queryResult: {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
      queryResults: {
        concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
        tableId: 'syn61670515',
        etag: 'DEFAULT',
        headers: [
          {
            name: 'last_updated',
            columnType: 'DATE',
            id: '215940',
          },
          {
            name: 'top_searched',
            columnType: 'STRING',
            id: '216105',
          },
        ],
        rows: [
          {
            rowId: 1,
            versionNumber: 0,
            values: ['1720470893000', 'rosmap'],
          },
          {
            rowId: 2,
            versionNumber: 0,
            values: ['1720470893000', 'brats'],
          },
          {
            rowId: 3,
            versionNumber: 0,
            values: ['1720470893000', 'genie'],
          },
          {
            rowId: 4,
            versionNumber: 0,
            values: ['1720470893000', 'htan'],
          },
          {
            rowId: 5,
            versionNumber: 0,
            values: ['1720470893000', 'alzheimer'],
          },
          {
            rowId: 6,
            versionNumber: 0,
            values: ['1720470893000', 'ukb'],
          },
          {
            rowId: 7,
            versionNumber: 0,
            values: ['1720470893000', 'amp-ad'],
          },
          {
            rowId: 8,
            versionNumber: 0,
            values: ['1720470893000', 'msbb'],
          },
          {
            rowId: 9,
            versionNumber: 0,
            values: ['1720470893000', 'mpower'],
          },
          {
            rowId: 10,
            versionNumber: 0,
            values: ['1720470893000', 'parkinson'],
          },
        ],
      },
    },
  }

export function registerSynapseHomepageMockQueries() {
  registerTableQueryResult(
    {
      sql: `SELECT *
            FROM ${past30DaysDownloadMetricsTable}`,
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
      sql: `SELECT *
            FROM ${generalStatsMetricsTable}`,
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
      sql: `SELECT *
            FROM ${synapseInActionTable}`,
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
      sql: `SELECT *
            FROM ${featuredDatasetsTable}`,
      sort: [],
    },
    mockHomepageFeaturedDatasetsQueryResultBundle,
  )
  registerTableQueryResult(
    {
      sql: `SELECT *
            FROM ${searchAutocompleteTable}`,
    },
    mockHomepageSearchAutocompleteQueryResultBundle,
  )
}
