import NamhubHeader from '@sage-bionetworks/synapse-portal-framework/components/namhub/NamhubHeader'
import NamhubAbout from '@sage-bionetworks/synapse-portal-framework/components/namhub/NamhubAbout'
import DevelopedBySage from '@sage-bionetworks/synapse-portal-framework/components/DevelopedBySage'
import { ReactComponent as NYUGSOMLogo } from '../assets/NYUGSOM.svg'
import { ReactComponent as SageLogo } from '@sage-bionetworks/synapse-portal-framework/components/assets/sage-logo.svg'
import { Link } from '@mui/material'
import styles from './HomePage.module.scss'

export default function Homepage() {
  return (
    <>
      <NamhubHeader />
      <NamhubAbout />
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
