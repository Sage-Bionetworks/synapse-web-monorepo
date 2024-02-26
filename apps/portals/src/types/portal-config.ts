import {
  CardContainerLogicProps,
  DownloadCartPageProps,
  ExternalFileHandleLinkProps,
  FeaturedDataTabsProps,
  GoalsProps,
  MarkdownCollapseProps,
  MarkdownSynapseProps,
  OrientationBannerProps,
  ProgramsProps,
  QueryWrapperPlotNavProps,
  QueryWrapperProps,
  ResourcesProps,
  RssFeedCardsProps,
  StandaloneQueryWrapperProps,
  SubsectionRowRendererProps,
  SynapseFormSubmissionGridProps,
  SynapseFormWrapperProps,
  SynapsePlotProps,
  TableFeedCardsProps,
  ThemesPlotProps,
  UpsetPlotProps,
  UserCardListGroupsProps,
  UserCardListRotateProps,
  UserCardProps,
  ChallengeDataDownloadProps,
  TimelinePlotProps,
} from 'synapse-react-client'
import { RouteControlWrapperProps } from '../portal-components/RouteControlWrapper'
import { HomePageCardContainerProps } from '../portal-components/csbc-home-page/HomePageCardContainer'
import { AboutPortalProps } from '../portal-components/csbc-home-page/AboutPortal'
import { EcosystemProps } from '../portal-components/csbc-home-page/Ecosystem'
import { DetailsPageProps } from './portal-util-types'
import { ParticipantsBarPlotProps } from '../portal-components/crc-researcher/ParticipantsBarPlot'
import { StatusLineChartProps } from '../portal-components/crc-researcher/StatusLineChart'
import { SurveysCompletedPlotsProps } from '../portal-components/crc-researcher/SurveysCompletedPlots'
import { ImageProps } from '../portal-components/Image'
import { RedirectProps } from 'react-router-dom'
import { ToggleSynapseObjectsProps } from '../portal-components/ToggleSynapseObjects'
import { CSSProperties } from 'react'
import { TabbedSynapseObjectsProps } from 'portal-components/TabbedSynapseObjects'
import { ChallengeSubmissionWrapperProps } from 'portal-components/challengeportal/ChallengeSubmissionWrapper'
import { RedirectToURLProps } from 'portal-components/RedirectToURL'

// For styling the header on the home page -- the main title and the summary text
export type HomePageHeaderConfig = {
  summary: string | JSX.Element
  title: string
  showBlur?: boolean
  centerText?: boolean
  HeaderSvg?: any
}

// Generic SynapseConfigArray Representation -- maps each component to its props
type CardContainerLogic = {
  props: CardContainerLogicProps
  name: 'CardContainerLogic'
}

type QueryWrapper = {
  name: 'QueryWrapper'
  props: QueryWrapperProps
}

type QueryWrapperPlotNav = {
  name: 'QueryWrapperPlotNav'
  props: QueryWrapperPlotNavProps
}

type UserCard = {
  name: 'UserCard'
  props: UserCardProps
}

type Markdown = {
  name: 'Markdown'
  props: MarkdownSynapseProps
}

type MarkdownCollapse = {
  name: 'MarkdownCollapse'
  props: MarkdownCollapseProps
}

type ThemesPlot = {
  name: 'ThemesPlot'
  props: ThemesPlotProps
}

type Goals = {
  name: 'Goals'
  props: GoalsProps
}

type Programs = {
  name: 'Programs'
  props: ProgramsProps
}

type Resources = {
  name: 'Resources'
  props: ResourcesProps
}

type RouteControl = {
  name: 'RouteControlWrapper'
  props: RouteControlWrapperProps
}

type DetailsPage = {
  name: 'DetailsPage'
  props: DetailsPageProps
}

type ConsortiaGoals = {
  name: 'ConsortiaGoals'
  props: undefined
}

type FunderCards = {
  name: 'FunderCards'
  props: undefined
}

type HomePageCardContainer = {
  name: 'HomePageCardContainer'
  props: HomePageCardContainerProps
}

type DownloadCartPage = {
  name: 'DownloadCartPage'
  props: DownloadCartPageProps
}

type Ecosystem = {
  name: 'Ecosystem'
  props: EcosystemProps
}

type AboutPortal = {
  name: 'AboutPortal'
  props: AboutPortalProps
}

type DevelopedBySage = {
  name: 'DevelopedBySage'
  props: undefined
}

type BrowseToolsPage = {
  name: 'BrowseToolsPage'
  props: undefined
}

type NFSurveyToast = {
  name: 'NFSurveyToast'
  props: undefined
}
type ELBetaLaunchBanner = {
  name: 'ELBetaLaunchBanner'
  props: undefined
}
type ARKWelcomePage = {
  name: 'ARKWelcomePage'
  props: undefined
}

