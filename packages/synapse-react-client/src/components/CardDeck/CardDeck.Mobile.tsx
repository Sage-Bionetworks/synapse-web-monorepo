import { CardDeckCardProps } from '@/components/CardDeck/CardDeckCardProps'
import LargeButton from '@/components/styled/LargeButton'
import Link from '@mui/material/Link'
import ExpandableContent from '../home_page/ExpandableContent'

export default function CardDeckMobile({
  description,
  title,
  titleIcon,
  ctaButtonText,
  ctaButtonURL,
  cardDeckType,
}: CardDeckCardProps) {
  const titleElement = (
    <div className="CardDeck__Mobile__Header">
      <span className="CardDeck__Mobile__Header__icon">{titleIcon}</span>
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
