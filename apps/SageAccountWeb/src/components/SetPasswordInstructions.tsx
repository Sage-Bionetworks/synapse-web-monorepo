import React from 'react'
import Typography from '@mui/material/Typography'

export type SetPasswordInstructionsProps = {
  title: string
}

const SetPasswordInstructions = (
  props: SetPasswordInstructionsProps,
): React.ReactNode => (
  <div>
    <Typography variant="headline2">{props.title}</Typography>
    <Typography variant="smallText1">
      We recommend using a strong, unique <strong>password</strong> of between
      8-32 characters. A valid password must be at least 8 characters long and
      must include letters, digits (0-9), and special characters
      ~!@#$%^&*_-+=`|\(){}[]:;&quot;&apos;&lt;&gt;,.?/
    </Typography>
  </div>
)

export default SetPasswordInstructions
