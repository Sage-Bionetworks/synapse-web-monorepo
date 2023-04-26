import { render, screen, within } from '@testing-library/react'
import React from 'react'
import { createWrapper } from '../../../../testutils/TestingLibraryUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../../../src/lib/utils/functions/getEndpoint'
import { QueryBundleRequest } from '../../../../../src/lib/utils/synapseTypes'
import { TABLE_QUERY_ASYNC_START } from '../../../../../src/lib/utils/APIConstants'

import { rest, server } from '../../../../../mocks/msw/server'
import { SynapseContextType } from '../../../../../src/lib/utils/SynapseContext'
import { MOCK_CONTEXT_VALUE } from '../../../../../mocks/MockSynapseContext'
import ProgrammaticOptions, {
  ProgrammaticOptionsProps,
} from '../../../../../src/lib/containers/table/table-top/ProgrammaticOptions'
import { getHandlersForTableQuery } from '../../../../../mocks/msw/handlers/tableQueryHandlers'
import { SynapseConstants } from '../../../../../src/lib'
import { DEFAULT_PAGE_SIZE } from '../../../../../src/lib/utils/SynapseConstants'

const onHide = jest.fn()

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
    rest.post(
      `${getEndpoint(
        BackendDestinationEnum.REPO_ENDPOINT,
      )}${TABLE_QUERY_ASYNC_START(':id')}`,
      async (req, res, ctx) => {
        return res(ctx.status(401), ctx.text('Unable to start query'))
      },
    ),
  ]
}

function renderComponent(
  props: ProgrammaticOptionsProps,
  wrapperProps: SynapseContextType = defaultWrapperProps,
) {
  return render(<ProgrammaticOptions {...props} />, {
    wrapper: createWrapper(wrapperProps),
  })
}

describe('ProgrammaticOptions tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Query errors are thrown to error boundary', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {})
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

  it('Successfully transform sql', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {})
    server.use(
      ...getHandlersForTableQuery({
        concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
        combinedSql: COMBINED_SQL_RESULT,
      }),
    )

    renderComponent({
      onHide,
      queryBundleRequest,
    })

    const dialog = await screen.findByRole('dialog')
    await within(dialog).findByText(COMBINED_SQL_RESULT, { exact: false })
  })
})
