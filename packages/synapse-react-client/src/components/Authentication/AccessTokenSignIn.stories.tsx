import SynapseClient from '@/synapse-client'
import { useGetCurrentUserProfile } from '@/synapse-queries/user/useUserBundle'
import { useApplicationSessionContext } from '@/utils/AppUtils/session/ApplicationSessionContext'
import { SynapseSessionManager } from '@/utils/AppUtils/session/SynapseSessionManager'
import { Alert, Box, Button, Stack, TextField, Typography } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react-vite'
import { useMutation } from '@tanstack/react-query'
import { SyntheticEvent, useState } from 'react'

function InsecureCookieWarning() {
  return (
    <Alert severity="warning">
      The token is stored in a browser cookie that is not secure: it is readable
      by scripts and is kept for 10 days. If you signed in with a personal
      access token, delete it from Account Settings (Personal Access Tokens)
      when you are done. Signing out here only removes the cookie; it does not
      revoke the token.
    </Alert>
  )
}

/**
 * Signs Storybook in with a pasted Synapse access token or personal access token (PAT). The token is stored in the
 * access token cookie, so every story in this Storybook instance shares the session.
 */
function AccessTokenSignIn() {
  const { isAuthenticated, refreshSession } = useApplicationSessionContext()
  const [token, setToken] = useState('')
  const { data: userProfile } = useGetCurrentUserProfile({
    enabled: isAuthenticated,
  })

  const signIn = useMutation({
    mutationFn: async (accessToken: string) => {
      const introspection =
        await SynapseSessionManager.validateToken(accessToken)
      if (introspection === null) {
        throw new Error(
          'Synapse rejected this token. Check that it has not expired and that it was issued by the selected stack.',
        )
      }
      await SynapseClient.setAccessTokenCookie(accessToken)
      await refreshSession()
    },
    onSuccess: () => setToken(''),
  })

  function onSubmit(event: SyntheticEvent) {
    event.preventDefault()
    signIn.mutate(token.trim())
  }

  async function signOut() {
    // Clear the cookie before refreshing instead of using clearSession, which revokes the current token; revoking a
    // pasted PAT would break it everywhere else it is used
    await SynapseClient.setAccessTokenCookie(undefined)
    await refreshSession()
  }

  if (isAuthenticated) {
    return (
      <Stack spacing={2} sx={{ maxWidth: 600 }}>
        <InsecureCookieWarning />
        <Alert severity="success">
          Signed in{userProfile ? ` as ${userProfile.userName}` : ''}. Other
          stories now use this session.
        </Alert>
        <Box>
          <Button variant="outlined" onClick={() => void signOut()}>
            Sign out
          </Button>
        </Box>
      </Stack>
    )
  }

  return (
    <Stack
      component="form"
      spacing={2}
      sx={{ maxWidth: 600 }}
      onSubmit={onSubmit}
    >
      <InsecureCookieWarning />
      <Typography variant="body1">
        Paste a Synapse access token or personal access token issued by the
        stack selected in the toolbar. Other stories use the resulting session.
      </Typography>
      <TextField
        label="Access token or personal access token"
        type="password"
        autoComplete="off"
        value={token}
        onChange={event => setToken(event.target.value)}
        fullWidth
      />
      {signIn.error && <Alert severity="error">{signIn.error.message}</Alert>}
      <Box>
        <Button
          type="submit"
          variant="contained"
          disabled={token.trim() === '' || signIn.isPending}
        >
          Sign in
        </Button>
      </Box>
    </Stack>
  )
}

const meta = {
  title: 'Authentication/AccessTokenSignIn',
  component: AccessTokenSignIn,
} satisfies Meta<typeof AccessTokenSignIn>
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {}
