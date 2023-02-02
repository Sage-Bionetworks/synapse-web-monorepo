import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ColorPaletteInspector from './ColorPaletteInspector'

export default {
  title: 'UI/ColorPaletteInspector',
  component: ColorPaletteInspector,
} as ComponentMeta<typeof ColorPaletteInspector>

const Template: ComponentStory<typeof ColorPaletteInspector> = args => (
  <ColorPaletteInspector {...args} />
)

export const Demo = Template.bind({})
