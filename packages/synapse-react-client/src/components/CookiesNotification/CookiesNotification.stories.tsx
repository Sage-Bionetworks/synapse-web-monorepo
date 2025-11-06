import { COOKIES_AGREEMENT_COOKIE_KEY } from '@/utils/hooks/useCookiePreferences'
import { Meta, StoryObj } from '@storybook/react-vite'
import UniversalCookies from 'universal-cookie'
import CookiesNotification from './CookiesNotification'

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
