import { entityTypeToFriendlyName } from '@/utils/functions/EntityTypeUtils'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { CSSProperties, Fragment } from 'react'
import IconSvg, {
  IconName,
  IconSvgProps,
  type2SvgIconName,
} from './IconSvg/IconSvg'

const getIconTypeForEntity = (type: EntityType): IconName | '' => {
  switch (type) {
    case EntityType.project:
    case EntityType.folder:
    case EntityType.file:
    case EntityType.table:
    case EntityType.link:
    case EntityType.entityview:
    case EntityType.dockerrepo:
    case EntityType.submissionview:
    case EntityType.dataset:
    case EntityType.datasetcollection:
    case EntityType.materializedview:
    case EntityType.virtualtable:
    case EntityType.recordset:
      return type2SvgIconName[type]
    default:
      return ''
  }
}

type EntityTypeIconProps = {
  type: EntityType
  style?: CSSProperties
  className?: string
  includeTooltip?: boolean
  wrap?: boolean
}

export function EntityTypeIcon(
  props: Omit<IconSvgProps, 'icon'> & EntityTypeIconProps,
) {
  const {
    type,
    style,
    className,
    includeTooltip = true,
    wrap = true,
    ...rest
  } = props
  if (!type) {
    return <></>
  }
  const iconType = getIconTypeForEntity(type)
  if (iconType === '') {
    console.warn('Could not retrieve icon for Entity with type: ', type)
    return <Fragment />
  }

  const label = includeTooltip ? entityTypeToFriendlyName(type) : undefined

  if (wrap) {
    return (
      <span style={style} className={className}>
        <IconSvg icon={iconType} label={label} wrap={wrap} {...rest} />
      </span>
    )
  }
  return <IconSvg icon={iconType} label={label} wrap={wrap} {...rest} />
}

export default EntityTypeIcon
