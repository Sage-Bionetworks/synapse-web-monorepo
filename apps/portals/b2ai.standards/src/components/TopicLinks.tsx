import { Fragment } from 'react'
import { Link as RouterLink } from 'react-router'
import isArray from 'lodash-es/isArray'
import { MapValueToReactComponentConfig } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
import { topicHref } from '@/components/HierarchyWidget/TopicHierarchyShared'
import { useTopicNamesById } from '@/hooks/useTopicNamesById'

// Renders a STRING_LIST cell of B2AI_TOPIC:N ids as a comma-separated list of
// links to the corresponding topic details pages. Names come from the
// DataTopic table; while names are still loading, ids are shown as fallback.
const TopicLinks: MapValueToReactComponentConfig['Component'] = ({ value }) => {
  const { data: namesById } = useTopicNamesById()

  if (value == null) return null
  const ids: string[] = isArray(value) ? value : [value]
  if (ids.length === 0) return null

  return (
    <>
      {ids.map((id, i) => (
        <Fragment key={id}>
          {i > 0 && ', '}
          <RouterLink to={topicHref(id)}>{namesById?.get(id) ?? id}</RouterLink>
        </Fragment>
      ))}
    </>
  )
}

export default TopicLinks
