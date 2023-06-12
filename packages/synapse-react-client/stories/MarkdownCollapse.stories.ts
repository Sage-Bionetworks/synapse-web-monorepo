import { Meta, StoryObj } from '@storybook/react'
import MarkdownCollapse from '../src/components/Markdown/MarkdownCollapse'

const meta = {
  title: 'Markdown/MarkdownCollapse',
  component: MarkdownCollapse,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Markdown: Story = {
  args: {
    markdown: '*markdown* given to the **component**',
    textDescription: 'full statement',
  },
}

export const WikiPage: Story = {
  args: {
    ownerId: 'syn12666371',
    wikiId: '602581',
    textDescription: 'full statement',
    showCopyPlainText: true,
  },
}
