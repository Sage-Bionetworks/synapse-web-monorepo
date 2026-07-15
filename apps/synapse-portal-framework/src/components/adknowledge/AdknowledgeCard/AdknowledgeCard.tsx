import { Button, Stack, Typography, Link as MuiLink } from '@mui/material'
import styles from './AdknowledgeCard.module.scss'
import { isExternalLink } from 'synapse-react-client/utils/functions/IsExternalLink'
import { Link as RouterLink } from 'react-router'

type AdknowledgeCardProps = {
  title?: React.ReactNode
  Image?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  description?: React.ReactNode
  buttonText?: React.ReactNode
  buttonLink?: string
}

function AdknowledgeCard({
  title,
  Image,
  description,
  buttonText,
  buttonLink,
}: AdknowledgeCardProps) {
  const isExternal = isExternalLink(buttonLink ?? '')
  const renderCardAsLink = buttonLink && !buttonText

  const cardContent = (
    <>
      {Image && <Image />}
      <div className={styles.textContainer}>
        {title && (
          <Typography
            variant="headline1"
            className={styles.adknowledgeCardTitle}
          >
            {title}
          </Typography>
        )}
        {description && (
          <Typography
            variant="smallText1"
            className={styles.adknowledgeCardDescription}
          >
            {description}
          </Typography>
        )}
      </div>
      {buttonLink && buttonText && (
        <Button
          component={isExternal ? MuiLink : RouterLink}
          variant="contained"
          {...(isExternal
            ? {
                href: buttonLink,
                target: '_blank',
                rel: 'noopener noreferrer',
              }
            : { to: buttonLink })}
        >
          {buttonText}
        </Button>
      )}
    </>
  )

  return renderCardAsLink ? (
    <MuiLink
      className={`${styles.adknowledgeCardContainer} ${renderCardAsLink ? styles.linkCard : ''}`}
      href={buttonLink}
      target="_blank"
      rel="noopener noreferrer"
      underline="none"
    >
      {cardContent}
    </MuiLink>
  ) : (
    <Stack className={styles.adknowledgeCardContainer}>{cardContent}</Stack>
  )
}

export default AdknowledgeCard
