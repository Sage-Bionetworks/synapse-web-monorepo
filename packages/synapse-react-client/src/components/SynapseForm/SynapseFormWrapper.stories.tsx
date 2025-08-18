import { Meta, StoryObj } from '@storybook/react'
import SynapseFormWrapper, {
  SynapseFormWrapperProps,
} from './SynapseFormWrapper'

const meta = {
  title: 'Synapse/SynapseFormWrapper',
  component: SynapseFormWrapper,
  parameters: {
    withRouter: true,
  },
} satisfies Meta<SynapseFormWrapperProps>
export default meta
type Story = StoryObj<typeof meta>

export const StopADDemo: Story = {
  args: {
    formGroupId: '9',
    formSchemaEntityId: 'syn20680102',
    fileNamePath: 'naming.compound_name',
    formUiSchemaEntityId: 'syn20693568',
    formNavSchemaEntityId: 'syn20680027',
    formTitle: 'Your Submission',
    formClass: 'drug-upload-tool',
  },
}
