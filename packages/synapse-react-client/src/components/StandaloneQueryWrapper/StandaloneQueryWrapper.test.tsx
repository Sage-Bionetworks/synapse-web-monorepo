import { mockFileViewEntity } from '@/mocks/entity/mockFileView'
import { mockCompleteAsyncJob } from '@/mocks/mockFileViewQuery'
import syn20337467Json from '@/mocks/query/syn20337467.json'
import SynapseClient from '@/synapse-client/index'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseContextType } from '@/stores/SynapseContext/SynapseContext'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import StandaloneQueryWrapper, {
  StandaloneQueryWrapperProps,
} from './StandaloneQueryWrapper'

vi.mock('../../synapse-client/SynapseClient', () => ({
  getEntity: vi.fn(),
  getQueryTableAsyncJobResults: vi.fn(),
}))

const mockGetEntity = vi.mocked(SynapseClient.getEntity)
const mockGetQueryTableAsyncJobResults = vi.mocked(
  SynapseClient.getQueryTableAsyncJobResults,
)

const defaultProps: StandaloneQueryWrapperProps = {
  sql: 'select * from syn123',
  rgbIndex: 7,
}

function renderComponent(
  propOverrides?: Partial<StandaloneQueryWrapperProps>,
  wrapperProps?: SynapseContextType,
) {
  return render(
    <StandaloneQueryWrapper {...defaultProps} {...propOverrides} />,
    {
      wrapper: createWrapper(wrapperProps),
    },
  )
}

describe('StandaloneQueryWrapper rendering tests', () => {
  it('renders a Synapse table', async () => {
    const data = syn20337467Json as QueryResultBundle
    mockGetEntity.mockResolvedValue({
      ...mockFileViewEntity,
      id: 'syn123',
      concreteType: 'org.sagebionetworks.repo.model.table.EntityView',
    })
    mockGetQueryTableAsyncJobResults.mockImplementation(queryBundleRequest => {
      return Promise.resolve({
        ...mockCompleteAsyncJob,
        requestBody: queryBundleRequest,
        jobState: 'COMPLETE',
        responseBody: data,
      })
    })

    renderComponent({
      rgbIndex: 7,
      name: 'Tools',
      sql: 'SELECT * FROM syn20337467',
    })

    await waitFor(() => {
      expect(screen.getAllByTestId('SynapseTable').length).toBe(1)
      expect(screen.queryByTestId('TopLevelControls')).toBeNull()
    })
  })

  it('renders a Synapse table with top level controls', async () => {
    const data = syn20337467Json as QueryResultBundle
    mockGetEntity.mockResolvedValue({
      ...mockFileViewEntity,
      id: 'syn123',
      concreteType: 'org.sagebionetworks.repo.model.table.EntityView',
    })
    mockGetQueryTableAsyncJobResults.mockImplementation(queryBundleRequest => {
      return Promise.resolve({
        ...mockCompleteAsyncJob,
        requestBody: queryBundleRequest,
        jobState: 'COMPLETE',
        responseBody: data,
      })
    })

    renderComponent({
      rgbIndex: 7,
      name: 'Tools',
      sql: 'SELECT * FROM syn20337467',
      showTopLevelControls: true,
    })

    await waitFor(() => {
      expect(screen.getAllByTestId('SynapseTable').length).toBe(1)
      expect(screen.getAllByTestId('TopLevelControls').length).toBe(1)
    })
  })
})
