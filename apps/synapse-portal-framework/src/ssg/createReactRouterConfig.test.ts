import type { Config } from '@react-router/dev/config'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { fetchResourceIds } from '../sitemap/queryTableForSitemap'
import type { DetailPageConfig } from '../sitemap/types'
import {
  type DetailPageMetadataConfig,
  preloadDetailPageMetadata,
} from '../utils/fetchDetailPageMetadata'
import { createReactRouterConfig } from './createReactRouterConfig'

vi.mock('../sitemap/queryTableForSitemap', () => ({
  fetchResourceIds: vi.fn(),
}))
vi.mock('../utils/fetchDetailPageMetadata', () => ({
  preloadDetailPageMetadata: vi.fn(),
}))

const mockFetchResourceIds = vi.mocked(fetchResourceIds)
const mockPreloadDetailPageMetadata = vi.mocked(preloadDetailPageMetadata)

const studiesPage: DetailPageConfig = {
  path: 'Explore/Studies',
  sql: 'SELECT * FROM syn1',
  primaryKeyColumn: 'studyId',
  urlParamStyle: 'path-segment',
}
const toolsPage: DetailPageConfig = {
  path: 'Explore/Tools',
  sql: 'SELECT * FROM syn2',
  primaryKeyColumn: 'resourceId',
  urlParamStyle: 'path-segment',
}
const studiesMetadata: DetailPageMetadataConfig = {
  sql: 'SELECT * FROM syn1',
  titleColumn: 'studyName',
  paramName: 'studyId',
}

function getPrerenderPaths(config: Config) {
  const { prerender } = config
  if (
    typeof prerender === 'object' &&
    !Array.isArray(prerender) &&
    typeof prerender.paths === 'function'
  ) {
    return prerender.paths
  }
  throw new Error('Expected a prerender paths function')
}

describe('createReactRouterConfig', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.stubEnv('NODE_ENV', 'production')
    mockFetchResourceIds.mockImplementation(detailPage =>
      Promise.resolve({
        config: detailPage,
        ids: ['id1', 'id2'],
        success: true,
      }),
    )
  })

  afterEach(() => {
    vi.unstubAllEnvs()
  })

  it('queries Synapse once when React Router resolves prerender paths more than once', async () => {
    const additionalPreload = vi.fn().mockResolvedValue(undefined)
    const paths = getPrerenderPaths(
      createReactRouterConfig({
        sitemapConfig: { detailPages: [studiesPage, toolsPage] },
        metadataConfigs: [studiesMetadata],
        additionalPreloads: [additionalPreload],
      }),
    )
    const getStaticPaths = () => ['/', '/Explore']

    const first = await paths({ getStaticPaths })
    const second = await paths({ getStaticPaths })

    expect(first).toEqual([
      '/',
      '/Explore',
      '/Explore/Studies/id1',
      '/Explore/Studies/id2',
      '/Explore/Tools/id1',
      '/Explore/Tools/id2',
    ])
    expect(second).toEqual(first)
    expect(mockFetchResourceIds).toHaveBeenCalledTimes(2)
    expect(mockPreloadDetailPageMetadata).toHaveBeenCalledOnce()
    expect(additionalPreload).toHaveBeenCalledOnce()
  })

  it('excludes legacy DetailsPage paths on every call', async () => {
    const paths = getPrerenderPaths(
      createReactRouterConfig({
        sitemapConfig: { detailPages: [] },
        metadataConfigs: [],
      }),
    )
    const getStaticPaths = () => [
      '/',
      '/Explore/Studies/DetailsPage',
      '/Explore/Studies/DetailsPage/Details',
    ]

    await expect(paths({ getStaticPaths })).resolves.toEqual(['/'])
    await expect(paths({ getStaticPaths })).resolves.toEqual(['/'])
  })
})
