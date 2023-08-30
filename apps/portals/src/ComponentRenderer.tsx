import { useLocation } from 'react-router-dom'
import React from 'react'
import { SynapseConfig } from './types/portal-config'
import { scrollToWithOffset } from './utils'
import { SynapseComponent } from './SynapseComponent'
import Layout from './portal-components/Layout'

const ignoreSearchParamsSet: Set<string> = new Set([
  'utm_source',
  'utm_campaign',
  'utm_medium',
  'utm_term',
  'utm_content',
])

export function ComponentRenderer(props: { config: SynapseConfig }) {
  const {
    containerClassName,
    outsideContainerClassName,
    isOutsideContainer,
    title,
    centerTitle,
    subtitle,
  } = props.config
  const { search, hash } = useLocation()
  // If url has search params transform into key-value dictionary that can be passed into
  // the component which is rendered
  let searchParamsProps: any = undefined
  if (search) {
    searchParamsProps = {}
    // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams -- needs polyfill for ie11
    const searchParams = new URLSearchParams(search)
    searchParams.forEach((value, key) => {
      if (!ignoreSearchParamsSet.has(key)) {
        searchParamsProps[key] = value
      }
    })
  }
  const scrollToRef = React.useRef(null)
  const scrollToJsx =
    title && hash && hash === `#${encodeURI(title)}` ? (
      <span ref={scrollToRef} />
    ) : (
      <></>
    )
  // this delay is here to improve the location of the element, since it's position depends on the layout of other components on the page (that also need to load)
  setTimeout(() => {
    if (scrollToRef.current) {
      scrollToWithOffset(scrollToRef.current)
    }
  }, 500)
  return (
    <React.Fragment key={JSON.stringify(props)}>
      {isOutsideContainer ? (
        <div className={containerClassName}>
          {title && (
            <h2 className={`title ${centerTitle ? 'center-title' : ''}`}>
              {title}
            </h2>
          )}
          {subtitle && (
            <p className={`${centerTitle ? 'center-title' : ''}`}>{subtitle}</p>
          )}
          <SynapseComponent
            synapseConfig={props.config}
            searchParams={searchParamsProps}
          />
        </div>
      ) : (
        <Layout
          key={JSON.stringify(props)}
          containerClassName={containerClassName}
          outsideContainerClassName={outsideContainerClassName}
        >
          {scrollToJsx}
          {/* re-think how this renders! remove specific styling */}
          {title && (
            <h2 className={`title ${centerTitle ? 'center-title' : ''}`}>
              {title}
            </h2>
          )}
          {subtitle && (
            <p className={`${centerTitle ? 'center-title' : ''}`}>{subtitle}</p>
          )}
          <SynapseComponent
            synapseConfig={props.config}
            searchParams={searchParamsProps}
          />
        </Layout>
      )}
    </React.Fragment>
  )
}
