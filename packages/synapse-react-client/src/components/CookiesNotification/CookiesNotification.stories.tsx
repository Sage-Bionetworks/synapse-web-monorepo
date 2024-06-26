import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import CookiesNotification from './CookiesNotification'
import UniversalCookies from 'universal-cookie'
import { COOKIES_AGREEMENT_COOKIE_KEY } from '../../utils/hooks/useCookiePreferences'

const cookies = new UniversalCookies()

const meta = {
  title: 'UI/CookiesNotification',
  component: CookiesNotification,
  render: () => {
    cookies.remove(COOKIES_AGREEMENT_COOKIE_KEY)
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
