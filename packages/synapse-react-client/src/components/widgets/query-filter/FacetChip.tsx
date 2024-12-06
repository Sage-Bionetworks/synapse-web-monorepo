import { PropsWithChildren } from 'react'
import IconSvg from '../../IconSvg/IconSvg'

export type FacetChipProps = PropsWithChildren<{
  isChecked: boolean
  onClick: () => void
}>

export function FacetChip(props: FacetChipProps) {
  const { isChecked, onClick, children } = props
  return (
    <button className={`Chip ${isChecked ? 'Checked' : ''}`} onClick={onClick}>
      {children}
      <IconSvg
        icon={isChecked ? 'check' : 'add'}
        sx={{
          width: '14px',
          paddingLeft: '0.2rem',
        }}
      ></IconSvg>
    </button>
  )
}
