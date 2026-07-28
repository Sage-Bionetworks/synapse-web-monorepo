import {
  CurationTask,
  TaskBundle,
  TaskStatus,
} from '@sage-bionetworks/synapse-client'

export const MOCK_CURATION_TASK_ID = 123
export const MOCK_CURATION_TASK_ASSIGNEE_PRINCIPAL_ID = '456'
export const MOCK_CURATION_TASK_FILE_VIEW_ID = 'syn999'
export const MOCK_CURATION_TASK_DESTINATION_TASK_ID = 789

/**
 * Creates a mock TaskBundle suitable for use in tests. Defaults to a
 * FileBasedMetadataTaskProperties task assigned to MOCK_CURATION_TASK_ASSIGNEE_PRINCIPAL_ID.
 */
export function createMockTaskBundle(
  taskOverrides: Partial<CurationTask> = {},
  statusOverrides: Partial<TaskStatus> = {},
): TaskBundle {
  return {
    task: {
      taskId: MOCK_CURATION_TASK_ID,
      assigneePrincipalId: MOCK_CURATION_TASK_ASSIGNEE_PRINCIPAL_ID,
      taskProperties: {
        concreteType:
          'org.sagebionetworks.repo.model.curation.metadata.FileBasedMetadataTaskProperties',
        fileViewId: MOCK_CURATION_TASK_FILE_VIEW_ID,
        suggestedAuthorizationMode: 'SESSION_OWNER',
      },
      ...taskOverrides,
    },
    status: {
      taskId: MOCK_CURATION_TASK_ID,
      ...statusOverrides,
    },
  } as TaskBundle
}

/**
 * Creates a mock TaskBundle for an executable (Compute Data) task. Defaults to a
 * SampleSheetGenerationExecutionProperties task with a destination task set.
 */
export function createMockExecutableTaskBundle(
  taskOverrides: Partial<CurationTask> = {},
  statusOverrides: Partial<TaskStatus> = {},
): TaskBundle {
  return {
    task: {
      taskId: MOCK_CURATION_TASK_ID,
      assigneePrincipalId: MOCK_CURATION_TASK_ASSIGNEE_PRINCIPAL_ID,
      taskProperties: {
        concreteType:
          'org.sagebionetworks.repo.model.curation.execution.SampleSheetGenerationExecutionProperties',
        destinationTaskId: MOCK_CURATION_TASK_DESTINATION_TASK_ID,
      },
      ...taskOverrides,
    },
    status: {
      taskId: MOCK_CURATION_TASK_ID,
      ...statusOverrides,
    },
  } as TaskBundle
}
