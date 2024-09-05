import React from 'react'
import {
  NavLink,
  Route,
  Switch,
  useLocation,
  useRouteMatch,
} from 'react-router-dom'
import { BarLoader } from 'react-spinners'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import { Tooltip } from '@mui/material'
import { DetailsPageTabProps } from '../../types/portal-util-types'
import RedirectWithQuery from '../RedirectWithQuery'
import { DetailsPageSynapseConfigArray } from './DetailsPage'
import { SynapseComponents } from 'synapse-react-client'

export type DetailsPageTabsProps = {
  tabConfigs: DetailsPageTabProps[]
  loading: boolean
  queryResultBundle?: QueryResultBundle
}

const DetailsPageTabs: React.FunctionComponent<
  DetailsPageTabsProps
> = props => {
  const { tabConfigs, loading, queryResultBundle } = props
  const { url } = useRouteMatch()
  const rowValues = queryResultBundle?.queryResult?.queryResults.rows[0].values
  const headers = queryResultBundle?.queryResult?.queryResults.headers
  const urlWithTrailingSlash = `${url}${url.endsWith('/') ? '' : '/'}`
  const { search } = useLocation()
  return (
    <>
      <Switch>
        {/* Note -- `exact` in Redirect doesn't work without a Switch */}
        <RedirectWithQuery
          exact={true}
          from={urlWithTrailingSlash}
          to={`${urlWithTrailingSlash}${tabConfigs[0].uriValue}`}
        />
      </Switch>
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
            <Tooltip
              key={tab.uriValue}
              title={tab.toolTip ?? ''}
              placement="top"
            >
              <NavLink
                to={`${urlWithTrailingSlash}${tab.uriValue + search}`}
                key={`detailPage-tab-${index}`}
                className={'tab-item ignoreLink'}
                aria-current="true"
              >
                {tab.iconName && (
                  <SynapseComponents.Icon
                    type={tab.iconName}
                  ></SynapseComponents.Icon>
                )}
                {tab.title}
              </NavLink>
            </Tooltip>
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
                <Route
                  key={tabConfig.uriValue}
                  path={`${urlWithTrailingSlash}${tabConfig.uriValue}`}
                >
                  {'tabLayout' in tabConfig && tabConfig.tabLayout && (
                    <DetailsPageTabs
                      tabConfigs={tabConfig.tabLayout}
                      loading={loading}
                      queryResultBundle={queryResultBundle}
                    ></DetailsPageTabs>
                  )}
                  {'synapseConfigArray' in tabConfig &&
                    tabConfig.synapseConfigArray && (
                      <DetailsPageSynapseConfigArray
                        showMenu={tabConfig.showMenu}
                        synapseConfigArray={tabConfig.synapseConfigArray}
                        queryResultBundle={queryResultBundle}
                      />
                    )}
                </Route>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}

export default DetailsPageTabs
