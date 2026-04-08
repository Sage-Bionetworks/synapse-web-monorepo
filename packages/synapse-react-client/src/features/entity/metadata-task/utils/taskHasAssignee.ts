import type { CurationTask } from '@sage-bionetworks/synapse-client'

export default function taskHasAssignee(task: CurationTask): boolean {
  return !!(task.assigneePrincipalId && Number(task.assigneePrincipalId) !== 0)
}
