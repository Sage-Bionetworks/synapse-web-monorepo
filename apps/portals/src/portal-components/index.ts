import RouteControlWrapper from './RouteControlWrapper'
import DetailsPage from './DetailsPage'
import TabbedSynapseObjects from './TabbedSynapseObjects'
import ConsortiaGoals from './csbc-home-page/ConsortiaGoals'
import HomePageCardContainer from './csbc-home-page/HomePageCardContainer'
import Ecosystem from './csbc-home-page/Ecosystem'
import AboutPortal from './csbc-home-page/AboutPortal'
import DevelopedBySage from './csbc-home-page/DevelopedBySage'
import BrowseToolsPage from './nf/BrowseToolsPage'
import NFSurveyToast from './nf/NFSurveyToast'
import ELBetaLaunchBanner from './elportal/ELBetaLaunchBanner'
import ARKWelcomePage from './arkportal/ARKWelcomePage'
import ParticipantsBarPlot from './crc-researcher/ParticipantsBarPlot'
import StatusLineChart from './crc-researcher/StatusLineChart'
import SurveysCompletedPlots from './crc-researcher/SurveysCompletedPlots'
import Image from './Image'
import RedirectWithQuery from './RedirectWithQuery'
import RedirectToURL from './RedirectToURL'
import { Redirect } from 'react-router-dom'
import Header from './Header'
import ChallengeParticipantGoogleMap from './challengeportal/ChallengeParticipantGoogleMap'
import ChallengeDetailPageWrapper from './challengeportal/ChallengeDetailPageWrapper'
import ChallengeSubmissionWrapper from './challengeportal/ChallengeSubmissionWrapper'
import ChallengeDataDownloadWrapper from './challengeportal/ChallengeDataDownloadWrapper'
import ProjectDiscussionForum from './ProjectDiscussionForum'

const PortalComponents = {
  RouteControlWrapper,
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
  BrowseToolsPage,
  NFSurveyToast,
  ELBetaLaunchBanner,
  ARKWelcomePage,
  TabbedSynapseObjects,
  Header,
  ChallengeParticipantGoogleMap,
  ChallengeDetailPageWrapper,
  ProjectDiscussionForum,
  ChallengeSubmissionWrapper,
  ChallengeDataDownloadWrapper,
}

export default PortalComponents
