import { Button } from '@mui/material'
import { styled } from '@mui/system'
import { forwardRef } from 'react'
import { useCardActionButtonStyle } from './CardActionButtonStyleContext'

const startIconStyle = {
  '& .MuiButton-startIcon': { marginRight: '4px', marginLeft: 0 },
}

/** The default compact style. */
const CompactButton = styled(Button)({
  height: '20px',
  padding: '2px 8px',
  borderColor: 'grey.400',
  fontWeight: 700,
  lineHeight: '20px',
  ...startIconStyle,
})

/** Pill style, matching the DatasetHostingButton chip (used when actionButtonStyle === 'chip'). */
const PillButton = styled(Button)({
  height: '32px',
  borderRadius: '16px',
  padding: '0 12px',
  borderColor: 'grey.400',
  fontWeight: 700,
  lineHeight: '20px',
  whiteSpace: 'nowrap',
  ...startIconStyle,
})

/**
 * Action button used across a card's action area (Cite As, Croissant, Share,
 * Download). Its shape follows the nearest `CardActionButtonStyleContext`:
 * compact by default, or pill-shaped when the card opts into `'chip'`.
 */
const GenericCardActionButton = forwardRef(function GenericCardActionButton(
  props: React.ComponentProps<typeof Button>,
  ref: React.Ref<HTMLButtonElement>,
) {
  const Styled =
    useCardActionButtonStyle() === 'chip' ? PillButton : CompactButton
  return <Styled ref={ref} {...props} />
}) as typeof Button

export default GenericCardActionButton
