import { useApplicationSessionContext } from '@/utils'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { Box, Button, Collapse, Stack } from '@mui/material'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import React, { useEffect, useRef, useState } from 'react'
import { BlockingLoader } from '../LoadingScreen/LoadingScreen'
import SignInButton from '../SignInButton'

export const YOU_ARE_NOT_AUTHORIZED_MESSAGE =
  'You are not authorized to access this resource.'

export const SignInPrompt = (): React.ReactNode => {
  return (
    <>
      Please <SignInButton /> to view this resource.
    </>
  )
}

export const ClientError = (props: {
  error: SynapseClientError
  reloadFn?: () => void
}): React.ReactNode => {
  const { error, reloadFn } = props
  const { hasInitializedSession } = useApplicationSessionContext()
  const [showDetailedError, setShowDetailedError] = useState(false)
  const { isAuthenticated } = useSynapseContext()
  const loginError =
    (error.status === 403 || error.status === 401) && !isAuthenticated
  const accessDenied = error.status === 403 && isAuthenticated

  const shouldAutoReloadWhenSessionInitializes = useRef(
    loginError && !hasInitializedSession && !!reloadFn,
  )

  useEffect(() => {
    if (
      shouldAutoReloadWhenSessionInitializes.current &&
      hasInitializedSession &&
      reloadFn
    ) {
      reloadFn()
    }
  }, [hasInitializedSession, reloadFn])

  if (shouldAutoReloadWhenSessionInitializes.current) {
    // User is not signed in because the session is still being initialized. Show a loading state, and trigger a reload when the session initialization is complete (which will re-check the user's authentication status).
    return <BlockingLoader show />
  }

  if (loginError && hasInitializedSession) {
    // User is not logged in
    return <SignInPrompt />
  } else if (accessDenied) {
    return (
      <>
        <Stack direction="row" spacing={2}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {YOU_ARE_NOT_AUTHORIZED_MESSAGE}
          </Box>
          <Button
            variant="text"
            onClick={() => setShowDetailedError(show => !show)}
          >
            {showDetailedError ? 'Hide' : 'Show'} details
          </Button>
        </Stack>
        <Collapse in={showDetailedError}>
          <Box
            sx={{
              paddingTop: 1,
            }}
          >
            <pre>{error.reason}</pre>
          </Box>
        </Collapse>
      </>
    )
  } else {
    return <>{error.reason}</>
  }
}
