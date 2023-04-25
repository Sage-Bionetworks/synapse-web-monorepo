import {
  AccessRequirement,
  ManagedACTAccessRequirement,
} from '../../utils/synapseTypes'
import UnmanagedACTAccessRequirementItem from './UnmanagedACTAccessRequirementItem'
import ManagedACTAccessRequirementItem from './managedACTAccess/ManagedACTAccessRequirementItem'
import React from 'react'
import { SUPPORTED_ACCESS_REQUIREMENTS } from './AccessRequirementList'
import SelfSignAccessRequirementItem from './SelfSignAccessRequirementItem'

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
    case SUPPORTED_ACCESS_REQUIREMENTS.SelfSignAccessRequirement:
    case SUPPORTED_ACCESS_REQUIREMENTS.TermsOfUseAccessRequirement:
      return (
        <SelfSignAccessRequirementItem
          accessRequirement={accessRequirement}
          onHide={onHide}
        />
      )
    case SUPPORTED_ACCESS_REQUIREMENTS.ACTAccessRequirement:
      return (
        <UnmanagedACTAccessRequirementItem
          accessRequirement={accessRequirement}
          onHide={onHide}
          entityId={entityId}
        />
      )
    case SUPPORTED_ACCESS_REQUIREMENTS.ManagedACTAccessRequirement:
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
