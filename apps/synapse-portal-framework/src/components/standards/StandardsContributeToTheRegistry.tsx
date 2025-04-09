import { Button, Stack, Typography } from '@mui/material'
import { CTASectionWrapper } from 'synapse-react-client'

const StandardsContributeToTheRegistry = () => {
  const title = 'Contribute to the registry'
  const subtitle =
    'Help expand our catalog of biomedical research data standards by contributing your own. Submit your standards through our easy submission process to share them with the community and advance data harmonization. Join us in shaping the future of biomedical research!'
  const buttonText = 'Add a STANDARD to the registry'
  const buttonLink =
    'https://github.com/bridge2ai/b2ai-standards-registry/tree/main?tab=readme-ov-file#submitting-a-new-standard'

  const content = (
    <Stack sx={{ gap: '20px' }}>
      <Typography
        variant="headline2"
        sx={{
          fontWeight: 700,
          fontSize: '24px',
          lineHeight: 'normal',
          textTransform: 'uppercase',
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          lineHeight: 'normal',
          width: '456px',
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
  return (
    <CTASectionWrapper
      sx={{ padding: '60px 0' }}
      showBlobs={false}
      themeMode={'dark'}
      content={content}
    />
  )
}

export default StandardsContributeToTheRegistry
