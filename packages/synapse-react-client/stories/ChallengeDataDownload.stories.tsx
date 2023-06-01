import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { ChallengeDataDownload } from '../src/components/ChallengeDataDownload'
import { Paper } from '@mui/material'

const defaultArgs = {
  challengeId: `syn50932069`,
}

const meta = {
  title: 'ChallengeDataDownload',
  component: ChallengeDataDownload,
  render: args => (
    <Paper sx={{ p: 4 }}>
      <ChallengeDataDownload {...{ ...defaultArgs, ...args }} />
    </Paper>
  ),
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const ChallengeDataDownloadDemo: Story = {
  args: {
    challengeId: defaultArgs.challengeId,
  },
}
