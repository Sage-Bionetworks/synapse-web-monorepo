import { GoogleIcon24 } from '@/assets/GoogleIcon24'
import CreateVersion from '@/assets/icons/CreateVersion'
import FileWithShield from '@/assets/icons/FileWithShield'
import { ORCIDIcon } from '@/assets/icons/ORCIDIcon'
import AccessManagement from '@/assets/mui_components/AccessManagement'
import AccountCertified from '@/assets/mui_components/AccountCertified'
import AccountRegistered from '@/assets/mui_components/AccountRegistered'
import AccountValidated from '@/assets/mui_components/AccountValidated'
import ActionKey from '@/assets/mui_components/ActionKey'
import BioChemicalPhysical from '@/assets/mui_components/BioChemicalPhysical'
import Chromatin from '@/assets/mui_components/Chromatin'
import Clinical from '@/assets/mui_components/Clinical'
import ComputationalTool from '@/assets/mui_components/ComputationalTool'
import Data from '@/assets/mui_components/Data'
import DataLocked from '@/assets/mui_components/DataLocked'
import DataReuse from '@/assets/mui_components/DataReuse'
import Dataset from '@/assets/mui_components/Dataset'
import DatasetCollection from '@/assets/mui_components/DatasetCollection'
import Docker from '@/assets/mui_components/Docker'
import GeneExpression from '@/assets/mui_components/GeneExpression'
import GeneVariants from '@/assets/mui_components/GeneVariants'
import HelpChatBubble from '@/assets/mui_components/HelpChatBubble'
import Imaging from '@/assets/mui_components/Imaging'
import InSilicoModel from '@/assets/mui_components/InSilicoModel'
import Kinomics from '@/assets/mui_components/Kinomics'
import LineGraph from '@/assets/mui_components/LineGraph'
import ModelSystem from '@/assets/mui_components/ModelSystem'
import Other from '@/assets/mui_components/Other'
import PackagableFile from '@/assets/mui_components/PackagableFile'
import Proteomics from '@/assets/mui_components/Proteomics'
import Rat from '@/assets/mui_components/Rat'
import SpatialProfiling from '@/assets/mui_components/SpatialProfiling'
import { ReactComponent as ArcusBioIcon } from '@/assets/ArcusBioIcon.svg'
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
  AssignmentOutlined,
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
  FilterAltTwoTone,
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
  LinkOffTwoTone,
  LinkTwoTone,
  ListTwoTone,
  LockOpenTwoTone,
  Login,
  MailOutlineTwoTone,
  MoreVertTwoTone,
  OpenInFull,
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
  Sort,
  Star,
  StarOutline,
  StarTwoTone,
  StorageTwoTone,
  StrikethroughS,
  Subscript,
  Superscript,
  SyncTwoTone,
  TableChartTwoTone,
  TableRows,
  TableViewTwoTone,
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
import { Tooltip } from '@mui/material'
import { SvgIconProps } from '@mui/material/SvgIcon'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { ReactNode } from 'react'

export const IconStrings = [
  'accessOpen',
  'accessClosed',
  'actionKey',
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
  'filter',
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
  'helpChatBubble',
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
  'inSilicoModel',
  'modelSystem',
  'bioChemicalPhysical',
  'computationalTool',
  'spatialProfiling',
  'dataReuse',
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
  'linkOff',
  'table',
  'tableRows',
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
  'clipboard',
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
  'sortUp',
  'sortDown',
  'orcid',
  'google24',
  'arcusbio',
  'openInFull',
  'tableview',
  'fileWithShield',
] as const

export type IconName = (typeof IconStrings)[number]

export type IconSvgProps = {
  icon: IconName
  // If provided, will be shown in tooltip
  onClick?: () => void
  label?: string
  wrap?: boolean
} & SvgIconProps

