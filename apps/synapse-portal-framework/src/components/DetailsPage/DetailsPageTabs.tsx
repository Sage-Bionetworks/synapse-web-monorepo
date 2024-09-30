import { Tooltip } from '@mui/material'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import React from 'react'
import {
  Navigate,
  NavLink,
  Outlet,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import { BarLoader } from 'react-spinners'
import { SynapseComponents } from 'synapse-react-client'
import { DetailsPageTabProps } from '../../types/portal-util-types'
import { DetailsPageSynapseConfigArray } from './DetailsPage'
import { SideNavMenu } from './SideNavMenu'

export type DetailsPageTabsProps = {
  tabConfigs: DetailsPageTabProps[]
  loading: boolean
  queryResultBundle?: QueryResultBundle
}

const DetailsPageTabs: React.FunctionComponent<
  DetailsPageTabsProps
> = props => {
  const { tabConfigs, loading, queryResultBundle } = props
  // TODO: does this work?
  const url = useLocation().pathname
  const rowValues = queryResultBundle?.queryResult?.queryResults.rows[0].values
  const headers = queryResultBundle?.queryResult?.queryResults.headers
  const urlWithTrailingSlash = `${url}${url.endsWith('/') ? '' : '/'}`
  const { search } = useLocation()
  return (
    <>
      {/*<Routes>*/}
      {/*  /!* Note -- `exact` in Redirect doesn't work without a Switch *!/*/}
      {/*  <Route*/}
      {/*    path={`${urlWithTrailingSlash}`}*/}
      {/*    element={*/}
      {/*      <Navigate to={`${urlWithTrailingSlash}${tabConfigs[0].uriValue}`} />*/}
      {/*    }*/}
      {/*  />*/}
      {/*</Routes>*/}
      <div className="tab-groups">
        {tabConfigs.map((tab, index) => {
          if (tab.hideIfColumnValueNull) {
            if (rowValues && headers) {
              const colIndex = headers.findIndex(
                h => h.name == tab.hideIfColumnValueNull,
              )
              if (!rowValues[colIndex]) {
                return <></>
              }
            } else {
              return <></>
            }
          }
          return (
            <DetailsPageTabUI
              title={tab.title}
              uriValue={tab.uriValue}
              tooltip={tab.toolTip}
              iconName={tab.iconName}
            />
          )
        })}
      </div>
      {loading ? (
        <BarLoader color="#878787" loading={true} height={5} />
      ) : (
        <div className="tab-content-group">
          <div className="tab-content">
            {tabConfigs.map((tabConfig, index) => {
              return (
                <>
                  {'tabLayout' in tabConfig && tabConfig.tabLayout && (
                    <DetailsPageTabs
                      tabConfigs={tabConfig.tabLayout}
                      loading={loading}
                      queryResultBundle={queryResultBundle}
                    ></DetailsPageTabs>
                  )}
                  <div className="DetailsPage">
                    <div className="button-container">
                      <SideNavMenu
                        synapseConfigArray={synapseConfigArray}
                        queryResultBundle={queryResultBundle}
                      />
                    </div>
                    <div className="component-container">
                      <Outlet />
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
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

export default DetailsPageTabs
