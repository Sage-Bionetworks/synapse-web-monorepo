import { CardDeckDataProps } from './CardDeck'
import LargeButton from '../../components/styled/LargeButton'
import { ImageFileHandle } from '../widgets/ImageFileHandle'

export default function CardDeckDesktop({
  title,
  description,
  ctaButtonText,
  ctaButtonURL,
  titleIconFileHandleAssociation,
  headerImageFileHandleAssociation,
  color,
}: CardDeckDataProps) {
  return (
    <div className="Programs__Card">
      <div className="Programs__Card__header__image">
        {headerImageFileHandleAssociation && (
          <ImageFileHandle
            fileHandleAssociation={headerImageFileHandleAssociation}
          />
        )}
      </div>
      <div
        className="Programs__Card__header"
        style={{ backgroundColor: color.replace(')', ',.05)') }}
      >
        <div className="Programs__Card__header__icon">
          {titleIconFileHandleAssociation && (
            <ImageFileHandle
              fileHandleAssociation={titleIconFileHandleAssociation}
            />
          )}
        </div>
        <div className="Programs__Card__header__info">
          <span className="Programs__Card__header__info__title"> {title} </span>
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
      <div className="Programs__Card__summary">
        <p> {description} </p>
        <LargeButton
          color="secondary"
          variant="contained"
          href={ctaButtonURL}
          sx={{ width: '120px', marginLeft: 0 }}
        >
          {ctaButtonText}
        </LargeButton>
      </div>
    </div>
  )
}
