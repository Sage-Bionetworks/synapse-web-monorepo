import React, { useState } from 'react'
import { Box, Button, Collapse, Stack } from '@mui/material'
import {
  ErrorBoundary,
  ErrorBoundaryPropsWithComponent,
  FallbackProps,
} from 'react-error-boundary'
import { SynapseClientError } from 'synapse-client'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import { Optional } from '../../utils/types/Optional'
import { useJiraIssueCollector } from '../JiraIssueCollector'
import FullWidthAlert from '../FullWidthAlert'
import SignInButton from '../SignInButton'

type ErrorBannerProps = {
  error?: string | Error | SynapseClientError | null
  reloadButtonFn?: () => void
}

export const YOU_ARE_NOT_AUTHORIZED_MESSAGE =
  'You are not authorized to access this resource.'

export const SignInPrompt = () => {
  return (
    <>
      Please <SignInButton /> to view this resource.
    </>
  )
}

export const ClientError = (props: { error: SynapseClientError }) => {
  const [showDetailedError, setShowDetailedError] = useState(false)
  const { accessToken } = useSynapseContext()
  const { error } = props
  const loginError =
    (error.status === 403 || error.status === 401) && !accessToken
  const accessDenied = error.status === 403 && accessToken

  useJiraIssueCollector({
    show: error.status >= 500,
    issueCollector: 'SWC',
    issueSummary: '',
    issueDescription: error.reason,
    issuePriority: '3',
  })

  if (loginError) {
    return <SignInPrompt />
  } else if (accessDenied) {
    return (
      <>
        <Stack direction="row" spacing={2}>
          <Box display="flex" alignItems="center">
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
          <Box paddingTop={1}>
            <pre>{error.reason}</pre>
          </Box>
        </Collapse>
      </>
    )
  } else {
    return <>{error.reason}</>
  }
}

export const ErrorBanner = (props: ErrorBannerProps) => {
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
      primaryButtonConfig={
        reloadButtonFn && {
          text: 'Reload',
          onClick: reloadButtonFn,
        }
      }
    />
  )
}

export const ErrorFallbackComponent: React.FunctionComponent<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div className="SRC-marginBottomTop">
      <ErrorBanner
        error={error}
        reloadButtonFn={resetErrorBoundary}
      ></ErrorBanner>
    </div>
  )
}

export const TableRowFallbackComponent: React.FunctionComponent<
  FallbackProps
> = ({ error, resetErrorBoundary }) => {
  return (
    <tr>
      <td colSpan={999}>
        <ErrorBanner error={error} reloadButtonFn={resetErrorBoundary} />
      </td>
    </tr>
  )
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
  props: React.PropsWithChildren<
    Optional<ErrorBoundaryPropsWithComponent, 'FallbackComponent'>
  >,
) => <ErrorBoundary FallbackComponent={ErrorFallbackComponent} {...props} />
