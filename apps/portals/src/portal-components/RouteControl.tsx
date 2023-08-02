import React, { useLayoutEffect, useRef } from 'react'
import {
  Tab,
  Tabs,
  TabScrollButton,
  TabScrollButtonProps,
  useMediaQuery,
  useTheme,
} from '@mui/material'

export type RouteControlProps = {
  handleChanges: (text: string, index: number) => void
  isSelected: (name: string) => boolean
  customRoutes: { name: string; hide: boolean }[]
}

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

export function RouteControl(props: RouteControlProps) {
  const { handleChanges, isSelected, customRoutes } = props
  const theme = useTheme()
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'))

  const selectedRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    // setTimeout is necessary or else it only scrolls to reveal half of the button
    setTimeout(() => {
      selectedRef.current?.scrollIntoView(false)
    }, 100)
  }, [])

  /**
   * In the desktop view, we use Material UI tabs
   */
  return (
    <Tabs
      value={customRoutes.find(({ name }) => isSelected(name))?.name!}
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
      {customRoutes.map((route, index) => {
        const { name, hide } = route
        return (
          <Tab
            key={name}
            value={name}
            ref={isSelected(name) ? selectedRef : undefined}
            label={name}
            onClick={() => handleChanges(name, index)}
            sx={{
              display: hide && !isSelected(name) ? 'none' : undefined,
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
