import mockFileEntityData from '@/mocks/entity/mockFileEntity'
import {
  useAddFileToDownloadList,
  useAddToDownloadList,
  useGetEntity,
  useGetEntityChildren,
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
import { EntityType } from '@sage-bionetworks/synapse-client'
import {
  AddToDownloadListRequest,
  ENTITY_VIEW_TYPE_MASK_FILE,
  EntityChildrenResponse,
  PaginatedResults,
  VersionInfo,
} from '@sage-bionetworks/synapse-types'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  EntityDownloadButton,
  getDownloadActionsForEntityType,
} from './EntityDownloadButton'

vi.mock('@/utils/context/SynapseContext')
vi.mock('@/synapse-queries')
vi.mock('@/utils/hooks/useDirectDownloadHandler')

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
  beforeEach(() => {
    vi.mocked(useGetEntity).mockReturnValue(
      getUseQuerySuccessMock(mockFileEntityData.entity),
    )
    vi.mocked(useGetVersions).mockReturnValue(getUseQueryLoadingMock())
    vi.mocked(useGetEntityChildren).mockReturnValue(
      getUseQuerySuccessMock<EntityChildrenResponse>({
        page: [],
        nextPageToken: '',
        totalChildCount: 100,
        sumFileSizesBytes: 1000,
      }),
    )
    vi.mocked(useAddFileToDownloadList).mockReturnValue(
      getUseMutationIdleMock(),
    )
    vi.mocked(useAddToDownloadList).mockReturnValue(getUseMutationIdleMock())
    vi.mocked(useDirectDownloadHandler).mockReturnValue({
      downloadFile: vi.fn(),
    })
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
    let mockAddToDownloadList: ReturnType<typeof getUseMutationIdleMock>
    beforeEach(() => {
      vi.mocked(useSynapseContext).mockReturnValue({
        isAuthenticated: true,
        downloadCartPageUrl: '/DownloadCart',
      } as unknown as ReturnType<typeof useSynapseContext>)

      mockAddToDownloadList = getUseMutationIdleMock()
      vi.mocked(useAddToDownloadList).mockReturnValue(mockAddToDownloadList)
    })

    it('sets recursive: true when adding a folder to download cart', async () => {
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

      await openDropdown()
      const addToCartMenuItem = screen.getByText('Add to Download Cart')
      await userEvent.click(addToCartMenuItem)

      expect(mockAddToDownloadList.mutate).toHaveBeenCalledWith({
        parentId: folderId,
        concreteType:
          'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
        recursive: true,
      } satisfies AddToDownloadListRequest)
    })

    it('sets recursive: false when adding a dataset to download cart', async () => {
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

      render(
        <EntityDownloadButton
          entityId={datasetId}
          name="Test Dataset"
          entityType={EntityType.dataset}
        />,
      )

      await openDropdown()
      const addToCartMenuItem = screen.getByText('Add to Download Cart')
      await userEvent.click(addToCartMenuItem)

      expect(mockAddToDownloadList.mutate).toHaveBeenCalledWith({
        parentId: datasetId,
        useVersionNumber: true,
        concreteType:
          'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
      } satisfies AddToDownloadListRequest)
    })

    it('uses a query (no recursive param) when adding an entityview to download cart', async () => {
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

      await openDropdown()
      const addToCartMenuItem = screen.getByText('Add to Download Cart')
      await userEvent.click(addToCartMenuItem)

      expect(mockAddToDownloadList.mutate).toHaveBeenCalledWith({
        concreteType:
          'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
        query: {
          sql: `SELECT * FROM ${entityViewId}`,
        },
      } satisfies AddToDownloadListRequest)
    })
  })
})
