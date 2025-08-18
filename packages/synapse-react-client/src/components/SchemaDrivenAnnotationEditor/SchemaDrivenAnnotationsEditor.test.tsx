import mockFileEntity from '@/mocks/entity/mockFileEntity'
import mockProject from '@/mocks/entity/mockProject'
import { mockSchemaBinding } from '@/mocks/mockSchema'
import { getValidationSchemaHandlers } from '@/mocks/msw/handlers/schemaHandlers'
import { server } from '@/mocks/msw/server'
import SynapseClient from '@/synapse-client/index'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { ENTITY_JSON, ENTITY_SCHEMA_BINDING } from '@/utils/APIConstants'
import { SynapseContextType } from '@/utils/context/SynapseContext'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { JsonSchemaObjectBinding } from '@sage-bionetworks/synapse-types'
import {
  act,
  queryByAttribute,
  render,
  RenderResult,
  screen,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { cloneDeep, noop } from 'lodash-es'
import { http, HttpResponse } from 'msw'
import * as ToastMessage from '../ToastMessage/ToastMessage'
import {
  SchemaDrivenAnnotationEditor,
  SchemaDrivenAnnotationEditorProps,
} from './SchemaDrivenAnnotationEditor'

const updateEntityJsonSpy = vi.spyOn(SynapseClient, 'updateEntityJson')

async function chooseAutocompleteOption(el: HTMLElement, option: string) {
  await userEvent.clear(el)
  await userEvent.type(el, option)
  await userEvent.click(screen.getByText(option))
}

const mockToastFn = vi
  .spyOn(ToastMessage, 'displayToast')
  .mockImplementation(() => noop)

const mockOnSuccessFn = vi.fn()
const mockOnChange = vi.fn()

const defaultProps: SchemaDrivenAnnotationEditorProps = {
  entityId: mockFileEntity.id,
  liveValidate: false,
  onSuccess: mockOnSuccessFn,
  onChange: mockOnChange,
}

async function renderComponent(wrapperProps?: SynapseContextType) {
  let result: RenderResult
  // We must await asynchronous events for our assertions to pass
  // eslint-disable-next-line @typescript-eslint/require-await
  await act(async () => {
    result = render(<SchemaDrivenAnnotationEditor {...defaultProps} />, {
      wrapper: createWrapper(wrapperProps),
    })
  })
  return result!
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

  // Verify errors appear
  await screen.findByText(/Validation errors found/)
  await userEvent.click(saveButton)

  const confirmationDialog = await screen.findByRole('dialog')
  await within(confirmationDialog).findByText(
    /Are you sure you want to save the invalid annotations\?/,
  )
  const confirmSaveButton = await within(confirmationDialog).findByRole(
    'button',
    {
      name: 'Save',
    },
  )
  await userEvent.click(confirmSaveButton)

  return waitFor(() => expect(mockOnSuccessFn).toHaveBeenCalled())
}

function configureSchemaBindingHandler(schemaBinding: JsonSchemaObjectBinding) {
  return http.get(
    `${getEndpoint(
      BackendDestinationEnum.REPO_ENDPOINT,
    )}${ENTITY_SCHEMA_BINDING(':entityId')}`,
    () => {
      return HttpResponse.json(schemaBinding, { status: 200 })
    },
  )
}

describe('SchemaDrivenAnnotationEditor tests', () => {
  // Handle the msw lifecycle:
  beforeAll(() => server.listen())
  beforeEach(() => {
    server.use(...getValidationSchemaHandlers())
  })
  afterEach(() => {
    server.restoreHandlers()
    vi.clearAllMocks()
  })
  afterAll(() => server.close())

  const noAnnotationsHandler = http.get(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_JSON(
      ':entityId',
    )}`,

    () => {
      const response = cloneDeep(mockFileEntity).json
      // Delete the annotation keys in the mock--we aren't using them in this suite
      delete response.myStringKey
      delete response.myIntegerKey
      delete response.myFloatKey
      return HttpResponse.json(response, { status: 200 })
    },
  )

  // Returns an entity with annotations that match the schema
  const annotationsWithSchemaHandler = http.get(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_JSON(
      ':entityId',
    )}`,

    () => {
      const response = cloneDeep(mockFileEntity).json
      // Delete the other annotation keys
      delete response.myStringKey
      delete response.myIntegerKey
      delete response.myFloatKey

      // Fill in annotations that match the schema in this test suite
      response.country = 'USA'
      response.state = 'Washington'

      return HttpResponse.json(response, { status: 200 })
    },
  )

  // Returns an entity with annotations equivalent to the `annotationsWithSchemaHandler`, but with the annotations
  // returned as if there is no bound schema
  const annotationsWithoutSchemaHandler = http.get(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_JSON(
      ':entityId',
    )}`,

    () => {
      const response = cloneDeep(mockFileEntity).json
      // Delete the other annotation keys
      delete response.myStringKey
      delete response.myIntegerKey
      delete response.myFloatKey

      // Since there is no schema, these annotations will always be string arrays
      response.country = ['USA']
      response.state = ['Washington']

      return HttpResponse.json(response, { status: 200 })
    },
  )

  const stringArrayAnnotationsHandler = http.get(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_JSON(
      ':entityId',
    )}`,

    () => {
      const response = cloneDeep(mockFileEntity).json
      // Delete the other annotation keys
      delete response.myStringKey
      delete response.myIntegerKey
      delete response.myFloatKey

      // Fill in annotations that match the schema in this test suite
      response.showStringArray = true
      response.stringArray = ['one', 'two', 'three']

      return HttpResponse.json(response, { status: 200 })
    },
  )

  const emptyArrayAnnotationsHandler = http.get(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_JSON(
      ':entityId',
    )}`,

    () => {
      const response = cloneDeep(mockFileEntity).json
      // Delete the other annotation keys
      delete response.myStringKey
      delete response.myIntegerKey
      delete response.myFloatKey

      // Fill in annotations that match the schema in this test suite
      response.showStringArray = true
      delete response.stringArray
      return HttpResponse.json(response, { status: 200 })
    },
  )

  const noSchemaHandler = http.get(
    `${getEndpoint(
      BackendDestinationEnum.REPO_ENDPOINT,
    )}${ENTITY_SCHEMA_BINDING(':entityId')}`,
    () => {
      return HttpResponse.json({}, { status: 404 })
    },
  )

  const schemaHandlers = [configureSchemaBindingHandler(mockSchemaBinding)]

  const successfulUpdateHandler = http.put(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_JSON(
      ':entityId',
    )}`,
    async ({ request }) => {
      return HttpResponse.json(await request.json(), { status: 200 })
    },
  )

  const unsuccessfulUpdateHandler = http.put(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_JSON(
      ':entityId',
    )}`,
    () => {
      return HttpResponse.json(
        { reason: 'Object was updated since last fetched' },
        { status: 412 },
      )
    },
  )

  it('Renders a default form state with one empty key-value field when no annotations or schema are present', async () => {
    server.use(noAnnotationsHandler, noSchemaHandler)

    await renderComponent()

    await screen.findByLabelText('Key')

    const keyInput = screen.getByLabelText('Key')
    expect(keyInput).toHaveValue('newKey')

    const typeField = screen.getByLabelText(/type/i)
    expect(typeField).toHaveValue('String')

    const valuesInput = screen.getByPlaceholderText('New Value')
    expect(valuesInput).toHaveValue('')
  })

  it('Fetches a schema, no annotations', async () => {
    server.use(noAnnotationsHandler, ...schemaHandlers)
    await renderComponent()
    await screen.findByText('requires scientific annotations', { exact: false })
    await screen.findByLabelText('country*')
  })

  it('Handles conditional schemas', async () => {
    server.use(noAnnotationsHandler, ...schemaHandlers)
    await renderComponent()
    await screen.findByText('requires scientific annotations', { exact: false })
    const countryField = await screen.findByLabelText('country*')

    // The required "state" field should not appear unless we select USA
    expect(screen.queryByLabelText('state*')).not.toBeInTheDocument()

    // Behavior under test: select "USA" and "state" field appears
    await chooseAutocompleteOption(countryField, 'USA')

    await screen.findByLabelText('state*')
  })

  it('Handles annotations with no schema', async () => {
    server.use(annotationsWithoutSchemaHandler, noSchemaHandler)

    await renderComponent()

    // custom fields are always arrays
    // we need the '_0' suffix to reference the first textbox
    const countryField = await screen.findByRole<HTMLInputElement>('textbox', {
      name: 'root_country_0',
    })
    expect(countryField.value).toBe('USA')
    const stateField = await screen.findByRole<HTMLInputElement>('textbox', {
      name: 'root_state_0',
    })
    expect(stateField.value).toBe('Washington')

    expect(
      screen.queryByText('requires scientific annotations', {
        exact: false,
      }),
    ).not.toBeInTheDocument()
  })

  it('Fetches existing annotations and schema and loads them into the form', async () => {
    server.use(
      annotationsWithSchemaHandler,
      ...schemaHandlers,
      successfulUpdateHandler,
    )
    const { container } = await renderComponent()
    await screen.findByText('requires scientific annotations', { exact: false })

    await waitFor(() => {
      const countryInput = container.querySelector(
        '#root_country',
      ) as HTMLInputElement
      expect(countryInput.value).toBe('USA')
    })

    // Saving the form should maintain the existing annotations
    await clickSave()
    await waitFor(() =>
      expect(updateEntityJsonSpy).toHaveBeenCalledWith(
        defaultProps.entityId,
        expect.objectContaining({ country: 'USA', state: 'Washington' }),
        expect.anything(),
      ),
    )
  })

  it('Reloads the form data properly after remounting the component (SWC-6486)', async () => {
    server.use(
      annotationsWithSchemaHandler,
      ...schemaHandlers,
      successfulUpdateHandler,
    )
    const { container, rerender } = await renderComponent()
    const schemaAlert = await screen.findByText(
      'requires scientific annotations',
      { exact: false },
    )

    await waitFor(() => {
      const countryInput = container.querySelector(
        '#root_country',
      ) as HTMLInputElement
      expect(countryInput.value).toBe('USA')
    })

    // Clear the component to ensure we get a full re-render
    await Promise.all([
      waitForElementToBeRemoved(schemaAlert),
      act(() => {
        rerender(<></>)
      }),
    ])

    // Re-rendering the editor should reload the existing annotations
    act(() => {
      rerender(<SchemaDrivenAnnotationEditor {...defaultProps} />)
    })
    await screen.findByText('requires scientific annotations', { exact: false })

    await waitFor(() => {
      const countryInput = container.querySelector(
        '#root_country',
      ) as HTMLInputElement
      expect(countryInput.value).toBe('USA')
    })

    // Saving the form should maintain the existing annotations
    await clickSave()
    await waitFor(() =>
      expect(updateEntityJsonSpy).toHaveBeenCalledWith(
        defaultProps.entityId,
        expect.objectContaining({ country: 'USA', state: 'Washington' }),
        expect.anything(),
      ),
    )
  })

  it('Removes a custom annotation field when the last value is removed', async () => {
    server.use(annotationsWithoutSchemaHandler, noSchemaHandler)
    const { container } = await renderComponent()

    // Should be able to find the 'country' custom field
    await screen.findByRole('textbox', {
      name: 'root_country_0',
    })

    // Remove the last element
    const removeButton = await within(
      container.querySelector('#root_country')!,
    ).findByRole<HTMLButtonElement>('button', { name: 'Remove' })
    await userEvent.click(removeButton)

    expect(
      screen.queryByRole('textbox', {
        name: 'root_country_0',
      }),
    ).not.toBeInTheDocument()
  })

  it.skip('Sends a request to update annotations (no schema)', async () => {
    server.use(
      annotationsWithoutSchemaHandler,
      noSchemaHandler,
      successfulUpdateHandler,
    )

    await renderComponent()

    await clickSave()

    expect(updateEntityJsonSpy).toHaveBeenCalledWith(
      expect.objectContaining({ country: ['USA'], state: ['Washington'] }),
    )
  })

  it('Sends a request to update annotations (with schema)', async () => {
    // The annotations are predefined to match the schema
    server.use(
      annotationsWithSchemaHandler,
      ...schemaHandlers,
      successfulUpdateHandler,
    )

    await renderComponent()
    await screen.findByText('requires scientific annotations', { exact: false })

    const countryField = await screen.findByLabelText('country*')

    await chooseAutocompleteOption(countryField, 'USA')

    const stateField = await screen.findByLabelText<HTMLInputElement>('state*')
    await waitFor(() => expect(stateField.value).toBe('Washington'))
    await userEvent.clear(stateField)
    await userEvent.type(stateField, 'Ohio{enter}') // For some reason, keying "enter" here makes the test stable

    await clickSave()

    expect(updateEntityJsonSpy).toHaveBeenCalledWith(
      defaultProps.entityId,
      expect.objectContaining({ country: 'USA', state: 'Ohio' }),
      expect.anything(),
    )
  })

  it('Prompts confirmation when the annotations are non-conformant', async () => {
    // The schema requires annotations that are missing.
    // Verify that we get a warning, and can still click through to save
    server.use(noAnnotationsHandler, ...schemaHandlers, successfulUpdateHandler)
    await renderComponent()
    await screen.findByText('requires scientific annotations', { exact: false })

    await clickSaveAndConfirm()

    await waitFor(() => expect(mockOnSuccessFn).toHaveBeenCalled())
  })

  it('Handles a failed update request', async () => {
    server.use(
      annotationsWithoutSchemaHandler,
      noSchemaHandler,
      unsuccessfulUpdateHandler,
    )

    await renderComponent()

    const saveButton = await screen.findByRole('button', { name: 'Save' })
    await userEvent.click(saveButton)

    await screen.findByText(
      'Annotations could not be updated: Object was updated since last fetched',
    )
  })

  it('Converts singular data to an additionalProperty array when removed from the schema', async () => {
    // If we select "USA", then "Washington", then change "USA" to "CA", "Washington" will become ["Washington"], since all non-schema defined Synapse annotations are arrays
    server.use(
      annotationsWithSchemaHandler,
      ...schemaHandlers,
      successfulUpdateHandler,
    )
    await renderComponent()
    await screen.findByText('requires scientific annotations', { exact: false })
    const countryField = await screen.findByLabelText('country*')

    await chooseAutocompleteOption(countryField, 'CA')

    await waitFor(() =>
      expect(screen.queryByLabelText('state*')).not.toBeInTheDocument(),
    )

    await clickSaveAndConfirm()

    await waitFor(() => expect(updateEntityJsonSpy).toHaveBeenCalled())

    // Since it's an additional property, we expect it to be an array
    expect(updateEntityJsonSpy).toHaveBeenCalledWith(
      defaultProps.entityId,
      expect.objectContaining({ state: ['Washington'] }),
      expect.anything(),
    )
  })

  it('Converts an additionalProperty array back to a single value when added back to the schema', async () => {
    // If we select "USA", then "Washington", then change "USA" to "CA", "Washington" will become ["Washington"] (see previous test)
    // Here we verify that if we then select "USA" again, ["Washington"] will be converted back to "Washington"
    server.use(
      annotationsWithSchemaHandler,
      ...schemaHandlers,
      successfulUpdateHandler,
    )
    await renderComponent()
    await screen.findByText('requires scientific annotations', { exact: false })
    const countryField = await screen.findByLabelText('country*')

    await chooseAutocompleteOption(countryField, 'CA')

    // State is now an array ["Washington"] (previous test confirms this)
    // If we pick "USA" again, it should be converted back to "Washington" (not an array)
    await chooseAutocompleteOption(countryField, 'USA')

    await waitFor(() => {
      expect(mockOnChange).toHaveBeenLastCalledWith(
        expect.objectContaining({ country: 'USA', state: 'Washington' }),
      )
    })

    await clickSave()
    // Since it's back in the schema, it should be a string
    await waitFor(() =>
      expect(updateEntityJsonSpy).toHaveBeenCalledWith(
        defaultProps.entityId,
        expect.objectContaining({ country: 'USA', state: 'Washington' }),
        expect.anything(),
      ),
    )
  })

  // Next two tests are the same as the previous two tests, but with an array.
  it('Converts data in a schema-defined array to an additionalProperty array when removed from the schema', async () => {
    // Converting an array of strings to an additional property array shouldn't change the data, because they are both arrays.
    server.use(
      stringArrayAnnotationsHandler,
      ...schemaHandlers,
      successfulUpdateHandler,
    )
    await renderComponent()
    await screen.findByText('requires scientific annotations', { exact: false })

    const showStringArrayField = await screen.findByLabelText<HTMLInputElement>(
      'showStringArray',
    )
    await waitFor(() => {
      expect(showStringArrayField.value).toBe('true')
    })

    // This will remove the data from the schema.
    await chooseAutocompleteOption(showStringArrayField, 'false')
    await clickSaveAndConfirm()

    expect(mockToastFn).toHaveBeenCalledWith(
      expect.stringContaining(
        'The following annotations are no longer specified by the schema and have been converted to custom fields: stringArray.',
      ),
      'warning',
      expect.objectContaining({
        title: 'Fields No Longer Specified By Schema',
      }),
    )

    await waitFor(() => expect(updateEntityJsonSpy).toHaveBeenCalled())
    // Since it's back in the schema, it should be a string
    expect(updateEntityJsonSpy).toHaveBeenCalledWith(
      defaultProps.entityId,
      expect.objectContaining({ stringArray: ['one', 'two', 'three'] }),
      expect.anything(),
    )
  })

  it('Converts an additionalProperty array back to an array when added back to the schema', async () => {
    // Converting a schema-defined array of strings to an additional property array and back to schema-defined should not alter the data

    server.use(
      stringArrayAnnotationsHandler,
      ...schemaHandlers,
      successfulUpdateHandler,
    )
    await renderComponent()
    await screen.findByText('requires scientific annotations', { exact: false })

    const showStringArrayField = await screen.findByLabelText<HTMLInputElement>(
      'showStringArray',
    )
    await waitFor(() => {
      expect(showStringArrayField.value).toBe('true')
    })

    // This will remove the data from the schema.
    await chooseAutocompleteOption(showStringArrayField, 'false')

    // Add it back to the schema.
    await chooseAutocompleteOption(showStringArrayField, 'true')

    await clickSaveAndConfirm()

    await waitFor(() => expect(updateEntityJsonSpy).toHaveBeenCalled())
    // Since it's back in the schema, it should be a string
    expect(updateEntityJsonSpy).toHaveBeenCalledWith(
      defaultProps.entityId,
      expect.objectContaining({ stringArray: ['one', 'two', 'three'] }),
      expect.anything(),
    )
  })

  it('Shows a schema description and type when help is clicked', async () => {
    server.use(noAnnotationsHandler, ...schemaHandlers)
    await renderComponent()
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

  it('Does not submit null data for schema-defined properties', async () => {
    server.use(
      annotationsWithSchemaHandler,
      ...schemaHandlers,
      successfulUpdateHandler,
    )
    await renderComponent()
    await screen.findByText('requires scientific annotations', { exact: false })

    const countryField = await screen.findByLabelText('country*')

    // Pick a value to ensure the property exists in the formData
    await chooseAutocompleteOption(countryField, 'USA')

    // Now clear the field
    await userEvent.click(await screen.findByLabelText('Clear'))

    // Save the form
    await clickSaveAndConfirm()

    await waitFor(() => expect(updateEntityJsonSpy).toHaveBeenCalled())
    // Because we cleared the field, country should not exist in the payload
    expect(
      Object.hasOwn(updateEntityJsonSpy.mock.lastCall![1], 'country'),
    ).toBe(false)
  })

  it('Initializes an empty array but does not submit null data', async () => {
    server.use(
      emptyArrayAnnotationsHandler, // showStringArray will be true but stringArray will have no data
      ...schemaHandlers,
      successfulUpdateHandler,
    )
    const component = await renderComponent()
    await screen.findByText('requires scientific annotations', { exact: false })

    let showStringArrayField: HTMLInputElement
    await waitFor(() => {
      showStringArrayField = screen.getByLabelText('showStringArray')
      expect(showStringArrayField.value).toBe('true')
    })

    // Verify that the field for the first value in the array is visible
    expect(
      queryByAttribute('id', component.container, 'root_stringArray_0'),
    ).not.toBeNull()

    // Save the form
    await clickSaveAndConfirm()

    await waitFor(() => expect(updateEntityJsonSpy).toHaveBeenCalled())
    // Because we never entered any data, the string array should not exist in the payload
    expect(
      Object.hasOwn(updateEntityJsonSpy.mock.lastCall![1], 'stringArray'),
    ).toBe(false)
  })

  it('Does not convert string annotations with commas to arrays (SWC-7313)', async () => {
    const stringAnnotationWithCommas = 'my string annotation, with commas'
    server.use(
      http.get(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_JSON(
          ':entityId',
        )}`,

        () => {
          const response = cloneDeep(mockFileEntity).json
          // Delete the other annotation keys
          delete response.myStringKey
          delete response.myIntegerKey
          delete response.myFloatKey

          // Add string with commas
          response.myStringAnnotationWithCommas = stringAnnotationWithCommas
          delete response.stringArray
          return HttpResponse.json(response, { status: 200 })
        },
      ), // showStringArray will be true but stringArray will have no data
      noSchemaHandler,
    )
    await renderComponent()

    await screen.findByDisplayValue(stringAnnotationWithCommas)
  })

  describe('Passes entity data to the Form component to compute conditional fields', () => {
    it('shows a conditional field where the concreteType matches FileEntity', async () => {
      server.use(
        noAnnotationsHandler,
        configureSchemaBindingHandler({
          ...mockSchemaBinding,
          jsonSchemaVersionInfo: {
            ...mockSchemaBinding.jsonSchemaVersionInfo,
            $id: 'org.sagebionetworks-MockConditionalSchema',
          },
        }),
      )

      await renderComponent()
      await screen.findByText('requires scientific annotations', {
        exact: false,
      })

      // fileType field is shown since this is a FileEntity
      await screen.findByLabelText('fileType', { exact: false })
    })

    it('does not show a conditional field when the concreteType does not match FileEntity', async () => {
      server.use(
        configureSchemaBindingHandler({
          ...mockSchemaBinding,
          jsonSchemaVersionInfo: {
            ...mockSchemaBinding.jsonSchemaVersionInfo,
            $id: 'org.sagebionetworks-MockConditionalSchema-1.0.0',
          },
        }),
        // Set up handler to return a Project
        http.get(
          `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_JSON(
            ':entityId',
          )}`,

          () => {
            const response = cloneDeep(mockProject).json
            return HttpResponse.json(response, { status: 200 })
          },
        ),
      )

      await renderComponent()
      await screen.findByText('requires scientific annotations', {
        exact: false,
      })

      // fileType field is not shown since this is not a FileEntity
      expect(
        screen.queryByLabelText('fileType', { exact: false }),
      ).not.toBeInTheDocument()
    })
  })
})
