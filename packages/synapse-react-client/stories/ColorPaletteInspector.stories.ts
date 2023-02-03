import { Meta, StoryObj } from '@storybook/react'
import ColorPaletteInspector from '../demo/containers/playground/ColorPaletteInspector'

const meta = {
  title: 'UI/ColorPaletteInspector',
  component: ColorPaletteInspector,
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {}
