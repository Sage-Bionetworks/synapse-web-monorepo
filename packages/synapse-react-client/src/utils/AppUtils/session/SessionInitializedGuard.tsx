import { BlockingLoader } from '@/components/LoadingScreen/LoadingScreen'
import { PropsWithChildren } from 'react'
import { useApplicationSessionContext } from './ApplicationSessionContext'
import { SynapseErrorBoundary } from '@/components'

export type SessionInitializedGuardProps = PropsWithChildren<{
  /** Optional hint text to display while waiting for session initialization */
  hintText?: string
}>

/**
 * SessionInitializedGuard displays a loading screen while the session is being
 * initialized. This is useful for components that need to ensure the session state
 * is ready before making any queries or performing operations that depend on
 * authentication status.
 *
 * For SSG compatibility, the children are rendered within an error boundary that
 * is keyed on the session initialization state. This allows any SSG-prefetched data
 * to be rendered in the static HTML and be hydration-stable on the client, while
 * still showing a loading overlay in client-mode until the session manager finishes
 * its initial check.
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
      <SynapseErrorBoundary resetKeys={[hasInitializedSession]}>
        {children}
      </SynapseErrorBoundary>
    </>
  )
}