type ExternalFileHandleLink = {
  name: 'ExternalFileHandleLink'
  props: ExternalFileHandleLinkProps
}
type UpsetPlot = {
  name: 'UpsetPlot'
  props: UpsetPlotProps
}
type RssFeedCards = {
  name: 'RssFeedCards'
  props: RssFeedCardsProps
}
type TableFeedCards = {
  name: 'TableFeedCards'
  props: TableFeedCardsProps
}
type SynapsePlot = {
  name: 'SynapsePlot'
  props: SynapsePlotProps
}
type ChallengeParticipantGoogleMap = {
  name: 'ChallengeParticipantGoogleMap'
  props: undefined
}
type ProjectDiscussionForum = {
  name: 'ProjectDiscussionForum'
  props: undefined
}
type UserCardListRotate = {
  name: 'UserCardListRotate'
  props: UserCardListRotateProps
}
type SubsectionRowRenderer = {
  name: 'SubsectionRowRenderer'
  props: SubsectionRowRendererProps
}
type Image = {
  name: 'Image'
  props: ImageProps
}
type ChallengeDetailPageWrapper = {
  name: 'ChallengeDetailPageWrapper'
  props: undefined
}
type ChallengeDataDownloadWrapper = {
  name: 'ChallengeDataDownloadWrapper'
  props: ChallengeDataDownloadProps
}
type ChallengeSubmissionWrapper = {
  name: 'ChallengeSubmissionWrapper'
  props: ChallengeSubmissionWrapperProps
}
type FeaturedDataTabs = {
  name: 'FeaturedDataTabs'
  props: FeaturedDataTabsProps
}
type UserCardListGroups = {
  name: 'UserCardListGroups'
  props: UserCardListGroupsProps
}
type ToggleSynapseObjects = {
  name: 'ToggleSynapseObjects'
  props: ToggleSynapseObjectsProps
}
type TabbedSynapseObjects = {
  name: 'TabbedSynapseObjects'
  props: TabbedSynapseObjectsProps
}

type Metadata = {
  title?: string
  centerTitle?: boolean
  subtitle?: string
  link?: string
  style?: CSSProperties
  isOutsideContainer?: boolean
  // applied to the inner most container of the object
  className?: string
  // applied to outer most container of the object
  containerClassName?: string
  outsideContainerClassName?: string
}

type SynapseFormWrapper = {
  name: 'SynapseFormWrapper'
  props: SynapseFormWrapperProps
}

type SynapseFormSubmissionsGrid = {
  name: 'SynapseFormSubmissionsGrid'
  props: SynapseFormSubmissionGridProps
}

type StandaloneQueryWrapper = {
  name: 'StandaloneQueryWrapper'
  props: StandaloneQueryWrapperProps
}

type ParticipantsBarPlot = {
  name: 'ParticipantsBarPlot'
  props: ParticipantsBarPlotProps
}

type StatusLineChart = {
  name: 'StatusLineChart'
  props: StatusLineChartProps
}

type SurveysCompletedPlots = {
  name: 'SurveysCompletedPlots'
  props: SurveysCompletedPlotsProps
}

type OrientationBanner = {
  name: 'OrientationBanner'
  props: OrientationBannerProps
}

type TimelinePlot = {
  name: 'TimelinePlot'
  props: TimelinePlotProps
}

type RedirectWithQuery = {
  name: 'RedirectWithQuery'
  props: RedirectProps
}

type RedirectToURL = {
  name: 'RedirectToURL'
  props: RedirectToURLProps
}

type Redirect = {
  name: 'Redirect'
  props: RedirectProps
}

type Header = {
  name: 'Header'
  props: undefined
}

export type SynapseConfig = (
  | RedirectToURL
  | RedirectWithQuery
  | Redirect
  | RouteControl
  | CardContainerLogic
  | QueryWrapper
  | UserCard
  | Markdown
  | MarkdownCollapse
  | DetailsPage
  | SynapseFormWrapper
  | SynapseFormSubmissionsGrid
  | ConsortiaGoals
  | HomePageCardContainer
  | Ecosystem
  | AboutPortal
  | DevelopedBySage
  | ThemesPlot
  | QueryWrapperPlotNav
  | FunderCards
  | StandaloneQueryWrapper
  | ParticipantsBarPlot
  | StatusLineChart
  | SurveysCompletedPlots
  | ExternalFileHandleLink
  | Goals
  | Programs
  | Resources
  | UpsetPlot
  | UserCardListRotate
  | SynapsePlot
  | Image
  | RssFeedCards
  | FeaturedDataTabs
  | UserCardListGroups
  | TableFeedCards
  | DownloadCartPage
  | BrowseToolsPage
  | NFSurveyToast
  | ELBetaLaunchBanner
  | ARKWelcomePage
  | SubsectionRowRenderer
  | ToggleSynapseObjects
  | TabbedSynapseObjects
  | ChallengeParticipantGoogleMap
  | ProjectDiscussionForum
  | OrientationBanner
  | Header
  | ChallengeDetailPageWrapper
  | ChallengeDataDownloadWrapper
  | ChallengeSubmissionWrapper
  | TimelinePlot
) &
  Metadata

type RouteOptions = {
  displayName?: string
  hideRouteFromNavbar?: boolean
  path?: string
  target?: string | undefined
  link?: string
  icon?: string
}

export type ConfigRoute = RouteOptions & {
  /** See react-router's exact */
  exact?: boolean
  synapseConfigArray?: SynapseConfig[]
  routes?: never
}
export type NestedRoute = RouteOptions & {
  routes?: GenericRoute[]
  synapseConfigArray?: never
  /** While it's possible to specify 'exact' for a NestedRoute, it's not typically useful because the inner routes won't render */
  exact?: never
}
export type GenericRoute = NestedRoute | ConfigRoute
// Route - end

// Footer - start
export type FooterConfig = {
  contactUs?: string
  termsOfService?: string
  forum?: string
  about?: string
}
// Footer end

// LogoConfig
export type LogoConfig = {
  name?: string // plain text
  icon?: string // svg
  hideLogin?: boolean
}
// LogoConfig end
