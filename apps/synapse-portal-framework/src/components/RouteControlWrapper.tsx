import React, { useCallback, useMemo, useState } from 'react'
import { RouteControl, RouteControlProps } from './RouteControl'
import { Route, useHistory, useLocation } from 'react-router-dom'
import { SynapseComponent } from '../components/SynapseComponent'
import { ConfigRoute, NestedRoute } from '../types/portal-config'
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import {
  NEGATIVE_RESPONSIVE_SIDE_MARGIN,
  RESPONSIVE_SIDE_PADDING,
} from '../utils'

export type RouteControlWrapperProps = NestedRoute & {
  // we have to pass in all the custom routes because unlike the home page the explore buttons configs aren't held in state
  customRoutes: ConfigRoute[]
  searchParams?: any
}

/**
 * RouteControl is the set of controls used on the /Explore page to navigate the
 * different keys.
 */
export default function RouteControlWrapper(props: RouteControlWrapperProps) {
  const { customRoutes = [], searchParams } = props
  const location = useLocation()
  const history = useHistory()
  const pathname = location.pathname
  const subPath = pathname.substring('/Explore/'.length)
  const handleChangesFn = useCallback(
    (val: string, _index: number) => {
      history.push(`/Explore/${val}`)
    },
    [history],
  )
  const routeControlProps: RouteControlProps = useMemo(
    () => ({
      customRoutes: customRoutes.map(route => ({
        name: route.path!,
        hide: !!route.hideRouteFromNavbar,
      })),
      handleChanges: handleChangesFn,
      isSelected: (name: string) => name === subPath,
    }),
    [customRoutes, handleChangesFn, subPath],
  )

  const selectedTab = subPath
  const [showSubNav, setShowSubNav] = useState<boolean>(false)
  const theme = useTheme()
  const isDesktopView = useMediaQuery(theme.breakpoints.up('sm'))

  const currentRoute = customRoutes.find(route => route.path === selectedTab)
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
          <Typography variant={'headline3'}>{selectedTab}</Typography>
          {showSubNav ? (
            <ArrowDropDown fontSize={'large'} />
          ) : (
            <ArrowDropUp fontSize={'large'} />
          )}
        </Box>
        {(showSubNav || isDesktopView) && (
          <RouteControl {...routeControlProps} />
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
        {customRoutes.map(route => (
          <Route
            key={route.path}
            path={`/Explore/${route.path}`}
            exact={route.exact}
          >
            {route.synapseConfigArray &&
              route.synapseConfigArray.map((synapseConfig, index) => (
                <SynapseComponent
                  key={index}
                  synapseConfig={synapseConfig}
                  searchParams={searchParams}
                />
              ))}
          </Route>
        ))}
      </Box>
    </>
  )
}
