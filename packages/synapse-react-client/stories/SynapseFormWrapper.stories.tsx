import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { SynapseContextConsumer } from '../src/utils/context/SynapseContext'
import SynapseFormWrapper from '../src/components/SynapseForm/SynapseFormWrapper'

const meta = {
  title: 'Synapse/SynapseFormWrapper',
  component: SynapseFormWrapper,
  render: args => (
    <SynapseContextConsumer>
      {synapseContext => (
        <SynapseFormWrapper {...args} token={synapseContext?.accessToken} />
      )}
    </SynapseContextConsumer>
  ),
} satisfies Meta
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
