import { version } from '../package.json'
import AccessRequirementAclEditor from './components/AccessRequirementAclEditor'
import AccessRequirementList from './components/AccessRequirementList/AccessRequirementList'
import AccessRequirementRelatedProjectsList from './components/AccessRequirementRelatedProjectsList'
import { AccountLevelBadges } from './components/AccountLevelBadges/AccountLevelBadges'
import StandaloneLoginForm from './components/Authentication/StandaloneLoginForm'
import TwoFactorAuthSettingsPanel from './components/Authentication/TwoFactorAuthSettingsPanel'
import TwoFactorBackupCodes from './components/Authentication/TwoFactorBackupCodes'
import TwoFactorEnrollmentForm from './components/Authentication/TwoFactorEnrollmentForm'
import CertificationQuiz from './components/CertificationQuiz/CertificationQuiz'
import AvailableEvaluationQueueList from './components/ChallengeSubmission/AvailableEvaluationQueueList'
import ChangePassword from './components/ChangePassword/ChangePassword'
import { CookiesNotification } from './components/CookiesNotification'
import CreateOrUpdateAccessRequirementWizard from './components/CreateOrUpdateAccessRequirementWizard'
import CreateTableViewWizard from './components/CreateTableViewWizard/CreateTableViewWizard'
import { RejectProfileValidationRequestModal } from './components/dataaccess/RejectProfileValidationRequestModal'
import { ReviewerDashboard } from './components/dataaccess/ReviewerDashboard'
import { FolderDownloadConfirmation } from './components/download_list/FolderDownloadConfirmation'
import DirectProgrammaticDownload from './components/DownloadCart/DirectProgrammaticDownload'
import { DownloadCartPage } from './components/DownloadCart/DownloadCartPage'
import ShowDownloadV2 from './components/DownloadCart/ShowDownloadV2'
import { EntityModal } from './components/entity/metadata/EntityModal'
import EntityActionMenu from './components/entity/page/action_menu/EntityActionMenu'
import EntityPageBreadcrumbs from './components/entity/page/breadcrumbs/EntityPageBreadcrumbs'
import { CreatedByModifiedBy } from './components/entity/page/CreatedByModifiedBy'
import EntityPageTitleBar from './components/entity/page/title_bar/EntityPageTitleBar'
import EntityAclEditorModal from './components/EntityAclEditor/EntityAclEditorModal'
import { EntityBadgeIcons } from './components/EntityBadgeIcons/EntityBadgeIcons'
import { EntityFileBrowser } from './components/EntityFileBrowser'
import { EntityFinder } from './components/EntityFinder/EntityFinder'
import EntityForm from './components/EntityForm/EntityForm'
import EntityHeaderTable from './components/EntityHeaderTable'
import { EntityTypeIcon } from './components/EntityIcon'
import { EntityUploadModal } from './components/EntityUpload/EntityUploadModal'
import EntityViewScopeEditorModal from './components/EntityViewScopeEditor/EntityViewScopeEditorModal'
import ErrorPage from './components/error/ErrorPage'
import { EvaluationCard } from './components/Evaluation/EvaluationCard'
import { EvaluationEditorPage } from './components/Evaluation/EvaluationEditorPage'
import FavoritesPage from './components/favorites/FavoritesPage'
import HtmlPreview from './components/FilePreview/HtmlPreview/HtmlPreview'
import ForumSearch from './components/ForumSearch/ForumSearch'
import FullWidthAlert from './components/FullWidthAlert/FullWidthAlert'
import { GoogleAnalytics } from './components/GoogleAnalytics/GoogleAnalytics'
import { HasAccessV2 as HasAccess } from './components/HasAccess/HasAccessV2'
import { HelpPopover } from './components/HelpPopover/HelpPopover'
import IconSvg from './components/IconSvg/IconSvg'
import IDUReport from './components/IDUReport/IDUReport'
import {
  GovernanceMarkdownGithub,
  MarkdownGithubLatestTag,
} from './components/Markdown/MarkdownGithub'
import { OAuthManagement } from './components/OAuthClientManagement/OAuthManagement'
import OrientationBanner from './components/OrientationBanner/OrientationBanner'
import PageProgress from './components/PageProgress/PageProgress'
import PlotlyWrapper from './components/PlotlyWrapper'
import { ProgrammaticInstructionsModal } from './components/ProgrammaticInstructionsModal/ProgrammaticInstructionsModal'
import ProgrammaticTableDownload from './components/ProgrammaticTableDownload/ProgrammaticTableDownload'
import { ProjectDataAvailability } from './components/ProjectStorage/ProjectDataAvailability'
import ProvenanceGraph from './components/ProvenanceGraph/ProvenanceGraph'
import QueryWrapperPlotNav from './components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import { SchemaDrivenAnnotationEditor } from './components/SchemaDrivenAnnotationEditor/SchemaDrivenAnnotationEditor'
import { SkeletonButton } from './components/Skeleton/SkeletonButton'
import SqlDefinedTableEditorModal from './components/SqlDefinedTableEditor/SqlDefinedTableEditorModal'
import StandaloneQueryWrapper from './components/StandaloneQueryWrapper/StandaloneQueryWrapper'
import StatisticsPlot from './components/StatisticsPlot'
import SubmissionViewScopeEditorModal from './components/SubmissionViewScopeEditor/SubmissionViewScopeEditorModal'
import SubscriptionPage from './components/SubscriptionPage'
import SynapseChat from './components/SynapseChat/SynapseChat'
import { SynapseFooter } from './components/SynapseFooter/SynapseFooter'
import {
  SynapseHomepageV2,
  SynapsePlansPage,
} from './components/SynapseHomepageV2'
import { SynapseNavDrawer } from './components/SynapseNavDrawer/SynapseNavDrawer'
import { DatasetItemsEditor } from './components/SynapseTable/datasets/DatasetItemsEditor'
import TableColumnSchemaEditor from './components/TableColumnSchemaEditor/TableColumnSchemaEditor'
import TableColumnSchemaForm from './components/TableColumnSchemaEditor/TableColumnSchemaForm'
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions'
import {
  displayToast,
  SynapseToastContainer,
} from './components/ToastMessage/ToastMessage'
import { TrashCanList } from './components/trash/TrashCanList'
import UserCard from './components/UserCard/UserCard'
import UserProfileLinks from './components/UserProfileLinks/UserProfileLinks'
import SynapseClient, { HttpClient } from './synapse-client'
import { KeyFactory } from './synapse-queries/KeyFactory'
import Palettes from './theme/palette/Palettes'
import { FullContextProvider } from './utils/context/FullContextProvider'
import {
  SynapseContextConsumer,
  SynapseContextProvider,
  useSynapseContext,
} from './utils/context/SynapseContext'
import { BackendDestinationEnum } from './utils/functions/getEndpoint'
import { xssOptions } from './utils/functions/SanitizeHtmlUtils'
import { getCurrentCookiePreferences } from './utils/hooks/useCookiePreferences'
import * as SynapseConstants from './utils/SynapseConstants'

// Also include scss in the bundle
import './style/main.scss'

const SynapseEnums = {
  BackendDestinationEnum,
}

const SynapseQueries = {
  KeyFactory,
}

const SynapseContext = {
  FullContextProvider,
  SynapseContextProvider,
  SynapseContextConsumer,
  useSynapseContext,
}

const SynapseComponents = {
  Login: StandaloneLoginForm,
  EntityForm,
  UserCard,
  StatisticsPlot,
  HasAccess,
  EvaluationCard,
  EvaluationEditorPage,
  AccountLevelBadges,
  TermsAndConditions,
  PageProgress,
  SynapseHomepageV2,
  SynapsePlansPage,
  SynapseFooter,
  EntityFileBrowser,
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
  EntityModal,
  SynapseToastContainer,
  displayToast,
  IconSvg,
  UserProfileLinks,
  PlotlyWrapper,
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
}

// Include the version in the build
const SynapseReactClientVersion = version

export {
  HttpClient,
  SynapseReactClientVersion,
  SynapseComponents,
  SynapseConstants,
  SynapseClient,
  SynapseContext,
  SynapseEnums,
  Palettes,
  xssOptions,
  SynapseQueries,
}
