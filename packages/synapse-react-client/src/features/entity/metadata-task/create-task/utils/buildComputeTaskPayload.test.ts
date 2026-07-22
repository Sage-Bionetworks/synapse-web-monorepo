import {
  RecordSetGenerationExecutionPropertiesConcreteTypeEnum,
  SampleSheetGenerationExecutionPropertiesConcreteTypeEnum,
} from '@sage-bionetworks/synapse-client'
import { buildComputeTaskPayload } from './buildComputeTaskPayload'

const SAMPLE_SHEET_TYPE =
  SampleSheetGenerationExecutionPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_execution_SampleSheetGenerationExecutionProperties
const RECORD_SET_TYPE =
  RecordSetGenerationExecutionPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_execution_RecordSetGenerationExecutionProperties

describe('buildComputeTaskPayload', () => {
  it('builds a SampleSheetGenerationExecutionProperties payload', () => {
    const payload = buildComputeTaskPayload({
      projectId: 'syn123',
      dataType: 'My Task',
      instructions: 'Do the thing',
      assigneePrincipalId: '456',
      computeTypeFields: {
        concreteType: SAMPLE_SHEET_TYPE,
        sampleSheet: { inputTaskId: '1', destinationTaskId: '2' },
        recordSet: { folderId: '', instructions: '', destinationTaskId: '' },
      },
    })

    expect(payload).toEqual({
      projectId: 'syn123',
      dataType: 'My Task',
      instructions: 'Do the thing',
      assigneePrincipalId: '456',
      taskProperties: {
        concreteType: SAMPLE_SHEET_TYPE,
        inputTaskId: 1,
        destinationTaskId: 2,
      },
    })
  })

  it('builds a RecordSetGenerationExecutionProperties payload', () => {
    const payload = buildComputeTaskPayload({
      projectId: 'syn123',
      dataType: 'My Task',
      instructions: 'Do the thing',
      assigneePrincipalId: '456',
      computeTypeFields: {
        concreteType: RECORD_SET_TYPE,
        sampleSheet: { inputTaskId: '', destinationTaskId: '' },
        recordSet: {
          folderId: 'syn999',
          instructions: 'Transform the files',
          destinationTaskId: '3',
        },
      },
    })

    expect(payload.taskProperties).toEqual({
      concreteType: RECORD_SET_TYPE,
      folderId: 'syn999',
      instructions: 'Transform the files',
      destinationTaskId: 3,
    })
  })

  it('omits invalid or empty task ID fields rather than sending NaN/0', () => {
    const payload = buildComputeTaskPayload({
      projectId: 'syn123',
      dataType: 'My Task',
      instructions: '',
      assigneePrincipalId: undefined,
      computeTypeFields: {
        concreteType: SAMPLE_SHEET_TYPE,
        sampleSheet: { inputTaskId: '', destinationTaskId: 'not-a-number' },
        recordSet: { folderId: '', instructions: '', destinationTaskId: '' },
      },
    })

    expect(payload.taskProperties).toEqual({
      concreteType: SAMPLE_SHEET_TYPE,
      inputTaskId: undefined,
      destinationTaskId: undefined,
    })
    expect(payload.instructions).toBeUndefined()
    expect(payload.assigneePrincipalId).toBeUndefined()
  })

  it('carries over the existing task properties unchanged when computeTypeFields is omitted (e.g. editing a legacy Curate Data task)', () => {
    const existingTaskProperties = {
      concreteType:
        'org.sagebionetworks.repo.model.curation.metadata.FileBasedMetadataTaskProperties' as const,
      uploadFolderId: 'syn1',
      fileViewId: 'syn2',
    }

    const payload = buildComputeTaskPayload({
      existingTask: {
        taskId: 42,
        etag: 'etag-1',
        projectId: 'syn123',
        dataType: 'Old name',
        taskProperties: existingTaskProperties,
      },
      projectId: 'syn123',
      dataType: 'New name',
      instructions: '',
      assigneePrincipalId: undefined,
    })

    expect(payload.taskId).toBe(42)
    expect(payload.etag).toBe('etag-1')
    expect(payload.dataType).toBe('New name')
    expect(payload.taskProperties).toEqual(existingTaskProperties)
  })
})
