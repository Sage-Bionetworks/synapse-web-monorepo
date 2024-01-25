import React from 'react'
import IconSvg, { IconSvgProps } from './IconSvg/IconSvg'

type IconConfigs = {
  [index: string]: IconSvgProps // if the icon option has the "label" set, it will show tooltip in IconSvg
}

export type IconListProps = {
  iconConfigs: IconConfigs
  iconNames: string[]
  iconFontSize?: string
  useTheme?: boolean
  useBackground?: boolean
}

const mergeIconFontSizeIntoIconConfigs = (
  iconConfigs: IconConfigs,
  iconFontSize: string,
) => {
  for (const key in iconConfigs) {
    const existingSx = iconConfigs[key].sx
    iconConfigs[key].sx = existingSx
      ? { ...existingSx, fontSize: iconFontSize }
      : { fontSize: iconFontSize }
  }
}

const IconList: React.FunctionComponent<IconListProps> = props => {
  const {
    iconConfigs,
    iconNames,
    iconFontSize = '24px',
    useTheme,
    useBackground,
  } = props
  let noMatch: boolean = false
  const css = useTheme ? 'icon-list themed' : 'icon-list'
  const componentCss = useBackground ? `${css} bg-circle` : css
  mergeIconFontSizeIntoIconConfigs(iconConfigs, iconFontSize)

  const buildIconList = () => {
    const unique = Array.from(new Set(iconNames))
    return unique.map((el: any) => {
      const iconConfig = iconConfigs[el]
      // if this data type value doesn't have a matching icon, we use the "other" icon
      if (!iconConfig) {
        noMatch = true
        return
      } else {
        return <IconSvg key={el} {...iconConfig} />
      }
    })
  }

  return (
    <span className={componentCss}>
      {buildIconList()}
      {noMatch && iconConfigs['other'] ? (
        <IconSvg {...iconConfigs['other']} />
      ) : (
        <></>
      )}
    </span>
  )
}

export default IconList
