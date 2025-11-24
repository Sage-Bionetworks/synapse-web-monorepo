import {
  mockEntityRootWikiPageKey,
  mockEntityWikiPageKey,
} from '@/mocks/mockWikiPageKey'
import { ObjectType } from '@sage-bionetworks/synapse-types'
import { Meta, StoryObj } from '@storybook/react-vite'
import { WikiMarkdownEditorButton } from './WikiMarkdownEditorButton'

const meta: Meta<typeof WikiMarkdownEditorButton> = {
  title: 'Synapse/WikiMarkdownEditorButton',
  component: WikiMarkdownEditorButton,
  parameters: {
    stack: 'mock',
  },
  argTypes: {
    ownerObjectType: {
      control: { type: 'select' },
      options: [
        ObjectType.ACCESS_REQUIREMENT,
        ObjectType.ENTITY,
        ObjectType.EVALUATION,
      ],
    },
  },
} satisfies Meta<typeof WikiMarkdownEditorButton>

export default meta

type Story = StoryObj<typeof meta>

export const AccessRequirementWiki: Story = {
  args: {
    ownerObjectType: ObjectType.ACCESS_REQUIREMENT,
    ownerObjectId: '9602704',
  },
  parameters: {
    stack: 'development',
  },
}

export const MockWikiRootPage: Story = {
  args: {
    ownerObjectType: mockEntityRootWikiPageKey.ownerObjectType,
    ownerObjectId: mockEntityRootWikiPageKey.ownerObjectId,
    wikiPageId: mockEntityRootWikiPageKey.wikiPageId,
  },
}

export const MockWikiSubpage: Story = {
  args: {
    ownerObjectType: mockEntityWikiPageKey.ownerObjectType,
    ownerObjectId: mockEntityWikiPageKey.ownerObjectId,
    wikiPageId: mockEntityWikiPageKey.wikiPageId,
  },
}
