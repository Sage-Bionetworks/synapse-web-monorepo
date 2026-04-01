import {
  QueryResultBundle,
  waitForAsyncResult,
} from '@sage-bionetworks/synapse-client'
import pLimit from 'p-limit'
import { PrerenderCache } from './cache'
import { createAnonymousSynapseClient } from './synapseClient'

const BUNDLE_MASK_QUERY_RESULTS = 0x1

/**
 * Synapse ID of the table containing Croissant metadata file URLs for all
 * datasets. Each row maps a dataset entity ID (and optional version) to the S3
 * URL of its Croissant (JSON-LD) metadata file.
 */
const CROISSANT_DATA_TABLE = 'syn65903895'

/** Maximum number of concurrent S3 file fetches during batch pre-loading. */
const FETCH_CONCURRENCY = 20

// ---------------------------------------------------------------------------
// URL index cache: dataset entity ID → S3 URL
// ---------------------------------------------------------------------------

/**
 * Cache for the URL index. The single key 'index' holds the entire Map.
 */
const urlIndexCache = new PrerenderCache<string, Map<string, string>>()

/**
 * Fetches the entire Croissant table and builds a Map of dataset → S3 URL.
 * The result is cached; concurrent calls are de-duplicated.
 */
async function loadCroissantUrlIndex(): Promise<Map<string, string>> {
  return urlIndexCache.get('index', async () => {
    const client = createAnonymousSynapseClient()

    const queryBundleRequest = {
      concreteType:
        'org.sagebionetworks.repo.model.table.QueryBundleRequest' as const,
      entityId: CROISSANT_DATA_TABLE,
      partMask: BUNDLE_MASK_QUERY_RESULTS,
      query: {
        sql: `SELECT dataset, croissant_file_s3_object FROM ${CROISSANT_DATA_TABLE}`,
      },
    }

    const asyncJobId =
      await client.tableServicesClient.postRepoV1EntityIdTableQueryAsyncStart({
        id: CROISSANT_DATA_TABLE,
        queryBundleRequest,
      })

    const result = await waitForAsyncResult(() =>
      client.asynchronousJobServicesClient.getRepoV1AsynchronousJobJobId({
        jobId: asyncJobId.token!,
      }),
    )

    const responseBody = result.responseBody as QueryResultBundle | undefined
    const headers = responseBody?.queryResult?.queryResults?.headers ?? []
    const rows = responseBody?.queryResult?.queryResults?.rows ?? []

    const datasetIdx = headers.findIndex(
      h => h.name?.toLowerCase() === 'dataset',
    )
    const urlIdx = headers.findIndex(
      h => h.name?.toLowerCase() === 'croissant_file_s3_object',
    )

    const index = new Map<string, string>()
    if (datasetIdx >= 0 && urlIdx >= 0) {
      for (const row of rows) {
        const datasetId = row.values?.[datasetIdx]
        const s3Url = row.values?.[urlIdx]
        if (
          typeof datasetId === 'string' &&
          datasetId &&
          typeof s3Url === 'string' &&
          s3Url
        ) {
          index.set(datasetId, s3Url)
        }
      }
    }

    return index
  })
}

// ---------------------------------------------------------------------------
// Content cache: dataset entity ID → parsed JSON-LD object
// ---------------------------------------------------------------------------

const contentCache = new PrerenderCache<string, Record<string, unknown>>()

/**
 * Fetches a single Croissant file from S3 and parses it as JSON.
 */
async function fetchSingleCroissantFile(
  s3Url: string,
): Promise<Record<string, unknown> | null> {
  try {
    const response = await fetch(s3Url)
    if (!response.ok) return null
    const content = await response.text()
    return JSON.parse(content) as Record<string, unknown>
  } catch {
    return null
  }
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/** Deduplicate concurrent preload calls. */
let preloadPromise: Promise<void> | null = null

/**
 * Batch-fetches ALL Croissant metadata files into the content cache.
 *
 * Designed to be called once from the first dataset detail page loader during
 * SSG pre-rendering. Subsequent {@link fetchCroissantMetadata} calls become
 * instant cache lookups.
 *
 * Safe to call multiple times — concurrent invocations are de-duplicated and
 * a no-op is returned if the cache is already populated.
 */
export async function preloadAllCroissantMetadata(): Promise<void> {
  // If the index is still fresh and we have content cached, skip.
  if (urlIndexCache.has('index') && contentCache.size > 0) {
    return
  }

  if (preloadPromise) return preloadPromise

  preloadPromise = (async () => {
    try {
      const index = await loadCroissantUrlIndex()
      const entries = Array.from(index.entries())

      console.log(
        `Pre-fetching ${entries.length} Croissant metadata files (concurrency: ${FETCH_CONCURRENCY})...`,
      )

      const limit = pLimit(FETCH_CONCURRENCY)

      const limitedFetch = ([datasetId, s3Url]: [string, string]) =>
        limit(() =>
          fetchSingleCroissantFile(s3Url).then(jsonLd => ({
            datasetId,
            jsonLd,
          })),
        )

      const results = await Promise.all(entries.map(limitedFetch))

      let successCount = 0
      for (const { datasetId, jsonLd } of results) {
        if (jsonLd) {
          contentCache.set(datasetId, jsonLd)
          successCount++
        }
      }

      console.log(
        `Croissant pre-fetch complete: ${successCount}/${entries.length} files loaded`,
      )
    } finally {
      preloadPromise = null
    }
  })()

  return preloadPromise
}

/**
 * Fetches the Croissant (Schema.org Dataset) JSON-LD metadata for a given
 * Synapse dataset entity.
 *
 * This function is isomorphic — it works in both Node.js (build-time
 * pre-rendering) and browser environments.
 *
 * **SSG server-side:** If {@link preloadAllCroissantMetadata} was called
 * first (recommended), this is an instant cache lookup. Otherwise it falls
 * back to fetching the URL index + individual S3 file.
 *
 * **Client-side (CSR fallback):** Fetches the URL index once (cached) then
 * the individual S3 file.
 *
 * @param entityId - The Synapse entity ID of the dataset (e.g. 'syn12345678')
 * @returns The parsed JSON-LD object, or null if not available
 */
export async function fetchCroissantMetadata(
  entityId: string,
): Promise<Record<string, unknown> | null> {
  // Fast path: content cache hit
  if (contentCache.has(entityId)) {
    return contentCache.get(entityId, async () => {
      // Fetcher is only called on cache miss — re-fetch from S3.
      const index = await loadCroissantUrlIndex()
      const s3Url = index.get(entityId)
      if (!s3Url) return {} as Record<string, unknown>
      return (
        (await fetchSingleCroissantFile(s3Url)) ??
        ({} as Record<string, unknown>)
      )
    })
  }

  // Slow path: look up S3 URL from the index, then fetch the file
  try {
    const index = await loadCroissantUrlIndex()
    const s3Url = index.get(entityId)
    if (!s3Url) return null

    const jsonLd = await fetchSingleCroissantFile(s3Url)
    if (jsonLd) {
      contentCache.set(entityId, jsonLd)
    }
    return jsonLd
  } catch (error) {
    console.warn(
      `fetchCroissantMetadata: Error fetching Croissant metadata for ${entityId}:`,
      error instanceof Error ? error.message : error,
    )
    return null
  }
}
