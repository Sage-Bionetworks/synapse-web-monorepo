import { steps } from '@/mocks/mock_drug_tool_data'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as _ from 'lodash-es'
import {
  NavButtons,
  NavButtonsProps,
  NextStepLink,
  NextStepLinkProps,
} from './NavButtons'
import { NavActionEnum, Step } from './types'

const stepsArray: Step[] = _.cloneDeep(steps)

const renderNavButtonsComponent = (props: NavButtonsProps) => {
  return render(<NavButtons {...props} />)
}
const renderNextStepLinkComponent = (props: NextStepLinkProps) => {
  return render(<NextStepLink {...props} />)
}

const mockOnNavActionFn = vi.fn(() => 'ok')

const mock = {
  onNavActionFn: mockOnNavActionFn,
}

describe('NavButtons tests', () => {
  const props: NavButtonsProps = {
    isWizardMode: false,
    previousStepIds: ['ld50', 'acute_dosing'],
    onNavAction: mock.onNavActionFn,
    steps: stepsArray,
    currentStep: { ...stepsArray[1] },
  }

  describe('previous button', () => {
    test('if wizard, display if previousStepIds array is not empty', () => {
      const _props = { ...props, ...{ isWizardMode: true } }
      renderNavButtonsComponent(_props)
      const buttons = screen.getAllByRole('button')
      expect(
        buttons.filter(button => button.classList.contains('prev')),
      ).toHaveLength(1)
    })

    test('if wizard, do not display if previousStepIds array is empty', () => {
      const _props = { ...props, ...{ isWizardMode: true } }
      _props.previousStepIds = []
      renderNavButtonsComponent(_props)
      const buttons = screen.getAllByRole('button')
      expect(
        buttons.filter(button => button.classList.contains('prev')),
      ).toHaveLength(0)
    })

    test('if not wizard, display if not the first step', () => {
      renderNavButtonsComponent(props)
      const buttons = screen.getAllByRole('button')
      expect(
        buttons.filter(button => button.classList.contains('prev')),
      ).toHaveLength(1)
    })

    test('if not wizard, do not display if on first step', () => {
      const _props = { ...props, ...{ currentStep: stepsArray[0] } }
      renderNavButtonsComponent(_props)
      const buttons = screen.getAllByRole('button')
      expect(
        buttons.filter(button => button.classList.contains('prev')),
      ).toHaveLength(0)
    })

    it('should callback with correct params', async () => {
      renderNavButtonsComponent(props)
      const buttons = screen.getAllByRole('button')
      const prevButton = buttons.find(button =>
        button.classList.contains('prev'),
      )
      await userEvent.click(prevButton!)
      expect(mockOnNavActionFn).toHaveBeenCalledWith(NavActionEnum.PREVIOUS)
    })
  })

  describe('next and save buttons', () => {
    test('display next if step is not final and display save on all steps', () => {
      renderNavButtonsComponent(props)
      const buttons = screen.getAllByRole('button')
      expect(
        buttons.filter(button => button.classList.contains('next')),
      ).toHaveLength(1)
      screen.getByRole('button', { name: 'SAVE' })
    })

    test('do not display next if step is final and display save on all steps', () => {
      const _props = { ...props, ...{ currentStep: stepsArray[2] } }
      expect(_props.currentStep.final).toBe(true)
      renderNavButtonsComponent(_props)
      const buttons = screen.getAllByRole('button')
      expect(
        buttons.filter(button => button.classList.contains('next')),
      ).toHaveLength(0)
      screen.getByRole('button', { name: 'SAVE' })
    })

    test('should callback with correct params', async () => {
      renderNavButtonsComponent(props)
      const buttons = screen.getAllByRole('button')
      const nextButton = buttons.find(button =>
        button.classList.contains('next'),
      )
      await userEvent.click(nextButton!)
      expect(mockOnNavActionFn).toHaveBeenCalledWith(NavActionEnum.NEXT)
      const saveButton = screen.getByRole('button', { name: 'SAVE' })
      await userEvent.click(saveButton)
      expect(mockOnNavActionFn).toHaveBeenCalledWith(NavActionEnum.SAVE)
    })
  })
})

describe('NextLink tests', () => {
  const props: NextStepLinkProps = {
    onNavAction: mock.onNavActionFn,
    steps: stepsArray,
    nextStepId: 'acute_dosing',
  }

  test('should display step name correctly', () => {
    const { container } = renderNextStepLinkComponent(props)
    const navLink = container.querySelector<HTMLElement>('span.nav-link')!
    within(navLink).getByText('Acute Dosing')
  })

  test('should call calback function with appropriate params', async () => {
    const { container } = renderNextStepLinkComponent(props)
    const link = container.querySelector('span.nav-link a')!

    await userEvent.click(link)
    expect(mockOnNavActionFn).toHaveBeenCalledWith(stepsArray[2])
  })
})
