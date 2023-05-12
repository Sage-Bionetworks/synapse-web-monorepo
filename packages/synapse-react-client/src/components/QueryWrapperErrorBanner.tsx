import React from 'react'
import { ErrorBanner } from './error/ErrorBanner'
import { useQueryContext } from './QueryContext'

/**
 * Error banner that automatically pulls the error from QueryContext.
 */
export const QueryWrapperErrorBanner = () => {
  const { error } = useQueryContext()
  return <ErrorBanner error={error} />
}
