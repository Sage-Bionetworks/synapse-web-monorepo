import { Typography, Box, Stack } from '@mui/material'
import styles from './ChallengeMetrics.module.scss'
import { ReactComponent as BkgImage } from '../assets/metricsBkg.svg'

interface StatContainerProps {
  stat: string
  label: string
  description: string
}

const StatContainer = ({ stat, label, description }: StatContainerProps) => (
  <Stack className={styles.statContainer}>
    <Typography variant="headline1" className={styles.statHeaderText}>
      {stat}
    </Typography>
    <Typography className={styles.statLabelText}>{label}</Typography>
    <Typography className={styles.statDescriptionText}>
      {description}
    </Typography>
  </Stack>
)

const metricsData = [
  {
    stat: "273",
    label: "total challenges run",
    description: "with over 7,000 participants from 34 different countries and 248 different institutions",
  },
  {
    stat: "$592,985",
    label: "won in challenge prizes",
    description: "and work published in over 297 journals and presented at over 80 research symposiums",
  },
  {
    stat: "38",
    label: "disease areas positively impacted",
    description: "including Alzheimer’s, AML leukemia, Rheumatoid Arthritis, lung cancer and more.",
  },
]

const ChallengeMetrics = () => {
  return (
    <Box className={styles.root}>
      <BkgImage className={styles.bkgImage} preserveAspectRatio="none" />
      <Stack className={styles.metricsContainer}>
        {metricsData.map((metric, idx) => (
          <StatContainer
            key={idx}
            stat={metric.stat}
            label={metric.label}
            description={metric.description}
          />
        ))}
      </Stack>
    </Box>
  )
}

export default ChallengeMetrics
