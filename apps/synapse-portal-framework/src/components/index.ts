import { Navigate as Redirect } from 'react-router'
import ARKWelcomePage from './arkportal/ARKWelcomePage'
import ChallengeDataDownloadWrapper from './challengeportal/ChallengeDataDownloadWrapper'
import ChallengeDetailPageWrapper from './challengeportal/ChallengeDetailPageWrapper'
import ChallengeParticipantGoogleMap from './challengeportal/ChallengeParticipantGoogleMap'
import ChallengeSubmissionWrapper from './challengeportal/ChallengeSubmissionWrapper'
import ComponentCollapse from './ComponentCollapse'
import ParticipantsBarPlot from './crc-researcher/ParticipantsBarPlot'
import StatusLineChart from './crc-researcher/StatusLineChart'
import SurveysCompletedPlots from './crc-researcher/SurveysCompletedPlots'
import AboutPortal from './csbc-home-page/AboutPortal'
import ConsortiaGoals from './csbc-home-page/ConsortiaGoals'
import DevelopedBySage from './csbc-home-page/DevelopedBySage'
import Ecosystem from './csbc-home-page/Ecosystem'
import HomePageCardContainer from './csbc-home-page/HomePageCardContainer'
import DetailsPage from './DetailsPage'
import ELBetaLaunchBanner from './elportal/ELBetaLaunchBanner'
import ELBrowseToolsPage from './elportal/ELBrowseToolsPage'
import ELContributeYourData from './elportal/ELContributeYourData'
import ELGettingStarted from './elportal/ELGettingStarted'
import ELSupportedByNIH from './elportal/ELSupportedByNIH'
import ARKWelcomePage from './arkportal/ARKWelcomePage'

import ExploreWrapper from './Explore/ExploreWrapper'
import GenieHomePageHeader from './genie/GenieHomePageHeader'
import Header from './Header'
import Image from './Image'
import NFBrowseToolsPage from './nf/NFBrowseToolsPage'
import { PortalFullTextSearchField } from './PortalSearch/PortalFullTextSearchField'
import { PortalSearchTabs } from './PortalSearch/PortalSearchTabs'
import ProjectDiscussionForum from './ProjectDiscussionForum'
import RedirectToURL from './RedirectToURL'
import RedirectWithQuery from './RedirectWithQuery'
import SurveyToast from './SurveyToast'
import TabbedSynapseObjects from './TabbedSynapseObjects'

const PortalComponents = {
  RouteControlWrapper: ExploreWrapper,
  DetailsPage,
  ConsortiaGoals,
  HomePageCardContainer,
  Ecosystem,
  AboutPortal,
  DevelopedBySage,
  ParticipantsBarPlot,
  StatusLineChart,
  SurveysCompletedPlots,
  Image,
  RedirectToURL,
  RedirectWithQuery,
  Redirect,
  NFBrowseToolsPage,
  ELBrowseToolsPage,
  ELBetaLaunchBanner,
  ELContributeYourData,
  ELGettingStarted,
  ELSupportedByNIH,
  ARKWelcomePage,
  GenieHomePageHeader,
  TabbedSynapseObjects,
  Header,
  ChallengeParticipantGoogleMap,
  ChallengeDetailPageWrapper,
  ProjectDiscussionForum,
  ChallengeSubmissionWrapper,
  ChallengeDataDownloadWrapper,
  SynapseComponentCollapse: ComponentCollapse,
  SurveyToast,
  PortalSearchTabs,
  PortalFullTextSearchField,
}

export default PortalComponents
