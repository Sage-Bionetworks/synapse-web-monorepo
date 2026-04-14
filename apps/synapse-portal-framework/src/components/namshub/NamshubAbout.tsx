import { Stack, Typography } from '@mui/material'
import styles from './NamshubAbout.module.scss'
import { ReactComponent as AboutImage } from './assets/namshub-about.svg'
import { ColoredBulletListItem } from 'synapse-react-client'

function NamshubAbout() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutImageContainer}>
        <AboutImage className={styles.aboutImage} />
      </div>
      <Stack className={styles.aboutTextContainer}>
        <Typography variant="headline1" className={styles.aboutTitle}>
          About NAM Hub
        </Typography>
        <Typography variant="body1">
          The Complement-ARIE NAMHub brings together experimental,
          computational, clinical, and regulatory expertise from the Technology
          development centers (TDCs) and Validation and Qualification Network
          (VQNs).
        </Typography>
        <Typography variant="body1">
          The NAMHub connects members developing New Approach Methodologies
          (NAMs) through FAIR data and computational models to accelerate
          progress of the NAMs ecosystem.
        </Typography>
        <ColoredBulletListItem
          bulletColor="#68bfdd"
          mainText="Learn from experts"
          subText="through talks on emerging NAMs technologies"
        />
        <ColoredBulletListItem
          bulletColor="#b9c83c"
          mainText="Stay connected"
          subText="with a growing community of academics"
        />
        <ColoredBulletListItem
          bulletColor="#7f9aec"
          mainText="Access shared resources"
          subText="that support collaboration"
        />
      </Stack>
    </div>
  )
}

export default NamshubAbout
