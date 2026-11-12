import { PropsWithChildren } from 'react'
import { useQueryContext } from '../QueryContext/QueryContext'
import QueryWrapperLoadingScreen from './QueryWrapperLoadingScreen'

/**
 * Shows a loading screen in place of `children` while the enclosing QueryWrapper restores a query saved in the URL, so
 * `children` never mount with, or request results for, the initial query.
 */
export function WaitForQueryRestoreFromUrl(props: PropsWithChildren) {
  // Only this component subscribes to the QueryContext: `children` keeps its identity when the context changes.
  const { isRestoringQueryFromUrl } = useQueryContext()
  if (isRestoringQueryFromUrl) {
    return <QueryWrapperLoadingScreen />
  }
  return props.children
}
