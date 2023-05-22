import {
  AccessTokenPage,
  AccountLevelBadge,
  displayToast,
  DownloadCartPage,
  EntityBadgeIcons,
  EvaluationCard,
  EvaluationEditorPage,
  SkeletonButton,
  SynapseToastContainer,
  SubscriptionPage,
} from './components'
import ChangePassword from './components/ChangePassword/ChangePassword'
import { ReviewerDashboard } from './components/dataaccess/ReviewerDashboard'
import { DownloadConfirmation } from './components/download_list'
import DirectProgrammaticDownload from './components/DownloadCart/DirectProgrammaticDownload'
import ShowDownloadV2 from './components/DownloadCart/ShowDownloadV2'
import { SchemaDrivenAnnotationEditor } from './components/entity/annotations/SchemaDrivenAnnotationEditor'
import { EntityModal } from './components/entity/metadata/EntityModal'
import EntityForm from './components/EntityForm/EntityForm'
import { EntityTypeIcon } from './components/EntityIcon'
import { EntityFinder } from './components/EntityFinder'
import ErrorPage from './components/error/ErrorPage'
import FavoritesPage from './components/favorites/FavoritesPage'
import ForumSearch from './components/ForumSearch/ForumSearch'
import FullWidthAlert from './components/FullWidthAlert/FullWidthAlert'
import { HasAccessV2 as HasAccess } from './components/HasAccess/HasAccessV2'
import { HelpPopover } from './components/HelpPopover'
import ProjectViewCarousel from './components/ProjectViewCarousel/ProjectViewCarousel'
import IconSvg from './components/IconSvg/IconSvg'
import StandaloneLoginForm from './components/Authentication/StandaloneLoginForm'
import LoginPage from './components/Authentication/LoginPage'
import PageProgress from './components/PageProgress/PageProgress'
import PlotlyWrapper from './components/PlotlyWrapper'
import { ProgrammaticInstructionsModal } from './components/ProgrammaticInstructionsModal'
import QueryWrapperPlotNav from './components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import StatisticsPlot from './components/StatisticsPlot'
import { SynapseHomepage } from './components/SynapseHomepage'
import { SynapseNavDrawer } from './components/SynapseNavDrawer'
import { DatasetItemsEditor } from './components/SynapseTable/datasets/DatasetItemsEditor'
import StandaloneQueryWrapper from './components/StandaloneQueryWrapper/StandaloneQueryWrapper'
import ProgrammaticTableDownload from './components/ProgrammaticTableDownload/ProgrammaticTableDownload'
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions'
import { TrashCanList } from './components/trash/TrashCanList'
import { OAuthManagement } from './components/OAuthClientManagement/OAuthManagement'
import UserCard from './components/UserCard/UserCard'
import UserProfileLinks from './components/UserProfileLinks/UserProfileLinks'
import CertificationQuiz from './components/CertificationQuiz/CertificationQuiz'
import ProvenanceGraph from './components/ProvenanceGraph/ProvenanceGraph'
import IDUReport from './components/IDUReport'
import HtmlPreview from './components/FilePreview/HtmlPreview/HtmlPreview'
import EntityPageBreadcrumbs from './components/entity/page/breadcrumbs/EntityPageBreadcrumbs'
import EntityActionMenu from './components/entity/page/action_menu/EntityActionMenu'
import EntityPageTitleBar from './components/entity/page/title_bar/EntityPageTitleBar'
import { CreatedByModifiedBy } from './components/entity/page/CreatedByModifiedBy'
import SynapseClient from './synapse-client'
import * as SynapseQueries from './synapse-queries'
import {
  SynapseConstants,
  SynapseContextConsumer,
  SynapseContextProvider,
  useSynapseContext,
} from './utils'
import Palettes from './theme/palette/Palettes'
import TwoFactorBackupCodes from './components/Authentication/TwoFactorBackupCodes'
import TwoFactorEnrollmentForm from './components/Authentication/TwoFactorEnrollmentForm'
import TwoFactorAuthSettingsPanel from './components/Authentication/TwoFactorAuthSettingsPanel'
import { FullContextProvider } from './utils/context/FullContextProvider'

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
  SubscriptionPage,
}

// Include the version in the build
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-member-access
const SynapseReactClientVersion = require('../package.json').version

export {
  SynapseReactClientVersion,
  SynapseComponents,
  SynapseConstants,
  SynapseClient,
  SynapseContext,
  SynapseQueries,
  Palettes,
}
