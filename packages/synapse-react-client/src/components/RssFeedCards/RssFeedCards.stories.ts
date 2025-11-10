import { Meta, StoryObj } from '@storybook/react-vite'
import RssFeedCards from './RssFeedCards'

const meta = {
  title: 'Home Page/RssFeedCards',
  component: RssFeedCards,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    url: 'https://news.adknowledgeportal.org',
    itemsToShow: 3,
    allowCategories: ['Data Release', 'News', 'Webinar', 'rosMAP'],
    mailChimpListName: 'AMP-AD quarterly newsletter',
    mailChimpUrl:
      'https://sagebase.us7.list-manage.com/subscribe/post?u=b146de537186191a9d2110f3a&amp;id=96b614587a',
    filter: { value: 'MSBB' },
    viewAllNewsButtonText: 'View All AD News',
  },
}
