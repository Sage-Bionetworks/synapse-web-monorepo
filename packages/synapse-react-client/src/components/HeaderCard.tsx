import { CardLabel } from '@/components/row_renderers/utils/CardFooter'
import { useState, useEffect } from 'react'
import { CardFooter } from './row_renderers/utils'
import { DescriptionConfig } from './CardContainerLogic'
import { CollapsibleDescription } from './GenericCard/CollapsibleDescription'
import HeaderCardV2 from './HeaderCard/HeaderCardV2'
import { CTACardLink } from '@/components/CardContainerLogic'

export type HeaderCardVariant = 'HeaderCard' | 'HeaderCardV2'

export type HeaderCardProps = {
  type: string
  title: string
  subTitle?: string
  description: string
  secondaryLabelLimit?: number
  values?: CardLabel[]
  isAlignToLeftNav?: boolean
  descriptionConfig?: DescriptionConfig
  href?: string
  target?: string
  icon: React.ReactNode
  headerCardVariant?: HeaderCardVariant
  ctaLinkConfig?: CTACardLink
}

function HeaderCard(props: HeaderCardProps) {
  const {
    type,
    title,
    subTitle = '',
    description,
    values,
    secondaryLabelLimit,
    isAlignToLeftNav,
    descriptionConfig,
    href,
    target,
    icon,
    headerCardVariant = 'HeaderCard',
  } = props

  // store old document title and description so that we can restore when this component is removed
  const descriptionElement: Element | null = document.querySelector(
    'meta[name="description"]',
  )
  const descriptionConfiguration: DescriptionConfig = {
    ...descriptionConfig,
    showFullDescriptionByDefault:
      descriptionConfig?.showFullDescriptionByDefault ?? true,
  }
  const [docTitle] = useState<string>(document.title)
  const [docDescription] = useState<string>(
    descriptionElement ? descriptionElement.getAttribute('content')! : '',
  )
  useEffect(() => {
    // update page title and description based on header card values
    if (title && document.title !== title) {
      document.title = title
    }

    if (description || subTitle) {
      descriptionElement?.setAttribute(
        'content',
        description ? description : subTitle,
      )
    }

    return function cleanup() {
      document.title = docTitle
      descriptionElement?.setAttribute('content', docDescription)
    }
  })

  if (headerCardVariant === 'HeaderCardV2') {
    return <HeaderCardV2 {...props} />
  }

  return (
    <div
      className={`SRC-portalCard SRC-portalCardHeader ${
        isAlignToLeftNav ? 'isAlignToLeftNav' : ''
      }`}
    >
      <div className="container-fluid container-full-width">
        <div className="row">
          <div className="col-md-offset-1 col-md-10">
            <div className="SRC-portalCardMain">
              {icon}
              <div style={{ width: '100%' }}>
                <div className="SRC-cardContent" style={{ marginLeft: '15px' }}>
                  <div className="SRC-type">{type}</div>
                  <div>
                    <h3 className="SRC-boldText" style={{ margin: 'none' }}>
                      {href ? (
                        <a
                          target={target}
                          href={href}
                          className="highlight-link"
                        >
                          {title}
                        </a>
                      ) : (
                        <span> {title} </span>
                      )}
                    </h3>
                  </div>
                  {subTitle && <div className="SRC-author"> {subTitle} </div>}
                  <CollapsibleDescription
                    description={description}
                    descriptionSubTitle=""
                    descriptionConfig={descriptionConfiguration}
                  />
                </div>
                <div
                  style={{
                    borderTop: '1px solid rgba(26, 28, 41, 0.2)',
                    marginTop: '15px',
                    paddingTop: '5px',
                  }}
                />
                <div className="SRC-cardContent">
                  {values && (
                    <CardFooter
                      isHeader={true}
                      secondaryLabelLimit={secondaryLabelLimit}
                      values={values}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderCard
