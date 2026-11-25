import { index, layout, route } from '@react-router/dev/routes'
import type { RouteConfig } from '@react-router/dev/routes'

export default [
  layout('pages/PortalRoot.tsx', [
    route('/', 'pages/RootApp.tsx', [
      // Shared utility routes
      route('*', 'pages/ErrorPage.tsx'),
      route('Home', 'pages/HomeRedirect.tsx'),
      route('DownloadCart', 'pages/DownloadCartPage.tsx'),
      route('FileEntity/:entityId', 'pages/FileEntityPage.tsx'),
      route(
        'FileEntity/:entityId/version/:versionNumber',
        'pages/FileEntityPage.tsx',
        { id: 'file-entity-versioned' },
      ),
      route('test-init-error', 'pages/TestInitError.tsx'),

      index('pages/HomePage.tsx'),
      route('Explore/Models', 'pages/ExploreModels.tsx'),
    ]),
  ]),
] satisfies RouteConfig
