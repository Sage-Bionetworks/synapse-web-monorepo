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
      index('pages/Home.tsx'),

      route('About', 'pages/About.tsx'),
      route('Data Access', 'pages/DataAccess.tsx'),

      // Explore section
      route('Explore', 'pages/Explore/layout.tsx', [
        route('All Data', 'pages/Explore/AllData.tsx'),
        route('Collections', 'pages/Explore/Collections.tsx'),
        route('Datasets', 'pages/Explore/Datasets.tsx'),
        route('Programs', 'pages/Explore/Programs.tsx'),
        route('Projects', 'pages/Explore/Projects.tsx'),
        route('Publications', 'pages/Explore/Publications.tsx'),
      ]),

      route('Explore/Datasets/:id', 'pages/DatasetDetailsPage.tsx'),
      route('Explore/Programs/:Program', 'pages/ProgramDetailsPage.tsx'),
      route('Explore/Projects/:Project', 'pages/ProjectDetailsPage.tsx'),

      // Legacy redirects — keep old ?param=value URLs working
      ...legacyDetailsPageRoutes({
        basePath: 'Explore/Datasets/DetailsPage',
        file: 'pages/LegacyDatasetRedirect.tsx',
        idPrefix: 'legacy-dataset',
      }),
      ...legacyDetailsPageRoutes({
        basePath: 'Explore/Programs/DetailsPage',
        file: 'pages/LegacyProgramRedirect.tsx',
        idPrefix: 'legacy-program',
      }),
      ...legacyDetailsPageRoutes({
        basePath: 'Explore/Projects/DetailsPage',
        file: 'pages/LegacyProjectRedirect.tsx',
        idPrefix: 'legacy-project',
      }),
    ]),
  ]),
] satisfies RouteConfig
