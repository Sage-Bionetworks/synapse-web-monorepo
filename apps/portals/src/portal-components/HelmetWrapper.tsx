import React from 'react'
import { Helmet } from 'react-helmet'

export type HelmetWrapperProps = {
  description: string
}

const removeElement = (property: string) => {
  const element = document.querySelector(`[property='${property}']`)
  if (!element?.hasAttribute('data-react-helmet')) {
    element?.remove()
  }
}

export default function HelmetWrapper({ description }: HelmetWrapperProps) {
  removeElement('og:title')
  removeElement('og:description')
  removeElement('og:url')

  return (
    <Helmet>
      {/* RecursiveRouteRenderer handles page title change based on the router */}
      {/* <title>{title}</title> */}
      <meta property="og:title" content={document.title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={window.location.href} />
      {/* <meta property="og:image" content={info && info.avatar}/>
      <meta property="og:image:url" content={info && info.avatar}/>
      <meta property="og:image:type" content="image/jpeg"/> */}
    </Helmet>
  )
}
