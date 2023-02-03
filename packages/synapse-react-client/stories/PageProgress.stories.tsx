import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import PageProgress from '../src/lib/containers/PageProgress'

const meta = {
  title: 'UI/PageProgress',
  component: PageProgress,
  render: args => {
    const [percent, setPercent] = React.useState(0)
    return (
      <PageProgress
        barPercent={percent}
        backBtnCallback={() => {
          setPercent(percent - 25)
        }}
        forwardBtnCallback={() => {
          setPercent(percent + 25)
        }}
        forwardBtnActive={percent < 100}
        {...args}
      />
    )
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    barColor: 'green',
    backBtnLabel: 'Back',
    forwardBtnLabel: 'Next',
  },
}
