import { GridModel } from '@/components/DataGrid/DataGridTypes'
import { DataGridWebSocket } from '@/components/DataGrid/DataGridWebSocket'
import { mocked } from '@storybook/test'
import { act, renderHook, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { useDataGridWebSocket } from './useDataGridWebsocket'
import { Model } from 'json-joy/lib/json-crdt'

// Mock useCRDTModelView to just return the model passed in
vi.mock('./useCRDTModelView', () => ({
  useCRDTModelView: vi.fn(model =>
    model ? { snapshot: 'mockSnapshot', model } : undefined,
  ),
}))

// Mock DataGridWebSocket class
vi.mock('./DataGridWebSocket', () => ({
  DataGridWebSocket: vi.fn().mockImplementation(() => ({
    disconnect: vi.fn(),
  })),
}))

const MockDataGridWebSocket = mocked(DataGridWebSocket)

describe('useDataGridWebSocket', () => {
  it('should initialize with correct default state', () => {
    const { result } = renderHook(() => useDataGridWebSocket())
    expect(result.current.model).toBeNull()
    expect(result.current.isConnected).toBe(false)
    expect(result.current.websocketInstance).toBeNull()
    expect(result.current.isGridReady).toBe(false)
    expect(result.current.modelSnapshot).toBeUndefined()
  })

  it('should create websocket and update state via callbacks', () => {
    const { result } = renderHook(() => useDataGridWebSocket())
    act(() => {
      result.current.createWebsocket(123, 'ws://test')
    })

    expect(MockDataGridWebSocket).toHaveBeenCalledWith({
      replicaId: 123,
      url: 'ws://test',
      onGridReady: expect.any(Function),
      onStatusChange: expect.any(Function),
      onModelCreate: expect.any(Function),
    })

    // Simulate onGridReady
    act(() => {
      MockDataGridWebSocket.mock.lastCall![0].onGridReady!()
    })
    expect(result.current.isGridReady).toBe(true)

    // Simulate onStatusChange
    act(() => {
      MockDataGridWebSocket.mock.lastCall![0].onStatusChange!(
        true,
        result.current.websocketInstance!,
      )
    })
    expect(result.current.isConnected).toBe(true)

    // Simulate onModelCreate
    const fakeModel = { foo: 'bar' }
    act(() => {
      MockDataGridWebSocket.mock.lastCall![0].onModelCreate!(
        fakeModel as unknown as GridModel,
      )
    })
    expect(result.current.model).toEqual(fakeModel)
    // modelSnapshot should reflect mocked useCRDTModelView
    expect(result.current.modelSnapshot).toEqual({
      snapshot: 'mockSnapshot',
      model: fakeModel,
    })
  })

  it('should replace an existing websocket if createWebsocket is called again', () => {
    const { result } = renderHook(() => useDataGridWebSocket())
    act(() => {
      result.current.createWebsocket(1, 'ws://a')
    })
    const firstInstance = result.current.websocketInstance!
    act(() => {
      result.current.createWebsocket(2, 'ws://b')
    })
    expect(firstInstance.disconnect).toHaveBeenCalled()
    expect(result.current.websocketInstance).not.toBe(firstInstance)
    expect(result.current.websocketInstance?.disconnect).not.toHaveBeenCalled()
  })

  it('should call disconnect and reset model on unmount', async () => {
    const { result, unmount } = renderHook(() => useDataGridWebSocket())
    act(() => {
      result.current.createWebsocket(1, 'ws://a')
      MockDataGridWebSocket.mock.lastCall![0].onModelCreate!(
        Model.create({
          foo: 'bar',
        }) as unknown as GridModel,
      )
    })

    // call under test
    act(() => {
      unmount()
    })

    await waitFor(() => {
      expect(result.current.websocketInstance!.disconnect).toHaveBeenCalled()
      expect(result.current.model).toBeNull()
    })
  })
})
