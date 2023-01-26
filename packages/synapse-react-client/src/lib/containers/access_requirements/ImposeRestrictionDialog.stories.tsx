import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ImposeRestrictionDialog from './ImposeRestrictionDialog'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Governance/ImposeRestrictionDialog',
  component: ImposeRestrictionDialog,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ImposeRestrictionDialog>

const Template: ComponentStory<typeof ImposeRestrictionDialog> = args => (
  <ImposeRestrictionDialog {...args} />
)

export const Demo = Template.bind({})
Demo.args = {
  entityId: 'syn45328519',
  open: true,
}
