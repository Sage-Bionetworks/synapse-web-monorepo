import { StyledFormControl } from '@/components/StyledComponents'
import { TextField, Typography } from '@mui/material'

export type TermsAndConditionsSignatureProps = {
  canSign: boolean
  onSigned: (signatureComplete: boolean) => void
  expectedSignature: string
}

const tcSignatureTextSx = {
  fontWeight: '700',
  fontSize: '14px',
}

const tcSignatureFieldSx = {
  marginTop: '20px',
  '.MuiTextField-root': { marginTop: '0px' },
}

export function TermsAndConditionsSignature({
  canSign,
  onSigned,
  expectedSignature,
}: TermsAndConditionsSignatureProps) {
  return (
    <>
      <Typography variant="subtitle1" sx={tcSignatureTextSx}>
        After agreeing to the above terms, electronically sign this agreement by
        typing your full name, as it appears below, to acknowledge your
        agreement with the terms stated above. You must sign in order to
        proceed.
      </Typography>
      <StyledFormControl
        fullWidth
        variant="standard"
        margin="normal"
        sx={tcSignatureFieldSx}
      >
        <TextField
          fullWidth
          id="signature"
          name="signature"
          placeholder={`Type "${expectedSignature}" without the quotes to acknowledge your agreement`}
          disabled={!canSign}
          onChange={e => onSigned(e.target.value === expectedSignature)}
        />
      </StyledFormControl>
    </>
  )
}
