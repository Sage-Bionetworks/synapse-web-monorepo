/**
 * SWC.index.ts represents the entry point for the Synapse React Client library as it is published to NPM and
 * used by SynapseWebClient.
 *
 * If you wish to export a component or other object to be used by SynapseWebClient, you should add it to this file.
 */

import { lazy } from 'react'
import { version } from '../package.json'
import {
  displayToast,
  SynapseToastContainer,
} from './components/ToastMessage/ToastMessage'
import SynapseClient, { HttpClient } from './synapse-client'
import * as SynapseQueries from './synapse-queries'
import Palettes from './theme/palette/Palettes'
import { SynapseConstants } from './utils'
import { sendAnalyticsEvent } from './utils/analytics/sendAnalyticsEvent'
import {
  sendSearchQuerySubmittedEvent,
  sendSearchResultClickedEvent,
  sendSearchResultReturnedEvent,
  sendSearchResultsReturnedEvent,
} from './utils/analytics/sendSearchEvent'
import { FullContextProvider } from './utils/context/FullContextProvider'
import {
  SynapseContextConsumer,
  SynapseContextProvider,
  useSynapseContext,
} from './utils/context/SynapseContext'
import { BackendDestinationEnum } from './utils/functions'
import { xssOptions } from './utils/functions/SanitizeHtmlUtils'
import { getCurrentCookiePreferences } from './utils/hooks'
import { SynapseSessionManager } from './utils/AppUtils'

// Also include scss in the bundle
import './style/main.scss'

const SynapseEnums = {
  BackendDestinationEnum,
}

const SynapseContext = {
  FullContextProvider,
  SynapseContextProvider,
  SynapseContextConsumer,
  useSynapseContext,
}

