import Blocker from '@/components/utils/Blocker'
import Form from '@rjsf/core'
import { ErrorListProps, RJSFValidationError, UiSchema } from '@rjsf/utils'
import validator from '@rjsf/validator-ajv8'
import { Engine, EngineResult } from 'json-rules-engine'
import cloneDeep from 'lodash-es/cloneDeep'
import find from 'lodash-es/find'
import findIndex from 'lodash-es/findIndex'
import first from 'lodash-es/first'
import get from 'lodash-es/get'
import isEqual from 'lodash-es/isEqual'
import isUndefined from 'lodash-es/isUndefined'
import keys from 'lodash-es/keys'
import pick from 'lodash-es/pick'
import remove from 'lodash-es/remove'
import set from 'lodash-es/set'
import trimStart from 'lodash-es/trimStart'
import { Component, createRef, ReactNode, RefObject } from 'react'
import Switch from 'react-switch'
import { ConfirmationDialog } from '../ConfirmationDialog/ConfirmationDialog'
import DataDebug from './DataDebug'
import Header from './Header'
import { NavButtons, NextStepLink } from './NavButtons'
import StepsSideNav from './StepsSideNav'
import SummaryTable from './SummaryTable'
import SynapseFormCheckboxesWidget from './SynapseFormCheckboxesWidget'
import SynapseFormCheckboxWidget from './SynapseFormCheckboxWidget'
import SynapseFormRadioWidget from './SynapseFormRadioWidget'
import {
  FormSchema,
  IRulesNavigationEvent,
  IRulesValidationEvent,
  NavActionEnum,
  StatusEnum,
  Step,
  StepStateEnum,
} from './types'
import WarningDialog from './WarningDialog'

export interface IFormData {
  [key: string]: {
    included?: boolean
    [key: string]: any
  }
}

export type SynapseFormProps = {
  schema: FormSchema
  uiSchema: UiSchema
  navSchema: {
    steps: any[]
  }
  formData: IFormData
  onSubmit: (formData: IFormData) => void
  onSave: (formData: IFormData) => void
  formTitle: string
  formClass?: string
  isWizardMode?: boolean
  callbackStatus?: StatusEnum
  isSubmitted?: boolean
}

type SynapseFormState = {
  formData: IFormData // form data that prepopulates the form
  currentStep: Step
  nextStep?: Step
  steps: Step[]
  previousStepIds: string[]
  hasValidated?: boolean //validation has been called and it passed
  doShowErrors: boolean //if we should show error summary at the top of the page
  doShowHelp: boolean
  modalContext?: { action: (...args: any[]) => void; arguments: any[] }
  hasUnsavedChanges: boolean
  isSubmitted?: boolean
  isLoadingSaved: boolean
}

export interface SummaryFormat {
  label: string
  value: string
}

export default class SynapseForm extends Component<
  SynapseFormProps,
  SynapseFormState
