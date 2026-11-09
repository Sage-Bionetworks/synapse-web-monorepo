export type ChatScrollBlock = 'start' | 'end'

/** Scrolls an element into view the way the browser does, which scrolls the page too. */
export function scrollElementIntoPageView(
  element: HTMLElement,
  block: ChatScrollBlock,
) {
  element.scrollIntoView({ behavior: 'smooth', block })
}

/**
 * Scrolls a chat message into view, aligning its top (`start`) or bottom (`end`) with the
 * message list.
 *
 * When the chat has a bounded height (docked in a sidebar or shown in a dialog), only the
 * message list scrolls, so the page around the chat never moves. When the chat grows with its
 * conversation (a full-page chat), the page is what scrolls, so the message is scrolled into
 * view in the page instead.
 *
 * @param messageList the chat's scrolling message list
 * @param messageListContent the element holding every message inside `messageList`
 */
export function scrollChatElementIntoView(
  element: HTMLElement,
  messageList: HTMLElement,
  messageListContent: HTMLElement,
  block: ChatScrollBlock,
) {
  // A list that grows with the conversation is exactly as tall as its content. A bounded list is
  // taller (a short conversation) or shorter (a long one, which it scrolls). 1px allows for rounding.
  const isHeightBounded =
    Math.abs(messageList.clientHeight - messageListContent.offsetHeight) > 1
  if (!isHeightBounded) {
    scrollElementIntoPageView(element, block)
    return
  }

  const listRect = messageList.getBoundingClientRect()
  const elementRect = element.getBoundingClientRect()
  const offset =
    block === 'start'
      ? elementRect.top - listRect.top
      : elementRect.bottom - listRect.bottom
  messageList.scrollTo({
    top: messageList.scrollTop + offset,
    behavior: 'smooth',
  })
}
