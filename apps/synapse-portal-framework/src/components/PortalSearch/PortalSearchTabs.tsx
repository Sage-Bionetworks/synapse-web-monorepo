import { Tooltip, Chip } from '@mui/material'
import { NavLink, useLocation } from 'react-router-dom'

export type PortalSearchTabConfig = {
  path: string
  title: string
  tooltip?: string
  count?: number
}

export type PortalSearchTabUIProps = {
  tabConfig: PortalSearchTabConfig[]
}

function PortalSearchTab(props: PortalSearchTabConfig) {
  const { path, title, tooltip, count } = props
  const location = useLocation()

  return (
    <Tooltip key={path} title={tooltip ?? ''} placement="top">
      <NavLink
        to={{
          pathname: path,
          search: location.search,
        }}
        className={'tab-item ignoreLink'}
      >
        {title}
        {count !== undefined && (
          <Chip
            size={'small'}
            label={count}
            sx={{
              backgroundColor: 'tertiary.500',
              color: 'grey.900',
              height: '21px',
            }}
          ></Chip>
        )}
      </NavLink>
    </Tooltip>
  )
}

export function PortalSearchTabs(props: PortalSearchTabUIProps) {
  const { tabConfig } = props

  return (
    <div className="tab-groups">
      {tabConfig.map(config => (
        <PortalSearchTab key={config.path} {...config} />
      ))}
    </div>
  )
}
