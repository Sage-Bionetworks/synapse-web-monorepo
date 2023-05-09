import * as React from 'react'

import {
  StepperDialog,
  StepperDialogProps,
} from '../../../../src/lib/containers/StepperDialog'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const renderComponent = (props: StepperDialogProps) => {
  return render(<StepperDialog {...props} />)
}

describe('StepperDialog', () => {
  const mock = {
    cancelFn: jest.fn(() => Promise.resolve()),
    confirmFn: jest.fn(() => Promise.resolve()),
  }

  const createProps = (overrides?: {
    [key: string]: StepperDialogProps
  }): StepperDialogProps => ({
    backButtonText: 'Back',
    cancelButtonText: 'Cancel',
    confirmButtonText: 'Accept Terms',
    nextStepButtonText: 'Next',
    errorMessage: 'Error confirming terms.',
    onCancel: mock.cancelFn,
    onConfirm: mock.confirmFn,
    open: true,
    steps: {
      0: {
        title: 'Stepper Dialog (Step 1)',
        content:
          'Maecenas quam nunc, sagittis non condimentum at, rutrum sit amet eros. Fusce rutrum, lectus in blandit sagittis, mi tortor ullamcorper mi, vitae vestibulum libero quam a nisi. In eu mauris et neque sodales porta eu eget dui. Nunc eu quam sit amet justo elementum mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed laoreet metus nulla, in gravida urna rhoncus in. Proin laoreet semper tortor ac posuere. Cras non leo at ipsum fringilla ullamcorper. Etiam velit est, tempor id lobortis eu, lacinia id sem. Nam ornare mattis dui a porta. Aliquam a ullamcorper velit, et hendrerit eros. Etiam accumsan porta neque in viverra.',
        children: {
          0: {
            title: 'Stepper Dialog (Step 1.1)',
            content: 'Step 1.1 content',
          },
        },
      },
      1: {
        title: 'Stepper Dialog (Step 2)',
        content:
          'Proin laoreet semper tortor ac posuere. Cras non leo at ipsum fringilla ullamcorper. Etiam velit est, tempor id lobortis eu, lacinia id sem. Nam ornare mattis dui a porta. Aliquam a ullamcorper velit, et hendrerit eros. Etiam accumsan porta neque in viverra. Proin eleifend, eros in tristique hendrerit, nisi purus cursus sapien, id ultrices nunc tellus a ipsum. Donec et fringilla neque. Aenean consequat purus quis lectus maximus fermentum.',
        children: undefined,
      },
      2: {
        title: 'Stepper Dialog (Step 3)',
        content:
          'Maecenas quam nunc, sagittis non condimentum at, rutrum sit amet eros. Fusce rutrum, lectus in blandit sagittis, mi tortor ullamcorper mi, vitae vestibulum libero quam a nisi. In eu mauris et neque sodales porta eu eget dui. Nunc eu quam sit amet justo elementum mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed laoreet metus nulla, in gravida urna rhoncus in. Proin laoreet semper tortor ac posuere. Cras non leo at ipsum fringilla ullamcorper. Etiam velit est, tempor id lobortis eu, lacinia id sem. Nam ornare mattis dui a porta. Aliquam a ullamcorper velit, et hendrerit eros. Etiam accumsan porta neque in viverra.',
      },
    },
    ...overrides,
  })

  const advanceNextSteps = async (nextButtonText, steps: number) => {
    for (let i = 0; i < steps; i++) {
      await userEvent.click(screen.getByText(nextButtonText))
    }
  }

  test('should display the modal with correct title (first step)', () => {
    const props = createProps()
    renderComponent(props)

    const dialog = screen.getByRole('dialog')
    within(dialog.querySelector('.MuiStack-root')).getByText(
      props.steps[0].title,
    )
  })

  test('should display the modal with correct content (first step)', () => {
    const props = createProps()
    renderComponent(props)

    const dialog = screen
      .getByRole('dialog')
      .querySelector('.MuiDialogContent-root')
    within(dialog.querySelector('.MuiBox-root')).getByText(
      props.steps[0].content,
    )
  })

  test('should display the modal with correct buttons (first step)', () => {
    const props = createProps()
    renderComponent(props)

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(3)

    const [closeButton, cancelButton, nextButton] = buttons
    const closeIconSvg = screen.getByTestId('CloseIcon')

    expect(closeButton).toContainElement(closeIconSvg)
    expect(cancelButton).toHaveTextContent('Cancel')
    expect(nextButton).toHaveTextContent('Next')
  })

  test('should display the modal with correct title (middle steps)', async () => {
    const props = createProps()
    renderComponent(props)

    // mock user clicking the next button to increment step
    await advanceNextSteps(props.nextStepButtonText, 1)

    const dialog = screen.getByRole('dialog')
    within(dialog.querySelector('.MuiStack-root')).getByText(
      props.steps[1].title,
    )
  })

  test('should display the modal with correct content (middle steps)', async () => {
    const props = createProps()
    renderComponent(props)

    // mock user clicking the next button to increment step
    await advanceNextSteps(props.nextStepButtonText, 1)

    const dialog = screen
      .getByRole('dialog')
      .querySelector('.MuiDialogContent-root')
    within(dialog.querySelector('.MuiBox-root')).getByText(
      props.steps[1].content,
    )
  })

  test('should display the modal with correct buttons (middle steps)', async () => {
    const props = createProps()
    renderComponent(props)

    // mock user clicking the next button to increment step
    await advanceNextSteps(props.nextStepButtonText, 1)

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(4)

    const [closeButton, cancelButton, backButton, nextButton] = buttons
    const closeIconSvg = screen.getByTestId('CloseIcon')

    expect(closeButton).toContainElement(closeIconSvg)
    expect(cancelButton).toHaveTextContent(props.cancelButtonText)
    expect(backButton).toHaveTextContent(props.backButtonText)
    expect(nextButton).toHaveTextContent(props.nextStepButtonText)
  })

  test('should display the modal with correct title (last step)', async () => {
    const props = createProps()
    renderComponent(props)

    // mock user clicking the next button to increment step
    await advanceNextSteps(props.nextStepButtonText, 2)

    const dialog = screen.getByRole('dialog')
    within(dialog.querySelector('.MuiStack-root')).getByText(
      props.steps[2].title,
    )
  })

  test('should display the modal with correct content (last step)', async () => {
    const props = createProps()
    renderComponent(props)

    // mock user clicking the next button twice to increment steps
    await advanceNextSteps(props.nextStepButtonText, 2)

    const dialog = screen.getByRole('dialog')
    within(dialog.querySelector('.MuiStack-root')).getByText(
      props.steps[2].title,
    )
  })

  test('should display the modal with correct buttons (last step)', async () => {
    const props = createProps()
    renderComponent(props)

    // mock user clicking the next button to increment step
    await advanceNextSteps(props.nextStepButtonText, 2)

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(3)

    const [closeButton, cancelButton, confirmButton] = buttons
    const closeIconSvg = screen.getByTestId('CloseIcon')

    expect(closeButton).toContainElement(closeIconSvg)
    expect(cancelButton).toHaveTextContent(props.cancelButtonText)
    expect(confirmButton).toHaveTextContent(props.confirmButtonText)
  })

  test('should call onCancel when "x" close button is clicked', async () => {
    const props = createProps()
    renderComponent(props)

    await userEvent.click(screen.getByTestId('CloseIcon'))
    expect(props.onCancel).toHaveBeenCalled()
  })

  test('should call onCancel when cancel button is clicked', async () => {
    const props = createProps()
    renderComponent(props)

    await userEvent.click(screen.getByText(props.cancelButtonText))
    expect(props.onCancel).toHaveBeenCalled()
  })

  test('should call a step change when back button is clicked', async () => {
    const props = createProps()
    renderComponent(props)

    // mock user clicking the next button to increment step
    await advanceNextSteps(props.nextStepButtonText, 1)

    const dialog = screen.getByRole('dialog')
    within(dialog.querySelector('.MuiStack-root')).getByText(
      props.steps[1].title,
    )

    await userEvent.click(screen.getByText(props.backButtonText))

    const dialogAfter = screen.getByRole('dialog')
    within(dialogAfter.querySelector('.MuiStack-root')).getByText(
      props.steps[0].title,
    )
  })

  test('should call onConfirm when confirm button is clicked', async () => {
    const props = createProps()
    renderComponent(props)

    // mock user clicking the next button twice to increment steps
    await advanceNextSteps(props.nextStepButtonText, 2)

    await userEvent.click(screen.getByText(props.confirmButtonText))
    expect(props.onConfirm).toHaveBeenCalled()
  })

  test('should not show cancel button if no cancel button text is provided', () => {
    const props = createProps({ cancelButtonText: undefined })
    renderComponent(props)

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2)

    const [closeButton, nextButton] = buttons
    const closeIconSvg = screen.getByTestId('CloseIcon')

    expect(closeButton).toContainElement(closeIconSvg)
    expect(nextButton).toHaveTextContent(props.nextStepButtonText)
  })

  test('should not show back button if no back button text is provided', async () => {
    const props = createProps({ backButtonText: undefined })
    renderComponent(props)

    // mock user clicking the next button to increment step
    await advanceNextSteps(props.nextStepButtonText, 1)

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(3)

    const [closeButton, cancelButton, nextButton] = buttons
    const closeIconSvg = screen.getByTestId('CloseIcon')

    expect(closeButton).toContainElement(closeIconSvg)
    expect(cancelButton).toHaveTextContent(props.cancelButtonText)
    expect(nextButton).toHaveTextContent(props.nextStepButtonText)
  })

  test('should not show next button if no next button text is provided', async () => {
    const props = createProps({ nextStepButtonText: undefined })
    renderComponent(props)

    // expect the user action to throw error since the next button is not showing
    await expect(
      advanceNextSteps(props.nextStepButtonText, 1),
    ).rejects.toThrow()

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2)

    const [closeButton, cancelButton] = buttons
    const closeIconSvg = screen.getByTestId('CloseIcon')

    expect(closeButton).toContainElement(closeIconSvg)
    expect(cancelButton).toHaveTextContent(props.cancelButtonText)
  })

  test('should not show confirm button if no confirm button text is provided', async () => {
    const props = createProps({ confirmButtonText: undefined })
    renderComponent(props)

    // mock user clicking the next button twice to increment steps
    await advanceNextSteps(props.nextStepButtonText, 2)

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2)

    const [closeButton, cancelButton] = buttons
    const closeIconSvg = screen.getByTestId('CloseIcon')

    expect(closeButton).toContainElement(closeIconSvg)
    expect(cancelButton).toHaveTextContent(props.cancelButtonText)
  })
})
