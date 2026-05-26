import { index, layout, prefix, route } from '@react-router/dev/routes'
import type { RouteConfig } from '@react-router/dev/routes'
import { legacyDetailsPageRoutes } from '@sage-bionetworks/synapse-portal-framework/ssg/legacyDetailsPageRoutes'
import {
  TOOLS_DETAILS_PAGE_DETAILS_TAB_PATH,
  TOOLS_DETAILS_PAGE_SUSTAINABILITY_AND_REUSABILITY_TAB_PATH,
} from './config/routeConstants'

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

      // Legacy redirects from old ?param=value URLs. For tabbed detail pages,
      // each known tab needs its own explicit static route so the legacy URL
      // outscores the real `:resourceId/<tab>` route during react-router path
      // ranking. See legacyDetailsPageRoutes for the scoring rationale.
      ...legacyDetailsPageRoutes({
        basePath: 'Explore/Grants/DetailsPage',
        file: 'pages/LegacyGrantRedirect.tsx',
        idPrefix: 'legacy-grant',
      }),
      ...legacyDetailsPageRoutes({
        basePath: 'Explore/People/DetailsPage',
        file: 'pages/LegacyPeopleRedirect.tsx',
        idPrefix: 'legacy-people',
      }),
      ...legacyDetailsPageRoutes({
        basePath: 'Explore/Publications/DetailsPage',
        file: 'pages/LegacyPublicationsRedirect.tsx',
        idPrefix: 'legacy-publications',
      }),
      ...legacyDetailsPageRoutes({
        basePath: 'Explore/Datasets/DetailsPage',
        file: 'pages/LegacyDatasetsRedirect.tsx',
        idPrefix: 'legacy-datasets',
      }),
      ...legacyDetailsPageRoutes({
        basePath: 'Explore/Tools/DetailsPage',
        file: 'pages/LegacyToolsRedirect.tsx',
        idPrefix: 'legacy-tools',
        knownTabPaths: [
          TOOLS_DETAILS_PAGE_DETAILS_TAB_PATH,
          TOOLS_DETAILS_PAGE_SUSTAINABILITY_AND_REUSABILITY_TAB_PATH,
        ],
      }),
      ...legacyDetailsPageRoutes({
        basePath: 'Explore/Educational Resources/DetailsPage',
        file: 'pages/LegacyEducationalResourcesRedirect.tsx',
        idPrefix: 'legacy-educational-resources',
      }),
    ]),
  ]),
] satisfies RouteConfig