> {
  excludeWarningText = (
    <div>
      <p>
        This action will clear any entered data on this page and remove this
        form from your submission. You can include it again at anytime. Only
        this page will be affected.
      </p>
      <p>Are you sure you want to skip this step and clear any entered data?</p>
    </div>
  )
  excludeWarningHeader = 'Skip This Step?'
  unsavedDataWarning = `You might have some unsaved data. Are you sure you want to leave?`
  formRef: RefObject<Form<IFormData> | null> //ref to form for submission
  submitButtonRef: RefObject<HTMLButtonElement | null>
  formDivRef: any // ref to the div containing form (for scrolling on validation failure)
  navAction: NavActionEnum = NavActionEnum.NONE
  uiSchema: UiSchema
  nextStep: Step | undefined
  extraErrors: RJSFValidationError[] = []

  isNewForm = (formData: IFormData): boolean => {
    return (
      (Object.keys(formData).length == 1 &&
        Object.keys(formData)[0] === 'metadata') ||
      Object.keys(formData).length == 0
    )
  }

  getFirstStep = (steps: Step[], formData: IFormData): Step => {
    if (!this.isNewForm(formData)) {
      return steps.find(step => step.final === true) || steps[0]
    } else {
      return steps[0]
    }
  }

  constructor(props: SynapseFormProps) {
    super(props)

    //will modify the ui:help to render html vs text
    this.uiSchema = stringToElementForProp(
      cloneDeep(props.uiSchema),
      'ui:help',
    ) as UiSchema
    //create steps array from the navSchema
    const steps = props.navSchema.steps
      .map((step, i) => {
        return {
          ...step,
          inProgress: i === 0 ? true : false,
        }
      })
      .sort((a, b) => a.order - b.order)

    this.formRef = createRef()
    this.formDivRef = createRef()
    this.submitButtonRef = createRef()
    const currentStep = this.getFirstStep(steps, props.formData)
    this.state = {
      currentStep,
      steps,
      previousStepIds: [],
      formData: props.formData,
      doShowErrors: false,
      doShowHelp: true,
      hasUnsavedChanges: false,
      isSubmitted: props.isSubmitted,
      isLoadingSaved: !this.isNewForm(this.props.formData),
    }
  }

  onUnload = (ev: any) => {
    {
      if (this.state.hasUnsavedChanges) {
        ev.preventDefault()
        return (ev.returnValue = this.unsavedDataWarning)
      }
      return
    }
  }
  // Setup the `beforeunload` event listener
  setupBeforeUnloadListener = () => {
    window.addEventListener('beforeunload', this.onUnload)
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.onUnload)
  }

  componentDidUpdate(prevProps: SynapseFormProps) {
    const shouldUpdate = this.props.callbackStatus !== prevProps.callbackStatus
    const isSuccess =
      this.props.callbackStatus === StatusEnum.SAVE_SUCCESS ||
      this.props.callbackStatus === StatusEnum.SUBMIT_SUCCESS
    if (shouldUpdate && isSuccess) {
      this.setState({ hasUnsavedChanges: false })
      if (this.props.callbackStatus === StatusEnum.SUBMIT_SUCCESS) {
        this.setState({ isSubmitted: true })
        window.history.back()
      }
    }
  }

  _setIncludedPropInFormDataNonWizard = (
    currentState: SynapseFormState,
    schemaScreens: any,
  ): IFormData => {
    const result = {}
    const currentStateFormData = currentState.formData
    //if there is a top level 'included' property in schema - update the form.
    Object.keys(schemaScreens).forEach((key: string) => {
      if (get(schemaScreens[key], `properties.included`)) {
        set(result, `${key}.included`, true)
      }
    })
    return { ...currentStateFormData, ...result }
  }

  _setIncludedPropInFormDataWizard = (
    currentState: SynapseFormState,
  ): IFormData => {
    const firstStepId = currentState.currentStep.id
    const newStateData = cloneDeep(currentState.formData)
    set(newStateData, `${firstStepId}.included`, true)
    return newStateData
  }

  componentDidMount() {
    this.setupBeforeUnloadListener()
    const isNewForm = this.isNewForm(this.state.formData)
    if (!isNewForm) {
      //when loading saved form - validate to see the steps status
      this.triggerAction(NavActionEnum.VALIDATE)
    } else {
      // for validation of optional forms. Validation is enforced only if included property is set.
      this.setState(prevState => {
        const newFormData = this.props.isWizardMode
          ? this._setIncludedPropInFormDataWizard(prevState)
          : this._setIncludedPropInFormDataNonWizard(
              prevState,
              this.props.schema,
            )
        return {
          formData: newFormData,
        }
      })
    }
  }

  // get the schema slice for the current screen/step
  getSchema = ({ id, final }: Step): FormSchema => {
    if (final) {
      return this.props.schema
    }
    //only get schema for current step. Only the portion of entire form is shown

    const currentStepSlice = pick(this.props.schema, [
      'title',
      'type',
      `properties.${id}`,
    ])
    return currentStepSlice
  }

  // find the next step
  getNextStepId = async (
    currentStep: Step,
    formData: any,
    nextStepId?: string,
  ): Promise<string> => {
    if (nextStepId) {
      return nextStepId
    }
    if (!currentStep.rules || currentStep.rules.length === 0) {
      return currentStep.default
    }

    // if there are rules - run the engine and go to the first next step
    const engine = new Engine(currentStep.rules)

    try {
      const result: EngineResult = await engine.run(formData)
      if (result.events.length > 0) {
        return (result.events[0] as IRulesNavigationEvent).params.next
      } else {
        return currentStep.default
      }
    } catch (error) {
      return currentStep.default
    }
  }

  // called when going next, previous or a given step
  moveStep = async (
    formData: any,
    nextStepId: string | undefined,
    isError: boolean,
    previousStack = [...this.state.previousStepIds],
  ) => {
    const currentStep = this.state.currentStep
    let currentStepState: StepStateEnum
    //we don't wnat to display errors on the page - this will be done explicitly in validation
    if (this.formRef?.current) {
      this.formRef.current.setState({ errorSchema: {} })
    }
    //in wizard mode we can only move forwards (don't know next step yet) or backwards (do know next step)
    const isMoveForwardInWizardMode = this.props.isWizardMode && !nextStepId

    //previousStack is used for 'back' navigation is wizard mode.
    //only need to do it if moving forward i.e. nextStepId is undefined
    if (isMoveForwardInWizardMode) {
      previousStack.push(currentStep.id)
    }

    if (!isError) {
      currentStepState = StepStateEnum.COMPLETED

      if (!isMoveForwardInWizardMode && this.props.isWizardMode) {
        currentStepState = StepStateEnum.TODO
      }
    } else {
      currentStepState = StepStateEnum.ERROR
    }
    // determine next step
    nextStepId = await this.getNextStepId(currentStep, formData, nextStepId)

    const steps = this.state.steps.map(step => {
      if (step.id === currentStep.id) {
        return {
          ...step,
          ...{ state: currentStepState, inProgress: false },
        }
      } else if (step.id === nextStepId) {
        return { ...step, ...{ inProgress: true } }
      }
      return step
    })
    //if we are in wizard mode we want to make sure that we include the step we are about to go to
    if (isMoveForwardInWizardMode) {
      set(formData, `${nextStepId}.included`, true)
    }

    //at this point the form is valid and submitted and the data reflects the latest
    const nextStep = this.state.steps.find(step => step.id === nextStepId)!
    // clean up unused screens in wizard before getting to submit
    if (this.props.isWizardMode && nextStep.final) {
      Object.keys(formData).forEach(key => {
        if (formData[key].included === undefined) {
          formData[key] = {}
        }
      })
    }

    this.saveStepState(previousStack, steps, nextStep, formData)
  }

  //save the state of the current screen
  saveStepState = (
    previousStepIds: string[],
    steps: Step[],
    currentStep: Step,
    formData: any,
  ) => {
    this.setState({
      previousStepIds,
      steps,
      currentStep,
      formData,
      hasValidated: false,
      doShowErrors: false,
    })
  }

  //--------- fns to support navigation --------------------//
  goPrevious = async (formData: any, isError: boolean) => {
    let previousStepId: string | undefined
    const previousStack: string[] = [...this.state.previousStepIds]
    // in wizard mode we go to the previously visited screen.
    // In regular mode go to the screen with previous index
    if (this.props.isWizardMode) {
      previousStepId = previousStack.pop()
      if (!this.isSubmitScreen()) {
        //since we don't know if we'll get back to that step again - exclude it. We will include it again if we
        // get to it.
        set(formData, `${this.state.currentStep.id}.included`, undefined)
      }
    } else {
      const currentIndex = findIndex(this.state.steps, {
        id: this.state.currentStep.id,
      })
      if (currentIndex > 0) {
        previousStepId = this.state.steps[currentIndex - 1].id
      }
    }
    if (!isUndefined(previousStepId)) {
      return this.moveStep(formData, previousStepId, isError, previousStack)
    }
  }

  triggerAction = async (navAction: NavActionEnum) => {
    // we don't need to validate on save so bypassing submit
    if (navAction === NavActionEnum.SAVE) {
      return this.props.onSave(this.state.formData)
    } else {
      this.navAction = navAction
      // first run whatever custom validaton we have
      this.extraErrors = await this.runCustomValidation(
        this.state.formData,
        this.state.currentStep,
        this.state.steps,
      )
      if (this.submitButtonRef.current) {
        this.submitButtonRef.current.click()
      }
    }
  }

  // triggered when we click on the step name in left nav (doesn't happen in wizard mode)
  triggerStepChange = (step: Step) => {
    this.nextStep = step
    this.triggerAction(NavActionEnum.GO_TO_STEP)
  }

  onError = (args: any) => {
    this.setState({
      doShowErrors: true,
      hasValidated: false,
    })
    if (this.navAction === NavActionEnum.VALIDATE) {
      const modifiedSteps = this.setStepStatusForFailedValidation(
        args.props,
        this.state.steps,
        !!this.props.isWizardMode,
        this.state.formData,
        this.getSchema(this.state.currentStep).properties ||
          this.getSchema(this.state.currentStep),
      )
      this.setState({ steps: modifiedSteps })
      this.formDivRef.current.scrollTo(0, 0)
      if (this.state.isLoadingSaved) {
        this.moveStep(this.state.formData, modifiedSteps[0].id, true)
        this.setState({ isLoadingSaved: false })
      }
    }
  }

  setStepStatusForFailedValidation = (
    errors: RJSFValidationError[],
    steps: Step[],
    isWizard: boolean,
    formData: IFormData,
    currentSchemaProperties: any,
  ): Step[] => {
    //error property is in the format: step.somevalue.etc  .welcome.submission_name example
    //find all the steps where there is an error
    const stepsWithError = errors.map(
      error => trimStart(error.property, '.').split('.')[0],
    )
    //find all steps in current schema
    const stepsInCurrentSchema = Object.keys(currentSchemaProperties)
    const updatedSteps: Step[] = steps.map(step => {
      //if there is an error in this step
      if (stepsWithError.indexOf(step.id) > -1) {
        return {
          ...step,
          state: StepStateEnum.ERROR,
        }
        //if no error and included in schema
      } else if (stepsInCurrentSchema.indexOf(step.id) > -1) {
        let state = StepStateEnum.COMPLETED
        //if we are in wizard and possibly have not visited this step
        if (isWizard && !get(formData[step.id], 'included')) {
          state = step.state
        }

        return {
          ...step,
          state: state,
        }
      } else {
        return step
      }
    })
    return updatedSteps
  }

  //we are constantly saving form data. Needed to overwrite on-error behavior
  handleOnChange({ formData }: any) {
    //this is just for form updates. submit screen goes different route
    if (!this.isSubmitScreen() && !this.state.currentStep.excluded) {
      const hasUnsavedChanges = !isEqual(this.state.formData, formData)
      this.setState({ formData, hasUnsavedChanges })
    }
  }

  performAction(navAction: NavActionEnum, hasError: boolean) {
    const formData = this.state.formData

    switch (navAction) {
      case NavActionEnum.NEXT: {
        return this.moveStep(formData, undefined, hasError)
      }
      case NavActionEnum.PREVIOUS: {
        return this.goPrevious(formData, hasError)
      }
      case NavActionEnum.GO_TO_STEP: {
        //nextStep is returned when clicked on the Steps left nav
        if (!this.nextStep) {
          return
        }
        return this.moveStep(formData, this.nextStep.id, hasError)
      }

      case NavActionEnum.SUBMIT: {
        this.props.onSubmit(formData)
        return
      }
      case NavActionEnum.VALIDATE: {
        //we get here is we clicked validate and the data is valid.
        // if it's not valid we handle it in onError fn
        const steps = this.setStepStatusForFailedValidation(
          [],
          this.state.steps,
          !!this.props.isWizardMode,
          this.state.formData,
          this.getSchema(this.state.currentStep).properties ||
            this.getSchema(this.state.currentStep),
        )
        const currentStep = {
          ...this.state.currentStep,
          state: StepStateEnum.COMPLETED,
        }

        this.setState({ hasValidated: true, currentStep, steps })
        if (this.state.isLoadingSaved) {
          this.moveStep(this.state.formData, steps[0].id, false)
          this.setState({ isLoadingSaved: false })
        }
        return
      }
      default:
        return
    }
  }

  //we need to route things through submit - otherwise validation does not kick in
  // it triggers internal library validation and calls the performAction with the params for action
  onSubmit: () => any = () => {
    this.performAction(
      this.navAction,
      this.state.currentStep.state === StepStateEnum.ERROR,
    )
  }

  isSubmitScreen = (): boolean => {
    return this.state.currentStep.final === true && !this.state.isLoadingSaved
  }

  showExcludeStateWarningDialog = (
    stepId: string,
    isUpdateFlattenedData: boolean = false,
  ): void => {
    this.setState({
      modalContext: {
        action: this.toggleExcludeStep,
        arguments: [stepId, true, isUpdateFlattenedData],
      },
    })
  }

  toggleExcludeStep = (stepId: string, isExclude: boolean): void => {
    this.setState((prevState, props) => {
      const steps = prevState.steps.map(stp => {
        if (stp.id === stepId) {
          return { ...stp, ...{ excluded: isExclude } }
        }
        return stp
      })

      const formDataUpdated = cloneDeep(prevState.formData)
      const currentStep = cloneDeep(prevState.currentStep)
      //we need this because you can exclude on the ifnal screen so the currentStep.id
      //is not always the one we need to exclude
      if (currentStep.id === stepId) {
        currentStep.excluded = isExclude
      }
      //if exluding - blow away the data for the step
      if (isExclude) {
        formDataUpdated[stepId] = {}
        //set(formDataUpdated, `${stepId}.included`, false);
      } else {
        set(formDataUpdated, `${stepId}.included`, true)
      }
      return {
        steps,
        formData: formDataUpdated,
        modalContext: undefined,
        currentStep,
      }
    })
  }

  private renderNotification = (status?: StatusEnum) => {
    if (status === StatusEnum.SAVE_SUCCESS) {
      return <div className="notification-area"> Successfully saved </div>
    }
    if (status === StatusEnum.SUBMIT_SUCCESS) {
      return <div className="notification-area"> Successfully submitted </div>
    }
    if (status === StatusEnum.PROGRESS) {
      return <div className="notification-area"> working on it ....</div>
    }
    return <></>
  }

  // displays the text for screens that don't have any form data
  private renderTextForStaticScreen = () => {
    if (!this.state.currentStep.copy) {
      return <></>
    }
    const copy = this.state.currentStep.copy
    return (
      <div
        className="static-screen"
        dangerouslySetInnerHTML={{ __html: copy }}
      />
    )
  }

  //displays subheader for forms that can be excluded
  renderOptionalFormSubheader = (isWizard: boolean = false) => {
    if (isWizard) {
      return <></>
    }
    const currentStep = this.state.currentStep

    if (currentStep.excluded === true) {
      return (
        <div className="step-exclude-directions">
          This form is currently not included in the submission.
          <button
            className="btn btn-link"
            onClick={() => this.toggleExcludeStep(currentStep.id, false)}
          >
            Include
          </button>
        </div>
      )
    } else if (currentStep.excluded === false) {
      return (
        <div className="step-exclude-directions">
          This form is currently included in the submission. Enter some data if
          you have it, or click &quot;Skip&quot;.
          <button
            className="btn btn-link"
            onClick={() =>
              this.showExcludeStateWarningDialog(this.state.currentStep.id)
            }
          >
            Skip
          </button>
        </div>
      )
    }
    return <></>
  }

  renderHelpToggle = (
    currentStep: Step,
    showHelp: boolean,
    callbackFn: () => void,
  ) => {
    if (currentStep.static || currentStep.final) {
      return <></>
    }
    return (
      <>
        <label className="pull-right toggle-help-label">
          <span>Hide help</span>
          <Switch
            checkedIcon={false}
            uncheckedIcon={false}
            height={20}
            width={45}
            className="toggle-help"
            offColor="#ccc"
            onChange={() => callbackFn()}
            checked={showHelp}
          />
          <span>Show help</span>
        </label>
      </>
    )
  }

  runCustomValidation = async (
    formData: IFormData,
    currentStep: Step,
    allSteps: Step[],
  ): Promise<RJSFValidationError[]> => {
    const errors: RJSFValidationError[] = []

    //default - running on current step
    let rules = currentStep.validationRules || []
    let data = {
      [currentStep.id]: formData[currentStep.id],
    }

    // for final step -- concatenate all rules and run on all data
    if (currentStep.final) {
      rules = allSteps.reduce((acc: any, value: Step) => {
        return value.validationRules && value.validationRules.length > 0
          ? acc.concat(value.validationRules)
          : acc
      }, [])
      data = cloneDeep(formData)
    }

    if (rules.length === 0) {
      return []
    }

    //this is a workaround for inability to define a rule to run on all members of the data array
    // we define the generic rule with path e.g."path": ".experiments[*].dose_range.dose_range_min",
    const allRules: any[] = []
    rules.forEach(rule => {
      //take a rule
      const paramProp = rule.event.params.property
      // if it's just a normal rule - add it
      if (paramProp.indexOf('[*]') === -1) {
        allRules.push(rule)
      } else {
        const path = paramProp.split('[*]')[0].substring(1)
        const data = get(formData, path)
        // generate a rule for each item in the data array by substituting [*] w/ appropriate index
        if (Array.isArray(data) && typeof data !== 'string') {
          for (let i = 0; i < data.length; i++) {
            const newRule = JSON.parse(
              JSON.stringify(rule).replace(/\[\*\]/g, `[${i}]`),
            )
            allRules.push(newRule)
          }
        } else {
          allRules.push(rule)
        }
      }
    })
    // no we run  all the rules through the engine
    const engine = new Engine(allRules, {
      allowUndefinedFacts: true,
    })

    try {
      const result: EngineResult = await engine.run(data)
      const validationEvents = result.events as IRulesValidationEvent[]
      validationEvents.forEach(event => {
        const err: RJSFValidationError = {
          ...event.params,
          ...{
            params: {},
            stack: `${event.params.property} ${event.params.message}`,
          },
        }
        errors.push(err)
      })
    } catch (error) {
      console.log(error)
    }

    return errors
  }

  transformErrors = (errors: RJSFValidationError[]): RJSFValidationError[] => {
    // if we are not in wizard mode and not trying to submit or validate we just want to skip
    // over the errors and just set the step status
    // https://github.com/rjsf-team/react-jsonschema-form/issues/1263
    this.extraErrors.forEach(extraError => {
      if (!errors.find(error => error.stack === extraError.stack)) {
        errors.push(extraError)
      }
    })

    if (
      this.navAction !== NavActionEnum.SUBMIT &&
      this.navAction !== NavActionEnum.VALIDATE &&
      (!this.props.isWizardMode || this.state.currentStep.final)
    ) {
      const currentStep = {
        ...this.state.currentStep,
      }
      if (errors.length > 0) {
        currentStep.state = StepStateEnum.ERROR
      } else {
        currentStep.state = StepStateEnum.COMPLETED
      }

      this.setState({ currentStep })

      return []
    }

    // there is an odd behavior in the lib that in cases when we have additional fields depending on enum
    // value if it's required and not entered we get 3 error: enum, required, and oneOf
    // so if there is an error Oneof on a parent - ignore it and enum on a child. and just output 'required'
    // if there is an enum error and there is required with the same prefix remove it

    const reqErrors = errors.filter(error => error.name === 'required')
    reqErrors.forEach(error => {
      if (error.property) {
        const parentPath = error.property.substring(
          0,
          error.property.lastIndexOf('.'),
        )
        remove(errors, (error: RJSFValidationError) => {
          return (
            (error.property || '').indexOf(parentPath) > -1 &&
            (error.name === 'enum' || error.name === 'oneOf')
          )
        })
      }
    })

    return errors.map(error => {
      if (error.message) {
        error.message = error.message.replace('property', 'field')
      }
      return error
    })
  }

  renderErrorListTemplate = (props: ErrorListProps) => {
    const { errors } = props
    const currentLis = errors
      .map((error, i) => {
        return renderTransformedErrorObject(
          this.state.steps,
          error,
          this.uiSchema,
          i,
          this.props.schema,
        )
      })
      .sort((a, b) => a.order - b.order)
      .map(li => li.element)

    return (
      <div className="form-error-summary">
        <ul className="error-detail">{currentLis}</ul>
      </div>
    )
  }

  render() {
    return (
      <div className="outter-wrap">
        <Blocker
          shouldBlock={({ currentLocation, nextLocation }) =>
            this.state.hasUnsavedChanges &&
            currentLocation.pathname !== nextLocation.pathname
          }
        >
          {blocker => (
            <ConfirmationDialog
              open={blocker.state == 'blocked'}
              title="Unsaved Changes"
              content={this.unsavedDataWarning}
              onConfirm={() => {
                if (blocker.proceed) {
                  blocker.proceed()
                }
              }}
              onCancel={() => {
                if (blocker.reset) {
                  blocker.reset()
                }
              }}
            />
          )}
        </Blocker>
        <Header
          isSubmitted={this.state.isSubmitted}
          bodyText={this.state.currentStep.description}
          title={this.props.formTitle}
        ></Header>
        <div>
          <div className="inner-wrap">
            <StepsSideNav
              stepList={this.state.steps}
              isWizardMode={this.props.isWizardMode}
              onStepChange={this.triggerStepChange}
            ></StepsSideNav>
            {this.state.isLoadingSaved && (
              <div className="text-center">
                <span className={'spinner'} />
              </div>
            )}
            <div className="form-wrap">
              <div className="form-title">{this.state.currentStep.title}</div>
              {this.renderNotification(this.props.callbackStatus)}
              <div
                className={`right-top-actions ${
                  this.state.isSubmitted ? 'hide' : ''
                }`}
              >
                {!this.state.currentStep.static && (
                  <button
                    type="button"
                    className="btn btn-action save pull-right"
                    onClick={() => {
                      this.triggerAction(NavActionEnum.VALIDATE)
                    }}
                  >
                    VALIDATE
                  </button>
                )}
                {this.renderHelpToggle(
                  this.state.currentStep,
                  this.state.doShowHelp,
                  () =>
                    this.setState({
                      doShowHelp: !this.state.doShowHelp,
                    }),
                )}
                {this.isSubmitScreen() && (
                  <button
                    type="button"
                    className="btn btn-action save pull-right"
                    disabled={this.state.isSubmitted}
                    onClick={() => {
                      this.triggerAction(NavActionEnum.SUBMIT)
                    }}
                  >
                    SUBMIT
                  </button>
                )}
              </div>
              {this.renderOptionalFormSubheader(this.props.isWizardMode)}
              <div
                className={
                  this.isSubmitScreen() || this.state.currentStep.static
                    ? 'hide-form-only'
                    : 'wrap'
                }
              >
                {this.state.hasValidated && (
                  <div className="notification-area">
                    Great! All required data on this form has been entered.
                  </div>
                )}
                <div
                  ref={this.formDivRef}
                  className={`scroll-area ${
                    this.state.currentStep.excluded ? 'disabled' : ' '
                  } `}
                >
                  <Form
                    validator={validator}
                    noHtml5Validate
                    className={
                      this.state.doShowHelp
                        ? 'submissionInputForm'
                        : 'submissionInputForm no-help'
                    }
                    liveValidate={false}
                    formData={this.state.formData}
                    schema={this.getSchema(this.state.currentStep)}
                    uiSchema={this.uiSchema}
                    onSubmit={this.onSubmit}
                    onChange={args => this.handleOnChange(args)}
                    onError={args =>
                      this.onError({
                        props: args,
                        form: this.formRef,
                      })
                    }
                    showErrorList={
                      this.state.doShowErrors || this.props.isWizardMode
                        ? 'top'
                        : false
                    }
                    templates={{
                      ErrorListTemplate: this.renderErrorListTemplate,
                    }}
                    transformErrors={this.transformErrors}
                    ref={this.formRef}
                    disabled={
                      this.state.currentStep.excluded || this.state.isSubmitted
                    }
                    widgets={{
                      CheckboxWidget: SynapseFormCheckboxWidget,
                      CheckboxesWidget: SynapseFormCheckboxesWidget,
                      RadioWidget: SynapseFormRadioWidget,
                    }}
                  >
                    <div style={{ display: 'none' }}>
                      <button type="submit" ref={this.submitButtonRef}></button>
                    </div>
                  </Form>
                  {this.renderTextForStaticScreen()}
                  {!this.props.isWizardMode && (
                    <NextStepLink
                      steps={this.state.steps}
                      nextStepId={this.state.currentStep.default}
                      onNavAction={(step: Step) => this.triggerStepChange(step)}
                    ></NextStepLink>
                  )}
                </div>
              </div>

              {this.isSubmitScreen() && (
                <SummaryTable
                  formData={this.state.formData}
                  steps={this.state.steps}
                  callbackFn={(screenId: string) =>
                    this.showExcludeStateWarningDialog(screenId, true)
                  }
                  uiSchema={this.props.uiSchema}
                  schema={this.props.schema}
                ></SummaryTable>
              )}

              <NavButtons
                currentStep={this.state.currentStep}
                steps={this.state.steps}
                previousStepIds={this.state.previousStepIds}
                isFormSubmitted={this.state.isSubmitted}
                onNavAction={(e: NavActionEnum) => {
                  this.triggerAction(e)
                }}
              ></NavButtons>
            </div>
          </div>
        </div>
        {this.state.modalContext && (
          <WarningDialog
            open={true}
            title={this.excludeWarningHeader}
            content={this.excludeWarningText}
            className={`theme-${this.props.formClass}`}
            onConfirmCallbackArgs={this.state.modalContext.arguments}
            onCancel={() => this.setState({ modalContext: undefined })}
            onConfirm={(stepId: string, isExclude: boolean) =>
              this.toggleExcludeStep(stepId, isExclude)
            }
          />
        )}
        <DataDebug formData={this.state.formData} hidden={true}></DataDebug>
      </div>
    )
  }
}

