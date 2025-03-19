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

export const CCPKResourcesDemo: Story = {
  args: {
    entityId: 'syn64943600',
    rgbIndex: 1,
    titleColumnName: 'title',
    descriptionColumnName: 'description',
    ctaButtonTextColumnName: 'ctaButtonText',
    ctaButtonURLColumnName: 'ctaButtonURL',
    titleIconFileHandleColumnName: 'icon',
    headerImageFileHandleColumnName: 'headerImage',
    cardDeckType: 'cckp',
    linkConfig: {
      isMarkdown: false,
      baseURL: 'Explore/CardDeck/DetailsPage',
      URLColumnName: 'title',
      matchColumnName: 'title',
    },
  },
}

export const ProgramsDemo: Story = {
  args: {
    entityId: 'syn17024173',
    rgbIndex: 1,
    titleColumnName: 'Program',
    descriptionColumnName: 'Short Description',
    ctaButtonTextColumnName: 'ctaButtonText',
    ctaButtonURLColumnName: 'ctaButtonURL',
    titleIconFileHandleColumnName: 'Homepage Image',
    headerImageFileHandleColumnName: undefined,
    linkConfig: {
      isMarkdown: false,
      baseURL: 'Explore/CardDeck/DetailsPage',
      URLColumnName: 'title',
      matchColumnName: 'title',
    },
  },
}

export const B2AIDemo: Story = {
  args: {
    entityId: 'syn65484830',
    rgbIndex: 1,
    titleColumnName: 'title',
    descriptionColumnName: 'description',
    ctaButtonTextColumnName: 'buttonText',
    ctaButtonURLColumnName: 'buttonUrl',
    titleIconFileHandleColumnName: undefined,
    headerImageFileHandleColumnName: 'headerImage',
    cardDeckType: 'b2ai',
    linkConfig: {
      isMarkdown: false,
      baseURL: 'Explore/CardDeck/DetailsPage',
      URLColumnName: 'title',
      matchColumnName: 'title',
    },
  },
}

export const TestOptionalArgsDemo: Story = {
  args: {
    entityId: 'syn65414596',
    rgbIndex: 1,
    titleColumnName: 'title',
    descriptionColumnName: 'description',
    ctaButtonTextColumnName: 'buttonText',
    ctaButtonURLColumnName: 'buttonURL',
    titleIconFileHandleColumnName: 'iconImage',
    headerImageFileHandleColumnName: 'headerImage',
    linkConfig: {
      isMarkdown: false,
      baseURL: 'Explore/CardDeck/DetailsPage',
      URLColumnName: 'title',
      matchColumnName: 'title',
    },
  },
}
