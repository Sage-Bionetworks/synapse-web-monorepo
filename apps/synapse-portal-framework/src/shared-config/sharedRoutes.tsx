import RedirectWithQuery from '@/components/RedirectWithQuery'
import { RouteObject } from 'react-router'
import { DownloadCartPage, ErrorPage, SynapseErrorType } from 'synapse-react-client'

const routes: RouteObject[] = [
  {
    path: '*',
    element: (
      <ErrorPage
        type={SynapseErrorType.NOT_FOUND}
        message={''}
        gotoPlace={() => {
          // not necessary for NOT_FOUND page
        }}
      />
    ),
  },
  {
    // Handles redirecting '/Home' to '/'
    path: 'Home',
    element: <RedirectWithQuery to="/" />,
  },
  {
    path: 'DownloadCart',
    element: (
      <DownloadCartPage
        onViewSharingSettingsClicked={benefactorEntityId => {
          window.open(
            `https://www.synapse.org/Synapse:${benefactorEntityId}`,
            '_blank',
          )
        }}
      />
    ),
  },
]

export default routes
