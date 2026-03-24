import mockFileEntityData from '@/mocks/entity/mockFileEntity'
import {
  useAddFileToDownloadList,
  useGetAddToDownloadListStats,
  useGetEntity,
  useGetVersions,
} from '@/synapse-queries'
import {
  getUseMutationIdleMock,
  getUseQueryLoadingMock,
  getUseQuerySuccessMock,
} from '@/testutils/ReactQueryMockUtils'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { convertToConcreteEntityType } from '@/utils/functions/EntityTypeUtils'
import { useDirectDownloadHandler } from '@/utils/hooks/useDirectDownloadHandler'
import {
  AddToDownloadListStatsResponse,
  EntityType,
} from '@sage-bionetworks/synapse-client'
import {
  ENTITY_VIEW_TYPE_MASK_FILE,
  PaginatedResults,
  VersionInfo,
} from '@sage-bionetworks/synapse-types'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import {
  EntityDownloadButton,
  getDownloadActionsForEntityType,
} from './EntityDownloadButton'

vi.mock('@/utils/context/SynapseContext')
vi.mock('@/synapse-queries')
vi.mock('@/utils/hooks/useDirectDownloadHandler')

vi.mock('../EntityDownloadConfirmation', () => ({
  EntityDownloadConfirmation: (props: {
    entityId: string
    handleClose: () => void
    onIsLoadingChange: (isLoading: boolean) => void
  }) => (
    <div data-testid="download-confirmation">
      <span>{props.entityId}</span>
      <button onClick={props.handleClose}>Close Confirmation</button>
    </div>
  ),
}))

// This test will fail if a new EntityType is added and not handled in getDownloadActionsForEntityType
describe('getDownloadActionsForEntityType', () => {
  test.each(Object.values(EntityType))(
    'getDownloadActionsForEntityType: %s',
    type => {
      expect(() => {
        getDownloadActionsForEntityType(type)
      }).not.toThrow()
    },
  )
})

