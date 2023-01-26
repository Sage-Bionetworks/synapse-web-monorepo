import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EvaluationEditorPage } from './EvaluationEditorPage'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Synapse/Challenge/EvaluationEditorPage',
  component: EvaluationEditorPage,
} as ComponentMeta<typeof EvaluationEditorPage>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EvaluationEditorPage> = args => (
  <EvaluationEditorPage {...args} />
)

export const Entity = Template.bind({})
Entity.args = {
  entityId: 'syn5585645',
}

export const Evaluation = Template.bind({})
Evaluation.args = {
  evaluationId: '9614712',
}
