import 'regenerator-runtime/runtime'
import { AccountLevelBadge } from './containers/AccountLevelBadge'
import CardContainer from './containers/CardContainer'
import CardContainerLogic from './containers/CardContainerLogic'
import ChangePassword from './containers/ChangePassword'
import { DownloadCartPage } from './containers/download_list_v2/DownloadCartPage'
import ShowDownloadV2 from './containers/download_list_v2/ShowDownloadV2'
import { EntityBadgeIcons } from './containers/EntityBadgeIcons'
import EntityForm from './containers/EntityForm'
import EntityFinder from './containers/entity_finder/EntityFinder'
import { EvaluationCard } from './containers/evaluation_queues/EvaluationCard'
import { EvaluationEditorPage } from './containers/evaluation_queues/EvaluationEditorPage'
import ExperimentalMode from './containers/ExperimentalMode'
import { ExternalFileHandleLink } from './containers/ExternalFileHandleLink'
import FileUpload from './containers/FileUpload'
import ForumSearch from './containers/ForumSearch'
import FullWidthAlert from './containers/FullWidthAlert'
import { HasAccessV2 as HasAccess } from './containers/access_requirements/HasAccessV2'
import FeaturedDataTabs from './containers/home_page/featured-data/FeaturedDataTabs'
import FeaturedToolsList from './containers/home_page/featured_tools/FeaturedToolsList'
import Goals from './containers/home_page/goals/Goals'
import UserCardListGroups from './containers/home_page/people/UserCardListGroups'
import Programs from './containers/home_page/programs/Programs'
import ProjectViewCarousel from './containers/home_page/project_view_carousel/ProjectViewCarousel'
import Resources from './containers/home_page/resources/Resources'
import StandaloneLoginForm from './containers/auth/StandaloneLoginForm'
import MarkdownCollapse from './containers/MarkdownCollapse'
import { MarkdownPopover } from './containers/MarkdownPopover'
import MarkdownSynapse from './containers/markdown/MarkdownSynapse'
import ModalDownload from './containers/ModalDownload'
import PageProgress from './containers/PageProgress'
import QueryCount from './containers/QueryCount'
import { QueryWrapper } from './containers/QueryWrapper'
import QueryWrapperPlotNav from './containers/query_wrapper_plot_nav/QueryWrapperPlotNav'
import RenderIfInView from './containers/RenderIfInView'
import RssFeedCards from './containers/RssFeedCards'
import SubsectionRowRenderer from './containers/SubsectionRowRenderer'
import SynapseFormSubmissionsGrid from './containers/synapse_form_wrapper/SynapseFormSubmissionsGrid'
import SynapseFormWrapper from './containers/synapse_form_wrapper/SynapseFormWrapper'
import StandaloneQueryWrapper from './containers/table/StandaloneQueryWrapper'
import SynapseTable from './containers/table/SynapseTable'
import ProgrammaticTableDownload from './containers/table/table-top/ProgrammaticOptions'
import ProvenanceGraph from './containers/provenance/ProvenanceGraph'
import TableFeedCards from './containers/TableFeedCards'
import TermsAndConditions from './containers/TermsAndConditions'
import { displayToast, SynapseToastContainer } from './containers/ToastMessage'
import UpsetPlot from './containers/UpsetPlot'
import UserCard from './containers/UserCard'
import UserCardListRotate from './containers/UserCardListRotate'
import UserProfileLinks from './containers/user_profile_links/UserProfileLinks'
import SynapsePlot from './containers/widgets/SynapsePlot'
import ThemesPlot from './containers/widgets/themes-plot/ThemesPlot'
import {
  SynapseClient,
  SynapseConstants,
  SynapseQueries,
  SynapseTheme,
} from './utils'
import Palettes from './utils/theme/palette/Palettes'
import { hex2ascii } from './utils/functions/StringUtils'
import {
  SynapseContextConsumer,
  SynapseContextProvider,
  useSynapseContext,
} from './utils/SynapseContext'
import './utils/theme/ThemeTypes'
import FullContextProvider, {
  defaultQueryClientConfig,
} from './utils/FullContextProvider'
import GenericCard from './containers/GenericCard'
import ApplicationSessionManager from './utils/AppUtils/session/ApplicationSessionManager'
import * as AppUtils from './utils/AppUtils'
// we exclude this from main.scss because react doesn't like importing an svg
// with a relative import.
import './style/components/_spinner.scss'
import IconSvg from './containers/IconSvg'
import SystemUseNotification from './containers/SystemUseNotification'
import Icon from './containers/row_renderers/utils/Icon'
import {
  generateQueryFilterFromSearchParams,
  parseEntityIdFromSqlStatement,
} from './utils/functions/sqlFunctions'
import * as RegularExpressions from './utils/functions/RegularExpressions'
import WideButton from './components/styled/WideButton'
import ProjectIcon from './assets/themed_icons/Project'
import { StyledOuterContainer } from './components/styled/LeftRightPanel'
import StyledFormControl from './components/styled/StyledFormControl'
import { SkeletonTable } from './assets/skeletons/SkeletonTable'
import { ShowMore } from './containers/row_renderers/utils'
import TextField from './containers/TextField'
import TwoFactorAuthSettingsPanel from './containers/auth/TwoFactorAuthSettingsPanel'
import CertificationQuiz from './containers/CertificationQuiz'
import UserOrTeamBadge from './containers/UserOrTeamBadge'
import TwoFactorEnrollmentForm from './containers/auth/TwoFactorEnrollmentForm'
import TwoFactorBackupCodes from './containers/auth/TwoFactorBackupCodes'
import { AccessTokenPage } from './containers/personal_access_token/AccessTokenPage'
import { OAuthManagement } from './containers/oauth/OAuthManagement'
import { SynapseClientError } from './utils/SynapseClientError'

