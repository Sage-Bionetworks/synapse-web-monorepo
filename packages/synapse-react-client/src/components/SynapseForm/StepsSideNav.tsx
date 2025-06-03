import IconSvg, { IconName } from '../IconSvg/IconSvg'
import { Step, StepStateEnum } from './types'

export type StepsSideNavProps = {
  stepList: Step[]
  onStepChange: (step: Step) => void
  isWizardMode?: boolean
}

export default function StepsSideNav(props: StepsSideNavProps) {
  const nonChildSteps = props.stepList.filter(step => step.child !== true)

  const getIcon = (
    state: StepStateEnum,
    isExcluded: boolean | undefined,
    isStatic: boolean | undefined,
    isSubmit: boolean | undefined,
  ): { iconDef: IconName } => {
    let iconDef: IconName = 'circle'
    if (isStatic || isSubmit) {
      return {
        iconDef,
      }
    }

    if (isExcluded) {
      iconDef = 'block'
    } else if (state === StepStateEnum.COMPLETED) {
      iconDef = 'checkCircle'
    } else if (state === StepStateEnum.ERROR) {
      iconDef = 'errorOutlined'
    }
    return { iconDef }
  }

  const getItemClass = (
    isInProgress: boolean,
    isStatic: boolean = false,
  ): string => {
    let liClassName = 'item'
    if (isInProgress) {
      liClassName = `${liClassName} pointed `
    }
    if (isStatic) {
      liClassName = `${liClassName} static`
    }
    return liClassName
  }

  const getListItem = (
    step: Step,
    isWizard: boolean,
    isRenderChild = false,
  ) => {
    if (!step || (step.child && !isRenderChild)) {
      return <></>
    }
    const renderStepName = (
      step: Step,
      isWizard: boolean,
      callback: (step: Step) => void,
    ) => {
      if (!step.inProgress && (!isWizard || !!step.final)) {
        return (
          <button className="btn btn-link" onClick={() => callback(step)}>
            {step.title}
          </button>
        )
      } else {
        return <span>{step.title}</span>
      }
    }
    const icon = getIcon(step.state, step.excluded, step.static, step.final)
    const itemClass = getItemClass(step.inProgress, step.static)

    return (
      <div className={itemClass}>
        <IconSvg icon={icon.iconDef} />
        {renderStepName(step, isWizard, props.onStepChange)}
      </div>
    )
  }

  return (
    <div className="SRC-menuLayout json-forms-menu" style={{ flex: '1' }}>
      <ul>
        {nonChildSteps.map((step: Step, i: number) => {
          return (
            <li className="item-wrap" key={`${i}-${step.id}`}>
              {getListItem(step, !!props.isWizardMode)}
              {step.children && step.children.length > 0 && (
                <div className="subMenu">
                  <ul>
                    {step.children &&
                      step.children.map((stepChildId: string, j: number) => {
                        const childStep = props.stepList.find(
                          step => step.id === stepChildId,
                        )
                        return typeof childStep === 'undefined' ? (
                          <></>
                        ) : (
                          <li className="item-wrap" key={`${j}-${stepChildId}`}>
                            {getListItem(childStep, !!props.isWizardMode, true)}
                          </li>
                        )
                      })}
                  </ul>
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
