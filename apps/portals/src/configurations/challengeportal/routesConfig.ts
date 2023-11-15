import { GenericRoute } from 'types/portal-config'
import {
  challengeCardConfiguration,
  challengeDetailsLandingPage,
  challengeTitleLinkConfig,
} from './synapseConfigs/challenges'
import { challengeProjectsSql } from './resources'

const routes: GenericRoute[] = [
  {
    path: '',
    exact: true,
    synapseConfigArray: [
      // Add list of challenge project cards
      {
        name: 'TabbedSynapseObjects',
        title: 'Listed Challenges',
        subtitle:
          'Explore and join our currently running challenges, or browse completed ones and review their findings.',
        centerTitle: true,
        outsideContainerClassName: 'home-spacer',
        props: {
          centerTabs: true,
          tabConfigs: [
            {
              label: 'Active',
              synapseObject: {
                name: 'CardContainerLogic',
                props: {
                  sql: `${challengeProjectsSql} where Status='Active'`,
                  ...challengeCardConfiguration,
                  titleLinkConfig: challengeTitleLinkConfig,
                },
              },
            },
            {
              label: 'Upcoming',
              synapseObject: {
                name: 'CardContainerLogic',
                props: {
                  sql: `${challengeProjectsSql} where Status='Upcoming'`,
                  ...challengeCardConfiguration,
                  titleLinkConfig: challengeTitleLinkConfig,
                },
              },
            },
            {
              label: 'Completed',
              synapseObject: {
                name: 'CardContainerLogic',
                props: {
                  sql: `${challengeProjectsSql} where Status='Closed'`,
                  ...challengeCardConfiguration,
                  titleLinkConfig: challengeTitleLinkConfig,
                },
              },
            },
          ],
        },
      },
    ],
  },
  {
    path: 'Challenges',
    hideRouteFromNavbar: true,
    routes: [
      {
        path: 'DetailsPage',
        synapseConfigArray: challengeDetailsLandingPage,
      },
    ],
  },
]

export default routes
