import { Container } from '@mui/material'
import React from 'react'

type LayoutProps = React.PropsWithChildren<{
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
