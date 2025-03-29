import { UniqueFacetIdentifier } from '@/utils'
import { merge } from 'lodash-es'
import { useCallback, useMemo } from 'react'
import IconSvg, { IconSvgProps } from './IconSvg/IconSvg'
import { useQueryContext } from './QueryContext'

type IconConfigs = {
  [index: string]: IconSvgProps // if the icon option has the "label" set, it will show tooltip in IconSvg
}

export type IconListProps = {
  iconConfigs: IconConfigs
  iconNames: string[]
  commonIconProps?: Omit<IconSvgProps, 'icon'>
  useTheme?: boolean
  useBackground?: boolean
}

const defaultCommonIconProps: IconListProps['commonIconProps'] = {
  sx: { fontSize: '24px' },
}

function IconList(props: IconListProps) {
  const {
    iconConfigs,
    iconNames,
    commonIconProps = defaultCommonIconProps,
    useTheme,
    useBackground,
  } = props
  let noMatch: boolean = false
  const css = useTheme ? 'icon-list themed' : 'icon-list'
  const componentCss = useBackground ? `${css} bg-circle` : css
  const queryContext = useQueryContext()
  const { addValueToSelectedFacet } = queryContext

  const handleIconClick = useCallback(
    (dataType: 'string') => {
      const facet: UniqueFacetIdentifier = {
        columnName: 'dataType',
      }
      addValueToSelectedFacet(facet, dataType)
    },
    [addValueToSelectedFacet],
  )

  const mergedIconConfigs: IconConfigs = useMemo(() => {
    const mergedIconConfigs: IconConfigs = {}
    for (const [key, iconProps] of Object.entries(iconConfigs)) {
      mergedIconConfigs[key] = merge({}, commonIconProps, iconProps)
    }
    return mergedIconConfigs
  }, [iconConfigs, commonIconProps])

  const buildIconList = () => {
    const unique = Array.from(new Set(iconNames))
    return unique.map((el: any) => {
      const iconConfig = mergedIconConfigs[el]
      // if this data type value doesn't have a matching icon, we use the "other" icon
      if (!iconConfig) {
        noMatch = true
        return
      } else {
        return (
          <IconSvg
            key={el}
            {...iconConfig}
            onClick={() => handleIconClick(el)}
          />
        )
      }
    })
  }

  return (
    <span className={componentCss}>
      {buildIconList()}
      {noMatch && mergedIconConfigs['other'] ? (
        <IconSvg {...mergedIconConfigs['other']} />
      ) : (
        <></>
      )}
    </span>
  )
}

export default IconList
