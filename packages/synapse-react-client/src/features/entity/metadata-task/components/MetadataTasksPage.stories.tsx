import { Meta, StoryObj } from '@storybook/react-vite'
import MetadataTasksPage, { MetadataTasksPageProps } from './MetadataTasksPage'

const meta = {
  title: 'Synapse/Entity/MetadataTaskTable',
  component: MetadataTasksPage,
  args: {
    useMemoryRouter: true,
    routerBaseName: '/',
  },
} satisfies Meta<MetadataTasksPageProps>
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  name: 'MetadataTaskTable',
  args: {
    projectId: 'syn12554559',
  },
  parameters: {
    stack: 'development',
    requireLogin: true,
  },
}
