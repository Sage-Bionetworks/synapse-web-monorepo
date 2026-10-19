import { Meta, StoryObj } from '@storybook/react-vite'
import { ChoiceOptionsEditor } from './ChoiceOptionsEditor'

const meta = {
  title: 'Components/FormTemplateEditor/ChoiceOptionsEditor',
  component: ChoiceOptionsEditor,
  args: {
    options: ['Option 1', 'Option 2'],
    onChange: (next: string[]) => console.log('onChange', next),
  },
} satisfies Meta<typeof ChoiceOptionsEditor>
export default meta

type Story = StoryObj<typeof ChoiceOptionsEditor>

export const Default: Story = {}

/** A single remaining choice -- its delete button is disabled so the list can't go empty. */
export const SingleOption: Story = {
  args: {
    options: ['Option 1'],
  },
}

export const ManyOptions: Story = {
  args: {
    options: [
      'United States',
      'Canada',
      'United Kingdom',
      'Germany',
      'Japan',
      'Australia',
    ],
  },
}
