import { Link } from '@mui/material'
import { Link as RouterLink, useInRouterContext } from 'react-router'

type GenericCardTitleProps = {
  title: string
  target?: string
  href?: string
  isExternal?: boolean
}

export function GenericCardTitle(props: GenericCardTitleProps) {
  const { target, title, href, isExternal } = props
  const inRouterContext = useInRouterContext()

  if (href) {
    if (!isExternal && inRouterContext) {
      return (
        <Link component={RouterLink} to={href}>
          {title}
        </Link>
      )
    }
    return (
      <Link target={target} href={href}>
        {title}
      </Link>
    )
  } else {
    return <span>{title}</span>
  }
}
