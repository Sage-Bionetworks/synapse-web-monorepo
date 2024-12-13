import { ComponentType } from 'react'
import {
  DATABASE,
  DATASET,
  FUNDER,
  PUBLICATION,
  CHALLENGE,
  STUDY_ACTIVE,
  STUDY_COMPLETE,
  TOOL,
  STUDY,
  EXPERIMENTAL,
  EXPERIMENTAL_TOOL,
  COMPUTATIONAL,
  COMPUTATIONAL_TOOL,
  CLINICAL,
  PROJECT,
  PROGRAM,
  GRANT,
  ORGANIZATION,
  PERSON,
  MOUSE,
  EXPLORE,
  SEARCH,
  CHART,
  FILTER,
  DOWNLOAD,
  EXPAND,
  COLLAPSE,
  CLOSE,
  SORTUP,
  SORTDOWN,
  SETTINGS,
  COLUMNS,
  COLUMNSDARK,
  VERTICAL_DOTS,
  CHART2,
  FILE,
  EXTERNALLINK,
  EASY_DIFFICULTY,
  MEDIUM_DIFFICULTY,
  VARIABLE_DIFFICULTY,
  DOWNLOAD_PERMISSION_REQUIRED,
  SQL_EDITOR,
  CONTRIBUTOR,
  EXTERNAL_RESOURCE,
} from '../../utils/SynapseConstants'

import { ReactComponent as Data2Svg } from '../../assets/icons/Data2.svg'
import { ReactComponent as studyActiveSvg } from '../../assets/icons/study-active.svg'
import { ReactComponent as studyCompleteSvg } from '../../assets/icons/study-complete.svg'
import { ReactComponent as DNA_TwoSvg } from '../../assets/icons/DNA_Two.svg'
import { ReactComponent as organizationsSvg } from '../../assets/icons/organizations.svg'
import { ReactComponent as personSvg } from '../../assets/icons/person.svg'
import { ReactComponent as mouseSvg } from '../../assets/icons/mouse.svg'
import { ReactComponent as chart2Svg } from '../../assets/icons/chart2.svg'
import { ReactComponent as fileSvg } from '../../assets/icons/file.svg'
import { ReactComponent as institutionSvg } from '../../assets/icons/institution.svg'
import { Challenge } from '../../assets/themed_icons/Challenge'
import { Program } from '../../assets/themed_icons/Program'
import { Project } from '../../assets/themed_icons/Project'
import { Publication } from '../../assets/themed_icons/Publication'
import { Study } from '../../assets/themed_icons/Study'
import { ToolClinical } from '../../assets/themed_icons/ToolClinical'
import { ToolComputational } from '../../assets/themed_icons/ToolComputational'
import { ToolExperimental } from '../../assets/themed_icons/ToolExperimental'
import { Database } from '../../assets/themed_icons/Database'
import { Explore } from '../../assets/themed_icons/Explore'
import { Search } from '../../assets/themed_icons/Search'
import { Chart } from '../../assets/themed_icons/Chart'
import { Filter } from '../../assets/themed_icons/Filter'
import { Download } from '../../assets/themed_icons/Download'
import { Expand } from '../../assets/themed_icons/Expand'
import { Collapse } from '../../assets/themed_icons/Collapse'
import { Close } from '../../assets/themed_icons/Close'
import { SortUp } from '../../assets/themed_icons/SortUp'
import { SortDown } from '../../assets/themed_icons/SortDown'
import { Settings } from '../../assets/themed_icons/Settings'
import { Columns } from '../../assets/themed_icons/Columns'
import { ColumnsDark } from '../../assets/themed_icons/ColumnsDark'
import { VerticalDots } from '../../assets/themed_icons/VerticalDots'
import { ExternalLink } from '../../assets/themed_icons/ExternalLink'
import { SqlEditorIcon } from '../../assets/themed_icons/SqlEditorIcon'
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
