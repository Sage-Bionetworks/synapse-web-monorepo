import IconSvg from '../IconSvg/IconSvg'
import { Step, NavActionEnum } from './types'
export interface NavButtonsProps {
  isWizardMode?: boolean
  previousStepIds: string[]
  onNavAction: (action: NavActionEnum) => void
  steps: Step[]
  currentStep: Step
  isFormSubmitted?: boolean
}

export interface NextStepLinkProps {
  onNavAction: (step: Step) => void
  steps: Step[]
  nextStepId: string | undefined
}

export function NavButtons(props: NavButtonsProps) {
  // in wizard mode we build an array of the previous steps. In regular mode back goes to
  // a previous order step
  const canGoBack = (props: NavButtonsProps): boolean => {
    if (props.isWizardMode) {
      return props.previousStepIds && props.previousStepIds.length > 0
    } else {
      return props.steps.findIndex(step => step.id === props.currentStep.id) > 0
    }
  }

  const previousButton = canGoBack(props) ? (
    <button
      type="button"
      onClick={e => props.onNavAction(NavActionEnum.PREVIOUS)}
      className="btn btn-link nav-link prev"
    >
      <IconSvg icon="chevronLeft" />
    </button>
  ) : (
    <></>
  )

  const nextButton = !props.currentStep.final ? (
    <button
      type="button"
      onClick={e => props.onNavAction(NavActionEnum.NEXT)}
      className="btn btn-link nav-link next"
    >
      <IconSvg icon="chevronRight" />
    </button>
  ) : (
    <></>
  )

  const saveButton = (
    <button
      type="button"
      className="btn btn-action save"
      disabled={props.isFormSubmitted}
      onClick={e => props.onNavAction(NavActionEnum.SAVE)}
    >
      SAVE
    </button>
  )

  return (
    <div>
      <hr></hr>
      <div className="buttonWrapper pull-right">
        {previousButton} {nextButton} {saveButton}
      </div>
    </div>
  )
}

export function NextStepLink(props: NextStepLinkProps) {
  const nextStep = props.steps.find(step => step.id === props.nextStepId)
  if (typeof nextStep === 'undefined') {
    return <></>
  }
  return (
    <span className="nav-link">
      <a onClick={e => props.onNavAction(nextStep)}>{nextStep.title}</a>
      <IconSvg icon="chevronRight" />
    </span>
  )
}
