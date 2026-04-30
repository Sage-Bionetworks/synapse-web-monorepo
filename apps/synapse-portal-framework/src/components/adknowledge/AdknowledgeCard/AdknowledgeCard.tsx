import { Button, Stack, Typography } from '@mui/material'
import styles from './AdknowledgeCard.module.scss'

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
  return (
    <Stack className={styles.adknowledgeCardContainer}>
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
          variant="contained"
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {buttonText}
        </Button>
      )}
    </Stack>
  )
}

export default AdknowledgeCard
