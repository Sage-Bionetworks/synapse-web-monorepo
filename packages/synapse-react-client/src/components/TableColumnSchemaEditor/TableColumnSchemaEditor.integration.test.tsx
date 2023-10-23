import React from 'react'
import { render, screen } from '@testing-library/react'
import TableColumnSchemaEditor, {
  TableColumnSchemaEditorProps,
} from './TableColumnSchemaEditor'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { server } from '../../mocks/msw/server'
import mockTableEntityData from '../../mocks/entity/mockTableEntity'
import { getHandlersForTableQuery } from '../../mocks/msw/handlers/tableQueryHandlers'
import { syn17328596 as mockTableQueryData } from '../../mocks/query/syn17328596'

function renderComponent(props: TableColumnSchemaEditorProps) {
  return render(<TableColumnSchemaEditor {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('TableColumnSchemaEditor', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Renders a form and preloads data', async () => {
    server.use(...getHandlersForTableQuery(mockTableQueryData))
    renderComponent({
      entityId: mockTableEntityData.id,
    })

    const numColumns = mockTableQueryData.columnModels!.length

    // Fields should be pre-filled with data
    const nameFields = await screen.findAllByLabelText('Name')
    expect(nameFields).toHaveLength(numColumns)
    mockTableQueryData.columnModels!.forEach((cm, index) => {
      expect(nameFields[index]).toHaveValue(cm.name)
    })

    // Has a button to add a column
    await screen.findByRole('button', { name: 'Add Column' })
  })
  it.todo('User can update the form and submit the new data')
  it.todo('User can add default columns')
  it.todo('User can add annotations columns to a view')
})
