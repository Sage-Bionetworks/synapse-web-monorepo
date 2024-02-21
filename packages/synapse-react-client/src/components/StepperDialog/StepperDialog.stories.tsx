import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { StepperDialog, StepperDialogProps } from './index'
import Button from '@mui/material/Button'
import { Step } from './StepperDialog'

const steps: Record<string, Step & { content: React.ReactNode }> = {
  STEP_1: {
    id: 'STEP_1',
    title: 'Stepper Dialog (Step 1)',
    nextStep: 'STEP_2',
    nextEnabled: true,
    content: (
      <>
        <p>Some child component with it&apos;s own actions</p>
        <div>
          <Button
            onClick={() => alert('Passing this data back up to Stepper parent')}
            variant="contained"
          >
            Child Action
          </Button>
        </div>
      </>
    ),
  },
  STEP_2: {
    id: 'STEP_2',
    title: 'Stepper Dialog (Step 2)',
    nextStep: 'STEP_3',
    nextEnabled: true,
    previousStep: 'STEP_1',
    content: (
      <>
        Proin laoreet semper tortor ac posuere. Cras non leo at ipsum fringilla
        ullamcorper. Etiam velit est, tempor id lobortis eu, lacinia id sem. Nam
        ornare mattis dui a porta. Aliquam a ullamcorper velit, et hendrerit
        eros. Etiam accumsan porta neque in viverra. Proin eleifend, eros in
        tristique hendrerit, nisi purus cursus sapien, id ultrices nunc tellus a
        ipsum. Donec et fringilla neque. Aenean consequat purus quis lectus
        maximus fermentum.,
      </>
    ),
  },
  STEP_3: {
    id: 'STEP_3',
    title: 'Stepper Dialog (Step 3)',
    previousStep: 'STEP_2',
    content: (
      <>
        Maecenas quam nunc, sagittis non condimentum at, rutrum sit amet eros.
        Fusce rutrum, lectus in blandit sagittis, mi tortor ullamcorper mi,
        vitae vestibulum libero quam a nisi. In eu mauris et neque sodales porta
        eu eget dui. Nunc eu quam sit amet justo elementum mollis. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Sed laoreet metus nulla, in gravida urna rhoncus in. Proin laoreet
        semper tortor ac posuere. Cras non leo at ipsum fringilla ullamcorper.
        Etiam velit est, tempor id lobortis eu, lacinia id sem. Nam ornare
        mattis dui a porta. Aliquam a ullamcorper velit, et hendrerit eros.
        Etiam accumsan porta neque in viverra.,
      </>
    ),
  },
}

const meta = {
  title: 'UI/StepperDialog',
  component: StepperDialog,
  render: function RenderFn(args) {
    const [step, setStep] = useState<Step & { content: React.ReactNode }>(
      steps.STEP_1,
    )
    const [content, setContent] = useState<React.ReactNode>(
      steps.STEP_1.content,
    )
    const onStepChange = (stepId: string) => {
      const tmp = steps[stepId]
      setStep(tmp)
      setContent(tmp.content)
    }
    return (
      <StepperDialog
        {...args}
        step={step}
        content={content}
        onStepChange={onStepChange}
      />
    )
  },
} satisfies Meta<StepperDialogProps>
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    errorMessage: '',
    onCancel: () => alert('Here we would close the stepper'),
    onConfirm: () => {
      alert('Here we would confirm some important action')
    },
    confirming: false,
    onStepChange: () => undefined,
    open: true,
    step: steps.STEP_1,
    content: steps.STEP_1.content,
    loading: false,
  },
}
