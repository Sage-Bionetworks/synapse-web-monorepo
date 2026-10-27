import { SynapseClientError, useSynapseContext } from '@/utils'
import { PropsWithChildren, useCallback, useMemo } from 'react'
import {
  ErrorBoundary,
  ErrorBoundaryPropsWithComponent,
} from 'react-error-boundary'
import { EntityActionsRequired } from './AccessRequirement/EntityActionsRequired'
import { ErrorBanner } from './error/ErrorBanner'
import { useQueryContext } from './QueryContext/QueryContext'
import {
  AggregateQueryErrorNotice,
  getAggregateQueryError,
} from './QueryWrapper/AggregateQueryErrorNotice'
import SqlEditor from './SynapseTable/SqlEditor'

/**
 * Error boundary that automatically pulls the error from QueryContext. Shows a notice when an aggregate-only result
 * was withheld (BELOW_THRESHOLD / ROW_SUPPRESSED), entity actions required for other 403s, and otherwise an error
 * banner. Resets when the current query changes.
 */
export function QueryWrapperErrorBoundary({
  children,
}: PropsWithChildren<Record<never, never>>) {
  const { getCurrentQueryRequest, currentQueryRequest } = useQueryContext()
  const { entityId } = useMemo(
    () => getCurrentQueryRequest(),
    [getCurrentQueryRequest],
  )
  const { isAuthenticated } = useSynapseContext()

  const FallbackComponent: ErrorBoundaryPropsWithComponent['FallbackComponent'] =
    useCallback(
      props => {
        // These errors are also 403s, so they must be checked before the access-requirement branch.
        const aggregateQueryError = getAggregateQueryError(props.error)
        if (aggregateQueryError) {
          return <AggregateQueryErrorNotice error={aggregateQueryError} />
        }
        if (
          props.error instanceof SynapseClientError &&
          props.error.status === 403 &&
          isAuthenticated
        ) {
          return (
            <div className={`ErrorBannerWrapper`}>
              <EntityActionsRequired entityId={entityId} />
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
      [entityId, isAuthenticated],
    )

  return (
    <ErrorBoundary
      FallbackComponent={FallbackComponent}
      resetKeys={[currentQueryRequest]}
    >
      {children}
    </ErrorBoundary>
  )
}
