import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { Outlet, useLocation, useMatch } from 'react-router-dom'
import { OrientationBanner } from 'synapse-react-client'
import {
  NEGATIVE_RESPONSIVE_SIDE_MARGIN,
  RESPONSIVE_SIDE_PADDING,
} from '../../utils'
import { ExplorePageRoute, ExploreWrapperProps } from './ExploreWrapperProps'
import { ExploreWrapperTabs } from './ExploreWrapperTabs'

function RouteMatchedOrientationBanner(props: { route: ExplorePageRoute }) {
  const { route } = props
  const match = useMatch({ path: `/Explore/${route.path!}`, end: true })

  if (!route.OrientationBannerProps || match == null) {
    return null
  }
  return <OrientationBanner {...route.OrientationBannerProps} />
}

/**
 * RouteControl is the set of controls used on the /Explore page to navigate the
 * different keys.
 */
export default function ExploreWrapper(props: ExploreWrapperProps) {
  const { explorePaths } = props

  const theme = useTheme()
  const isDesktopView = useMediaQuery(theme.breakpoints.up('sm'))
  const [showSubNav, setShowSubNav] = useState<boolean>(false)

  const { pathname } = useLocation()
  const currentExploreRoute = pathname.substring('/Explore/'.length)
  const currentRoute = explorePaths.find(
    route => encodeURI(route.path!) === currentExploreRoute,
  )
  if (currentRoute) {
    const pageName =
      currentRoute.displayName ?? currentRoute.path?.replaceAll('/', '')
    const documentTitle = `${import.meta.env.VITE_PORTAL_NAME} - ${pageName}`
    const newTitle: string = documentTitle
    if (document.title !== newTitle) {
      document.title = newTitle
    }
  }

  return (
    <>
      {explorePaths.map(route => (
        <RouteMatchedOrientationBanner key={route.path} route={route} />
      ))}
      <Box
        sx={{
          ...RESPONSIVE_SIDE_PADDING,
          backgroundColor: 'grey.100',
          pt: 5,
          borderBottom: '1px solid',
          borderBottomColor: 'grey.400',
        }}
      >
        <Typography variant={'headline1'} sx={{ mb: 1 }}>
          Explore
        </Typography>
        <Box
          sx={{
            display: { xs: 'flex', sm: 'none' },
            alignItems: 'center',
            justifyContent: 'center',
            py: 2,
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'grey.200',
            },
          }}
          onClick={() => setShowSubNav(showSubNav => !showSubNav)}
        >
          <Typography variant={'headline3'}>{currentExploreRoute}</Typography>
          {showSubNav ? (
            <ArrowDropDown fontSize={'large'} />
          ) : (
            <ArrowDropUp fontSize={'large'} />
          )}
        </Box>
        {(showSubNav || isDesktopView) && (
          <ExploreWrapperTabs explorePaths={explorePaths} />
        )}
      </Box>
      <Box
        sx={{
          ...RESPONSIVE_SIDE_PADDING,
          ['.TopLevelControls, .TotalQueryResults.hasFilters']: {
            ...NEGATIVE_RESPONSIVE_SIDE_MARGIN,
            mt: 0,
            px: RESPONSIVE_SIDE_PADDING['px'],
          },
          '.TopLevelControls > div': {
            px: 0,
            py: 2.5,
          },
        }}
      >
        <Outlet />
      </Box>
    </>
  )
}
