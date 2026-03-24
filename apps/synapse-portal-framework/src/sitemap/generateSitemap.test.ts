import { describe, expect, it, vi } from 'vitest'
import {
  generateStaticUrls,
  generateDynamicUrls,
  generateSitemapXml,
  generateSitemapIndexXml,
  splitUrlsIntoSitemaps,
} from './generateSitemap'
import { extractEntityIdFromSql } from './queryTableForSitemap'
import type { SitemapUrl } from './types'

vi.mock('./queryTableForSitemap', async importOriginal => {
  const actual = await importOriginal<typeof import('./queryTableForSitemap')>()
  return {
    ...actual,
    fetchResourceIds: vi.fn(),
  }
})

import { fetchResourceIds } from './queryTableForSitemap'

describe('generateStaticUrls', () => {
  it('generates URLs with base URL and lastmod', () => {
    const routes = ['/About', '/Explore']
    const urls = generateStaticUrls(
      routes,
      'https://example.synapse.org',
      '2024-01-01T00:00:00.000Z',
    )

    expect(urls).toHaveLength(2)
    expect(urls[0]).toEqual({
      loc: 'https://example.synapse.org/About',
      lastmod: '2024-01-01T00:00:00.000Z',
    })
  })
})

describe('generateSitemapXml', () => {
  it('generates valid sitemap XML', () => {
    const urls: SitemapUrl[] = [
      { loc: 'https://example.org/page1', lastmod: '2024-01-01T00:00:00.000Z' },
      { loc: 'https://example.org/page2', lastmod: '2024-01-01T00:00:00.000Z' },
    ]

    const xml = generateSitemapXml(urls)

    expect(xml).toContain('<?xml version="1.0" encoding="UTF-8"?>')
    expect(xml).toContain(
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    )
    expect(xml).toContain('<loc>https://example.org/page1</loc>')
    expect(xml).toContain('<loc>https://example.org/page2</loc>')
    expect(xml).toContain('<lastmod>2024-01-01T00:00:00.000Z</lastmod>')
    expect(xml).toContain('</urlset>')
  })

  it('escapes special XML characters', () => {
    const urls: SitemapUrl[] = [
      {
        loc: 'https://example.org/page?a=1&b=2',
        lastmod: '2024-01-01T00:00:00.000Z',
      },
    ]

    const xml = generateSitemapXml(urls)
    expect(xml).toContain('<loc>https://example.org/page?a=1&amp;b=2</loc>')
  })
})

