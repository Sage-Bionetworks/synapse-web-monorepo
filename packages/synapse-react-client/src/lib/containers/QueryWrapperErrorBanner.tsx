import React from 'react'
import { ErrorBanner } from './error/ErrorBanner'
import { useQueryContext } from './QueryContext'
import { EntityActionsRequired } from './access_requirements/EntityActionsRequired'

/**
 * Error banner that automatically pulls the error from QueryContext.  If 403, shows entity actions required
 */
export const QueryWrapperErrorBanner = () => {
  const { error, getLastQueryRequest } = useQueryContext()
  const { entityId } = getLastQueryRequest()

  if (error?.status == 403) {
    return <EntityActionsRequired entityId={entityId} />
  } else {
    return <ErrorBanner error={error} />
  }
}
