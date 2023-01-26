import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MarkdownCollapse from './MarkdownCollapse'

export default {
  title: 'Markdown/MarkdownCollapse',
  component: MarkdownCollapse,
} as ComponentMeta<typeof MarkdownCollapse>

const Template: ComponentStory<typeof MarkdownCollapse> = args => (
  <MarkdownCollapse {...args} />
)

export const Markdown = Template.bind({})
Markdown.args = {
  markdown: '*markdown* given to the **component**',
  textDescription: 'full statement',
}

export const WikiPage = Template.bind({})
WikiPage.args = {
  ownerId: 'syn12666371',
  wikiId: '585317',
  textDescription: 'text',
  showCopyPlainText: true,
}
