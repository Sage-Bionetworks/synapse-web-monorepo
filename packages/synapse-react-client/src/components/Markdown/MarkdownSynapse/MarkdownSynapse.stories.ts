import { Meta, StoryObj } from '@storybook/react-vite'
import MarkdownSynapse from './MarkdownSynapse'
import { ObjectType } from '@sage-bionetworks/synapse-types'
import { fn } from 'storybook/test'

const meta: Meta<typeof MarkdownSynapse> = {
  title: 'Markdown/MarkdownSynapse',
  component: MarkdownSynapse,
  args: {
    onMarkdownProcessingDone: fn(),
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const HardCodedMarkdown: Story = {
  args: {
    markdown: '*markdown* given to the **component**',
  },
}

export const WikiPage: Story = {
  args: {
    ownerId: 'syn12666371',
    wikiId: '585317',
    loadingSkeletonRowCount: 20,
  },
}

// Note: this story currently displays an error, but should display a wiki
// after MarkdownSynapse is updated to handle root WikiPages for ACCESS_REQUIREMENT
// object types. See https://sagebionetworks.jira.com/browse/SWC-6791.
export const RootWikiPageAccessRequirement: Story = {
  args: {
    ownerId: '9602704',
    wikiId: undefined,
    objectType: ObjectType.ACCESS_REQUIREMENT,
  },
  parameters: {
    stack: 'development',
  },
}

export const ImageDemo: Story = {
  args: {
    ownerId: 'syn18142975',
  },
}

export const ButtonLink: Story = {
  args: {
    markdown: `Button link demo \n

\${buttonlink?text=Align%20Left&align=left} \n

\${buttonlink?text=Align%20Right&align=right} \n

\${buttonlink?text=Align%20Center&align=center} \n

\${buttonlink?text=Highlight&highlight=true} \n

Links to synapse: \n
\${buttonlink?text=This%20Button%20Links%20to%20Synapse&url=https://synapse.org/}
  `,
  },
}
export const ImageBySynID: Story = {
  args: {
    markdown:
      'Note: you must be signed in to see this image\n${image?synapseId=syn36695878}',
  },
}

export const Plot: Story = {
  args: {
    markdown:
      '${plot?query=select "id"%2C "createdOn" from syn23567477&title=&type=BAR&barmode=GROUP&horizontal=false&showlegend=true}',
  },
}
export const SynapseTable: Story = {
  args: {
    markdown:
      '# Synapse Table\n\nModify the markdown control to change the parameters\n\n${synapsetable?query=SELECT %2A FROM syn26302617&showquery=false&tableonly=false}',
  },
}

export const MarkdownProvenanceGraph: Story = {
  args: {
    markdown:
      '# Provenance Graphs\nMultiple start nodes\n${provenance?entityList=syn12548902%2Csyn33344762&depth=3&displayHeightPx=800&showExpand=false}\nSpecify the entity version\n${provenance?entityList=syn12548902%2Fversion%2F34&depth=1&displayHeightPx=500&showExpand=true}',
  },
}

export const HtmlRenderingTest: Story = {
  args: {
    ownerId: 'syn5585645',
    wikiId: '493662',
  },
}

export const LargeHtmlFileRenderingTest: Story = {
  args: {
    ownerId: 'syn66340468',
  },
}

export const MarkdownIDUReport: Story = {
  args: {
    markdown: '${iduReport?accessRestrictionId=9605700}',
  },
}

export const ComprehensivePlainMarkdownWiki: Story = {
  args: {
    ownerId: 'syn23567475',
    wikiId: '621868',
  },
}
