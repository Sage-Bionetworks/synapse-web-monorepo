import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import noop from 'lodash-es/noop'

export type DocumentMetadataRegistration = {
  title?: string
  description?: string
  priority?: number
}

type DocumentMetadataContextValue = {
  register: (registration: DocumentMetadataRegistration) => () => void
}

type DocumentMetadataProviderProps = PropsWithChildren<{
  defaultTitle?: string
  defaultDescription?: string
}>

type MetadataEntry = {
  id: symbol
  title?: string
  description?: string
  priority: number
}

const DocumentMetadataContext = createContext<
  DocumentMetadataContextValue | undefined
>(undefined)

export function DocumentMetadataProvider(props: DocumentMetadataProviderProps) {
  // Centralizes document.title/meta description writes so consumers can register values
  // with priorities; highest priority wins, then portal defaults
  const { children, defaultTitle, defaultDescription } = props
  const [entries, setEntries] = useState<MetadataEntry[]>([])

  // Keep registrations stable between renders and automatically clean up on unmount.
  const sortedEntries = useMemo(
    () => [...entries].sort((a, b) => b.priority - a.priority),
    [entries],
  )

  const register = useCallback(
    (registration: DocumentMetadataRegistration) => {
      const entry: MetadataEntry = {
        id: Symbol('DocumentMetadataEntry'),
        title: registration.title,
        description: registration.description,
        priority: registration.priority ?? 0,
      }
      setEntries(current => [...current, entry])
      return () => {
        setEntries(current => current.filter(item => item.id !== entry.id))
      }
    },
    [setEntries],
  )

  const contextValue = useMemo<DocumentMetadataContextValue>(
    () => ({ register }),
    [register],
  )

  useEffect(() => {
    // Resolve the highest-priority title/description and push them to the DOM.
    const resolvedTitle =
      sortedEntries.find(entry => entry.title !== undefined)?.title ??
      defaultTitle

    if (resolvedTitle !== undefined && document.title !== resolvedTitle) {
      document.title = resolvedTitle
    }

    const descriptionElement = document.querySelector(
      'meta[name="description"]',
    )
    if (descriptionElement) {
      const resolvedDescription =
        sortedEntries.find(entry => entry.description !== undefined)
          ?.description ?? defaultDescription

      if (
        typeof resolvedDescription === 'string' &&
        descriptionElement.getAttribute('content') !== resolvedDescription
      ) {
        descriptionElement.setAttribute('content', resolvedDescription)
      }
    }
  }, [defaultTitle, defaultDescription, sortedEntries])

  return (
    <DocumentMetadataContext.Provider value={contextValue}>
      {children}
    </DocumentMetadataContext.Provider>
  )
}

export function useDocumentMetadata(
  registration: DocumentMetadataRegistration,
) {
  const context = useContext(DocumentMetadataContext)
  const { title, description, priority } = registration

  useEffect(() => {
    if (context) {
      return context.register({ title, description, priority })
    }
    return noop
  }, [context, title, description, priority])
}
