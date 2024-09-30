import React, { useCallback, useMemo, useState } from 'react'
import {
  ExploreWrapperTabs,
  ExploreWrapperTabsProps,
} from './ExploreWrapperTabs'
import { Route, useNavigate, useLocation, Outlet } from 'react-router-dom'
import { SynapseComponent } from '../components/SynapseComponent'
import { ConfigRoute, NestedRoute } from '../types/portal-config'
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import {
  NEGATIVE_RESPONSIVE_SIDE_MARGIN,
  RESPONSIVE_SIDE_PADDING,
} from '../utils'

export type RouteControlWrapperProps = ExploreWrapperTabsProps

/**
 * RouteControl is the set of controls used on the /Explore page to navigate the
 * different keys.
 */
export default function ExploreWrapper(props: RouteControlWrapperProps) {
  const { explorePaths } = props

  const theme = useTheme()
  const isDesktopView = useMediaQuery(theme.breakpoints.up('sm'))
  const [showSubNav, setShowSubNav] = useState<boolean>(false)

  const { pathname } = useLocation()
  const currentExploreRoute = pathname.substring('/Explore/'.length)
  const currentRoute = explorePaths.find(
    route => encodeURI(route.path) === currentExploreRoute,
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
