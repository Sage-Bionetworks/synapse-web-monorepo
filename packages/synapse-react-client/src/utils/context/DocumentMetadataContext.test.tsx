import { render, waitFor } from '@testing-library/react'
import {
  DocumentMetadataProvider,
  type DocumentMetadataRegistration,
  useDocumentMetadata,
} from './DocumentMetadataContext'

function MetadataRegistration(props: DocumentMetadataRegistration) {
  useDocumentMetadata(props)
  return null
}

describe('DocumentMetadataContext', () => {
  let descriptionMeta: HTMLMetaElement
  let previousTitle: string
  let previousDescription: string | null
  let metaExistedBeforeTest: boolean

  beforeEach(() => {
    previousTitle = document.title
    descriptionMeta = document.querySelector(
      'meta[name="description"]',
    ) as HTMLMetaElement

    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta')
      descriptionMeta.setAttribute('name', 'description')
      document.head.appendChild(descriptionMeta)
      metaExistedBeforeTest = false
    } else {
      metaExistedBeforeTest = true
    }

    previousDescription = descriptionMeta.getAttribute('content')

    document.title = 'Initial Title'
    descriptionMeta.setAttribute('content', 'Initial Description')
  })

  afterEach(() => {
    document.title = previousTitle
    if (previousDescription === null) {
      descriptionMeta.removeAttribute('content')
    } else {
      descriptionMeta.setAttribute('content', previousDescription)
    }

    if (!metaExistedBeforeTest) {
      descriptionMeta.remove()
    }
  })

  it('uses default metadata when no registrations exist', async () => {
    render(
      <DocumentMetadataProvider
        defaultTitle="Default Title"
        defaultDescription="Default Description"
      >
        <div>Child</div>
      </DocumentMetadataProvider>,
    )

    await waitFor(() => expect(document.title).toBe('Default Title'))
    await waitFor(() =>
      expect(descriptionMeta.getAttribute('content')).toBe(
        'Default Description',
      ),
    )
  })

  it('prefers higher priority registrations, and falls back to lower priority registrations when higher priority unmounts', async () => {
    const { rerender } = render(
      <DocumentMetadataProvider
        defaultTitle="Default Title"
        defaultDescription="Default Description"
      >
        <MetadataRegistration
          title="Low Priority Title"
          description="Low Priority Description"
          priority={0}
        />
        <MetadataRegistration title="High Priority Title" priority={5} />
        <MetadataRegistration
          description="High Priority Description"
          priority={10}
        />
      </DocumentMetadataProvider>,
    )

    await waitFor(() => expect(document.title).toBe('High Priority Title'))
    await waitFor(() =>
      expect(descriptionMeta.getAttribute('content')).toBe(
        'High Priority Description',
      ),
    )

    rerender(
      <DocumentMetadataProvider
        defaultTitle="Default Title"
        defaultDescription="Default Description"
      >
        <MetadataRegistration
          title="Low Priority Title"
          description="Low Priority Description"
          priority={0}
        />
      </DocumentMetadataProvider>,
    )

    await waitFor(() => expect(document.title).toBe('Low Priority Title'))
    await waitFor(() =>
      expect(descriptionMeta.getAttribute('content')).toBe(
        'Low Priority Description',
      ),
    )
  })
})
