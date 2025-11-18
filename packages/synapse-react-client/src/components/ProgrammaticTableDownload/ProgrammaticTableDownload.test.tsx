import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { TABLE_QUERY_ASYNC_START } from '@/utils/APIConstants'
import { SynapseContextType } from '@/stores/SynapseContext/SynapseContext'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { DEFAULT_PAGE_SIZE } from '@/utils/SynapseConstants'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { render, screen, within } from '@testing-library/react'

import { http } from 'msw'
import { SynapseConstants } from '../../index'
import ProgrammaticTableDownload, {
  ProgrammaticTableDownloadProps,
} from './ProgrammaticTableDownload'

const onHide = vi.fn()

const queryBundleRequest: QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  entityId: 'syn12345',
  partMask:
    SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
    SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
    SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
    SynapseConstants.BUNDLE_MASK_QUERY_COUNT,
  query: {
    sql: 'SELECT name FROM syn12345',
    limit: DEFAULT_PAGE_SIZE,
    offset: 0,
  },
}
const defaultWrapperProps: SynapseContextType = {
  ...MOCK_CONTEXT_VALUE,
  // Component is always wrapped in an error boundary
  withErrorBoundary: true,
}

const COMBINED_SQL_RESULT = 'SELECT * FROM syn12345'

function getErrorMSWHandler() {
  return [
    http.post(
      `${getEndpoint(
        BackendDestinationEnum.REPO_ENDPOINT,
      )}${TABLE_QUERY_ASYNC_START(':id')}`,
      () => {
        return new Response('Unable to start query', {
          status: 401,
          headers: { 'Content-Type': 'text/plain' },
        })
      },
    ),
  ]
}

function renderComponent(
  props: ProgrammaticTableDownloadProps,
  wrapperProps: SynapseContextType = defaultWrapperProps,
) {
  return render(<ProgrammaticTableDownload {...props} />, {
    wrapper: createWrapper(wrapperProps),
  })
}

describe('ProgrammaticOptions tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Successfully transform sql', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => {})
    registerTableQueryResult(queryBundleRequest.query, {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
      combinedSql: COMBINED_SQL_RESULT,
    })

    renderComponent({
      onHide,
      queryBundleRequest,
    })

    const dialog = await screen.findByRole('dialog')
    await within(dialog).findByText(COMBINED_SQL_RESULT, { exact: false })
  })

  it('Query errors are thrown to error boundary', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => {})
    server.use(...getErrorMSWHandler())
    renderComponent({
      onHide,
      queryBundleRequest,
    })

    const errorBoundary = await screen.findByRole('alert')
    await within(errorBoundary).findByText('Unable to start query', {
      exact: false,
    })
  })
})
