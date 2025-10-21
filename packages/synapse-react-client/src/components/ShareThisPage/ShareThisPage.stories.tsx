import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import ShareThisPage from './ShareThisPage'
import { useTheme } from '@mui/material/styles'

const meta: Meta<typeof ShareThisPage> = {
  title: 'UI/ShareThisPage',
  component: ShareThisPage,
  parameters: {},
}

export default meta

type Story = StoryObj<typeof ShareThisPage>

export const Light: Story = {
  args: {},
}

export const Dark: Story = {
  args: { variant: 'dark' },
  decorators: [
    Story => {
      const theme = useTheme()
      return (
        <div
          style={{
            background: theme.palette.primary.main,
            padding: '24px',
            height: '10vh',
          }}
        >
          <Story />
        </div>
      )
    },
  ],
}
