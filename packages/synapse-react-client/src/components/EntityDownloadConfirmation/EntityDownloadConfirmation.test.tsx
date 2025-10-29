import AddToDownloadListConfirmationAlert from '@/components/download_list/AddToDownloadListConfirmationAlert/AddToDownloadListConfirmationAlert'
import { convertToConcreteEntityType } from '@/utils/functions/EntityTypeUtils'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { render, screen, waitFor } from '@testing-library/react'
import mockFileEntityData from '../../mocks/entity/mockFileEntity'
import mockTableEntity from '../../mocks/entity/mockTableEntity'
import { useGetEntity } from '../../synapse-queries/'
import { getUseQuerySuccessMock } from '../../testutils/ReactQueryMockUtils'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import EntityDownloadConfirmation, {
  EntityDownloadConfirmationProps,
} from './EntityDownloadConfirmation'

vi.mock('../../synapse-queries')
vi.mock(
  '../download_list/AddToDownloadListConfirmationAlert/AddToDownloadListConfirmationAlert',
  () => ({
    default: vi
      .fn()
      .mockReturnValue(
        <div data-testid="AddToDownloadListConfirmationAlert" />,
      ),
  }),
)

const mockUseGetEntity = vi.mocked(useGetEntity)
const mockAddToDownloadListConfirmationAlert = vi.mocked(
  AddToDownloadListConfirmationAlert,
)

beforeEach(() => {
  vi.clearAllMocks()

  mockUseGetEntity.mockReturnValue(
    getUseQuerySuccessMock(mockTableEntity.entity),
  )
})

describe('EntityDownloadConfirmation', () => {
  const props: EntityDownloadConfirmationProps = {
    entityId: 'syn53132831',
    onIsLoadingChange: vi.fn(),
    handleClose: vi.fn(),
  }

  it.each([EntityType.project, EntityType.folder])(
    'shows the download confirmation UI for a container (%s) when clicked',
    async entityType => {
      mockUseGetEntity.mockReturnValue(
        getUseQuerySuccessMock({
          ...mockTableEntity.entity,
          concreteType: convertToConcreteEntityType(entityType),
        }),
      )

      render(<EntityDownloadConfirmation {...props} />, {
        wrapper: createWrapper(),
      })

      await waitFor(() => {
        expect(
          mockAddToDownloadListConfirmationAlert,
        ).toHaveBeenRenderedWithProps(
          {
            addToDownloadListRequest: {
              concreteType:
                'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
              parentId: props.entityId,
              useVersionNumber: false,
            },
            onClose: props.handleClose,
          },
          { testId: 'AddToDownloadListConfirmationAlert' },
        )
      })
    },
  )

  it.each([EntityType.dataset, EntityType.datasetcollection])(
    'shows the download confirmation UI for a collection (%s) when clicked',
    async entityType => {
      mockUseGetEntity.mockReturnValue(
        getUseQuerySuccessMock({
          ...mockTableEntity.entity,
          concreteType: convertToConcreteEntityType(entityType),
        }),
      )

      render(<EntityDownloadConfirmation {...props} />, {
        wrapper: createWrapper(),
      })

      await waitFor(() => {
        expect(
          mockAddToDownloadListConfirmationAlert,
        ).toHaveBeenRenderedWithProps(
          {
            addToDownloadListRequest: {
              concreteType:
                'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
              parentId: props.entityId,
              useVersionNumber: true,
            },
            onClose: props.handleClose,
          },
          { testId: 'AddToDownloadListConfirmationAlert' },
        )
      })
    },
  )

  it('shows the download confirmation UI for entityview (query) when clicked', async () => {
    mockUseGetEntity.mockReturnValue(
      getUseQuerySuccessMock({
        ...mockTableEntity.entity,
        concreteType: convertToConcreteEntityType(EntityType.entityview),
      }),
    )

    render(<EntityDownloadConfirmation {...props} />, {
      wrapper: createWrapper(),
    })

    await waitFor(() => {
      expect(
        mockAddToDownloadListConfirmationAlert,
      ).toHaveBeenRenderedWithProps(
        {
          addToDownloadListRequest: {
            concreteType:
              'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
            query: { sql: `select * from ${props.entityId}` },
          },
          onClose: props.handleClose,
        },
        { testId: 'AddToDownloadListConfirmationAlert' },
      )
    })
  })

  it('waits for the button to disappear for other entity types', async () => {
    mockUseGetEntity.mockReturnValue(
      getUseQuerySuccessMock(mockFileEntityData.entity),
    )
    render(<EntityDownloadConfirmation {...props} />, {
      wrapper: createWrapper(),
    })
    await waitFor(() => {
      const button = screen.queryByRole('button', {
        name: /download/i,
      })
      expect(button).not.toBeInTheDocument()
    })
  })
})
