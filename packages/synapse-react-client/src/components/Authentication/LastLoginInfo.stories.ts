import { LOGIN_METHOD_EMAIL } from '@/utils/SynapseConstants'
import { Meta, StoryObj } from '@storybook/react-vite'

import LastLoginInfo from './LastLoginInfo'
import { LoginMethods } from './LoginMethod'

const meta = {
  title: 'Authentication/LastLoginInfo',
  component: LastLoginInfo,
  argTypes: {
    lastLoginMethod: {
      options: LoginMethods,
      control: 'radio',
    },
  },
  parameters: {
    design: [
      {
        name: 'sentence',
        type: 'figma',
        url: 'https://www.figma.com/file/TOcmJ2QHr51v8Huv3wIec9/Sage-Registration-App?type=design&node-id=2713-54506',
      },
      {
        name: 'box',
        type: 'figma',
        url: 'https://www.figma.com/file/TOcmJ2QHr51v8Huv3wIec9/Sage-Registration-App?type=design&node-id=2692-56233',
      },
    ],
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    currentSourceAppName: 'ARK Portal',
    lastLoginMethod: LOGIN_METHOD_EMAIL,
    lastLoginSourceAppName: 'AD Knowledge Portal',
    lastLoginSourceAppURL: 'https://adknowledgeportal.synapse.org/',
    lastLoginDate: '2023-05-10T16:54:53.333Z',
    display: 'sentence',
  },
}
