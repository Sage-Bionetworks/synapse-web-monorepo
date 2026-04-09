import taskHasAssignee from '@/features/entity/metadata-task/utils/taskHasAssignee'
import type { CurationTask } from '@sage-bionetworks/synapse-client'

describe('taskHasAssignee', () => {
  it('is false when assignee is undefined', () => {
    expect(
      taskHasAssignee({ assigneePrincipalId: undefined } as CurationTask),
    ).toBe(false)
  })

  it('is false when assignee is 0', () => {
    expect(taskHasAssignee({ assigneePrincipalId: '0' } as CurationTask)).toBe(
      false,
    )
  })

  it('is true when assignee is not 0', () => {
    expect(
      taskHasAssignee({ assigneePrincipalId: '123' } as CurationTask),
    ).toBe(true)
  })
})
