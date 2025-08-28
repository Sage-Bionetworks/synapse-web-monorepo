import { act, render, screen, waitFor } from '@testing-library/react'
import EntityCitation from './EntityCitation'
import { useGetEntityBundle } from '@/synapse-queries/entity/useEntityBundle'
import { useGetDOIAssociation } from '@/synapse-queries/doi/useDOI'
import { getUseQueryMock } from '@/testutils/ReactQueryMockUtils'
import {
  DoiAssociation,
  EntityBundle,
  EntityType,
  ObjectType,
} from '@sage-bionetworks/synapse-types'
import {
  DoiObjectType,
  SynapseClientError,
} from '@sage-bionetworks/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { vi } from 'vitest'
import userEvent from '@testing-library/user-event'

vi.mock('@/synapse-queries/entity/useEntityBundle', () => {
  return {
    useGetEntityBundle: vi.fn(),
  }
})

vi.mock('@/synapse-queries/doi/useDOI', () => {
  return {
    useGetDOIAssociation: vi.fn(),
  }
})

const mockUseGetEntityBundle = vi.mocked(useGetEntityBundle)
const mockUseGetDOIAssociation = vi.mocked(useGetDOIAssociation)

const {
  mock: useGetEntityBundleMockImpl,
  setSuccess: setMockUseGetEntityBundleSuccess,
} = getUseQueryMock<Partial<EntityBundle>, SynapseClientError>()

const { mock: useGetEntityDOIMockImpl, setSuccess: setEntityDOISuccess } =
  getUseQueryMock<DoiAssociation | null, SynapseClientError>()

const { mock: useGetProjectDOIMockImpl, setSuccess: setProjectDOISuccess } =
  getUseQueryMock<DoiAssociation | null, SynapseClientError>()

const mockEntityWithUnversionedDoiId = 'syn61841662'
const mockEntityWithVersionedDoiId = 'syn66268092'
const mockEntityWithNoDoiId = 'syn68243871'
const mockProjectWithNoDoiId = 'syn68243871'
const mockProjectWithDoiId = 'syn68244561'

const doiEntitySuccess: DoiAssociation = {
  objectId: mockEntityWithUnversionedDoiId,
  objectType: DoiObjectType.ENTITY as ObjectType,
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
  entityType: EntityType.FILE,
}

const versionedDoiEntitySuccess: DoiAssociation = {
  objectId: mockEntityWithVersionedDoiId,
  objectType: DoiObjectType.ENTITY as ObjectType,
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
  objectType: DoiObjectType.ENTITY as ObjectType,
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
  const button = screen.getByRole('button', { name: `${buttonName}` })
  await userEvent.click(button)
}

describe('EntityCitation tests', () => {
  beforeEach(() => {
    vi.clearAllMocks()

    mockUseGetEntityBundle.mockImplementation(useGetEntityBundleMockImpl)

    mockUseGetDOIAssociation.mockImplementation((request, options) => {
      if (
        request.id === mockEntityWithVersionedDoiId ||
        request.id === mockEntityWithUnversionedDoiId
      ) {
        return useGetEntityDOIMockImpl()
      } else if (
        request.id === mockProjectWithDoiId ||
        request.id === mockProjectWithNoDoiId
      ) {
        return useGetProjectDOIMockImpl()
      }
      return useGetEntityDOIMockImpl()
    })
  })

  it('renders "Cite page" button when only entity DOI exists', async () => {
    render(
      <EntityCitation
        projectId={mockProjectWithNoDoiId}
        entityId={mockEntityWithVersionedDoiId}
        versionNumber={1}
      />,
      { wrapper: createWrapper() },
    )

    act(() => {
      setMockUseGetEntityBundleSuccess(fileWithDoiAssociation)
      setEntityDOISuccess(doiEntitySuccess)
      setProjectDOISuccess(null)
    })

    await openPopover('Cite page')

    screen.getByRole('dialog', { name: /Citation options/i })
  })

  it('renders "Cite project" when only project DOI exists', async () => {
    render(
      <EntityCitation
        projectId={mockProjectWithDoiId}
        entityId={mockEntityWithNoDoiId}
        versionNumber={1}
      />,
      { wrapper: createWrapper() },
    )

    // Set mock responses after hooks have initialized
    act(() => {
      setMockUseGetEntityBundleSuccess(fileWithDoiAssociation)
      setEntityDOISuccess(null)
      setProjectDOISuccess(doiProjectSuccess)
    })

    await openPopover('Cite project')

    screen.getByRole('dialog', { name: /Citation options/i })
  })

  it('Both project and entity have DOIs', async () => {
    render(
      <EntityCitation
        projectId={mockProjectWithDoiId}
        entityId={mockEntityWithUnversionedDoiId}
        versionNumber={1}
      />,
      { wrapper: createWrapper() },
    )

    act(() => {
      setMockUseGetEntityBundleSuccess(fileWithDoiAssociation)
      setEntityDOISuccess(doiEntitySuccess)
      setProjectDOISuccess(doiProjectSuccess)
    })

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
    render(
      <EntityCitation
        projectId={mockProjectWithNoDoiId}
        entityId={mockEntityWithVersionedDoiId}
        versionNumber={1}
      />,
      { wrapper: createWrapper() },
    )

    act(() => {
      setMockUseGetEntityBundleSuccess(fileWithDoiAssociation)
      setEntityDOISuccess(versionedDoiEntitySuccess)
      setProjectDOISuccess(null)
    })

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
    render(
      <EntityCitation
        projectId={mockProjectWithNoDoiId}
        entityId={mockEntityWithUnversionedDoiId}
        versionNumber={undefined}
      />,
      { wrapper: createWrapper() },
    )

    act(() => {
      setMockUseGetEntityBundleSuccess(fileWithDoiAssociation)
      setEntityDOISuccess(doiEntitySuccess)
      setProjectDOISuccess(null)
    })

    await openPopover('Cite page')

    screen.getByRole('dialog', { name: /Citation options/i })
  })
})
