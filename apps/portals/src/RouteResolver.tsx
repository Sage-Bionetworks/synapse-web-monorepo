import React from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import { GenericRoute } from './types/portal-config'
import routesConfig from './config/routesConfig'
import sharedRouteConfig from './shared-config/sharedRoutes'
import { ComponentRenderer } from './ComponentRenderer'

const ROUTES: GenericRoute = {
  ...sharedRouteConfig,
  routes: [...(sharedRouteConfig.routes ?? []), ...routesConfig],
}

function RecursiveRouteRenderer(props: {
  route: GenericRoute
  getPageNameFromParentRoute: () => string
}) {
  const { route, getPageNameFromParentRoute } = props
  const { url } = useRouteMatch()

  const pageName = route.displayName ?? route.path?.replaceAll('/', '')
  const getPageName = () =>
    pageName
      ? `${import.meta.env.VITE_PORTAL_NAME} - ${pageName}`
      : getPageNameFromParentRoute()

  // if there are children, don't update the title
  if (!route.routes || route.routes.length === 0) {
    const newTitle: string = getPageName()
    if (document.title !== newTitle) {
      document.title = newTitle
    }
  }

  return (
    <>
      {'synapseConfigArray' in route &&
        route.synapseConfigArray &&
        route.synapseConfigArray.map((config, index) => {
          return <ComponentRenderer key={index} config={config} />
        })}
      {'routes' in route &&
        route.routes &&
        route.routes.map((r) => {
          return (
            <Route
              key={JSON.stringify(r)}
              path={`${url}${url.endsWith('/') ? '' : '/'}${r.path}`}
              exact={r.exact}
            >
              <RecursiveRouteRenderer
                route={r}
                getPageNameFromParentRoute={getPageName}
              />
            </Route>
          )
        })}
    </>
  )
}

/*
  Given a location join with the routesConfig to render the appropriate component.
*/
const RouteResolver = () => {
  return (
    <RecursiveRouteRenderer
      route={ROUTES}
      getPageNameFromParentRoute={() => import.meta.env.VITE_PORTAL_NAME}
    />
  )
}

export default RouteResolver
