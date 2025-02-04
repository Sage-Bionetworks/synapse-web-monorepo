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

export const Demo: Story = {
  args: {
    formTitle: 'Your Contribution Request',
    formClass: 'contribution-request',
    formSchemaEntityId: 'syn20692910',
    fileNamePath: 'study.submission_name',
    formUiSchemaEntityId: 'syn20692911',
    formNavSchemaEntityId: 'syn20968007',
    isWizardMode: true,
  },
}

export const StopADDemo: Story = {
  args: {
    formSchemaEntityId: 'syn20680102',
    fileNamePath: 'naming.compound_name',
    formUiSchemaEntityId: 'syn20693568',
    formNavSchemaEntityId: 'syn20680027',
    formTitle: 'Your Submission',
    formClass: 'drug-upload-tool',
  },
}
