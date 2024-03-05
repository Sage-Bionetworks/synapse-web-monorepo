import { Meta, StoryObj } from '@storybook/react'
import { getEntityHandlers } from '../../mocks/msw/handlers/entityHandlers'
import { getHandlersForTableQuery } from '../../mocks/msw/handlers/tableQueryHandlers'
import { getUserProfileHandlers } from '../../mocks/msw/handlers/userProfileHandlers'
import {
  mockCurrentReleaseCardsQueryResultBundle,
  mockPreviousReleaseCardsQueryResultBundle,
} from '../../mocks/query/mockReleaseCardsTableQueryResultBundle'
import {
  DATASET,
  FUNDER,
  GENERIC_CARD,
  OBSERVATION_CARD,
  PUBLICATION,
  RELEASE_CARD,
} from '../../utils/SynapseConstants'
import CardContainerLogic from './index'
import { MOCK_REPO_ORIGIN } from '../../utils/functions/getEndpoint'
import { GenericCardSchema } from '../GenericCard'
import { StatConfig } from '../ReleaseCard'
import { MOCK_RELEASE_CARDS_TABLE_ID } from '../../mocks/entity/mockReleaseCardsTable'

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
    type: GENERIC_CARD,
    genericCardSchema: {
      type: PUBLICATION,
      title: 'title',
      description: 'abstract',
      subTitle: 'authors',
      secondaryLabels: ['year', 'journal', 'study', 'grants', 'DOI'],
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
    type: GENERIC_CARD,
    genericCardSchema: {
      type: PUBLICATION,
      title: 'title',
      description: 'abstract',
      subTitle: 'authors',
      secondaryLabels: ['year', 'journal', 'study', 'grants', 'DOI'],
    },
  },
}

export const ObservationCard: Story = {
  args: {
    sql: `SELECT * FROM syn51735464`,
    type: OBSERVATION_CARD,
    limit: 3,
  },
}

export const FunderCard: Story = {
  args: {
    sql: `SELECT * FROM syn16858699`,
    type: FUNDER,
    limit: 3,
  },
}

export const DatasetCard: Story = {
  args: {
    sql: `SELECT * FROM syn16859580`,
    type: DATASET,
    limit: 3,
  },
}

const publicationSchema: GenericCardSchema = {
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
    type: GENERIC_CARD,
    genericCardSchema: publicationSchema,
  },
}

const statsConfig: StatConfig[] = [
  { columnName: 'countPatients', label: 'Patients' },
  { columnName: 'countSamples', label: 'Samples' },
]

const currentReleaseCardSql = `SELECT * FROM ${MOCK_RELEASE_CARDS_TABLE_ID} WHERE isCurrentRelease = true`

export const ReleaseCardLargeMock: Story = {
  args: {
    sql: currentReleaseCardSql,
    type: RELEASE_CARD,
    limit: 3,
    releaseCardConfig: {
      cardSize: 'large',
      prependRelease: false,
      statsConfig: statsConfig,
      buttonToExplorePageConfig: {
        label: 'Explore Current Data Release',
        sourcePathColumnName: 'releaseExplorePath',
        exploreDataSql: currentReleaseCardSql, // generally this would refer to a different table, not the source table
        exploreDataFacetColumnName: 'releaseType',
        sourceDataFacetValueColumnName: 'releaseType',
      },
      dataGuidePath: 'data guide',
    },
  },
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
        ...getHandlersForTableQuery(
          mockCurrentReleaseCardsQueryResultBundle,
          MOCK_REPO_ORIGIN,
        ),
      ],
    },
  },
}

export const ReleaseCardMediumMock: Story = {
  args: {
    sql: `SELECT * FROM ${MOCK_RELEASE_CARDS_TABLE_ID} WHERE isCurrentRelease = false`,
    type: RELEASE_CARD,
    initialLimit: 5,
    releaseCardConfig: {
      cardSize: 'medium',
      requestAccessPath: 'data access',
      statsConfig: statsConfig,
    },
  },
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
        ...getHandlersForTableQuery(
          mockPreviousReleaseCardsQueryResultBundle,
          MOCK_REPO_ORIGIN,
        ),
      ],
    },
  },
}
