import {
  AccessTimeTwoTone,
  AddBoxOutlined,
  AddCircleOutline,
  AddCircleTwoTone,
  AddShoppingCart,
  AddTwoTone,
  AlternateEmail,
  ArrowBack,
  ArrowDropDownTwoTone,
  ArrowDropUpTwoTone,
  ArrowForward,
  ArticleTwoTone,
  AssessmentTwoTone,
  AssignmentTurnedInTwoTone,
  Block,
  Cached,
  ChatTwoTone,
  Check,
  CheckCircleTwoTone,
  ChevronLeft,
  ChevronRight,
  Clear,
  CloseTwoTone,
  Code,
  ContentCopyTwoTone,
  CreateNewFolderTwoTone,
  DashboardTwoTone,
  DeleteSweepTwoTone,
  DeleteTwoTone,
  EditTwoTone,
  ErrorOutlined,
  ExpandLess,
  ExpandMore,
  FactCheckTwoTone,
  FlagTwoTone,
  FolderTwoTone,
  FormatBold,
  FormatItalic,
  GetAppTwoTone,
  GitHub,
  Group,
  HelpOutlined,
  HelpOutlineTwoTone,
  HistoryTwoTone,
  Image,
  IndeterminateCheckBoxOutlined,
  InfoOutlined,
  InsertDriveFileOutlined,
  InsertDriveFileTwoTone,
  LabelTwoTone,
  LanguageTwoTone,
  LayersTwoTone,
  LinkTwoTone,
  ListTwoTone,
  LockOpenTwoTone,
  Login,
  MailOutlineTwoTone,
  MoreVertTwoTone,
  OpenInNewTwoTone,
  PeopleTwoTone,
  PhoneTwoTone,
  PhotoCameraOutlined,
  PublicTwoTone,
  PushPinTwoTone,
  QuestionAnswerTwoTone,
  RadioButtonUncheckedTwoTone,
  RemoveCircleTwoTone,
  ReplyTwoTone,
  ReportProblemOutlined,
  RestoreFromTrashTwoTone,
  SearchOutlined,
  SearchTwoTone,
  ShoppingCartOutlined,
  Star,
  StarOutline,
  StarTwoTone,
  StorageTwoTone,
  StrikethroughS,
  Subscript,
  Superscript,
  SyncTwoTone,
  TableChartTwoTone,
  Title,
  UploadTwoTone,
  ViewAgendaTwoTone,
  ViewColumnTwoTone,
  VisibilityOffTwoTone,
  VisibilityTwoTone,
  VpnKeyTwoTone,
  WarningTwoTone,
  WatchLater,
} from '@mui/icons-material'
import React from 'react'
import AccessManagement from '../assets/mui_components/AccessManagement'
import AccountCertified from '../assets/mui_components/AccountCertified'
import AccountRegistered from '../assets/mui_components/AccountRegistered'
import AccountValidated from '../assets/mui_components/AccountValidated'
import Chromatin from '../assets/mui_components/Chromatin'
import Clinical from '../assets/mui_components/Clinical'
import Data from '../assets/mui_components/Data'
import DataLocked from '../assets/mui_components/DataLocked'
import Dataset from '../assets/mui_components/Dataset'
import DatasetCollection from '../assets/mui_components/DatasetCollection'
import Docker from '../assets/mui_components/Docker'
import GeneExpression from '../assets/mui_components/GeneExpression'
import GeneVariants from '../assets/mui_components/GeneVariants'
import Imaging from '../assets/mui_components/Imaging'
import Kinomics from '../assets/mui_components/Kinomics'
import LineGraph from '../assets/mui_components/LineGraph'
import Other from '../assets/mui_components/Other'
import PackagableFile from '../assets/mui_components/PackagableFile'
import Proteomics from '../assets/mui_components/Proteomics'
import Rat from '../assets/mui_components/Rat'
import { EntityType } from '../utils/synapseTypes'
import { SxProps, Tooltip } from '@mui/material'
import CreateVersion from '../assets/icons/CreateVersion'

