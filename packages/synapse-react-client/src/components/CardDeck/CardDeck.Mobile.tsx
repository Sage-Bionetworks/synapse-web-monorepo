import LargeButton from '@/components/styled/LargeButton'
import ExpandableContent from '../home_page/ExpandableContent'
import { ImageFileHandle } from '../widgets/ImageFileHandle'
import { CardDeckDataProps } from './CardDeck'
import { Link } from '@mui/material'

export default function CardDeckMobile({
  description,
  title,
  titleIconFileHandleAssociation,
  ctaButtonText,
  ctaButtonURL,
  cardDeckType,
}: CardDeckDataProps) {
  const titleElement = (
    <div className="CardDeck__Mobile__Header">
      <span className="CardDeck__Mobile__Header__icon">
        {titleIconFileHandleAssociation && (
          <ImageFileHandle
            fileHandleAssociation={titleIconFileHandleAssociation}
          />
        )}
      </span>
      <span className="CardDeck__Mobile__Header__Title"> {title} </span>
    </div>
  )
  const content = (
    <div className="CardDeck__Mobile__Content">
      <p>{description}</p>
      {cardDeckType === 'b2ai' ? (
        <Link href={ctaButtonURL} underline="none">
          {ctaButtonText}
        </Link>
      ) : (
        <LargeButton
          color="secondary"
          variant="outlined" // Update variant based on cardDeckType
          href={ctaButtonURL}
          sx={{
            width: '170px',
            marginLeft: 0,
            fontSize: '14px',
            boxShadow: 'none',
            color: 'primary.main',
          }}
        >
          {ctaButtonText}
        </LargeButton>
      )}
    </div>
  )
  return <ExpandableContent title={titleElement} content={content} />
}
