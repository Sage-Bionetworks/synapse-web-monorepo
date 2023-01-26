import { AccessRequirement } from '../../utils/synapseTypes/AccessRequirement/AccessRequirement'
import { UserProfile, AccessRequirementStatus } from '../../utils/synapseTypes'

export type AccessRequirementProps<T extends AccessRequirement> = {
  entityId: string
  accessRequirement: T
  accessRequirementStatus: AccessRequirementStatus
  user: UserProfile | undefined
  onHide?: Function
}
