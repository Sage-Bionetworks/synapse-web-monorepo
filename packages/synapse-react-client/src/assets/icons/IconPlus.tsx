import React from 'react'
import { SVGProps } from 'react'

type IconPlusProps = {
  title?: string
}

const IconPlus = (
  props: SVGProps<SVGSVGElement> & IconPlusProps,
): React.ReactNode => (
  <svg
    {...props}
    className={`Icon-Plus ${props.className ?? ''}`}
    width="15"
    height="14"
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {props.title && <title>{props.title}</title>}
    <path d="M14.3887 8H8.38867V14H6.38867V8H0.388672V6H6.38867V0H8.38867V6H14.3887V8Z" />
  </svg>
)

export default IconPlus
