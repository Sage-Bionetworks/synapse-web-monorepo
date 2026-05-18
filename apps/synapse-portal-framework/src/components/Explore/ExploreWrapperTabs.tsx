import {
  Tab,
  Tabs,
  TabScrollButton,
  TabScrollButtonProps,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { useMemo } from 'react'
import { Link, LinkProps, useLocation, useNavigation } from 'react-router'
import { ExploreWrapperProps } from './ExploreWrapperProps'
import { matchPath } from 'react-router'
import styles from './ExploreWrapperTabs.module.scss'

export function CustomScrollButton(props: TabScrollButtonProps) {
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
  const navigation = useNavigation()
  const location = useLocation()
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'))
  const pathname = navigation?.location?.pathname ?? location.pathname

  const pathnameWithoutTrailingSlash = useMemo(
    () => pathname.replace(/\/$/, ''),
    [pathname],
  )

  // Determine which tab should be selected based on current pathname
  const selectedTabValue = useMemo(() => {
    for (const route of explorePaths) {
      const routePath = encodeURI(`/Explore/${route.path}`)
      if (matchPath({ path: routePath, end: false }, pathname)) {
        return routePath
      }
    }
    return pathnameWithoutTrailingSlash
  }, [pathnameWithoutTrailingSlash, explorePaths, pathname])

  /**
   * In the desktop view, we use Material UI tabs
   */
  return (
    <Tabs
      value={selectedTabValue}
      variant="scrollable"
      orientation={isMobileView ? 'vertical' : 'horizontal'}
      scrollButtons="auto"
      aria-label="Explore Sections"
      sx={{
        '.MuiTabs-flexContainer': {
          gap: { xs: 2, sm: 5 },
          alignItems: 'center',
        },
      }}
      slots={{
        scrollButtons: CustomScrollButton,
      }}
      slotProps={{
        indicator: {
          style: { background: 'transparent' },
        },
      }}
    >
      {explorePaths.map(({ path, displayName = path }) => {
        path = `/Explore/${path}`
        const linkProps: any = { to: path } satisfies LinkProps
        return (
          <Tab
            className={styles.tab}
            key={path}
            value={encodeURI(path)}
            label={displayName}
            LinkComponent={Link}
            {...linkProps}
          />
        )
      })}
    </Tabs>
  )
}
