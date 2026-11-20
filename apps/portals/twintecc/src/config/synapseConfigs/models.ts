import type { SearchQueryWrapperPlotNavProps } from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'
import { modelsSearchIndexId, rgbIndex } from '../resources'

export const modelsSearch: SearchQueryWrapperPlotNavProps = {
  rgbIndex,
  name: 'Models',
  searchIndexId: modelsSearchIndexId,
  autocompleteFieldName: 'name',
  tableConfiguration: {},
  hiddenColumns: ['etag'],
}
