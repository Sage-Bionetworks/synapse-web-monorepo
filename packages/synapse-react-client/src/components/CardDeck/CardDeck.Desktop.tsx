import { CardDeckDataProps } from './CardDeck'
import LargeButton from '../../components/styled/LargeButton'
import { ImageFileHandle } from '../widgets/ImageFileHandle'
import classNames from 'classnames'

export default function CardDeckDesktop({
  title,
  description,
  ctaButtonText,
  ctaButtonURL,
  titleIconFileHandleAssociation,
  headerImageFileHandleAssociation,
  cardDeckType,
  color,
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
      <div className="CardDeck__Card__summary">
        <p> {description} </p>
        <LargeButton
          color="secondary"
          variant={cardDeckType === 'ccpk' ? 'outlined' : 'contained'} // Update variant based on cardDeckType
          href={ctaButtonURL}
          sx={{
            width: '120px',
            marginLeft: 0,
            ...(cardDeckType === 'b2ai' && {
              width: '200px',
              fontSize: '14px',
              backgroundColor: 'white',
              boxShadow: 'none',
              color: '#395979',
            }),
            ...(cardDeckType === 'ccpk' && {
              width: '170px',
              fontSize: '14px',
              boxShadow: 'none',
              borderColor: '#314C83',
              color: '#314C83',
            }),
          }}
        >
          {ctaButtonText}
        </LargeButton>
      </div>
    </div>
  )
}
