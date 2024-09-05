import React from 'react'
import { Redirect, RedirectProps, useLocation } from 'react-router-dom'

/**
 * Allows us to use react-router's Redirect as a portal component without losing the query params.
 * @param props
 * @returns
 */
export default function RedirectWithQuery(props: RedirectProps) {
  const { search } = useLocation()
  const hash = window.location.hash

  return (
    <Redirect
      {...props}
      to={{
        pathname: props.to as string,
        search,
        hash,
      }}
    />
  )
}
