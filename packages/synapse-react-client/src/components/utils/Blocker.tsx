import { useBlocker } from 'react-router-dom'

/**
 * Component wrapper for react-router `useBlocker` hook where the blocker is passed as a render prop. Use the hook when possible.
 * @constructor
 */
export default function Blocker(props: {
  shouldBlock: Parameters<typeof useBlocker>[0]
  children: (blocker: ReturnType<typeof useBlocker>) => React.ReactNode
}) {
  const blocker = useBlocker(props.shouldBlock)

  return props.children(blocker)
}
