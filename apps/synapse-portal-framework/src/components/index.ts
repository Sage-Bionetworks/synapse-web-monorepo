import { Navigate as Redirect } from 'react-router'
import ChallengeDataDownloadWrapper from './challenges/ChallengeDataDownloadWrapper'
import ChallengeDetailPageWrapper from './challenges/ChallengeDetailPageWrapper'
import ChallengeParticipantGoogleMap from './challenges/ChallengeParticipantGoogleMap'
import ChallengeSubmissionWrapper from './challenges/ChallengeSubmissionWrapper'
import ComponentCollapse from './ComponentCollapse'
import ParticipantsBarPlot from './crc-researcher/ParticipantsBarPlot'
import StatusLineChart from './crc-researcher/StatusLineChart'
import SurveysCompletedPlots from './crc-researcher/SurveysCompletedPlots'
import AboutPortal from './csbc-home-page/AboutPortal'
import CCKPDevelopedBySage from './csbc-home-page/CCKPDevelopedBySage'
import AMPALSDevelopedBySage from './ampals/AMPALSDevelopedBySage'
import HomePageCardContainer from './csbc-home-page/HomePageCardContainer'
import DetailsPage from './DetailsPage'
import ELBrowseToolsPage from './eliteportal/ELBrowseToolsPage'
import ELContributeYourData from './eliteportal/ELContributeYourData'
import ELGettingStarted from './eliteportal/ELGettingStarted'
import AllALSSlat from './ampals/ALLALSSlat'
import AMPALSExploreTheData from './ampals/AMPALSExploreTheData'
import ELSupportedByNIH from './eliteportal/ELSupportedByNIH'
import ARKWelcomePage from './arkportal/ARKWelcomePage'

import ExploreWrapper from './Explore/ExploreWrapper'
import GenieHomePageHeader from './genie/GenieHomePageHeader'
import CancerComplexityHeader from './cancercomplexity/CancerComplexityHeader'
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
import RepositoryUnderReviewAlert from './RepositoryUnderReviewAlert'

const PortalComponents = {
  RouteControlWrapper: ExploreWrapper,
  DetailsPage,
  HomePageCardContainer,
  AboutPortal,
  CCKPDevelopedBySage,
  ParticipantsBarPlot,
  StatusLineChart,
  SurveysCompletedPlots,
  Image,
  RedirectToURL,
  RedirectWithQuery,
  Redirect,
  NFBrowseToolsPage,
  ELBrowseToolsPage,
  ELContributeYourData,
  ELGettingStarted,
  AllALSSlat,
  AMPALSExploreTheData,
  ELSupportedByNIH,
  ARKWelcomePage,
  GenieHomePageHeader,
  CancerComplexityHeader,
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
  RepositoryUnderReviewAlert,
}

export default PortalComponents
