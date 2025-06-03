import mockFileEntityData from '@/mocks/entity/mockFileEntity'
import {
  mockFileEntityWithVersion,
  mockFormData,
  mockFormSchema as formschemaJson,
} from '@/mocks/mock_drug_tool_data'
import { mockFileHandle } from '@/mocks/mock_file_handle'
import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { MOCK_USER_ID } from '@/mocks/user/mock_user_profile'
import SynapseClient from '@/synapse-client/index'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { FormData, StatusEnum } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import * as SynapseFormModule from './SynapseForm'
import { IFormData } from './SynapseForm'
import * as SynapseFormUtils from './SynapseFormUtils'
import SynapseFormWrapper, {
  SynapseFormWrapperProps,
  UploadToolSearchParams,
} from './SynapseFormWrapper'
import cloneDeep from 'lodash-es/cloneDeep'
import set from 'lodash-es/set'

const mockSynapseForm = jest
  .spyOn(SynapseFormModule, 'default')
  // @ts-expect-error - Mocking a class component, TypeScript expects us to mock all methods. Instead, just mock with a function component
  .mockImplementation(() => {
    return <div data-testid="SynapseForm" />
  })

const mockFileEntity = mockFileEntityData.entity
const formSchemaEntityId = 'syn9988882982'
const formUiSchemaEntityId = 'syn9988882983'
const formNavSchemaEntityId = 'syn9988882984'
const formDataId = 'syn9988882985'
const formGroupId = 'syn9988882986'
const dataFileHandleId = '43157'
const searchParams: UploadToolSearchParams = {
  formGroupId,
}
const fileNamePath = 'somescreen.somefield'
const formTitle = 'my submission'
const formClass = 'someFormClass'

const mockSubmittedFormData: FormData = {
  formDataId: 'some-id',
  etag: 'some-etag',
  dataFileHandleId: '123',
  groupId: 'foo',
  name: 'myform',
  createdBy: String(MOCK_USER_ID),
  createdOn: new Date().toISOString(),
  modifiedOn: new Date().toISOString(),
  submissionStatus: {
    submittedOn: new Date().toISOString(),
    state: StatusEnum.SUBMITTED_WAITING_FOR_REVIEW,
  },
}

const renderComponent = (props: SynapseFormWrapperProps) => {
  return render(<SynapseFormWrapper {...props} />, {
    wrapper: createWrapper(),
  })
}
const props: SynapseFormWrapperProps = {
  formSchemaEntityId,
  formUiSchemaEntityId,
  formNavSchemaEntityId,
  searchParams,
  fileNamePath,
  formTitle,
  formClass,
}

