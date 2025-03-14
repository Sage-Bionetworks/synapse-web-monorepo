import { CardDeckDataProps } from './CardDeck'
import ExpandableContent from '../home_page/ExpandableContent'
import LargeButton from '../../components/styled/LargeButton'
import { ImageFileHandle } from '../widgets/ImageFileHandle'

export default function CardDeckMobile({
  //link,
  description,
  title,
  color,
  titleIconFileHandleAssociation,
  ctaButtonText,
  ctaButtonURL,
}: CardDeckDataProps) {
  const titleElement = (
    <div className="Programs__Mobile__Header">
      <span className="Programs__Card__header__icon">
        {titleIconFileHandleAssociation && (
          <ImageFileHandle
            fileHandleAssociation={titleIconFileHandleAssociation}
          />
        )}
      </span>
      <span className="Programs__Mobile__Header__Title"> {title} </span>
    </div>
  )
  const content = (
    <div className="Programs__Mobile__Content">
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
      <p>{description}</p>
      <LargeButton
        color="secondary"
        variant="contained"
        href={ctaButtonURL}
        sx={{ marginLeft: 0 }}
      >
        {ctaButtonText}
      </LargeButton>
    </div>
  )
  return <ExpandableContent title={titleElement} content={content} />
}
