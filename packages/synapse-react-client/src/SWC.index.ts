/**
 * SWC.index.ts represents the entry point for the Synapse React Client library as it is published to NPM and
 * used by SynapseWebClient.
 *
 * If you wish to export a component or other object to be used by SynapseWebClient, you should add it to this file.
 */

import { version } from '../package.json'
import AccessRequirementAclEditor from './components/AccessRequirementAclEditor'
import AccessRequirementList from './components/AccessRequirementList/AccessRequirementList'
import AccessRequirementRelatedProjectsList from './components/AccessRequirementRelatedProjectsList'
import AccountLevelBadges from './components/AccountLevelBadges/AccountLevelBadges'
import CertificationQuiz from './components/CertificationQuiz/CertificationQuiz'
import AvailableEvaluationQueueList from './components/ChallengeSubmission/AvailableEvaluationQueueList'
import CookiesNotification from './components/CookiesNotification'
import CreateOrUpdateAccessRequirementWizard from './components/CreateOrUpdateAccessRequirementWizard'
import CreateTableViewWizard from './components/CreateTableViewWizard/CreateTableViewWizard'
import RejectProfileValidationRequestModal from './components/dataaccess/RejectProfileValidationRequestModal'
import ReviewerDashboard from './components/dataaccess/ReviewerDashboard'
import UserAccessRequestHistoryPlace from './components/dataaccess/UserAccessRequestHistory/UserAccessRequestHistoryPlace'
import CreateOrUpdateDoiModal from './components/doi/CreateOrUpdateDoiModal'
import DownloadConfirmation from './components/download_list/FolderDownloadConfirmation'
import DownloadCartPage from './components/DownloadCart/DownloadCartPage'
import EntityModal from './components/entity/metadata/EntityModal'
import EntityActionMenu from './components/entity/page/action_menu/EntityActionMenu'
import EntityPageBreadcrumbs from './components/entity/page/breadcrumbs/EntityPageBreadcrumbs'
import CreatedByModifiedBy from './components/entity/page/CreatedByModifiedBy'
import EntityPageTitleBar from './components/entity/page/title_bar/EntityPageTitleBar'
import EntityAclEditorModal from './components/EntityAclEditor/EntityAclEditorModal'
import EntityBadgeIcons from './components/EntityBadgeIcons/EntityBadgeIcons'
import EntityCitation from './components/EntityCitation'
import EntityFinder from './components/EntityFinder/EntityFinder'
import EntityForm from './components/EntityForm/EntityForm'
import EntityHeaderTable from './components/EntityHeaderTable'
import EntityTypeIcon from './components/EntityIcon'
import EntityUploadModal from './components/EntityUpload/EntityUploadModal'
import EntityViewScopeEditorModal from './components/EntityViewScopeEditor/EntityViewScopeEditorModal'
import ErrorPage from './components/error/ErrorPage'
import EvaluationCard from './components/Evaluation/EvaluationCard'
import EvaluationEditorPage from './components/Evaluation/EvaluationEditorPage'
import FavoritesPage from './components/favorites/FavoritesPage'
import HtmlPreview from './components/FilePreview/HtmlPreview/HtmlPreview'
import DiscussionThread from './components/Forum/DiscussionThread'
import ForumSearch from './components/ForumSearch/ForumSearch'
import FullWidthAlert from './components/FullWidthAlert/FullWidthAlert'
import GoogleAnalytics from './components/GoogleAnalytics/GoogleAnalytics'
import HasAccess from './components/HasAccess/HasAccessV2'
import HelpPopover from './components/HelpPopover/HelpPopover'
import IconSvg from './components/IconSvg/IconSvg'
import IDUReport from './components/IDUReport/IDUReport'
import GovernanceMarkdownGithub from './components/Markdown/GovernanceMarkdownGithub'
import OAuthManagement from './components/OAuthClientManagement/OAuthManagement'
import OrientationBanner from './components/OrientationBanner/OrientationBanner'
import PageProgress from './components/PageProgress/PageProgress'
import ProjectDataAvailability from './components/ProjectStorage/ProjectDataAvailability'
import ProvenanceGraph from './components/ProvenanceGraph/ProvenanceGraph'
import QueryWrapperPlotNav from './components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import SkeletonButton from './components/Skeleton/SkeletonButton'
import SqlDefinedTableEditorModal from './components/SqlDefinedTableEditor/SqlDefinedTableEditorModal'
import StandaloneQueryWrapper from './components/StandaloneQueryWrapper/StandaloneQueryWrapper'
import StatisticsPlot from './components/StatisticsPlot'
import SubmissionViewScopeEditorModal from './components/SubmissionViewScopeEditor/SubmissionViewScopeEditorModal'
import SubscriptionPage from './components/SubscriptionPage'
import SynapseChat from './components/SynapseChat/SynapseChat'
import SynapseFooter from './components/SynapseFooter/SynapseFooter'
import SynapseHomepageV2 from './components/SynapseHomepageV2/SynapseHomepageV2'
import SynapsePlansPage from './components/SynapseHomepageV2/SynapsePlansPage'
import SynapseNavDrawer from './components/SynapseNavDrawer/SynapseNavDrawer'
import DatasetItemsEditor from './components/SynapseTable/datasets/DatasetItemsEditor'
import TableColumnSchemaEditor from './components/TableColumnSchemaEditor/TableColumnSchemaEditor'
import SynapsePortalBanners from './components/SynapsePortalBanners/SynapsePortalBanners'
import SynapseGrid from './components/DataGrid/SynapseGrid'

