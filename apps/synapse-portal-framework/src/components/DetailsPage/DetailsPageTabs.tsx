import { Tooltip } from '@mui/material'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { SynapseComponents } from 'synapse-react-client'
import { DetailsPageTabProps } from '../../types/portal-util-types'

export type DetailsPageTabsProps = {
  tabConfigs: DetailsPageTabProps[]
  loading: boolean
  queryResultBundle?: QueryResultBundle
}

export type DetailsPageTabUIProps = {
  uriValue: string
  title: string
  tooltip?: string
  iconName?: string
  iconClassName?: string
}

export function DetailsPageTabUI(props: DetailsPageTabUIProps) {
  const location = useLocation()

  return (
    <Tooltip key={props.uriValue} title={props.tooltip ?? ''} placement="top">
      <NavLink
        to={{
          pathname: props.uriValue,
          search: location.search,
        }}
        className={'tab-item ignoreLink'}
      >
        {props.iconName && (
          <SynapseComponents.Icon
            type={props.iconName}
            cssClass={props.iconClassName}
          />
        )}
        {props.title}
      </NavLink>
    </Tooltip>
  )
}
