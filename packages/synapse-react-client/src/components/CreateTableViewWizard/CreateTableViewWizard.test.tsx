import { mockEvaluationQueue } from '@/mocks/entity/mockEvaluationQueue'
import mockProjectEntityData from '@/mocks/entity/mockProject'
import { MOCK_ANNOTATION_COLUMN_RESPONSE } from '@/mocks/mockAnnotationColumns'
import {
  MOCK_ACCESS_TOKEN,
  MOCK_CONTEXT_VALUE,
} from '@/mocks/MockSynapseContext'
import { getFeatureFlagsOverride } from '@/mocks/msw/handlers/featureFlagHandlers'
import { server } from '@/mocks/msw/server'
import defaultFileViewColumnModels from '@/mocks/query/defaultFileViewColumnModels'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { BackendDestinationEnum } from '@/utils/functions'
import { getEndpoint } from '@/utils/functions/getEndpoint'
import {
  ENTITY_VIEW_CONCRETE_TYPE_VALUE,
  ENTITY_VIEW_TYPE_MASK_FILE,
  ENTITY_VIEW_TYPE_MASK_FOLDER,
  ENTITY_VIEW_TYPE_MASK_PROJECT,
  EntityType,
  MATERIALIZED_VIEW_CONCRETE_TYPE_VALUE,
  SUBMISSION_VIEW_CONCRETE_TYPE_VALUE,
  TABLE_ENTITY_CONCRETE_TYPE_VALUE,
  VIRTUAL_TABLE_CONCRETE_TYPE_VALUE,
} from '@sage-bionetworks/synapse-types'
import { act, render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { omit } from 'lodash-es'
import { http, HttpResponse } from 'msw'
import { EntityFinderModal } from '../EntityFinder/EntityFinderModal'
import { addColumnModelToForm } from '../TableColumnSchemaEditor/TableColumnSchemaEditorTestUtils'
import { ADD_ALL_ANNOTATIONS_BUTTON_TEXT } from '../TableColumnSchemaEditor/TableColumnSchemaForm'
import CreateTableViewWizard, {
  CreateTableViewWizardProps,
} from './CreateTableViewWizard'

vi.mock('../EntityFinder/EntityFinderModal', () => ({
  EntityFinderModal: vi.fn(() => <div data-testid="EntityFinderModalMocked" />),
}))

const mockEntityFinderModal = vi.mocked(EntityFinderModal)

vi.spyOn(SynapseClient, 'createEntity')
vi.spyOn(SynapseClient, 'createColumnModels')
vi.spyOn(SynapseClient, 'getAnnotationColumnModels')
const mockValidateDefiningSql = vi.spyOn(SynapseClient, 'validateDefiningSql')

const createColumnModelsSpy = vi.mocked(SynapseClient.createColumnModels)
const createEntitySpy = vi.mocked(SynapseClient.createEntity)
const validateDefiningSqlSpy = vi.mocked(SynapseClient.validateDefiningSql)
const getAnnotationColumnsSpy = vi.mocked(
  SynapseClient.getAnnotationColumnModels,
)

const defaultColumnModelsWithoutId = defaultFileViewColumnModels.map(cm =>
  omit(cm, ['id']),
)
const annotationColumnModelsWithoutId =
  MOCK_ANNOTATION_COLUMN_RESPONSE.results.map(cm => omit(cm, ['id']))

async function getLatestCreatedColumnModelIdsFromSpy(
  spy: typeof createColumnModelsSpy,
) {
  return (
    await (spy.mock.results[0].value as ReturnType<
      typeof SynapseClient.createColumnModels
    >)
  ).list.map(cm => cm.id)
}

describe('CreateTableWizard integration tests', () => {
  function renderComponent(props: CreateTableViewWizardProps) {
    return {
      user: userEvent.setup(),
      ...render(<CreateTableViewWizard {...props} />, {
        wrapper: createWrapper({
          ...MOCK_CONTEXT_VALUE,
          isInExperimentalMode: true,
        }),
      }),
    }
  }

  beforeAll(() => {
    server.listen()
  })

  beforeEach(() => {
    server.use(getFeatureFlagsOverride())
  })

  afterEach(() => {
    server.resetHandlers()
    vi.clearAllMocks()
  })
  afterAll(() => server.close())

  test('Create a table', async () => {
    const onComplete = vi.fn()
    const onCancel = vi.fn()
    const { user } = renderComponent({
      open: true,
      parentId: mockProjectEntityData.id,
      onComplete,
      onCancel,
    })

    // Select "Table"
    const tableButton = await screen.findByRole('menuitem', {
      name: 'Table',
    })
    await user.click(tableButton)

    // Add a few columns
    await addColumnModelToForm('foo')
    await addColumnModelToForm('bar')

    await user.click(screen.getByRole('button', { name: 'Next' }))

    // Give the table a name
    const nameField = await screen.findByRole('textbox', { name: 'Name' })
    await user.type(nameField, 'tableName')
    await user.click(screen.getByRole('button', { name: 'Finish' }))

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
    const onComplete = vi.fn()
    const onCancel = vi.fn()
    const { user } = renderComponent({
      open: true,
      parentId: mockProjectEntityData.id,
      onComplete,
      onCancel,
    })

    // Select "View"
    await user.click(
      await screen.findByRole('menuitem', {
        name: 'View',
      }),
    )

    // Select the file view option
    await user.click(
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
    await user.click(addContainersToScopeButton)

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
    await user.click(screen.getByLabelText('Folders'))
    expect(screen.getByLabelText('Folders')).toBeChecked()

    const nextButton = screen.getByRole('button', { name: 'Next' })
    await waitFor(() => expect(nextButton).not.toBeDisabled())
    await user.click(nextButton)

    // Default columns should be added immediately
    defaultFileViewColumnModels.forEach(cm => {
      expect(screen.getByText(cm.name)).toBeInTheDocument()
    })
    // There should also be an add default view columns button
    await screen.findByRole('button', {
      name: 'Add Default View Columns',
    })

    // Add annotation columns
    const addAnnotationColumnsButton = await screen.findByRole('button', {
      name: ADD_ALL_ANNOTATIONS_BUTTON_TEXT,
    })
    await waitFor(() => expect(addAnnotationColumnsButton).toBeEnabled())
    await user.click(addAnnotationColumnsButton)
    // Verify we called the API with the correct scope and view type mask
    await waitFor(() =>
      expect(getAnnotationColumnsSpy).toHaveBeenLastCalledWith(
        {
          concreteType:
            'org.sagebionetworks.repo.model.table.ViewColumnModelRequest',
          viewScope: {
            viewTypeMask:
              ENTITY_VIEW_TYPE_MASK_FILE | ENTITY_VIEW_TYPE_MASK_FOLDER,
            scope: ['syn123', 'syn456'],
            viewEntityType: EntityType.ENTITY_VIEW,
          },
          includeDerivedAnnotations: true,
        },
        MOCK_ACCESS_TOKEN,
      ),
    )

    await user.click(screen.getByRole('button', { name: 'Next' }))

    // Give the view a name
    const nameField = await screen.findByRole('textbox', { name: 'Name' })
    await user.type(nameField, 'tableName')
    await user.click(screen.getByRole('button', { name: 'Finish' }))

    // Verify that the view was created and the callback was invoked
    await waitFor(async () => {
      expect(createColumnModelsSpy).toHaveBeenCalledWith(MOCK_ACCESS_TOKEN, [
        // The new column models would have had IDs stripped in the column form
        ...defaultColumnModelsWithoutId,
        ...annotationColumnModelsWithoutId,
      ])
      const createdColumnModelIds = await getLatestCreatedColumnModelIdsFromSpy(
        createColumnModelsSpy,
      )
      expect(createEntitySpy).toHaveBeenCalledWith(
        {
          name: 'tableName',
          description: undefined,
          concreteType: ENTITY_VIEW_CONCRETE_TYPE_VALUE,
          parentId: mockProjectEntityData.id,
          columnIds: createdColumnModelIds,
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
    const onComplete = vi.fn()
    const onCancel = vi.fn()
    const { user } = renderComponent({
      open: true,
      parentId: mockProjectEntityData.id,
      onComplete,
      onCancel,
    })

    // Select "View"
    await user.click(
      await screen.findByRole('menuitem', {
        name: 'View',
      }),
    )

    // Select the project view option
    await user.click(
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
    await user.click(addContainersToScopeButton)

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
    await user.click(screen.getByRole('button', { name: 'Next' }))

    // Default columns should be added immediately
    defaultFileViewColumnModels.forEach(cm => {
      expect(screen.getByText(cm.name)).toBeInTheDocument()
    })

    // There should also be an add default view columns button
    await screen.findByRole('button', {
      name: 'Add Default View Columns',
    })

    // Add annotation columns
    const addAnnotationColumnsButton = await screen.findByRole('button', {
      name: ADD_ALL_ANNOTATIONS_BUTTON_TEXT,
    })
    await waitFor(() => expect(addAnnotationColumnsButton).toBeEnabled())
    await user.click(addAnnotationColumnsButton)
    // Verify we called the API with the correct scope and view type mask
    await waitFor(() =>
      expect(getAnnotationColumnsSpy).toHaveBeenLastCalledWith(
        {
          concreteType:
            'org.sagebionetworks.repo.model.table.ViewColumnModelRequest',
          viewScope: {
            viewTypeMask: ENTITY_VIEW_TYPE_MASK_PROJECT,
            scope: ['syn123', 'syn456'],
            viewEntityType: EntityType.ENTITY_VIEW,
          },
          includeDerivedAnnotations: true,
        },
        MOCK_ACCESS_TOKEN,
      ),
    )

    await user.click(screen.getByRole('button', { name: 'Next' }))

    // Give the view a name
    const nameField = await screen.findByRole('textbox', { name: 'Name' })
    await user.type(nameField, 'tableName')
    await user.click(screen.getByRole('button', { name: 'Finish' }))

    // Verify that the view was created and the callback was invoked
    await waitFor(async () => {
      expect(createColumnModelsSpy).toHaveBeenCalledWith(MOCK_ACCESS_TOKEN, [
        // The new column models would have had IDs stripped in the column form
        ...defaultColumnModelsWithoutId,
        ...annotationColumnModelsWithoutId,
      ])
      const createdColumnModelIds = await getLatestCreatedColumnModelIdsFromSpy(
        createColumnModelsSpy,
      )
      expect(createEntitySpy).toHaveBeenCalledWith(
        {
          name: 'tableName',
          concreteType: ENTITY_VIEW_CONCRETE_TYPE_VALUE,
          parentId: mockProjectEntityData.id,
          columnIds: createdColumnModelIds,
          scopeIds: expect.any(Array),
          viewTypeMask: ENTITY_VIEW_TYPE_MASK_PROJECT,
        },
        MOCK_ACCESS_TOKEN,
      )
      expect(onComplete).toHaveBeenCalledWith(expect.stringMatching(/syn\d+/))
    })
  })
  test('Create a submission view', async () => {
    const onComplete = vi.fn()
    const onCancel = vi.fn()
    const { user } = renderComponent({
      open: true,
      parentId: mockProjectEntityData.id,
      onComplete,
      onCancel,
    })

    // Select "View"
    await user.click(
      await screen.findByRole('menuitem', {
        name: 'View',
      }),
    )

    // Select the submission view option
    await user.click(
      await screen.findByRole('menuitem', {
        name: 'Challenge Submissions',
      }),
    )

    // Before adding evaluations to the scope, verify we cannot advance without making a selection
    const nextStepButton = await screen.findByRole('button', { name: 'Next' })
    expect(nextStepButton).toBeDisabled()

    // Add a few IDs to the scope
    const evaluationOptions = await screen.findAllByRole('checkbox')
    await user.click(evaluationOptions[0])

    // Verify that the selections were added by querying for the "Remove" buttons
    const removeButtons = await screen.findAllByRole('button', {
      name: /Remove .+ from scope/,
    })
    expect(removeButtons).toHaveLength(1)

    expect(nextStepButton).not.toBeDisabled()
    await user.click(nextStepButton)

    // Default columns should be added immediately
    defaultFileViewColumnModels.forEach(cm => {
      expect(screen.getByText(cm.name)).toBeInTheDocument()
    })

    // There should also be an add default view columns button
    await screen.findByRole('button', {
      name: 'Add Default Submission View Columns',
    })

    // Add annotation columns
    const addAnnotationColumnsButton = await screen.findByRole('button', {
      name: ADD_ALL_ANNOTATIONS_BUTTON_TEXT,
    })
    await waitFor(() => expect(addAnnotationColumnsButton).toBeEnabled())
    await user.click(addAnnotationColumnsButton)
    // Verify we called the API with the correct scope and view type mask
    await waitFor(() =>
      expect(getAnnotationColumnsSpy).toHaveBeenLastCalledWith(
        {
          concreteType:
            'org.sagebionetworks.repo.model.table.ViewColumnModelRequest',
          viewScope: {
            viewTypeMask: undefined,
            scope: [mockEvaluationQueue.id!],
            viewEntityType: EntityType.SUBMISSION_VIEW,
          },
          includeDerivedAnnotations: true,
        },
        MOCK_ACCESS_TOKEN,
      ),
    )
    await user.click(screen.getByRole('button', { name: 'Next' }))

    // Give the view a name
    const nameField = await screen.findByRole('textbox', { name: 'Name' })
    await user.type(nameField, 'tableName')
    await user.click(screen.getByRole('button', { name: 'Finish' }))

    // Verify that the view was created and the callback was invoked
    await waitFor(async () => {
      expect(createColumnModelsSpy).toHaveBeenCalledWith(MOCK_ACCESS_TOKEN, [
        // The new column models would have had IDs stripped in the column form
        ...defaultColumnModelsWithoutId,
        ...annotationColumnModelsWithoutId,
      ])
      const createdColumnModelIds = await getLatestCreatedColumnModelIdsFromSpy(
        createColumnModelsSpy,
      )
      expect(createEntitySpy).toHaveBeenCalledWith(
        {
          name: 'tableName',
          concreteType: SUBMISSION_VIEW_CONCRETE_TYPE_VALUE,
          parentId: mockProjectEntityData.id,
          columnIds: createdColumnModelIds,
          scopeIds: expect.any(Array),
        },
        MOCK_ACCESS_TOKEN,
      )
      expect(onComplete).toHaveBeenCalledWith(expect.stringMatching(/syn\d+/))
    })
  })
  test('Create a materialized view', async () => {
    const onComplete = vi.fn()
    const onCancel = vi.fn()
    const { user } = renderComponent({
      open: true,
      parentId: mockProjectEntityData.id,
      onComplete,
      onCancel,
    })
    const mockValidateDefiningSqlResponse = {
      isValid: true,
    }
    mockValidateDefiningSql.mockResolvedValue(mockValidateDefiningSqlResponse)

    // Select "View"
    await user.click(
      await screen.findByRole('menuitem', {
        name: 'View',
      }),
    )

    // Select the materialized view option
    await user.click(
      await screen.findByRole('menuitem', {
        name: 'Materialized View',
      }),
    )

    // Add defining SQL
    const definingSqlField = await screen.findByRole('textbox', {
      name: 'Defining SQL',
    })
    await user.type(definingSqlField, 'SELECT * FROM syn123')

    await user.click(screen.getByRole('button', { name: 'Next' }))

    await waitFor(() => {
      expect(validateDefiningSqlSpy).toHaveBeenCalledWith(
        'SELECT * FROM syn123',
        'materializedview',
      )
    })

    // Give the view a name
    const nameField = await waitFor(() =>
      screen.findByRole('textbox', { name: 'Name' }),
    )
    await user.type(nameField, 'tableName')
    await user.click(screen.getByRole('button', { name: 'Finish' }))

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
    const onComplete = vi.fn()
    const onCancel = vi.fn()
    const { user } = renderComponent({
      open: true,
      parentId: mockProjectEntityData.id,
      onComplete,
      onCancel,
    })
    const mockValidateDefiningSqlResponse = {
      isValid: true,
    }
    mockValidateDefiningSql.mockResolvedValue(mockValidateDefiningSqlResponse)

    // Select "View"
    await user.click(
      await screen.findByRole('menuitem', {
        name: 'View',
      }),
    )

    // Select the virtual table option
    await user.click(
      await screen.findByRole('menuitem', {
        name: 'Virtual Table',
      }),
    )

    // Add defining SQL
    const definingSqlField = await screen.findByRole('textbox', {
      name: 'Defining SQL',
    })
    await user.type(definingSqlField, 'SELECT * FROM syn123')

    await user.click(screen.getByRole('button', { name: 'Next' }))

    await waitFor(() => {
      expect(validateDefiningSqlSpy).toHaveBeenCalledWith(
        'SELECT * FROM syn123',
        'virtualtable',
      )
    })

    // Give the view a name
    const nameField = await waitFor(() =>
      screen.findByRole('textbox', { name: 'Name' }),
    )
    await user.type(nameField, 'tableName')
    await user.click(screen.getByRole('button', { name: 'Finish' }))

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
  test('DefiningSql must be valid before advancing', async () => {
    const onComplete = vi.fn()
    const onCancel = vi.fn()
    const { user } = renderComponent({
      open: true,
      parentId: mockProjectEntityData.id,
      onComplete,
      onCancel,
    })
    const mockValidateDefiningSqlResponse = {
      isValid: false,
      invalidReason: 'Error with SQL',
    }
    mockValidateDefiningSql.mockResolvedValue(mockValidateDefiningSqlResponse)

    // Select "View"
    await user.click(
      await screen.findByRole('menuitem', {
        name: 'View',
      }),
    )

    // Select the materialized view option
    await user.click(
      await screen.findByRole('menuitem', {
        name: 'Materialized View',
      }),
    )

    // Add defining SQL
    const definingSqlField = await screen.findByRole('textbox', {
      name: 'Defining SQL',
    })
    await user.type(definingSqlField, 'SELECT * FROM syn123')

    await user.click(screen.getByRole('button', { name: 'Next' }))

    await waitFor(() => {
      expect(validateDefiningSqlSpy).toHaveBeenCalledWith(
        'SELECT * FROM syn123',
        'materializedview',
      )
    })
    // Check that the error message appears instead of advancing
    const alert = await screen.findByRole('alert')
    within(alert).getByText(mockValidateDefiningSqlResponse.invalidReason)
  })
  test('Column models must be valid before advancing', async () => {
    const onComplete = vi.fn()
    const onCancel = vi.fn()
    const { user } = renderComponent({
      open: true,
      parentId: mockProjectEntityData.id,
      onComplete,
      onCancel,
    })

    // Select "Table"
    const tableButton = await screen.findByRole('menuitem', {
      name: 'Table',
    })
    await user.click(tableButton)

    // Add a column without a name
    await addColumnModelToForm(undefined)

    await user.click(screen.getByRole('button', { name: 'Next' }))
    // Check that the error message appears instead of advancing
    await screen.findByText('Name is required')
  })
  test('EntityView scope and mask must be valid before advancing', async () => {
    const onComplete = vi.fn()
    const onCancel = vi.fn()
    const { user } = renderComponent({
      open: true,
      parentId: mockProjectEntityData.id,
      onComplete,
      onCancel,
    })

    // Select "View"
    await user.click(
      await screen.findByRole('menuitem', {
        name: 'View',
      }),
    )

    // Select the file view option
    await user.click(
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
    await user.click(addContainersToScopeButton)
    await screen.findByTestId('EntityFinderModalMocked')
    const entityFinderModalPassedProps = mockEntityFinderModal.mock.lastCall![0]
    act(() => {
      entityFinderModalPassedProps.onConfirm([{ targetId: 'syn123' }])
    })
    // The scope and mask are now valid -- Next should no longer be disabled
    await waitFor(() => expect(nextButton).not.toBeDisabled())

    // Uncheck all mask boxes to make the mask invalid
    await user.click(screen.getByLabelText('Files'))

    // Verify that we cannot advance
    await waitFor(() => expect(nextButton).toBeDisabled())
  })

  it('Shows an error when column model creation fails', async () => {
    const errorMessage = 'Mocked error in POST /column/batch'
    server.use(
      http.post(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/repo/v1/column/batch`,
        () => {
          return HttpResponse.json({ reason: errorMessage }, { status: 400 })
        },
      ),
    )

    const onComplete = vi.fn()
    const onCancel = vi.fn()
    const { user } = renderComponent({
      open: true,
      parentId: mockProjectEntityData.id,
      onComplete,
      onCancel,
    })

    // Select "Table"
    const tableButton = await screen.findByRole('menuitem', {
      name: 'Table',
    })
    await user.click(tableButton)

    // Add a few columns
    await addColumnModelToForm('foo')
    await addColumnModelToForm('bar')

    await user.click(screen.getByRole('button', { name: 'Next' }))

    // Give the table a name
    const nameField = await screen.findByRole('textbox', { name: 'Name' })
    await user.type(nameField, 'tableName')
    await user.click(screen.getByRole('button', { name: 'Finish' }))

    // Verify that the error is shown and the callback was not invoked
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

      // The error should be shown
      const alert = screen.getByRole('alert')
      within(alert).getByText(errorMessage)

      // The call to create the entity and the onComplete callback should not have been called
      expect(createEntitySpy).not.toHaveBeenCalled()
      expect(onComplete).not.toHaveBeenCalled()
    })
  })

  it('Shows an error when entity creation fails', async () => {
    const errorMessage = 'Mocked error in POST /entity'
    server.use(
      http.post(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}/repo/v1/entity`,
        () => {
          return HttpResponse.json(
            {
              reason: errorMessage,
            },
            { status: 400 },
          )
        },
      ),
    )

    const onComplete = vi.fn()
    const onCancel = vi.fn()
    const { user } = renderComponent({
      open: true,
      parentId: mockProjectEntityData.id,
      onComplete,
      onCancel,
    })

    // Select "Table"
    const tableButton = await screen.findByRole('menuitem', {
      name: 'Table',
    })
    await user.click(tableButton)

    // Add a few columns
    await addColumnModelToForm('foo')
    await addColumnModelToForm('bar')

    await user.click(screen.getByRole('button', { name: 'Next' }))

    // Give the table a name
    const nameField = await screen.findByRole('textbox', { name: 'Name' })
    await user.type(nameField, 'tableName')
    await user.click(screen.getByRole('button', { name: 'Finish' }))

    // Verify that the error is shown and the callback was not invoked
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

      // The error should be shown
      const alert = screen.getByRole('alert')
      within(alert).getByText(errorMessage)

      // The call to create the entity and the onComplete callback should not have been called
      expect(onComplete).not.toHaveBeenCalled()
    })
    // Go back to the previous step and check that the error is no longer shown
    await user.click(screen.getByRole('button', { name: 'Back' }))
    await waitFor(() =>
      expect(screen.queryByRole('alert')).not.toBeInTheDocument(),
    )
  })
})
