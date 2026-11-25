import { Stack, Typography } from '@mui/material'
import HubAndSpokes, {
  Spoke,
} from 'synapse-react-client/components/HubAndSpokes/HubAndSpokes'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import styles from './NamhubTechnologyDevelopmentCenters.module.scss'
import hubImageUrl from '@/assets/tdc/namhub-hub.png'
import mitLogoUrl from '@/assets/tdc/mit.png'
import cincinnatiLogoUrl from '@/assets/tdc/cincinnati.png'
import jhuLogoUrl from '@/assets/tdc/jhu.png'
import tamuLogoUrl from '@/assets/tdc/tamu.png'
import mdAndersonLogoUrl from '@/assets/tdc/mdanderson.png'
import ncatsLogoUrl from '@/assets/tdc/ncats.png'
import harvardLogoUrl from '@/assets/tdc/harvard.png'
import stanfordLogoUrl from '@/assets/tdc/stanford.png'

const TDC_SITE_URL = 'https://nhdcc.wpenginepowered.com'

const technologyDevelopmentCenters: Spoke[] = [
  {
    label: 'Gynecological Diseases',
    href: `${TDC_SITE_URL}/mit-nams_tdc-wh/`,
    imageUrl: mitLogoUrl,
    imageAlt: 'Massachusetts Institute of Technology',
  },
  {
    label: 'GI Diseases',
    href: `${TDC_SITE_URL}/cch-nams-gi-diseases-and-drug-response-prediction/`,
    imageUrl: cincinnatiLogoUrl,
    imageAlt: "Cincinnati Children's",
  },
  {
    label: 'Cognitive Functions',
    href: `${TDC_SITE_URL}/jhu-droidp/`,
    imageUrl: jhuLogoUrl,
    imageAlt: 'Johns Hopkins Medicine',
  },
  {
    label: 'Toxicology of Chemicals',
    href: `${TDC_SITE_URL}/tamu-nams-decision-ctr-industrial-and-consumer-use-chemicals/`,
    imageUrl: tamuLogoUrl,
    imageAlt: 'Texas A&M University',
  },
  {
    label: 'Oncology',
    href: `${TDC_SITE_URL}/utmdanderson-optima/`,
    imageUrl: mdAndersonLogoUrl,
    imageAlt: 'UT MD Anderson Cancer Center',
  },
  {
    label: 'Fibrotic Pathologies',
    href: `${TDC_SITE_URL}/ncats-3d-mofib/`,
    imageUrl: ncatsLogoUrl,
    imageAlt: 'NIH National Center for Advancing Translational Sciences',
  },
  {
    label: 'Musculoskeletal System',
    href: `${TDC_SITE_URL}/bwh-msk-system/`,
    imageUrl: harvardLogoUrl,
    imageAlt: 'Harvard Medical School',
  },
  {
    label: 'Cardiac Disease',
    href: `${TDC_SITE_URL}/stanford-coin/`,
    imageUrl: stanfordLogoUrl,
    imageAlt: 'Stanford Medicine School of Medicine',
  },
]

function NamhubTechnologyDevelopmentCenters() {
  return (
    <div className={styles.container}>
      <Stack className={styles.textContainer}>
        <div className={styles.title}>
          <SectionLayout title="About Technology Development Centers" />
        </div>
        <Typography variant="body1" className={styles.text}>
          The primary data producers for the NAMHub are the Technology
          Development Centers (TDCs). These centers generate experimental,
          simulations and validation data related to various NAMs. Click to
          explore each TDC.
        </Typography>
      </Stack>
      <div className={styles.wheelContainer}>
        <HubAndSpokes
          hubImageUrl={hubImageUrl}
          hubImageAlt="NYU Grossman School of Medicine and Sage Bionetworks: NAMHub, NAMs Open Ecosystem Data Hub and Coordinating Center"
          spokes={technologyDevelopmentCenters}
        />
      </div>
    </div>
  )
}

export default NamhubTechnologyDevelopmentCenters
