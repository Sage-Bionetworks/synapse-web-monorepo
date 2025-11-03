import { MOCK_RELEASE_CARDS_TABLE_ID } from '@/mocks/entity/mockReleaseCardsTable'
import { getEntityHandlers } from '@/mocks/msw/handlers/entityHandlers'
import { getHandlersForTableQuery } from '@/mocks/msw/handlers/tableQueryHandlers'
import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { getUserProfileHandlers } from '@/mocks/msw/handlers/userProfileHandlers'
import {
  mockCurrentReleaseCardsQueryResultBundle,
  mockPreviousReleaseCardsQueryResultBundle,
} from '@/mocks/query/mockReleaseCardsTableQueryResultBundle'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import {
  DATASET,
  FUNDER,
  GENERIC_CARD,
  OBSERVATION_CARD,
  PUBLICATION,
  RELEASE_CARD,
} from '@/utils/SynapseConstants'
import { Meta, StoryObj } from '@storybook/react-vite'
import { TableToGenericCardMapping } from '../GenericCard/TableRowGenericCard'
import { StatConfig } from '../ReleaseCard'
import {
  ReleaseMetadataConfig,
  SelectedFacetConfig,
} from '../ReleaseCard/ReleaseCardTypes'
import CardContainerLogic from './index'

