import { Meta, StoryObj } from '@storybook/react-vite'
import { FieldLibraryRow } from './FieldLibraryRow'

const meta = {
  title: 'Components/FormTemplateEditor/FieldLibraryRow',
  component: FieldLibraryRow,
  args: {
    propertyKey: 'institution',
    property: { type: 'string', title: 'Institution' },
    isRequired: false,
    context: 'ALWAYS',
    isUsedInSteps: false,
    onClick: () => console.log('onClick'),
  },
} satisfies Meta<typeof FieldLibraryRow>
export default meta

type Story = StoryObj<typeof FieldLibraryRow>

export const NotInForm: Story = {}

export const RequiredWithSubmissionContext: Story = {
  args: {
    isRequired: true,
    context: 'RENEWAL_ONLY',
  },
}

/** Already in a form step -- its drag handle is disabled and dropped from the tab order. */
export const InForm: Story = {
  args: {
    isUsedInSteps: true,
  },
}

export const ChoiceField: Story = {
  args: {
    propertyKey: 'preferredContactMethod',
    property: {
      type: 'string',
      title: 'Preferred contact method',
      enum: ['Email', 'Phone', 'Mail'],
    },
  },
}
