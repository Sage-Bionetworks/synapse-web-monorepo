import React from 'react'
import { useSynapseContext } from '@/stores/SynapseContext/SynapseContext'
import { Optional } from '@/utils/types/Optional'
import { Box, Button, Collapse, Stack } from '@mui/material'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { PropsWithChildren, useState } from 'react'
import {
  ErrorBoundary,
  ErrorBoundaryPropsWithComponent,
  FallbackProps,
} from 'react-error-boundary'
import FullWidthAlert from '../FullWidthAlert'
import SignInButton from '../SignInButton'
import { AlertButtonConfig } from '../FullWidthAlert/FullWidthAlert'

type ErrorBannerProps = {
  error?: string | Error | SynapseClientError | null
  reloadButtonFn?: () => void
}

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
}): React.ReactNode => {
  const [showDetailedError, setShowDetailedError] = useState(false)
  const { accessToken } = useSynapseContext()
  const { error } = props
  const loginError =
    (error.status === 403 || error.status === 401) && !accessToken
  const accessDenied = error.status === 403 && accessToken

  if (loginError) {
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

export const ErrorBanner = (props: ErrorBannerProps): React.ReactNode => {
  const { error, reloadButtonFn } = props

  if (!error) {
    return <></>
  }

  let synapseClientError: SynapseClientError | undefined = undefined
  let jsError: Error | undefined = undefined
  let stringError: string | undefined = undefined
  if (error instanceof SynapseClientError) {
    synapseClientError = error
  } else if (error instanceof Error) {
    jsError = error
  } else if (typeof error === 'string') {
    stringError = error
  }
  const serverError = synapseClientError && synapseClientError.status >= 500
  let primaryButtonConfig: AlertButtonConfig | undefined = undefined

  if (serverError) {
    primaryButtonConfig = {
      text: 'Report Issue',
      onClick: () => {
        const issueUrl = `https://sagebionetworks.jira.com/servicedesk/customer/portal/9/group/16/create/84?description=${encodeURI(
          `A server error occurred:\n\n${synapseClientError?.reason}`,
        )}`
        window.open(issueUrl, '_blank')
      },
    }
  } else if (reloadButtonFn) {
    primaryButtonConfig = {
      text: 'Reload',
      onClick: reloadButtonFn,
    }
  }

  return (
    <FullWidthAlert
      variant={'danger'}
      isGlobal={false}
      description={
        <>
          {synapseClientError && <ClientError error={synapseClientError} />}
          {jsError && jsError.message}
          {stringError && stringError}
        </>
      }
      primaryButtonConfig={primaryButtonConfig}
    />
  )
}

export function ErrorFallbackComponent({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  return (
    <div className="SRC-marginBottomTop">
      <ErrorBanner
        error={error}
        reloadButtonFn={resetErrorBoundary}
      ></ErrorBanner>
    </div>
  )
}

export function TableRowFallbackComponent({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  return (
    <tr>
      <td colSpan={999}>
        <ErrorBanner error={error} reloadButtonFn={resetErrorBoundary} />
      </td>
    </tr>
  )
}

/**
 * This error boundary fallback component does not have a UI, it only outputs the error to console.error
 */
export function EmptyFallbackComponent({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  console.error(error)
  return <></>
}

/**
 * ErrorBoundary component that uses the default error fallback component, unless overridden.
 * Internally uses `react-error-boundary`.
 *
 * Use with {@link react-error-boundary#handleError | handleError}
 * @param props
 * @returns
 */
export const SynapseErrorBoundary = (
  props: PropsWithChildren<
    Optional<ErrorBoundaryPropsWithComponent, 'FallbackComponent'>
  >,
): React.ReactNode => (
  <ErrorBoundary FallbackComponent={ErrorFallbackComponent} {...props} />
)
