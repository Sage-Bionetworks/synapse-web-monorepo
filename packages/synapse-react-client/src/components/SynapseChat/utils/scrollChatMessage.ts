export type ChatScrollBlock = 'start' | 'end'

/**
 * Scrolls a chat message into view the way the browser does, aligning its top (`start`) or bottom
 * (`end`). Every scrolling ancestor scrolls, including the page.
 */
export function scrollMessageIntoPageView(
  message: HTMLElement,
  block: ChatScrollBlock,
) {
  message.scrollIntoView({ behavior: 'smooth', block })
}

/**
 * Scrolls a chat's message list so that one of its messages has its top (`start`) or bottom
 * (`end`) aligned with the list's. Only the list scrolls, so the page around the chat stays still.
 */
export function scrollMessageIntoListView(
  message: HTMLElement,
  messageList: HTMLElement,
  block: ChatScrollBlock,
) {
  const listRect = messageList.getBoundingClientRect()
  const messageRect = message.getBoundingClientRect()
  const offset =
    block === 'start'
      ? messageRect.top - listRect.top
      : messageRect.bottom - listRect.bottom
  messageList.scrollTo({
    top: messageList.scrollTop + offset,
    behavior: 'smooth',
  })
}
