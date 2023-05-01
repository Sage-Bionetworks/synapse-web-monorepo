import React, { useLayoutEffect, useRef } from 'react'
import { Tab, Tabs, TabScrollButton } from '@mui/material'
import { useShowDesktop } from './utils'
export type NamedRoute = {
  name: string
}

export type RouteControlProps = {
  handleChanges: (text: string, index: number) => void
  isSelected: (name: string) => boolean
  customRoutes: string[]
}

export const RouteControl: React.FunctionComponent<RouteControlProps> = ({
  handleChanges,
  isSelected,
  customRoutes,
}) => {
  const setActiveClass = (isSelected: boolean) =>
    isSelected ? 'isSelected' : ''

  const isMobileView = !useShowDesktop()

  const selectedRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    // setTimeout is necessary or else it only scrolls to reveal half of the button
    setTimeout(() => {
      selectedRef.current?.scrollIntoView(false)
    }, 100)
  }, [])

  if (isMobileView) {
    return (
      <nav className="flex-display nav explore-nav">
        {customRoutes.map((name, index) => {
          const handleClick = () => handleChanges(name, index)
          return (
            <button
              onClick={handleClick}
              key={name}
              className={`nav-button nav-button-container center-content ${setActiveClass(
                isSelected(name),
              )}`}
            >
              {name}
            </button>
          )
        })}
      </nav>
    )
  }

  const CustomScrollButton = (props) => {
    return <TabScrollButton {...props} classes={{ root: 'TabScrollButton' }} />
  }

  /**
   * In the desktop view, we use Material UI tabs
   */
  return (
    <Tabs
      value={customRoutes.find((name) => isSelected(name))}
      variant="scrollable"
      scrollButtons="auto"
      ScrollButtonComponent={CustomScrollButton}
      aria-label="Explore Sections"
      className="flex-display nav explore-nav"
      TabIndicatorProps={{
        style: { background: 'transparent' },
      }}
    >
      {customRoutes.map((name, index) => {
        return (
          <Tab
            value={name}
            ref={isSelected(name) ? selectedRef : undefined}
            key={name}
            label={<div className={`explore-nav-button-text `}>{name}</div>}
            className={`nav-button nav-button-container center-content ${setActiveClass(
              isSelected(name),
            )}`}
            disableRipple={true}
            disableTouchRipple
            onClick={() => handleChanges(name, index)}
            sx={{
              padding: '0 2rem',
            }}
          />
        )
      })}
    </Tabs>
  )
}
