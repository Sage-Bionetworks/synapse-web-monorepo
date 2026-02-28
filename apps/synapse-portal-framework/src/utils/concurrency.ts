/**
 * Maps over an array with a concurrency limit using a worker-pool pattern.
 *
 * @param items - The items to process
 * @param concurrency - Maximum number of concurrent operations
 * @param fn - Async function to apply to each item
 * @returns Results in the same order as the input items
 */
export async function mapWithConcurrency<T, R>(
  items: T[],
  concurrency: number,
  fn: (item: T) => Promise<R>,
): Promise<R[]> {
  const results: R[] = new Array<R>(items.length)
  let nextIndex = 0

  async function worker() {
    while (nextIndex < items.length) {
      const index = nextIndex++
      results[index] = await fn(items[index])
    }
  }

  const workers = Array.from(
    { length: Math.min(concurrency, items.length) },
    () => worker(),
  )
  await Promise.all(workers)
  return results
}
