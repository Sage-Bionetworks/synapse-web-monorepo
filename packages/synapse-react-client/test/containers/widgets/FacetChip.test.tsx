import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import * as React from 'react'
import {
  QueryContextProvider,
  QueryContextType,
} from '../../../src/components/QueryContext'
import {
  FacetChip,
  FacetChipProps,
} from '../../../src/components/widgets/query-filter/FacetChip'
import { SynapseContextProvider } from '../../../src/utils/SynapseContext'
import {
  FacetColumnResult,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { MOCK_CONTEXT_VALUE } from '../../../mocks/MockSynapseContext'
import mockQueryResponseData from '../../../mocks/mockQueryResponseData'
import {
  QueryVisualizationContextProvider,
  QueryVisualizationContextType,
} from '../../../src/components/QueryVisualizationWrapper'
import FullContextProvider from '../../../src/utils/FullContextProvider'

const mockFacetColumn: FacetColumnResult = {
  columnName: 'Make',
  facetType: 'enumeration',
  concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
  facetValues: [],
}

const mockOnClick = jest.fn()

let props: FacetChipProps = {
  facet: mockFacetColumn,
  isChecked: true,
  onClick: mockOnClick,
}

const mockExecuteQueryRequest = jest.fn()
const mockGetQueryRequest = jest.fn()

const defaultQueryContext: Partial<QueryContextType> = {
  data: mockQueryResponseData as QueryResultBundle,
  getLastQueryRequest: mockGetQueryRequest,
  executeQueryRequest: mockExecuteQueryRequest,
  isLoadingNewBundle: false,
}

const defaultQueryVisualizationContext: Partial<QueryVisualizationContextType> =
  {
    topLevelControlsState: {
      showColumnFilter: true,
      showFacetFilter: true,
      showFacetVisualization: true,
      showSearchBar: false,
      showDownloadConfirmation: false,
      showColumnSelectDropdown: false,
      showSqlEditor: false,
    },
    getColumnDisplayName: jest.fn(col => col),
  }

function renderComponent(props: FacetChipProps) {
  jest.clearAllMocks()
  return render(<FacetChip {...props} />, {
    wrapper: ({ children }) => {
      return (
        <FullContextProvider synapseContext={MOCK_CONTEXT_VALUE}>
          <QueryContextProvider queryContext={defaultQueryContext}>
            <QueryVisualizationContextProvider
              queryVisualizationContext={defaultQueryVisualizationContext}
            >
              {children}
            </QueryVisualizationContextProvider>
          </QueryContextProvider>
        </FullContextProvider>
      )
    },
  })
}

describe('FacetChip tests', () => {
  it('should render a single chip correctly', async () => {
    renderComponent(props)
    await screen.findByRole('button', { name: 'Make' })
  })

  it('calls onClick when clicking chip', async () => {
    renderComponent(props)
    const chip = await screen.findByRole('button', { name: 'Make' })
    fireEvent.click(chip)
    expect(mockOnClick).toBeCalled()
  })
})
