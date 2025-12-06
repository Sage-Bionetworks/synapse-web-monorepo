import React from 'react'
import BasePortalCard from './BasePortalCard'
import ColorfulPortalCardWithChips from './ColorfulPortalCardWithChips/ColorfulPortalCardWithChips'

export default {
  title: 'Generic/PortalCard',
  component: BasePortalCard,
}

export const Default = (): React.ReactNode => {
  return (
    <ColorfulPortalCardWithChips
      title={'Challenge Title'}
      subtitle={'Challenge Name'}
      description={'A brief description of the challenge.'}
      learnMoreLink={'https://www.synapse.org'}
      chips={['Genomics', 'AI', 'Data Sharing']}
      tag={'Open'}
      backgroundColor={'pink'}
      borderRadiusPx={8}
    />
  )
}
