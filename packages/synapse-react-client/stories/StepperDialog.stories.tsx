import { Meta, StoryObj } from '@storybook/react'
import {
  StepperDialog,
  StepperDialogProps,
} from '../src/lib/containers/StepperDialog'

const meta = {
  title: 'UI/StepperDialog',
  component: StepperDialog,
} satisfies Meta<StepperDialogProps>
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    backButtonText: 'Back',
    cancelButtonText: 'Cancel',
    confirmButtonText: 'Accept Terms',
    nextStepButtonText: 'Next',
    open: true,
    steps: {
      0: {
        title: 'Stepper Dialog (Step 1)',
        content:
          'Maecenas quam nunc, sagittis non condimentum at, rutrum sit amet eros. Fusce rutrum, lectus in blandit sagittis, mi tortor ullamcorper mi, vitae vestibulum libero quam a nisi. In eu mauris et neque sodales porta eu eget dui. Nunc eu quam sit amet justo elementum mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed laoreet metus nulla, in gravida urna rhoncus in. Proin laoreet semper tortor ac posuere. Cras non leo at ipsum fringilla ullamcorper. Etiam velit est, tempor id lobortis eu, lacinia id sem. Nam ornare mattis dui a porta. Aliquam a ullamcorper velit, et hendrerit eros. Etiam accumsan porta neque in viverra.',
      },
      1: {
        title: 'Stepper Dialog (Step 2)',
        content:
          'Proin laoreet semper tortor ac posuere. Cras non leo at ipsum fringilla ullamcorper. Etiam velit est, tempor id lobortis eu, lacinia id sem. Nam ornare mattis dui a porta. Aliquam a ullamcorper velit, et hendrerit eros. Etiam accumsan porta neque in viverra. Proin eleifend, eros in tristique hendrerit, nisi purus cursus sapien, id ultrices nunc tellus a ipsum. Donec et fringilla neque. Aenean consequat purus quis lectus maximus fermentum.',
      },
      2: {
        title: 'Stepper Dialog (Step 3)',
        content:
          'Maecenas quam nunc, sagittis non condimentum at, rutrum sit amet eros. Fusce rutrum, lectus in blandit sagittis, mi tortor ullamcorper mi, vitae vestibulum libero quam a nisi. In eu mauris et neque sodales porta eu eget dui. Nunc eu quam sit amet justo elementum mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed laoreet metus nulla, in gravida urna rhoncus in. Proin laoreet semper tortor ac posuere. Cras non leo at ipsum fringilla ullamcorper. Etiam velit est, tempor id lobortis eu, lacinia id sem. Nam ornare mattis dui a porta. Aliquam a ullamcorper velit, et hendrerit eros. Etiam accumsan porta neque in viverra.',
      },
    },
  },
}
