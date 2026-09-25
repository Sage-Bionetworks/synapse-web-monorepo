import { GridSourceSync } from '@/components/DataGrid/hooks/useGridSourceSync'
import { Box } from '@mui/material'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import GridSourceUpdatedNotification from './GridSourceUpdatedNotification'

const gridSourceSync: GridSourceSync = {
  isSourceOutdated: true,
  sourceEntityName: 'Biospecimen Metadata',
  sourceEntityType: EntityType.recordset,
  prompt: 'dialog',
  isLoading: false,
  isPending: false,
  importChanges: fn(),
  submit: fn(),
  dismissDialog: fn(),
}

const meta = {
  title: 'Components/DataGrid/GridSourceUpdatedNotification',
  component: GridSourceUpdatedNotification,
  args: {
    gridSourceSync,
  },
  decorators: [
    // Stands in for the grid the banner anchors itself to
    Story => (
      <Box
        sx={{
          position: 'relative',
          height: '320px',
          border: '1px solid',
          borderColor: 'grey.400',
        }}
      >
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof GridSourceUpdatedNotification>
export default meta

type Story = StoryObj<typeof meta>

/** Shown when the source has been updated since the session was created, and on submit. */
export const Dialog: Story = {}

/** The persistent reminder shown after the user declines the dialog. */
export const Banner: Story = {
  args: {
    gridSourceSync: { ...gridSourceSync, prompt: 'banner' },
  },
}

/** While the import is in flight. */
export const ImportPending: Story = {
  args: {
    gridSourceSync: { ...gridSourceSync, prompt: 'banner', isPending: true },
  },
}

/** Nothing renders when there is nothing to prompt about. */
export const Hidden: Story = {
  args: {
    gridSourceSync: {
      ...gridSourceSync,
      isSourceOutdated: false,
      prompt: 'hidden',
    },
  },
}
