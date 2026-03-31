import { Meta, StoryObj } from '@storybook/react-vite'
import { ThemeGallery } from './ThemeGallery'

const meta: Meta<typeof ThemeGallery> = {
  title: 'Components/ThemeGallery',
  component: ThemeGallery,
}

export default meta
type Story = StoryObj<typeof ThemeGallery>

export const CurrentTheme: Story = {}
