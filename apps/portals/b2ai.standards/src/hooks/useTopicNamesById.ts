import { useMemo } from 'react'
import useGetQueryResultBundle from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'
import { DATA_TOPIC_COLUMN_CONSTS as D } from '@/config/resources'
import {
  getQueryBundleRequestWithIdFilter,
  getRowsAsObjects,
} from '@/hooks/fetchDataUtils'

// Fetches the DataTopic table (~52 rows) and returns a Map of id → name.
// react-query dedups the underlying request across all callers, so this hook
// can be used freely in many cells without refetching.
export function useTopicNamesById() {
  const request = useMemo(
    () => getQueryBundleRequestWithIdFilter('DataTopic', [D.ID, D.NAME]),
    [],
  )
  return useGetQueryResultBundle(request, {
    select: result => {
      const rows = getRowsAsObjects(result)
      const map = new Map<string, string>()
      for (const row of rows) {
        const id = row[D.ID]
        const name = row[D.NAME]
        if (id) map.set(id, name ?? id)
      }
      return map
    },
  })
}
