import { createContext, useContext } from 'react'

/**
 * Visual style for a card's action buttons (Download/hosting, Cite As, Croissant,
 * Share). `'button'` (default) renders the compact GenericCardActionButton look;
 * `'chip'` renders pill-shaped chips (the hosting action becomes a colored Chip).
 * Set per card configuration via `actionButtonStyle`.
 */
export type CardActionButtonStyle = 'button' | 'chip'

export const CardActionButtonStyleContext =
  createContext<CardActionButtonStyle>('button')

export function useCardActionButtonStyle(): CardActionButtonStyle {
  return useContext(CardActionButtonStyleContext)
}
