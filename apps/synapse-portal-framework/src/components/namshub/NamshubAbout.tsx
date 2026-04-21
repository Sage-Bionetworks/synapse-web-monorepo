import { Stack, Typography } from '@mui/material'
import styles from './NamshubAbout.module.scss'
import { ReactComponent as AboutImage } from './assets/namshub-about.svg'
import { ColoredBulletListItem } from 'synapse-react-client'
import { SectionLayout } from '../SectionLayout'

function NamshubAbout() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutImageContainer}>
        <AboutImage className={styles.aboutImage} />
      </div>
      <Stack className={styles.aboutTextContainer}>
        <div className={styles.aboutTitle}>
          <SectionLayout
            title="About New Approach Methodologies Hub"
            titleNode={
              <>
                About <b>N</b>ew <b>A</b>pproach <b>M</b>ethodologies Hub
              </>
            }
          />
        </div>
        <Typography variant="body1" className={styles.aboutTextColor}>
          Researchers developing new drugs or studying human diseases often rely
          on animal models that don't accurately reflect human biology. A
          growing body of research points to human-based alternatives, such as
          organ-on-chip devices and organoids grown from patient cells,
          collectively called <b>N</b>ew <b>A</b>pproach <b>M</b>ethodologies
          (NAMs), as more reliable tools for modeling human health and disease.
        </Typography>
        <Typography variant="body1" className={styles.aboutTextColor}>
          The NAM Hub will enable the standardization, harmonization, and
          sharing of datasets - from molecular tests to 3D cultures to simulated
          population outcomes. The hub will serve as the consortium’s backbone
          for data, metadata, code, and computational models; provide
          AI-augmented data curation and a framework for harmonizing NAMs data
          across the consortium; and be a source of analytical tools to help
          researchers work with datasets.
        </Typography>
        <span className={styles.aboutTextColor}>
          <ColoredBulletListItem
            bulletColor="#b9c83c"
            mainText="Join our growing network of researchers"
          />
          <ColoredBulletListItem
            bulletColor="#b9c83c"
            mainText="Explore shared datasets, tools, and other resources"
          />
        </span>
      </Stack>
    </div>
  )
}

export default NamshubAbout
