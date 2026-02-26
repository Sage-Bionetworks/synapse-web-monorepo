import { describe, expect, it } from 'vitest'
import { extractStaticRoutePaths } from './extractRoutesFromManifest'
import type { ManifestRoute } from './extractRoutesFromManifest'

/**
 * Helper to create a minimal server route manifest entry.
 * Only includes the fields needed by extractStaticRoutePaths.
 */
function makeRoute(
  id: string,
  opts: { path?: string; parentId?: string; index?: boolean } = {},
): [string, ManifestRoute] {
  return [
    id,
    {
      id,
      parentId: opts.parentId,
      path: opts.path,
      index: opts.index,
    },
  ]
}

describe('extractStaticRoutePaths', () => {
  it('extracts simple flat routes', () => {
    const routes: Record<string, ManifestRoute> = Object.fromEntries([
      makeRoute('root', { path: '/' }),
      makeRoute('about', { path: 'about', parentId: 'root' }),
    ])
    const paths = extractStaticRoutePaths(routes)
    expect(paths).toContain('/')
    expect(paths).toContain('/about')
  })

  it('extracts nested routes with correct path concatenation', () => {
    const routes: Record<string, ManifestRoute> = Object.fromEntries([
      makeRoute('root', { path: '/' }),
      makeRoute('explore', { path: 'Explore', parentId: 'root' }),
      makeRoute('studies', { path: 'Studies', parentId: 'explore' }),
      makeRoute('data', { path: 'Data', parentId: 'explore' }),
    ])
    const paths = extractStaticRoutePaths(routes)
    expect(paths).toContain('/')
    expect(paths).toContain('/Explore')
    expect(paths).toContain('/Explore/Studies')
    expect(paths).toContain('/Explore/Data')
  })

  it('handles index routes by using parent path', () => {
    const routes: Record<string, ManifestRoute> = Object.fromEntries([
      makeRoute('root', { path: '/' }),
      makeRoute('explore', { path: 'Explore', parentId: 'root' }),
      makeRoute('explore-index', { parentId: 'explore', index: true }),
      makeRoute('studies', { path: 'Studies', parentId: 'explore' }),
    ])
    const paths = extractStaticRoutePaths(routes)
    // Index route produces the same path as its parent — should not duplicate
    expect(paths).toContain('/Explore')
    expect(paths).toContain('/Explore/Studies')
    expect(paths.filter(p => p === '/Explore').length).toBe(1)
  })

  it('skips wildcard routes', () => {
    const routes: Record<string, ManifestRoute> = Object.fromEntries([
      makeRoute('root', { path: '/' }),
      makeRoute('wildcard', { path: '*', parentId: 'root' }),
      makeRoute('about', { path: 'about', parentId: 'root' }),
    ])
    const paths = extractStaticRoutePaths(routes)
    expect(paths).toContain('/')
    expect(paths).toContain('/about')
    expect(paths).not.toContain('/*')
  })

  it('skips routes with path parameters', () => {
    const routes: Record<string, ManifestRoute> = Object.fromEntries([
      makeRoute('root', { path: '/' }),
      makeRoute('users', { path: 'users', parentId: 'root' }),
      makeRoute('user-detail', { path: ':id', parentId: 'users' }),
    ])
    const paths = extractStaticRoutePaths(routes)
    expect(paths).toContain('/users')
    expect(paths).not.toContain('/users/:id')
  })

  it('skips routes with dynamic path parameters (clean URL detail pages)', () => {
    const routes: Record<string, ManifestRoute> = Object.fromEntries([
      makeRoute('root', { path: '/' }),
      makeRoute('explore', { path: 'Explore', parentId: 'root' }),
      makeRoute('studies', { path: 'Studies', parentId: 'explore' }),
      makeRoute('study-detail', {
        path: ':studyId',
        parentId: 'studies',
      }),
    ])
    const paths = extractStaticRoutePaths(routes)
    expect(paths).toContain('/Explore/Studies')
    expect(paths).not.toContain('/Explore/Studies/:studyId')
  })

  it('skips descendants of parameterized routes (tab routes under /:param)', () => {
    const routes: Record<string, ManifestRoute> = Object.fromEntries([
      makeRoute('root', { path: '/' }),
      makeRoute('explore', { path: 'Explore', parentId: 'root' }),
      makeRoute('studies', { path: 'Studies', parentId: 'explore' }),
      makeRoute('study-detail', {
        path: ':studyId',
        parentId: 'studies',
      }),
      // These tab routes are children of the parameterized route
      makeRoute('study-details-tab', {
        path: 'Details',
        parentId: 'study-detail',
      }),
      makeRoute('study-files-tab', {
        path: 'Files',
        parentId: 'study-detail',
      }),
    ])
    const paths = extractStaticRoutePaths(routes)
    expect(paths).toContain('/Explore')
    expect(paths).toContain('/Explore/Studies')
    expect(paths).not.toContain('/Explore/Studies/:studyId')
    expect(paths).not.toContain('/Explore/Studies/:studyId/Details')
    expect(paths).not.toContain('/Explore/Studies/:studyId/Files')
  })

  it('includes static DetailsPage redirect routes', () => {
    const routes: Record<string, ManifestRoute> = Object.fromEntries([
      makeRoute('root', { path: '/' }),
      makeRoute('explore', { path: 'Explore', parentId: 'root' }),
      makeRoute('studies', { path: 'Studies', parentId: 'explore' }),
      makeRoute('studies-details-page', {
        path: 'Studies/DetailsPage',
        parentId: 'explore',
      }),
    ])
    const paths = extractStaticRoutePaths(routes)
    expect(paths).toContain('/Explore/Studies')
    expect(paths).toContain('/Explore/Studies/DetailsPage')
  })

  it('URL-encodes spaces in paths', () => {
    const routes: Record<string, ManifestRoute> = Object.fromEntries([
      makeRoute('root', { path: '/' }),
      makeRoute('models', {
        path: 'Experimental Models',
        parentId: 'root',
      }),
      makeRoute('resources', {
        path: 'Target Enabling Resources',
        parentId: 'root',
      }),
    ])
    const paths = extractStaticRoutePaths(routes)
    expect(paths).toContain('/Experimental%20Models')
    expect(paths).toContain('/Target%20Enabling%20Resources')
  })

  it('handles layout routes (no path) by passing through parent path', () => {
    const routes: Record<string, ManifestRoute> = Object.fromEntries([
      makeRoute('root', { path: '/' }),
      makeRoute('layout', { parentId: 'root' }),
      makeRoute('home', { path: 'Home', parentId: 'layout' }),
      makeRoute('about', { path: 'About', parentId: 'layout' }),
    ])
    const paths = extractStaticRoutePaths(routes)
    expect(paths).toContain('/Home')
    expect(paths).toContain('/About')
  })

  it('avoids duplicate paths', () => {
    const routes: Record<string, ManifestRoute> = Object.fromEntries([
      makeRoute('root', { path: '/' }),
      makeRoute('home', { path: 'Home', parentId: 'root' }),
      makeRoute('home-index', { parentId: 'home', index: true }),
    ])
    const paths = extractStaticRoutePaths(routes)
    expect(paths.filter(p => p === '/Home').length).toBe(1)
  })

  it('handles deeply nested routes', () => {
    const routes: Record<string, ManifestRoute> = Object.fromEntries([
      makeRoute('root', { path: '/' }),
      makeRoute('explore', { path: 'Explore', parentId: 'root' }),
      makeRoute('studies', { path: 'Studies', parentId: 'explore' }),
      makeRoute('category', { path: 'Category', parentId: 'studies' }),
      makeRoute('overview', { path: 'Overview', parentId: 'category' }),
    ])
    const paths = extractStaticRoutePaths(routes)
    expect(paths).toContain('/Explore')
    expect(paths).toContain('/Explore/Studies')
    expect(paths).toContain('/Explore/Studies/Category')
    expect(paths).toContain('/Explore/Studies/Category/Overview')
  })

  it('handles empty routes', () => {
    const paths = extractStaticRoutePaths({})
    expect(paths).toEqual([])
  })

  it('handles root route with empty string path', () => {
    // React Router's server build uses path: "" for the root route entry
    const routes: Record<string, ManifestRoute> = Object.fromEntries([
      makeRoute('root', { path: '' }),
      makeRoute('layout', { parentId: 'root' }),
      makeRoute('app', { path: '/', parentId: 'layout' }),
      makeRoute('about', { path: 'about', parentId: 'app' }),
    ])
    const paths = extractStaticRoutePaths(routes)
    expect(paths).toContain('/')
    expect(paths).toContain('/about')
    // No double slashes
    expect(paths.every(p => !p.includes('//'))).toBe(true)
  })

  it('produces equivalent paths to the NF portal route structure', () => {
    // This test uses the ACTUAL route manifest shape from the NF portal's
    // server build (path: "" for root, path: "/" for the RootApp route).
    const routes: Record<string, ManifestRoute> = Object.fromEntries([
      // React Router synthetic root — path is empty string
      makeRoute('root', { path: '' }),
      // Top-level layout (PortalRoot) — no path
      makeRoute('portal-root', { parentId: 'root' }),
      // Root app route
      makeRoute('root-app', { path: '/', parentId: 'portal-root' }),

      // Shared routes
      makeRoute('error', { path: '*', parentId: 'root-app' }),
      makeRoute('home-redirect', { path: 'Home', parentId: 'root-app' }),
      makeRoute('download-cart', {
        path: 'DownloadCart',
        parentId: 'root-app',
      }),
      makeRoute('file-entity', {
        path: 'FileEntity',
        parentId: 'root-app',
      }),
      makeRoute('test-init-error', {
        path: 'test-init-error',
        parentId: 'root-app',
      }),

      // Index — HomePage
      makeRoute('home', { parentId: 'root-app', index: true }),

      // Browse Tools redirect
      makeRoute('browse-tools-redirect', {
        path: 'Browse Tools',
        parentId: 'root-app',
      }),

      // Research Tools Central (prefix adds a path segment)
      makeRoute('browse-tools', {
        path: 'Research Tools Central/Browse Tools',
        parentId: 'root-app',
      }),
      makeRoute('submit-animal', {
        path: 'Research Tools Central/Submit Animal Model',
        parentId: 'root-app',
      }),
      makeRoute('submit-observation', {
        path: 'Research Tools Central/Submit Observation',
        parentId: 'root-app',
      }),
      makeRoute('submit-cell-line', {
        path: 'Research Tools Central/Submit Cell Line',
        parentId: 'root-app',
      }),
      makeRoute('submit-antibody', {
        path: 'Research Tools Central/Submit Antibody',
        parentId: 'root-app',
      }),
      makeRoute('submit-genetic-reagent', {
        path: 'Research Tools Central/Submit Genetic Reagent',
        parentId: 'root-app',
      }),

      // Explore section (layout with tab navigation)
      makeRoute('explore-layout', {
        path: 'Explore',
        parentId: 'root-app',
      }),
      makeRoute('initiatives', {
        path: 'Initiatives',
        parentId: 'explore-layout',
      }),
      makeRoute('studies', {
        path: 'Studies',
        parentId: 'explore-layout',
      }),
      makeRoute('datasets', {
        path: 'Datasets',
        parentId: 'explore-layout',
      }),
      makeRoute('files', {
        path: 'Files',
        parentId: 'explore-layout',
      }),
      makeRoute('publications', {
        path: 'Publications',
        parentId: 'explore-layout',
      }),
      makeRoute('tools', {
        path: 'Tools',
        parentId: 'explore-layout',
      }),
      makeRoute('hackathon', {
        path: 'Hackathon',
        parentId: 'explore-layout',
      }),

      // Search
      makeRoute('search-index', {
        path: 'Search',
        parentId: 'root-app',
        index: true,
      }),
      makeRoute('search-resource-type', {
        path: 'Search/:resourceType',
        parentId: 'root-app',
      }),

      // Clean-URL detail page routes (parameterized — should be excluded)
      makeRoute('initiative-detail', {
        path: 'Explore/Initiatives/:initiative',
        parentId: 'root-app',
      }),
      makeRoute('dataset-detail', {
        path: 'Explore/Datasets/:id',
        parentId: 'root-app',
      }),
      makeRoute('study-detail', {
        path: 'Explore/Studies/:studyId',
        parentId: 'root-app',
      }),
      makeRoute('study-detail-index', {
        parentId: 'study-detail',
        index: true,
      }),
      makeRoute('study-detail-wildcard', {
        path: '*',
        parentId: 'study-detail',
      }),
      makeRoute('study-details-tab', {
        path: 'Details',
        parentId: 'study-detail',
      }),
      makeRoute('study-datasets-tab', {
        path: 'Datasets',
        parentId: 'study-detail',
      }),
      makeRoute('study-files-tab', {
        path: 'Files',
        parentId: 'study-detail',
      }),
      makeRoute('study-additional-files-tab', {
        path: 'AdditionalFiles',
        parentId: 'study-detail',
      }),

      makeRoute('tool-detail', {
        path: 'Explore/Tools/:resourceId',
        parentId: 'root-app',
      }),
      makeRoute('hackathon-detail', {
        path: 'Explore/Hackathon/:id',
        parentId: 'root-app',
      }),
      makeRoute('org-detail', {
        path: 'Organizations/:abbreviation',
        parentId: 'root-app',
      }),

      // Legacy DetailsPage redirect routes (static — should be included)
      makeRoute('legacy-initiative', {
        path: 'Explore/Initiatives/DetailsPage',
        parentId: 'root-app',
      }),
      makeRoute('legacy-dataset', {
        path: 'Explore/Datasets/DetailsPage',
        parentId: 'root-app',
      }),
      makeRoute('legacy-study', {
        path: 'Explore/Studies/DetailsPage',
        parentId: 'root-app',
      }),
      makeRoute('legacy-tool', {
        path: 'Explore/Tools/DetailsPage',
        parentId: 'root-app',
      }),
      makeRoute('legacy-hackathon', {
        path: 'Explore/Hackathon/DetailsPage',
        parentId: 'root-app',
      }),
      makeRoute('legacy-org', {
        path: 'Organizations/DetailsPage',
        parentId: 'root-app',
      }),

      // Hackathon Projects redirect
      makeRoute('hackathon-projects-redirect', {
        path: 'Explore/Hackathon Projects',
        parentId: 'root-app',
      }),
    ])

    const paths = extractStaticRoutePaths(routes)

    // Static routes that SHOULD be included
    const expectedPaths = [
      '/',
      '/Home',
      '/DownloadCart',
      '/FileEntity',
      '/test-init-error',
      '/Browse%20Tools',
      '/Research%20Tools%20Central/Browse%20Tools',
      '/Research%20Tools%20Central/Submit%20Animal%20Model',
      '/Research%20Tools%20Central/Submit%20Observation',
      '/Research%20Tools%20Central/Submit%20Cell%20Line',
      '/Research%20Tools%20Central/Submit%20Antibody',
      '/Research%20Tools%20Central/Submit%20Genetic%20Reagent',
      '/Explore',
      '/Explore/Initiatives',
      '/Explore/Studies',
      '/Explore/Datasets',
      '/Explore/Files',
      '/Explore/Publications',
      '/Explore/Tools',
      '/Explore/Hackathon',
      '/Search',
      '/Explore/Initiatives/DetailsPage',
      '/Explore/Datasets/DetailsPage',
      '/Explore/Studies/DetailsPage',
      '/Explore/Tools/DetailsPage',
      '/Explore/Hackathon/DetailsPage',
      '/Organizations/DetailsPage',
      '/Explore/Hackathon%20Projects',
    ]

    for (const expected of expectedPaths) {
      expect(paths).toContain(expected)
    }

    // Dynamic routes that SHOULD NOT be included
    const excludedPaths = [
      '/Explore/Initiatives/:initiative',
      '/Explore/Datasets/:id',
      '/Explore/Studies/:studyId',
      '/Explore/Studies/:studyId/Details',
      '/Explore/Studies/:studyId/Datasets',
      '/Explore/Studies/:studyId/Files',
      '/Explore/Studies/:studyId/AdditionalFiles',
      '/Explore/Tools/:resourceId',
      '/Explore/Hackathon/:id',
      '/Organizations/:abbreviation',
      '/Search/:resourceType',
    ]

    for (const excluded of excludedPaths) {
      expect(paths).not.toContain(excluded)
    }

    // No double slashes in any path
    expect(paths.every(p => !p.includes('//'))).toBe(true)
  })
})
