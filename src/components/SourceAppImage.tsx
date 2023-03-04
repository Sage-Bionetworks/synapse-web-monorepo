import React from 'react'

export type SourceAppImageProps = {
  href: string
}

// Refactored into it's own class, thinking that using a prefetch resource would improve loading performance of the images, but it does not.
const SourceAppImage: React.FC<SourceAppImageProps> = (
  props: SourceAppImageProps,
) => {
  return (
    <>
      <img src={props.href} alt="Logo" style={{ height: '65px' }} />
    </>
  )
}

export default SourceAppImage
