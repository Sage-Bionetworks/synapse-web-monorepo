import { BlockingLoader } from '@/components/LoadingScreen/LoadingScreen'
import { PropsWithChildren } from 'react'
import { useApplicationSessionContext } from './ApplicationSessionContext'

export type SessionInitializedGuardProps = PropsWithChildren<{
  /** Optional hint text to display while waiting for session initialization */
  hintText?: string
}>

/**
 * SessionInitializedGuard waits for session initialization to complete before
 * rendering its children. This component displays a loading screen while the
 * session is being initialized. This is useful for components that need to ensure
 * the session state is ready before making any queries or performing operations
 * that depend on authentication status.
 *
 * @example
 * ```tsx
 * <SessionInitializedGuard>
 *   <ComponentThatNeedsSession />
 * </SessionInitializedGuard>
 * ```
 */
export function SessionInitializedGuard(props: SessionInitializedGuardProps) {
  const { children, hintText } = props
  const { hasInitializedSession } = useApplicationSessionContext()

  // Render children even while the session is initializing so that SSG-prefetched
  // (anonymous) data appears in the static HTML and is hydration-stable on the
  // client. A non-blocking BlockingLoader (a fixed-position overlay) sits next
  // to the children until the session manager finishes its initial check.
  return (
    <>
      {!hasInitializedSession && (
        <BlockingLoader show={true} hintText={hintText} />
      )}
      {children}
    </>
  )
}