// takes in a single validation error and  and displays it in more readable manner
// used by renderErrorListTemplate
function renderTransformedErrorObject(
  steps: Step[],
  error: RJSFValidationError,
  uiSchema: UiSchema,
  i: number,
  schema: any,
): { order: number; element: ReactNode } {
  const propPath = trimStart(error.property, '.')
  const propArr = propPath.split('.')

  // some things require labels in schema (e.g. checkboxes) so this is preferred
  const labelFromSchema = `${propArr.join('.properties.')}.title`
  //can be overriden by label in UI
  const labelFromUi = `${propPath}.ui:title`
  //for array fields we need to change the property e.g.
  //  ld50.experiments[0].species_other should look like 'ld50.experiments.items.species_other'
  const arrayLabelFromSchema = labelFromSchema.replace(/\[.*?\]/, '.items')
  const arrayLabelFromUI = labelFromUi.replace(/\[.*?\]/, '.items')
  const indexMatch = labelFromSchema.match(/\[.*?\]/)

  let index = first(indexMatch)

  if (index) {
    index = index.substring(1, index.length - 1)
    index = !isNaN(parseInt(index)) ? ` [${parseInt(index) + 1}]` : ''
  }

  const label =
    get(uiSchema, labelFromUi) ||
    get(schema.properties, labelFromSchema) ||
    get(uiSchema, arrayLabelFromUI) ||
    get(schema.properties, arrayLabelFromSchema) ||
    error.property

  const screen = find(steps, { id: propArr[0] }) || {
    title: propArr[0],
    order: 0,
  }
  const element = (
    <li key={i} className="">
      <span>
        <strong>
          {screen.title}
          {index}:
        </strong>
        {label}&nbsp; {error.message}
      </span>
    </li>
  )
  return { order: screen.order, element }
}

//recursively sets property value to dangerouslySetInnerHTML of that value
function stringToElementForProp(srcObject: any, key: string): object {
  keys(srcObject).some(k => {
    if (k === key) {
      const value = srcObject[k]
      srcObject[k] = <span dangerouslySetInnerHTML={{ __html: value }}></span>

      return srcObject
    }
    if (srcObject[k] && typeof srcObject[k] === 'object') {
      stringToElementForProp(srcObject[k], key)
    }
  })
  return srcObject
}
