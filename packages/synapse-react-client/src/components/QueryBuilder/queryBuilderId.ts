let idCounter = 0

export function newQBNodeId(): string {
  if (
    typeof crypto !== 'undefined' &&
    typeof crypto.randomUUID === 'function'
  ) {
    return crypto.randomUUID()
  }
  // Monotonic counter is sufficient — QB ids are client-only React keys, not secrets.
  idCounter += 1
  return `qb-${idCounter}`
}
