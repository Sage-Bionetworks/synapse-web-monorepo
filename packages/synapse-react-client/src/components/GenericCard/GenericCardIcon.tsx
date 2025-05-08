import IconSvg, { type2SvgIconName } from '@/components/IconSvg/IconSvg'
import { IconProps } from '@/components/Icon/Icon'
import { Icon } from '@/components/row_renderers/utils/index'
import { ImageFileHandle } from '@/components/widgets/ImageFileHandle'
import { FileHandleAssociation } from '@sage-bionetworks/synapse-types'

export type GenericCardIconProps = {
  /** May be used to determine the icon if `useTypeForIcon` is true */
  type: string
  /** If true, the icon is determined using the 'type' field passed to the generic card
   * @default false */
  useTypeForIcon?: boolean

  imageFileHandleId?: string
  thumbnailRequiresPadding?: boolean
  fileHandleAssociation?: FileHandleAssociation

  iconOptions?: IconProps['iconOptions']
  iconValue?: IconProps['value']
}

export function GenericCardIcon(props: GenericCardIconProps) {
  const {
    type,
    useTypeForIcon = false,
    imageFileHandleId,
    thumbnailRequiresPadding,
    fileHandleAssociation,
    iconOptions,
    iconValue,
  } = props

  if (useTypeForIcon) {
    return (
      <div className="SRC-cardThumbnail">
        <IconSvg
          icon={type2SvgIconName[type as keyof typeof type2SvgIconName]}
        />
      </div>
    )
  }

  if (imageFileHandleId) {
    return (
      <div
        className="SRC-imageThumbnail"
        style={{
          padding: thumbnailRequiresPadding ? '21px' : undefined,
        }}
      >
        {fileHandleAssociation && (
          <ImageFileHandle fileHandleAssociation={fileHandleAssociation} />
        )}
      </div>
    )
  }

  return (
    <div className="SRC-cardThumbnail">
      <Icon iconOptions={iconOptions} value={iconValue} type={type} />
    </div>
  )
}
