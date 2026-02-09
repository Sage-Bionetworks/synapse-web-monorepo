import { act, renderHook, waitFor } from '@testing-library/react'
import { Model } from 'json-joy/lib/json-crdt'
import { s } from 'json-joy/lib/json-crdt-patch'
import { useCRDTModelView } from './useCRDTModelView'

const schema = s.obj({ foo: s.con('bar') })
function createModel() {
  return Model.create(schema)
}

describe('useCRDTModelView', () => {
  it('Updates with a model object', async () => {
    const model = createModel()
    const { result } = renderHook(() => useCRDTModelView(model))
    expect(result.current).toEqual({ foo: 'bar' })

    act(() => {
      model.api.obj().set({ foo: 'baz' })
    })

    await waitFor(() => expect(result.current).toEqual({ foo: 'baz' }))
  })

  it('Works with a null model', () => {
    const { result } = renderHook(() => useCRDTModelView(null))
    expect(result.current).toBeNull()
  })

  it('Handles replacing a model with a new model', () => {
    const model1 = createModel()
    const model2 = createModel()
    model2.api.obj('').set({ foo: 'baz' })
    const { result, rerender } = renderHook(
      ({ model }) => useCRDTModelView(model),
      { initialProps: { model: model1 } },
    )
    expect(result.current).toEqual({ foo: 'bar' })
    rerender({ model: model2 })
    expect(result.current).toEqual({ foo: 'baz' })
  })

  it('Handles replacing a model with null', () => {
    const definedModel = createModel()
    const { result, rerender } = renderHook(
      ({ model }) => useCRDTModelView(model),
      { initialProps: { model: definedModel } },
    )
    expect(result.current).toEqual({ foo: 'bar' })
    // @ts-expect-error - TS restricts us to the initial type, but null is valid here.
    rerender({ model: null })
    expect(result.current).toBeNull()
  })
})
