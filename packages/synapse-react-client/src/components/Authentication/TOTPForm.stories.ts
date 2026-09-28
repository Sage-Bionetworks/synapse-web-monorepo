import { Meta, StoryObj } from '@storybook/react-vite'
import TOTPForm from './TOTPForm'
import { displayToast } from '../ToastMessage'

const meta = {
  title: 'Authentication/TOTPForm',
  component: TOTPForm,
} satisfies Meta<typeof TOTPForm>

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    loginIsPending: false,
    onSubmit: (value: string) => {
      displayToast(`Submitted code: ${value}`, 'info')
    },
  },
}
