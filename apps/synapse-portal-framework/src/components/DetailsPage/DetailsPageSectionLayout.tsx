import { ReactNode } from 'react'
import { HeadlineWithLink } from './HeadlineWithLink'
import { SynapseErrorBoundary } from 'synapse-react-client/components/error/ErrorBanner'

/**
 * Describes a section of a portals DetailsPage. Using this interface allows us to render
 * both the side menu and the content based on a single definition.
 */
export type DetailsPageSectionLayoutType = {
  /** The title to use for the button and the section. If omitted, the section will not appear in the side menu. */
  title?: string
  /** If true, hide the title from the section content. The button will still appear in the menu */
  hideTitle?: boolean
  /** The unique, persistent ID to use for linking to the section */
  id: string
  /** The contents of the section */
  element: ReactNode
  helpText?: string
}

export function DetailsPageSectionLayout(props: DetailsPageSectionLayoutType) {
  const { id, title, hideTitle = false, element, helpText } = props
  return (
    <section id={id}>
      {title && !hideTitle && (
        <>
          <HeadlineWithLink title={title} id={id} helpText={helpText} />
          <hr />
        </>
      )}
      <SynapseErrorBoundary>{element}</SynapseErrorBoundary>
    </section>
  )
}
