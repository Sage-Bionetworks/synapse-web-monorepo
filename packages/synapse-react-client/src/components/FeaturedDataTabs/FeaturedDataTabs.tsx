import { useState } from 'react'
import FeaturedDataPlots, { FeaturedDataPlotsProps } from './FeaturedDataPlots'
import { Icon } from '../row_renderers/utils'
import NoContentAvailable from '../SynapseTable/NoContentAvailable'
import { Box, Button } from '@mui/material'
import { Paper } from '@mui/material'

export type FeatureDataTabProps = {
  title: string // type of data being shown, used for the tab title and explore all button
  icon?: string
  exploreObjectType?: string
  explorePagePath?: string
  plotsConfig: FeaturedDataPlotsProps
}

export type FeaturedDataTabsProps = {
  configs: FeatureDataTabProps[]
  rgbIndex: number
  sql: string
}

function FeaturedDataTabs(props: FeaturedDataTabsProps) {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0)
  const { configs, rgbIndex, sql } = props
  // explore all data button
  const selectedTabProps: FeatureDataTabProps = configs[selectedTabIndex]
  return (
    <Box
      className="FeaturedDataTabs"
      sx={{ padding: { xs: '0px 40px 40px 40px', lg: '0px 80px 80px 80px' } }}
    >
      {/* tabs */}
      {configs.length > 1 && (
        <div className="FeaturedDataTabs__tabs">
          {configs.map((config, index) => {
            const isSelectedTabIndex: boolean = index === selectedTabIndex
            return (
              <div
                className={`FeaturedDataTabs__tabs__tab ${
                  isSelectedTabIndex
                    ? 'FeaturedDataTabs__tabs__tab__selected'
                    : ''
                }`}
                key={config.title}
              >
                <button
                  className="SRC-centerAndJustifyContent"
                  onClick={() => setSelectedTabIndex(index)}
                >
                  {config.icon && <Icon type={config.icon}></Icon>}
                  <span>{config.title}</span>
                </button>
              </div>
            )
          })}
        </div>
      )}
      {/* tab content */}
      {selectedTabProps && (
        <>
          {selectedTabProps.plotsConfig.configs.length > 0 ? (
            <>
              <FeaturedDataPlots
                key={`${sql}-${selectedTabIndex}`}
                sql={sql}
                rgbIndex={rgbIndex}
                explorePagePath={selectedTabProps.explorePagePath}
                {...selectedTabProps.plotsConfig}
              />
              {selectedTabProps.explorePagePath && (
                <div className="FeaturedDataTabs__explore-all">
                  <Button
                    variant="contained"
                    color="secondary"
                    href={selectedTabProps.explorePagePath}
                    sx={theme => ({
                      mb: '40px',
                      [theme.breakpoints.down('sm')]: {
                        width: '100%',
                      },
                    })}
                  >
                    View All {selectedTabProps.exploreObjectType}
                  </Button>
                </div>
              )}
            </>
          ) : (
            <Paper sx={{ p: 2 }}>
              <NoContentAvailable />
            </Paper>
          )}
        </>
      )}
    </Box>
  )
}

export default FeaturedDataTabs
