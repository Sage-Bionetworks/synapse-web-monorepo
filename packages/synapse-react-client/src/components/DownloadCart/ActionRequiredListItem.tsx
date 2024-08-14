import React from 'react'
import { Action } from '@sage-bionetworks/synapse-types'
import { MeetAccessRequirementCard } from './MeetAccessRequirementCard'
import { RequestDownloadCard } from './RequestDownloadCard'
import { EnableTwoFaRequirementCard } from './EnableTwoFaRequirementCard'

export type ActionRequiredListItemProps = {
  action: Action
  count?: number
}

export function ActionRequiredListItem(props: ActionRequiredListItemProps) {
  const { action, count } = props
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
