import LargeButton from '@/components/styled/LargeButton'
import classNames from 'classnames'
import { ImageFileHandle } from '../widgets/ImageFileHandle'
import { CardDeckDataProps } from './CardDeck'
import { Link } from '@mui/material'

export default function CardDeckDesktop({
  title,
  description,
  ctaButtonText,
  ctaButtonURL,
  titleIconFileHandleAssociation,
  headerImageFileHandleAssociation,
  cardDeckType,
}: CardDeckDataProps) {
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
        {headerImageFileHandleAssociation && (
          <ImageFileHandle
            fileHandleAssociation={headerImageFileHandleAssociation}
          />
        )}
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
          {titleIconFileHandleAssociation && (
            <ImageFileHandle
              fileHandleAssociation={titleIconFileHandleAssociation}
            />
          )}
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
            {title}{' '}
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

        {cardDeckType === 'b2ai' ? (
          <Link href={ctaButtonURL} underline="none">
            {ctaButtonText}
          </Link>
        ) : (
          <LargeButton
            color="primary"
            variant="outlined" // Update variant based on cardDeckType
            href={ctaButtonURL}
            sx={{
              maxWidth: '170px',
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
