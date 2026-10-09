import AddToDownloadListConfirmationAlert from '@/components/download_list/AddToDownloadListConfirmationAlert/AddToDownloadListConfirmationAlert'
import { server } from '@/mocks/msw/server'
import { ENTITY_ID } from '@/utils/APIConstants'
import { convertToConcreteEntityType } from '@/utils/functions/EntityTypeUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { Entity } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import mockFileEntityData from '../../mocks/entity/mockFileEntity'
import mockTableEntity from '../../mocks/entity/mockTableEntity'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import EntityDownloadConfirmation, {
  EntityDownloadConfirmationProps,
} from './EntityDownloadConfirmation'

vi.mock(
  '../download_list/AddToDownloadListConfirmationAlert/AddToDownloadListConfirmationAlert',
)

function mockGetEntity(entity: Entity & { versionNumber?: number }) {
  server.use(
    http.get(
      `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_ID(':id')}`,
      () => HttpResponse.json(entity),
    ),
  )
}

const mockAddToDownloadListConfirmationAlert = vi
  .mocked(AddToDownloadListConfirmationAlert)
  .mockReturnValue(<div data-testid="AddToDownloadListConfirmationAlert" />)

beforeAll(() => server.listen())
beforeEach(() => {
  vi.clearAllMocks()
  mockGetEntity(mockTableEntity.entity)
})
afterEach(() => server.restoreHandlers())
afterAll(() => server.close())

describe('EntityDownloadConfirmation', () => {
  const props: EntityDownloadConfirmationProps = {
    entityId: 'syn53132831',
    onIsLoadingChange: vi.fn(),
    handleClose: vi.fn(),
  }

  it.each([EntityType.project, EntityType.folder])(
    'shows the download confirmation UI for a container (%s) when clicked',
    async entityType => {
      mockGetEntity({
        ...mockTableEntity.entity,
        concreteType: convertToConcreteEntityType(entityType),
      })

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
              recursive: true,
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
      mockGetEntity({
        ...mockTableEntity.entity,
        concreteType: convertToConcreteEntityType(entityType),
      })

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
              recursive: false,
            },
            onClose: props.handleClose,
          },
          { testId: 'AddToDownloadListConfirmationAlert' },
        )
      })
    },
  )

  it('shows the download confirmation UI for entityview (query) when clicked', async () => {
    mockGetEntity({
      ...mockTableEntity.entity,
      concreteType: convertToConcreteEntityType(EntityType.entityview),
    })

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

  it('shows the download confirmation UI for entityview snapshot (query) when clicked', async () => {
    const versionNumber = 3
    mockGetEntity({
      ...mockTableEntity.entity,
      concreteType: convertToConcreteEntityType(EntityType.entityview),
      versionNumber,
    })

    render(
      <EntityDownloadConfirmation {...props} versionNumber={versionNumber} />,
      {
        wrapper: createWrapper(),
      },
    )

    await waitFor(() => {
      expect(
        mockAddToDownloadListConfirmationAlert,
      ).toHaveBeenRenderedWithProps(
        {
          addToDownloadListRequest: {
            concreteType:
              'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
            query: { sql: `select * from ${props.entityId}.${versionNumber}` },
          },
          onClose: props.handleClose,
        },
        { testId: 'AddToDownloadListConfirmationAlert' },
      )
    })
  })

  it('waits for the button to disappear for other entity types', async () => {
    mockGetEntity(mockFileEntityData.entity)
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
