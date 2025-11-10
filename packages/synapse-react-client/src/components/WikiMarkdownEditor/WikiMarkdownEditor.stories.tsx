import { mockEntityRootWikiPage, mockEntityWikiPage } from '@/mocks/mockWiki'
import {
  mockEntityRootWikiPageKey,
  mockEntityWikiPageKey,
} from '@/mocks/mockWikiPageKey'
import { ObjectType } from '@sage-bionetworks/synapse-types'
import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { WikiMarkdownEditor } from './WikiMarkdownEditor'

const meta: Meta<typeof WikiMarkdownEditor> = {
  title: 'Synapse/WikiMarkdownEditor',
  component: WikiMarkdownEditor,
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
} satisfies Meta<typeof WikiMarkdownEditor>

export default meta

type Story = StoryObj<typeof meta>

export const MockWikiRootPage: Story = {
  args: {
    open: true,
    ownerObjectType: mockEntityRootWikiPageKey.ownerObjectType,
    ownerObjectId: mockEntityRootWikiPageKey.ownerObjectId,
    wikiPage: mockEntityRootWikiPage,
    onCancel: fn(),
    onSave: fn(),
  },
}

export const MockWikiSubpage: Story = {
  args: {
    open: true,
    ownerObjectType: mockEntityWikiPageKey.ownerObjectType,
    ownerObjectId: mockEntityWikiPageKey.ownerObjectId,
    wikiPage: mockEntityWikiPage,
    onCancel: fn(),
    onSave: fn(),
  },
}
