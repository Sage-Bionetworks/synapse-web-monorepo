import React from 'react'
import { SortOrder } from '@sage-bionetworks/react-base-table'
import { Direction } from '@sage-bionetworks/synapse-types'

type SortIconProps = {
  direction: Direction | SortOrder | 'ASC' | 'DESC'
  active: boolean
}

const SortIcon: React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & SortIconProps
> = ({ direction, active, ...props }) => (
  <svg
    {...props}
    className={`SRC-Sort-Icon-${active ? 'Active' : 'Inactive'} ${
      props.className ?? ''
    }`}
    width="21"
    height="17"
    viewBox="0 0 21 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {(direction as string).toUpperCase() === 'DESC' ? (
      <path
        className="SRC-Sort-Path"
        d="M8.5 9V7H16.5V9H8.5ZM8.5 15V13H12.5V15H8.5ZM8.5 3V1H20.5V3H8.5ZM4.5 13H7L3.5 16.5L0 13H2.5V0H4.5V13Z"
        fill="#9E9E9E"
      />
    ) : (
      <path
        className="SRC-Sort-Path"
        d="M12.5 8L12.5 10L4.5 10V8H12.5ZM12.5 2V4H8.5V2H12.5ZM12.5 14V16H0.5V14L12.5 14ZM16.5 4H14L17.5 0.5L21 4H18.5V17H16.5V4Z"
        fill="#9E9E9E"
      />
    )}
  </svg>
)

export default SortIcon
