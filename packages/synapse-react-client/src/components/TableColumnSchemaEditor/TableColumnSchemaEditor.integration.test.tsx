import React from 'react'
import { render, screen, waitFor, within } from '@testing-library/react'
import TableColumnSchemaEditor, {
  TableColumnSchemaEditorProps,
} from './TableColumnSchemaEditor'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { server } from '../../mocks/msw/server'
import mockTableEntityData from '../../mocks/entity/mockTableEntity'
import {
  getAnnotationColumnHandlers,
  getCreateColumnModelBatchHandler,
  getDefaultColumnHandlers,
  getTableTransactionHandlers,
} from '../../mocks/msw/handlers/tableQueryHandlers'
import { syn17328596 as mockTableQueryData } from '../../mocks/query/syn17328596'
import userEvent from '@testing-library/user-event'
import { SynapseClient } from '../../index'
import { ColumnModel, ColumnTypeEnum } from '@sage-bionetworks/synapse-types'
import { mockFileViewEntity } from '../../mocks/entity/mockFileView'
import { ImportTableColumnsButtonProps } from './ImportTableColumnsButton'
import { SetOptional } from 'type-fest'
import {
  addColumnModelToForm,
  modifyColumnModelInForm,
} from './TableColumnSchemaEditorTestUtils'
import { MOCK_ANNOTATION_COLUMNS } from '../../mocks/mockAnnotationColumns'
import defaultFileViewColumnModels from '../../mocks/query/defaultFileViewColumnModels'
import { MOCK_ACCESS_TOKEN } from '../../mocks/MockSynapseContext'
import * as TableColumnSchemaUtils from '../../utils/functions/TableColumnSchemaUtils'
import { omit } from 'lodash-es'
import { getEntityBundleHandler } from '../../mocks/msw/handlers/entityHandlers'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../utils/functions/getEndpoint'

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
  const cancelButton = await screen.findByRole('button', { name: 'Cancel' })
  const moveDownButton = await screen.findByRole('button', {
    name: 'Move Down',
  })
  return { user, component, saveButton, cancelButton, moveDownButton }
}

