import {
  ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  AccessRequirement,
  MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  ManagedACTAccessRequirement,
  SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  TERMS_OF_USE_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  RestrictableObjectType,
} from '@sage-bionetworks/synapse-types'
import UnmanagedACTAccessRequirementItem from './RequirementItem/UnmanagedACTAccessRequirementItem'
import ManagedACTAccessRequirementItem from './ManagedACTAccessRequirementRequestFlow/ManagedACTAccessRequirementItem'
import React from 'react'
import SelfSignAccessRequirementItem from './RequirementItem/SelfSignAccessRequirementItem'

export type AccessRequirementListItemProps = {
  accessRequirement: AccessRequirement
  onHide: () => void
  onRequestAccess: (accessRequirement: ManagedACTAccessRequirement) => void
  subjectId: string
  subjectType: RestrictableObjectType
}

/**
 * Renders an individual AR item for the AccessRequirementList
 */
export function AccessRequirementListItem(
  props: AccessRequirementListItemProps,
) {
  const { accessRequirement, subjectId, subjectType, onHide, onRequestAccess } =
    props
  switch (accessRequirement.concreteType) {
    case SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE:
    case TERMS_OF_USE_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE:
      return (
        <SelfSignAccessRequirementItem
          accessRequirement={accessRequirement}
          onHide={onHide}
        />
      )
    case ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE:
      return (
        <UnmanagedACTAccessRequirementItem
          accessRequirement={accessRequirement}
          onHide={onHide}
          subjectId={subjectId}
          subjectType={subjectType}
        />
      )
    case MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE:
      return (
        <ManagedACTAccessRequirementItem
          accessRequirement={accessRequirement}
          onHide={onHide}
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
