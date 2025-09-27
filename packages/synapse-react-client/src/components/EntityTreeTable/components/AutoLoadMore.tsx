import { SynapseSpinner } from '@/components/LoadingScreen/LoadingScreen'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export const AutoLoadMore: React.FC<{
  depth: number
  isLoading: boolean
  onLoadMore: () => void
}> = ({ depth, isLoading, onLoadMore }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: '50px',
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView && !isLoading) {
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