const SynapseContext = {
  SynapseContextProvider,
  SynapseContextConsumer,
  useSynapseContext,
  FullContextProvider,
  defaultQueryClientConfig,
}

const SynapseComponents = {
  Login: StandaloneLoginForm,
  CardContainer,
  QueryWrapper,
  StandaloneQueryWrapper,
  SynapseTable,
  CardContainerLogic,
  EntityForm,
  UserCard,
  QueryCount,
  Markdown: MarkdownSynapse,
  MarkdownCollapse,
  ModalDownload,
  SynapseFormWrapper,
  SynapseFormSubmissionsGrid,
  HasAccess,
  ThemesPlot,
  QueryWrapperPlotNav,
  ExternalFileHandleLink,
  Programs,
  Goals,
  Resources,
  UpsetPlot,
  SynapsePlot,
  RssFeedCards,
  TableFeedCards,
  UserCardListRotate,
  FeaturedDataTabs,
  UserCardListGroups,
  EvaluationCard,
  EvaluationEditorPage,
  AccountLevelBadge,
  RenderIfInView,
  TermsAndConditions,
  PageProgress,
  ProjectViewCarousel,
  EntityFinder,
  ExperimentalMode,
  EntityBadgeIcons,
  DownloadCartPage,
  ShowDownloadV2,
  FullWidthAlert: FullWidthAlert,
  SynapseToastContainer,
  displayToast,
  UserProfileLinks,
  MarkdownPopover,
  FeaturedToolsList,
  SubsectionRowRenderer,
  ProgrammaticTableDownload,
  ChangePassword,
  FileUpload,
  ProvenanceGraph,
  ForumSearch,
  hex2ascii,
  GenericCard,
  IconSvg,
  ApplicationSessionManager,
  SystemUseNotification,
  Icon,
  generateQueryFilterFromSearchParams,
  parseEntityIdFromSqlStatement,
  WideButton,
  ProjectIcon,
  StyledOuterContainer,
  StyledFormControl,
  SkeletonTable,
  ShowMore,
  TextField,
  TwoFactorAuthSettingsPanel,
  CertificationQuiz,
  UserOrTeamBadge,
  TwoFactorEnrollmentForm,
  TwoFactorBackupCodes,
  AccessTokenPage,
  OAuthManagement,
}

export {
  SynapseClient,
  SynapseClientError,
  SynapseConstants,
  SynapseComponents,
  SynapseContext,
  SynapseTheme,
  SynapseQueries,
  Palettes,
  AppUtils,
  RegularExpressions,
  displayToast,
}
