import { Meta, StoryObj } from '@storybook/react'
import CardDeck from './CardDeck'

const meta = {
  title: 'Home Page/CardDeck',
  component: CardDeck,
  parameters: {
    chromatic: { viewports: [600, 1200] },
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const CardDeckDemo: Story = {
  args: {
    entityId: 'syn64943600',
    rgbIndex: 1,
    titleColumnName: 'title',
    descriptionColumnName: 'description',
    ctaButtonTextColumnName: 'ctaButtonText',
    ctaButtonURLColumnName: 'ctaButtonURL',
    titleIconFileHandleColumnName: 'icon',
    headerImageFileHandleColumnName: 'headerImage',
    linkConfig: {
      isMarkdown: false,
      baseURL: 'Explore/CardDeck/DetailsPage',
      URLColumnName: 'title',
      matchColumnName: 'title',
    },
  },
}