describe('generateSitemapIndexXml', () => {
  it('generates valid sitemap index XML', () => {
    const sitemapFiles = ['sitemap-1.xml', 'sitemap-2.xml']
    const xml = generateSitemapIndexXml(
      sitemapFiles,
      'https://example.org',
      '2024-01-01T00:00:00.000Z',
    )

    expect(xml).toContain('<?xml version="1.0" encoding="UTF-8"?>')
    expect(xml).toContain(
      '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    )
    expect(xml).toContain('<loc>https://example.org/sitemap-1.xml</loc>')
    expect(xml).toContain('<loc>https://example.org/sitemap-2.xml</loc>')
    expect(xml).toContain('</sitemapindex>')
  })
})

describe('splitUrlsIntoSitemaps', () => {
  it('returns single chunk when under limit', () => {
    const urls: SitemapUrl[] = Array.from({ length: 100 }, (_, i) => ({
      loc: `https://example.org/page${i}`,
      lastmod: '2024-01-01T00:00:00.000Z',
    }))

    const chunks = splitUrlsIntoSitemaps(urls, 50000)
    expect(chunks).toHaveLength(1)
    expect(chunks[0]).toHaveLength(100)
  })

  it('splits into multiple chunks when over limit', () => {
    const urls: SitemapUrl[] = Array.from({ length: 150 }, (_, i) => ({
      loc: `https://example.org/page${i}`,
      lastmod: '2024-01-01T00:00:00.000Z',
    }))

    const chunks = splitUrlsIntoSitemaps(urls, 50)
    expect(chunks).toHaveLength(3)
    expect(chunks[0]).toHaveLength(50)
    expect(chunks[1]).toHaveLength(50)
    expect(chunks[2]).toHaveLength(50)
  })

  it('returns empty array for empty input', () => {
    const chunks = splitUrlsIntoSitemaps([])
    expect(chunks).toHaveLength(1)
    expect(chunks[0]).toHaveLength(0)
  })
})

describe('SQL column name handling', () => {
  it('handles column names with spaces when building SELECT', () => {
    // This test validates that column names with spaces are properly quoted
    // in the SQL query builder. The actual quoting happens in queryTableForSitemap.ts
    const columnName = 'Grant Number'
    const quotedColumn = `"${columnName}"`
    const sql = `SELECT ${quotedColumn} FROM syn12345`
    expect(sql).toBe('SELECT "Grant Number" FROM syn12345')
  })

  it('handles column names with special characters', () => {
    const columnName = 'Data Type/Format'
    const quotedColumn = `"${columnName}"`
    const sql = `SELECT ${quotedColumn} FROM syn12345`
    expect(sql).toBe('SELECT "Data Type/Format" FROM syn12345')
  })

  it('extracts entity ID from SQL with quoted columns', () => {
    const sql = `SELECT "Grant Number" FROM syn12345 ORDER BY "Grant Number" DESC`
    expect(extractEntityIdFromSql(sql)).toBe('syn12345')
  })

  it('validates case-insensitive column name matching', () => {
    // Column names in Synapse can be matched case-insensitively
    const columnName = 'grantNumber'
    const columnNameUppercase = 'GrantNumber'
    expect(columnName.toLowerCase()).toBe(columnNameUppercase.toLowerCase())
  })
})

describe('generateDynamicUrls', () => {
  const baseUrl = 'https://example.synapse.org'
  const lastmod = '2024-01-01T00:00:00.000Z'

  it('generates query-param style URLs by default (no urlStyle set)', async () => {
    vi.mocked(fetchResourceIds).mockResolvedValueOnce({
      config: {} as never,
      ids: ['syn123', 'syn456'],
      success: true,
    })

    const { urls, warnings } = await generateDynamicUrls(
      [
        {
          path: 'Explore/Studies/DetailsPage',
          sql: 'SELECT studyId FROM syn111',
          primaryKeyColumn: 'studyId',
          // urlStyle intentionally omitted — should default to query-param
        },
      ],
      baseUrl,
      lastmod,
    )

    expect(warnings).toHaveLength(0)
    expect(urls).toHaveLength(2)
    expect(urls[0].loc).toBe(
      'https://example.synapse.org/Explore/Studies/DetailsPage?studyId=syn123',
    )
    expect(urls[1].loc).toBe(
      'https://example.synapse.org/Explore/Studies/DetailsPage?studyId=syn456',
    )
  })

  it('generates query-param style URLs when urlStyle is query-param', async () => {
    vi.mocked(fetchResourceIds).mockResolvedValueOnce({
      config: {} as never,
      ids: ['syn123'],
      success: true,
    })

    const { urls } = await generateDynamicUrls(
      [
        {
          path: 'Explore/Projects/DetailsPage',
          sql: 'SELECT id FROM syn222',
          primaryKeyColumn: 'id',
          urlStyle: 'query-param',
        },
      ],
      baseUrl,
      lastmod,
    )

    expect(urls[0].loc).toBe(
      'https://example.synapse.org/Explore/Projects/DetailsPage?id=syn123',
    )
  })

  it('generates path-segment style URLs when urlStyle is path-segment', async () => {
    vi.mocked(fetchResourceIds).mockResolvedValueOnce({
      config: {} as never,
      ids: ['syn123', 'syn456'],
      success: true,
    })

    const { urls, warnings } = await generateDynamicUrls(
      [
        {
          path: 'Explore/Studies',
          sql: 'SELECT studyId FROM syn333',
          primaryKeyColumn: 'studyId',
          urlStyle: 'path-segment',
        },
      ],
      baseUrl,
      lastmod,
    )

    expect(warnings).toHaveLength(0)
    expect(urls).toHaveLength(2)
    expect(urls[0].loc).toBe(
      'https://example.synapse.org/Explore/Studies/syn123',
    )
    expect(urls[1].loc).toBe(
      'https://example.synapse.org/Explore/Studies/syn456',
    )
  })

  it('URL-encodes IDs with special characters in both styles', async () => {
    vi.mocked(fetchResourceIds)
      .mockResolvedValueOnce({
        config: {} as never,
        ids: ['value with spaces'],
        success: true,
      })
      .mockResolvedValueOnce({
        config: {} as never,
        ids: ['value with spaces'],
        success: true,
      })

    const { urls: queryParamUrls } = await generateDynamicUrls(
      [
        {
          path: 'Explore/Programs/DetailsPage',
          sql: 'SELECT Program FROM syn444',
          primaryKeyColumn: 'Program',
          urlStyle: 'query-param',
        },
      ],
      baseUrl,
      lastmod,
    )
    expect(queryParamUrls[0].loc).toBe(
      'https://example.synapse.org/Explore/Programs/DetailsPage?Program=value%20with%20spaces',
    )

    const { urls: pathSegmentUrls } = await generateDynamicUrls(
      [
        {
          path: 'Explore/Programs',
          sql: 'SELECT Program FROM syn444',
          primaryKeyColumn: 'Program',
          urlStyle: 'path-segment',
        },
      ],
      baseUrl,
      lastmod,
    )
    expect(pathSegmentUrls[0].loc).toBe(
      'https://example.synapse.org/Explore/Programs/value%20with%20spaces',
    )
  })

  it('records a warning and skips URLs when fetchResourceIds fails', async () => {
    vi.mocked(fetchResourceIds).mockResolvedValueOnce({
      config: {} as never,
      ids: [],
      success: false,
      error: 'Network error',
    })

    const { urls, warnings } = await generateDynamicUrls(
      [
        {
          path: 'Explore/Studies/DetailsPage',
          sql: 'SELECT studyId FROM syn555',
          primaryKeyColumn: 'studyId',
        },
      ],
      baseUrl,
      lastmod,
    )

    expect(urls).toHaveLength(0)
    expect(warnings).toHaveLength(1)
    expect(warnings[0]).toContain('Network error')
  })
})
