import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ForumThreadEditor } from '../discussion_forum/ForumThreadEditor'
export default {
  title: 'Markdown/MarkdownEditor',
  component: ForumThreadEditor,
  argTypes: {},
} as ComponentMeta<typeof ForumThreadEditor>

const Template: ComponentStory<typeof ForumThreadEditor> = args => (
  <ForumThreadEditor {...args} />
)

export const MarkdownEditorDemo = Template.bind({})
MarkdownEditorDemo.args = {}
