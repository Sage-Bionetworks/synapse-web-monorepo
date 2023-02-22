import React from 'react'
import { Grid } from '@mui/material'
import { Typography } from 'synapse-react-client'
import SourceAppConfigs from './SourceAppConfigs'
import { sage } from 'configs/sagebionetworks'
import { Box } from '@mui/system'
import { mtb } from 'configs/mtb'
import ShowMore from 'synapse-react-client/dist/containers/row_renderers/utils/ShowMore'
import { IconButton } from '@mui/material'
import theme from 'style/theme'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useHistory } from 'react-router'

export type SageResourcesPageProps = {}

export const SageResourcesPage = (props: SageResourcesPageProps) => {
  const history = useHistory()
  return (
    <Box
      className="SageResourcesPage"
      sx={{ marginLeft: '60px', marginRight: '60px', marginTop: '50px' }}
    >
      <IconButton
        onClick={() => {
          history.goBack()
        }}
        sx={{
          position: 'absolute',
          top: theme.spacing(1.5),
          left: theme.spacing(1.5),
        }}
      >
        <ArrowBackIcon />
      </IconButton>
      <Box
        sx={{
          backgroundColor: '#3959790D',
          padding: '30px',
          marginBottom: '40px',
        }}
      >
        <div className="SageLogo">{sage.logo}</div>
        <Typography
          variant="body1"
          sx={{ marginTop: '30px', paddingBottom: '30px', fontWeight: 500 }}
        >
          Your Sage Account gets you access to all these tools.
        </Typography>

        <Typography
          variant="body2"
          sx={{ paddingBottom: '30px', fontWeight: 500 }}
        >
          Sage Bionetworks creates resources to help speed the translation of
          science into medicine.
        </Typography>
        <Typography
          variant="body2"
          sx={{ paddingBottom: '30px', fontWeight: 500 }}
        >
          Your Sage Account can be used across all these different products. You
          can manage your account at{' '}
          <a href="/authenticated/myaccount">accounts.sagebionetwork.org</a>
        </Typography>
      </Box>
      <div>
        <Grid container spacing={5} mx={{ paddingTop: '20px' }}>
          {SourceAppConfigs.map(config => {
            if (config.appId != mtb.appId && config.appId != sage.appId) {
              return (
                <Grid item xs={4} className="sourceAppItem" key={config.appId}>
                  <a href={config.appURL}>{config.logo}</a>
                  <Typography
                    variant="body2"
                    sx={{ paddingBottom: '30px', fontWeight: 500 }}
                  >
                    <ShowMore summary={config.description} />
                  </Typography>
                </Grid>
              )
            } else {
              return <></>
            }
          })}
        </Grid>
      </div>
    </Box>
  )
}
