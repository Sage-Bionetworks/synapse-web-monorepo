import { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import PageProgress, { PageProgressProps } from './PageProgress'

const meta = {
  title: 'UI/PageProgress',
  render: function RenderFn(args) {
    const [percent, setPercent] = useState(0)
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
} satisfies Meta<
  Omit<
    PageProgressProps,
    'barPercent' | 'backBtnCallback' | 'forwardBtnCallback' | 'forwardBtnActive'
  >
>
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    barColor: 'green',
    backBtnLabel: 'Back',
    forwardBtnLabel: 'Next',
  },
}
