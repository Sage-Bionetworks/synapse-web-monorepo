import Tooltip from '@mui/material/Tooltip'
import { NavLink, useLocation } from 'react-router'
import Icon from 'synapse-react-client/components/Icon/Icon'
import { useDetailsPageContext } from './DetailsPageContext'

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
        {iconName && <Icon type={iconName} cssClass={iconClassName} />}
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
