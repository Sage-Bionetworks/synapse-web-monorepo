import React, { useEffect } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { useGetDownloadListActionsRequiredInfinite } from '../../utils/hooks/SynapseAPI/download/useDownloadList'
import { useInView } from 'react-intersection-observer'
import { ActionRequiredCount } from '../../utils/synapseTypes/DownloadListV2/ActionRequiredCount'
import { MeetAccessRequirementCard } from './MeetAccessRequirementCard'
import { RequestDownloadCard } from './RequestDownloadCard'
import { EnableTwoFaRequirementCard } from './EnableTwoFaRequirementCard'
import { LoadingActionRequiredCard } from './ActionRequiredCard'

export type DownloadListActionsRequiredProps = {
  /** Invoked when a user clicks "View Sharing Settings" for a set of files that require the Download permission*/
  onViewSharingSettingsClicked: (benefactorId: string) => void
}

export const DownloadListActionsRequired: React.FunctionComponent<
  DownloadListActionsRequiredProps
> = props => {
  const handleError = useErrorHandler()
  // Load the next page when this ref comes into view.
  const { ref, inView } = useInView()
  const {
    data,
    status,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    isError,
    error: newError,
  } = useGetDownloadListActionsRequiredInfinite()

  useEffect(() => {
    if (isError && newError) {
      handleError(newError)
    }
  }, [isError, newError, handleError])

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
      {allRows.length > 0 && (
        <div className="DownloadListActionsRequired">
          {allRows.map((item: ActionRequiredCount) => {
            if (item) {
              return renderActionRequired(item)
            } else return false
          })}
          {/* To trigger loading the next page */}
          <div ref={ref} />
        </div>
      )}
      {isLoading && <LoadingActionRequiredCard />}
    </>
  )
}
