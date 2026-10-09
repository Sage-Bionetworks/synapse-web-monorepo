import {
  getEntityBundleHandler,
  getVersionedEntityBundleHandler,
} from '@/mocks/msw/handlers/entityHandlers'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import {
  DoiAssociation,
  DoiAssociationObjectTypeEnum,
  EntityType,
} from '@sage-bionetworks/synapse-client'
import { EntityBundle } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import { vi } from 'vitest'
import EntityCitation from './EntityCitation'

const mockEntityWithUnversionedDoiId = 'syn61841662'
const mockEntityWithVersionedDoiId = 'syn66268092'
const mockEntityWithNoDoiId = 'syn68243871'
const mockProjectWithNoDoiId = 'syn68243871'
const mockProjectWithDoiId = 'syn68244561'

const doiEntitySuccess: DoiAssociation = {
  objectId: mockEntityWithUnversionedDoiId,
  objectType: DoiAssociationObjectTypeEnum.ENTITY,
  doiUri: '10.7303/syn61841662',
  associationId: '',
  etag: '',
  doiUrl: '',
  associatedBy: '',
  associatedOn: '',
  updatedBy: '',
  updatedOn: '',
}

const fileWithDoiAssociation: Partial<EntityBundle> = {
  entity: {
    id: 'syn61841662',
    name: 'blackcat.jpg',
    concreteType: 'org.sagebionetworks.repo.model.FileEntity',
  },
  doiAssociation: doiEntitySuccess,
  entityType: EntityType.file,
}

const versionedDoiEntitySuccess: DoiAssociation = {
  objectId: mockEntityWithVersionedDoiId,
  objectType: DoiAssociationObjectTypeEnum.ENTITY,
  doiUri: '10.7303/syn66268092.1',
  associationId: '',
  etag: '',
  doiUrl: '',
  associatedBy: '',
  associatedOn: '',
  updatedBy: '',
  updatedOn: '',
}

const doiProjectSuccess: DoiAssociation = {
  objectId: 'syn64042437',
  objectType: DoiAssociationObjectTypeEnum.ENTITY,
  doiUri: '10.7303/syn64042437',
  associationId: '',
  etag: '',
  doiUrl: '',
  associatedBy: '',
  associatedOn: '',
  updatedBy: '',
  updatedOn: '',
}

const openPopover = async (buttonName: string) => {
  const button = await screen.findByRole('button', { name: buttonName })
  await userEvent.click(button)
}

const repoOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

/**
 * Sets up the backend so that the entity bundle is returned and DOI associations are returned for the given
 * object IDs. Any other object ID has no DOI association (404).
 */
function mockBackend(
  doiAssociationsByObjectId: Record<string, DoiAssociation>,
) {
  server.use(
    getEntityBundleHandler(repoOrigin, fileWithDoiAssociation),
    getVersionedEntityBundleHandler(repoOrigin, fileWithDoiAssociation),
    http.get(`${repoOrigin}/repo/v1/doi/association`, ({ request }) => {
      const id = new URL(request.url).searchParams.get('id')
      const association = id ? doiAssociationsByObjectId[id] : undefined
      return association
        ? HttpResponse.json(association)
        : HttpResponse.json({ reason: 'Not found' }, { status: 404 })
    }),
  )
}

describe('EntityCitation tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => {
    server.resetHandlers()
    vi.clearAllMocks()
  })
  afterAll(() => server.close())

  it('renders "Cite page" button when only entity DOI exists', async () => {
    mockBackend({ [mockEntityWithVersionedDoiId]: doiEntitySuccess })
    render(
      <EntityCitation
        projectId={mockProjectWithNoDoiId}
        entityId={mockEntityWithVersionedDoiId}
        versionNumber={1}
      />,
      { wrapper: createWrapper() },
    )

    await openPopover('Cite page')

    screen.getByRole('dialog', { name: /Citation options/i })
  })

  it('renders "Cite project" when only project DOI exists', async () => {
    mockBackend({ [mockProjectWithDoiId]: doiProjectSuccess })
    render(
      <EntityCitation
        projectId={mockProjectWithDoiId}
        entityId={mockEntityWithNoDoiId}
        versionNumber={1}
      />,
      { wrapper: createWrapper() },
    )

    await openPopover('Cite project')

    screen.getByRole('dialog', { name: /Citation options/i })
  })

  it('Both project and entity have DOIs', async () => {
    mockBackend({
      [mockEntityWithUnversionedDoiId]: doiEntitySuccess,
      [mockProjectWithDoiId]: doiProjectSuccess,
    })
    render(
      <EntityCitation
        projectId={mockProjectWithDoiId}
        entityId={mockEntityWithUnversionedDoiId}
        versionNumber={1}
      />,
      { wrapper: createWrapper() },
    )

    await openPopover('Cite as...')

    let citePageMenuItem: HTMLElement | null = null
    await waitFor(() => {
      citePageMenuItem = screen.getByRole('menuitem', {
        name: /cite only this page/i,
      })
      screen.getByRole('menuitem', { name: /cite this project/i })
    })
    if (citePageMenuItem) {
      await userEvent.click(citePageMenuItem)
    }

    screen.getByRole('dialog', { name: /Citation options/i })
  })

  // Skipped, see PORTALS-3746
  it.skip('Versioned Entity DOI', async () => {
    mockBackend({ [mockEntityWithVersionedDoiId]: versionedDoiEntitySuccess })
    render(
      <EntityCitation
        projectId={mockProjectWithNoDoiId}
        entityId={mockEntityWithVersionedDoiId}
        versionNumber={1}
      />,
      { wrapper: createWrapper() },
    )

    await openPopover('Cite page')

    await screen.findByRole('dialog', {
      name: /Citation options/i,
    })

    await waitFor(() =>
      expect(
        screen.getByText(content => content.includes('version=1')),
      ).toBeInTheDocument(),
    )
  })

  it('Versionless Entity DOI', async () => {
    mockBackend({ [mockEntityWithUnversionedDoiId]: doiEntitySuccess })
    render(
      <EntityCitation
        projectId={mockProjectWithNoDoiId}
        entityId={mockEntityWithUnversionedDoiId}
        versionNumber={undefined}
      />,
      { wrapper: createWrapper() },
    )

    await openPopover('Cite page')

    screen.getByRole('dialog', { name: /Citation options/i })
  })
})
