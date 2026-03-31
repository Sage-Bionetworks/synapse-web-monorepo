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

  if (!hasInitializedSession) {
    return <BlockingLoader show={true} hintText={hintText} />
  }

  return <>{children}</>
}
