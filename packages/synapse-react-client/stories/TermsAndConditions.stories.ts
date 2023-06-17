import { Meta, StoryObj } from '@storybook/react'
import TermsAndConditions from '../src/components/TermsAndConditions/TermsAndConditions'
import { displayToast } from '../src/components/ToastMessage/ToastMessage'

const meta = {
  title: 'Synapse/TermsAndConditions',
  component: TermsAndConditions,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    onFormChange: formComplete => {
      if (formComplete) {
        displayToast('All items accepted!')
      }
    },
  },
}
