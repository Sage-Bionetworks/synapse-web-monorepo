import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TermsAndConditions from './TermsAndConditions'

export default {
  title: 'Synapse/TermsAndConditions',
  component: TermsAndConditions,
} as ComponentMeta<typeof TermsAndConditions>

const Template: ComponentStory<typeof TermsAndConditions> = args => (
  <TermsAndConditions {...args} />
)

export const Demo = Template.bind({})
