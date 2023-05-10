import {
  AccessRequirement,
  ManagedACTAccessRequirement,
} from '../../utils/synapseTypes'
import UnmanagedACTAccessRequirementItem from './RequirementItem/UnmanagedACTAccessRequirementItem'
import ManagedACTAccessRequirementItem from './ManagedACTAccessRequirementRequestFlow/ManagedACTAccessRequirementItem'
import React from 'react'
import SelfSignAccessRequirementItem from './RequirementItem/SelfSignAccessRequirementItem'

export type AccessRequirementListItemProps = {
  accessRequirement: AccessRequirement
  entityId: string
  onHide: () => void
  onRequestAccess: (accessRequirement: ManagedACTAccessRequirement) => void
}

/**
 * Renders an individual AR item for the AccessRequirementList
 */
export function AccessRequirementListItem(
  props: AccessRequirementListItemProps,
) {
  const { accessRequirement, entityId, onHide, onRequestAccess } = props
  switch (accessRequirement.concreteType) {
    case 'org.sagebionetworks.repo.model.SelfSignAccessRequirement':
    case 'org.sagebionetworks.repo.model.TermsOfUseAccessRequirement':
      return (
        <SelfSignAccessRequirementItem
          accessRequirement={accessRequirement}
          onHide={onHide}
        />
      )
    case 'org.sagebionetworks.repo.model.ACTAccessRequirement':
      return (
        <UnmanagedACTAccessRequirementItem
          accessRequirement={accessRequirement}
          onHide={onHide}
          entityId={entityId}
        />
      )
    case 'org.sagebionetworks.repo.model.ManagedACTAccessRequirement':
      return (
        <ManagedACTAccessRequirementItem
          accessRequirement={accessRequirement}
          onHide={onHide}
          entityId={entityId}
          onRequestAccess={() => {
            onRequestAccess(accessRequirement)
          }}
        />
      )
    // case not supported yet
    default:
      console.warn(
        'Unsupported access requirement type:',
        accessRequirement.concreteType,
      )
      return <></>
  }
}
