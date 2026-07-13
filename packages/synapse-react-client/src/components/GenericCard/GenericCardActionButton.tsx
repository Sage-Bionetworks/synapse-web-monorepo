import { Button } from '@mui/material'
import { styled } from '@mui/system'
import { forwardRef } from 'react'
import { useCardActionButtonStyle } from './CardActionButtonStyleContext'

const startIconStyle = {
  '& .MuiButton-startIcon': { marginRight: '4px', marginLeft: 0 },
}

// Enforced fixed heights (height + minHeight + border-box) so every action button
// is the same height regardless of its icon size or label, with content centered.
const COMPACT_HEIGHT = '28px'
const PILL_HEIGHT = '32px'

/** The default compact style. */
const CompactButton = styled(Button)({
  height: COMPACT_HEIGHT,
  minHeight: COMPACT_HEIGHT,
  boxSizing: 'border-box',
  padding: '0 8px',
  borderColor: 'grey.400',
  fontWeight: 700,
  lineHeight: '20px',
  whiteSpace: 'nowrap',
  ...startIconStyle,
})

/** Pill style, used when actionButtonStyle === 'chip'. */
const PillButton = styled(Button)({
  height: PILL_HEIGHT,
  minHeight: PILL_HEIGHT,
  boxSizing: 'border-box',
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
