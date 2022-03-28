import React from 'react'

export type HiddenIFrameProps = {
  url: string
}

export const HiddenIFrame = (props: HiddenIFrameProps) => {
  const { url } = props
  return (
    <iframe
      src={url}
      title={url}
      style={{display:'none'}}
    />
  )
}
