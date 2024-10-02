import { Tooltip } from '@mui/material'
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { SynapseComponents } from 'synapse-react-client'
import { useDetailsPageContext } from './DetailsPageContext'

export type DetailsPageTabUIProps = {
  path: string
  title: string
  tooltip?: string
  iconName?: string
  iconClassName?: string
  hideIfColumnValueNull?: string
}

export type DetailsPageTabConfig = DetailsPageTabUIProps & {
  element: React.ReactNode
}

export function DetailsPageTabUI(props: DetailsPageTabUIProps) {
  const {
    path,
    title,
    tooltip,
    iconName,
    iconClassName,
    hideIfColumnValueNull,
  } = props
  const location = useLocation()

  const { value } = useDetailsPageContext(hideIfColumnValueNull)

  if (hideIfColumnValueNull && value == null) {
    return null
  }

  return (
    <Tooltip key={path} title={tooltip ?? ''} placement="top">
      <NavLink
        to={{
          pathname: path,
          search: location.search,
        }}
        className={'tab-item ignoreLink'}
      >
        {iconName && (
          <SynapseComponents.Icon type={iconName} cssClass={iconClassName} />
        )}
        {title}
      </NavLink>
    </Tooltip>
  )
}
