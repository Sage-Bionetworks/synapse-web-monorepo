import { SynapseSpinner } from '@/components/LoadingScreen/LoadingScreen'
import { Box, Button } from '@mui/material'

export const SHOW_MORE_BUTTON_TEXT = 'Show More'

export type InfiniteTableLayoutProps = {
  /** The table of data to display */
  table: React.ReactNode
  /** Whether the first page of data is loading. If true, a spinner will be shown */
  isLoading: boolean
  /** Optional loader to display when loading. Default is a spinner */
  loader?: React.ReactNode
  /** Whether the first page of data is empty. If true, "No Results" will be shown */
  isEmpty: boolean
  /** Whether there is a next page of data. If false, the "Show More" button will not be shown */
  hasNextPage: boolean
  /** Callback for when the "Show More" button is clicked */
  onFetchNextPageClicked: () => void
  /** Whether the next page of data is loading. If true, the "Show More" button will show a loading state */
  isFetchingNextPage: boolean
  /** Optional node to display when there are no results. Default is "No results" */
  noResults?: React.ReactNode
}

const DEFAULT_LOADER = (
  <div className="SRC-center-text">
    <SynapseSpinner size={40} />
  </div>
)

const DEFAULT_NO_RESULTS = 'No Results'

/**
 * Provides a standardized layout of a table with infinite data.
 */
export default function InfiniteTableLayout(props: InfiniteTableLayoutProps) {
  const {
    table,
    isLoading,
    isEmpty,
    hasNextPage,
    onFetchNextPageClicked,
    isFetchingNextPage,
    noResults = DEFAULT_NO_RESULTS,
    loader = DEFAULT_LOADER,
  } = props

  return (
    <div>
      {table}
      {isLoading && loader}
      {!isLoading && isEmpty && (
        <Box className="SRC-center-text" sx={{ my: 3 }}>
          {noResults}
        </Box>
      )}
      {hasNextPage && (
        <Button
          variant="outlined"
          color="primary"
          loading={isFetchingNextPage}
          onClick={() => {
            onFetchNextPageClicked()
          }}
        >
          {SHOW_MORE_BUTTON_TEXT}
        </Button>
      )}
    </div>
  )
}
