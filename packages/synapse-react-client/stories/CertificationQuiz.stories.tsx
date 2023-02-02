import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CertificationQuiz from '../src/lib/containers/CertificationQuiz'

export default {
  title: 'Synapse/CertificationQuiz',
  component: CertificationQuiz,
  argTypes: {},
} as ComponentMeta<typeof CertificationQuiz>

const Template: ComponentStory<typeof CertificationQuiz> = args => (
  <CertificationQuiz {...args} />
)

export const CertificationQuizDemo = Template.bind({})
CertificationQuizDemo.args = {}
