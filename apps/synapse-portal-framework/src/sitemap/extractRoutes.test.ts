import { describe, expect, it } from 'vitest'
import { flattenRoutePaths } from './extractRoutes'
import type { RouteObject } from 'react-router'

describe('flattenRoutePaths', () => {
  it('extracts a simple flat route', () => {
    const routes: RouteObject[] = [{ path: '/' }, { path: 'about' }]
    const paths = flattenRoutePaths(routes)
    expect(paths).toEqual(['/', '/about'])
  })

  it('extracts nested routes with correct path concatenation', () => {
    const routes: RouteObject[] = [
      {
        path: '/',
        children: [
          {
            path: 'Explore',
            children: [{ path: 'Studies' }, { path: 'Data' }],
          },
        ],
      },
    ]
    const paths = flattenRoutePaths(routes)
    expect(paths).toContain('/')
    expect(paths).toContain('/Explore')
    expect(paths).toContain('/Explore/Studies')
    expect(paths).toContain('/Explore/Data')
  })

  it('handles index routes by using parent path', () => {
    const routes: RouteObject[] = [
      {
        path: 'Explore',
        children: [
          { index: true }, // Should use parent path /Explore
          { path: 'Studies' },
        ],
      },
    ]
    const paths = flattenRoutePaths(routes)
    // Index route should not create a duplicate entry if parent is included
    expect(paths).toContain('/Explore')
    expect(paths).toContain('/Explore/Studies')
  })

  it('skips wildcard routes', () => {
    const routes: RouteObject[] = [
      { path: '/' },
      { path: '*' }, // Should be skipped
      { path: 'about' },
    ]
    const paths = flattenRoutePaths(routes)
    expect(paths).toEqual(['/', '/about'])
    expect(paths).not.toContain('/*')
    expect(paths).not.toContain('*')
  })

  it('skips routes with path parameters', () => {
    const routes: RouteObject[] = [
      { path: 'users' },
      { path: ':id' }, // Should be skipped
      { path: 'profile/:userId' }, // Should be skipped
    ]
    const paths = flattenRoutePaths(routes)
    expect(paths).toEqual(['/users'])
    expect(paths).not.toContain('/:id')
    expect(paths).not.toContain('/profile/:userId')
  })

  it('skips DetailsPage routes', () => {
    const routes: RouteObject[] = [
      {
        path: 'Explore',
        children: [
          { path: 'Studies' },
          { path: 'Studies/DetailsPage' }, // Should be skipped
        ],
      },
    ]
    const paths = flattenRoutePaths(routes)
    expect(paths).toContain('/Explore/Studies')
    expect(paths).not.toContain('/Explore/Studies/DetailsPage')
  })

  it('skips DetailsPage sub-routes (they require query params)', () => {
    const routes: RouteObject[] = [
      {
        path: 'Explore',
        children: [
          {
            path: 'Studies',
            children: [
              {
                path: 'DetailsPage',
                children: [{ path: 'Details' }, { path: 'AdditionalFiles' }],
              },
            ],
          },
        ],
      },
    ]
    const paths = flattenRoutePaths(routes)
    expect(paths).toContain('/Explore')
    expect(paths).toContain('/Explore/Studies')
    expect(paths).not.toContain('/Explore/Studies/DetailsPage')
    expect(paths).not.toContain('/Explore/Studies/DetailsPage/Details')
    expect(paths).not.toContain('/Explore/Studies/DetailsPage/AdditionalFiles')
  })

  it('URL-encodes spaces in paths', () => {
    const routes: RouteObject[] = [
      { path: 'Experimental Models' },
      { path: 'Target Enabling Resources' },
    ]
    const paths = flattenRoutePaths(routes)
    expect(paths).toContain('/Experimental%20Models')
    expect(paths).toContain('/Target%20Enabling%20Resources')
  })

  it('handles routes without path (layout routes)', () => {
    const routes: RouteObject[] = [
      {
        // No path - this is a layout route
        children: [{ path: 'Home' }, { path: 'About' }],
      },
    ]
    const paths = flattenRoutePaths(routes)
    expect(paths).toContain('/Home')
    expect(paths).toContain('/About')
  })

  it('avoids duplicate paths', () => {
    const routes: RouteObject[] = [
      {
        path: 'Home',
        children: [
          { index: true }, // Would also resolve to /Home
        ],
      },
    ]
    const paths = flattenRoutePaths(routes)
    // /Home should only appear once
    expect(paths.filter(p => p === '/Home').length).toBe(1)
  })

  it('handles deeply nested routes', () => {
    const routes: RouteObject[] = [
      {
        path: 'Explore',
        children: [
          {
            path: 'Studies',
            children: [
              {
                path: 'Category',
                children: [{ path: 'Overview' }, { path: 'Data' }],
              },
            ],
          },
        ],
      },
    ]
    const paths = flattenRoutePaths(routes)
    expect(paths).toContain('/Explore')
    expect(paths).toContain('/Explore/Studies')
    expect(paths).toContain('/Explore/Studies/Category')
    expect(paths).toContain('/Explore/Studies/Category/Overview')
    expect(paths).toContain('/Explore/Studies/Category/Data')
  })

  it('handles routes with lazy loading (lazy property is ignored)', () => {
    // The lazy property is ignored for path extraction, so we just need a path
    const routes: RouteObject[] = [
      {
        path: 'About',
      },
    ]
    const paths = flattenRoutePaths(routes)
    expect(paths).toContain('/About')
  })

  it('handles shared routes spread into children', () => {
    const sharedRoutes: RouteObject[] = [
      { path: 'DownloadCart' },
      { path: 'FileEntity' },
    ]

    const routes: RouteObject[] = [
      {
        path: '/',
        children: [...sharedRoutes, { path: 'Home' }],
      },
    ]

    const paths = flattenRoutePaths(routes)
    expect(paths).toContain('/DownloadCart')
    expect(paths).toContain('/FileEntity')
    expect(paths).toContain('/Home')
  })

  it('handles empty routes array', () => {
    const paths = flattenRoutePaths([])
    expect(paths).toEqual([])
  })

  it('handles routes with element property (ignored for path extraction)', () => {
    const routes: RouteObject[] = [
      {
        path: 'redirect',
        element: null, // React element would be here in real usage
      },
    ]
    const paths = flattenRoutePaths(routes)
    expect(paths).toContain('/redirect')
  })
})
