import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { RequestDownloadCard } from './RequestDownloadCard'

export default {
  title: 'Download/RequestDownloadCard',
  component: RequestDownloadCard,
} as ComponentMeta<typeof RequestDownloadCard>

const Template: ComponentStory<typeof RequestDownloadCard> = args => (
  <RequestDownloadCard {...args} />
)

export const Demo = Template.bind({})
Demo.args = {
  entityId: 'syn36695878',
}