function IconMapping(props: { icon: string } & SvgIconProps) {
  const { icon, ...otherProps } = props
  const color = undefined

  otherProps.sx = {
    verticalAlign: 'middle',
    ...otherProps.sx,
  }

  switch (icon) {
    case 'accessOpen':
      return <LockOpenTwoTone {...otherProps} />
    case 'accessClosed':
      return <VpnKeyTwoTone {...otherProps} />
    case 'add':
      return <AddTwoTone {...otherProps} />
    case 'addConditions':
      return <FactCheckTwoTone {...otherProps} />
    case 'actionKey':
      return <ActionKey {...otherProps} />
    case 'arrowBack':
      return <ArrowBack {...otherProps} />
    case 'arrowForward':
      return <ArrowForward {...otherProps} />
    case 'arrowDropUp':
      return <ArrowDropUpTwoTone {...otherProps} />
    case 'arrowDropDown':
      return <ArrowDropDownTwoTone {...otherProps} />
    case 'article':
      return <ArticleTwoTone {...otherProps} />
    case 'block':
      return <Block {...otherProps} />
    case 'check':
      return <Check {...otherProps} />
    case 'clear':
      return <Clear {...otherProps} />
    case 'cart':
      return <ShoppingCartOutlined {...otherProps} />
    case 'cards':
      return <ViewAgendaTwoTone {...otherProps} />
    case 'clock':
      return <AccessTimeTwoTone {...otherProps} />
    case 'code':
      return <Code {...otherProps} />
    case 'columns':
      return <ViewColumnTwoTone {...otherProps} />
    case 'circle':
      return <RadioButtonUncheckedTwoTone {...otherProps} />
    case 'checkCircle':
      return <CheckCircleTwoTone {...otherProps} />
    case 'createVersion':
      return <CreateVersion {...otherProps} />
    case 'dashboard':
      return <DashboardTwoTone {...otherProps} />
    case 'delete':
      return <DeleteTwoTone {...otherProps} />
    case 'deleteSweep':
      return <DeleteSweepTwoTone {...otherProps} />
    case 'openInNewWindow':
      return <OpenInNewTwoTone {...otherProps} />
    case 'phone':
      return <PhoneTwoTone {...otherProps} />
    case 'people':
      return <PeopleTwoTone {...otherProps} />
    case 'addToCart':
      return <AddShoppingCart {...otherProps} />
    case 'addCircleOutline':
      return <AddCircleOutline {...otherProps} />
    case 'addCircleTwoTone':
      return <AddCircleTwoTone {...otherProps} />
    case 'reload':
      return <Cached {...otherProps} />
    case 'team':
      return <Group {...otherProps} />
    case 'photoCamera':
      return <PhotoCameraOutlined {...otherProps} />
    case 'verticalEllipsis':
      return <MoreVertTwoTone {...otherProps} />
    case 'sync':
      return <SyncTwoTone {...otherProps} />
    case 'tableRows':
      return <TableRows {...otherProps} />
    case 'public':
      return <PublicTwoTone {...otherProps} />
    case 'clipboard':
      return <AssignmentOutlined {...otherProps} />
    case 'clipboardCheck':
      return <AssignmentTurnedInTwoTone {...otherProps} />
    case 'info':
      return <InfoOutlined {...otherProps} />
    case 'favTwoTone':
      return <StarTwoTone {...otherProps} />
    case 'favOutline':
      return <StarOutline {...otherProps} />
    case 'fav':
      return <Star {...otherProps} />
    case 'github':
      return <GitHub {...otherProps} />
    case 'peopleTwoTone':
      return <PeopleTwoTone {...otherProps} />
    case 'challengesTwoTone':
      return <AssessmentTwoTone {...otherProps} />
    case 'download':
      return <GetAppTwoTone {...otherProps} />
    case 'errorOutlined':
      return <ErrorOutlined {...otherProps} />
    case 'searchOutlined':
      return <SearchOutlined {...otherProps} />
    case 'search':
      return <SearchTwoTone {...otherProps} />
    case 'history':
      return <HistoryTwoTone {...otherProps} />
    case 'time':
      return <WatchLater {...otherProps} />
    case 'login':
      return <Login {...otherProps} />
    case 'helpChatBubble':
      return <HelpChatBubble {...otherProps} />
    case 'helpOutlineTwoTone':
      return <HelpOutlineTwoTone {...otherProps} />
    case 'helpOutlined':
      return <HelpOutlined {...otherProps} />
    case 'close':
    case 'cross':
      return <CloseTwoTone {...otherProps} />
    case 'expandLess':
      return <ExpandLess {...otherProps} />
    case 'expandMore':
      return <ExpandMore {...otherProps} />
    case 'rat':
      return <Rat {...otherProps} />
    case 'chromatin':
      return <Chromatin {...otherProps} />
    case 'clinical':
      return <Clinical {...otherProps} />
    case 'contentCopy':
      return <ContentCopyTwoTone {...otherProps} />
    case 'data':
      return <Data {...otherProps} />
    case 'dataLocked':
      return <DataLocked {...otherProps} />
    case 'geneExpression':
      return <GeneExpression {...otherProps} />
    case 'geneVariants':
      return <GeneVariants {...otherProps} />
    case 'imaging':
      return <Imaging {...otherProps} />
    case 'inSilicoModel':
      return <InSilicoModel {...otherProps} />
    case 'modelSystem':
      return <ModelSystem {...otherProps} />
    case 'bioChemicalPhysical':
      return <BioChemicalPhysical {...otherProps} />
    case 'computationalTool':
      return <ComputationalTool {...otherProps} />
    case 'spatialProfiling':
      return <SpatialProfiling {...otherProps} />
    case 'dataReuse':
      return <DataReuse {...otherProps} />
    case 'lineGraph':
      return <LineGraph {...otherProps} />
    case 'kinomics':
      return <Kinomics {...otherProps} />
    case 'proteomics':
      return <Proteomics {...otherProps} />
    case 'packagableFile':
      return <PackagableFile {...otherProps} />
    case 'other':
      return <Other fill={color} {...otherProps} />
    case 'wiki':
      return <LanguageTwoTone {...otherProps} />
    case 'file':
      return <InsertDriveFileTwoTone {...otherProps} />
    case 'fileOutlined':
      return <InsertDriveFileOutlined {...otherProps} />
    case 'folder':
      return <FolderTwoTone {...otherProps} />
    case 'newFolder':
      return <CreateNewFolderTwoTone {...otherProps} />
    case 'link':
      return <LinkTwoTone {...otherProps} />
    case 'linkOff':
      return <LinkOffTwoTone {...otherProps} />
    case 'table':
      return <TableChartTwoTone {...otherProps} />
    case 'tableview':
      return <TableViewTwoTone {...otherProps} />
    case 'entityview':
      return <ListTwoTone {...otherProps} />
    case 'submissionview':
      return <StorageTwoTone {...otherProps} />
    case 'challenge':
      return <AssessmentTwoTone {...otherProps} />
    case 'discussion':
      return <QuestionAnswerTwoTone {...otherProps} />
    case 'dataset':
      return <Dataset {...otherProps} />
    case 'datasetcollection':
      return <DatasetCollection {...otherProps} />
    case 'database':
      return <LayersTwoTone {...otherProps} />
    case 'docker':
      return <Docker {...otherProps} />
    case 'accountCertified':
      return <AccountCertified {...otherProps} />
    case 'accountRegistered':
      return <AccountRegistered {...otherProps} />
    case 'accountValidated':
      return <AccountValidated {...otherProps} />
    case 'warningOutlined':
      return <ReportProblemOutlined {...otherProps} />
    case 'warning':
      return <WarningTwoTone {...otherProps} />
    case 'removeCircle':
      return <RemoveCircleTwoTone {...otherProps} />
    case 'replyTwoTone':
      return <ReplyTwoTone {...otherProps} />
    case 'chatTwoTone':
      return <ChatTwoTone {...otherProps} />
    case 'accessManagement':
      return <AccessManagement {...otherProps} />
    case 'chevronRight':
      return <ChevronRight {...otherProps} />
    case 'chevronLeft':
      return <ChevronLeft {...otherProps} />
    case 'pushpin':
      return <PushPinTwoTone {...otherProps} />
    case 'addBoxOutline':
      return <AddBoxOutlined {...otherProps} />
    case 'minusBoxOutline':
      return <IndeterminateCheckBoxOutlined {...otherProps} />
    case 'italic':
      return <FormatItalic {...otherProps} />
    case 'bold':
      return <FormatBold {...otherProps} />
    case 'title':
      return <Title {...otherProps} />
    case 'visibility':
      return <VisibilityTwoTone {...otherProps} />
    case 'visibilityOff':
      return <VisibilityOffTwoTone {...otherProps} />
    case 'strikethrough':
      return <StrikethroughS {...otherProps} />
    case 'latex':
      return <span>TeX</span>
    case 'image':
      return <Image {...otherProps} />
    case 'superscript':
      return <Superscript {...otherProps} />
    case 'subscript':
      return <Subscript {...otherProps} />
    case 'edit':
      return <EditTwoTone {...otherProps} />
    case 'tag':
      return <AlternateEmail {...otherProps} />
    case 'restore':
      return <RestoreFromTrashTwoTone {...otherProps} />
    case 'label':
      return <LabelTwoTone {...otherProps} />
    case 'upload':
      return <UploadTwoTone {...otherProps} />
    case 'flag':
      return <FlagTwoTone {...otherProps} />
    case 'email':
      return <MailOutlineTwoTone {...otherProps} />
    case 'sortUp':
      return (
        <Sort
          {...otherProps}
          sx={{
            transform: 'scale(1, -1)',
            ...otherProps.sx,
          }}
        />
      )
    case 'sortDown':
      return <Sort {...otherProps} />
    case 'google24':
      return <GoogleIcon24 {...otherProps} />
    case 'arcusbio':
      return <ArcusBioIcon {...otherProps} />
    case 'orcid':
      return <ORCIDIcon {...otherProps} />
    case 'filter':
      return <FilterAltTwoTone {...otherProps} />
    case 'openInFull':
      return <OpenInFull {...otherProps} />
    case 'fileWithShield':
      return <FileWithShield {...otherProps} />
    default:
      return <></>
  }
}

