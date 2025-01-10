import { Box, Tab, Tabs, useMediaQuery, useTheme, Chip } from '@mui/material'

import { useNavigate, useLocation } from 'react-router-dom'
import { CustomScrollButton } from '../Explore/ExploreWrapperTabs'
export type PortalSearchTabConfig = {
  path: string
  title: string
  count?: number
}

export type PortalSearchTabUIProps = {
  tabConfig: PortalSearchTabConfig[]
}
export function PortalSearchTabs(props: PortalSearchTabUIProps) {
  const { tabConfig } = props
  const location = useLocation()
  const theme = useTheme()
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'))
  const navigate = useNavigate()
  return (
    <Tabs
      value={location.pathname}
      variant="scrollable"
      orientation={isMobileView ? 'vertical' : 'horizontal'}
      scrollButtons="auto"
      ScrollButtonComponent={CustomScrollButton}
      aria-label="Search Object Types"
      sx={{
        '.MuiTabs-flexContainer': {
          gap: { xs: 2, sm: 5 },
          alignItems: 'center',
        },
      }}
      TabIndicatorProps={{
        style: { background: 'transparent' },
      }}
    >
      {tabConfig.map(({ path, title, count }) => {
        const targetPathname = `/Search/${path}`
        return (
          <Tab
            key={path}
            value={encodeURI(targetPathname)}
            label={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {title}{' '}
                {count !== undefined && (
                  <Chip
                    label={count}
                    size="small"
                    sx={{
                      backgroundColor: 'grey.100',
                      color: 'grey.900',
                      height: '21px',
                    }}
                  />
                )}
              </Box>
            }
            onClick={() =>
              navigate({
                pathname: targetPathname,
                search: location.search,
              })
            }
            sx={{
              transition: 'all 400ms',
              fontSize: '16px',
              fontWeight: 700,
              color: 'grey.700',
              minWidth: { xs: '100%', sm: 'unset' },
              py: 1,
              px: 0,
              borderBottom: '4px solid',
              borderBottomColor: 'transparent',
              '&.Mui-selected': {
                color: 'secondary.main',
                borderBottomColor: 'secondary.main',
              },
              '&:hover:not(.Mui-selected)': {
                color: 'grey.800',
              },
            }}
          />
        )
      })}
    </Tabs>
  )
}
