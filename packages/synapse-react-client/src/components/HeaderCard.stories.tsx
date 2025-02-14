import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import HeaderCard from './HeaderCard'
import type { HeaderCardProps } from './HeaderCard'
import { Study } from '../assets/themed_icons'

const meta = {
  title: 'Synapse/HeaderCard',
  component: HeaderCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof HeaderCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    headerType: 'Study',
    title: 'Example Study',
    description:
      'This is an example study description that demonstrates the HeaderCard component.',
    values: [
      ['Status', 'Active'],
      ['Data Type', 'Genomics'],
      ['Access', 'Public'],
    ],
    secondaryLabelLimit: 3,
    isAlignToLeftNav: false,
    descriptionConfig: {
      showFullDescriptionByDefault: true,
    },
    icon: <Study style={{ width: '30px', height: '30px' }} />,
  },
}

export const WithSubtitle: Story = {
  args: {
    ...Default.args,
    title: 'Study With Subtitle',
    subTitle: 'Principal Investigator: John Doe',
  },
}