const SynapseComponents = {
  AccessRequirementAclEditor: lazy(
    () => import('./components/AccessRequirementAclEditor'),
  ),
  AccessRequirementList: lazy(
    () => import('./components/AccessRequirementList/AccessRequirementList'),
  ),
  AccessRequirementRelatedProjectsList: lazy(
    () => import('./components/AccessRequirementRelatedProjectsList'),
  ),
  AccountLevelBadges: lazy(
    () => import('./components/AccountLevelBadges/AccountLevelBadges'),
  ),
  AddToDownloadListConfirmationAlert: lazy(
    () =>
      import(
        './components/download_list/AddToDownloadListConfirmationAlert/AddToDownloadListConfirmationAlert'
      ),
  ),
  AvailableEvaluationQueueList: lazy(
    () =>
      import('./components/ChallengeSubmission/AvailableEvaluationQueueList'),
  ),
  CertificationQuiz: lazy(
    () => import('./components/CertificationQuiz/CertificationQuiz'),
  ),
  CookiesNotification: lazy(() => import('./components/CookiesNotification')),
  CreateOrUpdateAccessRequirementWizard: lazy(
    () => import('./components/CreateOrUpdateAccessRequirementWizard'),
  ),
  CreateOrUpdateDoiModal: lazy(
    () => import('./components/doi/CreateOrUpdateDoiModal'),
  ),
  CreateTableViewWizard: lazy(
    () => import('./components/CreateTableViewWizard/CreateTableViewWizard'),
  ),
  CreatedByModifiedBy: lazy(
    () => import('./components/entity/page/CreatedByModifiedBy'),
  ),
  DatasetItemsEditor: lazy(
    () => import('./components/SynapseTable/datasets/DatasetItemsEditor'),
  ),
  DiscussionThread: lazy(() => import('./components/Forum/DiscussionThread')),
  DownloadCartPage: lazy(
    () => import('./components/DownloadCart/DownloadCartPage'),
  ),
  DownloadConfirmation: lazy(
    () => import('./components/download_list/FolderDownloadConfirmation'),
  ),
  EntityAclEditorModal: lazy(
    () => import('./components/EntityAclEditor/EntityAclEditorModal'),
  ),
  EntityActionMenu: lazy(
    () => import('./components/entity/page/action_menu/EntityActionMenu'),
  ),
  EntityBadgeIcons: lazy(
    () => import('./components/EntityBadgeIcons/EntityBadgeIcons'),
  ),
  EntityCitation: lazy(() => import('./components/EntityCitation')),
  EntityFinder: lazy(() => import('./components/EntityFinder/EntityFinder')),
  EntityForm: lazy(() => import('./components/EntityForm/EntityForm')),
  EntityHeaderTable: lazy(() => import('./components/EntityHeaderTable')),
  EntityModal: lazy(() => import('./components/entity/metadata/EntityModal')),
  EntityPageBreadcrumbs: lazy(
    () => import('./components/entity/page/breadcrumbs/EntityPageBreadcrumbs'),
  ),
  EntityPageTitleBar: lazy(
    () => import('./components/entity/page/title_bar/EntityPageTitleBar'),
  ),
  EntityTreeTable: lazy(
    () => import('./components/EntityTreeTable/EntityTreeTable'),
  ),
  EntityTypeIcon: lazy(() => import('./components/EntityIcon')),
  EntityUploadModal: lazy(
    () => import('./components/EntityUpload/EntityUploadModal'),
  ),
  EntityViewScopeEditorModal: lazy(
    () =>
      import('./components/EntityViewScopeEditor/EntityViewScopeEditorModal'),
  ),
  ErrorPage: lazy(() => import('./components/error/ErrorPage')),
  EvaluationCard: lazy(() => import('./components/Evaluation/EvaluationCard')),
  EvaluationEditorPage: lazy(
    () => import('./components/Evaluation/EvaluationEditorPage'),
  ),
  FavoritesPage: lazy(() => import('./components/favorites/FavoritesPage')),
  ForumSearch: lazy(() => import('./components/ForumSearch/ForumSearch')),
  FullWidthAlert: lazy(
    () => import('./components/FullWidthAlert/FullWidthAlert'),
  ),
  GoogleAnalytics: lazy(
    () => import('./components/GoogleAnalytics/GoogleAnalytics'),
  ),
  GovernanceMarkdownGithub: lazy(
    () => import('./components/Markdown/GovernanceMarkdownGithub'),
  ),
  GridPage: lazy(() => import('./features/curator/GridPage/GridPage')),
  HasAccess: lazy(() => import('./components/HasAccess/HasAccessV2')),
  HelpPopover: lazy(() => import('./components/HelpPopover/HelpPopover')),
  HtmlPreview: lazy(
    () => import('./components/FilePreview/HtmlPreview/HtmlPreview'),
  ),
  IDUReport: lazy(() => import('./components/IDUReport/IDUReport')),
  IconSvg: lazy(() => import('./components/IconSvg/IconSvg')),
  MetadataTasksPage: lazy(
    () =>
      import('./features/entity/metadata-task/components/MetadataTasksPage'),
  ),
  OAuthManagement: lazy(
    () => import('./components/OAuthClientManagement/OAuthManagement'),
  ),
  OrientationBanner: lazy(
    () => import('./components/OrientationBanner/OrientationBanner'),
  ),
  PageProgress: lazy(() => import('./components/PageProgress/PageProgress')),
  ProjectDataAvailability: lazy(
    () => import('./components/ProjectStorage/ProjectDataAvailability'),
  ),
  ProvenanceGraph: lazy(
    () => import('./components/ProvenanceGraph/ProvenanceGraph'),
  ),
  QueryWrapperPlotNav: lazy(
    () => import('./components/QueryWrapperPlotNav/QueryWrapperPlotNav'),
  ),
  RejectProfileValidationRequestModal: lazy(
    () => import('./components/dataaccess/RejectProfileValidationRequestModal'),
  ),
  ReviewerDashboard: lazy(
    () => import('./components/dataaccess/ReviewerDashboard'),
  ),
  ShareThisPage: lazy(() => import('./components/ShareThisPage')),
  SkeletonButton: lazy(() => import('./components/Skeleton/SkeletonButton')),
  SqlDefinedTableEditorModal: lazy(
    () =>
      import('./components/SqlDefinedTableEditor/SqlDefinedTableEditorModal'),
  ),
  StandaloneQueryWrapper: lazy(
    () => import('./components/StandaloneQueryWrapper/StandaloneQueryWrapper'),
  ),
  StatisticsPlot: lazy(() => import('./components/StatisticsPlot')),
  SubmissionViewScopeEditorModal: lazy(
    () =>
      import(
        './components/SubmissionViewScopeEditor/SubmissionViewScopeEditorModal'
      ),
  ),
  SubscriptionPage: lazy(() => import('./components/SubscriptionPage')),
  SynapseChat: lazy(() => import('./components/SynapseChat/SynapseChat')),
  SynapseGrid: lazy(() => import('./components/DataGrid/SynapseGrid')),
  SynapseFooter: lazy(() => import('./components/SynapseFooter/SynapseFooter')),
  SynapseHomepageV2: lazy(
    () => import('./components/SynapseHomepageV2/SynapseHomepageV2'),
  ),
  SynapseNavDrawer: lazy(
    () => import('./components/SynapseNavDrawer/SynapseNavDrawer'),
  ),
  SynapsePlansPage: lazy(
    () => import('./components/SynapseHomepageV2/SynapsePlansPage'),
  ),
  SynapsePortalBanners: lazy(
    () => import('./components/SynapsePortalBanners/SynapsePortalBanners'),
  ),
  SynapseSearchPage: lazy(
    () => import('./components/SynapseSearchPageResults/SynapseSearchPage'),
  ),
  SynapseToastContainer,
  TableColumnSchemaEditor: lazy(
    () =>
      import('./components/TableColumnSchemaEditor/TableColumnSchemaEditor'),
  ),
  TrashCanList: lazy(() => import('./components/trash/TrashCanList')),
  UserAccessRequestHistoryPlace: lazy(
    () =>
      import(
        './components/dataaccess/UserAccessRequestHistory/UserAccessRequestHistoryPlace'
      ),
  ),
  UserCard: lazy(() => import('./components/UserCard/UserCard')),
  UserProfileLinks: lazy(
    () => import('./components/UserProfileLinks/UserProfileLinks'),
  ),
  displayToast,
  getCurrentCookiePreferences,
}

const Analytics = {
  sendAnalyticsEvent,
  sendSearchQuerySubmittedEvent,
  sendSearchResultsReturnedEvent,
  sendSearchResultReturnedEvent,
  sendSearchResultClickedEvent,
}

// Include the version in the build
const SynapseReactClientVersion = version

export {
  Analytics,
  HttpClient,
  SynapseReactClientVersion,
  SynapseComponents,
  SynapseConstants,
  SynapseClient,
  SynapseContext,
  SynapseEnums,
  SynapseQueries,
  Palettes,
  xssOptions,
  SynapseSessionManager,
}