describe('TableColumnSchemaEditor', () => {
  const mockOnColumnsUpdated = jest.fn()
  const mockOnCancel = jest.fn()
  const createTableUpdateTransactionRequestSpy = jest.spyOn(
    TableColumnSchemaUtils,
    'createTableUpdateTransactionRequest',
  )
  const updateTableSpy = jest.spyOn(SynapseClient, 'updateTable')

  beforeAll(() => {
    server.listen()
  })
  beforeEach(() => {
    server.resetHandlers()
    server.use(
      /* Each test in this suite should register its own table query handler */
      ...getDefaultColumnHandlers(),
      ...getAnnotationColumnHandlers(MOCK_ANNOTATION_COLUMNS),
      getCreateColumnModelBatchHandler(),
      ...getTableTransactionHandlers({
        concreteType:
          'org.sagebionetworks.repo.model.table.TableUpdateTransactionResponse',
        results: [
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.TableSchemaChangeResponse',
            schema: [
              // We don't currently use this schema, so it's ok if it's inaccurate
            ],
          },
        ],
      }),
    )
  })
  afterEach(() => jest.clearAllMocks())
  afterAll(() => server.close())

  it('Renders a form and preloads data', async () => {
    server.use(
      getEntityBundleHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        {
          entity: mockTableEntityData.entity,
          tableBundle: {
            columnModels: mockTableQueryData.columnModels!,
            maxRowsPerPage: 25,
          },
        },
      ),
    )
    await setUp({
      entityId: mockTableEntityData.id,
      open: true,
      onColumnsUpdated: mockOnColumnsUpdated,
      onCancel: mockOnCancel,
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
    server.use(
      getEntityBundleHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        {
          entity: mockTableEntityData.entity,
          tableBundle: {
            columnModels: mockTableQueryData.columnModels!,
            maxRowsPerPage: 25,
          },
        },
      ),
    )

    const { user, saveButton } = await setUp({
      entityId: mockTableEntityData.id,
      open: true,
      onColumnsUpdated: mockOnColumnsUpdated,
      onCancel: mockOnCancel,
    })

    // Add a column
    await addColumnModelToForm('newColumnName', user)
    await user.click(saveButton)

    await waitFor(async () => {
      expect(createTableUpdateTransactionRequestSpy).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        mockTableEntityData.id,
        mockTableQueryData.columnModels,
        [
          ...mockTableQueryData.columnModels!,
          {
            name: 'newColumnName',
            columnType: 'STRING',
            maximumSize: 50,
          },
        ],
      )

      expect(updateTableSpy).toHaveBeenCalledWith(
        await createTableUpdateTransactionRequestSpy.mock.results[0].value,
        MOCK_ACCESS_TOKEN,
      )
      expect(mockOnColumnsUpdated).toHaveBeenCalled()
    })
  })

  it('User can add default columns', async () => {
    // Must use a file view -- tables don't have default columns
    server.use(
      getEntityBundleHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        {
          entity: mockFileViewEntity,
          tableBundle: {
            // The view initially has no columns.
            columnModels: [],
            maxRowsPerPage: 25,
          },
        },
      ),
    )
    const { user, saveButton } = await setUp({
      entityId: mockFileViewEntity.id,
      open: true,
      onColumnsUpdated: mockOnColumnsUpdated,
      onCancel: mockOnCancel,
    })

    const addDefaultColumnsButton = await screen.findByRole('button', {
      name: 'Add Default View Columns',
    })
    // The button will be disabled until the default columns have been fetched.
    await waitFor(() => expect(addDefaultColumnsButton).not.toBeDisabled())

    // Verify we have no columns -- there will only be one checkbox on the screen for select all/none
    expect(screen.getAllByRole('checkbox')).toHaveLength(1)

    await user.click(addDefaultColumnsButton)

    await waitFor(() => {
      // The columns should have been added.
      expect(screen.getAllByRole('checkbox').length).toBeGreaterThan(1)
    })

    // The default columns aren't editable, so we won't have a name text field.
    expect(screen.queryByLabelText('Name')).not.toBeInTheDocument()

    await user.click(saveButton)

    await waitFor(async () => {
      const expectedProposedSchema = defaultFileViewColumnModels.map(cm =>
        omit(cm, ['id']),
      )
      expect(createTableUpdateTransactionRequestSpy).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        mockFileViewEntity.id,
        [],
        expectedProposedSchema,
      )
      expect(updateTableSpy).toHaveBeenCalledWith(
        await createTableUpdateTransactionRequestSpy.mock.results[0].value,
        MOCK_ACCESS_TOKEN,
      )
      expect(mockOnColumnsUpdated).toHaveBeenCalled()
    })
  })
  it('User can add annotations columns to a view', async () => {
    // Must use a file view to get annotations
    server.use(
      getEntityBundleHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        {
          entity: mockFileViewEntity,
          tableBundle: {
            // The view initially has no columns.
            columnModels: [],
            maxRowsPerPage: 25,
          },
        },
      ),
    )
    const { user, saveButton } = await setUp({
      entityId: mockFileViewEntity.id,
      open: true,
      onColumnsUpdated: mockOnColumnsUpdated,
      onCancel: mockOnCancel,
    })

    const addAnnotationColumnsButton = await screen.findByRole('button', {
      name: 'Add All Annotations',
    })
    // The button will be disabled until the annotation columns have been fetched.
    await waitFor(() => expect(addAnnotationColumnsButton).not.toBeDisabled())

    // Verify we have no columns -- there will only be one checkbox on the screen for select all/none
    expect(screen.getAllByRole('checkbox')).toHaveLength(1)

    await user.click(addAnnotationColumnsButton)

    await waitFor(() => {
      // The column(s) should have been added.
      expect(screen.getAllByRole('checkbox').length).toBeGreaterThan(1)
    })

    // The annotation column(s) are editable, so we can find a name text field.
    await screen.findAllByLabelText('Name')

    await user.click(saveButton)

    await waitFor(async () => {
      // IDs are stripped from imported columns, in case column properties are changed
      const expectedProposedSchema = MOCK_ANNOTATION_COLUMNS.results.map(cm =>
        omit(cm, 'id'),
      )

      expect(createTableUpdateTransactionRequestSpy).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        mockFileViewEntity.id,
        [],
        expectedProposedSchema,
      )
      expect(updateTableSpy).toHaveBeenCalledWith(
        await createTableUpdateTransactionRequestSpy.mock.results[0].value,
        MOCK_ACCESS_TOKEN,
      )
      expect(mockOnColumnsUpdated).toHaveBeenCalled()
    })
  })

  it('Existing default columns are not editable, except facetType', async () => {
    // Must use a file view to have default columns
    server.use(
      getEntityBundleHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        {
          entity: mockFileViewEntity,
          tableBundle: {
            // The view initially has the ID column, which is a default column.
            columnModels: [
              {
                id: '1234',
                name: 'id',
                columnType: ColumnTypeEnum.STRING,
              },
            ],
            maxRowsPerPage: 25,
          },
        },
      ),
    )
    const { user } = await setUp({
      entityId: mockFileViewEntity.id,
      open: true,
      onColumnsUpdated: mockOnColumnsUpdated,
      onCancel: mockOnCancel,
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

    // Add a column - set the name to 'id'. This column should still be editable, even though it matches a default column.
    await addColumnModelToForm('id', user)

    // Verify the column is editable by checking that a few of the inputs are still in the document
    expect(screen.queryByLabelText('Name')).toBeInTheDocument()
    expect(screen.queryByLabelText('Column Type')).toBeInTheDocument()
    expect(screen.queryByLabelText('Maximum Size')).toBeInTheDocument()
    expect(screen.queryByLabelText('Restrict Values')).toBeInTheDocument()
  })

  it('User can import columns from another table', async () => {
    // Start with no columns
    server.use(
      getEntityBundleHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        {
          entity: mockTableEntityData.entity,
          tableBundle: {
            // Start with no columns
            columnModels: [],
            maxRowsPerPage: 25,
          },
        },
      ),
    )
    const { user, saveButton } = await setUp({
      entityId: mockTableEntityData.id,
      open: true,
      onColumnsUpdated: mockOnColumnsUpdated,
      onCancel: mockOnCancel,
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

    await user.click(saveButton)

    await waitFor(async () => {
      expect(createTableUpdateTransactionRequestSpy).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        mockTableEntityData.id,
        [],
        // IDs are stripped from imported columns, in case they are changed
        mockedImportedColumns.map(cm => omit(cm, 'id')),
      )
      expect(updateTableSpy).toHaveBeenCalledWith(
        await createTableUpdateTransactionRequestSpy.mock.results[0].value,
        MOCK_ACCESS_TOKEN,
      )
      expect(mockOnColumnsUpdated).toHaveBeenCalled()
    })
  })
  it('Shows error messages if validation fails', async () => {
    server.use(
      getEntityBundleHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        {
          entity: mockTableEntityData.entity,
          tableBundle: {
            columnModels: mockTableQueryData.columnModels!,
            maxRowsPerPage: 25,
          },
        },
      ),
    )

    const { user, saveButton } = await setUp({
      entityId: mockTableEntityData.id,
      open: true,
      onColumnsUpdated: mockOnColumnsUpdated,
      onCancel: mockOnCancel,
    })

    // Add a column -- intentionally do not add a name
    await addColumnModelToForm(undefined, user)

    await user.click(saveButton)

    await screen.findByText('Name is required')

    await waitFor(() => {
      expect(createTableUpdateTransactionRequestSpy).not.toHaveBeenCalled()
      expect(updateTableSpy).not.toHaveBeenCalled()
      expect(mockOnColumnsUpdated).not.toHaveBeenCalled()
    })

    // Now add the name and ensure we can successfully submit
    const nameFields = await screen.findAllByLabelText('Name')
    await user.type(nameFields[nameFields.length - 1], 'newColumnName')

    await user.click(saveButton)
    await waitFor(async () => {
      expect(createTableUpdateTransactionRequestSpy).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        mockTableEntityData.id,
        mockTableQueryData.columnModels!,
        [
          ...mockTableQueryData.columnModels!,
          {
            name: 'newColumnName',
            columnType: 'STRING',
            maximumSize: 50,
          },
        ],
      )
      expect(updateTableSpy).toHaveBeenCalledWith(
        await createTableUpdateTransactionRequestSpy.mock.results[0].value,
        MOCK_ACCESS_TOKEN,
      )
      expect(mockOnColumnsUpdated).toHaveBeenCalled()
    })
  })

  it('Can update restricted values for STRING type', async () => {
    const stringColumnWithRestrictedVals: ColumnModel = {
      id: '1234',
      name: 'stringWithRestrictedVals',
      columnType: ColumnTypeEnum.STRING,
      // `enumValues` is an array of strings, even for INTEGER columns
      enumValues: ['foo', 'true', '3', 'null'],
    }
    server.use(
      getEntityBundleHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        {
          entity: mockTableEntityData.entity,
          tableBundle: {
            columnModels: [stringColumnWithRestrictedVals],
            maxRowsPerPage: 25,
          },
        },
      ),
    )

    const { user, saveButton } = await setUp({
      entityId: mockTableEntityData.id,
      open: true,
      onColumnsUpdated: mockOnColumnsUpdated,
      onCancel: mockOnCancel,
    })

    // Add a column
    let restrictedValuesInput = await screen.findByRole('textbox', {
      name: 'Restrict Values',
    })

    // The rendered value should be comma-separated
    expect(restrictedValuesInput).toHaveValue('foo, true, 3, null')

    await user.click(restrictedValuesInput)
    const valueEditorModal = await screen.findByRole('dialog')

    const inputs = await within(valueEditorModal).findAllByRole('textbox')
    expect(inputs).toHaveLength(4)
    expect(inputs[0]).toHaveValue('foo')
    expect(inputs[1]).toHaveValue('true')
    expect(inputs[2]).toHaveValue('3')
    expect(inputs[3]).toHaveValue('null')

    await user.clear(inputs[0])
    await user.type(inputs[0], 'bar')

    // SWC-6622: No validation error should be thrown when we save these integers,
    // even though they were converted to strings by the backend
    const confirmChangeButton = within(valueEditorModal).getByRole('button', {
      name: 'OK',
    })
    await user.click(confirmChangeButton)

    restrictedValuesInput = await screen.findByRole('textbox', {
      name: 'Restrict Values',
    })
    expect(restrictedValuesInput).toHaveValue('bar, true, 3, null')

    await user.click(saveButton)
    await waitFor(async () => {
      expect(createTableUpdateTransactionRequestSpy).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        mockTableEntityData.id,
        [stringColumnWithRestrictedVals],
        [
          {
            ...stringColumnWithRestrictedVals,
            enumValues: ['bar', 'true', '3', 'null'],
          },
        ],
      )
      expect(updateTableSpy).toHaveBeenCalledWith(
        await createTableUpdateTransactionRequestSpy.mock.results[0].value,
        MOCK_ACCESS_TOKEN,
      )
      expect(mockOnColumnsUpdated).toHaveBeenCalled()
    })
  })

  it('Can update restricted values for INTEGER type', async () => {
    const integerColumnWithRestrictedVals: ColumnModel = {
      id: '1235',
      name: 'integerWithRestrictedVals',
      columnType: ColumnTypeEnum.INTEGER,
      // `enumValues` is an array of strings, even for INTEGER columns
      enumValues: ['1', '2', '3'],
    }
    server.use(
      getEntityBundleHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        {
          entity: mockTableEntityData.entity,
          tableBundle: {
            columnModels: [integerColumnWithRestrictedVals],
            maxRowsPerPage: 25,
          },
        },
      ),
    )

    const { user, saveButton } = await setUp({
      entityId: mockTableEntityData.id,
      open: true,
      onColumnsUpdated: mockOnColumnsUpdated,
      onCancel: mockOnCancel,
    })

    // Add a column
    let restrictedValuesInput = await screen.findByRole('textbox', {
      name: 'Restrict Values',
    })

    // The rendered value should be comma-separated
    expect(restrictedValuesInput).toHaveValue('1, 2, 3')

    await user.click(restrictedValuesInput)
    const valueEditorModal = await screen.findByRole('dialog')

    let inputs = await within(valueEditorModal).findAllByRole('textbox')
    expect(inputs).toHaveLength(3)
    expect(inputs[0]).toHaveValue('1')
    expect(inputs[1]).toHaveValue('2')
    expect(inputs[2]).toHaveValue('3')

    const addItemButtons = await within(valueEditorModal).findAllByRole(
      'button',
      { name: 'Add Item' },
    )
    // Click the last one
    await user.click(addItemButtons[addItemButtons.length - 1])

    inputs = await within(valueEditorModal).findAllByRole('textbox')
    expect(inputs).toHaveLength(4)
    await user.type(inputs[3], '4')

    // SWC-6622: No validation error should be thrown when we save these integers,
    // even though they were converted to strings by the backend
    const confirmChangeButton = within(valueEditorModal).getByRole('button', {
      name: 'OK',
    })
    await user.click(confirmChangeButton)

    restrictedValuesInput = await screen.findByRole('textbox', {
      name: 'Restrict Values',
    })
    expect(restrictedValuesInput).toHaveValue('1, 2, 3, 4')

    await user.click(saveButton)
    await waitFor(async () => {
      expect(createTableUpdateTransactionRequestSpy).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        mockTableEntityData.id,
        [integerColumnWithRestrictedVals],
        [
          {
            ...integerColumnWithRestrictedVals,
            enumValues: ['1', '2', '3', '4'],
          },
        ],
      )
      expect(updateTableSpy).toHaveBeenCalledWith(
        await createTableUpdateTransactionRequestSpy.mock.results[0].value,
        MOCK_ACCESS_TOKEN,
      )
      expect(mockOnColumnsUpdated).toHaveBeenCalled()
    })
  })
  it('Maintains the column ID passed to the update function when a column is modified', async () => {
    server.use(
      getEntityBundleHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        {
          entity: mockTableEntityData.entity,
          tableBundle: {
            columnModels: mockTableQueryData.columnModels!,
            maxRowsPerPage: 25,
          },
        },
      ),
    )

    const { user, saveButton } = await setUp({
      entityId: mockTableEntityData.id,
      open: true,
      onColumnsUpdated: mockOnColumnsUpdated,
      onCancel: mockOnCancel,
    })

    // Change the first column
    await modifyColumnModelInForm(0, {
      columnName: 'changedColumnName',
    })
    await user.click(saveButton)

    await waitFor(async () => {
      expect(createTableUpdateTransactionRequestSpy).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        mockTableEntityData.id,
        mockTableQueryData.columnModels,
        [
          { ...mockTableQueryData.columnModels![0], name: 'changedColumnName' },
          ...mockTableQueryData.columnModels!.slice(1),
        ],
      )
      expect(updateTableSpy).toHaveBeenCalledWith(
        await createTableUpdateTransactionRequestSpy.mock.results[0].value,
        MOCK_ACCESS_TOKEN,
      )
      expect(mockOnColumnsUpdated).toHaveBeenCalled()
    })
  })

  it('Handles reordering columns', async () => {
    server.use(
      getEntityBundleHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        {
          entity: mockTableEntityData.entity,
          tableBundle: {
            columnModels: mockTableQueryData.columnModels!,
            maxRowsPerPage: 25,
          },
        },
      ),
    )

    const { user, saveButton, moveDownButton } = await setUp({
      entityId: mockTableEntityData.id,
      open: true,
      onColumnsUpdated: mockOnColumnsUpdated,
      onCancel: mockOnCancel,
    })

    let checkboxes: HTMLInputElement[] = []
    await waitFor(() => {
      checkboxes = screen.getAllByRole('checkbox')
      expect(checkboxes).toHaveLength(
        mockTableQueryData.columnModels!.length + 1,
      )
    })

    // Move the first column down one spot
    // Note that the first checkbox is "Select All"
    const firstColumnCheckbox = checkboxes[1]
    expect(firstColumnCheckbox).not.toBeChecked()
    await user.click(firstColumnCheckbox)
    expect(firstColumnCheckbox).toBeChecked()

    await user.click(moveDownButton)
    await waitFor(() => {
      // Verify the columns have been reordered by inspecting the checkboxes
      expect(screen.getAllByRole('checkbox')[1]).not.toBeChecked()
      expect(screen.getAllByRole('checkbox')[2]).toBeChecked()
    })
    await user.click(saveButton)

    await waitFor(async () => {
      expect(createTableUpdateTransactionRequestSpy).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        mockTableEntityData.id,
        mockTableQueryData.columnModels,
        [
          mockTableQueryData.columnModels![1],
          mockTableQueryData.columnModels![0],
          ...mockTableQueryData.columnModels!.slice(2),
        ],
      )
      expect(updateTableSpy).toHaveBeenCalledWith(
        await createTableUpdateTransactionRequestSpy.mock.results[0].value,
        MOCK_ACCESS_TOKEN,
      )
      expect(mockOnColumnsUpdated).toHaveBeenCalled()
    })
  })

  it('Can reorder and edit the same column', async () => {
    server.use(
      getEntityBundleHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        {
          entity: mockTableEntityData.entity,
          tableBundle: {
            columnModels: mockTableQueryData.columnModels!,
            maxRowsPerPage: 25,
          },
        },
      ),
    )

    const { user, saveButton, moveDownButton } = await setUp({
      entityId: mockTableEntityData.id,
      open: true,
      onColumnsUpdated: mockOnColumnsUpdated,
      onCancel: mockOnCancel,
    })

    let checkboxes: HTMLInputElement[] = []
    await waitFor(() => {
      checkboxes = screen.getAllByRole('checkbox')
      expect(checkboxes).toHaveLength(
        mockTableQueryData.columnModels!.length + 1,
      )
    })

    // Change the name of the first column
    await modifyColumnModelInForm(0, {
      columnName: 'changedColumnName',
    })

    // Move the first column down one spot
    // Note that the first checkbox is "Select All"
    const firstColumnCheckbox = checkboxes[1]
    expect(firstColumnCheckbox).not.toBeChecked()
    await user.click(firstColumnCheckbox)
    expect(firstColumnCheckbox).toBeChecked()

    await user.click(moveDownButton)
    await waitFor(() => {
      // Verify the columns have been reordered by inspecting the checkboxes
      expect(screen.getAllByRole('checkbox')[1]).not.toBeChecked()
      expect(screen.getAllByRole('checkbox')[2]).toBeChecked()
    })
    await user.click(saveButton)

    await waitFor(async () => {
      expect(createTableUpdateTransactionRequestSpy).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        mockTableEntityData.id,
        mockTableQueryData.columnModels!,
        [
          mockTableQueryData.columnModels![1],
          { ...mockTableQueryData.columnModels![0], name: 'changedColumnName' },
          ...mockTableQueryData.columnModels!.slice(2),
        ],
      )
      expect(updateTableSpy).toHaveBeenCalledWith(
        await createTableUpdateTransactionRequestSpy.mock.results[0].value,
        MOCK_ACCESS_TOKEN,
      )
      expect(mockOnColumnsUpdated).toHaveBeenCalled()
    })
  })

  it('Handles failure on the update call', async () => {
    const errorMessage = 'Uh oh, something went wrong!!!'
    server.use(
      getEntityBundleHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        {
          entity: mockTableEntityData.entity,
          tableBundle: {
            columnModels: mockTableQueryData.columnModels!,
            maxRowsPerPage: 25,
          },
        },
      ),
      ...getTableTransactionHandlers(
        {
          reason: errorMessage,
        },
        undefined,
        400,
      ),
    )

    const { user, saveButton } = await setUp({
      entityId: mockTableEntityData.id,
      open: true,
      onColumnsUpdated: mockOnColumnsUpdated,
      onCancel: mockOnCancel,
    })

    await user.click(saveButton)

    await waitFor(async () => {
      expect(createTableUpdateTransactionRequestSpy).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        mockTableEntityData.id,
        mockTableQueryData.columnModels,
        mockTableQueryData.columnModels,
      )
      expect(updateTableSpy).toHaveBeenCalledWith(
        await createTableUpdateTransactionRequestSpy.mock.results[0].value,
        MOCK_ACCESS_TOKEN,
      )
    })

    const errorAlert = await screen.findByRole('alert')
    within(errorAlert).getByText(errorMessage)

    // `onColumnsUpdated` should NOT have been called because the update failed
    expect(mockOnColumnsUpdated).not.toHaveBeenCalled()
  })

  it('Clicking cancel calls onCancel', async () => {
    server.use(
      getEntityBundleHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        {
          entity: mockTableEntityData.entity,
          tableBundle: {
            columnModels: mockTableQueryData.columnModels!,
            maxRowsPerPage: 25,
          },
        },
      ),
    )

    const { user, cancelButton } = await setUp({
      entityId: mockTableEntityData.id,
      open: true,
      onColumnsUpdated: mockOnColumnsUpdated,
      onCancel: mockOnCancel,
    })

    await user.click(cancelButton)

    await waitFor(() => {
      expect(mockOnColumnsUpdated).not.toHaveBeenCalled()
      expect(mockOnCancel).toHaveBeenCalled()
    })
  })
})
