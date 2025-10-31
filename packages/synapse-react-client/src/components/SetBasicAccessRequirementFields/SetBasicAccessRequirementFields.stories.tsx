import {
  mockACTAccessRequirement,
  mockSelfSignAccessRequirement,
  mockToUAccessRequirement,
} from '@/mocks/accessRequirement/mockAccessRequirements'
import { Button, Paper } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react-vite'
import { useRef, useState } from 'react'
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
            onSave={() => setIsSaving(false)}
            onError={() => setIsSaving(false)}
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
    accessRequirementId: mockSelfSignAccessRequirement.id.toString(),
  },
}

export const MockTermsOfUse: Story = {
  args: {
    accessRequirementId: mockToUAccessRequirement.id.toString(),
  },
}

export const MockACTAccessRequirement: Story = {
  args: {
    accessRequirementId: mockACTAccessRequirement.id.toString(),
  },
}

export const DevSelfSign: Story = {
  args: {
    accessRequirementId: '9602674',
  },
  parameters: {
    stack: 'development',
  },
}
