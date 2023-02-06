import { Meta, StoryObj } from '@storybook/react'
import {
  GENERIC_CARD,
  OBSERVATION_CARD,
  PUBLICATION,
} from '../src/lib/utils/SynapseConstants'
import CardContainerLogic from '../src/lib/containers/CardContainerLogic'

const meta = {
  title: 'Explore/CardContainerLogic',
  component: CardContainerLogic,
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const GenericCard: Story = {
  args: {
    sql: 'SELECT * FROM syn22095937.4 order by authors asc',
    limit: 2,
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
    sql: `SELECT "Observation Submitter Name" as "submitterName", Synapse_id as "submitterUserId", "Observation Time" as "time", "Observation Time Units" as "timeUnits", "Observation Text" as "text", "Observation Type" as "tag" FROM syn26344832 WHERE "Observation Time" IS NOT NULL`,
    type: OBSERVATION_CARD,
    limit: 3,
  },
}
