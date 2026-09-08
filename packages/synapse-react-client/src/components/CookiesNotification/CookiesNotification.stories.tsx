import { COOKIES_AGREEMENT_COOKIE_KEY } from '@/utils/hooks/useCookiePreferences'
import { Meta, StoryObj } from '@storybook/react-vite'
import CookiesNotification from './CookiesNotification'
import { useCookieValue } from '@react-hookz/web/useCookieValue/index.js'

const meta = {
  title: 'UI/CookiesNotification',
  component: CookiesNotification,
  render: function RenderFn() {
    const [_val, _set, remove] = useCookieValue(COOKIES_AGREEMENT_COOKIE_KEY)

    remove()

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
