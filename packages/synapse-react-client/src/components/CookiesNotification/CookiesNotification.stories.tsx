import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import CookiesNotification from './CookiesNotification'
import { COOKIES_AGREEMENT_LOCALSTORAGE_KEY } from '../../utils/hooks/useCookiePreferences'

const meta = {
  title: 'UI/CookiesNotification',
  component: CookiesNotification,
  render: () => {
    localStorage.removeItem(COOKIES_AGREEMENT_LOCALSTORAGE_KEY)
    return (
      <CookiesNotification
        onClose={prefs => {
          alert(`Cookie prefs returned: ${JSON.stringify(prefs)}`)
        }}
      />
    )
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {}
