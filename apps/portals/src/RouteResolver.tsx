import * as React from 'react'
import { Route, useLocation, useRouteMatch } from 'react-router-dom'
import { SynapseComponent } from './SynapseComponent'
import { SynapseConfig, GenericRoute } from './types/portal-config'
import { scrollToWithOffset } from './utils'
import routesConfig from './config/routesConfig'
import Layout from './portal-components/Layout'
import sharedRouteConfig from './shared-config/sharedRoutes'

const ROUTES: GenericRoute = {
  ...sharedRouteConfig,
  routes: [...(sharedRouteConfig.routes ?? []), ...routesConfig],
}

function ComponentRenderer(props: { config: SynapseConfig }) {
  const {
    containerClassName,
    outsideContainerClassName,
    isOutsideContainer,
    title,
    centerTitle,
    subtitle,
  } = props.config
  const { search, hash } = useLocation()
  // If url has search params transform into key-value dictionary that can be passed into
  // the component which is rendered
  let searchParamsProps: any = undefined
  if (search) {
    searchParamsProps = {}
    // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams -- needs polyfill for ie11
    const searchParams = new URLSearchParams(search)
    searchParams.forEach((value, key) => {
      searchParamsProps[key] = value
    })
  }
  const scrollToRef = React.useRef(null)
  const scrollToJsx =
    title && hash && hash === `#${encodeURI(title)}` ? (
      <span ref={scrollToRef} />
    ) : (
      <></>
    )
  // this delay is here to improve the location of the element, since it's position depends on the layout of other components on the page (that also need to load)
  setTimeout(() => {
    if (scrollToRef.current) {
      scrollToWithOffset(scrollToRef.current)
    }
  }, 500)
  return (
    <React.Fragment key={JSON.stringify(props)}>
      {isOutsideContainer ? (
        <div className={containerClassName}>
          {title && (
            <h2 className={`title ${centerTitle ? 'center-title' : ''}`}>
              {title}
            </h2>
          )}
          {subtitle && (
            <p className={`${centerTitle ? 'center-title' : ''}`}>{subtitle}</p>
          )}
          <SynapseComponent
            synapseConfig={props.config}
            searchParams={searchParamsProps}
          />
        </div>
      ) : (
        <Layout
          key={JSON.stringify(props)}
          containerClassName={containerClassName}
          outsideContainerClassName={outsideContainerClassName}
        >
          {scrollToJsx}
          {/* re-think how this renders! remove specific styling */}
          {title && (
            <h2 className={`title ${centerTitle ? 'center-title' : ''}`}>
              {title}
            </h2>
          )}
          {subtitle && (
            <p className={`${centerTitle ? 'center-title' : ''}`}>{subtitle}</p>
          )}
          <SynapseComponent
            synapseConfig={props.config}
            searchParams={searchParamsProps}
          />
        </Layout>
      )}
    </React.Fragment>
  )
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
