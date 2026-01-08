import {
  DetailsPageSectionLayout,
  DetailsPageSectionLayoutType,
} from './DetailsPageSectionLayout'
import DetailsPageMenu from '../DetailsPageMenu'
import styles from './DetailsPageContentLayout.module.scss'

export type DetailsPageContentType = DetailsPageSectionLayoutType[]

export function DetailsPageContent(props: {
  content: DetailsPageContentType
  hideMenu?: boolean
}) {
  const { content } = props
  const menuOptions = content.filter(option => option.title && option.id)
  const hideMenu = props.hideMenu ?? menuOptions.length <= 1

  return (
    <div className={styles.DetailsPageLayout}>
      {!hideMenu && <DetailsPageMenu menuSections={menuOptions} />}
      <div className={'component-container'}>
        {content.map(option => (
          <DetailsPageSectionLayout key={option.id} {...option} />
        ))}
      </div>
    </div>
  )
}
