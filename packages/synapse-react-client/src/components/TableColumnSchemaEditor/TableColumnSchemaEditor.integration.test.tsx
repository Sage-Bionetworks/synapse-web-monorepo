import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import TableColumnSchemaEditor, {
  TableColumnSchemaEditorProps,
} from './TableColumnSchemaEditor'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { server } from '../../mocks/msw/server'
import mockTableEntityData from '../../mocks/entity/mockTableEntity'
import {
  getAnnotationColumnHandlers,
  getDefaultColumnHandlers,
  getHandlersForTableQuery,
} from '../../mocks/msw/handlers/tableQueryHandlers'
import { syn17328596 as mockTableQueryData } from '../../mocks/query/syn17328596'
import userEvent from '@testing-library/user-event'
import { SynapseClient } from '../../index'
import { rest } from 'msw'
import { uniqueId } from 'lodash-es'
import { ColumnModel, ColumnTypeEnum } from '@sage-bionetworks/synapse-types'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../utils/functions/getEndpoint'
import { mockQueryResultBundle as mockFileViewQueryResultBundle } from '../../mocks/mockFileViewQuery'
import { mockFileViewEntity } from '../../mocks/entity/mockFileView'
import { ImportTableColumnsButtonProps } from './ImportTableColumnsButton'
import { SetOptional } from 'type-fest'

const mockedImportedColumns: SetOptional<ColumnModel, 'id'>[] = [
  {
    name: 'foo',
    columnType: 'STRING',
  },
  {
    name: 'bar',
    columnType: 'INTEGER',
  },
]

function MockedImportTableColumnsButton(props: ImportTableColumnsButtonProps) {
  return (
    <button
      data-testid={'ImportTableColumnsButton'}
      onClick={() => props.onAddColumns(mockedImportedColumns)}
    />
  )
}

