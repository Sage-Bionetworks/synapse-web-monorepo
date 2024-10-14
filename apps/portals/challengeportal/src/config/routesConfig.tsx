import App from '@sage-bionetworks/synapse-portal-framework/App'
import Header from '@sage-bionetworks/synapse-portal-framework/components/Header'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import TabbedSynapseObjects from '@sage-bionetworks/synapse-portal-framework/components/TabbedSynapseObjects'
import sharedRoutes from '@sage-bionetworks/synapse-portal-framework/shared-config/sharedRoutes'
import React from 'react'
import { RouteObject } from 'react-router-dom'
import {
  challengeCardConfiguration,
  ChallengeDetailsPage,
  challengeDetailsPageTabRoutes,
  challengeTitleLinkConfig,
} from './pages/ChallengeDetailsPage'
import { challengeProjectsSql } from './resources'
import { CardContainerLogic } from 'synapse-react-client'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      ...sharedRoutes,
      {
        index: true,
        element: (
          <>
            <Header />
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
                        {...challengeCardConfiguration}
                        titleLinkConfig={challengeTitleLinkConfig}
                      />
                    ),
                  },
                  {
                    label: 'Upcoming',
                    element: (
                      <CardContainerLogic
                        sql={`${challengeProjectsSql} where Status='Upcoming'`}
                        {...challengeCardConfiguration}
                        titleLinkConfig={challengeTitleLinkConfig}
                      />
                    ),
                  },
                  {
                    label: 'Completed',
                    element: (
                      <CardContainerLogic
                        sql={`${challengeProjectsSql} where Status='Closed'`}
                        {...challengeCardConfiguration}
                        titleLinkConfig={challengeTitleLinkConfig}
                      />
                    ),
                  },
                ]}
              />
            </SectionLayout>
          </>
        ),
      },
      {
        path: 'Challenges/DetailsPage',
        element: <ChallengeDetailsPage />,
        children: challengeDetailsPageTabRoutes,
      },
    ],
  },
]

export default routes
