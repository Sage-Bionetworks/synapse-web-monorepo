import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { act, render, screen } from '@testing-library/react'
import { SynapseClient, SynapseContextType } from '../../index'
import SynapsePortalBanners, {
  SynapsePortalBannersProps,
} from './SynapsePortalBanners'
import { mockCompleteDataCatalogAsyncJob } from '@/mocks/mockDataCatalogQuery'
import { mockCompleteSourceAppConfigAsyncJob } from '@/mocks/mockSourceAppConfigQuery'
import {
  AsynchronousJobStatus,
  QueryBundleRequest,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'

const defaultProps: SynapsePortalBannersProps = {
  entityId: 'syn1234567',
  dataCatalogEntityId: 'syn6000',
  sourceAppConfigTableID: 'syn7000',
}

vi.mock('../../synapse-client/SynapseClient', () => ({
  getQueryTableAsyncJobResults: vi.fn(),
}))

async function renderComponent(
  props: SynapsePortalBannersProps,
  wrapperProps?: Partial<SynapseContextType>,
) {
  let renderReturn
  // We must await asynchronous events for our assertions to pass
  // eslint-disable-next-line @typescript-eslint/require-await
  await act(async () => {
    renderReturn = render(<SynapsePortalBanners {...props} />, {
      wrapper: createWrapper(wrapperProps),
    })
  })
  return renderReturn
}

const mockGetQueryTableAsyncJobResults = vi.mocked(
  SynapseClient.getQueryTableAsyncJobResults,
)

describe('SynapsePortalBanners', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('Banner is shown', async () => {
    mockGetQueryTableAsyncJobResults.mockImplementation(queryBundleRequest => {
      if (queryBundleRequest.entityId == 'syn6000') {
        // data catalog query
        return Promise.resolve(mockCompleteDataCatalogAsyncJob)
      }
      if (queryBundleRequest.entityId == 'syn7000') {
        // source app config query
        return Promise.resolve(mockCompleteSourceAppConfigAsyncJob)
      }
      return Promise.reject(
        new Error('Unexpected entityId in queryBundleRequest'),
      )
    })

    await renderComponent(defaultProps)
    await screen.findByText('This resource is part of a Portal')
    await screen.findByText('Access it on the AD Knowledge Portal')
  })

  it('Banner is not shown because entity is not in the data catalog', async () => {
    mockGetQueryTableAsyncJobResults.mockImplementation(queryBundleRequest => {
      if (queryBundleRequest.entityId == 'syn6000') {
        // data catalog query
        return Promise.resolve({
          ...mockCompleteDataCatalogAsyncJob,
          responseBody: {
            ...mockCompleteDataCatalogAsyncJob.responseBody,
            totalNumberOfResults: 0,
            queryResult: {
              ...mockCompleteDataCatalogAsyncJob.responseBody!.queryResult,
              queryResults: {
                ...mockCompleteDataCatalogAsyncJob.responseBody!.queryResult!
                  .queryResults,
                rows: [],
              },
            },
          },
        } as AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>)
      }
      if (queryBundleRequest.entityId == 'syn7000') {
        // source app config query
        return Promise.resolve(mockCompleteSourceAppConfigAsyncJob)
      }
      return Promise.reject(
        new Error('Unexpected entityId in queryBundleRequest'),
      )
    })

    await renderComponent(defaultProps)
    expect(
      screen.queryByText('This resource is part of a Portal'),
    ).not.toBeInTheDocument()
  })

  it('Banner is not shown because data catalog appId is not associated to a source app config', async () => {
    mockGetQueryTableAsyncJobResults.mockImplementation(queryBundleRequest => {
      if (queryBundleRequest.entityId == 'syn6000') {
        // data catalog query
        return Promise.resolve(mockCompleteDataCatalogAsyncJob)
      }
      if (queryBundleRequest.entityId == 'syn7000') {
        // source app config query
        return Promise.resolve({
          ...mockCompleteSourceAppConfigAsyncJob,
          responseBody: {
            ...mockCompleteSourceAppConfigAsyncJob.responseBody,
            totalNumberOfResults: 0,
            queryResult: {
              ...mockCompleteSourceAppConfigAsyncJob.responseBody!.queryResult,
              queryResults: {
                ...mockCompleteSourceAppConfigAsyncJob.responseBody!
                  .queryResult!.queryResults,
                rows: [],
              },
            },
          },
        } as AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>)
      }
      return Promise.reject(
        new Error('Unexpected entityId in queryBundleRequest'),
      )
    })

    await renderComponent(defaultProps)
    expect(
      screen.queryByText('This resource is part of a Portal'),
    ).not.toBeInTheDocument()
  })
})
