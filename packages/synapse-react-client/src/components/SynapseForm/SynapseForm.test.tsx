import $RefParser from '@apidevtools/json-schema-ref-parser'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryRouter, RouterProvider } from 'react-router'
import {
  mockFormData as submissionData,
  mockFormSchema as formSchema,
  mockNavSchema as formNavSchema,
  mockUiSchema as formUiSchema,
} from '../../mocks/mock_drug_tool_data'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import SynapseForm, { SynapseFormProps } from './SynapseForm'

// import { Engine } from 'json-rules-engine'

const formTitle = 'my submission'

const newFormData = {
  metadata: {
    formSchemaVersion: '01',
    uiSchemaVersion: '01',
    navSchemaVersion: '01',
  },
}

const renderComponent = async (props: SynapseFormProps) => {
  const schema = await $RefParser.dereference(props.schema)
  const _props = { ...props, ...{ schema } }
  const router = createMemoryRouter([
    {
      path: '/',
      element: <SynapseForm {..._props} />,
    },
  ])
  return render(<RouterProvider router={router} />, {
    wrapper: createWrapper(),
  })
}

const mock = {
  submitFn: jest.fn(() => 'ok'),
  saveFn: jest.fn(() => 'ok'),
  formRef: {
    current: {
      submit: jest.fn(() => ''),
      setState: jest.fn(() => ''),
    },
  },
}

const props: SynapseFormProps = {
  schema: formSchema,

  navSchema: formNavSchema,
  uiSchema: formUiSchema,

  formData: newFormData,
  onSubmit: mock.submitFn,
  onSave: mock.saveFn,
  formTitle: formTitle,
  isWizardMode: false,
}

// TODO: may be needed to run "todo" tests
// Engine.run = jest.fn(() => Promise.resolve('restrictions'))

/**
 * Tests in "todo" state were not migrated after removing Enzyme.
 * Please write compatible tests before modifying SynapseForm.
 * Enzyme code was left for reference, but may not be very useful as it usually directly tests class methods.
 */
