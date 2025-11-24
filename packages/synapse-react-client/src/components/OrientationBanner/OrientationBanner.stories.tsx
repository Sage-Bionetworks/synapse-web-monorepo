import { Meta, StoryObj } from '@storybook/react-vite'
import OrientationBanner, {
  getOrientationBannerKey,
  OrientationBannerProps,
} from './OrientationBanner'

const meta = {
  title: 'UI/OrientationBanner',
  component: OrientationBanner,
  render: args => {
    localStorage.removeItem(getOrientationBannerKey(args.name))
    return <OrientationBanner {...args} />
  },
} satisfies Meta<OrientationBannerProps>
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    name: 'Teams',
    title: 'Getting Started With Your Teams',
    text: 'Teams allow you to easily manage groups of users to control access to projects, communicate with colleagues, and participate in challenges.',
    primaryButtonConfig: {
      text: 'Search Teams',
      href: 'https://www.synapse.org/TeamSearch:',
    },
    secondaryButtonConfig: {
      text: 'Learn More About Teams',
      href: 'https://help.synapse.org/docs/Teams.1985446029.html',
    },
  },
}
