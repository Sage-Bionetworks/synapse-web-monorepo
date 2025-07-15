import { Model, VecApi } from 'json-joy/lib/json-crdt'
import { useRef, useState } from 'react'
import { ModelSnapshot } from './DataGridTypes'

export function useCRDTState() {
  // CRDT state
  const modelRef = useRef<Model | null>(null)
  //   const modelSnapshotRef = useRef<ModelSnapshot>({
  //     columnNames: [],
  //     columnOrder: [],
  //     rows: [],
  //   })

  const [modelSnapshot, setModelSnapshot] = useState<ModelSnapshot>({
    columnNames: [],
    columnOrder: [],
    rows: [],
  })

  const getModel = () => modelRef.current
  const setModel = (newModel: Model) => {
    //if (newModel.view() !== modelRef.current?.view()) {
    modelRef.current = newModel
    setModelSnapshot(modelRef.current.api.getSnapshot())
    //   modelSnapshotRef.current = modelRef.current.api.getSnapshot()
    //}
  }

  return { modelRef, modelSnapshot, getModel, setModel }
}
