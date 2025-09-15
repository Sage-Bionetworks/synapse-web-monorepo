import { ReactNode } from 'react'

export type CardDeckCardProps = {
  title: string /* title of card */
  description: string /* description of card */
  ctaButtonText: string /* call to action button text */
  ctaButtonURL: string /* call to action button URL */
  titleIcon?: ReactNode /* icon to be displayed on the card */
  headerImage?: ReactNode /* header image to be displayed on the card */
  cardDeckType?:
    | 'cckp'
    | 'b2ai'
    | 'b2ai-detail-card' /* The type of card deck (cckp or b2ai)*/
}
