import { Button, Paper } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'
import React, { useRef, useState } from 'react'
import { mockManagedACTAccessRequirement } from '../../mocks/mockAccessRequirements'
import {
  SetManagedAccessRequirementFields,
  SetManagedAccessRequirementFieldsHandle,
} from './SetManagedAccessRequirementFields'

const meta: Meta<typeof SetManagedAccessRequirementFields> = {
  title: 'Governance/SetManagedAccessRequirementFields',
  component: SetManagedAccessRequirementFields,
  render: function RenderFn(args) {
    const [isSaving, setIsSaving] = useState<boolean>(false)
    const ref = useRef<SetManagedAccessRequirementFieldsHandle>(null)

    return (
      <>
        <Button
          onClick={() => {
            setIsSaving(true)
            ref.current?.save()
          }}
          variant="contained"
          disabled={isSaving}
        >
          Save AR
        </Button>
        <Paper sx={{ mx: 'auto', p: '44px', maxWidth: '750px' }}>
          <SetManagedAccessRequirementFields
            {...args}
            ref={ref}
            onSaveComplete={() => setIsSaving(false)}
          />
        </Paper>
      </>
    )
  },
} satisfies Meta<typeof SetManagedAccessRequirementFields>

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    accessRequirement: mockManagedACTAccessRequirement,
  },
  parameters: {
    stack: 'mock',
  },
}
