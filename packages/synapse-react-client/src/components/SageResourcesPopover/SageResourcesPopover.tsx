import { Box, Button, Grid, Popover, Typography, useTheme } from '@mui/material'
import { useSourceAppConfigs } from '../../utils/hooks'

export type SageResourcesPopoverProps = {
  sourceAppConfigTableID?: string
  anchorEl: HTMLElement | null
  onClose: () => void
}

export function SageResourcesPopover({
  sourceAppConfigTableID = 'syn45291362',
  anchorEl,
  onClose,
}: SageResourcesPopoverProps) {
  const theme = useTheme()
  const open = Boolean(anchorEl)
  const sourceAppConfigs = useSourceAppConfigs(sourceAppConfigTableID)
  return (
    <>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        sx={{ width: '90%', height: '90%' }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Grid container spacing={2} sx={{ p: '24px' }}>
          <Grid item xs={12} lg={3}>
            <Box sx={{ p: theme.spacing(4), pr: '5px' }}>
              <Typography
                variant="headline1"
                sx={{ fontSize: '40px', pb: '30px', fontWeight: 600 }}
              >
                Portals
              </Typography>
              <Typography variant="body1" sx={{ pb: '10px', fontWeight: 500 }}>
                Community data portals in Sage Bionetworks serve as specialized
                platforms designed to facilitate open data sharing and
                collaboration among researchers.
              </Typography>
              <Button
                type="button"
                color="primary"
                variant="contained"
                sx={{
                  p: '10px 50px',
                  mt: '30px',
                  height: '100%',
                  '&:hover': { color: 'white' },
                }}
                href="https://accounts.synapse.org/sageresources"
              >
                See All Solutions
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} lg={9}>
            <Grid container>
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
                      sx={{
                        p: '30px',
                        border: '1px solid #F1F3F5',
                        '&:hover': {
                          backgroundColor: '#d7dee433',
                          cursor: 'pointer',
                        },
                      }}
                    >
                      <div
                        onClick={() => {
                          window.open(config.appURL, '_blank')
                          onClose()
                        }}
                      >
                        <Box
                          sx={{
                            pb: '10px',
                            img: {
                              maxHeight: '50px',
                              height: '50px',
                              maxWidth: '100%',
                            },
                          }}
                        >
                          {config.logo}
                        </Box>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {config.shortDescription}
                        </Typography>
                      </div>
                    </Grid>
                  )
                } else {
                  return false
                }
              })}
            </Grid>
          </Grid>
        </Grid>
      </Popover>
    </>
  )
}
