import { act, renderHook } from '@testing-library/react'
import { PropsWithChildren } from 'react'
import { MemoryRouter, useLocation } from 'react-router'
import {
  parseTaskIdsSearchParam,
  useCurationTaskListFilters,
} from './useCurationTaskListFilters'

function renderWithRouter(
  init?: Parameters<typeof useCurationTaskListFilters>[0],
  initialEntry = '/',
) {
  return renderHook(
    () => ({
      ...useCurationTaskListFilters(init),
      search: useLocation().search,
    }),
    {
      wrapper: ({ children }: PropsWithChildren) => (
        <MemoryRouter initialEntries={[initialEntry]}>{children}</MemoryRouter>
      ),
    },
  )
}

describe('parseTaskIdsSearchParam', () => {
  it('returns undefined when the value is null', () => {
    expect(parseTaskIdsSearchParam(null)).toBeUndefined()
  })

  it('returns undefined when the value is an empty string', () => {
    expect(parseTaskIdsSearchParam('')).toBeUndefined()
  })

  it('parses a single numeric ID', () => {
    expect(parseTaskIdsSearchParam('123')).toEqual([123])
  })

  it('parses comma-separated numeric IDs', () => {
    expect(parseTaskIdsSearchParam('123,456')).toEqual([123, 456])
  })

  it('filters out non-numeric entries', () => {
    expect(parseTaskIdsSearchParam('123,abc,456')).toEqual([123, 456])
  })
})

describe('useCurationTaskListFilters', () => {
  it('defaults assignedToMe to false and taskIds to undefined', () => {
    const { result } = renderWithRouter({ projectId: 'syn123' })

    expect(result.current.request).toEqual({
      projectId: 'syn123',
      assignedToMe: false,
      taskIds: undefined,
    })
    expect(result.current.taskIds).toBeUndefined()
    expect(result.current.assignedToMe).toBe(false)
  })

  it('seeds assignedToMe from defaultAssignedToMe', () => {
    const { result } = renderWithRouter({ defaultAssignedToMe: true })

    expect(result.current.assignedToMe).toBe(true)
    expect(result.current.request).toEqual({
      projectId: undefined,
      assignedToMe: true,
      taskIds: undefined,
    })
  })

  it('reads assignedToMe from the URL, overriding the default', () => {
    const { result } = renderWithRouter(
      { defaultAssignedToMe: true },
      '/?assignedToMe=false',
    )

    expect(result.current.assignedToMe).toBe(false)
    expect(result.current.request.assignedToMe).toBe(false)
  })

  it('sets the assignedToMe URL param via setAssignedToMe when it differs from the default', () => {
    const { result } = renderWithRouter({ defaultAssignedToMe: false })

    act(() => {
      result.current.setAssignedToMe(true)
    })

    expect(result.current.assignedToMe).toBe(true)
    expect(result.current.request.assignedToMe).toBe(true)
    expect(result.current.search).toBe('?assignedToMe=true')
  })

  it('removes the assignedToMe URL param via setAssignedToMe when it matches the default', () => {
    const { result } = renderWithRouter(
      { defaultAssignedToMe: false },
      '/?assignedToMe=true',
    )
    expect(result.current.assignedToMe).toBe(true)

    act(() => {
      result.current.setAssignedToMe(false)
    })

    expect(result.current.assignedToMe).toBe(false)
    expect(result.current.request.assignedToMe).toBe(false)
    expect(result.current.search).toBe('')
  })

  it('parses taskIds from the URL search params into the request', () => {
    const { result } = renderWithRouter({}, '/?taskIds=123,456')

    expect(result.current.taskIds).toEqual([123, 456])
    expect(result.current.request.taskIds).toEqual([123, 456])
  })

  it('clears the taskIds filter via clearTaskIdsFilter', () => {
    const { result } = renderWithRouter({}, '/?taskIds=123,456')

    expect(result.current.taskIds).toEqual([123, 456])

    act(() => {
      result.current.clearTaskIdsFilter()
    })

    expect(result.current.taskIds).toBeUndefined()
    expect(result.current.request.taskIds).toBeUndefined()
  })
})
