import WideButton from '@/components/styled/WideButton'
import { Box } from '@mui/material'
import { useEffect } from 'react'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import { useSuspenseGetQueryMetadata } from './useGetQueryMetadata'

export type ViewMoreQueryResultsButtonProps = {
  hasNextPage: boolean
  fetchNextPage: () => void
  isFetchingNextPage: boolean
  initialLimit?: number
  initialLimitIsApplied?: boolean
  onRemoveInitialLimit?: () => void
}

export function ViewMoreQueryResultsButton(
  props: ViewMoreQueryResultsButtonProps,
) {
  const {
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    initialLimit,
    initialLimitIsApplied,
    onRemoveInitialLimit,
  } = props
  const {
    data: { queryCount },
  } = useSuspenseGetQueryMetadata()

  useEffect(() => {
    if (
      initialLimitIsApplied &&
      initialLimit != null &&
      queryCount != null &&
      onRemoveInitialLimit != null
    ) {
      if (initialLimit >= queryCount)
        // The initial limit is not necessary, so remove it.
        onRemoveInitialLimit()
    }
  }, [initialLimitIsApplied, initialLimit, queryCount, onRemoveInitialLimit])

  const showViewMoreButton = initialLimitIsApplied || hasNextPage

  if (!showViewMoreButton) {
    return null
  }

  return (
    <Box display="flex" justifyContent="flex-start">
      <WideButton
        variant="contained"
        color="secondary"
        size="large"
        onClick={() => {
          if (initialLimitIsApplied && onRemoveInitialLimit != null) {
            onRemoveInitialLimit()
          } else {
            void fetchNextPage()
          }
        }}
        disabled={isFetchingNextPage}
      >
        {isFetchingNextPage ? <SynapseSpinner size={24} /> : 'View More'}
      </WideButton>
    </Box>
  )
}
