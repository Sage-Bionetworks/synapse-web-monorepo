import NamhubHeader from '@sage-bionetworks/synapse-portal-framework/components/namhub/NamhubHeader'
import NamhubAbout from '@/components/NamhubAbout'
import NamhubTechnologyDevelopmentCenters from '@/components/NamhubTechnologyDevelopmentCenters'
import DevelopedBySage from '@sage-bionetworks/synapse-portal-framework/components/DevelopedBySage'
import nyuGsomLogoUrl from '../assets/NYUGSOM.png'
import { ReactComponent as SageLogo } from '@sage-bionetworks/synapse-portal-framework/components/assets/sage-logo.svg'
import { Link } from '@mui/material'
import styles from './HomePage.module.scss'
import type { MetaArgs, MetaDescriptor } from 'react-router'
import { mergeMeta } from '@sage-bionetworks/synapse-portal-framework/utils/mergeMeta'

export function meta(args: MetaArgs): MetaDescriptor[] {
  const portalDescription = import.meta.env.VITE_PORTAL_DESCRIPTION
  const portalUrl = `https://${import.meta.env.VITE_PORTAL_KEY}.synapse.org`
  return mergeMeta(args, [
    { title: import.meta.env.VITE_PORTAL_NAME },
    { name: 'description', content: portalDescription },
    {
      'script:ld+json': {
        '@context': 'https://schema.org',
        '@type': 'DataCatalog',
        '@id': portalUrl,
        name: import.meta.env.VITE_PORTAL_NAME,
        description: portalDescription,
        provider: [
          {
            '@type': 'Organization',
            '@id': 'Sage Bionetworks',
            name: 'Sage Bionetworks',
            url: 'https://www.synapse.org/',
          },
        ],
      },
    },
  ])
}

export default function Homepage() {
  return (
    <>
      <NamhubHeader />
      <NamhubAbout />
      <NamhubTechnologyDevelopmentCenters />
      <div className={styles.termsAndConditions}>
        <DevelopedBySage />
      </div>
      <div className={styles.logoContainer}>
        <Link href="https://med.nyu.edu" target="_blank" rel="noreferrer">
          <img src={nyuGsomLogoUrl} alt="NYU Grossman School of Medicine" />
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
