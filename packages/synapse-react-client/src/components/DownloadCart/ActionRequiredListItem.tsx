import React from 'react'
import { Action } from '@sage-bionetworks/synapse-types'
import { MeetAccessRequirementCard } from './MeetAccessRequirementCard'
import { RequestDownloadCard } from './RequestDownloadCard'
import { EnableTwoFaRequirementCard } from './EnableTwoFaRequirementCard'

export type ActionRequiredListItemProps = {
  action: Action
  isComplete?: boolean
  count?: number
  /** Invoked when a user clicks "View Sharing Settings" for a set of files that require the Download permission*/
  onViewSharingSettingsClicked?: (benefactorId: string) => void
}

export function ActionRequiredListItem(props: ActionRequiredListItemProps) {
  const { action, count, onViewSharingSettingsClicked, isComplete } = props
  switch (action.concreteType) {
    case 'org.sagebionetworks.repo.model.download.MeetAccessRequirement': {
      return (
        <MeetAccessRequirementCard
          key={action.accessRequirementId}
          accessRequirementId={action.accessRequirementId}
          count={count}
          isComplete={isComplete}
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
          isComplete={isComplete}
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
      return <></>
  }
}
