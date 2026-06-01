import { Button, Typography, Stack } from '@mui/material'
import styles from './DataExplorer.module.scss'
import { useSmartLink } from '../SmartLink/useSmartLink'

type DataExplorerProps = {
  title?: React.ReactNode
  subtitle?: React.ReactNode
  buttonText?: string
  buttonLink?: string
  sql: string
}

export default function DataExplorer({
  title,
  subtitle,
  buttonText,
  buttonLink,
}: DataExplorerProps) {
  const hasTextSection = title || subtitle || buttonText
  const smartLinkProps = useSmartLink(buttonLink)

  return (
    <div className={styles.dataExplorerContainer}>
      {hasTextSection && (
        <Stack className={styles.dataExplorerTextContainer}>
          {title && (
            <Typography
              variant="headline1"
              className={styles.dataExplorerTitle}
            >
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography variant="body1" className={styles.dataExplorerSubtitle}>
              {subtitle}
            </Typography>
          )}
          <Button
            variant="contained"
            className={styles.dataExplorerButton}
            {...smartLinkProps}
          >
            {buttonText}
          </Button>
        </Stack>
      )}
      <>Right Section</>
    </div>
  )
}
