import { Meta, StoryObj } from '@storybook/react'

import { LoginMethods } from '../src/components/Authentication/LoginMethod'
import LoginMethodButton from '../src/components/Authentication/LoginMethodButton'
import { IconStrings } from '../src/components/IconSvg/IconSvg'

const meta = {
  title: 'Authentication/LoginMethodButton',
  component: LoginMethodButton,
  argTypes: {
    loginMethod: {
      options: LoginMethods,
      control: 'radio',
    },
    iconName: {
      options: IconStrings,
      control: 'select',
    },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    loginMethod: 'GOOGLE',
    iconName: 'google24',
  },
}
