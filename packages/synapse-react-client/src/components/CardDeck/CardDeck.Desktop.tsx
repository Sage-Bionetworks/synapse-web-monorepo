import { CardDeckCardProps } from '@/components/CardDeck/CardDeckCardProps'
import LargeButton from '@/components/styled/LargeButton'
import { Link } from '@mui/material'
import classNames from 'classnames'

export default function CardDeckDesktop({
  title,
  description,
  ctaButtonText,
  ctaButtonURL,
  headerImage,
  titleIcon,
  cardDeckType,
}: CardDeckCardProps) {
  return (
    <div
      className={classNames(
        'CardDeck__Card',
        cardDeckType && `CardDeck__Card--${cardDeckType}`,
      )}
    >
      <div
        className={classNames(
          'CardDeck__Card__header__image',
          cardDeckType && `CardDeck__Card__header__image--${cardDeckType}`,
        )}
      >
        <Link href={ctaButtonURL}>{headerImage}</Link>
      </div>
      <div
        className={classNames(
          'CardDeck__Card__header',
          cardDeckType && `CardDeck__Card__header--${cardDeckType}`,
        )}
      >
        <div
          className={classNames(
            'CardDeck__Card__header__icon',
            cardDeckType && `CardDeck__Card__header__icon--${cardDeckType}`,
          )}
        >
          {titleIcon}
        </div>
        <div className="CardDeck__Card__header__info">
          <span
            className={classNames(
              'CardDeck__Card__header__info__title',
              cardDeckType &&
                `CardDeck__Card__header__info__title--${cardDeckType}`,
            )}
          >
            {' '}
            {['b2ai', 'b2ai-detail-card'].includes(cardDeckType ?? '') ? (
              <Link href={ctaButtonURL}>{title}</Link>
            ) : (
              title
            )}{' '}
          </span>
        </div>
      </div>
      <div
        className={classNames(
          `CardDeck__Card__summary`,
          cardDeckType && `CardDeck__Card__summary--${cardDeckType}`,
        )}
      >
        <p> {description} </p>
        {['b2ai', 'b2ai-detail-card'].includes(cardDeckType ?? '') ? null : (
          <LargeButton
            color="primary"
            variant="outlined" // Update variant based on cardDeckType
            href={ctaButtonURL}
            sx={{
              maxWidth: '200px',
              fontSize: '14px',
              boxShadow: 'none',
              borderColor: 'primary.main',
              color: 'primary.main',
            }}
          >
            {ctaButtonText}
          </LargeButton>
        )}
      </div>
    </div>
  )
}
