import { QueryInput } from './DataGridTypes'
// Query Input can either be an empty string, a SQL query, or a session ID
export const parseQueryInput = (input: string): QueryInput => {
  const trimmedInput = input.trim()
  if (!trimmedInput) {
    return { type: 'empty', input: '' }
  } else if (trimmedInput.toUpperCase().startsWith('SELECT')) {
    return { type: 'sql', input: trimmedInput }
  } else if (/^[A-Za-z]\w*=+$/.test(trimmedInput)) {
    return { type: 'sessionId', input: trimmedInput }
  }
  return { type: 'unknown', input: trimmedInput }
}
