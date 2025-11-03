import { Meta, StoryObj } from '@storybook/react-vite'
import OpenData, { OpenDataProps } from './OpenData'

const meta: Meta<OpenDataProps> = {
  title: 'Synapse/OpenData',
  component: OpenData,
}
export default meta
type Story = StoryObj<typeof meta>

export const PublicOpenData: Story = {
  name: 'Public & Open Data',
  args: {
    isOpenData: true,
    isPublic: true,
    currentUserCanUpdateSharingSettings: false,
  },
}

export const NonPublicOpenDataWithChangePermissions: Story = {
  name: 'Non-Public & Open Data',
  args: {
    isOpenData: true,
    isPublic: false,
    currentUserCanUpdateSharingSettings: true,
  },
}

export const NonOpenPublicDataWithChangePermissions: Story = {
  name: 'Public & Non-Open Data',
  args: {
    isOpenData: false,
    isPublic: true,
    currentUserCanUpdateSharingSettings: true,
  },
}
