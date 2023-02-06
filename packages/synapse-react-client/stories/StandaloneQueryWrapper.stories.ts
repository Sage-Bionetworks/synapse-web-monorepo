import { Meta, StoryObj } from '@storybook/react'
import StandaloneQueryWrapper from '../src/lib/containers/table/StandaloneQueryWrapper'

const meta = {
  title: 'Explore/StandaloneQueryWrapper',
  component: StandaloneQueryWrapper,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const WithoutTopLevelControls: Story = {
  args: {
    title: 'Data Files',
    sql: `SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10`,
    columnLinks: [
      {
        matchColumnName: 'studyOrProject',
        isMarkdown: true,
      },
    ],
  },
}

export const WithColumnAlias: Story = {
  args: {
    title: 'With column alias',
    sql: `SELECT count(ownerID) as Sagers FROM syn23564971 WHERE institution has ('Sage Bionetworks')`,
  },
}

export const TopLevelControls: Story = {
  args: {
    title: 'Data Files',
    name: 'Top Level Controls demo',
    hideDownload: false,
    sql: `SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10`,
    showTopLevelControls: true,
  },
}
