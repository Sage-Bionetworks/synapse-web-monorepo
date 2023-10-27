import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import TableColumnSchemaEditor, {
  TableColumnSchemaEditorProps,
} from './TableColumnSchemaEditor'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { server } from '../../mocks/msw/server'
import mockTableEntityData from '../../mocks/entity/mockTableEntity'
import { getHandlersForTableQuery } from '../../mocks/msw/handlers/tableQueryHandlers'
import { syn17328596 as mockTableQueryData } from '../../mocks/query/syn17328596'
import userEvent from '@testing-library/user-event'
import { SynapseClient } from '../../index'
import { rest } from 'msw'
import { uniqueId } from 'lodash-es'
import { ColumnModel } from '@sage-bionetworks/synapse-types'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../utils/functions/getEndpoint'

function renderComponent(props: TableColumnSchemaEditorProps) {
  return render(<TableColumnSchemaEditor {...props} />, {
    wrapper: createWrapper(),
  })
}

async function setUp(props: TableColumnSchemaEditorProps) {
  const user = userEvent.setup()
  const component = renderComponent(props)
  const saveButton = await screen.findByRole('button', { name: 'Save' })
  return { user, component, saveButton }
}
describe('TableColumnSchemaEditor', () => {
  beforeAll(() => {
    server.listen()
    server.use(
      ...getHandlersForTableQuery(mockTableQueryData),
      rest.post(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/repo/v1/column/batch`,
        async (req, res, ctx) => {
          const response: { list: ColumnModel[] } = await req.json()
          response.list.forEach(cm => {
            if (cm.id == null) {
              cm.id = uniqueId()
            }
          })
          return res(
            ctx.status(201),
            ctx.json<{ list: ColumnModel[] }>(response),
          )
        },
      ),
    )
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Renders a form and preloads data', async () => {
    await setUp({
      entityId: mockTableEntityData.id,
    })

    const numColumns = mockTableQueryData.columnModels!.length

    // Fields should be pre-filled with data
    const nameFields = await screen.findAllByLabelText('Name')
    expect(nameFields).toHaveLength(numColumns)
    mockTableQueryData.columnModels!.forEach((cm, index) => {
      expect(nameFields[index]).toHaveValue(cm.name)
    })
  })
  it('User can update the form and submit the new data', async () => {
    const updateTableSpy = jest.spyOn(SynapseClient, 'updateTable')
    const { user, saveButton } = await setUp({
      entityId: mockTableEntityData.id,
    })

    // Add a column
    const addColumnButton = await screen.findByRole('button', {
      name: 'Add Column',
    })

    await user.click(addColumnButton)
    const nameFields = await screen.findAllByLabelText('Name')
    await user.type(nameFields[nameFields.length - 1], 'newColumnName')

    await user.click(saveButton)

    await waitFor(() => {
      expect(updateTableSpy).toHaveBeenCalled()
    })
  })

  it.todo('User can add default columns')
  it.todo('User can add annotations columns to a view')
})
