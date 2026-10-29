import { ReactNode, Suspense } from 'react'
import { useIsHydrated } from 'synapse-react-client/utils/hooks/useIsHydrated'

export type ClientOnlyProps = {
  children?: ReactNode
  /** Rendered while prerendering, during hydration, and while `children` suspend. Defaults to nothing. */
  fallback?: ReactNode
}

/**
 * Renders `children` only in the browser, after hydration. During SSG prerendering and hydration it renders
 * `fallback` instead, so queries made by `children` don't run at build time. In client-only apps, `children`
 * render immediately.
 */
export default function ClientOnly(props: ClientOnlyProps) {
  const { children, fallback = null } = props
  const isHydrated = useIsHydrated()

  if (!isHydrated) {
    return <>{fallback}</>
  }

  // Revealing `children` after hydration is a synchronous update, so content that suspends needs its own
  // boundary; otherwise React would replace an ancestor boundary's visible content with that boundary's fallback.
  return <Suspense fallback={fallback}>{children}</Suspense>
}
