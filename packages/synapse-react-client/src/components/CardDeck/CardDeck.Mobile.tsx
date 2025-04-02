import LargeButton from '@/components/styled/LargeButton'
import ExpandableContent from '../home_page/ExpandableContent'
import { ImageFileHandle } from '../widgets/ImageFileHandle'
import { CardDeckDataProps } from './CardDeck'

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
      <span className="CardDeck__Card__header__icon">
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
      <LargeButton
        color="secondary"
        variant={cardDeckType === 'cckp' ? 'outlined' : 'contained'} // Update variant based on cardDeckType
        href={ctaButtonURL}
        sx={{
          marginLeft: 0,
          ...(cardDeckType === 'b2ai' && {
            width: '200px',
            fontSize: '14px',
            backgroundColor: 'white',
            boxShadow: 'none',
            color: 'primary.main',
            '&:hover': {
              backgroundColor: 'primary.main',
              color: 'white',
            },
          }),
          ...(cardDeckType === 'cckp' && {
            width: '170px',
            fontSize: '14px',
            boxShadow: 'none',
            borderColor: 'primary.main',
            color: 'primary.main',
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
  )
  return <ExpandableContent title={titleElement} content={content} />
}
