import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SynapseFormWrapper from './SynapseFormWrapper'
import { SynapseContextConsumer } from '../../utils/SynapseContext'

export default {
  title: 'Synapse/SynapseFormWrapper',
  component: SynapseFormWrapper,
} as ComponentMeta<typeof SynapseFormWrapper>

const Template: ComponentStory<typeof SynapseFormWrapper> = args => (
  <SynapseContextConsumer>
    {synapseContext => (
      <SynapseFormWrapper {...args} token={synapseContext?.accessToken} />
    )}
  </SynapseContextConsumer>
)

export const Demo = Template.bind({})
Demo.args = {
  formTitle: 'Your Contribution Request',
  formClass: 'contribution-request',
  formSchemaEntityId: 'syn20692910',
  fileNamePath: 'study.submission_name',
  formUiSchemaEntityId: 'syn20692911',
  formNavSchemaEntityId: 'syn20968007',
  isWizardMode: true,
}
