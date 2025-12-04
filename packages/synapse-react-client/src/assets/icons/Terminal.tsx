import React from 'react'
import { SVGProps } from 'react'

const Terminal = (props: SVGProps<SVGSVGElement>): React.ReactNode => (
  <svg
    {...props}
    className={`SRC-terminal-icon ${props.className ?? ''}`}
    width="54"
    height="55"
    viewBox="0 0 54 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      className="outer"
      x="0.5"
      y="1.64453"
      width="52.6407"
      height="52.6407"
    />
    <rect
      x="3.79004"
      y="4.93457"
      width="46.0606"
      height="46.0606"
      fill="white"
      fillOpacity="0.2"
    />
    <path
      d="M8.68308 20.53V19.298C8.68308 19.2047 8.70641 19.1207 8.75308 19.046C8.79974 18.9667 8.87674 18.899 8.98408 18.843L11.5251 17.534C11.7304 17.4313 11.9707 17.3473 12.2461 17.282C12.1107 17.2493 11.9824 17.2143 11.8611 17.177C11.7444 17.135 11.6324 17.086 11.5251 17.03L8.98408 15.728C8.87674 15.672 8.79974 15.6067 8.75308 15.532C8.70641 15.4527 8.68308 15.3663 8.68308 15.273V14.041L14.2271 16.932V17.632L8.68308 20.53ZM20.7172 22.938V24.058H15.2012V22.938H20.7172Z"
      fill="white"
    />
  </svg>
)
export default Terminal
