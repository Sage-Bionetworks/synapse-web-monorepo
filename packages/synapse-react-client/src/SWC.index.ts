/**
 * SWC.index.ts represents the entry point for the Synapse React Client library as it is published to NPM and
 * used by SynapseWebClient.
 *
 * If you wish to export a component or other object to be used by SynapseWebClient, you should add it to this file.
 */

import UserAccessRequestHistoryPlace from '@/components/dataaccess/UserAccessRequestHistory/UserAccessRequestHistoryPlace'
import { EntityUploadModal } from './components/EntityUpload/EntityUploadModal'
import { SkeletonButton } from './components/Skeleton/SkeletonButton'
import { AccountLevelBadges } from './components/AccountLevelBadges/AccountLevelBadges'
import ChangePassword from './components/ChangePassword/ChangePassword'
import { ReviewerDashboard } from './components/dataaccess/ReviewerDashboard'
import { FolderDownloadConfirmation } from './components/download_list/FolderDownloadConfirmation'
import DirectProgrammaticDownload from './components/DownloadCart/DirectProgrammaticDownload'
import { DownloadCartPage } from './components/DownloadCart/DownloadCartPage'
import ShowDownloadV2 from './components/DownloadCart/ShowDownloadV2'
import { SchemaDrivenAnnotationEditor } from './components/SchemaDrivenAnnotationEditor/SchemaDrivenAnnotationEditor'
import { EntityCitation } from './components/EntityCitation'
import LinkWithIcon from './components/LinkWithIcon/LinkWithIcon'
import { EntityModal } from './components/entity/metadata/EntityModal'
import { EntityBadgeIcons } from './components/EntityBadgeIcons/EntityBadgeIcons'
import EntityForm from './components/EntityForm/EntityForm'
import { EntityTypeIcon } from './components/EntityIcon'
import { EntityFinder } from './components/EntityFinder/EntityFinder'
import ErrorPage from './components/error/ErrorPage'
import { EvaluationCard } from './components/Evaluation/EvaluationCard'
import { EvaluationEditorPage } from './components/Evaluation/EvaluationEditorPage'
import FavoritesPage from './components/favorites/FavoritesPage'
import ForumSearch from './components/ForumSearch/ForumSearch'
import { DiscussionThread } from './components/Forum/DiscussionThread'
import FullWidthAlert from './components/FullWidthAlert/FullWidthAlert'
import { HasAccessV2 as HasAccess } from './components/HasAccess/HasAccessV2'
import { HelpPopover } from './components/HelpPopover/HelpPopover'
import IconSvg from './components/IconSvg/IconSvg'
import StandaloneLoginForm from './components/Authentication/StandaloneLoginForm'
import PageProgress from './components/PageProgress/PageProgress'
import { AccessTokenPage } from './components/AccessTokenPage/AccessTokenPage'
import { ProgrammaticInstructionsModal } from './components/ProgrammaticInstructionsModal/ProgrammaticInstructionsModal'
import QueryWrapperPlotNav from './components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import StatisticsPlot from './components/StatisticsPlot'
import {
  SynapseHomepageV2,
  SynapsePlansPage,
} from './components/SynapseHomepageV2'
import { SynapseNavDrawer } from './components/SynapseNavDrawer/SynapseNavDrawer'
import { DatasetItemsEditor } from './components/SynapseTable/datasets/DatasetItemsEditor'
import StandaloneQueryWrapper from './components/StandaloneQueryWrapper/StandaloneQueryWrapper'
import ProgrammaticTableDownload from './components/ProgrammaticTableDownload/ProgrammaticTableDownload'
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions'
import {
  displayToast,
  SynapseToastContainer,
} from './components/ToastMessage/ToastMessage'
import { TrashCanList } from './components/trash/TrashCanList'
import { OAuthManagement } from './components/OAuthClientManagement/OAuthManagement'
import UserCard from './components/UserCard/UserCard'
import UserProfileLinks from './components/UserProfileLinks/UserProfileLinks'
import CertificationQuiz from './components/CertificationQuiz/CertificationQuiz'
import ProvenanceGraph from './components/ProvenanceGraph/ProvenanceGraph'
import IDUReport from './components/IDUReport/IDUReport'
import HtmlPreview from './components/FilePreview/HtmlPreview/HtmlPreview'
import EntityPageBreadcrumbs from './components/entity/page/breadcrumbs/EntityPageBreadcrumbs'
import EntityActionMenu from './components/entity/page/action_menu/EntityActionMenu'
import EntityPageTitleBar from './components/entity/page/title_bar/EntityPageTitleBar'
import { CreatedByModifiedBy } from './components/entity/page/CreatedByModifiedBy'
import SynapseClient, { HttpClient } from './synapse-client'
import * as SynapseQueries from './synapse-queries'
import { SynapseConstants } from './utils'
import Palettes from './theme/palette/Palettes'
import { sendAnalyticsEvent } from './utils/analytics/sendAnalyticsEvent'
import {
  sendSearchQuerySubmittedEvent,
  sendSearchResultClickedEvent,
  sendSearchResultReturnedEvent,
  sendSearchResultsReturnedEvent,
} from './utils/analytics/sendSearchEvent'
import {
  SynapseContextConsumer,
  SynapseContextProvider,
  useSynapseContext,
} from './utils/context/SynapseContext'
import TwoFactorBackupCodes from './components/Authentication/TwoFactorBackupCodes'
import TwoFactorEnrollmentForm from './components/Authentication/TwoFactorEnrollmentForm'
import TwoFactorAuthSettingsPanel from './components/Authentication/TwoFactorAuthSettingsPanel'
import { FullContextProvider } from './utils/context/FullContextProvider'
import SubscriptionPage from './components/SubscriptionPage'
import OrientationBanner from './components/OrientationBanner/OrientationBanner'
import AccessRequirementList from './components/AccessRequirementList/AccessRequirementList'
import { BackendDestinationEnum } from './utils/functions'
import TableColumnSchemaForm from './components/TableColumnSchemaEditor/TableColumnSchemaForm'
import EntityHeaderTable from './components/EntityHeaderTable'
import AccessRequirementRelatedProjectsList from './components/AccessRequirementRelatedProjectsList'
import CreateTableViewWizard from './components/CreateTableViewWizard/CreateTableViewWizard'
import TableColumnSchemaEditor from './components/TableColumnSchemaEditor/TableColumnSchemaEditor'
import SqlDefinedTableEditorModal from './components/SqlDefinedTableEditor/SqlDefinedTableEditorModal'
import EntityViewScopeEditorModal from './components/EntityViewScopeEditor/EntityViewScopeEditorModal'
import SubmissionViewScopeEditorModal from './components/SubmissionViewScopeEditor/SubmissionViewScopeEditorModal'
import AvailableEvaluationQueueList from './components/ChallengeSubmission/AvailableEvaluationQueueList'
import AccessRequirementAclEditor from './components/AccessRequirementAclEditor'
import CreateOrUpdateAccessRequirementWizard from './components/CreateOrUpdateAccessRequirementWizard'
import { SynapseFooter } from './components/SynapseFooter/SynapseFooter'
import { GoogleAnalytics } from './components/GoogleAnalytics/GoogleAnalytics'
import { CookiesNotification } from './components/CookiesNotification'
import { getCurrentCookiePreferences } from './utils/hooks'
import EntityAclEditorModal from './components/EntityAclEditor/EntityAclEditorModal'
import SynapseChat from './components/SynapseChat/SynapseChat'
import { version } from '../package.json'
import { xssOptions } from './utils/functions/SanitizeHtmlUtils'
import { RejectProfileValidationRequestModal } from './components/dataaccess/RejectProfileValidationRequestModal'
import { GovernanceMarkdownGithub } from './components/Markdown/MarkdownGithub'
import { MarkdownGithubLatestTag } from './components/Markdown/MarkdownGithub'
import { ProjectDataAvailability } from './components/ProjectStorage/ProjectDataAvailability'
import { CreateOrUpdateDoiModal } from './components/doi/CreateOrUpdateDoiModal'

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
  LinkWithIcon,
  Login: StandaloneLoginForm,
  EntityForm,
  UserCard,
  StatisticsPlot,
  HasAccess,
  EvaluationCard,
  EvaluationEditorPage,
  AccessTokenPage,
  AccountLevelBadges,
  TermsAndConditions,
  PageProgress,
  SynapseHomepageV2,
  SynapsePlansPage,
  SynapseFooter,
  EntityFinder,
  ErrorPage,
  EntityBadgeIcons,
  DownloadCartPage,
  ShowDownloadV2,
  DownloadConfirmation: FolderDownloadConfirmation,
  FullWidthAlert: FullWidthAlert,
  SchemaDrivenAnnotationEditor,
  SynapseNavDrawer,
  FavoritesPage,
  EntityCitation,
  EntityModal,
  SynapseToastContainer,
  displayToast,
  IconSvg,
  UserProfileLinks,
  DatasetItemsEditor,
  EntityTypeIcon,
  HelpPopover,
  ProgrammaticTableDownload,
  DirectProgrammaticDownload,
  ProgrammaticInstructionsModal,
  SkeletonButton,
  QueryWrapperPlotNav,
  StandaloneQueryWrapper,
  ChangePassword,
  ForumSearch,
  DiscussionThread,
  ReviewerDashboard,
  ProvenanceGraph,
  TrashCanList,
  OAuthManagement,
  CertificationQuiz,
  HtmlPreview,
  IDUReport,
  EntityPageBreadcrumbs,
  EntityActionMenu,
  EntityPageTitleBar,
  CreatedByModifiedBy,
  TwoFactorAuthSettingsPanel,
  TwoFactorBackupCodes,
  TwoFactorEnrollmentForm,
  SubscriptionPage,
  OrientationBanner,
  AvailableEvaluationQueueList,
  AccessRequirementList,
  TableColumnSchemaForm,
  EntityHeaderTable,
  AccessRequirementRelatedProjectsList,
  CreateTableViewWizard,
  TableColumnSchemaEditor,
  SqlDefinedTableEditorModal,
  EntityViewScopeEditorModal,
  SubmissionViewScopeEditorModal,
  AccessRequirementAclEditor,
  CreateOrUpdateAccessRequirementWizard,
  GoogleAnalytics,
  CookiesNotification,
  getCurrentCookiePreferences,
  EntityAclEditorModal,
  SynapseChat,
  RejectProfileValidationRequestModal,
  GovernanceMarkdownGithub,
  MarkdownGithubLatestTag,
  ProjectDataAvailability,
  EntityUploadModal,
  CreateOrUpdateDoiModal,
  UserAccessRequestHistoryPlace,
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
