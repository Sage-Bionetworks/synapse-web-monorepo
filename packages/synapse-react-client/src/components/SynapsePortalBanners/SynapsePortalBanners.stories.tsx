import { Meta, StoryObj } from '@storybook/react'
import SynapsePortalBanners, {
  SynapsePortalBannersProps,
} from './SynapsePortalBanners'

const meta: Meta<SynapsePortalBannersProps> = {
  title: 'Components/SynapsePortalBanners',
  component: SynapsePortalBanners,
  args: {
    entityId: 'syn52623570',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  name: 'SynapsePortalBanners',
}
