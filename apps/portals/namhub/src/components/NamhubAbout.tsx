import { Stack, Typography } from '@mui/material'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import styles from './NamhubAbout.module.scss'
import organoidImageUrl from '@/assets/organoid.png'

function NamhubAbout() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={organoidImageUrl} alt="" />
      </div>
      <Stack className={styles.textContainer}>
        <div className={styles.title}>
          <SectionLayout title="About New Approach Methodologies Hub" />
        </div>
        <Typography variant="body1">
          Researchers developing new drugs or studying human diseases often rely
          on animal models that don’t accurately reflect human biology. A
          growing body of research points to human-based alternatives, such as
          organ-on-chip devices and organoids grown from patient cells,
          collectively called New Approach Methodologies (NAMs), as more
          reliable tools for modeling human health and disease.
        </Typography>
        <Typography variant="body1">
          The NAM Hub will enable the standardization, harmonization, and
          sharing of datasets - from molecular tests to 3D cultures to simulated
          population outcomes - using a cloud architecture. The hub will serve
          as the consortium’s backbone for data, metadata, code, and
          computational models; provide AI-augmented data curation and a
          framework for harmonizing NAMs data across the consortium; and be a
          source of analytical tools to help researchers work with datasets.
        </Typography>
        <ul className={styles.highlights}>
          <li>Join our growing network of researchers.</li>
          <li>Explore shared datasets, tools, and other resources</li>
        </ul>
      </Stack>
    </div>
  )
}

export default NamhubAbout
