import NamshubHeader from '@sage-bionetworks/synapse-portal-framework/components/namshub/NamshubHeader'
import NamshubAbout from '@sage-bionetworks/synapse-portal-framework/components/namshub/NamshubAbout'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { RssFeedCards } from 'synapse-react-client'
import DevelopedBySage from '@sage-bionetworks/synapse-portal-framework/components/DevelopedBySage'
import { ReactComponent as NYUGSOMLogo } from '../assets/NYUGSOM.svg'
import { ReactComponent as SageLogo } from '@sage-bionetworks/synapse-portal-framework/components/assets/sage-logo.svg'
import { Link } from '@mui/material'
import styles from './Homepage.module.scss'

export default function Homepage() {
  return (
    <>
      <NamshubHeader />
      <NamshubAbout />
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
      <div className={styles.termsAndConditions}>
        <DevelopedBySage />
      </div>
      <div className={styles.logoContainer}>
        <Link href="https://med.nyu.edu" target="_blank" rel="noreferrer">
          <NYUGSOMLogo />
        </Link>
        <Link
          href="https://sagebionetworks.org/platform/synapse"
          target="_blank"
          rel="noreferrer"
        >
          <SageLogo />
        </Link>
      </div>
    </>
  )
}
