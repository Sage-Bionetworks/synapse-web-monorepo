import { Link } from '@mui/material'

type GenericCardTitleProps = {
  title: string
  target?: string
  href?: string
}

export function GenericCardTitle(props: GenericCardTitleProps) {
  const { target, title, href } = props

  if (href) {
    return (
      <Link target={target} href={href}>
        {title}
      </Link>
    )
  } else {
    return <span>{title}</span>
  }
}
