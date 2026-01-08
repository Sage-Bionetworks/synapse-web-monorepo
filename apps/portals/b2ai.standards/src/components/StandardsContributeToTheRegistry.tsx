import React from 'react'
import { Button, Stack, Typography } from '@mui/material'

const StandardsContributeToTheRegistry = (): React.ReactNode => {
  const subtitle =
    'Help expand our catalog of biomedical research data standards by contributing your own. Submit your standards through our easy submission process to share them with the community and advance data harmonization. Join us in shaping the future of biomedical research!'
  const buttonText = 'Add a STANDARD to the registry'
  const buttonLink =
    'https://github.com/bridge2ai/b2ai-standards-registry/tree/main?tab=readme-ov-file#submitting-a-new-standard'

  return (
    <Stack sx={{ gap: '20px', alignItems: 'center' }}>
      <Typography
        sx={{
          lineHeight: 'normal',
          maxWidth: '456px',
        }}
      >
        {subtitle}
      </Typography>
      <Button
        variant="contained"
        href={buttonLink}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          padding: '6px 24px',
          alignSelf: 'center',
          border: '1px solid white',
          boxShadow: 'none !important',
          color: 'white !important',
        }}
      >
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '144%',
          }}
        >
          {buttonText}
        </Typography>
      </Button>
    </Stack>
  )
}

export default StandardsContributeToTheRegistry
