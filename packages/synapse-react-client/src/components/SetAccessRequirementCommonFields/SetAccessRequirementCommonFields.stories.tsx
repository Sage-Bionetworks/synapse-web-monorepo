import { Meta, StoryObj } from '@storybook/react-vite'
import { useRef, useState } from 'react'
import {
  SetAccessRequirementCommonFields,
  SetAccessRequirementCommonFieldsHandle,
} from './SetAccessRequirementCommonFields'
import { Button, Paper } from '@mui/material'
import { RestrictableObjectType } from '@sage-bionetworks/synapse-types'

const meta: Meta<typeof SetAccessRequirementCommonFields> = {
  title: 'Governance/SetAccessRequirementCommonFields',
  component: SetAccessRequirementCommonFields,
  parameters: {
    stack: 'development',
  },
  render: function RenderFn(args) {
    const [isSaving, setIsSaving] = useState<boolean>(false)
    const ref = useRef<SetAccessRequirementCommonFieldsHandle>(null)

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
          <SetAccessRequirementCommonFields
            {...args}
            ref={ref}
            onSave={() => setIsSaving(false)}
            onError={() => setIsSaving(false)}
          />
        </Paper>
      </>
    )
  },
} satisfies Meta<typeof SetAccessRequirementCommonFields>

export default meta

type Story = StoryObj<typeof meta>

export const DemoCreateTeamAr: Story = {
  args: {
    subject: {
      id: '3429759',
      type: RestrictableObjectType.TEAM,
    },
  },
}

export const DemoExistingTeamAr: Story = {
  args: {
    accessRequirementId: '9602672',
  },
}

export const DemoCreateEntityAr: Story = {
  args: {
    subject: {
      id: 'syn12714410',
      type: RestrictableObjectType.ENTITY,
    },
  },
}

export const DemoExistingEntityAr: Story = {
  args: {
    accessRequirementId: '9602704',
  },
}
