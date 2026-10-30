import {
  DynamicDataSheetGrid,
  keyColumn,
  textColumn,
} from '@sage-bionetworks/react-datasheet-grid'
import '@sage-bionetworks/react-datasheet-grid/dist/style.css'
import { Typography } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { GridAgentSidebar } from './GridAgentSidebar'
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

function DockedBesideGrid() {
  const [open, setOpen] = useState(true)
  const [rows, setRows] = useState(initialRows)
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <div style={{ flex: '1 1 0', minWidth: 0, padding: 16 }}>
        <Typography variant="headline2" component="h1" sx={{ mb: 2 }}>
          Grid content
        </Typography>
        <div style={{ position: 'relative' }}>
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
      <GridAgentSidebar open={open} onClose={() => setOpen(false)}>
        <Typography>Chat content</Typography>
      </GridAgentSidebar>
    </div>
  )
}

const meta = {
  title: 'Components/SynapseGrid/GridAgentSidebar',
  component: DockedBesideGrid,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof DockedBesideGrid>

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {}
