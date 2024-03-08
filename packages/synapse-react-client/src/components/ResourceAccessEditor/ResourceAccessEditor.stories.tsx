import { Meta, StoryObj } from '@storybook/react'
import { ResourceAccessEditor } from './ResourceAccessEditor'
import { ACCESS_TYPE, ResourceAccess } from '@sage-bionetworks/synapse-types'
import React, { useState } from 'react'
import { Paper } from '@mui/material'

const meta: Meta = {
  title: 'Governance/ResourceAccessEditor',
  component: ResourceAccessEditor,
  decorators: [
    Story => (
      <Paper sx={{ mx: 'auto', p: '44px', maxWidth: '750px' }}>
        <Story />
      </Paper>
    ),
  ],
  render: function Render(args) {
    const [resourceAccessList, setResourceAccessList] = useState<
      ResourceAccess[]
    >(args.resourceAccessList as ResourceAccess[])
    return (
      <ResourceAccessEditor
        {...args}
        resourceAccessList={resourceAccessList}
        onChange={setResourceAccessList}
      />
    )
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

const resourceAccessList: ResourceAccess[] = [
  {
    principalId: 3490573,
    accessType: [ACCESS_TYPE.REVIEW_SUBMISSIONS],
  },
  {
    principalId: 3459071,
    accessType: [ACCESS_TYPE.EXEMPTION_ELIGIBLE],
  },
  {
    principalId: 3431185,
    accessType: [
      ACCESS_TYPE.REVIEW_SUBMISSIONS,
      ACCESS_TYPE.EXEMPTION_ELIGIBLE,
    ],
  },
]

export const CanReview: Story = {
  args: {
    resourceAccessList: resourceAccessList,
  },
}
