import { CardDeckCardProps } from '@/components/CardDeck/CardDeckCardProps'
import useShowDesktop from '@/utils/hooks/useShowDesktop'
import classNames from 'classnames'
import CardDeckDesktop from './CardDeck.Desktop'
import CardDeckMobile from './CardDeck.Mobile'

export type CardDeckProps = {
  cards: CardDeckCardProps[]
  cardDeckType?:
    | 'cckp'
    | 'b2ai'
    | 'b2ai-detail-card' /* The type of card deck (cckp or b2ai)*/
}

/**
 * UI for a 'deck' of cards.
 */
export function CardDeck(props: CardDeckProps) {
  const { cards, cardDeckType } = props
  const showDesktop = useShowDesktop()

  const className = `CardDeck${showDesktop ? '__Desktop' : ''}`

  return (
    <div
      className={classNames(
        className,
        cardDeckType && `${className}--${cardDeckType}`,
      )}
    >
      {cards.map((card, i) => {
        return showDesktop ? (
          <CardDeckDesktop key={i} cardDeckType={cardDeckType} {...card} />
        ) : (
          <CardDeckMobile cardDeckType={cardDeckType} {...card} />
        )
      })}
    </div>
  )
}

export default CardDeck
