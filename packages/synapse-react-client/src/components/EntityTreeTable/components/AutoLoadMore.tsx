import { SynapseSpinner } from '@/components/LoadingScreen/LoadingScreen'
import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

export const AutoLoadMore: React.FC<{
  depth: number
  isLoading: boolean
  onLoadMore: () => void
  pageToken?: string
}> = ({ depth, isLoading, onLoadMore }) => {
  const hasTriggered = useRef(false)
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: '50px',
    triggerOnce: true,
  })

  useEffect(() => {
    // Only trigger if we're in view, not loading, and haven't triggered yet
    // Each component instance is now unique per page token due to unique row IDs
    if (inView && !isLoading && !hasTriggered.current) {
      hasTriggered.current = true
      onLoadMore()
    }
  }, [inView, isLoading, onLoadMore])

  return (
    <div
      ref={ref}
      style={{
        paddingLeft: depth * 16 + 45,
        minHeight: '40px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <>
        <SynapseSpinner size={16} margin={'0px'} />
        <span>Loading...</span>
      </>
    </div>
  )
}
