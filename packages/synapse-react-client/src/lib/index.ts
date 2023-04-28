import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import 'regenerator-runtime/runtime'
import { AccountLevelBadge } from './containers/AccountLevelBadge'
import CardContainer from './containers/CardContainer'
import { CardContainerLogic } from './containers/CardContainerLogic'
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
import { SynapseClient, SynapseConstants, SynapseQueries } from './utils'
import Palettes from './utils/theme/palette/Palettes'
import { hex2ascii } from './utils/functions/StringUtils'
import {
  SynapseContextConsumer,
  SynapseContextProvider,
  useSynapseContext,
} from './utils/SynapseContext'
import { Typography } from '@mui/material'
import './utils/theme/ThemeTypes'

// we exclude this from main.scss because react doesn't like importing an svg
// with a relative import.
import './style/components/_spinner.scss'

const SynapseContext = {
  SynapseContextProvider,
  SynapseContextConsumer,
  useSynapseContext,
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
}

export {
  SynapseClient,
  SynapseConstants,
  SynapseComponents,
  SynapseContext,
  Typography,
  SynapseQueries,
  Palettes,
}
