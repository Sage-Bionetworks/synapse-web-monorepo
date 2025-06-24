import { entityTypeToFriendlyName } from '@/utils/functions/EntityTypeUtils'
import { EntityType } from '@sage-bionetworks/synapse-types'
import { CSSProperties, Fragment } from 'react'
import IconSvg, {
  IconName,
  IconSvgProps,
  type2SvgIconName,
} from './IconSvg/IconSvg'

const getIconTypeForEntity = (type: EntityType): IconName | '' => {
  switch (type) {
    case EntityType.PROJECT:
    case EntityType.FOLDER:
    case EntityType.FILE:
    case EntityType.TABLE:
    case EntityType.LINK:
    case EntityType.ENTITY_VIEW:
    case EntityType.DOCKER_REPO:
    case EntityType.SUBMISSION_VIEW:
    case EntityType.DATASET:
    case EntityType.DATASET_COLLECTION:
    case EntityType.MATERIALIZED_VIEW:
    case EntityType.VIRTUAL_TABLE:
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
}

export function EntityTypeIcon(
  props: Omit<IconSvgProps, 'icon'> & EntityTypeIconProps,
) {
  const { type, style, className, includeTooltip = true, ...rest } = props
  if (!type) {
    return <></>
  }
  const iconType = getIconTypeForEntity(type)
  if (iconType === '') {
    console.warn('Could not retrieve icon for Entity with type: ', type)
    return <Fragment />
  }

  const label = includeTooltip ? entityTypeToFriendlyName(type) : undefined

  return (
    <span style={style} className={className}>
      <IconSvg icon={iconType} label={label} {...rest} />
    </span>
  )
}

export default EntityTypeIcon
