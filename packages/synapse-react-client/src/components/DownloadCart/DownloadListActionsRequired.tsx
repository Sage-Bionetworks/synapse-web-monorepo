import React, { useEffect } from 'react'
import { useGetDownloadListActionsRequiredInfinite } from '../../synapse-queries/download/useDownloadList'
import { useInView } from 'react-intersection-observer'
import { ActionRequiredCount } from '@sage-bionetworks/synapse-types'
import { LoadingActionRequiredCard } from './ActionRequiredCard/ActionRequiredCard'
import { Box } from '@mui/material'
import { ActionRequiredListItem } from './ActionRequiredListItem'

export type DownloadListActionsRequiredProps = {
  /** Invoked when a user clicks "View Sharing Settings" for a set of files that require the Download permission*/
  onViewSharingSettingsClicked?: (benefactorId: string) => void
}

export const DownloadListActionsRequired: React.FunctionComponent<
  DownloadListActionsRequiredProps
> = props => {
  // Load the next page when this ref comes into view.
  const { ref, inView } = useInView()
  const {
    data,
    status,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetDownloadListActionsRequiredInfinite({
    throwOnError: true,
  })

  useEffect(() => {
    if (
      status === 'success' &&
      !isFetchingNextPage &&
      hasNextPage &&
      fetchNextPage &&
      inView
    ) {
      fetchNextPage()
    }
  }, [status, hasNextPage, isFetchingNextPage, fetchNextPage, inView])

  const allRows = data?.pages.flatMap(page => page.page) ?? []
  return (
    <>
      <Box sx={{ pt: 5 }} display="flex" flexDirection="column" gap={3}>
        {allRows.map((item: ActionRequiredCount, index) => {
          if (item) {
            return (
              <ActionRequiredListItem
                key={index}
                action={item.action}
                count={item.count}
                onViewSharingSettingsClicked={
                  props.onViewSharingSettingsClicked
                }
              />
            )
          } else return false
        })}
        {/* To trigger loading the next page */}
        {allRows.length > 0 && <div ref={ref} />}
        {isLoading && <LoadingActionRequiredCard />}
      </Box>
    </>
  )
}
