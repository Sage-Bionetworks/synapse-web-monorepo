import { MOCK_MANAGED_ACCESS_REQUIREMENT_ACL } from '@/mocks/accessRequirement/mockAccessRequirementAcls'
import { MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID } from '@/mocks/accessRequirement/mockAccessRequirements'
import { getAllAccessRequirementAclHandlers } from '@/mocks/msw/handlers/accessRequirementAclHandlers'
import { getUserProfileHandlers } from '@/mocks/msw/handlers/userProfileHandlers'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Button, Paper } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react-vite'
import { useRef, useState } from 'react'
import {
  AccessRequirementAclEditor,
  AccessRequirementAclEditorHandle,
} from './AccessRequirementAclEditor'

const meta: Meta<typeof AccessRequirementAclEditor> = {
  title: 'Governance/AccessRequirementAclEditor',
  component: AccessRequirementAclEditor,
  render: function RenderFn(args) {
    const [isSaving, setIsSaving] = useState<boolean>(false)
    const ref = useRef<AccessRequirementAclEditorHandle>(null)

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
          Save ACL
        </Button>
        <Paper sx={{ mx: 'auto', p: '44px', maxWidth: '750px' }}>
          <AccessRequirementAclEditor
            {...args}
            ref={ref}
            onSaveComplete={() => setIsSaving(false)}
          />
        </Paper>
      </>
    )
  },
} satisfies Meta<typeof AccessRequirementAclEditor>
export default meta
type Story = StoryObj<typeof meta>

export const MockDemoExistingAcl: Story = {
  args: {
    accessRequirementId: MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.id,
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
        getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
}

export const MockDemoNoExistingAcl: Story = {
  args: {
    accessRequirementId: String(MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID),
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
        getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
}

export const DevDemo: Story = {
  args: {
    accessRequirementId: '9602671',
  },
  parameters: {
    stack: 'development',
  },
}
