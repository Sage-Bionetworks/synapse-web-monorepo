import {
  Tab,
  Tabs,
  TabScrollButton,
  TabScrollButtonProps,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ExploreWrapperProps } from './ExploreWrapperProps'

function CustomScrollButton(props: TabScrollButtonProps) {
  if (props.disabled) {
    return <></>
  }
  return (
    <TabScrollButton
      {...props}
      sx={{
        svg: {
          color: 'secondary.main',
          fontSize: '26px',
        },
        '&:hover': {
          backgroundColor: 'grey.300',
        },
      }}
    />
  )
}

export function ExploreWrapperTabs(props: ExploreWrapperProps) {
  const { explorePaths } = props
  const theme = useTheme()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'))

  /**
   * In the desktop view, we use Material UI tabs
   */
  return (
    <Tabs
      value={pathname}
      variant="scrollable"
      orientation={isMobileView ? 'vertical' : 'horizontal'}
      scrollButtons="auto"
      ScrollButtonComponent={CustomScrollButton}
      aria-label="Explore Sections"
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
      {explorePaths.map(({ path, displayName = path }) => {
        path = `/Explore/${path}`
        console.log('path', path, pathname)
        return (
          <Tab
            key={path}
            value={encodeURI(path)}
            label={displayName}
            onClick={() => navigate(path)}
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
