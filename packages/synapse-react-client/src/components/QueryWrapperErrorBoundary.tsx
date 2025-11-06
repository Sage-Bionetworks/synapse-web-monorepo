import { SynapseClientError, useSynapseContext } from '@/utils'
import { PropsWithChildren, useCallback, useMemo } from 'react'
import {
  ErrorBoundary,
  ErrorBoundaryPropsWithComponent,
} from 'react-error-boundary'
import { EntityActionsRequired } from './AccessRequirement/EntityActionsRequired'
import { ErrorBanner } from './error/ErrorBanner'
import { useQueryContext } from './QueryContext/QueryContext'
import SqlEditor from './SynapseTable/SqlEditor'

/**
 * Error boundary that automatically pulls the error from QueryContext.  If 403, shows entity actions required
 */
export function QueryWrapperErrorBoundary({
  children,
}: PropsWithChildren<Record<never, never>>) {
  const { getCurrentQueryRequest, onViewSharingSettingsClicked } =
    useQueryContext()
  const { entityId } = useMemo(
    () => getCurrentQueryRequest(),
    [getCurrentQueryRequest],
  )
  const { isAuthenticated } = useSynapseContext()

  const FallbackComponent: ErrorBoundaryPropsWithComponent['FallbackComponent'] =
    useCallback(
      props => {
        if (
          props.error instanceof SynapseClientError &&
          props.error.status === 403 &&
          isAuthenticated
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
        return (
          <div className={`ErrorBannerWrapper`}>
            <SqlEditor resetErrorBoundary={props.resetErrorBoundary} />
            <ErrorBanner {...props} />
          </div>
        )
      },
      [entityId, isAuthenticated, onViewSharingSettingsClicked],
    )

  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      {children}
    </ErrorBoundary>
  )
}
