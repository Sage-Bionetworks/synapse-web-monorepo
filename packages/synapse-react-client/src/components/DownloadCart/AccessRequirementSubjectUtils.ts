import {
  AccessRequirement,
  RestrictableObjectType,
} from '@sage-bionetworks/synapse-types'

export type AccessRequirementSubject = {
  subjectId?: string
  subjectType?: RestrictableObjectType
}

/**
 * Returns the first subject controlled by the access requirement, or an empty object when it has none
 * (e.g. when its subjects are defined by annotations).
 */
export function getFirstSubject(
  accessRequirement: AccessRequirement,
): AccessRequirementSubject {
  const [firstSubject] = accessRequirement.subjectIds ?? []
  if (!firstSubject) {
    return {}
  }
  return { subjectId: firstSubject.id, subjectType: firstSubject.type }
}
