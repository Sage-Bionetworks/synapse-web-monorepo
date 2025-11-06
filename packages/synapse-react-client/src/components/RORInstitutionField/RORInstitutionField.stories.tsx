import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import RORInstitutionField, {
  RORLinkedInstitutionFieldProps,
} from './RORInstitutionField'

const meta: Meta<RORLinkedInstitutionFieldProps> = {
  title: 'Components/RORInstitutionField',
  component: RORInstitutionField,
  args: {
    onChange: fn(),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  name: 'RORInstitutionField',
}
