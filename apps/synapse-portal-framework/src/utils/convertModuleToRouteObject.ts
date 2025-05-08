/**
 * Converts a Route Module to a route object, which lets us use some React Router Framework Mode features, such as
 * lazy-loading, without fully migrating from Data/RouterProvider mode to Framework mode.
 *
 * From step 1 of: https://reactrouter.com/upgrading/router-provider
 */
export function convertModuleToRouteObject(m: any) {
  const { clientLoader, clientAction, default: Component, ...rest } = m
  return {
    ...rest,
    loader: clientLoader,
    action: clientAction,
    Component,
  }
}