describe('SynapseForm', () => {
  test('initialize for new submission', async () => {
    const { container } = await renderComponent(props)

    // The nav menu shows all items in the nav schema which
    //   - is not a child or
    //   - is a child and has an ancestor that is not a child
    // in this case, that's "In Vitro", its 2 children, and "Submit"
    expect(container.querySelectorAll('.item')).toHaveLength(4)

    // The current step should be "Naming"
    screen.getByRole('group', { name: 'Naming' })

    // There should be a Save button
    screen.getByRole('button', { name: 'SAVE' })

    // There should be a link to the next step "Measurements"
    screen.getByText('Measurements')
  })

  test('initialize for existing submission', async () => {
    const _props = { ...props, ...{ formData: submissionData } }
    await renderComponent(_props)

    const firstNameInput =
      screen.getByLabelText<HTMLInputElement>('First Name*')
    expect(firstNameInput.value).toBe(submissionData.naming.first_name)
  })

  describe('action tests', () => {
    test('go to next step', async () => {
      await renderComponent(props)

      // The current step should be "Naming"
      screen.getByRole('group', { name: 'Naming' })

      // There should be a link to the next step "Measurements"
      const nextStepLink = screen.getByText('Measurements')

      await userEvent.click(nextStepLink)

      await screen.findByRole(
        'group',
        { name: 'Measurements' },
        { timeout: 5000 },
      )
    })

    /**
     * e.g. if you're on step 1 and the next step is step 3, test that clicking "next" on step 1 will go to step 3
     */
    test.todo('go to predetermined step')

    test.todo(
      'go to previous numerical step if not wizard',
      //  async () => {
      //     instance.nextStep = instance.state.steps[3]
      //     await instance.performAction(NavActionEnum.GO_TO_STEP, false)
      //     expect(instance.state.currentStep.id).toEqual(instance.state.steps[3].id)
      //     await instance.performAction(NavActionEnum.PREVIOUS, false)
      //     expect(instance.state.currentStep.id).toEqual(instance.state.steps[2].id)
      // }
    )

    test.todo(
      'go to previous visited step if wizard',
      // async () => {
      //     const _props = { ...props, ...{ isWizard: true } }
      //     let { instance } = await renderComponent(_props)
      //     instance.formRef = mock.formRef
      //     instance.nextStep = instance.state.steps[3]
      //     await instance.performAction(NavActionEnum.GO_TO_STEP, false)
      //     expect(instance.state.currentStep.id).toEqual(instance.state.steps[3].id)
      //     await instance.performAction(NavActionEnum.PREVIOUS, false)
      //     expect(instance.state.currentStep.id).toEqual(instance.state.steps[2].id)
      //   }
    )

    test.todo(
      'show warning when excluding a screen',
      //  async () => {
      //     instance.nextStep = instance.state.steps[4]
      //     const excludeSpy = jest.spyOn(instance, 'showExcludeStateWarningDialog')
      //     await instance.performAction(NavActionEnum.GO_TO_STEP, false)
      //     expect(instance.state.currentStep.id).toEqual(instance.state.steps[4].id)
      //     wrapper.find('.step-exclude-directions button').simulate('click')
      //     expect(excludeSpy).toHaveBeenCalled()
      //   })
      // }
    )
  })

  describe('custom validation tests', () => {
    //   let instance: any
    //   let wrapper: any
    //   const updatedData = _.cloneDeep(submissionData)
    //   updatedData['in_vivo_data'] = inVivoData.in_vivo_data
    //   beforeEach(async () => {
    //     ;({ instance, wrapper } = await renderComponent({
    //       ...props,
    //       ...{ formData: updatedData },
    //     }))
    //     instance.formRef = mock.formRef
    //   })
    test.todo(
      'check custom validation before submitting the form',
      //  async () => {
      //     const submitSpy = jest.spyOn(instance.formRef.current, 'submit')
      //     const customValidation = jest.spyOn(instance, 'runCustomValidation')
      //     instance.nextStep = instance.state.steps[3]
      //     await instance.triggerAction(NavActionEnum.GO_TO_STEP)
      //     await instance.performAction(NavActionEnum.GO_TO_STEP, false)
      //     expect(submitSpy).toHaveBeenCalled()
      //     expect(customValidation).toHaveBeenCalled()
      //   }
    )
    test.todo(
      'only run custom validation on all sections if the state is final',
      // async () => {
      //     const currentStep = instance.state.steps[instance.state.steps.length - 1]
      //     expect(currentStep.final).toBe(true)
      //     expect(currentStep.validationRules).toBeUndefined()
      //     const errors = await instance.runCustomValidation(
      //       updatedData,
      //       currentStep,
      //       instance.state.steps,
      //     )
      //     expect(errors).toHaveLength(5)
      //   }
    )
    test.todo(
      'run custom validation on a single section if the step is not final',
      // async () => {
      //     const currentStep = instance.state.steps[0]
      //     expect(currentStep.final).toBeFalsy()
      //     expect(currentStep.validationRules.length).toBe(2)
      //     const errors = await instance.runCustomValidation(
      //       updatedData,
      //       currentStep,
      //       instance.state.steps,
      //     )
      //     expect(errors).toHaveLength(1)
      //   }
    )
    test.todo(
      'should generate additional rules if the the rule is specified with [*]',
      //  async () => {
      //     const currentStep = instance.state.steps[6]
      //     expect(currentStep.final).toBeFalsy()
      //     expect(currentStep.validationRules.length).toBe(2)
      //     expect(
      //       currentStep.validationRules[0].event.params.property.indexOf('[*]'),
      //     ).not.toBe(-1)
      //     expect(
      //       currentStep.validationRules[1].event.params.property.indexOf('[*]'),
      //     ).not.toBe(-1)
      //     expect(
      //       updatedData.in_vivo_data.experiments[0].age_range.age_range_min,
      //     ).toBeGreaterThan(
      //       updatedData.in_vivo_data.experiments[0].age_range.age_range_max,
      //     )
      //     expect(
      //       updatedData.in_vivo_data.experiments[1].age_range.age_range_min,
      //     ).toBeGreaterThan(
      //       updatedData.in_vivo_data.experiments[1].age_range.age_range_max,
      //     )
      //     expect(
      //       updatedData.in_vivo_data.experiments[0].dose_range.dose_range_min,
      //     ).toBeGreaterThan(
      //       updatedData.in_vivo_data.experiments[0].dose_range.dose_range_max,
      //     )
      //     expect(
      //       updatedData.in_vivo_data.experiments[1].dose_range.dose_range_min,
      //     ).toBeGreaterThan(
      //       updatedData.in_vivo_data.experiments[1].dose_range.dose_range_max,
      //     )
      //     expect(updatedData['in_vivo_data']['experiments']).toHaveLength(2)
      //     let errors = await instance.runCustomValidation(
      //       updatedData,
      //       currentStep,
      //       instance.state.steps,
      //     )
      //     expect(errors).toHaveLength(4)
      //     updatedData.in_vivo_data.experiments[0].age_range.age_range_min = 2
      //     updatedData.in_vivo_data.experiments[0].dose_range.dose_range_min = 1
      //     errors = await instance.runCustomValidation(
      //       updatedData,
      //       currentStep,
      //       instance.state.steps,
      //     )
      //     expect(errors).toHaveLength(2)
      //     updatedData.in_vivo_data.experiments[1].age_range.age_range_min = 2
      //     updatedData.in_vivo_data.experiments[1].dose_range.dose_range_min = 1
      //     errors = await instance.runCustomValidation(
      //       updatedData,
      //       currentStep,
      //       instance.state.steps,
      //     )
      //     expect(errors).toHaveLength(0)
    )
  })
})
