import CsvTableDescriptorForm, {
  CsvTableDescriptorFormProps,
} from '@/components/table/CsvTableDescriptorForm/CsvTableDescriptorForm'
import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'

const meta: Meta<CsvTableDescriptorFormProps> = {
  title: 'Components/Table/CSV Table Descriptor Form',
  component: CsvTableDescriptorForm,
  args: {
    onChange: fn(),
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  name: 'CSV Table Descriptor Form',
}
