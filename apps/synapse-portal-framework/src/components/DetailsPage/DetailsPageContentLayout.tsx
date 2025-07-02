import { useLocation, useNavigate } from 'react-router'
import {
  DetailsPageSectionLayout,
  DetailsPageSectionLayoutType,
} from './DetailsPageSectionLayout'
import EntityPageMenu from '../EntityPageMenu'

export type DetailsPageContentType = DetailsPageSectionLayoutType[]

export function DetailsPageContent(props: {
  content: DetailsPageContentType
  hideMenu?: boolean
}) {
  const { content } = props
  const menuOptions = content.filter(option => option.title && option.id)
  const hideMenu = props.hideMenu ?? menuOptions.length <= 1

  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className={'tab-content-group'}>
      {!hideMenu && (
        <EntityPageMenu
          menuSections={content}
          navigate={navigate}
          location={location}
        />
      )}
      <div className={'component-container'}>
        {content.map(option => (
          <DetailsPageSectionLayout key={option.id} {...option} />
        ))}
      </div>
    </div>
  )
}
