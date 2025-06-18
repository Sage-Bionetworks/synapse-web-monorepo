import { useEntitySelection } from '@/components/EntityFinder/useEntitySelection'
import { Reference } from '@sage-bionetworks/synapse-types'
import { act, renderHook as _renderHook } from '@testing-library/react'
import { Map } from 'immutable'

describe('useEntitySelection', () => {
  function renderHook(
    selectMultiple: boolean,
    initialSelection: Map<string, Reference>,
  ) {
    return _renderHook(() =>
      useEntitySelection(selectMultiple, initialSelection),
    )
  }

  it('Handles `selectMultiple` being false and toggling selection', () => {
    const { result } = renderHook(false, Map<string, Reference>())

    // Initially not selected
    expect(result.current.selectedEntities.size).toBe(0)

    const ref: Reference = {
      targetId: 'syn123',
      targetVersionNumber: 1,
    }

    // Toggle selection
    act(() => {
      result.current.toggleSelection(ref)
    })

    // Now select new item
    expect(result.current.selectedEntities.size).toBe(1)
    expect(result.current.selectedEntities.get(ref.targetId)).toEqual(ref)

    const newRef: Reference = {
      targetId: 'syn124',
      targetVersionNumber: 1,
    }

    act(() => {
      result.current.toggleSelection(newRef)
    })

    // Toggling again should select the new item and remove the previous one
    expect(result.current.selectedEntities.size).toBe(1)
    expect(result.current.selectedEntities.get(newRef.targetId)).toEqual(newRef)

    // Toggling the same item again should remove it
    act(() => {
      result.current.toggleSelection(newRef)
    })
    expect(result.current.selectedEntities.size).toBe(0)
  })

  it('Handles `selectMultiple` being true and toggling selection', () => {
    const { result } = renderHook(true, Map<string, Reference>())

    // Initially not selected
    expect(result.current.selectedEntities.size).toBe(0)

    const ref: Reference = {
      targetId: 'syn123',
      targetVersionNumber: 1,
    }

    // Toggle selection
    act(() => {
      result.current.toggleSelection(ref)
    })

    // Now select new item
    expect(result.current.selectedEntities.size).toBe(1)
    expect(result.current.selectedEntities.get(ref.targetId)).toEqual(ref)

    const newRef: Reference = {
      targetId: 'syn124',
      targetVersionNumber: 1,
    }

    act(() => {
      result.current.toggleSelection(newRef)
    })

    // Toggling again should add the new item
    expect(result.current.selectedEntities.size).toBe(2)
    expect(result.current.selectedEntities.get(ref.targetId)).toEqual(ref)
    expect(result.current.selectedEntities.get(newRef.targetId)).toEqual(newRef)

    // Toggling the same item again should remove it
    act(() => {
      result.current.toggleSelection(newRef)
    })
    expect(result.current.selectedEntities.size).toBe(1)
    expect(result.current.selectedEntities.get(newRef.targetId)).toEqual(
      undefined,
    )

    // Adding an item with a new version should replace the previous version
    const refWithNewVersion: Reference = {
      ...ref,
      targetVersionNumber: 2,
    }
    act(() => {
      result.current.toggleSelection(refWithNewVersion)
    })
    expect(result.current.selectedEntities.size).toBe(1)
    expect(result.current.selectedEntities.get(ref.targetId)).toEqual(
      refWithNewVersion,
    )
  })

  it('Supports setting the selection directly', () => {
    const { result } = renderHook(true, Map<string, Reference>())
    expect(result.current.selectedEntities.size).toBe(0)

    const ref1: Reference = {
      targetId: 'syn123',
      targetVersionNumber: 1,
    }

    const ref2: Reference = {
      targetId: 'syn456',
      targetVersionNumber: 1,
    }

    const newMap = Map<string, Reference>()
      .set(ref1.targetId, ref1)
      .set(ref2.targetId, ref2)

    // Toggle selection
    act(() => {
      result.current.setSelection(newMap)
    })

    expect(result.current.selectedEntities.size).toBe(2)
    expect(result.current.selectedEntities.get(ref1.targetId)).toEqual(ref1)
    expect(result.current.selectedEntities.get(ref2.targetId)).toEqual(ref2)
  })
})
