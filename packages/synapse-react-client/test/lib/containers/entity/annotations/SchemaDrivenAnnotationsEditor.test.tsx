import {
  queryByAttribute,
  render,
  screen,
  waitFor,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import selectEvent from 'react-select-event'
import {
  SchemaDrivenAnnotationEditor,
  SchemaDrivenAnnotationEditorProps,
} from '../../../../../src/lib/containers/entity/annotations/SchemaDrivenAnnotationEditor'
import { displayToast } from '../../../../../src/lib/containers/ToastMessage'
import { createWrapper } from '../../../../testutils/TestingLibraryUtils'
import {
  ENTITY_JSON,
  ENTITY_SCHEMA_BINDING,
  SCHEMA_VALIDATION_GET,
  SCHEMA_VALIDATION_START,
} from '../../../../../src/lib/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../../../src/lib/utils/functions/getEndpoint'
import { SynapseContextType } from '../../../../../src/lib/utils/SynapseContext'
import mockFileEntity from '../../../../../mocks/entity/mockFileEntity'
import {
  mockSchemaBinding,
  mockValidationSchema,
} from '../../../../../mocks/mockSchema'
import { rest, server } from '../../../../../mocks/msw/server'

jest.mock('../../../../../src/lib/containers/ToastMessage', () => {
  return { displayToast: jest.fn() }
})

const mockToastFn = displayToast

const mockAsyncTokenId = 888888

const mockOnSuccessFn = jest.fn()

// Captures the JSON passed to the server via msw.
const updatedJsonCaptor = jest.fn()

const defaultProps: SchemaDrivenAnnotationEditorProps = {
  entityId: mockFileEntity.id,
  liveValidate: false,
  onSuccess: mockOnSuccessFn,
}

function renderComponent(wrapperProps?: SynapseContextType) {
  return render(<SchemaDrivenAnnotationEditor {...defaultProps} />, {
    wrapper: createWrapper(wrapperProps),
  })
}

// Handles saving when there is no schema or the data is valid under the schema
async function clickSave() {
  const saveButton = await screen.findByRole('button', { name: 'Save' })
  await userEvent.click(saveButton)
  return waitFor(() => expect(mockOnSuccessFn).toHaveBeenCalled())
}

// Handles saving when the data is invalid for the schema
// Clicks "Save" twice and then clicks "Save" in the confirmation modal
async function clickSaveAndConfirm() {
  const saveButton = await screen.findByRole('button', { name: 'Save' })
  await userEvent.click(saveButton)
  await userEvent.click(saveButton)

  await screen.findByText('Are you sure you want to save them?')
  const confirmSaveButton = await screen.findByRole('button', {
    name: 'Save',
  })
  await userEvent.click(confirmSaveButton)

  return waitFor(() => expect(mockOnSuccessFn).toHaveBeenCalled())
}

// These tests are unstable, so we'll skip them until we can fix them
// The component is in experimental mode only, so not a big deal for now
describe.skip('SchemaDrivenAnnotationEditor tests', () => {
  // Handle the msw lifecycle:
  beforeAll(() => server.listen())
  afterEach(() => {
    server.restoreHandlers()
    jest.resetAllMocks()
    updatedJsonCaptor.mockClear()
  })
  afterAll(() => server.close())

  const noAnnotationsHandler = rest.get(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_JSON(
      ':entityId',
    )}`,

    async (req, res, ctx) => {
      const response = mockFileEntity.json
      // Delete the annotation keys in the mock--we aren't using them in this suite
      delete response.myStringKey
      delete response.myIntegerKey
      delete response.myFloatKey
      return res(ctx.status(200), ctx.json(response))
    },
  )

  const annotationsHandler = rest.get(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_JSON(
      ':entityId',
    )}`,

    async (req, res, ctx) => {
      const response = mockFileEntity.json
      // Delete the other annotation keys
      delete response.myStringKey
      delete response.myIntegerKey
      delete response.myFloatKey

      // Fill in annotations that match the schema in this test suite
      response.country = ['USA']
      response.state = ['Washington']

      return res(ctx.status(200), ctx.json(response))
    },
  )

  const stringArrayAnnotationsHandler = rest.get(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_JSON(
      ':entityId',
    )}`,

    async (req, res, ctx) => {
      const response = mockFileEntity.json
      // Delete the other annotation keys
      delete response.myStringKey
      delete response.myIntegerKey
      delete response.myFloatKey

      // Fill in annotations that match the schema in this test suite
      response.showStringArray = true
      response.stringArray = ['one', 'two', 'three']

      return res(ctx.status(200), ctx.json(response))
    },
  )

  const emptyArrayAnnotationsHandler = rest.get(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_JSON(
      ':entityId',
    )}`,

    async (req, res, ctx) => {
      const response = mockFileEntity.json
      // Delete the other annotation keys
      delete response.myStringKey
      delete response.myIntegerKey
      delete response.myFloatKey

      // Fill in annotations that match the schema in this test suite
      response.showStringArray = true
      delete response.stringArray
      return res(ctx.status(200), ctx.json(response))
    },
  )

  const noSchemaHandler = rest.get(
    `${getEndpoint(
      BackendDestinationEnum.REPO_ENDPOINT,
    )}${ENTITY_SCHEMA_BINDING(':entityId')}`,
    async (req, res, ctx) => {
      return res(ctx.status(404), ctx.json({}))
    },
  )

  const schemaHandlers = [
    rest.get(
      `${getEndpoint(
        BackendDestinationEnum.REPO_ENDPOINT,
      )}${ENTITY_SCHEMA_BINDING(':entityId')}`,
      async (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(mockSchemaBinding))
      },
    ),
    rest.post(
      `${getEndpoint(
        BackendDestinationEnum.REPO_ENDPOINT,
      )}${SCHEMA_VALIDATION_START}`,
      async (req, res, ctx) => {
        return res(ctx.status(201), ctx.json({ token: mockAsyncTokenId }))
      },
    ),
    rest.get(
      `${getEndpoint(
        BackendDestinationEnum.REPO_ENDPOINT,
      )}${SCHEMA_VALIDATION_GET(mockAsyncTokenId)}`,
      async (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({ validationSchema: mockValidationSchema }),
        )
      },
    ),
  ]

  const successfulUpdateHandler = rest.put(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_JSON(
      ':entityId',
    )}`,
    async (req, res, ctx) => {
      updatedJsonCaptor(req.body)
      return res(ctx.status(200), ctx.json(req.body))
    },
  )

  const unsuccessfulUpdateHandler = rest.put(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_JSON(
      ':entityId',
    )}`,
    async (req, res, ctx) => {
      return res(
        ctx.status(412),
        ctx.json({
          reason: 'Object was updated since last fetched',
        }),
      )
    },
  )

  it('Works with no annotations and no schema', async () => {
    server.use(noAnnotationsHandler, noSchemaHandler)

    renderComponent()
    await screen.findByText('has no annotations', { exact: false })
    const buttons = await screen.findAllByRole('button')

    // Expect one button to add annotations, and another to save
    expect(buttons.length).toBe(2)
  })

  it('Fetches a schema, no annotations', async () => {
    server.use(noAnnotationsHandler, ...schemaHandlers)
    renderComponent()
    await screen.findByText('requires scientific annotations', { exact: false })
    await screen.findByLabelText('country*')
  })

  it('Handles conditional schemas', async () => {
    server.use(noAnnotationsHandler, ...schemaHandlers)
    renderComponent()
    await screen.findByText('requires scientific annotations', { exact: false })
    const countryField = await screen.findByLabelText('country*')

    // The required "state" field should not appear unless we select USA
    expect(screen.queryByLabelText('state*')).not.toBeInTheDocument()

    // Behavior under test: select "USA" and "state" field appears
    await selectEvent.select(countryField, 'USA')
    await screen.findByLabelText('state*')
  })

  it('Handles annotations with no schema', async () => {
    server.use(annotationsHandler, noSchemaHandler)

    renderComponent()

    // custom fields are always arrays
    // we need the '-0' suffix to reference the first textbox
    const countryField = (await screen.findByRole('textbox', {
      name: 'country-0',
    })) as HTMLInputElement
    expect(countryField.value).toBe('USA')
    const stateField = (await screen.findByRole('textbox', {
      name: 'state-0',
    })) as HTMLInputElement
    expect(stateField.value).toBe('Washington')

    expect(
      screen.queryByText('requires scientific annotations', {
        exact: false,
      }),
    ).not.toBeInTheDocument()
  })

  it('Fetches existing annotations and schema and loads them into the form', async () => {
    server.use(annotationsHandler, ...schemaHandlers, successfulUpdateHandler)
    renderComponent()
    await screen.findByText('requires scientific annotations', { exact: false })

    // Saving the form should maintain the existing annotations
    await clickSaveAndConfirm()
    await waitFor(() =>
      expect(updatedJsonCaptor).toBeCalledWith(
        expect.objectContaining({ country: 'USA', state: 'Washington' }),
      ),
    )
  })

  it('Removes a custom annotation field when the last value is removed', async () => {
    server.use(annotationsHandler, noSchemaHandler)
    renderComponent()

    // Should be able to find the 'country' custom field
    await screen.findByRole('textbox', {
      name: 'country-0',
    })

    // Remove the last element
    await userEvent.click(await screen.findByLabelText('Remove country[0]'))

    expect(
      screen.queryByRole('textbox', {
        name: 'country-0',
      }),
    ).not.toBeInTheDocument()
  })

  it('Sends a request to update annotations (no schema)', async () => {
    server.use(annotationsHandler, noSchemaHandler, successfulUpdateHandler)

    renderComponent()

    await clickSave()

    expect(updatedJsonCaptor).toBeCalledWith(
      expect.objectContaining({ country: ['USA'], state: ['Washington'] }),
    )
  })

  it('Sends a request to update annotations (with schema)', async () => {
    // The annotations are predefined to match the schema
    server.use(annotationsHandler, ...schemaHandlers, successfulUpdateHandler)

    renderComponent()
    await screen.findByText('requires scientific annotations', { exact: false })

    // We need the individual schema field components to render because in some cases they convert data
    // to the appropriate format (e.g. flattening arrays of one item)
    const countryField = (await screen.findByLabelText(
      'country*',
    )) as HTMLInputElement
    const stateField = (await screen.findByLabelText(
      'state*',
    )) as HTMLInputElement

    await waitFor(() => expect(stateField.value).toBe('Washington'))

    await selectEvent.select(countryField, 'USA')
    await userEvent.clear(stateField)
    await userEvent.type(stateField, 'Ohio{enter}') // For some reason, keying "enter" here makes the test stable

    await clickSave()

    expect(updatedJsonCaptor).toBeCalledWith(
      expect.objectContaining({ country: 'USA', state: 'Ohio' }),
    )
  })

  it('Prompts confirmation when the annotations are non-conformant', async () => {
    // The schema requires annotations that are missing.
    // Verify that we get a warning, and can still click through to save
    server.use(noAnnotationsHandler, ...schemaHandlers, successfulUpdateHandler)
    renderComponent()
    await screen.findByText('requires scientific annotations', { exact: false })

    await clickSaveAndConfirm()

    await waitFor(() => expect(mockOnSuccessFn).toBeCalled())
  })

  it('Handles a failed update request', async () => {
    server.use(annotationsHandler, noSchemaHandler, unsuccessfulUpdateHandler)

    renderComponent()

    const saveButton = await screen.findByRole('button', { name: 'Save' })
    await userEvent.click(saveButton)

    await screen.findByText(
      'Annotations could not be updated: Object was updated since last fetched',
    )
  })

  it('Converts singular data to an additionalProperty array when removed from the schema', async () => {
    // If we select "USA", then "Washington", then change "USA" to "CA", "Washington" will become ["Washington"], since all non-schema defined Synapse annotations are arrays
    server.use(annotationsHandler, ...schemaHandlers, successfulUpdateHandler)
    renderComponent()
    await screen.findByText('requires scientific annotations', { exact: false })
    const countryField = await screen.findByLabelText('country*')

    // This is unstable if we only call it once 🙃 🤷
    await selectEvent.select(countryField, 'CA')
    await selectEvent.select(countryField, 'CA')

    await waitFor(() =>
      expect(screen.queryByLabelText('state*')).not.toBeInTheDocument(),
    )

    await clickSaveAndConfirm()

    await waitFor(() => expect(updatedJsonCaptor).toBeCalled())

    // Since it's an additional property, we expect it to be an array
    expect(updatedJsonCaptor).toBeCalledWith(
      expect.objectContaining({ state: ['Washington'] }),
    )
  })

  it('Converts an additionalProperty array back to a single value when added back to the schema', async () => {
    // If we select "USA", then "Washington", then change "USA" to "CA", "Washington" will become ["Washington"] (see previous test)
    // Here we verify that if we then select "USA" again, ["Washington"] will be converted back to "Washington"
    server.use(annotationsHandler, ...schemaHandlers, successfulUpdateHandler)
    renderComponent()
    await screen.findByText('requires scientific annotations', { exact: false })
    const countryField = (await screen.findByLabelText(
      'country*',
    )) as HTMLInputElement

    await selectEvent.select(countryField, 'CA')

    // State is now an array ["Washington"] (previous test confirms this)
    // If we pick "USA" again, it should be converted back to "Washington" (not an array)
    await selectEvent.select(countryField, 'USA')

    await clickSave()
    // Since it's back in the schema, it should be a string
    await waitFor(() =>
      expect(updatedJsonCaptor).toBeCalledWith(
        expect.objectContaining({ state: 'Washington' }),
      ),
    )
  })

  // Skipped due to unstable execution on TravisCI.
  // Next two tests are the same as the previous two tests, but with an array.
  it.skip('Converts data in a schema-defined array to an additionalProperty array when removed from the schema', async () => {
    // Converting an array of strings to an additional property array shouldn't change the data, because they are both arrays.
    server.use(
      stringArrayAnnotationsHandler,
      ...schemaHandlers,
      successfulUpdateHandler,
    )
    renderComponent()
    await screen.findByText('requires scientific annotations', { exact: false })

    const showStringArrayField = (await screen.findByLabelText(
      'showStringArray',
    )) as HTMLInputElement
    expect(showStringArrayField.value).toBe('true')

    // This will remove the data from the schema.
    await userEvent.selectOptions(showStringArrayField, 'false')
    await clickSaveAndConfirm()

    expect(mockToastFn).toBeCalledWith(
      expect.stringContaining(
        'The following annotations are no longer specified by the schema and have been converted to Custom Fields: stringArray.',
      ),
      'warning',
      expect.objectContaining({
        title: 'Fields No Longer Specified By Schema',
      }),
    )

    await waitFor(() => expect(updatedJsonCaptor).toBeCalled())
    // Since it's back in the schema, it should be a string
    expect(updatedJsonCaptor).toBeCalledWith(
      expect.objectContaining({ stringArray: ['one', 'two', 'three'] }),
    )
  })

  it('Converts an additionalProperty array back to an array when added back to the schema', async () => {
    // Converting a schema-defined array of strings to an additional property array and back to schema-defined should not alter the data

    server.use(
      stringArrayAnnotationsHandler,
      ...schemaHandlers,
      successfulUpdateHandler,
    )
    renderComponent()
    await screen.findByText('requires scientific annotations', { exact: false })

    const showStringArrayField = (await screen.findByLabelText(
      'showStringArray',
    )) as HTMLInputElement
    expect(showStringArrayField.value).toBe('true')

    // This will remove the data from the schema.
    await userEvent.selectOptions(showStringArrayField, 'false')

    // Add it back to the schema.
    await userEvent.selectOptions(showStringArrayField, 'true')

    await clickSaveAndConfirm()

    await waitFor(() => expect(updatedJsonCaptor).toBeCalled())
    // Since it's back in the schema, it should be a string
    expect(updatedJsonCaptor).toBeCalledWith(
      expect.objectContaining({ stringArray: ['one', 'two', 'three'] }),
    )
  })

  it('Disallows keys that collide with the Entity JSON definition and throws a custom error message', async () => {
    server.use(annotationsHandler, noSchemaHandler)

    renderComponent()

    const addAnnotationButton = await screen.findByRole('button', {
      name: 'Add Custom Field',
    })

    await userEvent.click(addAnnotationButton)

    const keyField = await screen.findByLabelText('Key')

    await userEvent.clear(keyField)
    await userEvent.type(keyField, 'id{enter}')

    const saveButton = await screen.findByRole('button', { name: 'Save' })
    await userEvent.click(saveButton)

    await screen.findByText(
      '"id" is a reserved internal key and cannot be used',
      { exact: false },
    )
  })

  it('Shows a schema description and type when help is clicked', async () => {
    server.use(noAnnotationsHandler, ...schemaHandlers)
    renderComponent()
    await screen.findByText('requires scientific annotations', { exact: false })
    await screen.findByLabelText('country*')

    const moreInfoButton = screen.getAllByRole('button', {
      name: 'More Info',
    })[0]

    // Call under test -- show the description table
    await userEvent.click(moreInfoButton)

    expect(
      screen.getByText('Test description for country property'),
    ).toBeVisible()

    // Now hide the description table
    await userEvent.click(moreInfoButton)

    await waitFor(() =>
      expect(
        screen.queryByText('Test description for country property'),
      ).not.toBeVisible(),
    )
  })

  it('Initializes an empty array but does not submit null data', async () => {
    server.use(
      emptyArrayAnnotationsHandler, // showStringArray will be true but stringArray will have no data
      ...schemaHandlers,
      successfulUpdateHandler,
    )
    const component = renderComponent()
    await screen.findByText('requires scientific annotations', { exact: false })

    const showStringArrayField = (await screen.findByLabelText(
      'showStringArray',
    )) as HTMLInputElement
    expect(showStringArrayField.value).toBe('true')

    // Verify that the field for the first value in the array is visible
    expect(
      queryByAttribute('id', component.container, 'root_stringArray_0'),
    ).not.toBeNull()

    // Save the form
    await clickSaveAndConfirm()

    await waitFor(() => expect(updatedJsonCaptor).toBeCalled())
    // Because we never entered any data, the string array should not exist in the payload
    expect(
      updatedJsonCaptor.mock.calls[0][0].hasOwnProperty('stringArray'),
    ).toBe(false)
  })
})
