import { JsonNode, Model } from 'json-joy/lib/json-crdt'
import { useCallback, useMemo, useSyncExternalStore } from 'react'
import noop from 'lodash-es/noop'

export function useCRDTModelView<T extends JsonNode = JsonNode>(
  model: Model<T> | null | undefined,
) {
  const subscribe = useMemo(() => {
    if (!model) return () => noop
    return model.api.subscribe
  }, [model])

  const getSnapshot = useCallback(() => {
    if (!model) return null
    return model.api.getSnapshot()
  }, [model])

  return useSyncExternalStore(subscribe, getSnapshot)
}
