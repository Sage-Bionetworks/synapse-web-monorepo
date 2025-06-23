import mockFileEntity from '@/mocks/entity/mockFileEntity'
import mockProject from '@/mocks/entity/mockProject'
import {
  mockExternalObjectStoreUploadDestination,
  mockExternalS3UploadDestination,
  mockSynapseStorageUploadDestination,
} from '@/mocks/mock_upload_destination'
import {
  useGetDefaultUploadDestination,
  useGetEntity,
} from '@/synapse-queries/index'
import { getUseQuerySuccessMock } from '@/testutils/ReactQueryMockUtils'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  useUploadFileEntities,
  UseUploadFileEntitiesReturn,
} from '@/utils/hooks/useUploadFileEntity/useUploadFileEntities'
import { act, render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import {
  EntityUpload,
  EntityUploadHandle,
  EntityUploadProps,
} from './EntityUpload'
import { FileUploadProgress } from './FileUploadProgress'
import { ProjectStorageLimitAlert } from './ProjectStorageLimitAlert'

vi.mock('../../utils/hooks/useUploadFileEntity/useUploadFileEntities', () => ({
  useUploadFileEntities: vi.fn(),
}))

vi.mock('../../synapse-queries/entity/useEntity', () => ({
  useGetEntity: vi.fn(),
}))

vi.mock('../../synapse-queries/file/useUploadDestination.ts', () => ({
  useGetDefaultUploadDestination: vi.fn(),
}))

vi.mock('./FileUploadProgress', () => ({
  FILE_UPLOAD_PROGRESS_COMPONENT_HEIGHT_PX: 100,
  FileUploadProgress: vi.fn(() => <div data-testid={'FileUploadProgress'} />),
}))

vi.mock('./ProjectStorageLimitAlert', () => ({
  ProjectStorageLimitAlert: vi.fn(() => (
    <div data-testid={'ProjectStorageLimitAlert'} />
  )),
}))

const mockFileUploadProgress = vi.mocked(FileUploadProgress)
const mockProjectStorageLimitAlert = vi.mocked(ProjectStorageLimitAlert)
const mockUseUploadFileEntities = vi.mocked(useUploadFileEntities)
const mockUseGetEntity = vi.mocked(useGetEntity)
const mockUseGetDefaultUploadDestination = vi.mocked(
  useGetDefaultUploadDestination,
)

const mockUseUploadFileEntitiesReturn = {
  state: 'WAITING',
  isPrecheckingUpload: false,
  activePrompts: [],
  activeUploadCount: 0,
  uploadProgress: [],
  initiateUpload: vi.fn(),
  isUploadReady: true,
} satisfies UseUploadFileEntitiesReturn

describe('EntityUpload', () => {
  function renderComponent(propOverrides: Partial<EntityUploadProps> = {}) {
    const user = userEvent.setup()
    const ref = createRef<EntityUploadHandle>()
    const mockOnUploadReady = vi.fn()
    const result = render(
      <EntityUpload
        ref={ref}
        entityId={mockProject.entity.id}
        onUploadReady={mockOnUploadReady}
        {...propOverrides}
      />,
      {
        wrapper: createWrapper(),
      },
    )

    return { user, ref, result, mockOnUploadReady }
  }

  beforeEach(() => {
    vi.clearAllMocks()

    mockUseUploadFileEntities.mockReturnValue(mockUseUploadFileEntitiesReturn)
    mockUseGetEntity.mockReturnValue(getUseQuerySuccessMock(mockProject.entity))
    mockUseGetDefaultUploadDestination.mockReturnValue(
      getUseQuerySuccessMock(mockSynapseStorageUploadDestination),
    )
  })

  it('supports selecting files for upload into a container', async () => {
    const { user, result } = renderComponent()

    // Verify the user can select either files or a folder -- we cannot test clicking these buttons with testing-library, however
    await user.click(await screen.findByText('Click to upload'))
    await screen.findByRole('menuitem', { name: 'Files' })
    await screen.findByRole('menuitem', { name: 'Folder' })

    const fileInput = result.container.querySelector<HTMLInputElement>(
      'input[type="file"][id=filesToUpload]',
    )!
    expect(fileInput).toBeInTheDocument()
    expect(fileInput).toHaveAttribute('multiple')
    const filesToUpload = [
      new File(['contents'], 'file1.txt'),
      new File(['contents'], 'file2.txt'),
    ]
    await user.upload(fileInput, filesToUpload)

    expect(mockUseUploadFileEntitiesReturn.initiateUpload).toHaveBeenCalledWith(
      [
        { file: filesToUpload[0], rootContainerId: mockProject.entity.id },
        { file: filesToUpload[1], rootContainerId: mockProject.entity.id },
      ],
    )
  })

  it('supports uploading a new version of a specified FileEntity', async () => {
    mockUseGetEntity.mockReturnValue(
      getUseQuerySuccessMock(mockFileEntity.entity),
    )
    const { user, result } = renderComponent({
      entityId: mockFileEntity.entity.id,
    })

    const fileInput = result.container.querySelector<HTMLInputElement>(
      'input[type="file"][id=filesToUpload]',
    )!
    expect(fileInput).toBeInTheDocument()
    const fileToUpload = new File(['contents'], 'file1.txt')

    await user.upload(fileInput, fileToUpload)

    expect(mockUseUploadFileEntitiesReturn.initiateUpload).toHaveBeenCalledWith(
      [{ file: fileToUpload, existingEntityId: mockFileEntity.entity.id }],
    )
  })

  it('does not support selecting a folder when updating a specified FileEntity', async () => {
    mockUseGetEntity.mockReturnValue(
      getUseQuerySuccessMock(mockFileEntity.entity),
    )
    const { user, result } = renderComponent({
      entityId: mockFileEntity.entity.id,
    })

    // Verify no menu options appear, because uploading
    await user.click(await screen.findByText('Click to upload'))
    expect(
      screen.queryByRole('menuitem', { name: 'Files' }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('menuitem', { name: 'Folder' }),
    ).not.toBeInTheDocument()

    // Verify that the file input does not support selecting multiple files
    const fileInput = result.container.querySelector<HTMLInputElement>(
      'input[type="file"][id=filesToUpload]',
    )!
    expect(fileInput).toBeInTheDocument()
    expect(fileInput).not.toHaveAttribute('multiple')
  })

  it('shows uploads in progress', async () => {
    const hookReturnValue = {
      ...mockUseUploadFileEntitiesReturn,
      state: 'UPLOADING',
      activeUploadCount: 1,
      uploadProgress: [
        {
          file: new File(['contents'], 'file1.txt'),
          progress: { value: 1024 * 1024 * 50, total: 1024 * 1024 * 100 },
          status: 'UPLOADING',
          cancel: vi.fn(),
          pause: vi.fn(),
          resume: vi.fn(),
          remove: vi.fn(),
          failureReason: undefined,
        },
      ],
    } satisfies UseUploadFileEntitiesReturn
    mockUseUploadFileEntities.mockReturnValue(hookReturnValue)

    renderComponent({
      entityId: mockFileEntity.entity.id,
    })

    await screen.findByTestId('FileUploadProgress')
    expect(mockFileUploadProgress).toHaveBeenLastRenderedWithProps({
      status: 'UPLOADING',
      fileName: 'file1.txt',
      totalSizeInBytes: hookReturnValue.uploadProgress[0].file.size,
      uploadedSizeInBytes: hookReturnValue.uploadProgress[0].file.size / 2,
      onCancel: hookReturnValue.uploadProgress[0].cancel,
      onPause: hookReturnValue.uploadProgress[0].pause,
      onResume: hookReturnValue.uploadProgress[0].resume,
      onRemove: hookReturnValue.uploadProgress[0].remove,
      errorMessage: undefined,
    })

    await screen.findByText('Uploading 1 Item')
  })

  it('displays a prompt to the user', async () => {
    const hookReturnValue = {
      ...mockUseUploadFileEntitiesReturn,
      state: 'PROMPT_USER',
      activePrompts: [
        {
          info: {
            type: 'CONFIRM_NEW_VERSION',
            fileName: 'file1.txt',
            existingEntityId: 'syn123',
          },
          onConfirmAll: vi.fn(),
          onConfirm: vi.fn(),
          onSkip: vi.fn(),
          onCancelAll: vi.fn(),
        },
        {
          info: {
            type: 'CONFIRM_NEW_VERSION',
            fileName: 'file2.txt',
            existingEntityId: 'syn456',
          },
          onConfirmAll: vi.fn(),
          onConfirm: vi.fn(),
          onSkip: vi.fn(),
          onCancelAll: vi.fn(),
        },
      ],
    } satisfies UseUploadFileEntitiesReturn
    mockUseUploadFileEntities.mockReturnValue(hookReturnValue)

    const { user } = renderComponent({
      entityId: mockFileEntity.entity.id,
    })

    const dialog = await screen.findByRole('dialog')
    within(dialog).getByText('Update existing file?')
    within(dialog).getByText(
      'A file named "file1.txt" (syn123) already exists in this location. Do you want to update the existing file and create a new version?',
    )

    expect(hookReturnValue.activePrompts[0].onConfirm).toHaveBeenCalledTimes(0)
    await user.click(screen.getByRole('button', { name: 'Yes' }))
    expect(hookReturnValue.activePrompts[0].onConfirm).toHaveBeenCalledTimes(1)

    expect(hookReturnValue.activePrompts[0].onSkip).toHaveBeenCalledTimes(0)
    await user.click(screen.getByRole('button', { name: 'No' }))
    expect(hookReturnValue.activePrompts[0].onSkip).toHaveBeenCalledTimes(1)

    expect(hookReturnValue.activePrompts[0].onCancelAll).toHaveBeenCalledTimes(
      0,
    )
    await user.click(screen.getByRole('button', { name: 'Cancel All Uploads' }))
    expect(hookReturnValue.activePrompts[0].onCancelAll).toHaveBeenCalledTimes(
      1,
    )

    expect(hookReturnValue.activePrompts[0].onConfirmAll).toHaveBeenCalledTimes(
      0,
    )
    await user.click(
      screen.getByLabelText(
        'Also update 1 other uploaded file that already exists',
      ),
    )
    await user.click(screen.getByRole('button', { name: 'Yes' }))
    expect(hookReturnValue.activePrompts[0].onConfirmAll).toHaveBeenCalledTimes(
      1,
    )
  })

  it('displays a banner for an alternative storage location', async () => {
    const bannerText = 'a rad custom storage location'
    mockUseGetDefaultUploadDestination.mockReturnValue(
      getUseQuerySuccessMock({
        ...mockExternalS3UploadDestination,
        banner: bannerText,
      }),
    )

    renderComponent()

    await screen.findByText('All uploaded files will be stored in:', {
      exact: false,
    })
    await screen.findByText(bannerText, { exact: false })
  })

  it('allows entering AWS credentials when the UploadDestination is an ExternalObjectStoreUploadDestination', async () => {
    mockUseGetDefaultUploadDestination.mockReturnValue(
      getUseQuerySuccessMock(mockExternalObjectStoreUploadDestination),
    )

    const accessKeyValue = 'myAccessKey'
    const secretKeyValue = 'mySecretKey'

    const { user } = renderComponent()

    const accessKeyInput = await screen.findByLabelText('Access Key')
    const secretKeyInput = await screen.findByLabelText('Secret Key')
    await screen.findByText(
      'Keys are used to locally sign a web request. They are not transmitted or stored by Synapse.',
    )

    await user.type(accessKeyInput, accessKeyValue)
    await user.type(secretKeyInput, secretKeyValue)

    await waitFor(() => {
      expect(mockUseUploadFileEntities).toHaveBeenLastCalledWith(
        mockProject.entity.id,
        accessKeyValue,
        secretKeyValue,
        expect.any(Function),
      )
    })
  })

  it('supports upload via programmatic handle', async () => {
    const { ref, mockOnUploadReady } = renderComponent()

    await waitFor(() => expect(mockOnUploadReady).toHaveBeenCalled())

    const filesToUpload = [
      new File(['contents'], 'file1.txt'),
      new File(['contents'], 'file2.txt'),
    ]

    act(() => {
      ref.current?.handleUploads(filesToUpload)
    })

    expect(mockUseUploadFileEntitiesReturn.initiateUpload).toHaveBeenCalledWith(
      [
        { file: filesToUpload[0], rootContainerId: mockProject.entity.id },
        { file: filesToUpload[1], rootContainerId: mockProject.entity.id },
      ],
    )
  })

  it('does not call onUploadReady if not ready for upload', async () => {
    const hookReturnValue = {
      ...mockUseUploadFileEntitiesReturn,
      isUploadReady: false,
    } satisfies UseUploadFileEntitiesReturn

    mockUseUploadFileEntities.mockReturnValue(hookReturnValue)
    const { ref, mockOnUploadReady } = renderComponent()

    await waitFor(() => expect(ref.current).toBeDefined())
    expect(mockOnUploadReady).not.toHaveBeenCalled()
  })

  it('passes didUploadsExceedStorageLimit = true to ProjectStorageLimitAlert when onStorageLimitExceeded is invoked', async () => {
    renderComponent()

    await waitFor(() => {
      expect(mockProjectStorageLimitAlert).toHaveBeenLastRenderedWithProps({
        didUploadsExceedLimit: false,
        usage: mockSynapseStorageUploadDestination.projectStorageLocationUsage,
      })

      expect(mockUseUploadFileEntities).toHaveBeenCalled()
    })

    const onStorageLimitExceeded = mockUseUploadFileEntities.mock.lastCall![3]!
    expect(onStorageLimitExceeded).toBeDefined()

    act(() => {
      onStorageLimitExceeded()
    })

    expect(mockProjectStorageLimitAlert).toHaveBeenLastRenderedWithProps({
      didUploadsExceedLimit: true,
      usage: mockSynapseStorageUploadDestination.projectStorageLocationUsage,
    })
  })
})
