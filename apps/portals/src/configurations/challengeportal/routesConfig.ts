import { GenericRoute } from 'types/portal-config'
import { challengeDetailsLandingPage } from './synapseConfigs/challenges'

const routes: GenericRoute[] = [
  {
    path: '',
    exact: true,
    synapseConfigArray: [
      // TODO: Add list of challenge project cards
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