function IconSvg(props: IconSvgProps) {
  const { icon, label = '', onClick, wrap = true, ...svgIconProps } = props

  const id = `icon-${icon}`
  const role = onClick ? 'button' : 'img'
  const style = onClick ? { cursor: 'pointer' } : {}

  const wrapperProps = wrap
    ? {
        'data-svg': icon,
        className: 'styled-svg-wrapper',
        id,
        role,
        onClick,
        style,
      }
    : {}

  let iconNode: ReactNode
  if (wrap) {
    iconNode = (
      <span {...wrapperProps}>
        <IconMapping icon={icon} {...svgIconProps} />
      </span>
    )
  } else {
    iconNode = (
      <IconMapping
        icon={icon}
        id={id}
        role={role}
        onClick={onClick}
        style={style}
        {...svgIconProps}
      />
    )
  }

  return (
    <Tooltip placement="top" title={label}>
      {iconNode}
    </Tooltip>
  )
}

/**
 * Map entity type values to appropriate icon values supported by IconSvg.
 */
export const type2SvgIconName: Record<EntityType, IconName> = {
  file: 'file',
  project: 'dashboard',
  folder: 'folder',
  table: 'table',
  link: 'link',
  entityview: 'actionKey',
  materializedview: 'tableview',
  virtualtable: 'columns',
  dockerrepo: 'docker',
  submissionview: 'submissionview',
  dataset: 'dataset',
  datasetcollection: 'datasetcollection',
  recordset: 'fileWithShield',
}

export default IconSvg
