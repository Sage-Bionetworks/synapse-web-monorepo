import { SkeletonButton } from './components/Skeleton/SkeletonButton'
import { AccountLevelBadges } from './components/AccountLevelBadges/AccountLevelBadges'
import ChangePassword from './components/ChangePassword/ChangePassword'
import { ReviewerDashboard } from './components/dataaccess/ReviewerDashboard'
import { FolderDownloadConfirmation } from './components/download_list/FolderDownloadConfirmation'
import DirectProgrammaticDownload from './components/DownloadCart/DirectProgrammaticDownload'
import { DownloadCartPage } from './components/DownloadCart/DownloadCartPage'
import ShowDownloadV2 from './components/DownloadCart/ShowDownloadV2'
import { SchemaDrivenAnnotationEditor } from './components/SchemaDrivenAnnotationEditor/SchemaDrivenAnnotationEditor'
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
import FullWidthAlert from './components/FullWidthAlert/FullWidthAlert'
import { HasAccessV2 as HasAccess } from './components/HasAccess/HasAccessV2'
import { HelpPopover } from './components/HelpPopover/HelpPopover'
import ProjectViewCarousel from './components/ProjectViewCarousel/ProjectViewCarousel'
import IconSvg from './components/IconSvg/IconSvg'
import StandaloneLoginForm from './components/Authentication/StandaloneLoginForm'
import LoginPage from './components/Authentication/LoginPage'
import PageProgress from './components/PageProgress/PageProgress'
import { AccessTokenPage } from './components/AccessTokenPage/AccessTokenPage'
import PlotlyWrapper from './components/PlotlyWrapper'
import { ProgrammaticInstructionsModal } from './components/ProgrammaticInstructionsModal/ProgrammaticInstructionsModal'
import QueryWrapperPlotNav from './components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import StatisticsPlot from './components/StatisticsPlot'
import { SynapseHomepage } from './components/SynapseHomepage'
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
import AvailableEvaluationQueueList from './components/ChallengeSubmission/AvailableEvaluationQueueList'

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
  Login: StandaloneLoginForm,
  LoginPage,
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
  ProjectViewCarousel,
  SynapseHomepage,
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
}

// Include the version in the build
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-member-access
const SynapseReactClientVersion = require('../package.json').version

export {
  HttpClient,
  SynapseReactClientVersion,
  SynapseComponents,
  SynapseConstants,
  SynapseClient,
  SynapseContext,
  SynapseEnums,
  SynapseQueries,
  Palettes,
}
