import { index, layout, route } from '@react-router/dev/routes'
import type { RouteConfig } from '@react-router/dev/routes'
import { legacyDetailsPageRoutes } from '@sage-bionetworks/synapse-portal-framework/ssg/legacyDetailsPageRoutes'

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

      // Home page
      index('pages/HomePage.tsx'),

      // Explore section
      route('Explore', 'pages/Explore/layout.tsx', [
        route('Studies', 'pages/Explore/studies.tsx'),
        route('Datasets', 'pages/Explore/datasets.tsx'),
      ]),

      route('Explore/Datasets/:id', 'pages/DatasetDetailsPage.tsx'),

      // Legacy redirects — keep old ?param=value URLs working
      ...legacyDetailsPageRoutes({
        basePath: 'Explore/Datasets/DetailsPage',
        file: 'pages/LegacyDatasetRedirect.tsx',
        idPrefix: 'legacy-dataset',
      }),
    ]),
  ]),
] satisfies RouteConfig
