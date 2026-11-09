import { scrollChatElementIntoView } from './scrollChatElementIntoView'

function setHeight(element: HTMLElement, height: number) {
  Object.defineProperty(element, 'clientHeight', { value: height })
  Object.defineProperty(element, 'offsetHeight', { value: height })
}

function setRect(element: HTMLElement, top: number, height: number) {
  element.getBoundingClientRect = () => new DOMRect(0, top, 300, height)
}

function renderChat({
  listHeight,
  contentHeight,
}: {
  listHeight: number
  contentHeight: number
}) {
  const list = document.createElement('div')
  const content = document.createElement('ul')
  const message = document.createElement('li')
  list.append(content)
  content.append(message)

  setHeight(list, listHeight)
  setHeight(content, contentHeight)
  setRect(list, 100, listHeight)
  list.scrollTop = 0
  const scrollList = vi.fn()
  list.scrollTo = scrollList
  const scrollPage = vi.fn()
  message.scrollIntoView = scrollPage

  return { list, content, message, scrollList, scrollPage }
}

describe('scrollChatElementIntoView', () => {
  it('scrolls only the message list when the chat is shorter than its list', () => {
    const { list, content, message, scrollList, scrollPage } = renderChat({
      listHeight: 500,
      contentHeight: 200,
    })
    setRect(message, 250, 40)

    scrollChatElementIntoView(message, list, content, 'start')

    expect(scrollList).toHaveBeenCalledWith({
      top: 150,
      behavior: 'smooth',
    })
    expect(scrollPage).not.toHaveBeenCalled()
  })

  it('aligns the bottom of the message with the bottom of an overflowing list', () => {
    const { list, content, message, scrollList, scrollPage } = renderChat({
      listHeight: 500,
      contentHeight: 1200,
    })
    list.scrollTop = 300
    // The list spans 100-600 on screen; the message ends 250px below it
    setRect(message, 700, 150)

    scrollChatElementIntoView(message, list, content, 'end')

    expect(scrollList).toHaveBeenCalledWith({
      top: 550,
      behavior: 'smooth',
    })
    expect(scrollPage).not.toHaveBeenCalled()
  })

  it('scrolls the page when the list grows with the conversation', () => {
    const { list, content, message, scrollList, scrollPage } = renderChat({
      listHeight: 1200,
      contentHeight: 1200,
    })

    scrollChatElementIntoView(message, list, content, 'end')

    expect(scrollPage).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'end',
    })
    expect(scrollList).not.toHaveBeenCalled()
  })
})
