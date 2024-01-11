import { Meta, StoryObj } from '@storybook/react'
import { Paper } from '@mui/material'
import React, { useState } from 'react'
import EntityViewMaskEditor from './EntityViewMaskEditor'
import {
  ENTITY_VIEW_TYPE_MASK_DOCKER,
  ENTITY_VIEW_TYPE_MASK_FILE,
} from '@sage-bionetworks/synapse-types'

const meta: Meta = {
  title: 'Synapse/EntityView/Mask Editor',
  component: EntityViewMaskEditor,
  decorators: [
    Story => (
      <Paper sx={{ mx: 'auto', p: 4, maxWidth: '720px' }}>
        <Story />
      </Paper>
    ),
  ],
  render: function Render(args) {
    const [value, setValue] = useState<number>(args.value)
    return <EntityViewMaskEditor {...args} value={value} onChange={setValue} />
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const FileView: Story = {
  args: {
    value: ENTITY_VIEW_TYPE_MASK_FILE,
  },
}

export const CustomScope: Story = {
  args: {
    value: ENTITY_VIEW_TYPE_MASK_FILE | ENTITY_VIEW_TYPE_MASK_DOCKER,
  },
}
