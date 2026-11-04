import { mockFileViewEntity } from '@/mocks/entity/mockFileView'
import mockQueryResponseData from '@/mocks/mockQueryResponseData'
import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import {
  AddBatchOfFilesToDownloadListRequest,
  QueryBundleRequest,
  Row,
} from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useSetAtom } from 'jotai'
import { http, HttpResponse } from 'msw'
import { useEffect } from 'react'
import { QueryVisualizationWrapper } from '../../QueryVisualizationWrapper'
import QueryWrapper from '../../QueryWrapper'
import { selectedRowsAtom } from '../../QueryWrapper/TableRowSelectionState'
import { TITLE as SIGN_IN_REQUIRED_TITLE } from '../../SignInRequiredModal/SignInRequiredModal'
import { RowSelectionControls } from './RowSelectionControls'

const REPO_ENDPOINT = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)
const ADD_BUTTON_NAME = 'Add to Download List'

const fileViewQueryRequest: QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  entityId: mockFileViewEntity.id,
  partMask: 255,
  query: { sql: `SELECT * FROM ${mockFileViewEntity.id}` },
}
// The row's synid column holds syn7844998.
const rowWithFile = mockQueryResponseData.queryResult.queryResults.rows[1]

function SelectRows(props: { rows: Row[] }) {
  const setSelectedRows = useSetAtom(selectedRowsAtom)
  const { rows } = props
  useEffect(() => setSelectedRows(rows), [rows, setSelectedRows])
  return null
}

function renderComponent(isAuthenticated = true) {
  registerTableQueryResult(fileViewQueryRequest.query, mockQueryResponseData)
  return render(
    <QueryWrapper initQueryRequest={fileViewQueryRequest} isRowSelectionVisible>
      <QueryVisualizationWrapper>
        <SelectRows rows={[rowWithFile]} />
        <RowSelectionControls />
      </QueryVisualizationWrapper>
    </QueryWrapper>,
    {
      wrapper: createWrapper(
        isAuthenticated
          ? {}
          : { isAuthenticated: false, accessToken: undefined },
      ),
    },
  )
}

describe('RowSelectionControls', () => {
  let batches: AddBatchOfFilesToDownloadListRequest[]
  let respond: () => void

  beforeEach(() => {
    batches = []
    // Each add waits for the test to respond, so the pending state can be observed.
    server.use(
      http.post(`${REPO_ENDPOINT}/repo/v1/download/list/add`, async request => {
        batches.push(
          (await request.request.json()) as AddBatchOfFilesToDownloadListRequest,
        )
        await new Promise<void>(resolve => {
          respond = resolve
        })
        return HttpResponse.json({ numberOfFilesAdded: 1 })
      }),
    )
  })

  it('adds the selected rows, and cannot be chosen again until the add finishes', async () => {
    renderComponent()

    const addButton = await screen.findByRole('button', {
      name: ADD_BUTTON_NAME,
    })
    await userEvent.click(addButton)

    await waitFor(() =>
      expect(batches).toEqual([
        { batchToAdd: [{ fileEntityId: 'syn7844998', versionNumber: 2 }] },
      ]),
    )
    expect(addButton).toBeDisabled()

    respond()
    await waitFor(() => expect(addButton).toBeEnabled())
    expect(batches).toHaveLength(1)
  })

  it('asks a signed-out user to sign in instead of adding the selected rows', async () => {
    renderComponent(false)

    await userEvent.click(
      await screen.findByRole('button', { name: ADD_BUTTON_NAME }),
    )

    expect(
      await screen.findByRole('dialog', { name: SIGN_IN_REQUIRED_TITLE }),
    ).toBeInTheDocument()
    expect(batches).toEqual([])
  })
})
