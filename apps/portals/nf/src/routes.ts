import { index, layout, prefix, route } from '@react-router/dev/routes'
import type { RouteConfig } from '@react-router/dev/routes'

/**
 * Framework Mode route configuration for the NF portal.
 *
 * This replaces routesConfig.tsx (which used RouteObject[] with lazy: imports).
 * Framework Mode requires RouteConfigEntry[] with file: string references.
 *
 * Route file paths are relative to appDirectory (src/).
 */
export default [
  // Top-level providers layout (ThemeProvider, QueryClientProvider, etc.)
  layout('pages/PortalRoot.tsx', [
    // Root layout route — App shell (Navbar, Footer, SurveyToast, etc.)
    route('/', 'pages/RootApp.tsx', [
      // sharedRoutes equivalents
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

      // Index — HomePage
      index('pages/HomePage.tsx'),

      // PORTALS-3454: Redirect /Browse Tools → /Research Tools Central/Browse Tools
      route('Browse Tools', 'pages/BrowseToolsRedirect.tsx'),

      // Research Tools Central
      ...prefix('Research Tools Central', [
        route('Browse Tools', 'pages/BrowseTools.tsx'),
        route('Submit New Tool', 'pages/SubmitNewTool.tsx'),
        route('Submit Observation', 'pages/SubmitObservation.tsx'),
        route('Submit Animal Model', 'pages/SubmitAnimalModel.tsx'),
        route('Submit Cell Line', 'pages/SubmitCellLine.tsx'),
        route('Submit Antibody', 'pages/SubmitAntibody.tsx'),
        route('Submit Genetic Reagent', 'pages/SubmitGeneticReagent.tsx'),
        route('Submit Organoid Protocol', 'pages/SubmitOrganoidProtocol.tsx'),
        route('Submit Biobank', 'pages/SubmitBiobank.tsx'),
        route(
          'Submit Clinical Assessment Tool',
          'pages/SubmitClinicalAssessmentTool.tsx',
        ),
        route('Submit Computational Tool', 'pages/SubmitComputationalTool.tsx'),
        route(
          'Submit Patient Derived Model',
          'pages/SubmitPatientDerivedModel.tsx',
        ),
      ]),

      // Explore section (layout with tab navigation)
      route('Explore', 'pages/Explore/layout.tsx', [
        route('Initiatives', 'pages/Explore/initiatives.tsx'),
        route('Studies', 'pages/Explore/studies.tsx'),
        route('Datasets', 'pages/Explore/datasets.tsx'),
        route('Files', 'pages/Explore/files.tsx'),
        route('Publications', 'pages/Explore/publications.tsx'),
        route('Tools', 'pages/Explore/tools.tsx'),
        route('Hackathon', 'pages/Explore/hackathons.tsx'),
      ]),

      // Search
      ...prefix('Search', [
        index('pages/Search.tsx', { id: 'search-index' }),
        route(':resourceType', 'pages/Search.tsx', {
          id: 'search-resource-type',
        }),
      ]),

      // ── Clean-URL detail page routes (path param style) ────────────────────
      route(
        'Explore/Initiatives/:initiative',
        'pages/InitiativeDetailsPage.tsx',
      ),
      route('Explore/Datasets/:id', 'pages/DatasetDetailsPage.tsx'),
      route(
        'Explore/Studies/:studyId',
        'pages/StudyDetailsPage/StudyDetailsPage.tsx',
        [
          index('pages/DefaultTabIndexRedirect.tsx', { id: 'study-index' }),
          route('*', 'pages/DefaultTabWildcardRedirect.tsx', {
            id: 'study-wildcard',
          }),
          route('Details', 'pages/StudyDetailsPage/StudyDetailsTab.tsx'),
          route('Datasets', 'pages/StudyDetailsPage/StudyDatasetsTab.tsx'),
          route('Files', 'pages/StudyDetailsPage/StudyFilesTab.tsx'),
          route(
            'AdditionalFiles',
            'pages/StudyDetailsPage/StudyAdditionalFilesTab.tsx',
          ),
        ],
      ),
      route(
        'Explore/Tools/:resourceId',
        'pages/ToolDetailsPage/ToolDetailsPage.tsx',
        [
          index('pages/DefaultTabIndexRedirect.tsx', { id: 'tool-index' }),
          route('*', 'pages/DefaultTabWildcardRedirect.tsx', {
            id: 'tool-wildcard',
          }),
          route(
            'Details',
            'pages/ToolDetailsPage/ToolDetailsPageDetailsTab.tsx',
          ),
          route(
            'Observations',
            'pages/ToolDetailsPage/ToolDetailsPageObservationsTab.tsx',
          ),
          route('Data', 'pages/ToolDetailsPage/ToolDetailsPageDataTab.tsx'),
        ],
      ),
      route(
        'Explore/Hackathon/:id',
        'pages/HackathonDetailsPage/HackathonDetailsPage.tsx',
        [
          index('pages/DefaultTabIndexRedirect.tsx', { id: 'hackathon-index' }),
          route('*', 'pages/DefaultTabWildcardRedirect.tsx', {
            id: 'hackathon-wildcard',
          }),
          route(
            'Background&Results',
            'pages/HackathonDetailsPage/HackathonBackgroundResultsTab.tsx',
          ),
          route(
            'Methodology',
            'pages/HackathonDetailsPage/HackathonMethodologyTab.tsx',
          ),
        ],
      ),
      route(
        'Organizations/:abbreviation',
        'pages/OrganizationDetailsPage/OrganizationDetailsPage.tsx',
        [
          index('pages/DefaultTabIndexRedirect.tsx', {
            id: 'organization-index',
          }),
          route('*', 'pages/DefaultTabWildcardRedirect.tsx', {
            id: 'organization-wildcard',
          }),
          route(
            'Details',
            'pages/OrganizationDetailsPage/OrganizationDetailsTab.tsx',
          ),
          route(
            'Data',
            'pages/OrganizationDetailsPage/OrganizationDataTab.tsx',
          ),
        ],
      ),

      // ── Legacy /DetailsPage redirect routes ────────────────────────────────
      route(
        'Explore/Initiatives/DetailsPage',
        'pages/LegacyInitiativeRedirect.tsx',
      ),
      route('Explore/Datasets/DetailsPage', 'pages/LegacyDatasetRedirect.tsx'),
      route('Explore/Studies/DetailsPage', 'pages/LegacyStudyRedirect.tsx'),
      route('Explore/Tools/DetailsPage', 'pages/LegacyToolRedirect.tsx'),
      route(
        'Explore/Hackathon/DetailsPage',
        'pages/LegacyHackathonRedirect.tsx',
      ),
      route(
        'Organizations/DetailsPage',
        'pages/LegacyOrganizationRedirect.tsx',
      ),

      // PORTALS-2277: Redirect renamed "Hackathon Projects" → "Hackathon"
      route(
        'Explore/Hackathon Projects',
        'pages/HackathonProjectsRedirect.tsx',
      ),
    ]),
  ]),
] satisfies RouteConfig
