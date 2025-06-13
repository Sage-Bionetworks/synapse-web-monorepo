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

const fileWithAnnotations: Partial<EntityBundle> = {
  entity: {
    id: 'syn61841662',
    name: 'blackcat.jpg',
    concreteType: 'org.sagebionetworks.repo.model.FileEntity',
  },
  doiAssociation: {
    objectId: 'syn61841662',
    objectType: DoiObjectType.ENTITY as ObjectType,
    doiUri: '10.7303/syn61841662',
    associationId: '',
    etag: '',
    doiUrl: '',
    associatedBy: '',
    associatedOn: '',
    updatedBy: '',
    updatedOn: '',
  },
  entityType: EntityType.FILE,
}

const doiEntitySuccess: DoiAssociation = {
  objectId: 'syn61841662',
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

const versionedDoiEntitySuccess: DoiAssociation = {
  objectId: 'syn66268092',
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
  })

  it('renders "Cite page" button when only entity DOI exists', async () => {
    mockUseGetDOIAssociation.mockImplementation((request, options) => {
      if (request.id === 'syn61841662' && request.version === 1) {
        return useGetEntityDOIMockImpl()
      } else if (
        request.id === 'syn60582629' &&
        request.version === undefined
      ) {
        return useGetProjectDOIMockImpl()
      }
      return useGetEntityDOIMockImpl()
    })

    render(
      <EntityCitation
        projectId="syn60582629"
        entityId="syn61841662"
        versionNumber={1}
      />,
      { wrapper: createWrapper() },
    )

    act(() => {
      setMockUseGetEntityBundleSuccess(fileWithAnnotations)
      setEntityDOISuccess(doiEntitySuccess) // Entity DOI exists
      setProjectDOISuccess(null) // Project DOI does not exist
    })

    openPopover('Cite page')

    await screen.findByRole('dialog', {
      name: /Citation options/i,
    })

    // screen.debug()
  })

  it('renders "Cite project" when only project DOI exists', async () => {
    mockUseGetDOIAssociation.mockImplementation((request, options) => {
      if (request.id === 'syn61841662' && request.version === 1) {
        return useGetEntityDOIMockImpl()
      } else if (
        request.id === 'syn60582629' &&
        request.version === undefined
      ) {
        return useGetProjectDOIMockImpl()
      }
      return useGetEntityDOIMockImpl()
    })

    render(
      <EntityCitation
        projectId="syn60582629"
        entityId="syn61841662"
        versionNumber={1}
      />,
      { wrapper: createWrapper() },
    )

    // Set mock responses after hooks have initialized
    act(() => {
      setMockUseGetEntityBundleSuccess(fileWithAnnotations)
      setEntityDOISuccess(null) // Entity DOI exists
      setProjectDOISuccess(doiProjectSuccess) // Project DOI does not exist
    })

    openPopover('Cite project')

    await screen.findByRole('dialog', {
      name: /Citation options/i,
    })

    // screen.debug()
  })

  it('Both project and entity have DOIs', async () => {
    render(
      <EntityCitation
        projectId="syn60582629"
        entityId="syn61841662"
        versionNumber={1}
      />,
      { wrapper: createWrapper() },
    )

    act(() => {
      setMockUseGetEntityBundleSuccess(fileWithAnnotations)
      setEntityDOISuccess(doiEntitySuccess)
      setProjectDOISuccess(doiProjectSuccess)
    })

    openPopover('Cite as...')

    await waitFor(() => {
      const citePageButton = screen.getByRole('menuitem', {
        name: /cite only this page/i,
      })
      expect(
        screen.getByRole('menuitem', { name: /cite this project/i }),
      ).toBeInTheDocument()
      expect(citePageButton).toBeInTheDocument()
      userEvent.click(citePageButton)
    })

    await screen.findByRole('dialog', {
      name: /Citation options/i,
    })

    // screen.debug()
  })

  it('Versioned Entity DOI', async () => {
    mockUseGetDOIAssociation.mockImplementation((request, options) => {
      if (request.id === 'syn66268092' && request.version === 1) {
        return useGetEntityDOIMockImpl()
      } else if (
        request.id === 'syn60582629' &&
        request.version === undefined
      ) {
        return useGetProjectDOIMockImpl()
      }
      return useGetEntityDOIMockImpl()
    })

    render(
      <EntityCitation
        projectId="syn60582629"
        entityId="syn66268092"
        versionNumber={1}
      />,
      { wrapper: createWrapper() },
    )

    act(() => {
      setMockUseGetEntityBundleSuccess(fileWithAnnotations)
      setEntityDOISuccess(versionedDoiEntitySuccess) // Entity DOI exists
      setProjectDOISuccess(null) // Project DOI does not exist
    })

    openPopover('Cite page')

    await waitFor(() => {
      screen.findByRole('dialog', {
        name: /Citation options/i,
      })
      expect(
        screen.getByText(content => content.includes('version=1')),
      ).toBeInTheDocument()
    })

    // screen.debug()
  })

  it('Versionless Entity DOI', async () => {
    render(
      <EntityCitation
        projectId="syn60582629"
        entityId="syn68236894"
        versionNumber={undefined}
      />,
      { wrapper: createWrapper() },
    )

    act(() => {
      setMockUseGetEntityBundleSuccess(fileWithAnnotations)
      setEntityDOISuccess(doiEntitySuccess) // Entity DOI exists
      setProjectDOISuccess(null) // Project DOI does not exist
    })

    openPopover('Cite page')

    await waitFor(() => {
      screen.findByRole('dialog', {
        name: /Citation options/i,
      })

      expect(
        screen.queryByText(content => content.includes('version=1')),
      ).not.toBeInTheDocument()
    })
  })
})
