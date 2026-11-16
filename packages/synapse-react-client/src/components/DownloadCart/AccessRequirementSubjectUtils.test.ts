import { mockManagedACTAccessRequirement } from '@/mocks/accessRequirement/mockAccessRequirements'
import { RestrictableObjectType } from '@sage-bionetworks/synapse-types'
import { getFirstSubject } from './AccessRequirementSubjectUtils'

describe('getFirstSubject', () => {
  it('returns the first of several subjects', () => {
    expect(
      getFirstSubject({
        ...mockManagedACTAccessRequirement,
        subjectIds: [
          { id: 'syn1', type: RestrictableObjectType.ENTITY },
          { id: '2', type: RestrictableObjectType.TEAM },
        ],
      }),
    ).toEqual({ subjectId: 'syn1', subjectType: RestrictableObjectType.ENTITY })
  })

  it('returns no subject when the access requirement has none', () => {
    expect(
      getFirstSubject({
        ...mockManagedACTAccessRequirement,
        subjectsDefinedByAnnotations: true,
        subjectIds: [],
      }),
    ).toEqual({})
  })
})
