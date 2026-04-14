// import { usePortalContext } from '@/components/PortalContext'
import styles from './NamshubHeader.module.scss'
import { Stack } from '@mui/material'
import { ReactComponent as HeaderImage } from './assets/namshub-header-background.svg'

function NamshubHomePageHeader() {
  const title = 'Advancing NAMs through shared dialogue'
  const description =
    'Explore Data, Models, and more generated from the New Approach Methodologies (NAMs) in the Complement-ARIE NAMHub'

  return (
    <div className={styles.headerContainer}>
      <Stack className={styles.headerTextContainer}>
        <div className={styles.headerText}>{title}</div>
        <div className={styles.descriptionText}>{description}</div>
      </Stack>
      <HeaderImage className={styles.headerImage} />
    </div>
  )
}

export default NamshubHomePageHeader
