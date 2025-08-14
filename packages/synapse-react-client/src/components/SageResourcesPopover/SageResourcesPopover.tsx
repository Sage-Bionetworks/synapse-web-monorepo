import { useSourceAppConfigs } from '@/utils/hooks'
import { Box, Button, Grid, Popover, Typography, useTheme } from '@mui/material'
import {
  ColumnSingleValueQueryFilter,
  ColumnSingleValueFilterOperator,
} from '@sage-bionetworks/synapse-types'

export type SageResourcesPopoverProps = {
  sourceAppConfigTableID?: string
  anchorEl: HTMLElement | null
  onClose: () => void
  resourceName?: string
  description?: string
  filterByType?: 'SynapsePortal' | 'SageSolution'
  allResourcesUrl?: string
}

export function SageResourcesPopover({
  sourceAppConfigTableID = 'syn45291362',
  anchorEl,
  onClose,
  resourceName = 'Portals',
  description = 'Community data portals in Sage Bionetworks serve as specialized platforms designed to facilitate open data sharing and collaboration among researchers.',
  filterByType,
  allResourcesUrl,
}: SageResourcesPopoverProps) {
  const theme = useTheme()
  const open = Boolean(anchorEl)
  const hostname = window.location.hostname

  const additionalFilters: ColumnSingleValueQueryFilter[] = [
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
      columnName: 'isPublicized',
      operator: ColumnSingleValueFilterOperator.EQUAL,
      values: ['true'],
    },
  ]
  if (filterByType) {
    additionalFilters.push({
      isDefiningCondition: false,
      concreteType:
        'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
      columnName: 'portalType',
      operator: ColumnSingleValueFilterOperator.EQUAL,
      values: [filterByType],
    })
  }
  const sourceAppConfigs = useSourceAppConfigs(
    sourceAppConfigTableID,
    additionalFilters,
  )

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      sx={{ width: '90%', height: '90%' }}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Grid container spacing={2} sx={{ p: '24px' }}>
        <Grid size={{ xs: 12, lg: 3 }}>
          <Box sx={{ p: theme.spacing(4), pr: '5px' }}>
            <Typography
              variant="headline1"
              sx={{ fontSize: '30px', pb: '30px', fontWeight: 600 }}
            >
              {resourceName}
            </Typography>
            <Typography variant="body1" sx={{ pb: '10px', fontWeight: 500 }}>
              {description}
            </Typography>
            {allResourcesUrl && (
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
                href={allResourcesUrl}
              >
                See all {resourceName}
              </Button>
            )}
          </Box>
        </Grid>

        <Grid size={{ xs: 12, lg: 9 }}>
          <Grid container>
            {sourceAppConfigs
              ?.filter(config => {
                if (config.appURL.toLowerCase().startsWith('http')) {
                  const url = new URL(config.appURL)
                  return url.hostname !== hostname
                }
                return true
              })
              .map(config => (
                <Grid
                  key={config.appId}
                  size={{ xs: 12, sm: 6, lg: 4 }} // ⬅️ here too
                  className="sourceAppItem"
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
              ))}
          </Grid>
        </Grid>
      </Grid>
    </Popover>
  )
}
