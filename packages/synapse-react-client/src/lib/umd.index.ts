import 'regenerator-runtime/runtime'
import { SkeletonButton } from './assets/skeletons/SkeletonButton'
import { AccountLevelBadge } from './containers/AccountLevelBadge'
import ChangePassword from './containers/ChangePassword'
import { ReviewerDashboard } from './containers/dataaccess/ReviewerDashboard'
import { DownloadConfirmation } from './containers/download_list/DownloadConfirmation'
import DirectProgrammaticDownload from './containers/download_list_v2/DirectProgrammaticDownload'
import { DownloadCartPage } from './containers/download_list_v2/DownloadCartPage'
import ShowDownloadV2 from './containers/download_list_v2/ShowDownloadV2'
import { SchemaDrivenAnnotationEditor } from './containers/entity/annotations/SchemaDrivenAnnotationEditor'
import { EntityModal } from './containers/entity/metadata/EntityModal'
import { EntityBadgeIcons } from './containers/EntityBadgeIcons'
import EntityForm from './containers/EntityForm'
import { EntityTypeIcon } from './containers/EntityIcon'
import { EntityFinder } from './containers/entity_finder/EntityFinder'
import ErrorPage from './containers/error/ErrorPage'
import { EvaluationCard } from './containers/evaluation_queues/EvaluationCard'
import { EvaluationEditorPage } from './containers/evaluation_queues/EvaluationEditorPage'
import FavoritesPage from './containers/favorites/FavoritesPage'
import ForumSearch from './containers/ForumSearch'
import FullWidthAlert from './containers/FullWidthAlert'
import { HasAccessV2 as HasAccess } from './containers/access_requirements/HasAccessV2'
import { HelpPopover } from './containers/HelpPopover'
import ProjectViewCarousel from './containers/home_page/project_view_carousel/ProjectViewCarousel'
import IconSvg from './containers/IconSvg'
import StandaloneLoginForm from './containers/auth/StandaloneLoginForm'
import LoginPage from './containers/auth/LoginPage'
import PageProgress from './containers/PageProgress'
import { AccessTokenPage } from './containers/personal_access_token/AccessTokenPage'
import PlotlyWrapper from './containers/PlotlyWrapper'
import { ProgrammaticInstructionsModal } from './containers/ProgrammaticInstructionsModal'
import QueryWrapperPlotNav from './containers/query_wrapper_plot_nav/QueryWrapperPlotNav'
import StatisticsPlot from './containers/StatisticsPlot'
import { SynapseHomepage } from './containers/SynapseHomepage'
import { SynapseNavDrawer } from './containers/SynapseNavDrawer'
import { DatasetItemsEditor } from './containers/table/datasets/DatasetItemsEditor'
import StandaloneQueryWrapper from './containers/table/StandaloneQueryWrapper'
import ProgrammaticTableDownload from './containers/table/table-top/ProgrammaticOptions'
import TermsAndConditions from './containers/TermsAndConditions'
import { displayToast, SynapseToastContainer } from './containers/ToastMessage'
import { TrashCanList } from './containers/trash/TrashCanList'
import { OAuthManagement } from './containers/oauth/OAuthManagement'
import UserCard from './containers/UserCard'
import UserProfileLinks from './containers/user_profile_links/UserProfileLinks'
import CertificationQuiz from './containers/CertificationQuiz'
import ProvenanceGraph from './containers/provenance/ProvenanceGraph'
import IDUReport from './containers/IDUReport'
import HtmlPreview from './containers/FilePreview/HtmlPreview/HtmlPreview'
import EntityPageBreadcrumbs from './containers/entity/page/breadcrumbs/EntityPageBreadcrumbs'
import EntityActionMenu from './containers/entity/page/action_menu/EntityActionMenu'
import EntityPageTitleBar from './containers/entity/page/title_bar/EntityPageTitleBar'
import { CreatedByModifiedBy } from './containers/entity/page/CreatedByModifiedBy'
import { SynapseClient, SynapseConstants } from './utils'
import Palettes from './utils/theme/palette/Palettes'
import {
  SynapseContextConsumer,
  SynapseContextProvider,
  useSynapseContext,
} from './utils/SynapseContext'
import { SynapseQueries } from './utils'
import TwoFactorBackupCodes from './containers/auth/TwoFactorBackupCodes'
import TwoFactorEnrollmentForm from './containers/auth/TwoFactorEnrollmentForm'
import TwoFactorAuthSettingsPanel from './containers/auth/TwoFactorAuthSettingsPanel'
import { FullContextProvider } from './utils/FullContextProvider'

// Also include scss in the bundle
import './style/main.scss'

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
  AccountLevelBadge,
  TermsAndConditions,
  PageProgress,
  ProjectViewCarousel,
  SynapseHomepage,
  EntityFinder,
  ErrorPage,
  EntityBadgeIcons,
  DownloadCartPage,
  ShowDownloadV2,
  DownloadConfirmation,
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
}

// Include the version in the build
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-member-access
const SynapseReactClientVersion = require('../../package.json').version

export {
  SynapseReactClientVersion,
  SynapseComponents,
  SynapseConstants,
  SynapseClient,
  SynapseContext,
  SynapseQueries,
  Palettes,
}
