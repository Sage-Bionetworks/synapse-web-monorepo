import { act, renderHook } from '@testing-library/react'
import type { MockInstance } from 'vitest'
import { usePrintWithTitle } from './usePrintWithTitle'

describe('usePrintWithTitle', () => {
  const pageTitle = 'Synapse'
  let titleWhilePrinting: string | undefined
  let printSpy: MockInstance<Window['print']>

  beforeEach(() => {
    document.title = pageTitle
    titleWhilePrinting = undefined
    printSpy = vi.spyOn(window, 'print').mockImplementation(() => {
      titleWhilePrinting = document.title
    })
  })
  afterEach(() => {
    printSpy.mockRestore()
  })

  it('prints under the given title and restores the page title afterwards', () => {
    const { result } = renderHook(() => usePrintWithTitle())

    act(() => result.current('Report 1'))
    expect(printSpy).toHaveBeenCalledOnce()
    expect(titleWhilePrinting).toBe('Report 1')

    window.dispatchEvent(new Event('afterprint'))
    expect(document.title).toBe(pageTitle)
  })

  it('restores the page title when printed again before afterprint fires', () => {
    const { result } = renderHook(() => usePrintWithTitle())

    act(() => result.current('Report 1'))
    act(() => result.current('Report 1'))
    window.dispatchEvent(new Event('afterprint'))
    window.dispatchEvent(new Event('afterprint'))

    expect(document.title).toBe(pageTitle)
  })

  it('restores the page title on unmount if afterprint never fires', () => {
    const { result, unmount } = renderHook(() => usePrintWithTitle())

    act(() => result.current('Report 1'))
    unmount()

    expect(document.title).toBe(pageTitle)
  })

  it('leaves a title set after printing alone', () => {
    const { result } = renderHook(() => usePrintWithTitle())

    act(() => result.current('Report 1'))
    window.dispatchEvent(new Event('afterprint'))
    document.title = 'Another page'
    window.dispatchEvent(new Event('afterprint'))

    expect(document.title).toBe('Another page')
  })
})
