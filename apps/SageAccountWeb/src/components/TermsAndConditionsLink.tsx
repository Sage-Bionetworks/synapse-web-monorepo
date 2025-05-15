import { Button, SxProps } from '@mui/material'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'

export type TermsAndConditionsLinkProps = {
  sx?: SxProps
}

export function TermsAndConditionsLink({ sx }: TermsAndConditionsLinkProps) {
  return (
    <Button
      variant="text"
      href={SynapseConstants.URL_TERMS_CONDITIONS_AGREEMENT}
      target="_blank"
      sx={sx}
    >
      View and Complete Terms and Conditions for Use
    </Button>
  )
}
