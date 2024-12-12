import { ButtonHTMLAttributes } from 'react'
import IconSvg from '../IconSvg'

type ExpandCollapseButtonProps = {
  isExpanded: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function ExpandCollapseButton(props: ExpandCollapseButtonProps) {
  const { isExpanded, ...buttonProps } = props
  return (
    <button {...buttonProps}>
      <IconSvg
        icon={isExpanded ? 'minusBoxOutline' : 'addBoxOutline'}
        sx={{
          color: 'grey.600',
          height: '16px',
          verticalAlign: 'top',
          '&:hover': {
            color: 'grey.700',
          },
        }}
      />
    </button>
  )
}