jest.mock('./ImportTableColumnsButton', () => ({
  __esModule: true,
  default: MockedImportTableColumnsButton,
}))

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
  })
  beforeEach(() => {
    server.resetHandlers()
    server.use(
      /* Each test in this suite should register its own table query handler */
      ...getDefaultColumnHandlers(),
      ...getAnnotationColumnHandlers({
        concreteType:
          'org.sagebionetworks.repo.model.table.ViewColumnModelResponse',
        results: [
          {
            id: '1235325',
            columnType: ColumnTypeEnum.STRING,
            name: 'columnFromAnnotations',
            maximumSize: 10,
          },
        ],
      }),
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
  afterAll(() => server.close())

  it('Renders a form and preloads data', async () => {
    server.use(...getHandlersForTableQuery(mockTableQueryData))
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
    server.use(...getHandlersForTableQuery(mockTableQueryData))
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

  it('User can add default columns', async () => {
    // Must use a file view -- tables don't have default columns
    server.use(
      ...getHandlersForTableQuery({
        ...mockFileViewQueryResultBundle,
        // The view initially has no columns.
        columnModels: [],
      }),
    )
    await setUp({
      entityId: mockFileViewEntity.id,
    })

    const addDefaultColumnsButton = await screen.findByRole('button', {
      name: 'Add Default View Columns',
    })
    // The button will be disabled until the default columns have been fetched.
    await waitFor(() => expect(addDefaultColumnsButton).not.toBeDisabled())

    // Verify we have no columns -- there will only be one checkbox on the screen for select all/none
    expect(screen.getAllByRole('checkbox')).toHaveLength(1)

    await userEvent.click(addDefaultColumnsButton)

    await waitFor(() => {
      // The columns should have been added.
      expect(screen.getAllByRole('checkbox').length).toBeGreaterThan(1)
    })

    // The default columns aren't editable, so we won't have a name text field.
    expect(screen.queryByLabelText('Name')).not.toBeInTheDocument()
  })
  it('User can add annotations columns to a view', async () => {
    // Must use a file view to get annotations
    server.use(
      ...getHandlersForTableQuery({
        ...mockFileViewQueryResultBundle,
        // The view initially has no columns.
        columnModels: [],
      }),
    )
    await setUp({
      entityId: mockFileViewEntity.id,
    })

    const addAnnotationColumnsButton = await screen.findByRole('button', {
      name: 'Add All Annotations',
    })
    // The button will be disabled until the annotation columns have been fetched.
    await waitFor(() => expect(addAnnotationColumnsButton).not.toBeDisabled())

    // Verify we have no columns -- there will only be one checkbox on the screen for select all/none
    expect(screen.getAllByRole('checkbox')).toHaveLength(1)

    await userEvent.click(addAnnotationColumnsButton)

    await waitFor(() => {
      // The column(s) should have been added.
      expect(screen.getAllByRole('checkbox').length).toBeGreaterThan(1)
    })

    // The annotation column(s) are editable, so we can find a name text field.
    await screen.findAllByLabelText('Name')
  })

  it('Existing default columns are not editable, except facetType', async () => {
    // Must use a file view to have default columns
    server.use(
      ...getHandlersForTableQuery({
        ...mockFileViewQueryResultBundle,
        // The view initially has the ID column, which is a default column.
        columnModels: [
          {
            id: '1234',
            name: 'id',
            columnType: ColumnTypeEnum.STRING,
          },
        ],
      }),
    )
    const { user } = await setUp({
      entityId: mockFileViewEntity.id,
    })

    // Verify we have one column, which has a checkbox, in addition to the "Select All" checkbox
    await waitFor(() => {
      expect(screen.getAllByRole('checkbox')).toHaveLength(2)
    })

    // The default column is not editable, so we won't have a name text field, but the column name will still be visible.
    expect(screen.queryByLabelText('Name')).not.toBeInTheDocument()
    await screen.findByText('id')

    // Now let's delete the column, and create a new 'id' column and verify it's editable
    const idColumnCheckbox = screen.getAllByRole('checkbox')[1]
    await user.click(idColumnCheckbox)
    await screen.findByText(/1 selected/)

    const deleteColumnsButton = await screen.findByRole('button', {
      name: 'Delete',
    })
    await user.click(deleteColumnsButton)

    // Just the Select All checkbox will remain
    await waitFor(() => {
      expect(screen.getAllByRole('checkbox')).toHaveLength(1)
    })

    // Add a column
    const addColumnButton = await screen.findByRole('button', {
      name: 'Add Column',
    })

    await user.click(addColumnButton)
    const nameFields = await screen.findAllByLabelText('Name')
    // Change the name to 'id'. This column should still be editable, even though it matches a default column.
    await user.type(nameFields[nameFields.length - 1], 'id')

    // Verify the column is editable by checking that a few of the inputs are still in the document
    expect(screen.queryByLabelText('Name')).toBeInTheDocument()
    expect(screen.queryByLabelText('Column Type')).toBeInTheDocument()
    expect(screen.queryByLabelText('Maximum Size')).toBeInTheDocument()
    expect(screen.queryByLabelText('Restrict Values')).toBeInTheDocument()
  })

  it('User can import columns from another table', async () => {
    // Start with no columns
    server.use(
      ...getHandlersForTableQuery({ ...mockTableQueryData, columnModels: [] }),
    )
    const { user } = await setUp({
      entityId: mockTableEntityData.id,
    })
    // Verify the import button appears on screen (in this case, the component is mocked)
    const importTableColumnsButton = await screen.findByTestId(
      'ImportTableColumnsButton',
    )

    await user.click(importTableColumnsButton)

    // New rows with each imported column should appear
    await waitFor(async () => {
      const nameFields = await screen.findAllByLabelText('Name')
      expect(nameFields.length).toEqual(mockedImportedColumns.length)
      expect(nameFields[0]).toHaveValue(mockedImportedColumns[0].name)
      expect(nameFields[1]).toHaveValue(mockedImportedColumns[1].name)
    })
  })
})
