import { Meta, StoryObj } from '@storybook/react'
import { WikiMarkdownEditor } from './WikiMarkdownEditor'
import { fn } from '@storybook/test'
import {
  mockEntityRootWikiPageKey,
  mockEntityWikiPageKey,
} from '../../mocks/mockWikiPageKey'
import { ObjectType } from '@sage-bionetworks/synapse-types'

const meta: Meta<typeof WikiMarkdownEditor> = {
  title: 'Synapse/WikiMarkdownEditor',
  component: WikiMarkdownEditor,
  parameters: {
    stack: 'mock',
  },
} satisfies Meta<typeof WikiMarkdownEditor>

export default meta

type Story = StoryObj<typeof meta>

export const AccessRequirementWiki: Story = {
  args: {
    ownerObjectType: ObjectType.ACCESS_REQUIREMENT,
    ownerObjectId: '9602704',
    onCancel: fn(),
    onSave: fn(),
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
    onCancel: fn(),
    onSave: fn(),
  },
}

export const MockWikiSubpage: Story = {
  args: {
    ownerObjectType: mockEntityWikiPageKey.ownerObjectType,
    ownerObjectId: mockEntityWikiPageKey.ownerObjectId,
    wikiPageId: mockEntityWikiPageKey.wikiPageId,
    onCancel: fn(),
    onSave: fn(),
  },
}
