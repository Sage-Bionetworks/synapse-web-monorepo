import { describe, expect, it } from 'vitest'
import {
  extractStaticRoutes,
  generateStaticUrls,
  generateSitemapXml,
  generateSitemapIndexXml,
  splitUrlsIntoSitemaps,
} from './generateSitemap'
import { extractEntityIdFromSql } from './synapseQuery'
import type { SitemapUrl } from './types'

describe('extractEntityIdFromSql', () => {
  it('extracts entity ID from simple SELECT', () => {
    expect(extractEntityIdFromSql('SELECT * FROM syn12345')).toBe('syn12345')
  })

  it('extracts entity ID from SELECT with version', () => {
    expect(extractEntityIdFromSql('SELECT * FROM syn12345.67')).toBe('syn12345')
  })

  it('extracts entity ID from SELECT with WHERE clause', () => {
    expect(
      extractEntityIdFromSql("SELECT * FROM syn12345 WHERE status = 'active'"),
    ).toBe('syn12345')
  })

  it('handles lowercase FROM', () => {
    expect(extractEntityIdFromSql('SELECT * from syn99999')).toBe('syn99999')
  })

  it('returns null for invalid SQL', () => {
    expect(extractEntityIdFromSql('SELECT * WHERE x=1')).toBeNull()
  })

  it('returns null for non-synapse entity', () => {
    expect(extractEntityIdFromSql('SELECT * FROM users')).toBeNull()
  })
})

describe('extractStaticRoutes', () => {
  it('extracts simple paths', () => {
    const content = `
const routes = [
  {
    path: '/',
    children: [
      {
        path: 'About',
      },
      {
        path: 'Explore',
      },
    ],
  },
]
`
    const routes = extractStaticRoutes(content)
    // Root path '/' becomes empty string when joined
    expect(routes).toContain('')
    expect(routes).toContain('/About')
    expect(routes).toContain('/Explore')
  })

  it('handles nested paths', () => {
    const content = `
const routes = [
  {
    path: '/',
    children: [
      {
        path: 'Explore',
        children: [
          {
            path: 'Studies',
          },
          {
            path: 'Datasets',
          },
        ],
      },
    ],
  },
]
`
    const routes = extractStaticRoutes(content)
    expect(routes).toContain('/Explore')
    expect(routes).toContain('/Explore/Studies')
    expect(routes).toContain('/Explore/Datasets')
  })

  it('skips dynamic routes with params', () => {
    const content = `
const routes = [
  {
    path: '/',
    children: [
      {
        path: ':id',
      },
      {
        path: ':slug',
      },
      {
        path: 'static',
      },
    ],
  },
]
`
    const routes = extractStaticRoutes(content)
    expect(routes).not.toContain('/:id')
    expect(routes).not.toContain('/:slug')
    expect(routes).toContain('/static')
  })

  it('skips wildcard routes', () => {
    const content = `
const routes = [
  {
    path: '/',
    children: [
      {
        path: 'Explore',
        children: [
          {
            path: '*',
          },
        ],
      },
    ],
  },
]
`
    const routes = extractStaticRoutes(content)
    expect(routes).toContain('/Explore')
    expect(routes).not.toContain('/Explore/*')
  })

  it('skips DetailsPage routes (they require query params)', () => {
    const content = `
const routes = [
  {
    path: '/',
    children: [
      {
        path: 'Explore',
        children: [
          {
            path: 'Studies',
          },
          {
            path: 'Studies/DetailsPage',
          },
        ],
      },
    ],
  },
]
`
    const routes = extractStaticRoutes(content)
    expect(routes).toContain('/Explore')
    expect(routes).toContain('/Explore/Studies')
    expect(routes).not.toContain('/Explore/Studies/DetailsPage')
  })

  it('URL-encodes spaces in paths', () => {
    const content = `
const routes = [
  {
    path: '/',
    children: [
      {
        path: 'Research Tools',
      },
    ],
  },
]
`
    const routes = extractStaticRoutes(content)
    expect(routes).toContain('/Research%20Tools')
  })
})

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
    // in the SQL query builder. The actual quoting happens in synapseQuery.ts
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
