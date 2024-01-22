import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import CookiesNotification, {
  COOKIES_AGREEMENT_LOCALSTORAGE_KEY,
} from './CookiesNotification'

const meta = {
  title: 'UI/CookiesNotification',
  component: CookiesNotification,
  render: () => {
    localStorage.removeItem(COOKIES_AGREEMENT_LOCALSTORAGE_KEY)
    return <CookiesNotification />
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {}
