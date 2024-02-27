import { Meta, StoryObj } from '@storybook/react'
import {
  DATASET,
  FUNDER,
  GENERIC_CARD,
  OBSERVATION_CARD,
  PUBLICATION,
} from '../../utils/SynapseConstants'
import CardContainerLogic from './index'
import { GenericCardSchema } from '../GenericCard'

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
