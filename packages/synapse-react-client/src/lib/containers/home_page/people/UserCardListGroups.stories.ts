import { Meta, StoryObj } from '@storybook/react'
import UserCardListGroups from './UserCardListGroups'
import { MEDIUM_USER_CARD } from '../../../utils/SynapseConstants'

const meta = {
  title: 'Home Page/UserCardListGroups',
  component: UserCardListGroups,
} satisfies Meta<typeof UserCardListGroups>

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    sql: "SELECT * FROM syn21781196 WHERE isFeatured='true'",
    columnName: 'Project Title',
    facetValues: [
      'Somatic Mosaicism in the brain of Tourette syndrome',
      'Somatic Mosaicism in Schizophrenia and Control Brains',
      '1/3-Schizophrenia Genetics and Brain Somatic Mosaicism',
      '2/3-Schizophrenia Genetics and Brain Somatic Mosaicism',
      'Role of brain somatic mosaicism in autism, schizophrenia, and bipolar disorder',
      'Mosaicism in focal cortical dysplasias spectrum seen in neuropsychiatric disease',
      '1/2-Somatic mosaicism and autism spectrum disorder',
      '2/2-Somatic mosaicism and autism spectrum disorder',
      '3/3-Schizophrenia Genetics and Brain Somatic Mosaicism',
    ],
    size: MEDIUM_USER_CARD,
    useQueryResultUserData: false,
    summaryLinkText: 'EXPLORE ALL PEOPLE',
    summaryLink: '/Explore/People',
    count: 6,
  },
}
