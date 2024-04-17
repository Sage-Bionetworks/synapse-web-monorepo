import { Button, Paper } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'
import React, { useRef, useState } from 'react'
import {
  mockACTAccessRequirement,
  mockSelfSignAccessRequirement,
  mockToUAccessRequirement,
} from '../../mocks/mockAccessRequirements'
import {
  SetBasicAccessRequirementFields,
  SetBasicAccessRequirementFieldsHandle,
} from './SetBasicAccessRequirementFields'

const meta: Meta<typeof SetBasicAccessRequirementFields> = {
  title: 'Governance/SetBasicAccessRequirementFields',
  component: SetBasicAccessRequirementFields,
  parameters: {
    stack: 'mock',
  },
  render: function RenderFn(args) {
    const [isSaving, setIsSaving] = useState<boolean>(false)
    const ref = useRef<SetBasicAccessRequirementFieldsHandle>(null)

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
          <SetBasicAccessRequirementFields
            {...args}
            ref={ref}
            onSaveComplete={() => setIsSaving(false)}
          />
        </Paper>
      </>
    )
  },
} satisfies Meta<typeof SetBasicAccessRequirementFields>

export default meta

type Story = StoryObj<typeof meta>

export const MockSelfSign: Story = {
  args: {
    accessRequirement: mockSelfSignAccessRequirement,
  },
}

export const MockTermsOfUse: Story = {
  args: {
    accessRequirement: mockToUAccessRequirement,
  },
}

export const MockACTAccessRequirement: Story = {
  args: {
    accessRequirement: mockACTAccessRequirement,
  },
}
