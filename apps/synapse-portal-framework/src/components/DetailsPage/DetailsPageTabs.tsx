import { Tooltip } from '@mui/material'
import { NavLink, useLocation } from 'react-router'
import { SynapseComponents } from 'synapse-react-client'
import { useDetailsPageContext } from './DetailsPageContext'
import { useRef } from 'react'
import { scrollToWithOffset } from '@/utils'

export type DetailsPageTabConfig = {
  path: string
  title: string
  tooltip?: string
  iconName?: string
  iconClassName?: string
  hideIfColumnValueNull?: string
  children?: DetailsPageTabConfig[]
}

export type DetailsPageTabUIProps = {
  tabConfig: DetailsPageTabConfig[]
}
const DETAIL_PAGE_TABS_HASH = 'detailpagetabs'
function DetailsPageTab(props: DetailsPageTabConfig) {
  const {
    path,
    title,
    tooltip,
    iconName,
    iconClassName,
    hideIfColumnValueNull,
  } = props
  const location = useLocation()
  const scrollToRef = useRef(null)
  const { value } = useDetailsPageContext(hideIfColumnValueNull)

  if (hideIfColumnValueNull && value == null) {
    return null
  }

  return (
    <Tooltip key={path} title={tooltip ?? ''} placement="top">
      <NavLink
        ref={scrollToRef}
        to={{
          pathname: path,
          search: location.search,
        }}
        onClick={() => {
          setTimeout(() => {
            if (scrollToRef.current) {
              scrollToWithOffset(scrollToRef.current)
            }
          }, 250)
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

export function DetailsPageTabs(props: DetailsPageTabUIProps) {
  const { tabConfig } = props

  return (
    <div className="tab-groups">
      {tabConfig.map(config => (
        <DetailsPageTab key={config.path} {...config} />
      ))}
    </div>
  )
}
