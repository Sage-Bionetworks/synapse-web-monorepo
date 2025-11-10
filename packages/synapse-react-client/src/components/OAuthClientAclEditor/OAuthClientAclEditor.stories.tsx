import { getUserProfileHandlers } from '@/mocks/msw/handlers/userProfileHandlers'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Button, Paper } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react-vite'
import { useRef, useState } from 'react'
import {
  OAuthClientAclEditor,
  OAuthClientAclEditorHandle,
} from './OAuthClientAclEditor'
import { getAllOAuthClientAclHandlers } from '@/mocks/msw/handlers/oauthClientAclHandlers'
import { MOCK_OAUTH_CLIENT_ACL } from '@/mocks/mockOAuthClientAcls'

const meta: Meta<typeof OAuthClientAclEditor> = {
  title: 'Synapse/OAuthManagement/OAuthClientAclEditor',
  component: OAuthClientAclEditor,
  render: function RenderFn(args) {
    const [isSaving, setIsSaving] = useState<boolean>(false)
    const ref = useRef<OAuthClientAclEditorHandle>(null)

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
          <OAuthClientAclEditor
            {...args}
            ref={ref}
            onSaveComplete={() => setIsSaving(false)}
          />
        </Paper>
      </>
    )
  },
} satisfies Meta<typeof OAuthClientAclEditor>
export default meta
type Story = StoryObj<typeof meta>

export const MockDemoExistingAcl: Story = {
  args: {
    clientId: MOCK_OAUTH_CLIENT_ACL.id,
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
        getAllOAuthClientAclHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
}
