import React from 'react'
import App, { AppProps } from './App'
import { LoginComponent } from './LoginComponent'
import { LogoutComponent } from './LogoutComponent'
import { OAuth2Form } from './OAuth2Form'

export function getRoutes(appProps?: AppProps) {
  return [
    {
      path: '/',
      element: <App {...appProps} />,
      children: [
        {
          index: true,
          element: <OAuth2Form />,
        },
        {
          path: 'logout',
          element: <LogoutComponent />,
        },
        {
          path: 'login',
          element: <LoginComponent />,
        },
      ],
    },
  ]
}
