import { SmartLink } from '../SmartLink/SmartLink'

type GenericCardTitleProps = {
  title: string
  target?: string
  href?: string
  isExternal?: boolean
}

export function GenericCardTitle(props: GenericCardTitleProps) {
  const { target, title, href } = props

  if (href) {
    return (
      <SmartLink target={target} href={href}>
        {title}
      </SmartLink>
    )
  } else {
    return <span>{title}</span>
  }
}
