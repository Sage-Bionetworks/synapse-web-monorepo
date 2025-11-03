import { Meta, StoryObj } from '@storybook/react-vite'
import ColorPaletteInspector from './ColorPaletteInspector'

const meta = {
  title: 'UI/ColorPaletteInspector',
  component: ColorPaletteInspector,
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {}
