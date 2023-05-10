import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Button } from 'react-bootstrap'

const meta: Meta = {
  title: 'UI/Archive/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: 'select',
      options: [
        'sds-primary',
        'outline',
        'tertiary',
        'primary',
        'secondary',
        'light-secondary',
        'default',
        'white',
        'light',
      ],
    },
    size: {
      control: 'select',
      options: ['', 'sm', 'lg'],
    },
    className: {
      name: 'className',
      control: 'text',
    },
  },
  render: args => (
    <div className="bootstrap-4-backport">
      <Button {...args}>{args.label}</Button>
    </div>
  ),
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { variant: 'sds-primary', label: 'Button' },
}
