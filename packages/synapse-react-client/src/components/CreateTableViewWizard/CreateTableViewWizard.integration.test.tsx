import React from 'react'
import { act, render, screen, waitFor, within } from '@testing-library/react'
import { server } from '../../mocks/msw/server'
import CreateTableViewWizard, {
  CreateTableViewWizardProps,
} from './CreateTableViewWizard'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import mockProjectEntityData from '../../mocks/entity/mockProject'
import userEvent from '@testing-library/user-event'
import { getCreateColumnModelBatchHandler } from '../../mocks/msw/handlers/tableQueryHandlers'
import {
  ENTITY_VIEW_CONCRETE_TYPE_VALUE,
  ENTITY_VIEW_TYPE_MASK_FILE,
  ENTITY_VIEW_TYPE_MASK_FOLDER,
  ENTITY_VIEW_TYPE_MASK_PROJECT,
  MATERIALIZED_VIEW_CONCRETE_TYPE_VALUE,
  SUBMISSION_VIEW_CONCRETE_TYPE_VALUE,
  TABLE_ENTITY_CONCRETE_TYPE_VALUE,
  VIRTUAL_TABLE_CONCRETE_TYPE_VALUE,
} from '@sage-bionetworks/synapse-types'
import { addColumnModelToForm } from '../TableColumnSchemaEditor/TableColumnSchemaEditorTestUtils'
import SynapseClient from '../../synapse-client'
import {
  MOCK_ACCESS_TOKEN,
  MOCK_CONTEXT_VALUE,
} from '../../mocks/MockSynapseContext'
import { EntityFinderModal } from '../EntityFinder/EntityFinderModal'
import defaultFileViewColumnModels from '../../mocks/query/defaultFileViewColumnModels'

jest.mock('../EntityFinder/EntityFinderModal', () => ({
  EntityFinderModal: jest.fn(() => (
    <div data-testid="EntityFinderModalMocked" />
  )),
}))

const mockEntityFinderModal = jest.mocked(EntityFinderModal)

jest.spyOn(SynapseClient, 'createEntity')
jest.spyOn(SynapseClient, 'createColumnModels')