describe('SynapseFormWrapper', () => {
  beforeEach(() => {
    jest.spyOn(SynapseClient, 'getFileResult').mockResolvedValue({
      fileHandleId: mockFileHandle.id,
      fileHandle: mockFileHandle,
    })
    jest
      .spyOn(SynapseClient, 'getFileHandleContent')
      .mockResolvedValue(JSON.stringify(formschemaJson))

    jest.spyOn(SynapseClient, 'uploadFile').mockResolvedValue({
      fileHandleId: mockFileHandle.id,
      fileName: 'foobar.txt',
    })
    jest.spyOn(SynapseClient, 'getEntity').mockResolvedValue(mockFileEntity)
    jest.spyOn(SynapseClient, 'createEntity').mockResolvedValue(mockFileEntity)
    jest
      .spyOn(SynapseClient, 'getFileHandleContentFromID')
      .mockResolvedValue(JSON.stringify(mockFormData))

    jest.clearAllMocks()
  })

  test('gets configuration data calls should be called with correct params', async () => {
    renderComponent(props)
    await waitFor(() => {
      expect(SynapseClient.getEntity).toHaveBeenNthCalledWith(
        1,
        MOCK_CONTEXT_VALUE.accessToken,
        'syn9988882982',
        undefined,
      )
      expect(SynapseClient.getEntity).toHaveBeenNthCalledWith(
        2,
        MOCK_CONTEXT_VALUE.accessToken,
        'syn9988882983',
        undefined,
      )
      expect(SynapseClient.getEntity).toHaveBeenNthCalledWith(
        3,
        MOCK_CONTEXT_VALUE.accessToken,
        'syn9988882984',
        undefined,
      )
      expect(SynapseClient.getFileResult).toHaveBeenCalledWith(
        mockFileEntity,
        MOCK_CONTEXT_VALUE.accessToken,
        true,
        true,
      )
    })
  })

  describe('if there is no datafile (no formDataId)', () => {
    test('should make 3 calls to getFileEntityData', async () => {
      const getFileEntityData = jest.spyOn(
        SynapseFormUtils,
        'getFileEntityData',
      )
      const getFileHandleContentFromID = jest.spyOn(
        SynapseClient,
        'getFileHandleContentFromID',
      )

      renderComponent(props)

      await waitFor(() => {
        expect(getFileEntityData).toHaveBeenCalledTimes(3)
        expect(getFileHandleContentFromID).not.toHaveBeenCalled()
      })
    })

    test('should populate formData with metadata', async () => {
      jest
        .spyOn(SynapseClient, 'getEntity')
        .mockResolvedValue(mockFileEntityWithVersion)

      renderComponent(props)

      await waitFor(() => expect(SynapseClient.getEntity).toHaveBeenCalled())
    })
  })

  describe('if there is a datafile (formDataId)', () => {
    test('should make 4 calls to getFileEntityData', async () => {
      const _props = {
        ...props,
        ...{ searchParams: { formGroupId, formDataId, dataFileHandleId } },
      }

      const getFileEntityData = jest.spyOn(
        SynapseFormUtils,
        'getFileEntityData',
      )
      jest
        .spyOn(SynapseClient, 'getFileHandleContentFromID')
        .mockResolvedValue(JSON.stringify(mockFormData))

      const getFileHandleContentFromID = jest.spyOn(
        SynapseClient,
        'getFileHandleContentFromID',
      )

      renderComponent(_props)

      await waitFor(() => {
        expect(getFileEntityData).toHaveBeenCalledTimes(3)
        expect(getFileHandleContentFromID).toHaveBeenCalled()
        expect(getFileEntityData).not.toHaveBeenCalledWith(
          MOCK_CONTEXT_VALUE.accessToken,
          formSchemaEntityId,
          mockFormData.metadata.formSchemaVersion,
        )
        expect(getFileEntityData).toHaveBeenCalledWith(
          MOCK_CONTEXT_VALUE.accessToken,
          formSchemaEntityId,
          undefined,
          expect.anything(),
        )
      })
    })

    test('if the form is submitted it should pull the schemas with appropriate versions', async () => {
      const _props = {
        ...props,
        ...{
          searchParams: {
            formGroupId,
            formDataId,
            dataFileHandleId,
            submitted: true,
          },
        },
      }

      const getFileEntityData = jest.spyOn(
        SynapseFormUtils,
        'getFileEntityData',
      )
      jest
        .spyOn(SynapseClient, 'getFileHandleContentFromID')
        .mockResolvedValue(JSON.stringify(mockFormData))

      renderComponent(_props)

      await waitFor(() => {
        expect(getFileEntityData).toHaveBeenCalledTimes(3)
        expect(getFileEntityData).toHaveBeenCalledWith(
          MOCK_CONTEXT_VALUE.accessToken,
          formSchemaEntityId,
          mockFormData.metadata.formSchemaVersion,
          expect.anything(),
        )
        expect(getFileEntityData).not.toHaveBeenCalledWith(
          MOCK_CONTEXT_VALUE.accessToken,
          formSchemaEntityId,
          undefined,
        )
      })
    })
  })

  describe('pass params', () => {
    test('should pass parameters correctly', async () => {
      const _props = {
        ...props,
        ...{ searchParams: { formGroupId, formDataId }, isWizardMode: true },
      }
      renderComponent(_props)

      await screen.findByTestId('SynapseForm')

      expect(mockSynapseForm).toBeCalledWith(
        expect.objectContaining({
          formTitle: props.formTitle,
          isWizardMode: true,
        }),
        undefined,
      )
    })

    test('should pass parameters correctly non wizard mode', async () => {
      const _props = { ...props, ...{ formTitle: 'Another Title' } }
      renderComponent(_props)

      await screen.findByTestId('SynapseForm')

      expect(mockSynapseForm).toBeCalledWith(
        expect.objectContaining({
          formTitle: 'Another Title',
          formData: expect.objectContaining({
            metadata: expect.anything(),
          }),
          isWizardMode: undefined,
        }),
        undefined,
      )
    })
  })

  describe('saving data file', () => {
    test('should CREATE formData if there is not a formDataId', async () => {
      jest
        .spyOn(SynapseClient, 'uploadFile')
        .mockResolvedValue({ fileHandleId: '123', fileName: 'foobar.txt' })

      const create = jest
        .spyOn(SynapseClient, 'createFormData')
        .mockResolvedValue(mockSubmittedFormData)

      const update = jest
        .spyOn(SynapseClient, 'updateFormData')
        .mockResolvedValue(mockSubmittedFormData)

      const formData = cloneDeep(formschemaJson) as unknown as IFormData
      set(formData, props.fileNamePath, 'someName')

      renderComponent(props)

      await screen.findByTestId('SynapseForm')

      // Call under test -- call onSave
      const onSaveCaptor = mockSynapseForm.mock.lastCall![0].onSave
      onSaveCaptor(formData)

      await waitFor(() => {
        expect(create).toHaveBeenCalled()
        expect(update).not.toHaveBeenCalled()
      })
    })

    test('should UPDATE formData if there is formDataId', async () => {
      const _props = {
        ...props,
        ...{ searchParams: { formGroupId, formDataId } },
      }
      jest
        .spyOn(SynapseClient, 'uploadFile')
        .mockResolvedValue({ fileHandleId: '123', fileName: 'foobar.txt' })
      const create = jest
        .spyOn(SynapseClient, 'createFormData')
        .mockResolvedValue(mockSubmittedFormData)
      const update = jest
        .spyOn(SynapseClient, 'updateFormData')
        .mockResolvedValue(mockSubmittedFormData)

      const formData = cloneDeep(formschemaJson) as unknown as IFormData
      set(formData, props.fileNamePath, 'someName')

      renderComponent(_props)

      await screen.findByTestId('SynapseForm')

      // Call under test -- call onSave
      const onSaveCaptor = mockSynapseForm.mock.lastCall![0].onSave
      onSaveCaptor(formData)

      await waitFor(() => {
        expect(create).not.toHaveBeenCalled()
        expect(update).toHaveBeenCalled()
      })
    })
  })

  describe('submitting data file', () => {
    test('should create formData if there is not and ID', async () => {
      jest
        .spyOn(SynapseClient, 'uploadFile')
        .mockResolvedValue({ fileHandleId: '123', fileName: 'foobar.txt' })

      const submit = jest
        .spyOn(SynapseClient, 'submitFormData')
        .mockResolvedValue(mockSubmittedFormData)

      const formData: IFormData = cloneDeep(
        formschemaJson,
      ) as unknown as IFormData
      set(formData, props.fileNamePath, 'someName')

      renderComponent(props)

      await screen.findByTestId('SynapseForm')

      // Call under test -- call onSubmit
      const onSubmitCaptor = mockSynapseForm.mock.lastCall![0].onSubmit
      onSubmitCaptor(formData)

      await waitFor(() => expect(submit).toHaveBeenCalled())
    })
  })
})
