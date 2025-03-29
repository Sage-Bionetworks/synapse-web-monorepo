import { ReactComponent as chart2Svg } from '@/assets/icons/chart2.svg'

import { ReactComponent as Data2Svg } from '@/assets/icons/Data2.svg'
import { ReactComponent as DNA_TwoSvg } from '@/assets/icons/DNA_Two.svg'
import { ReactComponent as fileSvg } from '@/assets/icons/file.svg'
import { ReactComponent as institutionSvg } from '@/assets/icons/institution.svg'
import { ReactComponent as mouseSvg } from '@/assets/icons/mouse.svg'
import { ReactComponent as organizationsSvg } from '@/assets/icons/organizations.svg'
import { ReactComponent as personSvg } from '@/assets/icons/person.svg'
import { ReactComponent as studyActiveSvg } from '@/assets/icons/study-active.svg'
import { ReactComponent as studyCompleteSvg } from '@/assets/icons/study-complete.svg'
import { ReactComponent as translationalSvg } from '@/assets/icons/translational.svg'
import { ReactComponent as treeHorizontalSvg } from '@/assets/icons/tree_horizontal.svg'
import {
  Challenge,
  Chart,
  Close,
  Collapse,
  Columns,
  ColumnsDark,
  Database,
  Download,
  Expand,
  Explore,
  ExternalLink,
  Filter,
  Program,
  Project,
  Publication,
  Search,
  Settings,
  SortDown,
  SortUp,
  SqlEditorIcon,
  Study,
  ToolClinical,
  ToolComputational,
  ToolExperimental,
  VerticalDots,
} from '@/assets/themed_icons'
import {
  CHALLENGE,
  CHART,
  CHART2,
  CLINICAL,
  CLOSE,
  COLLAPSE,
  COLUMNS,
  COLUMNSDARK,
  COMPUTATIONAL,
  COMPUTATIONAL_TOOL,
  CONTRIBUTOR,
  DATABASE,
  DATASET,
  DOWNLOAD,
  DOWNLOAD_PERMISSION_REQUIRED,
  EASY_DIFFICULTY,
  EXPAND,
  EXPERIMENTAL,
  EXPERIMENTAL_TOOL,
  EXPLORE,
  EXTERNAL_RESOURCE,
  EXTERNALLINK,
  FILE,
  FILTER,
  FUNDER,
  GRANT,
  MEDIUM_DIFFICULTY,
  MOUSE,
  ORGANIZATION,
  PERSON,
  PROGRAM,
  PROJECT,
  PUBLICATION,
  SEARCH,
  SETTINGS,
  SORTDOWN,
  SORTUP,
  SQL_EDITOR,
  STUDY,
  STUDY_ACTIVE,
  STUDY_COMPLETE,
  TOOL,
  TRANSLATIONAL,
  TREE_HORIZONTAL,
  VARIABLE_DIFFICULTY,
  VERTICAL_DOTS,
} from '@/utils/SynapseConstants'
import { ComponentType } from 'react'
import IconSvg from '../IconSvg/IconSvg'

export type IconOptions = Record<string, string | ComponentType<any>>

export type IconProps = {
  type: string
  iconOptions?: IconOptions
  value?: string
  isHeader?: boolean
  cssClass?: string
}

const iconSvgMapping = {
  clipboard: <IconSvg icon="clipboard" />,
  [DATASET]: <IconSvg icon="dataset" />,
  [EXTERNAL_RESOURCE]: <IconSvg icon="link" />,
}

const defaultIcons = {
  [DATABASE]: Database, // this returns svg tag
  [FUNDER]: Data2Svg,
  [TOOL]: DNA_TwoSvg,
  [STUDY_ACTIVE]: studyActiveSvg,
  [STUDY_COMPLETE]: studyCompleteSvg,
  // new icons
  [PUBLICATION]: Publication,
  [STUDY]: Study,
  [EXPERIMENTAL]: ToolExperimental,
  [EXPERIMENTAL_TOOL]: ToolExperimental,
  [COMPUTATIONAL]: ToolComputational,
  [COMPUTATIONAL_TOOL]: ToolComputational,
  [CLINICAL]: ToolClinical,
  [PROGRAM]: Program,
  [PROJECT]: Project,
  [GRANT]: Project,
  [ORGANIZATION]: organizationsSvg,
  [PERSON]: personSvg,
  [MOUSE]: mouseSvg,
  [TRANSLATIONAL]: translationalSvg,
  [EXPLORE]: Explore,
  [SEARCH]: Search,
  [CHART]: Chart,
  [FILTER]: Filter,
  [SQL_EDITOR]: SqlEditorIcon,
  [DOWNLOAD]: Download,
  [EXPAND]: Expand,
  [COLLAPSE]: Collapse,
  [CLOSE]: Close,
  [SORTUP]: SortUp,
  [SORTDOWN]: SortDown,
  [SETTINGS]: Settings,
  [COLUMNS]: Columns,
  [COLUMNSDARK]: ColumnsDark,
  [CHALLENGE]: Challenge,
  [VERTICAL_DOTS]: VerticalDots,
  [CHART2]: chart2Svg,
  [FILE]: fileSvg,
  [EXTERNALLINK]: ExternalLink,
  [CONTRIBUTOR]: institutionSvg,
  [TREE_HORIZONTAL]: treeHorizontalSvg,
  [EASY_DIFFICULTY]:
    'https://s3.amazonaws.com/static.synapse.org/images/easy.svg',
  [MEDIUM_DIFFICULTY]:
    'https://s3.amazonaws.com/static.synapse.org/images/medium.svg',
  [VARIABLE_DIFFICULTY]:
    'https://s3.amazonaws.com/static.synapse.org/images/variable.svg',
  [DOWNLOAD_PERMISSION_REQUIRED]:
    'https://s3.amazonaws.com/static.synapse.org/images/downloadPermissionRequired.svg',
}
function Icon({ type, value = '', iconOptions, cssClass }: IconProps) {
  const IconSvg = iconSvgMapping[value] || iconSvgMapping[type]
  if (IconSvg) return IconSvg

  const iconSet = { ...defaultIcons, ...iconOptions }
  // see if the value has a corresponding icon, e.g. 'Active' in a studies table
  // or if the type of card has a corresponding icon, e.g. 'Publication'
  const IconDefinition = iconSet[value] || iconSet[type]
  const className = `iconImg ${cssClass ?? ''}`
  if (IconDefinition == null) {
    console.warn('Icon type not found:', type)
    return <></>
  }
  if (typeof IconDefinition === 'string') {
    return <img src={IconDefinition} className={className} />
  }
  return (
    <span>
      <IconDefinition className={className} />
    </span>
  )
}
export default Icon
