import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Typography from '@mui/material/Typography'
import { useLocalStorageValue } from '@react-hookz/web'
import { EXTERNAL_COMPUTE_ENV_DISCLAIMER } from '../../../utils/SynapseConstants'
import ConfirmationDialog from '../../ConfirmationDialog/index'

type ExternalPlatformDisclaimerProps = {
  showDisclaimer: boolean
  onConfirm: () => void
  onCancel: () => void
}

export function ExternalPlatformDisclaimer(
  props: ExternalPlatformDisclaimerProps,
) {
  const { showDisclaimer, onConfirm, onCancel } = props

  // disclaimerAcknowledged is tracking the checkbox state in localStorage to persist the user's choice
  const {
    value: disclaimerAcknowledgedLocalStorageValue,
    set: setDisclaimerAcknowledged,
  } = useLocalStorageValue<boolean>(EXTERNAL_COMPUTE_ENV_DISCLAIMER)
  const disclaimerAcknowledged = Boolean(
    disclaimerAcknowledgedLocalStorageValue,
  )

  return (
    <ConfirmationDialog
      open={showDisclaimer}
      title="Disclaimer"
      content={
        <>
          <Box
            sx={{
              backgroundColor: 'grey.100',
              marginBottom: '15px',
              padding: '20px',
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: 700, marginBottom: '10px' }}
            >
              Disclaimer
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '10px' }}>
              Sage Bionetworks may integrate with, and provide links to, compute
              environments as an alternative to downloading files. These
              integrations or provisions do not signify an endorsement of that
              particular environment by Sage Bionetworks or funders, nor does it
              alter the relationship between Sage Bionetworks, existing data
              contributors, project sponsors or funders, or computational
              providers.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '20px' }}>
              Furthermore, it is the responsibility of individual users to
              review the terms of data use for each compute environment, as well
              as for the portal or repository from which the data is sourced.
              Users must personally ensure that all data access terms and
              conditions are met.
            </Typography>
            <FormControlLabel
              control={<Checkbox />}
              label="I acknowledge and accept these terms"
              checked={disclaimerAcknowledged}
              onChange={(_event, checked) => setDisclaimerAcknowledged(checked)}
            />
          </Box>
        </>
      }
      confirmButtonProps={{
        children: 'Continue',
        disabled: !disclaimerAcknowledged,
      }}
      onConfirm={onConfirm}
      onCancel={onCancel}
      maxWidth="md"
    />
  )
}
