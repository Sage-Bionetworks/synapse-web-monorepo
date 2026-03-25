import { Optional } from '@/utils/types/Optional'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import React, { PropsWithChildren, useMemo } from 'react'
import {
  ErrorBoundary,
  ErrorBoundaryPropsWithComponent,
  FallbackProps,
} from 'react-error-boundary'
import FullWidthAlert from '../FullWidthAlert'
import { AlertButtonConfig } from '../FullWidthAlert/FullWidthAlert'
import SignInButton from '../SignInButton'
import ClientError from './ClientError'
import { BlockingLoader } from '../LoadingScreen/LoadingScreen'

type ErrorBannerProps = {
  error?: string | Error | SynapseClientError | null
  reloadButtonFn?: () => void
  /** The loading indicator to display if the error is automatically recoverable (e.g. a login error before the session was initialized)
   * @default BlockingLoader A blocking loader that covers the entire screen
   */
  loadingIndicator?: React.ReactNode
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

const defaultErrorBannerLoader = <BlockingLoader show />

export const ErrorBanner = (props: ErrorBannerProps): React.ReactNode => {
  const {
    error,
    reloadButtonFn,
    loadingIndicator = defaultErrorBannerLoader,
  } = props

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
          {synapseClientError && (
            <ClientError
              error={synapseClientError}
              reloadFn={reloadButtonFn}
              loadingIndicator={loadingIndicator}
            />
          )}
          {jsError && jsError.message}
          {stringError && stringError}
        </>
      }
      primaryButtonConfig={primaryButtonConfig}
    />
  )
}

function createErrorFallbackComponent(
  loadingIndicator: React.ReactNode,
): React.ComponentType<FallbackProps> {
  return function ErrorFallbackComponent({ error, resetErrorBoundary }) {
    return (
      <div className="SRC-marginBottomTop">
        <ErrorBanner
          error={error}
          reloadButtonFn={resetErrorBoundary}
          loadingIndicator={loadingIndicator}
        ></ErrorBanner>
      </div>
    )
  }
}

/**
 * This error boundary fallback component does not have a UI, it only outputs the error to console.error
 */
export function EmptyFallbackComponent({ error }: FallbackProps) {
  console.error(error)
  return <></>
}

type SynapseErrorBoundaryProps = PropsWithChildren<
  Optional<ErrorBoundaryPropsWithComponent, 'FallbackComponent'>
> & {
  loadingIndicator?: React.ReactNode
}

/**
 * ErrorBoundary component that uses the default error fallback component, unless overridden.
 * Internally uses `react-error-boundary`.
 *
 * This component must always be used within an ApplicationSessionContext provider.
 *
 * Use with {@link react-error-boundary#handleError | handleError}
 * @param props
 * @returns
 */
export function SynapseErrorBoundary(
  props: SynapseErrorBoundaryProps,
): React.ReactNode {
  if (props.loadingIndicator && props.FallbackComponent) {
    console.warn(
      "SynapseErrorBoundary: 'loadingIndicator' prop will be ignored because a custom 'FallbackComponent' was provided.",
    )
  }

  const FallbackComponent = useMemo(
    () => createErrorFallbackComponent(props.loadingIndicator),
    [props.loadingIndicator],
  )

  return <ErrorBoundary FallbackComponent={FallbackComponent} {...props} />
}
