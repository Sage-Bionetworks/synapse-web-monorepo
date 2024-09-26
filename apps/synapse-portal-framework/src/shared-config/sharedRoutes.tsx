import React from 'react'
import { Navigate, RouteObject } from 'react-router-dom'
import { DownloadCartPage } from 'synapse-react-client'
import Header from '../components/Header'
import RedirectWithQuery from '../components/RedirectWithQuery'

export const headerRoute: RouteObject = {
  path: '/',
  element: <Header />,
}

const routes: RouteObject[] = [
  // {
  //   path: '/',
  //   element: <Header />,
  // },
  {
    // Handles redirecting '/Home' to '/'
    path: 'Home/',
    element: <RedirectWithQuery to="/" />,
  },
  {
    path: 'DownloadCart/',
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
