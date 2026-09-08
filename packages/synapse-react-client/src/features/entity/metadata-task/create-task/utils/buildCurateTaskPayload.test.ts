import {
  FileBasedMetadataTaskPropertiesConcreteTypeEnum,
  RecordBasedMetadataTaskPropertiesConcreteTypeEnum,
} from '@sage-bionetworks/synapse-client'
import { buildCurateTaskPayload } from './buildCurateTaskPayload'

const FILE_BASED_TYPE =
  FileBasedMetadataTaskPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_metadata_FileBasedMetadataTaskProperties
const RECORD_BASED_TYPE =
  RecordBasedMetadataTaskPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_metadata_RecordBasedMetadataTaskProperties

describe('buildCurateTaskPayload', () => {
  it('builds a FileBasedMetadataTaskProperties payload', () => {
    const payload = buildCurateTaskPayload({
      projectId: 'syn123',
      dataType: 'My Task',
      instructions: 'Do the thing',
      assigneePrincipalId: '456',
      curateTypeFields: {
        concreteType: FILE_BASED_TYPE,
        authorizationMode: 'NONE',
        value: { uploadFolderId: 'syn1', fileViewId: 'syn2' },
      },
    })

    expect(payload).toEqual({
      projectId: 'syn123',
      dataType: 'My Task',
      instructions: 'Do the thing',
      assigneePrincipalId: '456',
      taskProperties: {
        concreteType: FILE_BASED_TYPE,
        uploadFolderId: 'syn1',
        fileViewId: 'syn2',
        suggestedAuthorizationMode: undefined,
        collaboratorPrincipalIds: undefined,
      },
    })
  })

  it('builds a RecordBasedMetadataTaskProperties payload', () => {
    const payload = buildCurateTaskPayload({
      projectId: 'syn123',
      dataType: 'My Task',
      instructions: 'Do the thing',
      assigneePrincipalId: '456',
      curateTypeFields: {
        concreteType: RECORD_BASED_TYPE,
        authorizationMode: 'NONE',
        value: { recordSetId: 'syn3' },
      },
    })

    expect(payload.taskProperties).toEqual({
      concreteType: RECORD_BASED_TYPE,
      recordSetId: 'syn3',
      suggestedAuthorizationMode: undefined,
      collaboratorPrincipalIds: undefined,
    })
  })

  it('sets suggestedAuthorizationMode when a non-legacy mode is selected', () => {
    const payload = buildCurateTaskPayload({
      projectId: 'syn123',
      dataType: 'My Task',
      instructions: 'Do the thing',
      assigneePrincipalId: '456',
      curateTypeFields: {
        concreteType: FILE_BASED_TYPE,
        authorizationMode: 'SESSION_OWNER',
        value: { uploadFolderId: 'syn1', fileViewId: 'syn2' },
      },
    })

    expect(payload.taskProperties).toMatchObject({
      suggestedAuthorizationMode: 'SESSION_OWNER',
    })
  })

  it('preserves collaboratorPrincipalIds from the existing task, since there is no UI to edit them', () => {
    const payload = buildCurateTaskPayload({
      existingTask: {
        taskId: 42,
        etag: 'etag-1',
        projectId: 'syn123',
        taskProperties: {
          concreteType: FILE_BASED_TYPE,
          uploadFolderId: 'syn1',
          fileViewId: 'syn2',
          collaboratorPrincipalIds: ['111', '222'],
        },
      },
      projectId: 'syn123',
      dataType: 'My Task',
      instructions: 'Do the thing',
      assigneePrincipalId: '456',
      curateTypeFields: {
        concreteType: FILE_BASED_TYPE,
        authorizationMode: 'NONE',
        value: { uploadFolderId: 'syn1', fileViewId: 'syn2' },
      },
    })

    expect(payload.taskProperties).toMatchObject({
      collaboratorPrincipalIds: ['111', '222'],
    })
  })

  it('omits blank entity ID fields rather than sending empty strings', () => {
    const payload = buildCurateTaskPayload({
      projectId: 'syn123',
      dataType: 'My Task',
      instructions: 'Do the thing',
      assigneePrincipalId: '456',
      curateTypeFields: {
        concreteType: FILE_BASED_TYPE,
        authorizationMode: 'NONE',
        value: { uploadFolderId: '  ', fileViewId: '' },
      },
    })

    expect(payload.taskProperties).toMatchObject({
      uploadFolderId: undefined,
      fileViewId: undefined,
    })
  })
})
