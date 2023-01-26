import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import RssFeedCards from './RssFeedCards'

export default {
  title: 'Home Page/RssFeedCards',
  component: RssFeedCards,
} as ComponentMeta<typeof RssFeedCards>

const Template: ComponentStory<typeof RssFeedCards> = args => (
  <RssFeedCards {...args} />
)

export const Demo = Template.bind({})
Demo.args = {
  url: 'https://news.adknowledgeportal.org',
  itemsToShow: 3,
  allowCategories: ['Data Release', 'News', 'Webinar', 'rosMAP'],
  mailChimpListName: 'AMP-AD quarterly newsletter',
  mailChimpUrl:
    'https://sagebase.us7.list-manage.com/subscribe/post?u=b146de537186191a9d2110f3a&amp;id=96b614587a',
  lockedColumn: { value: 'MSBB' },
  viewAllNewsButtonText: 'VIEW ALL AD NEWS',
}
