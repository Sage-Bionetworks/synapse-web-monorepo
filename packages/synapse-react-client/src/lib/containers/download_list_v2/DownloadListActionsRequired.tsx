import React, { useEffect } from 'react'
import { useGetDownloadListActionsRequiredInfinite } from '../../utils/hooks/SynapseAPI/download/useDownloadList'
import { useInView } from 'react-intersection-observer'
import { ActionRequiredCount } from '../../utils/synapseTypes/DownloadListV2/ActionRequiredCount'
import { MeetAccessRequirementCard } from './MeetAccessRequirementCard'
import { RequestDownloadCard } from './RequestDownloadCard'
import { EnableTwoFaRequirementCard } from './EnableTwoFaRequirementCard'
import { LoadingActionRequiredCard } from './ActionRequiredCard'
import { Box } from '@mui/material'

export type DownloadListActionsRequiredProps = {
  /** Invoked when a user clicks "View Sharing Settings" for a set of files that require the Download permission*/
  onViewSharingSettingsClicked: (benefactorId: string) => void
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
    useErrorBoundary: true,
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

  /**
   * Returns rendering for the ActionRequiredCount.
   *
   * @param {ActionRequiredCount} actionRequiredCount actionRequiredCount being rendered
   */
  const renderActionRequired = (actionRequiredCount: ActionRequiredCount) => {
    switch (actionRequiredCount.action.concreteType) {
      case 'org.sagebionetworks.repo.model.download.MeetAccessRequirement': {
        return (
          <MeetAccessRequirementCard
            key={actionRequiredCount.action.accessRequirementId}
            accessRequirementId={actionRequiredCount.action.accessRequirementId}
            count={actionRequiredCount.count}
          />
        )
      }
      case 'org.sagebionetworks.repo.model.download.RequestDownload': {
        return (
          <RequestDownloadCard
            key={actionRequiredCount.action.benefactorId}
            entityId={`syn${actionRequiredCount.action.benefactorId}`}
            count={actionRequiredCount.count}
            onViewSharingSettingsClicked={props.onViewSharingSettingsClicked}
          />
        )
      }
      case 'org.sagebionetworks.repo.model.download.EnableTwoFa': {
        return (
          <EnableTwoFaRequirementCard
            key={actionRequiredCount.action.accessRequirementId}
            accessRequirementId={actionRequiredCount.action.accessRequirementId}
            count={actionRequiredCount.count}
          />
        )
      }

      // case not supported yet
      default:
        return undefined
    }
  }
  return (
    <>
      <Box sx={{ pt: 5 }} display="flex" flexDirection="column" gap={3}>
        {allRows.map((item: ActionRequiredCount) => {
          if (item) {
            return renderActionRequired(item)
          } else return false
        })}
        {/* To trigger loading the next page */}
        {allRows.length > 0 && <div ref={ref} />}
        {isLoading && <LoadingActionRequiredCard />}
      </Box>
    </>
  )
}
