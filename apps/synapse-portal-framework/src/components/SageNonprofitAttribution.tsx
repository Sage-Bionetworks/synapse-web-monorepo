import { Box, Link, Typography } from '@mui/material'

function SageNonprofitAttribution() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        opacity: 0.7,
      }}
    >
      <Typography
        variant="caption"
        component="p"
        sx={{ lineHeight: 1.5, color: 'inherit' }}
      >
        Developed by{' '}
        <Link
          href="https://sagebionetworks.org"
          target="_blank"
          rel="noreferrer"
          color="inherit"
          underline="always"
        >
          Sage Bionetworks
        </Link>
        , a 501(c)(3) nonprofit research organization {'·'} EIN 26-4489946
        {' · '}
        <Link
          href="https://sagebionetworks.org/trust-center"
          target="_blank"
          rel="noreferrer"
          color="inherit"
          underline="always"
        >
          Trust Center
        </Link>
        {' · '}
        <Link
          href="https://projects.propublica.org/nonprofits/organizations/264489946"
          target="_blank"
          rel="noreferrer"
          color="inherit"
          underline="always"
        >
          IRS Form 990
        </Link>
      </Typography>
    </Box>
  )
}

export default SageNonprofitAttribution
