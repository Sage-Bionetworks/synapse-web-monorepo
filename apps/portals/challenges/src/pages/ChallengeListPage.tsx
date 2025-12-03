import React from 'react'
import { challengeProjectsSql } from '@/config/resources'
import {
  challengeCardConfiguration,
  challengeTitleLinkConfig,
} from '@/config/synapseConfig/challenges'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import TabbedSynapseObjects from '@sage-bionetworks/synapse-portal-framework/components/TabbedSynapseObjects'
import { CardContainerLogic } from 'synapse-react-client'

const ChallengeListPage = (): React.ReactNode => {
  return (
    <SectionLayout
      title="Listed Challenges"
      subtitle="Explore and join our currently running challenges, or browse completed ones and review their findings."
      centerTitle
      ContainerProps={{ className: 'home-spacer' }}
    >
      <TabbedSynapseObjects
        centerTabs
        tabConfigs={[
          // Add list of challenge project cards
          {
            label: 'Active',
            element: (
              <CardContainerLogic
                sql={`${challengeProjectsSql} where Status='Active'`}
                cardConfiguration={{
                  ...challengeCardConfiguration,
                  titleLinkConfig: challengeTitleLinkConfig,
                }}
              />
            ),
          },
          {
            label: 'Upcoming',
            element: (
              <CardContainerLogic
                sql={`${challengeProjectsSql} where Status='Upcoming'`}
                cardConfiguration={{
                  ...challengeCardConfiguration,
                  titleLinkConfig: challengeTitleLinkConfig,
                }}
              />
            ),
          },
          {
            label: 'Completed',
            element: (
              <CardContainerLogic
                sql={`${challengeProjectsSql} where Status='Closed'`}
                cardConfiguration={{
                  ...challengeCardConfiguration,
                  titleLinkConfig: challengeTitleLinkConfig,
                }}
              />
            ),
          },
        ]}
      />
    </SectionLayout>
  )
}

export default ChallengeListPage
