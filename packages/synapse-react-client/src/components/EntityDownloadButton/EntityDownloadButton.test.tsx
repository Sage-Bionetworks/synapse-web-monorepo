import mockFileEntityData from '@/mocks/entity/mockFileEntity'
import {
  dispatchEntry,
  generateAsyncJobHandlers,
} from '@/mocks/msw/handlers/asyncJobHandlers'
import { server } from '@/mocks/msw/server'
import { createWrapperAndQueryClient } from '@/testutils/TestingLibraryUtils'
import { ENTITY_ID, ENTITY_ID_VERSIONS } from '@/utils/APIConstants'
import { convertToConcreteEntityType } from '@/utils/functions/EntityTypeUtils'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { useDirectDownloadHandler } from '@/utils/hooks/useDirectDownloadHandler'
import {
  AddToDownloadListStatsResponse,
  Entity,
  EntityType,
} from '@sage-bionetworks/synapse-client'
import {
  ENTITY_VIEW_TYPE_MASK_FILE,
  PaginatedResults,
  VersionInfo,
} from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import { createRef } from 'react'
import {
  EntityDownloadButton,
  getDownloadActionsForEntityType,
  getProgrammaticAccessCode,
} from './EntityDownloadButton'

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

// This test will fail if a new EntityType is added and not handled in getProgrammaticAccessCode
describe('getProgrammaticAccessCode', () => {
  test.each(Object.values(EntityType))(
    'getProgrammaticAccessCode: %s',
    type => {
      expect(() => {
        getProgrammaticAccessCode(type, 'syn123', undefined)
      }).not.toThrow()
    },
  )
})

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
  const repoEndpoint = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)
  const onAddToDownloadList = vi.fn()
  let confirmationContainer: HTMLDivElement

  /** Mocks GET /entity/:id */
  function mockEntity(entity: Entity) {
    server.use(
      http.get(`${repoEndpoint}${ENTITY_ID(entity.id!)}`, () =>
        HttpResponse.json(entity),
      ),
    )
  }

  /** Mocks the add-to-download-list stats async job */
  function mockAddToDownloadListStats(fileCount: number, fileSize: number) {
    const response: AddToDownloadListStatsResponse = {
      concreteType:
        'org.sagebionetworks.repo.model.download.AddToDownloadListStatsResponse',
      fileCount,
      fileSize,
    }
    server.use(
      ...generateAsyncJobHandlers(
        dispatchEntry(
          'org.sagebionetworks.repo.model.download.AddToDownloadListStatsRequest',
          () => response,
        ),
        {
          asyncTypeServicePaths: {
            requestPath: '/repo/v1/download/list/add/stats/async/start',
            responsePath: token =>
              `/repo/v1/download/list/add/stats/async/get/${token}`,
          },
        },
      ),
    )
  }

  function renderButton(
    props: Parameters<typeof EntityDownloadButton>[0],
    { isAuthenticated = true }: { isAuthenticated?: boolean } = {},
  ) {
    const { wrapperFn, queryClient } = createWrapperAndQueryClient({
      isAuthenticated,
      downloadCartPageUrl: '/DownloadCart',
    })
    render(<EntityDownloadButton {...props} />, { wrapper: wrapperFn })
    return { queryClient }
  }

  /** Wait for all requests triggered by rendering to settle */
  async function waitForQueriesToSettle(queryClient: {
    isFetching: () => number
  }) {
    await waitFor(() => expect(queryClient.isFetching()).toBe(0))
  }

  beforeAll(() => server.listen())

  beforeEach(() => {
    confirmationContainer = document.createElement('div')
    document.body.appendChild(confirmationContainer)

    mockEntity(mockFileEntityData.entity)
    mockAddToDownloadListStats(100, 1000)
    server.use(
      http.post(
        `${repoEndpoint}/repo/v1/download/list/add`,
        async ({ request }) => {
          onAddToDownloadList(await request.json())
          return HttpResponse.json({ numberOfFilesAdded: 1 })
        },
      ),
    )
    vi.mocked(useDirectDownloadHandler).mockReturnValue({
      downloadFile: vi.fn(),
    })
  })

  afterEach(() => {
    document.body.removeChild(confirmationContainer)
    server.resetHandlers()
    vi.clearAllMocks()
  })

  afterAll(() => server.close())

  async function openDropdown() {
    const button = await screen.findByRole('button', { name: /download/i })
    await userEvent.click(button)
  }

  function getMenuItem(text: string) {
    return screen.getByText(text).closest('[role="menuitem"]') as HTMLElement
  }

  it('disables "Download File" with sign-in tooltip when unauthenticated', async () => {
    renderButton(
      {
        entityId: mockFileEntityData.id,
        name: mockFileEntityData.name,
        entityType: EntityType.file,
      },
      { isAuthenticated: false },
    )

    await openDropdown()

    // aria-label (set to tooltipText) overrides the accessible name, so query by visible text instead
    const downloadFileMenuItem = getMenuItem('Download File')

    expect(downloadFileMenuItem).toHaveAttribute('aria-disabled', 'true')

    await userEvent.hover(downloadFileMenuItem)

    expect(
      await screen.findByText('Sign in to download this file'),
    ).toBeInTheDocument()
  })

  it('enables "Download File" when authenticated', async () => {
    renderButton({
      entityId: mockFileEntityData.id,
      name: mockFileEntityData.name,
      entityType: EntityType.file,
    })

    await openDropdown()

    const downloadFileMenuItem = getMenuItem('Download File')

    expect(downloadFileMenuItem).not.toHaveAttribute('aria-disabled', 'true')

    await userEvent.hover(downloadFileMenuItem)
    expect(
      await screen.findByText('Download this file directly'),
    ).toBeInTheDocument()
  })

  describe('recursive downloads for folders', () => {
    const folderId = 'syn123456'
    const folderEntity = {
      ...mockFileEntityData.entity,
      id: folderId,
      concreteType: convertToConcreteEntityType(EntityType.folder),
    } as Entity

    it('shows download confirmation when adding a folder to download list', async () => {
      mockEntity(folderEntity)

      const { queryClient } = renderButton({
        entityId: folderId,
        name: 'Test Folder',
        entityType: EntityType.folder,
      })

      expect(
        screen.queryByTestId('download-confirmation'),
      ).not.toBeInTheDocument()

      await waitForQueriesToSettle(queryClient)
      await openDropdown()
      await userEvent.click(screen.getByText('Add to Download List'))

      expect(screen.getByTestId('download-confirmation')).toBeInTheDocument()
    })

    it('renders download confirmation into the portal container when provided', async () => {
      mockEntity(folderEntity)

      const portalRef = createRef<HTMLDivElement>()
      // Manually assign since the container is not rendered by React
      ;(portalRef as { current: HTMLDivElement }).current =
        confirmationContainer

      const { queryClient } = renderButton({
        entityId: folderId,
        name: 'Test Folder',
        entityType: EntityType.folder,
        downloadConfirmationContainer: portalRef,
      })

      await waitForQueriesToSettle(queryClient)
      await openDropdown()
      await userEvent.click(screen.getByText('Add to Download List'))

      // Confirmation renders inside the portal container, not inline with the button
      expect(confirmationContainer).toContainElement(
        screen.getByTestId('download-confirmation'),
      )
    })

    it('enables Add to Download List when folder has files in nested subfolders', async () => {
      mockEntity(folderEntity)
      mockAddToDownloadListStats(5, 5000) // files exist in nested subfolders

      const { queryClient } = renderButton({
        entityId: folderId,
        name: 'Test Folder With Nested Files',
        entityType: EntityType.folder,
      })

      await waitForQueriesToSettle(queryClient)
      await openDropdown()

      expect(getMenuItem('Add to Download List')).not.toHaveAttribute(
        'aria-disabled',
        'true',
      )
    })

    it('disables Add to Download List when folder has no files recursively', async () => {
      mockEntity(folderEntity)
      mockAddToDownloadListStats(0, 0) // no files exist anywhere in the folder hierarchy

      const { queryClient } = renderButton({
        entityId: folderId,
        name: 'Empty Folder',
        entityType: EntityType.folder,
      })

      await waitForQueriesToSettle(queryClient)
      await openDropdown()

      expect(getMenuItem('Add to Download List')).toHaveAttribute(
        'aria-disabled',
        'true',
      )
    })

    it('shows download confirmation when adding a dataset to download list', async () => {
      const datasetId = 'syn789012'
      mockEntity({
        ...mockFileEntityData.entity,
        id: datasetId,
        concreteType: convertToConcreteEntityType(EntityType.dataset),
        items: [{ entityId: 'syn111', versionNumber: 1 }], // Dataset must have items to enable Add to Cart
      } as Entity)
      const versions: PaginatedResults<VersionInfo> = {
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
      }
      server.use(
        http.get(`${repoEndpoint}${ENTITY_ID_VERSIONS(datasetId)}`, () =>
          HttpResponse.json(versions),
        ),
      )

      const { queryClient } = renderButton({
        entityId: datasetId,
        name: 'Test Dataset',
        entityType: EntityType.dataset,
      })

      expect(
        screen.queryByTestId('download-confirmation'),
      ).not.toBeInTheDocument()

      await waitForQueriesToSettle(queryClient)
      await openDropdown()
      await userEvent.click(screen.getByText('Add to Download List'))

      expect(screen.getByTestId('download-confirmation')).toBeInTheDocument()
      expect(onAddToDownloadList).not.toHaveBeenCalled()
    })

    it('shows download confirmation when adding an entityview to download list', async () => {
      const entityViewId = 'syn345678'
      mockEntity({
        ...mockFileEntityData.entity,
        id: entityViewId,
        concreteType: convertToConcreteEntityType(EntityType.entityview),
        viewTypeMask: ENTITY_VIEW_TYPE_MASK_FILE, // Entity view must include files to enable Add to Cart
      } as Entity)

      const { queryClient } = renderButton({
        entityId: entityViewId,
        name: 'Test Entity View',
        entityType: EntityType.entityview,
      })

      expect(
        screen.queryByTestId('download-confirmation'),
      ).not.toBeInTheDocument()

      await waitForQueriesToSettle(queryClient)
      await openDropdown()
      await userEvent.click(screen.getByText('Add to Download List'))

      expect(screen.getByTestId('download-confirmation')).toBeInTheDocument()
    })
  })

  it('directly adds file to download list without showing confirmation', async () => {
    const { queryClient } = renderButton({
      entityId: mockFileEntityData.id,
      name: mockFileEntityData.name,
      entityType: EntityType.file,
    })

    await waitForQueriesToSettle(queryClient)
    await openDropdown()
    await userEvent.click(screen.getByText('Add to Download List'))

    expect(
      screen.queryByTestId('download-confirmation'),
    ).not.toBeInTheDocument()
    await waitFor(() =>
      expect(onAddToDownloadList).toHaveBeenCalledWith({
        batchToAdd: [{ fileEntityId: mockFileEntityData.id, versionNumber: 3 }],
      }),
    )
  })
})
