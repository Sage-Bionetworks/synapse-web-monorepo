import LargeButton from '@/components/styled/LargeButton'
import classNames from 'classnames'
import { ImageFileHandle } from '../widgets/ImageFileHandle'
import { CardDeckDataProps } from './CardDeck'

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
          {/* {link && (
            <p className="Programs__Card__header__info__link">
              <a
                className="highlight-link"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                Visit website
              </a>
            </p>
          )} */}
        </div>
      </div>
      <div
        className={classNames(
          `CardDeck__Card__summary`,
          cardDeckType && `CardDeck__Card__summary--${cardDeckType}`,
        )}
      >
        <p> {description} </p>
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
            ...(cardDeckType === 'b2ai' && {
              width: '200px',
              backgroundColor: 'white',
            }),
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
      </div>
    </div>
  )
}
