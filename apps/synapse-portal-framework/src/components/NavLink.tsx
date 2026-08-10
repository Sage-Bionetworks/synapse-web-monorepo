import { Link as MuiLink } from '@mui/material'
import { CSSProperties, ReactNode } from 'react'
import { useSmartLink } from 'synapse-react-client/components/SmartLink/useSmartLink'

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
  /** Tags the link as a guided tour target (rendered as the data-tour attribute) */
  dataTourId?: string
}
export default function NavLink(props: Props) {
  const { to, children, target, onClick, className, id, style, dataTourId } =
    props
  const smartLinkProps = useSmartLink(to, target)

  return (
    <MuiLink
      {...smartLinkProps}
      onClick={onClick}
      className={className}
      id={id}
      style={style}
      data-tour={dataTourId}
    >
      {children}
    </MuiLink>
  )
}
