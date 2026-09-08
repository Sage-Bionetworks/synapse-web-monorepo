/**
 * The server sends error notifications as plain objects `{message, code, errno}`.
 * Convert those to proper Error instances so error boundaries can render the message.
 * Non-conforming values are returned unchanged.
 */
export function normalizeWebsocketError(error: unknown): unknown {
  if (
    error != null &&
    typeof error === 'object' &&
    'message' in error &&
    typeof (error as { message: unknown }).message === 'string'
  ) {
    return new Error((error as { message: string }).message)
  }
  return error
}
