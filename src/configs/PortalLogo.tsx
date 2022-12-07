import React from 'react'

export type PortalLogoProps = {
  url:string
}

export const PortalLogo = (props: PortalLogoProps) => {
  return <div
    style={{
      backgroundImage: `url(${props.url}/logo.svg)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      minHeight: '300px',
      minWidth: '300px'
    }}
  />
}