const meta = {
  title: 'Explore/CardContainerLogic',
  component: CardContainerLogic,
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const GenericCard: Story = {
  args: {
    sql: 'SELECT * FROM syn22095937.4 order by authors asc',
    initialLimit: 2,
    limit: 5,
    cardConfiguration: {
      type: GENERIC_CARD,
      genericCardSchema: {
        type: PUBLICATION,
        title: 'title',
        description: 'abstract',
        subTitle: 'authors',
        secondaryLabels: ['year', 'journal', 'study', 'grants', 'DOI'],
      },
    },
    sortConfig: {
      defaultColumn: 'authors',
      defaultDirection: 'ASC',
      sortableColumns: ['authors', 'title', 'createdOn', 'journal'],
    },
  },
}

export const EmptyResults: Story = {
  args: {
    sql: "SELECT * FROM syn22095937.4 WHERE study='not a study value'",
    cardConfiguration: {
      type: GENERIC_CARD,
      genericCardSchema: {
        type: PUBLICATION,
        title: 'title',
        description: 'abstract',
        subTitle: 'authors',
        secondaryLabels: ['year', 'journal', 'study', 'grants', 'DOI'],
      },
    },
  },
}

export const ObservationCard: Story = {
  args: {
    sql: `SELECT * FROM syn51735464`,
    cardConfiguration: { type: OBSERVATION_CARD },
    limit: 3,
  },
}

export const FunderCard: Story = {
  args: {
    sql: `SELECT * FROM syn16858699`,
    cardConfiguration: { type: FUNDER },
    limit: 3,
  },
}

export const DatasetCard: Story = {
  args: {
    sql: `SELECT * FROM syn16859580`,
    cardConfiguration: { type: DATASET },
    limit: 3,
  },
}

const publicationSchema: TableToGenericCardMapping = {
  type: PUBLICATION,
  title: 'publicationTitle',
  subTitle: 'authors',
  secondaryLabels: [
    'pubMedLink',
    'journal',
    'publicationYear',
    'theme',
    'tumorType',
    'tissue',
    'assay',
    'keywords',
    'doi',
    'consortium',
  ],
}
export const PublicationCard: Story = {
  args: {
    sql: `SELECT * FROM syn21868591 WHERE ( ( "grantNumber" HAS ( 'CA209988' ) ) )`,
    cardConfiguration: {
      type: GENERIC_CARD,
      genericCardSchema: publicationSchema,
    },
  },
}

const genieSelectedFacetConfigs: SelectedFacetConfig[] = [
  {
    destinationTableColumnName: 'cohort',
    sourceTableColumnName: 'Cohort',
  },
  {
    destinationTableColumnName: 'version',
    sourceTableColumnName: 'version',
  },
]

export const ReleaseCardLarge: Story = {
  args: {
    sql: "select * from syn54338474 where IsCurrentVersion = 'TRUE' order by ReleaseDate desc",
    limit: 3,
    cardConfiguration: {
      type: RELEASE_CARD,
      releaseCardConfig: {
        cardSize: 'large',
        prependRelease: false,
        releaseMetadataConfig: {
          releaseDateColumnName: 'ReleaseDate',
          releaseEntityIdColumnName: 'id',
          releaseNameColumnName: 'nameReleaseCard',
        },
        statsConfig: [
          { columnName: 'Patients', label: 'Patients' },
          { columnName: 'Samples', label: 'Samples' },
        ],
        primaryBtnConfig: {
          label: 'Explore Data Release',
          sourceTablePathColumnName: 'releaseExplorePath',
          sourceTableSqlColumnName: 'exploreDataSql',
          selectedFacetConfigs: genieSelectedFacetConfigs,
        },
        secondaryBtnConfig: {
          label: 'View Data Guide',
          sourceTablePathColumnName: 'releaseExplorePath',
          sourceTableSqlColumnName: 'exploreDataSql',
          selectedFacetConfigs: genieSelectedFacetConfigs,
          staticSelectedFacets: [
            {
              facet: 'dataType',
              facetValue: 'data_guide',
            },
          ],
        },
      },
    },
  },
}

const releaseMetadataConfig: ReleaseMetadataConfig = {
  releaseDateColumnName: 'releaseDate',
  releaseEntityIdColumnName: 'releaseEntityId',
  releaseNameColumnName: 'releaseName',
}

const statsConfig: StatConfig[] = [
  { columnName: 'countPatients', label: 'Patients' },
  { columnName: 'countSamples', label: 'Samples' },
]

const selectedFacetConfigs: SelectedFacetConfig[] = [
  {
    destinationTableColumnName: 'releaseType',
    sourceTableColumnName: 'releaseType',
  },
  {
    destinationTableColumnName: 'version',
    sourceTableColumnName: 'version',
  },
]

const currentReleaseCardSql = `SELECT * FROM ${MOCK_RELEASE_CARDS_TABLE_ID} WHERE isCurrentRelease = true`

export const ReleaseCardLargeMock: Story = {
  args: {
    sql: currentReleaseCardSql,
    limit: 3,
    cardConfiguration: {
      type: RELEASE_CARD,
      releaseCardConfig: {
        cardSize: 'large',
        prependRelease: false,
        releaseMetadataConfig: releaseMetadataConfig,
        statsConfig: statsConfig,
        primaryBtnConfig: {
          label: 'Explore Current Data Release',
          sourceTablePathColumnName: 'releaseExplorePath',
          sourceTableSqlColumnName: 'exploreDataSql',
          selectedFacetConfigs: selectedFacetConfigs,
        },
        secondaryBtnConfig: {
          label: 'View Data Guide',
          sourceTablePathColumnName: 'releaseExplorePath',
          sourceTableSqlColumnName: 'exploreDataSql',
          selectedFacetConfigs: selectedFacetConfigs,
          staticSelectedFacets: [
            {
              facet: 'dataType',
              facetValue: 'data_guide',
            },
          ],
        },
      },
    },
  },
  loaders: [
    () =>
      registerTableQueryResult(
        { sql: currentReleaseCardSql },
        mockCurrentReleaseCardsQueryResultBundle,
      ),
  ],
  parameters: {
    stack: 'mock',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/BI4y33EHA95onN8DourTNZ/Two-Projects?type=design&node-id=195-13615&mode=design&t=76oHvfvp9FWFtDSR-4',
    },
    msw: {
      handlers: [
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
        ...getEntityHandlers(MOCK_REPO_ORIGIN),
        ...getHandlersForTableQuery(MOCK_REPO_ORIGIN),
      ],
    },
  },
}

export const ReleaseCardMediumMock: Story = {
  args: {
    sql: `SELECT * FROM ${MOCK_RELEASE_CARDS_TABLE_ID} WHERE isCurrentRelease = false`,
    initialLimit: 5,
    cardConfiguration: {
      type: RELEASE_CARD,
      releaseCardConfig: {
        cardSize: 'medium',
        requestAccessPath: 'data access',
        releaseMetadataConfig: releaseMetadataConfig,
        statsConfig: statsConfig,
      },
    },
  },
  loaders: [
    () => {
      registerTableQueryResult(
        {
          sql: `SELECT * FROM ${MOCK_RELEASE_CARDS_TABLE_ID} WHERE isCurrentRelease = false`,
        },
        mockPreviousReleaseCardsQueryResultBundle,
      )
    },
  ],
  parameters: {
    stack: 'mock',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/BI4y33EHA95onN8DourTNZ/Two-Projects?type=design&node-id=259-14622&mode=design&t=76oHvfvp9FWFtDSR-4',
    },
    msw: {
      handlers: [
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
        ...getEntityHandlers(MOCK_REPO_ORIGIN),
        ...getHandlersForTableQuery(MOCK_REPO_ORIGIN),
      ],
    },
  },
}