export const IconStrings = [
  'accessOpen',
  'accessClosed',
  'arrowBack',
  'arrowForward',
  'arrowDropUp',
  'arrowDropDown',
  'article',
  'cards',
  'check',
  'clear',
  'cart',
  'clock',
  'code',
  'columns',
  'openInNewWindow',
  'dashboard',
  'delete',
  'deleteSweep',
  'addToCart',
  'addCircleOutline',
  'addCircleTwoTone',
  'reload',
  'team',
  'photoCamera',
  'info',
  'favTwoTone',
  'favOutline',
  'fav',
  'peopleTwoTone',
  'challengesTwoTone',
  'download',
  'searchOutlined',
  'search',
  'history',
  'time',
  'login',
  'helpOutlined',
  'helpOutlineTwoTone',
  'expandLess',
  'expandMore',
  'rat',
  'chromatin',
  'clinical',
  'contentCopy',
  'data',
  'dataLocked',
  'geneExpression',
  'geneVariants',
  'github',
  'imaging',
  'lineGraph',
  'kinomics',
  'proteomics',
  'packagableFile',
  'other',
  'wiki',
  'file',
  'fileOutlined',
  'folder',
  'link',
  'table',
  'public',
  'people',
  'entityview',
  'submissionview',
  'challenge',
  'discussion',
  'dataset',
  'datasetcollection',
  'docker',
  'accountCertified',
  'accountRegistered',
  'accountValidated',
  'warningOutlined',
  'removeCircle',
  'replyTwoTone',
  'chatTwoTone',
  'accessManagement',
  'chevronRight',
  'chevronLeft',
  'database',
  'close',
  'cross',
  'verticalEllipsis',
  'sync',
  'clipboardCheck',
  'add',
  'warning',
  'circle',
  'block',
  'checkCircle',
  'errorOutlined',
  'phone',
  'pushpin',
  'addBoxOutline',
  'minusBoxOutline',
  'italic',
  'bold',
  'title',
  'visibility',
  'visibilityOff',
  'strikethrough',
  'subscript',
  'superscript',
  'latex',
  'image',
  'edit',
  'tag',
  'restore',
  'label',
  'upload',
  'flag',
  'newFolder',
  'createVersion',
  'email',
  'addConditions',
] as const

export type Icon = (typeof IconStrings)[number]

export type IconSvgProps = {
  icon: Icon
  // If provided, will be shown in tooltip
  label?: string
  sx?: SxProps
  wrap?: boolean
}

