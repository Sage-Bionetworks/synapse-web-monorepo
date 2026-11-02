import GridAgentChat from '@/components/SynapseChat/GridAgentChat'
import { getChatbotHandlers } from '@/mocks/msw/handlers/chatHandlers'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import {
  DynamicDataSheetGrid,
  keyColumn,
  textColumn,
} from '@sage-bionetworks/react-datasheet-grid'
import '@sage-bionetworks/react-datasheet-grid/dist/style.css'
import { Typography } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react-vite'
import { HttpHandler } from 'msw'
import { useState } from 'react'
import synapseGridStyles from '../../SynapseGrid.module.scss'
import { OpenGridAgentSidebarButton } from './OpenGridAgentSidebarButton'

const COLUMN_KEYS = Array.from({ length: 12 }, (_, i) => `column${i + 1}`)
const columns = COLUMN_KEYS.map(key => ({
  ...keyColumn(key, textColumn),
  title: key,
  minWidth: 140,
}))
const initialRows = Array.from({ length: 40 }, (_, row) =>
  Object.fromEntries(COLUMN_KEYS.map(key => [key, `${key} row ${row + 1}`])),
)

const handlers: Record<string, HttpHandler[]> = {
  chatbot: getChatbotHandlers(MOCK_REPO_ORIGIN),
}

function DockedBesideGrid() {
  const [open, setOpen] = useState(true)
  const [rows, setRows] = useState(initialRows)
  return (
    <div className={synapseGridStyles.layout}>
      <div className={synapseGridStyles.main} style={{ padding: 16 }}>
        <Typography variant="headline2" component="h1" sx={{ mb: 2 }}>
          Grid content
        </Typography>
        <div className={synapseGridStyles.gridArea}>
          <DynamicDataSheetGrid
            value={rows}
            onChange={setRows}
            columns={columns}
            height={600}
          />
          {!open && (
            <OpenGridAgentSidebarButton onClick={() => setOpen(true)} />
          )}
        </div>
      </div>
      <GridAgentChat
        open={open}
        onClose={() => setOpen(false)}
        gridSessionId="mock-grid-session"
        usersReplicaId={1}
        chatbotName="Curie"
      />
    </div>
  )
}

const meta = {
  title: 'Components/SynapseGrid/GridAgentSidebar',
  component: DockedBesideGrid,
  parameters: {
    layout: 'fullscreen',
    requireLogin: true,
    stack: 'mock',
    msw: { handlers },
  },
} satisfies Meta<typeof DockedBesideGrid>

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {}
