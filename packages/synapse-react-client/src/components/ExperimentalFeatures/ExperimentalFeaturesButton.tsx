import { InfoOutlined } from '@mui/icons-material'
import { Box, IconButton, Switch, Tooltip, Typography } from '@mui/material'
import styles from './ExperimentalFeaturesButton.module.scss'

type ExperimentalFeaturesButtonProps = {
  count: number
  onClick: () => void
}

const EXPERIMENTAL_FEATURES_LABEL = 'Experimental Features'
const experimentalFeaturesInfoText =
  'Experimental features give you early access to features that are still in development. Please note that we do not guarantee an absence of errors, and that the data created using these features may be lost during product upgrade.'

function ExperimentalFeaturesButton({
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
      <Switch
        className={styles.switch}
        color="secondary"
        checked={count > 0}
        onChange={onClick}
        checkedIcon={<span className={styles.countThumb}>{count}</span>}
        slotProps={{
          input: {
            'aria-label': `${EXPERIMENTAL_FEATURES_LABEL} (${count} enabled)`,
          },
        }}
      />
    </Box>
  )
}

export default ExperimentalFeaturesButton
