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
            color="secondary"
            variant={cardDeckType === 'cckp' ? 'outlined' : 'contained'} // Update variant based on cardDeckType
            href={ctaButtonURL}
            sx={{
              marginLeft: 0,
              fontSize: '14px',
              boxShadow: 'none',
              color: 'primary.main',
              '&:hover': {
                backgroundColor: 'primary.main',
                color: 'white',
              },
              ...(cardDeckType === 'cckp' && {
                width: '170px',
                borderColor: 'primary.main',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                },
              }),
            }}
          >
            {ctaButtonText}
          </LargeButton>
        )}
      </div>
    </div>
  )
}
