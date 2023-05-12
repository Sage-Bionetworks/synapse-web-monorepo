import React, { useEffect } from 'react'
import { useGetDownloadListActionsRequiredInfinite } from '../../utils/hooks/SynapseAPI/download/useDownloadList'
import { useInView } from 'react-intersection-observer'
import {
  Action,
  ActionRequiredCount,
} from '../../utils/synapseTypes/DownloadListV2/ActionRequired'
import { MeetAccessRequirementCard } from './MeetAccessRequirementCard'
import { RequestDownloadCard } from './RequestDownloadCard'
import { EnableTwoFaRequirementCard } from './EnableTwoFaRequirementCard'
import { LoadingActionRequiredCard } from './ActionRequiredCard'
import { Box } from '@mui/material'

export type DownloadListActionsRequiredProps = {
  /** Invoked when a user clicks "View Sharing Settings" for a set of files that require the Download permission*/
  onViewSharingSettingsClicked: (benefactorId: string) => void
}

export type ActionRequiredParams = {
  action: Action
  count?: number
  /** Invoked when a user clicks "View Sharing Settings" for a set of files that require the Download permission*/
  onViewSharingSettingsClicked: (benefactorId: string) => void
}

/**
 * Returns rendering for the Action and optional count.
 *
 * @param {Action} action action being rendered
 * @param {number} count number of files associated to the Action (optional)
 */
export const renderActionRequired = (params: ActionRequiredParams) => {
  const { action, count, onViewSharingSettingsClicked } = params
  switch (action.concreteType) {
    case 'org.sagebionetworks.repo.model.download.MeetAccessRequirement': {
      return (
        <MeetAccessRequirementCard
          key={action.accessRequirementId}
          accessRequirementId={action.accessRequirementId}
          count={count}
        />
      )
    }
    case 'org.sagebionetworks.repo.model.download.RequestDownload': {
      return (
        <RequestDownloadCard
          key={action.benefactorId}
          entityId={`syn${action.benefactorId}`}
          count={count}
          onViewSharingSettingsClicked={onViewSharingSettingsClicked}
        />
      )
    }
    case 'org.sagebionetworks.repo.model.download.EnableTwoFa': {
      return (
        <EnableTwoFaRequirementCard
          key={action.accessRequirementId}
          accessRequirementId={action.accessRequirementId}
          count={count}
        />
      )
    }

    // case not supported yet
    default:
      return undefined
  }
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
  return (
    <>
      <Box sx={{ pt: 5 }} display="flex" flexDirection="column" gap={3}>
        {allRows.map((item: ActionRequiredCount) => {
          if (item) {
            return renderActionRequired({
              action: item.action,
              count: item.count,
              onViewSharingSettingsClicked: props.onViewSharingSettingsClicked,
            })
          } else return false
        })}
        {/* To trigger loading the next page */}
        {allRows.length > 0 && <div ref={ref} />}
        {isLoading && <LoadingActionRequiredCard />}
      </Box>
    </>
  )
}
