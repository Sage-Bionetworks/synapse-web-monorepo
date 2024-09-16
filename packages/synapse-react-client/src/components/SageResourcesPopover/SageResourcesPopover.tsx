import React from 'react'
import {
  Box,
  Button,
  ButtonProps,
  Grid,
  Popover,
  Typography,
  useTheme,
} from '@mui/material'
import { ShowMore } from 'synapse-react-client'
import { useSourceAppConfigs } from '../../utils/hooks'

export type SageResourcesPopoverProps = {
  sourceAppConfigTableID: string
  buttonProps?: ButtonProps
}

export const SageResourcesPopover: React.FC<SageResourcesPopoverProps> = ({
  sourceAppConfigTableID,
  buttonProps,
}) => {
  const theme = useTheme()
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)
  const sourceAppConfigs = useSourceAppConfigs(sourceAppConfigTableID)
  return (
    <div>
      <Button variant="contained" {...buttonProps} onClick={handleClick}>
        Portals
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box
          sx={{
            px: { xs: '0px', sm: theme.spacing(8) },
            paddingTop: { xs: '0px', sm: theme.spacing(8) },
            position: 'relative',
          }}
        >
          <Box
            sx={{
              backgroundColor: '#3959790D',
              padding: '30px',
              marginBottom: '40px',
            }}
          >
            <Typography
              variant="headline1"
              sx={{ paddingBottom: '30px', fontWeight: 500 }}
            >
              Portals
            </Typography>
            <Typography
              variant="body1"
              sx={{ paddingBottom: '30px', fontWeight: 500 }}
            >
              Community data portals in Sage Bionetworks serve as specialized
              platforms designed to facilitate open data sharing and
              collaboration among researchers.
            </Typography>
            <Button
              type="button"
              color="primary"
              variant="contained"
              sx={{
                padding: '10px 50px',
                marginTop: '30px',
                height: '100%',
                '&:hover': { color: 'white' },
              }}
              href="https://accounts.synapse.org/sageresources"
            >
              See All Solutions
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            px: theme.spacing(8),
            py: theme.spacing(0),
          }}
        >
          <Grid container spacing={5} mx={{ paddingTop: '20px' }}>
            {sourceAppConfigs?.map(config => {
              if (config.isPublicized) {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    lg={4}
                    className="sourceAppItem"
                    key={config.appId}
                  >
                    <a href={config.appURL}>{config.logo}</a>
                    <Typography
                      variant="body1"
                      sx={{ paddingBottom: '30px', fontWeight: 500 }}
                    >
                      <ShowMore summary={config.description} />
                    </Typography>
                  </Grid>
                )
              } else {
                return false
              }
            })}
          </Grid>
        </Box>
      </Popover>
    </div>
  )
}
