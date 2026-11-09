import SynapseGridLayout from '@/components/DataGrid/components/SynapseGridLayout'
import {
  DynamicDataSheetGrid,
  keyColumn,
  textColumn,
} from '@sage-bionetworks/react-datasheet-grid'
import '@sage-bionetworks/react-datasheet-grid/dist/style.css'
import { Box, Typography } from '@mui/material'
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

type DockedBesideGridProps = {
  /** Height of the grid in pixels */
  gridHeight: number
  /** Adds a banner above and a footer below the layout, as on a Synapse page */
  withSurroundingPage: boolean
}

function DockedBesideGrid({
  gridHeight,
  withSurroundingPage,
}: DockedBesideGridProps) {
  const [open, setOpen] = useState(true)
  const [rows, setRows] = useState(initialRows)
  return (
    <>
      {withSurroundingPage && (
        <Box sx={{ height: 55, bgcolor: 'warning.light', px: 2, py: 1 }}>
          Banner above the grid page
        </Box>
      )}
      <SynapseGridLayout
        header={
          <Typography variant="headline2" component="h1" sx={{ p: 2 }}>
            Grid content
          </Typography>
        }
        sidebar={
          <>
            {!open && (
              <OpenGridAgentSidebarButton onClick={() => setOpen(true)} />
            )}
            <GridAgentSidebar open={open} onClose={() => setOpen(false)}>
              <Typography>Chat content</Typography>
            </GridAgentSidebar>
          </>
        }
      >
        <Box sx={{ px: 2, pb: 2 }}>
          <DynamicDataSheetGrid
            value={rows}
            onChange={setRows}
            columns={columns}
            height={gridHeight}
          />
        </Box>
      </SynapseGridLayout>
      {withSurroundingPage && (
        <Box sx={{ height: 600, bgcolor: 'grey.200', p: 2 }}>
          Footer below the grid page
        </Box>
      )}
    </>
  )
}

const meta = {
  title: 'Components/SynapseGrid/GridAgentSidebar',
  component: DockedBesideGrid,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    gridHeight: 600,
    withSurroundingPage: false,
  },
} satisfies Meta<typeof DockedBesideGrid>

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {}

/** A short grid between a banner and a tall footer, like the grid page in Synapse */
export const WithBannerAndFooter: Story = {
  args: {
    gridHeight: 300,
    withSurroundingPage: true,
  },
}
