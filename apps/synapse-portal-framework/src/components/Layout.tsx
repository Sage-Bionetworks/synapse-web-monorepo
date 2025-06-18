import Container from '@mui/material/Container'
import { PropsWithChildren } from 'react'

type LayoutProps = PropsWithChildren<{
  containerClassName?: string
  outsideContainerClassName?: string
}>

function Layout(props: LayoutProps) {
  const {
    children,
    containerClassName = '',
    outsideContainerClassName = '',
  } = props
  const content = (
    <Container maxWidth={'lg'} className={containerClassName}>
      {children}
    </Container>
  )
  if (outsideContainerClassName) {
    return <div className={outsideContainerClassName}>{content}</div>
  } else {
    return content
  }
}

export default Layout
