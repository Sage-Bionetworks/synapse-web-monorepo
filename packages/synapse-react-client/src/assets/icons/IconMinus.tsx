import React from 'react'
import { SVGProps } from 'react'

type IconMinusProps = {
  title?: string
}

const IconMinus = (
  props: SVGProps<SVGSVGElement> & IconMinusProps,
): React.ReactNode => (
  <svg
    {...props}
    className={`Icon-Minus ${props.className ?? ''}`}
    width="15"
    height="2"
    viewBox="0 0 15 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {props.title && <title>{props.title}</title>}
    <path d="M14.3887 2H8.38867H6.38867H0.388672V0H6.38867H8.38867H14.3887V2Z" />
  </svg>
)

export default IconMinus
