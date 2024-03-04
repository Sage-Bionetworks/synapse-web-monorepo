import React, { useMemo } from 'react'
import { ErrorBanner } from './error/ErrorBanner'
import { useQueryContext } from './QueryContext/QueryContext'
import { EntityActionsRequired } from './AccessRequirement/EntityActionsRequired'
import { useSynapseContext } from '../utils'

/**
 * Error banner that automatically pulls the error from QueryContext.  If 403, shows entity actions required
 */
export const QueryWrapperErrorBanner = () => {
  const { error, getCurrentQueryRequest, onViewSharingSettingsClicked } =
    useQueryContext()
  const { entityId } = useMemo(
    () => getCurrentQueryRequest(),
    [getCurrentQueryRequest],
  )
  const { accessToken } = useSynapseContext()

  if (error?.status == 403 && accessToken) {
    return (
      <EntityActionsRequired
        entityId={entityId}
        onViewSharingSettingsClicked={onViewSharingSettingsClicked}
      />
    )
  } else {
    return <ErrorBanner error={error} />
  }
}
