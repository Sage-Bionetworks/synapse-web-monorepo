import React from 'react'
import { Navigate, NavigateProps, useLocation } from 'react-router-dom'

/**
 * Allows us to use react-router's Redirect as a portal component without losing the query params.
 * @param props
 * @returns
 */
export default function RedirectWithQuery(props: NavigateProps) {
  const { search } = useLocation()
  const hash = window.location.hash

  return (
    <Navigate
      {...props}
      to={{
        pathname: props.to as string,
        search,
        hash,
      }}
    />
  )
}