const createColumnModelsSpy = jest.mocked(SynapseClient.createColumnModels)
const createEntitySpy = jest.mocked(SynapseClient.createEntity)
describe('CreateTableWizard integration tests', () => {
  function renderComponent(props: CreateTableViewWizardProps) {
    return render(<CreateTableViewWizard {...props} />, {
      wrapper: createWrapper({
        ...MOCK_CONTEXT_VALUE,
        isInExperimentalMode: true,
      }),
    })
  }

  beforeAll(() => {
    server.listen()
    server.use(
      // Set up handlers for creating column models
      getCreateColumnModelBatchHandler(),
    )
  })
  afterEach(() => {
    server.restoreHandlers()
    jest.clearAllMocks()
  })
  afterAll(() => server.close())

  test('Create a table', async () => {
    const onComplete = jest.fn()
    const onCancel = jest.fn()
    renderComponent({
      open: true,
      parentId: mockProjectEntityData.id,
      onComplete,
      onCancel,
    })

    // Select "Table"
    const tableButton = await screen.findByRole('menuitem', {
      name: 'Table',
    })
    await userEvent.click(tableButton)

    // Add a few columns
    await addColumnModelToForm('foo')
    await addColumnModelToForm('bar')

    await userEvent.click(screen.getByRole('button', { name: 'Next' }))

    // Give the table a name
    const nameField = await screen.findByRole('textbox', { name: 'Name' })
    await userEvent.type(nameField, 'tableName')
    await userEvent.click(screen.getByRole('button', { name: 'Finish' }))

    // Verify that the table was created and the callback was invoked
    await waitFor(() => {
      expect(createColumnModelsSpy).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        expect.arrayContaining([
          {
            name: 'foo',
            columnType: 'STRING',
            maximumSize: 50,
          },
          {
            name: 'bar',
            columnType: 'STRING',
            maximumSize: 50,
          },
        ]),
      )
      expect(createEntitySpy).toHaveBeenCalledWith(
        {
          name: 'tableName',
          concreteType: TABLE_ENTITY_CONCRETE_TYPE_VALUE,
          parentId: mockProjectEntityData.id,
          columnIds: expect.any(Array),
        },
        MOCK_ACCESS_TOKEN,
      )
      expect(onComplete).toHaveBeenCalledWith(expect.stringMatching(/syn\d+/))
    })
  })
  test('Create an entity view and change the mask', async () => {
    const onComplete = jest.fn()
    const onCancel = jest.fn()
    renderComponent({
      open: true,
      parentId: mockProjectEntityData.id,
      onComplete,
      onCancel,
    })

    // Select "View"
    await userEvent.click(
      await screen.findByRole('menuitem', {
        name: 'View',
      }),
    )

    // Select the file view option
    await userEvent.click(
      await screen.findByRole('menuitem', {
        name: 'Files, Folders, and Other Objects',
      }),
    )

    // Verify scope is empty
    await screen.findByText('Empty! Add items to populate your view')

    // Add a few IDs to the scope
    const addContainersToScopeButton = await screen.findByRole('button', {
      name: 'Add Containers',
    })
    await userEvent.click(addContainersToScopeButton)

    // Entity finder is mocked since it's challenging to interact with programmatically
    await screen.findByTestId('EntityFinderModalMocked')
    const entityFinderModalPassedProps = mockEntityFinderModal.mock.lastCall![0]
    act(() => {
      entityFinderModalPassedProps.onConfirm([
        { targetId: 'syn123' },
        { targetId: 'syn456' },
      ])
    })

    const scopeTable = await screen.findByRole('table')
    const rows = within(scopeTable).getAllByRole('row')
    expect(rows).toHaveLength(3) // header row and two data rows

    // Tweak the mask
    expect(screen.getByLabelText('Files')).toBeChecked()
    expect(screen.getByLabelText('Folders')).not.toBeChecked()
    await userEvent.click(screen.getByLabelText('Folders'))
    expect(screen.getByLabelText('Folders')).toBeChecked()
    await userEvent.click(screen.getByRole('button', { name: 'Next' }))

    // Add default columns
    const addDefaultViewColumnsButton = await screen.findByRole('button', {
      name: 'Add Default View Columns',
    })
    await waitFor(() => expect(addDefaultViewColumnsButton).toBeEnabled())
    await userEvent.click(addDefaultViewColumnsButton)

    await userEvent.click(screen.getByRole('button', { name: 'Next' }))

    // Give the view a name
    const nameField = await screen.findByRole('textbox', { name: 'Name' })
    await userEvent.type(nameField, 'tableName')
    await userEvent.click(screen.getByRole('button', { name: 'Finish' }))

    // Verify that the view was created and the callback was invoked
    await waitFor(() => {
      expect(createColumnModelsSpy).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        expect.arrayContaining(defaultFileViewColumnModels),
      )
      expect(createEntitySpy).toHaveBeenCalledWith(
        {
          name: 'tableName',
          concreteType: ENTITY_VIEW_CONCRETE_TYPE_VALUE,
          parentId: mockProjectEntityData.id,
          columnIds: defaultFileViewColumnModels.map(
            columnModel => columnModel.id,
          ),
          scopeIds: expect.any(Array),
          viewTypeMask:
            ENTITY_VIEW_TYPE_MASK_FILE | ENTITY_VIEW_TYPE_MASK_FOLDER,
        },
        MOCK_ACCESS_TOKEN,
      )
      expect(onComplete).toHaveBeenCalledWith(expect.stringMatching(/syn\d+/))
    })
  })
  test('Create a project view', async () => {
    const onComplete = jest.fn()
    const onCancel = jest.fn()
    renderComponent({
      open: true,
      parentId: mockProjectEntityData.id,
      onComplete,
      onCancel,
    })

    // Select "View"
    await userEvent.click(
      await screen.findByRole('menuitem', {
        name: 'View',
      }),
    )

    // Select the project view option
    await userEvent.click(
      await screen.findByRole('menuitem', {
        name: 'Projects',
      }),
    )

    // Verify scope is empty
    await screen.findByText('Empty! Add items to populate your view')

    // Add a few IDs to the scope
    const addContainersToScopeButton = await screen.findByRole('button', {
      name: 'Add Projects',
    })
    await userEvent.click(addContainersToScopeButton)

    // Entity finder is mocked since it's challenging to interact with programmatically
    await screen.findByTestId('EntityFinderModalMocked')
    const entityFinderModalPassedProps = mockEntityFinderModal.mock.lastCall![0]
    act(() => {
      entityFinderModalPassedProps.onConfirm([
        { targetId: 'syn123' },
        { targetId: 'syn456' },
      ])
    })

    const scopeTable = await screen.findByRole('table')
    const rows = within(scopeTable).getAllByRole('row')
    expect(rows).toHaveLength(3) // header row and two data rows

    // Verify no mask options are shown
    expect(
      screen.queryByText('Include in View', { exact: false }),
    ).not.toBeInTheDocument()
    expect(screen.queryByLabelText('Files')).not.toBeInTheDocument()
    await userEvent.click(screen.getByRole('button', { name: 'Next' }))

    // Add default columns
    const addDefaultViewColumnsButton = await screen.findByRole('button', {
      name: 'Add Default View Columns',
    })
    await waitFor(() => expect(addDefaultViewColumnsButton).toBeEnabled())
    await userEvent.click(addDefaultViewColumnsButton)

    await userEvent.click(screen.getByRole('button', { name: 'Next' }))

    // Give the view a name
    const nameField = await screen.findByRole('textbox', { name: 'Name' })
    await userEvent.type(nameField, 'tableName')
    await userEvent.click(screen.getByRole('button', { name: 'Finish' }))

    // Verify that the view was created and the callback was invoked
    await waitFor(() => {
      expect(createColumnModelsSpy).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        expect.arrayContaining(defaultFileViewColumnModels),
      )
      expect(createEntitySpy).toHaveBeenCalledWith(
        {
          name: 'tableName',
          concreteType: ENTITY_VIEW_CONCRETE_TYPE_VALUE,
          parentId: mockProjectEntityData.id,
          columnIds: defaultFileViewColumnModels.map(
            columnModel => columnModel.id,
          ),
          scopeIds: expect.any(Array),
          viewTypeMask: ENTITY_VIEW_TYPE_MASK_PROJECT,
        },
        MOCK_ACCESS_TOKEN,
      )
      expect(onComplete).toHaveBeenCalledWith(expect.stringMatching(/syn\d+/))
    })
  })
  test('Create a submission view', async () => {
    const onComplete = jest.fn()
    const onCancel = jest.fn()
    renderComponent({
      open: true,
      parentId: mockProjectEntityData.id,
      onComplete,
      onCancel,
    })

    // Select "View"
    await userEvent.click(
      await screen.findByRole('menuitem', {
        name: 'View',
      }),
    )

    // Select the submission view option
    await userEvent.click(
      await screen.findByRole('menuitem', {
        name: 'Challenge Submissions',
      }),
    )

    // Before adding evaluations to the scope, verify we cannot advance without making a selection
    const nextStepButton = screen.getByRole('button', { name: 'Next' })
    expect(nextStepButton).toBeDisabled()

    // Add a few IDs to the scope
    const evaluationOptions = await screen.findAllByRole('checkbox')
    await userEvent.click(evaluationOptions[0])

    // Verify that the selections were added by querying for the "Remove" buttons
    const removeButtons = await screen.findAllByRole('button', {
      name: /Remove .+ from scope/,
      exact: false,
    })
    expect(removeButtons).toHaveLength(1)

    expect(nextStepButton).not.toBeDisabled()
    await userEvent.click(nextStepButton)

    // Add default columns
    const addDefaultViewColumnsButton = await screen.findByRole('button', {
      name: 'Add Default Submission View Columns',
    })
    await waitFor(() => expect(addDefaultViewColumnsButton).toBeEnabled())
    await userEvent.click(addDefaultViewColumnsButton)

    await userEvent.click(screen.getByRole('button', { name: 'Next' }))

    // Give the view a name
    const nameField = await screen.findByRole('textbox', { name: 'Name' })
    await userEvent.type(nameField, 'tableName')
    await userEvent.click(screen.getByRole('button', { name: 'Finish' }))

    // Verify that the view was created and the callback was invoked
    await waitFor(() => {
      expect(createColumnModelsSpy).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        expect.arrayContaining(defaultFileViewColumnModels),
      )
      expect(createEntitySpy).toHaveBeenCalledWith(
        {
          name: 'tableName',
          concreteType: SUBMISSION_VIEW_CONCRETE_TYPE_VALUE,
          parentId: mockProjectEntityData.id,
          columnIds: defaultFileViewColumnModels.map(
            columnModel => columnModel.id,
          ),
          scopeIds: expect.any(Array),
        },
        MOCK_ACCESS_TOKEN,
      )
      expect(onComplete).toHaveBeenCalledWith(expect.stringMatching(/syn\d+/))
    })
  })
  test('Create a materialized view', async () => {
    const onComplete = jest.fn()
    const onCancel = jest.fn()
    renderComponent({
      open: true,
      parentId: mockProjectEntityData.id,
      onComplete,
      onCancel,
    })

    // Select "View"
    await userEvent.click(
      await screen.findByRole('menuitem', {
        name: 'View',
      }),
    )

    // Select the materialized view option
    await userEvent.click(
      await screen.findByRole('menuitem', {
        name: 'Materialized View',
      }),
    )

    // Give the view a name
    const nameField = await screen.findByRole('textbox', { name: 'Name' })
    await userEvent.type(nameField, 'tableName')

    // Add defining SQL
    const definingSqlField = await screen.findByRole('textbox', {
      name: 'Defining SQL',
    })
    await userEvent.type(definingSqlField, 'SELECT * FROM syn123')

    await userEvent.click(screen.getByRole('button', { name: 'Finish' }))

    // Verify that the view was created and the callback was invoked
    await waitFor(() => {
      // No columns are created
      expect(createColumnModelsSpy).not.toHaveBeenCalled()
      expect(createEntitySpy).toHaveBeenCalledWith(
        {
          name: 'tableName',
          concreteType: MATERIALIZED_VIEW_CONCRETE_TYPE_VALUE,
          parentId: mockProjectEntityData.id,
          definingSQL: 'SELECT * FROM syn123',
        },
        MOCK_ACCESS_TOKEN,
      )
      expect(onComplete).toHaveBeenCalledWith(expect.stringMatching(/syn\d+/))
    })
  })
  test('Create a virtual table', async () => {
    const onComplete = jest.fn()
    const onCancel = jest.fn()
    renderComponent({
      open: true,
      parentId: mockProjectEntityData.id,
      onComplete,
      onCancel,
    })

    // Select "View"
    await userEvent.click(
      await screen.findByRole('menuitem', {
        name: 'View',
      }),
    )

    // Select the virtual table option
    await userEvent.click(
      await screen.findByRole('menuitem', {
        name: 'Virtual Table',
      }),
    )

    // Give the view a name
    const nameField = await screen.findByRole('textbox', { name: 'Name' })
    await userEvent.type(nameField, 'tableName')

    // Add defining SQL
    const definingSqlField = await screen.findByRole('textbox', {
      name: 'Defining SQL',
    })
    await userEvent.type(definingSqlField, 'SELECT * FROM syn123')

    await userEvent.click(screen.getByRole('button', { name: 'Finish' }))

    // Verify that the view was created and the callback was invoked
    await waitFor(() => {
      // No columns are created
      expect(createColumnModelsSpy).not.toHaveBeenCalled()
      expect(createEntitySpy).toHaveBeenCalledWith(
        {
          name: 'tableName',
          concreteType: VIRTUAL_TABLE_CONCRETE_TYPE_VALUE,
          parentId: mockProjectEntityData.id,
          definingSQL: 'SELECT * FROM syn123',
        },
        MOCK_ACCESS_TOKEN,
      )
      expect(onComplete).toHaveBeenCalledWith(expect.stringMatching(/syn\d+/))
    })
  })
  test('Column models must be valid before advancing', async () => {
    const onComplete = jest.fn()
    const onCancel = jest.fn()
    renderComponent({
      open: true,
      parentId: mockProjectEntityData.id,
      onComplete,
      onCancel,
    })

    // Select "Table"
    const tableButton = await screen.findByRole('menuitem', {
      name: 'Table',
    })
    await userEvent.click(tableButton)

    // Add a column without a name
    await addColumnModelToForm(undefined)

    await userEvent.click(screen.getByRole('button', { name: 'Next' }))
    // Check that the error message appears instead of advancing
    await screen.findByText('Name is required')
  })
  test('EntityView scope and mask must be valid before advancing', async () => {
    const onComplete = jest.fn()
    const onCancel = jest.fn()
    renderComponent({
      open: true,
      parentId: mockProjectEntityData.id,
      onComplete,
      onCancel,
    })

    // Select "View"
    await userEvent.click(
      await screen.findByRole('menuitem', {
        name: 'View',
      }),
    )

    // Select the file view option
    await userEvent.click(
      await screen.findByRole('menuitem', {
        name: 'Files, Folders, and Other Objects',
      }),
    )

    // Verify scope is empty
    await screen.findByText('Empty! Add items to populate your view')
    // Verify that the mask is valid
    expect(screen.getByLabelText('Files')).toBeChecked()

    // Check that we cannot advance--Next button is disabled
    const nextButton = screen.getByRole('button', { name: 'Next' })
    expect(nextButton).toBeDisabled()

    // Add an item to scope
    const addContainersToScopeButton = await screen.findByRole('button', {
      name: 'Add Containers',
    })
    await userEvent.click(addContainersToScopeButton)
    await screen.findByTestId('EntityFinderModalMocked')
    const entityFinderModalPassedProps = mockEntityFinderModal.mock.lastCall![0]
    act(() => {
      entityFinderModalPassedProps.onConfirm([{ targetId: 'syn123' }])
    })
    // The scope and mask are now valid -- Next should no longer be disabled
    await waitFor(() => expect(nextButton).not.toBeDisabled())

    // Uncheck all mask boxes to make the mask invalid
    await userEvent.click(screen.getByLabelText('Files'))

    // Verify that we cannot advance
    await waitFor(() => expect(nextButton).toBeDisabled())
  })
})