function IconMapping(props: { icon: string; sx?: SxProps }) {
  const { icon } = props
  const color = undefined

  const sx: SxProps = {
    verticalAlign: 'middle',
    ...props.sx,
  }

  switch (icon) {
    case 'accessOpen':
      return <LockOpenTwoTone sx={sx} />
    case 'accessClosed':
      return <VpnKeyTwoTone sx={sx} />
    case 'add':
      return <AddTwoTone sx={sx} />
    case 'addConditions':
      return <FactCheckTwoTone sx={sx} />
    case 'arrowBack':
      return <ArrowBack sx={sx} />
    case 'arrowForward':
      return <ArrowForward sx={sx} />
    case 'arrowDropUp':
      return <ArrowDropUpTwoTone sx={sx} />
    case 'arrowDropDown':
      return <ArrowDropDownTwoTone sx={sx} />
    case 'article':
      return <ArticleTwoTone sx={sx} />
    case 'block':
      return <Block sx={sx} />
    case 'check':
      return <Check sx={sx}></Check>
    case 'clear':
      return <Clear sx={sx}></Clear>
    case 'cart':
      return <ShoppingCartOutlined sx={sx}></ShoppingCartOutlined>
    case 'cards':
      return <ViewAgendaTwoTone sx={sx}></ViewAgendaTwoTone>
    case 'clock':
      return <AccessTimeTwoTone sx={sx} />
    case 'code':
      return <Code sx={sx}></Code>
    case 'columns':
      return <ViewColumnTwoTone sx={sx}></ViewColumnTwoTone>
    case 'circle':
      return <RadioButtonUncheckedTwoTone sx={sx} />
    case 'checkCircle':
      return <CheckCircleTwoTone sx={sx} />
    case 'createVersion':
      return <CreateVersion sx={sx} />
    case 'dashboard':
      return <DashboardTwoTone sx={sx}></DashboardTwoTone>
    case 'delete':
      return <DeleteTwoTone sx={sx} />
    case 'deleteSweep':
      return <DeleteSweepTwoTone sx={sx} />
    case 'openInNewWindow':
      return <OpenInNewTwoTone sx={sx} />
    case 'phone':
      return <PhoneTwoTone sx={sx} />
    case 'people':
      return <PeopleTwoTone sx={sx} />
    case 'addToCart':
      return <AddShoppingCart sx={sx}></AddShoppingCart>
    case 'addCircleOutline':
      return <AddCircleOutline sx={sx}></AddCircleOutline>
    case 'addCircleTwoTone':
      return <AddCircleTwoTone sx={sx}></AddCircleTwoTone>
    case 'reload':
      return <Cached sx={sx}></Cached>
    case 'team':
      return <Group sx={sx}></Group>
    case 'photoCamera':
      return <PhotoCameraOutlined sx={sx}></PhotoCameraOutlined>
    case 'verticalEllipsis':
      return <MoreVertTwoTone sx={sx} />
    case 'sync':
      return <SyncTwoTone sx={sx} />
    case 'public':
      return <PublicTwoTone sx={sx} />
    case 'clipboardCheck':
      return <AssignmentTurnedInTwoTone sx={sx} />
    case 'info':
      return <InfoOutlined sx={sx}></InfoOutlined>
    case 'favTwoTone':
      return <StarTwoTone sx={sx}></StarTwoTone>
    case 'favOutline':
      return <StarOutline sx={sx}></StarOutline>
    case 'fav':
      return <Star sx={sx}></Star>
    case 'github':
      return <GitHub sx={sx} />
    case 'peopleTwoTone':
      return <PeopleTwoTone sx={sx}></PeopleTwoTone>
    case 'challengesTwoTone':
      return <AssessmentTwoTone sx={sx}></AssessmentTwoTone>
    case 'download':
      return <GetAppTwoTone sx={sx}></GetAppTwoTone>
    case 'errorOutlined':
      return <ErrorOutlined sx={sx} />
    case 'searchOutlined':
      return <SearchOutlined sx={sx}></SearchOutlined>
    case 'search':
      return <SearchTwoTone sx={sx}></SearchTwoTone>
    case 'history':
      return <HistoryTwoTone sx={sx}></HistoryTwoTone>
    case 'time':
      return <WatchLater sx={sx}></WatchLater>
    case 'login':
      return <Login sx={sx}></Login>
    case 'helpOutlineTwoTone':
      return <HelpOutlineTwoTone sx={sx}></HelpOutlineTwoTone>
    case 'helpOutlined':
      return <HelpOutlined sx={sx}></HelpOutlined>
    case 'close':
    case 'cross':
      return <CloseTwoTone sx={sx} />
    case 'expandLess':
      return <ExpandLess sx={sx}></ExpandLess>
    case 'expandMore':
      return <ExpandMore sx={sx}></ExpandMore>
    case 'rat':
      return <Rat sx={sx}></Rat>
    case 'chromatin':
      return <Chromatin sx={sx}></Chromatin>
    case 'clinical':
      return <Clinical sx={sx}></Clinical>
    case 'contentCopy':
      return <ContentCopyTwoTone sx={sx} />
    case 'data':
      return <Data sx={sx}></Data>
    case 'dataLocked':
      return <DataLocked sx={sx}></DataLocked>
    case 'geneExpression':
      return <GeneExpression sx={sx}></GeneExpression>
    case 'geneVariants':
      return <GeneVariants sx={sx}></GeneVariants>
    case 'imaging':
      return <Imaging sx={sx}></Imaging>
    case 'lineGraph':
      return <LineGraph sx={sx}></LineGraph>
    case 'kinomics':
      return <Kinomics sx={sx}></Kinomics>
    case 'proteomics':
      return <Proteomics sx={sx}></Proteomics>
    case 'packagableFile':
      return <PackagableFile sx={sx}></PackagableFile>
    case 'other':
      return <Other fill={color} sx={sx}></Other>
    case 'wiki':
      return <LanguageTwoTone sx={sx} />
    case 'file':
      return <InsertDriveFileTwoTone sx={sx} />
    case 'fileOutlined':
      return <InsertDriveFileOutlined sx={sx} />
    case 'folder':
      return <FolderTwoTone sx={sx} />
    case 'newFolder':
      return <CreateNewFolderTwoTone sx={sx} />
    case 'link':
      return <LinkTwoTone sx={sx} />
    case 'table':
      return <TableChartTwoTone sx={sx} />
    case 'entityview':
      return <ListTwoTone sx={sx} />
    case 'submissionview':
      return <StorageTwoTone sx={sx} />
    case 'challenge':
      return <AssessmentTwoTone sx={sx} />
    case 'discussion':
      return <QuestionAnswerTwoTone sx={sx} />
    case 'dataset':
      return <Dataset sx={sx} />
    case 'datasetcollection':
      return <DatasetCollection sx={sx} />
    case 'database':
      return <LayersTwoTone sx={sx} />
    case 'docker':
      return <Docker sx={sx} />
    case 'accountCertified':
      return <AccountCertified sx={sx} />
    case 'accountRegistered':
      return <AccountRegistered sx={sx} />
    case 'accountValidated':
      return <AccountValidated sx={sx} />
    case 'warningOutlined':
      return <ReportProblemOutlined sx={sx}></ReportProblemOutlined>
    case 'warning':
      return <WarningTwoTone sx={sx} />
    case 'removeCircle':
      return <RemoveCircleTwoTone sx={sx}></RemoveCircleTwoTone>
    case 'replyTwoTone':
      return <ReplyTwoTone sx={sx}></ReplyTwoTone>
    case 'chatTwoTone':
      return <ChatTwoTone sx={sx}></ChatTwoTone>
    case 'accessManagement':
      return <AccessManagement sx={sx}></AccessManagement>
    case 'chevronRight':
      return <ChevronRight sx={sx} />
    case 'chevronLeft':
      return <ChevronLeft sx={sx} />
    case 'pushpin':
      return <PushPinTwoTone sx={sx} />
    case 'addBoxOutline':
      return <AddBoxOutlined sx={sx} />
    case 'minusBoxOutline':
      return <IndeterminateCheckBoxOutlined sx={sx} />
    case 'italic':
      return <FormatItalic sx={sx} />
    case 'bold':
      return <FormatBold sx={sx} />
    case 'title':
      return <Title sx={sx} />
    case 'visibility':
      return <VisibilityTwoTone sx={sx} />
    case 'visibilityOff':
      return <VisibilityOffTwoTone sx={sx} />
    case 'strikethrough':
      return <StrikethroughS sx={sx} />
    case 'latex':
      return <span>TeX</span>
    case 'image':
      return <Image sx={sx} />
    case 'superscript':
      return <Superscript sx={sx} />
    case 'subscript':
      return <Subscript sx={sx} />
    case 'edit':
      return <EditTwoTone sx={sx} />
    case 'tag':
      return <AlternateEmail sx={sx} />
    case 'restore':
      return <RestoreFromTrashTwoTone sx={sx} />
    case 'label':
      return <LabelTwoTone sx={sx} />
    case 'upload':
      return <UploadTwoTone sx={sx} />
    case 'flag':
      return <FlagTwoTone sx={sx} />
    case 'email':
      return <MailOutlineTwoTone sx={sx} />
    default:
      return <></>
  }
}

function IconSvg(props: IconSvgProps) {
  const { icon, label = '', sx, wrap = true } = props

  const Wrapper = wrap ? 'span' : React.Fragment
  const wrapperProps = wrap
    ? {
        'data-svg': icon,
        className: 'styled-svg-wrapper',
        id: `icon-${icon}`,
        role: 'img',
      }
    : {}

  return (
    <Tooltip placement="top" title={label}>
      <Wrapper {...wrapperProps}>
        <IconMapping icon={icon} sx={sx} />
      </Wrapper>
    </Tooltip>
  )
}

/**
 * Map entity type values to appropriate icon values supported by IconSvg.
 */
export const type2SvgIconName: Record<EntityType, Icon> = {
  file: 'file',
  project: 'dashboard',
  folder: 'folder',
  table: 'table',
  link: 'link',
  entityview: 'entityview',
  materializedview: 'entityview',
  dockerrepo: 'docker',
  submissionview: 'submissionview',
  dataset: 'dataset',
  datasetcollection: 'datasetcollection',
}

export default IconSvg
