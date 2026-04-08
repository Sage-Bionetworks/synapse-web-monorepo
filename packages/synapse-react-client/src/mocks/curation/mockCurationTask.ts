import { TaskBundle } from '@sage-bionetworks/synapse-client'

export const MOCK_CURATION_TASK_ID = 123
export const MOCK_CURATION_TASK_ASSIGNEE_PRINCIPAL_ID = '456'
export const MOCK_CURATION_TASK_FILE_VIEW_ID = 'syn999'

/**
 * Creates a mock TaskBundle suitable for use in tests. Defaults to a
 * FileBasedMetadataTaskProperties task assigned to MOCK_CURATION_TASK_ASSIGNEE_PRINCIPAL_ID.
 */
export function createMockTaskBundle(
  overrides: Partial<TaskBundle> = {},
): TaskBundle {
  return {
    task: {
      taskId: MOCK_CURATION_TASK_ID,
      assigneePrincipalId: MOCK_CURATION_TASK_ASSIGNEE_PRINCIPAL_ID,
      taskProperties: {
        concreteType:
          'org.sagebionetworks.repo.model.curation.metadata.FileBasedMetadataTaskProperties',
        fileViewId: MOCK_CURATION_TASK_FILE_VIEW_ID,
      },
    },
    status: {
      taskId: MOCK_CURATION_TASK_ID,
    },
    ...overrides,
  } as TaskBundle
}
