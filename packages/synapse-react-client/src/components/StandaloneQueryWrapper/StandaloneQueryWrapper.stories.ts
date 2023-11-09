import { Meta, StoryObj } from '@storybook/react'
import StandaloneQueryWrapper from './StandaloneQueryWrapper'

const meta = {
  title: 'Explore/StandaloneQueryWrapper',
  component: StandaloneQueryWrapper,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const WithoutTopLevelControls: Story = {
  args: {
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
    sql: `SELECT count(ownerID) as Sagers FROM syn23564971 WHERE institution has ('Sage Bionetworks')`,
  },
}

export const TopLevelControls: Story = {
  args: {
    name: 'Top Level Controls demo',
    hideDownload: false,
    sql: `SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10`,
    showTopLevelControls: true,
  },
}

export const ImagePreviewsDemo: Story = {
  args: {
    name: 'Entity column image preview demo',
    hideDownload: false,
    sql: 'SELECT * FROM syn52743383',
    showTopLevelControls: true,
    columnLinks: [
      {
        matchColumnName: 'fuse_mask',
        isEntityImage: true,
      },
    ],
  },
}
