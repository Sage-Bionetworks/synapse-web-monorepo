// Shift changes `key` to upper case on some platforms, so letters are compared case-insensitively
const isKey = (event: KeyboardEvent, letter: string) =>
  event.key?.toLowerCase() === letter

/** Ctrl+Z, or Cmd+Z on macOS */
export const isUndoShortcut = (event: KeyboardEvent) =>
  (event.ctrlKey || event.metaKey) &&
  !event.shiftKey &&
  !event.altKey &&
  isKey(event, 'z')

/** Ctrl+Y, or Ctrl/Cmd+Shift+Z */
export const isRedoShortcut = (event: KeyboardEvent) =>
  !event.altKey &&
  ((event.ctrlKey && !event.shiftKey && isKey(event, 'y')) ||
    ((event.ctrlKey || event.metaKey) && event.shiftKey && isKey(event, 'z')))
