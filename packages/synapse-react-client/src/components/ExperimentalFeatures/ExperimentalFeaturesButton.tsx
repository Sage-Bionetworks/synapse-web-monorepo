import InfoOutlined from '@mui/icons-material/InfoOutlined'
import { Box, ButtonBase, IconButton, Tooltip, Typography } from '@mui/material'
import styles from './ExperimentalFeaturesButton.module.scss'

type ExperimentalFeaturesButtonProps = {
  isActive: boolean
  count: number
  onClick: () => void
}

const EXPERIMENTAL_FEATURES_LABEL = 'Experimental Features'
const experimentalFeaturesInfoText =
  'Experimental features give you early access to features that are still in development. Please note that we do not guarantee an absence of errors, and that the data created using these features may be lost during product upgrade.'

function ExperimentalFeaturesButton({
  isActive,
  count,
  onClick,
}: ExperimentalFeaturesButtonProps) {
  return (
    <Box className={styles.container}>
      <Typography variant="body1">{EXPERIMENTAL_FEATURES_LABEL}</Typography>
      <Tooltip title={experimentalFeaturesInfoText} arrow placement="top">
        <IconButton
          aria-label="About experimental features"
          color="inherit"
          sx={{ '&:hover': { backgroundColor: 'transparent' } }}
        >
          <InfoOutlined sx={{ verticalAlign: 'middle' }} />
        </IconButton>
      </Tooltip>
      <ButtonBase
        className={isActive ? `${styles.track} ${styles.active}` : styles.track}
        onClick={onClick}
        aria-haspopup="dialog"
        aria-label={`${EXPERIMENTAL_FEATURES_LABEL} (${count} enabled)`}
      >
        <span className={styles.thumb}>{count > 0 && count}</span>
      </ButtonBase>
    </Box>
  )
}

export default ExperimentalFeaturesButton