import {
  displayToast,
  SynapseToastContainer,
} from './components/ToastMessage/ToastMessage'
import TrashCanList from './components/trash/TrashCanList'
import UserCard from './components/UserCard/UserCard'
import UserProfileLinks from './components/UserProfileLinks/UserProfileLinks'
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
  AccessRequirementAclEditor,
  AccessRequirementList,
  AccessRequirementRelatedProjectsList,
  AccountLevelBadges,
  AvailableEvaluationQueueList,
  CertificationQuiz,
  CookiesNotification,
  CreateOrUpdateAccessRequirementWizard,
  CreateOrUpdateDoiModal,
  CreateTableViewWizard,
  CreatedByModifiedBy,
  DatasetItemsEditor,
  DiscussionThread,
  DownloadCartPage,
  DownloadConfirmation,
  EntityAclEditorModal,
  EntityActionMenu,
  EntityBadgeIcons,
  EntityCitation,
  EntityFinder,
  EntityForm,
  EntityHeaderTable,
  EntityModal,
  EntityPageBreadcrumbs,
  EntityPageTitleBar,
  EntityTypeIcon,
  EntityUploadModal,
  EntityViewScopeEditorModal,
  ErrorPage,
  EvaluationCard,
  EvaluationEditorPage,
  FavoritesPage,
  ForumSearch,
  FullWidthAlert,
  GoogleAnalytics,
  GovernanceMarkdownGithub,
  HasAccess,
  HelpPopover,
  HtmlPreview,
  IDUReport,
  IconSvg,
  OAuthManagement,
  OrientationBanner,
  PageProgress,
  ProjectDataAvailability,
  ProvenanceGraph,
  QueryWrapperPlotNav,
  RejectProfileValidationRequestModal,
  ReviewerDashboard,
  SkeletonButton,
  SqlDefinedTableEditorModal,
  StandaloneQueryWrapper,
  StatisticsPlot,
  SubmissionViewScopeEditorModal,
  SubscriptionPage,
  SynapseChat,
  SynapseFooter,
  SynapseHomepageV2,
  SynapseNavDrawer,
  SynapsePlansPage,
  SynapsePortalBanners,
  SynapseToastContainer,
  TableColumnSchemaEditor,
  TrashCanList,
  UserAccessRequestHistoryPlace,
  UserCard,
  SynapseGrid,
  UserProfileLinks,
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
}
