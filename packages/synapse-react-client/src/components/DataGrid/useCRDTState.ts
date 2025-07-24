import { useRef, useState } from 'react'
import { GridModel, GridModelSnapshot } from './DataGridTypes'

export function useCRDTState() {
  // CRDT state
  const modelRef = useRef<GridModel | null>(null)

  const [modelSnapshot, setModelSnapshot] = useState<GridModelSnapshot | null>(
    null,
  )

  const getModel = () => modelRef.current
  const setModel = (newModel: GridModel) => {
    modelRef.current = newModel
    setModelSnapshot(modelRef.current.api.getSnapshot())
  }

  return { modelRef, modelSnapshot, getModel, setModel }
}
