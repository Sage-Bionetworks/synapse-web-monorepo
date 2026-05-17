import { index, layout, prefix, route } from '@react-router/dev/routes'
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

      // Home page
      index('pages/Home.tsx'),

      // Explore section
      route('Explore', 'pages/Explore/layout.tsx', [
        route('Grants', 'pages/Explore/Grants.tsx'),
        route('People', 'pages/Explore/People.tsx'),
        route('Publications', 'pages/Explore/Publications.tsx'),
        route('Datasets', 'pages/Explore/Datasets.tsx'),
        route('Tools', 'pages/Explore/Tools.tsx'),
        route(
          'Educational Resources',
          'pages/Explore/EducationalResources.tsx',
        ),
      ]),

      // Search
      ...prefix('Search', [
        index('pages/Search.tsx', { id: 'search-index' }),
        route(':resourceType', 'pages/Search.tsx', {
          id: 'search-resource-type',
        }),
      ]),

      route('MC2Supplement', 'pages/MC2Supplement.tsx'),

      // Clean-URL detail pages (path-segment style)
      route('Explore/Grants/:grantId', 'pages/GrantDetailsPage.tsx'),
      route('Explore/People/:name', 'pages/PeopleDetailsPage.tsx'),
      route(
        'Explore/Publications/:pubMedId',
        'pages/PublicationsDetailsPage.tsx',
      ),
      route('Explore/Datasets/:datasetId', 'pages/DatasetsDetailsPage.tsx'),
      route(
        'Explore/Educational Resources/:title',
        'pages/EducationalResourcesDetailsPage.tsx',
      ),
      route(
        'Explore/Tools/:toolName',
        'pages/ToolsDetailsPage/ToolsDetailsPage.tsx',
        [
          index('pages/DefaultTabIndexRedirect.tsx', { id: 'tool-index' }),
          route('*', 'pages/DefaultTabWildcardRedirect.tsx', {
            id: 'tool-wildcard',
          }),
          route(
            'Details',
            'pages/ToolsDetailsPage/ToolsDetailsPageDetailsTab.tsx',
          ),
          route(
            'SustainabilityAndReusabilityReport',
            'pages/ToolsDetailsPage/ToolsDetailsPageSustainabilityAndReusabilityTab.tsx',
          ),
        ],
      ),

      // Legacy redirects from old ?param=value URLs
      route('Explore/Grants/DetailsPage', 'pages/LegacyGrantRedirect.tsx'),
      route('Explore/People/DetailsPage', 'pages/LegacyPeopleRedirect.tsx'),
      route(
        'Explore/Publications/DetailsPage',
        'pages/LegacyPublicationsRedirect.tsx',
      ),
      route('Explore/Datasets/DetailsPage', 'pages/LegacyDatasetsRedirect.tsx'),
      route('Explore/Tools/DetailsPage', 'pages/LegacyToolsRedirect.tsx'),
      route(
        'Explore/Educational Resources/DetailsPage',
        'pages/LegacyEducationalResourcesRedirect.tsx',
      ),
    ]),
  ]),
] satisfies RouteConfig
