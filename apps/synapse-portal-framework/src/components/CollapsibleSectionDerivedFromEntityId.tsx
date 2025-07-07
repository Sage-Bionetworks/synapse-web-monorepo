import { Skeleton } from '@mui/material'
import { useGetEntityHeader } from 'synapse-react-client/synapse-queries'
import CollapsibleSection, {
  BaseCollapsibleSectionProps,
} from './CollapsibleSection'

type CollapsibleSectionDerivedFromEntityIdProps =
  BaseCollapsibleSectionProps & {
    entityTitlePrepend?: string
  }

const CollapsibleSectionDerivedFromEntityId = ({
  id,
  children,
  helpText,
  hideTitle = false,
  entityTitlePrepend = '',
}: CollapsibleSectionDerivedFromEntityIdProps) => {
  const { data: entityHeader, isLoading } = useGetEntityHeader(id)

  if (isLoading) {
    return <Skeleton width={300} />
  }

  const title = `${entityTitlePrepend}${entityHeader?.name ?? ''}`

  return (
    <CollapsibleSection
      id={id}
      title={title}
      helpText={helpText}
      hideTitle={hideTitle}
    >
      {children}
    </CollapsibleSection>
  )
}

export default CollapsibleSectionDerivedFromEntityId
