import { Meta, StoryObj } from '@storybook/react-vite'
import SynapseSearchPage, { SynapseSearchPageProps } from './SynapseSearchPage'

const meta = {
  title: 'Components/SynapseSearch/SynapseSearchPage',
  component: SynapseSearchPage,
  parameters: {
    stack: 'production',
    requireLogin: false,
  },
  args: {
    useMemoryRouter: true,
    routerBaseName: '/',
  },
} satisfies Meta<SynapseSearchPageProps>
export default meta

type Story = StoryObj<SynapseSearchPageProps>

export const Page = {} satisfies Story