describe('EntityDownloadButton', () => {
  let confirmationContainer: HTMLDivElement

  beforeEach(() => {
    confirmationContainer = document.createElement('div')
    document.body.appendChild(confirmationContainer)

    vi.mocked(useGetEntity).mockReturnValue(
      getUseQuerySuccessMock(mockFileEntityData.entity),
    )
    vi.mocked(useGetVersions).mockReturnValue(getUseQueryLoadingMock())
    vi.mocked(useGetAddToDownloadListStats).mockReturnValue(
      getUseQuerySuccessMock<AddToDownloadListStatsResponse>({
        concreteType:
          'org.sagebionetworks.repo.model.download.AddToDownloadListStatsResponse',
        fileCount: 100,
        fileSize: 1000,
      }),
    )
    vi.mocked(useAddFileToDownloadList).mockReturnValue(
      getUseMutationIdleMock(),
    )
    vi.mocked(useDirectDownloadHandler).mockReturnValue({
      downloadFile: vi.fn(),
    })
  })

  afterEach(() => {
    document.body.removeChild(confirmationContainer)
  })

  async function openDropdown() {
    const button = await screen.findByRole('button', { name: /download/i })
    await userEvent.click(button)
  }

  it('disables "Download File" with sign-in tooltip when unauthenticated', async () => {
    vi.mocked(useSynapseContext).mockReturnValue({
      isAuthenticated: false,
      downloadCartPageUrl: '/DownloadCart',
    } as unknown as ReturnType<typeof useSynapseContext>)

    render(
      <EntityDownloadButton
        entityId={mockFileEntityData.id}
        name={mockFileEntityData.name}
        entityType={EntityType.file}
      />,
    )

    await openDropdown()

    const downloadFileMenuItem = screen
      .getByText('Download File')
      .closest('[role="menuitem"]') as HTMLElement // aria-label (set to tooltipText) overrides the accessible name, so query by visible text instead

    expect(downloadFileMenuItem).toHaveAttribute('aria-disabled', 'true')

    await userEvent.hover(downloadFileMenuItem)

    expect(
      await screen.findByText('Sign in to download this file'),
    ).toBeInTheDocument()
  })

  it('enables "Download File" when authenticated', async () => {
    vi.mocked(useSynapseContext).mockReturnValue({
      isAuthenticated: true,
      downloadCartPageUrl: '/DownloadCart',
    } as unknown as ReturnType<typeof useSynapseContext>)

    render(
      <EntityDownloadButton
        entityId={mockFileEntityData.id}
        name={mockFileEntityData.name}
        entityType={EntityType.file}
      />,
    )

    await openDropdown()

    const downloadFileMenuItem = screen
      .getByText('Download File')
      .closest('[role="menuitem"]') as HTMLElement

    expect(downloadFileMenuItem).not.toHaveAttribute('aria-disabled', 'true')

    await userEvent.hover(downloadFileMenuItem)
    expect(
      await screen.findByText('Download this file directly'),
    ).toBeInTheDocument()
  })

  describe('recursive downloads for folders', () => {
    beforeEach(() => {
      vi.mocked(useSynapseContext).mockReturnValue({
        isAuthenticated: true,
        downloadCartPageUrl: '/DownloadCart',
      } as unknown as ReturnType<typeof useSynapseContext>)
    })

    it('shows download confirmation when adding a folder to download cart', async () => {
      const folderId = 'syn123456'
      vi.mocked(useGetEntity).mockReturnValue(
        getUseQuerySuccessMock({
          ...mockFileEntityData.entity,
          id: folderId,
          concreteType: convertToConcreteEntityType(EntityType.folder),
        }),
      )

      render(
        <EntityDownloadButton
          entityId={folderId}
          name="Test Folder"
          entityType={EntityType.folder}
        />,
      )

      expect(
        screen.queryByTestId('download-confirmation'),
      ).not.toBeInTheDocument()

      await openDropdown()
      const addToCartMenuItem = screen.getByText('Add to Download Cart')
      await userEvent.click(addToCartMenuItem)

      expect(screen.getByTestId('download-confirmation')).toBeInTheDocument()
    })

    it('renders download confirmation into the portal container when provided', async () => {
      const folderId = 'syn123456'
      vi.mocked(useGetEntity).mockReturnValue(
        getUseQuerySuccessMock({
          ...mockFileEntityData.entity,
          id: folderId,
          concreteType: convertToConcreteEntityType(EntityType.folder),
        }),
      )

      const portalRef = createRef<HTMLDivElement>()
      // Manually assign since the container is not rendered by React
      ;(portalRef as { current: HTMLDivElement }).current =
        confirmationContainer

      render(
        <EntityDownloadButton
          entityId={folderId}
          name="Test Folder"
          entityType={EntityType.folder}
          downloadConfirmationContainer={portalRef}
        />,
      )

      await openDropdown()
      await userEvent.click(screen.getByText('Add to Download Cart'))

      // Confirmation renders inside the portal container, not inline with the button
      expect(confirmationContainer).toContainElement(
        screen.getByTestId('download-confirmation'),
      )
    })

    it('enables Add to Download Cart when folder has files in nested subfolders', async () => {
      const folderId = 'syn123456'
      vi.mocked(useGetEntity).mockReturnValue(
        getUseQuerySuccessMock({
          ...mockFileEntityData.entity,
          id: folderId,
          concreteType: convertToConcreteEntityType(EntityType.folder),
        }),
      )
      vi.mocked(useGetAddToDownloadListStats).mockReturnValue(
        getUseQuerySuccessMock<AddToDownloadListStatsResponse>({
          concreteType:
            'org.sagebionetworks.repo.model.download.AddToDownloadListStatsResponse',
          fileCount: 5, // files exist in nested subfolders
          fileSize: 5000,
        }),
      )

      render(
        <EntityDownloadButton
          entityId={folderId}
          name="Test Folder With Nested Files"
          entityType={EntityType.folder}
        />,
      )

      await openDropdown()

      const addToCartMenuItem = screen
        .getByText('Add to Download Cart')
        .closest('[role="menuitem"]') as HTMLElement
      expect(addToCartMenuItem).not.toHaveAttribute('aria-disabled', 'true')
    })

    it('disables Add to Download Cart when folder has no files recursively', async () => {
      const folderId = 'syn123456'
      vi.mocked(useGetEntity).mockReturnValue(
        getUseQuerySuccessMock({
          ...mockFileEntityData.entity,
          id: folderId,
          concreteType: convertToConcreteEntityType(EntityType.folder),
        }),
      )
      vi.mocked(useGetAddToDownloadListStats).mockReturnValue(
        getUseQuerySuccessMock<AddToDownloadListStatsResponse>({
          concreteType:
            'org.sagebionetworks.repo.model.download.AddToDownloadListStatsResponse',
          fileCount: 0, // no files exist anywhere in the folder hierarchy
          fileSize: 0,
        }),
      )

      render(
        <EntityDownloadButton
          entityId={folderId}
          name="Empty Folder"
          entityType={EntityType.folder}
        />,
      )

      await openDropdown()

      const addToCartMenuItem = screen
        .getByText('Add to Download Cart')
        .closest('[role="menuitem"]') as HTMLElement
      expect(addToCartMenuItem).toHaveAttribute('aria-disabled', 'true')
    })

    it('shows download confirmation when adding a dataset to download cart', async () => {
      const datasetId = 'syn789012'
      vi.mocked(useGetEntity).mockReturnValue(
        getUseQuerySuccessMock({
          ...mockFileEntityData.entity,
          id: datasetId,
          concreteType: convertToConcreteEntityType(EntityType.dataset),
          items: [{ entityId: 'syn111', versionNumber: 1 }], // Dataset must have items to enable Add to Cart
        }),
      )
      vi.mocked(useGetVersions).mockReturnValue(
        getUseQuerySuccessMock<PaginatedResults<VersionInfo>>({
          results: [
            {
              id: datasetId,
              versionNumber: 1,
              versionLabel: '1',
              versionComment: 'test version',
              modifiedBy: 'user',
              contentSize: '1000',
              contentMd5: 'abc123',
              modifiedByPrincipalId: '1',
              modifiedOn: '2024-01-01T00:00:00.000Z',
              isLatestVersion: true,
            },
          ],
          totalNumberOfResults: 1,
        }),
      )
      const mockAddFileToDownloadList = getUseMutationIdleMock()
      vi.mocked(useAddFileToDownloadList).mockReturnValue(
        mockAddFileToDownloadList,
      )

      render(
        <EntityDownloadButton
          entityId={datasetId}
          name="Test Dataset"
          entityType={EntityType.dataset}
        />,
      )

      expect(
        screen.queryByTestId('download-confirmation'),
      ).not.toBeInTheDocument()

      await openDropdown()
      const addToCartMenuItem = screen.getByText('Add to Download Cart')
      await userEvent.click(addToCartMenuItem)

      expect(screen.getByTestId('download-confirmation')).toBeInTheDocument()
      expect(mockAddFileToDownloadList.mutate).not.toHaveBeenCalled()
    })

    it('shows download confirmation when adding an entityview to download cart', async () => {
      const entityViewId = 'syn345678'
      vi.mocked(useGetEntity).mockReturnValue(
        getUseQuerySuccessMock({
          ...mockFileEntityData.entity,
          id: entityViewId,
          concreteType: convertToConcreteEntityType(EntityType.entityview),
          viewTypeMask: ENTITY_VIEW_TYPE_MASK_FILE, // Entity view must include files to enable Add to Cart
        }),
      )

      render(
        <EntityDownloadButton
          entityId={entityViewId}
          name="Test Entity View"
          entityType={EntityType.entityview}
        />,
      )

      expect(
        screen.queryByTestId('download-confirmation'),
      ).not.toBeInTheDocument()

      await openDropdown()
      const addToCartMenuItem = screen.getByText('Add to Download Cart')
      await userEvent.click(addToCartMenuItem)

      expect(screen.getByTestId('download-confirmation')).toBeInTheDocument()
    })
  })

  it('directly adds file to download list without showing confirmation', async () => {
    const mockAddFileToDownloadList = getUseMutationIdleMock()
    vi.mocked(useAddFileToDownloadList).mockReturnValue(
      mockAddFileToDownloadList,
    )

    render(
      <EntityDownloadButton
        entityId={mockFileEntityData.id}
        name={mockFileEntityData.name}
        entityType={EntityType.file}
      />,
    )

    await openDropdown()
    await userEvent.click(screen.getByText('Add to Download Cart'))

    expect(
      screen.queryByTestId('download-confirmation'),
    ).not.toBeInTheDocument()
    expect(mockAddFileToDownloadList.mutate).toHaveBeenCalledWith({
      entityId: mockFileEntityData.id,
      entityVersionNumber: 3,
    })
  })
})
