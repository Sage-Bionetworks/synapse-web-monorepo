import { render, screen, waitFor } from '@testing-library/react'
import * as React from 'react'
import StandaloneQueryWrapper, {
  StandaloneQueryWrapperProps,
} from '../../../../src/lib/containers/table/StandaloneQueryWrapper'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import { SynapseContextType } from '../../../../src/lib/utils/SynapseContext'
import { QueryResultBundle } from '../../../../src/lib/utils/synapseTypes'
import syn20337467Json from '../../../../mocks/query/syn20337467.json'

const SynapseClient = require('../../../../src/lib/utils/SynapseClient')

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
    SynapseClient.getEntity = jest.fn().mockResolvedValue({
      id: 'syn123',
      concreteType: 'org.sagebionetworks.repo.model.table.EntityView',
    })
    SynapseClient.getQueryTableAsyncJobResults = jest.fn(queryBundleRequest => {
      return Promise.resolve({
        requestBody: queryBundleRequest,
        jobState: 'COMPLETE',
        responseBody: data,
      })
    })

    renderComponent({
      rgbIndex: 7,
      title: 'Tools',
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
    SynapseClient.getEntity = jest.fn().mockResolvedValue({
      id: 'syn123',
      concreteType: 'org.sagebionetworks.repo.model.table.EntityView',
    })
    SynapseClient.getQueryTableAsyncJobResults = jest.fn(queryBundleRequest => {
      return Promise.resolve({
        requestBody: queryBundleRequest,
        jobState: 'COMPLETE',
        responseBody: data,
      })
    })

    renderComponent({
      rgbIndex: 7,
      title: 'Tools',
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
