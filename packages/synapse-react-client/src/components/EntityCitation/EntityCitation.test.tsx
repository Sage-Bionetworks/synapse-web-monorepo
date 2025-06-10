import { act, render, screen, waitFor } from '@testing-library/react'
import EntityCitation from './EntityCitation'
import { useGetEntityBundle } from '@/synapse-queries/entity/useEntityBundle'
import { useGetDOIAssociation } from '@/synapse-queries/doi/useDOI'
import { getUseQueryMock } from '@/testutils/ReactQueryMockUtils'
import {
  AnnotationsValueType,
  DoiAssociation,
  EntityBundle,
  EntityType,
  ObjectType,
} from '@sage-bionetworks/synapse-types'
import {
  DoiObjectType,
  GetRepoV1DoiAssociationRequest,
  SynapseClientError,
} from '@sage-bionetworks/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { UseQueryResult } from '@tanstack/react-query'

jest.mock('@/synapse-queries/entity/useEntityBundle', () => {
  return {
    useGetEntityBundle: jest.fn(),
  }
})

jest.mock('@/synapse-queries/doi/useDOI', () => {
  return {
    useGetDOIAssociation: jest.fn(),
  }
})

const mockUseGetEntityBundle = jest.mocked(useGetEntityBundle)
const mockUseGetDOIAssociation = jest.mocked(useGetDOIAssociation)

const {
  mock: useGetEntityBundleMockImpl,
  setSuccess: setMockUseGetEntityBundleSuccess,
} = getUseQueryMock<Partial<EntityBundle>, SynapseClientError>()

const {
  mock: useGetDOIAssociationMockImpl,
  setSuccess: setMockUseGetDOIAssociationSuccess,
} = getUseQueryMock<Partial<DoiAssociation>, SynapseClientError>()

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

const mockAssociation = {
  data: doiEntitySuccess,
  isLoading: false,
  error: null,
  isError: false,
  isSuccess: true,
  refetch: jest.fn(),
  failureCount: 0,
  isFetched: true,
  isFetchedAfterMount: true,
  isFetching: false,
  isLoadingError: false,
  isPaused: false,
  isPending: false,
  isPlaceholderData: false,
  isRefetchError: false,
  isStale: false,
  status: 'success',
  fetchStatus: 'idle',
  dataUpdatedAt: 0,
  errorUpdatedAt: 0,
  failureReason: null,
  errorUpdateCount: 0,
  isInitialLoading: false,
  isRefetching: false,
}

describe('EntityCitation tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    // mockUseGetEntityBundle.mockImplementation(useGetEntityBundleMockImpl)
    // mockUseGetDOIAssociation.mockImplementation(useGetDOIAssociationMockImpl)
  })

  it('renders "Cite page" button when only entity DOI exists', async () => {
    mockUseGetEntityBundle.mockImplementation(useGetEntityBundleMockImpl)
    mockUseGetDOIAssociation.mockImplementation(useGetDOIAssociationMockImpl)

    mockUseGetDOIAssociation.mockImplementation(
      (
        request: GetRepoV1DoiAssociationRequest,
        _options?: any,
      ): UseQueryResult<DoiAssociation | null, SynapseClientError> => {
        if (request.id === 'syn61841662' && request.version === 1) {
          return {
            data: doiEntitySuccess,
            isLoading: false,
            error: null,
            isError: false,
            isSuccess: true,
            refetch: jest.fn(),
            failureCount: 0,
            isFetched: true,
            isFetchedAfterMount: true,
            isFetching: false,
            isLoadingError: false,
            isPaused: false,
            isPending: false,
            isPlaceholderData: false,
            isRefetchError: false,
            isStale: false,
            status: 'success',
            fetchStatus: 'idle',
            dataUpdatedAt: 0,
            errorUpdatedAt: 0,
            failureReason: null,
            errorUpdateCount: 0,
            isInitialLoading: false,
            isRefetching: false,
          }
        }
        return {
          data: null,
          isLoading: false,
          error: null,
          isError: false,
          isSuccess: true,
          refetch: jest.fn(),
          failureCount: 0,
          isFetched: true,
          isFetchedAfterMount: true,
          isFetching: false,
          isLoadingError: false,
          isPaused: false,
          isPending: false,
          isPlaceholderData: false,
          isRefetchError: false,
          isStale: false,
          status: 'success',
          fetchStatus: 'idle',
          dataUpdatedAt: 0,
          errorUpdatedAt: 0,
          failureReason: null,
          errorUpdateCount: 0,
          isInitialLoading: false,
          isRefetching: false,
        }
      },
    )
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
      setMockUseGetDOIAssociationSuccess(doiEntitySuccess)
    })

    await waitFor(() => {
      expect(
        screen.getByRole('button', { name: 'Cite page' }),
      ).toBeInTheDocument()
    })

    screen.debug()
  })

  // it('Only project DOI exists', () => {
  //   render(
  //     <EntityCitation
  //       projectId="syn64042437"
  //       entityId={undefined}
  //       versionNumber={undefined}
  //     />,
  //   )
  //   expect(
  //     screen.getByRole('button', { name: 'Cite project' }),
  //   ).toBeInTheDocument()
  // })

  // it('Both project and entity have DOIs', () => {
  //   render(
  //     <EntityCitation
  //       entityId="syn66268092"
  //       projectId="syn64042437"
  //       versionNumber={1}
  //     />,
  //   )
  //   expect(screen.queryByText('Cite as...')).not.toBeInTheDocument()
  // })

  // it('Fallback to versionless DOI when versioned DOI is missing but entity is latest version', () => {
  //   render(
  //     <EntityCitation
  //       entityId="syn61841662"
  //       projectId="syn60582629"
  //       versionNumber={undefined}
  //     />,
  //   )
  //   expect(
  //     screen.getByRole('button', { name: 'Cite page' }),
  //   ).toBeInTheDocument()
  // })

  // it('Does not use fallback if entity is not the latest version', () => {
  //   render(
  //     <EntityCitation
  //       entityId="syn61841662"
  //       projectId="syn60582629"
  //       versionNumber={1}
  //     />,
  //   )
  //   expect(
  //     screen.getByRole('button', { name: 'Cite page' }),
  //   ).not.toBeInTheDocument()
  // })

  // it('No citation button when no DOI is available for either project or entity', () => {
  //   render(<EntityCitation projectId="syn123" />)
  //   expect(screen.queryByText('Cite as')).not.toBeInTheDocument()
  // })
})
