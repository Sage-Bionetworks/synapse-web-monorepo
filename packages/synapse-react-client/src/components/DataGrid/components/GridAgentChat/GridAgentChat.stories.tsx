import OpenGridAgentSidebarButton from '@/components/DataGrid/components/GridAgentSidebar/OpenGridAgentSidebarButton'
import SynapseGridLayout from '@/components/DataGrid/components/SynapseGridLayout'
import { mockWideTableAgentChatResponse } from '@/mocks/chat/mockChat'
import { getChatbotHandlers } from '@/mocks/msw/handlers/chatHandlers'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Box, Button, Typography } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react-vite'
import { HttpHandler } from 'msw'
import { useState } from 'react'
import GridAgentChat, { GridAgentChatProps } from './GridAgentChat'

const handlers: Record<string, HttpHandler[]> = {
  chatbot: getChatbotHandlers(MOCK_REPO_ORIGIN),
}

type GridAgentChatDemoProps = Pick<GridAgentChatProps, 'variant'> & {
  /** Height of the stand-in for the grid, in pixels */
  gridHeight: number
}

function GridAgentChatDemo({ variant, gridHeight }: GridAgentChatDemoProps) {
  const [open, setOpen] = useState(true)
  const chat = (
    <GridAgentChat
      variant={variant}
      gridSessionId="mock-grid-session"
      usersReplicaId={1}
      chatbotName="Curie"
      open={open}
      onClose={() => setOpen(false)}
    />
  )
  const isSidebar = variant === 'sidebar'
  return (
    <SynapseGridLayout
      header={
        <Typography variant="headline2" component="h1" sx={{ p: 2 }}>
          Grid content
        </Typography>
      }
      sidebar={
        isSidebar && (
          <>
            {!open && (
              <OpenGridAgentSidebarButton onClick={() => setOpen(true)} />
            )}
            {chat}
          </>
        )
      }
    >
      <Box sx={{ px: 2 }}>
        {!isSidebar && (
          <Button variant="outlined" onClick={() => setOpen(true)}>
            Open Curie
          </Button>
        )}
        <Box sx={{ height: gridHeight, mt: 2, bgcolor: 'grey.100' }}>
          The grid
        </Box>
        {!isSidebar && chat}
      </Box>
    </SynapseGridLayout>
  )
}

const meta = {
  title: 'Components/SynapseGrid/GridAgentChat',
  component: GridAgentChatDemo,
  parameters: {
    layout: 'fullscreen',
    requireLogin: true,
    stack: 'mock',
    msw: {
      handlers,
    },
  },
  args: {
    variant: 'sidebar',
    gridHeight: 1200,
  },
} satisfies Meta<typeof GridAgentChatDemo>

export default meta

type Story = StoryObj<typeof meta>

/** Docked in the AI Assistant sidebar, used when the GRID_AGENT_SIDEBAR feature flag is on */
export const Sidebar: Story = {}

/** The agent replies with a table wider than the sidebar */
export const WideResponse: Story = {
  parameters: {
    msw: {
      handlers: {
        ...handlers,
        chatbot: getChatbotHandlers(
          MOCK_REPO_ORIGIN,
          mockWideTableAgentChatResponse,
        ),
      },
    },
  },
}

/** In a dialog opened from the toolbar, used when the GRID_AGENT_SIDEBAR feature flag is off */
export const Dialog: Story = {
  args: {
    variant: 'dialog',
    gridHeight: 400,
  },
}
