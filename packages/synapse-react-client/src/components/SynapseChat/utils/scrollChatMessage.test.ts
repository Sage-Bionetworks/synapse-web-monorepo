import {
  scrollMessageIntoListView,
  scrollMessageIntoPageView,
} from './scrollChatMessage'

function setRect(element: HTMLElement, top: number, height: number) {
  element.getBoundingClientRect = () => new DOMRect(0, top, 300, height)
}

/** A message list spanning 100-600px on screen, scrolled `scrollTop` px, holding one message */
function renderMessageList({ scrollTop }: { scrollTop: number }) {
  const list = document.createElement('div')
  const message = document.createElement('div')
  list.append(message)
  setRect(list, 100, 500)
  list.scrollTop = scrollTop
  const scrollList = vi.fn()
  list.scrollTo = scrollList
  const scrollPage = vi.fn()
  message.scrollIntoView = scrollPage
  return { list, message, scrollList, scrollPage }
}

describe('scrollMessageIntoListView', () => {
  it('aligns the top of the message with the top of the list, leaving the page alone', () => {
    const { list, message, scrollList, scrollPage } = renderMessageList({
      scrollTop: 300,
    })
    // The message starts 150px below the top of the list
    setRect(message, 250, 40)

    scrollMessageIntoListView(message, list, 'start')

    expect(scrollList).toHaveBeenCalledWith({ top: 450, behavior: 'smooth' })
    expect(scrollPage).not.toHaveBeenCalled()
  })

  it('aligns the bottom of the message with the bottom of the list, leaving the page alone', () => {
    const { list, message, scrollList, scrollPage } = renderMessageList({
      scrollTop: 300,
    })
    // The message ends 250px below the bottom of the list
    setRect(message, 700, 150)

    scrollMessageIntoListView(message, list, 'end')

    expect(scrollList).toHaveBeenCalledWith({ top: 550, behavior: 'smooth' })
    expect(scrollPage).not.toHaveBeenCalled()
  })
})

describe('scrollMessageIntoPageView', () => {
  it.each(['start', 'end'] as const)(
    'scrolls the message into view with the browser, aligned to its %s',
    block => {
      const { message, scrollList, scrollPage } = renderMessageList({
        scrollTop: 0,
      })

      scrollMessageIntoPageView(message, block)

      expect(scrollPage).toHaveBeenCalledWith({ behavior: 'smooth', block })
      expect(scrollList).not.toHaveBeenCalled()
    },
  )
})
