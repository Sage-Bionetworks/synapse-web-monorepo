import { Link as MuiLink } from '@mui/material'
import { CSSProperties, ReactNode } from 'react'
import { NavLink as ReactRouterNavLink } from 'react-router'

/*
  
  Surprisingly the ReactRouterNavLink component only supports internal web app links, so its necessary
  to check if the link being passed in is external and use an explicit anchor tag.
  
  Read more here: https://github.com/ReactTraining/react-router/issues/1147

*/

type Props = {
  to: string
  onClick?: () => void
  className?: string
  id?: string
  style?: CSSProperties
  children: ReactNode
  target?: string
}
export default function NavLink(props: Props) {
  const link = props.to
  let defaultTarget = '_self' // default to open in the same window
  let isExternal = false
  if (link.startsWith('http')) {
    defaultTarget = '_blank' // if this is an external link, default to open in a new window
    isExternal = true
  } else if (link.includes('mailto')) {
    isExternal = true
  }
  const target = props.target ?? defaultTarget

  return isExternal ? (
    <MuiLink href={link} target={target} rel="noreferrer noopener" {...props}>
      {props.children}
    </MuiLink>
  ) : (
    <ReactRouterNavLink {...props} target={target}>
      {props.children}
    </ReactRouterNavLink>
  )
}
