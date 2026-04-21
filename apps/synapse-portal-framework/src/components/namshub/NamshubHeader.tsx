// import { usePortalContext } from '@/components/PortalContext'
import styles from './NamshubHeader.module.scss'
import { Link, Stack } from '@mui/material'
import { ReactComponent as HeaderImage } from './assets/namshub-header-background.svg'
import { RssFeedCards } from 'synapse-react-client'
import { SectionLayout } from '../SectionLayout'

function NamshubHomePageHeader() {
  const title = (
    <>
      New Methods. <br /> New Discoveries.
    </>
  )
  const description = (
    <>
      Explore datasets, models, and more shared on the <b>N</b>ew <b>A</b>
      pproach <b>M</b>ethodologies Hub.
      <br /> <br />{' '}
      <Link
        href="https://commonfund.nih.gov/complementarie"
        target="_blank"
        rel="noreferrer"
      >
        Learn more
      </Link>{' '}
      about the NIH Complement Animal Research In Experimentation
      (Complement-ARIE) program.
    </>
  )

  return (
    <Stack className={styles.headerContainer}>
      <div className={styles.topSectionContainer}>
        <Stack className={styles.headerTextContainer}>
          <div className={styles.headerText}>{title}</div>
          <div className={styles.descriptionText}>{description}</div>
        </Stack>
        <HeaderImage className={styles.headerImage} />
      </div>
      <div className={styles.eventSection}>
        <SectionLayout title="Events" centerTitle>
          <RssFeedCards
            url="https://nhdcc.wpenginepowered.com"
            itemsToShow={2}
            allowCategories={[]}
            viewAllNewsButtonText="View All Events"
          />
        </SectionLayout>
      </div>
    </Stack>
  )
}

export default NamshubHomePageHeader
