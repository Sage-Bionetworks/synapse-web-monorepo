import React, { useCallback, useMemo } from 'react'
import { ErrorBanner } from './error/ErrorBanner'
import { useQueryContext } from './QueryContext/QueryContext'
import { EntityActionsRequired } from './AccessRequirement/EntityActionsRequired'
import {
  SynapseClientError,
  useApplicationSessionContext,
  useSynapseContext,
} from '../utils'
import {
  ErrorBoundary,
  ErrorBoundaryPropsWithComponent,
} from 'react-error-boundary'
import SqlEditor from './SynapseTable/SqlEditor'

/**
 * Error boundary that automatically pulls the error from QueryContext.  If 403, shows entity actions required
 */
export function QueryWrapperErrorBoundary({
  children,
}: React.PropsWithChildren<Record<never, never>>) {
  const { getCurrentQueryRequest, onViewSharingSettingsClicked } =
    useQueryContext()
  const { entityId } = useMemo(
    () => getCurrentQueryRequest(),
    [getCurrentQueryRequest],
  )
  const { accessToken } = useSynapseContext()
  const { clearSession } = useApplicationSessionContext()
  const isSignedIn = Boolean(accessToken)
  const FallbackComponent: ErrorBoundaryPropsWithComponent['FallbackComponent'] =
    useCallback(
      props => {
        if (
          props.error instanceof SynapseClientError &&
          props.error.status === 403 &&
          isSignedIn
        ) {
          return (
            <div className={`ErrorBannerWrapper`}>
              <EntityActionsRequired
                entityId={entityId}
                onViewSharingSettingsClicked={onViewSharingSettingsClicked}
              />
            </div>
          )
        }
        if (
          props.error instanceof SynapseClientError &&
          props.error.reason.startsWith('invalid_token')
        ) {
          clearSession()
        }
        return (
          <div className={`ErrorBannerWrapper`}>
            <SqlEditor resetErrorBoundary={props.resetErrorBoundary} />
            <ErrorBanner {...props} />
          </div>
        )
      },
      [entityId, isSignedIn, onViewSharingSettingsClicked],
    )

  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      {children}
    </ErrorBoundary>
  )
}
