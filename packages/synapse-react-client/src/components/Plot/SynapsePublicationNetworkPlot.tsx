import React, { lazy, Suspense, useMemo, useState } from 'react'
import type { Data, Layout } from 'plotly.js-basic-dist'
import { useGetFullTableQueryResults } from '@/synapse-queries'
import { SynapseConstants } from '@/utils'
import { parseEntityIdFromSqlStatement } from '@/utils/functions/SqlFunctions'
import { Box, Chip, Skeleton, Typography } from '@mui/material'
import {
  QueryBundleRequest,
  QueryFilter,
} from '@sage-bionetworks/synapse-types'
import type { PlotParams } from 'react-plotly.js'
import createPlotlyComponent from './safe-react-plotly-factory'

const safeESModule = <T,>(a: T | { default: T }): T => {
  const b = a as any
  return b.__esModule || b[Symbol.toStringTag] === 'Module' ? b.default : b
}

const LazyLoadedPlot = lazy(async () => {
  const Plotly = await import('plotly.js-basic-dist')
  const plotly = safeESModule(Plotly)
  return { default: createPlotlyComponent(plotly) }
})

function NetworkPlot(props: PlotParams) {
  return (
    <Suspense fallback={<Skeleton variant="rectangular" height={400} />}>
      <LazyLoadedPlot {...props} />
    </Suspense>
  )
}

type ResourceType = 'publication' | 'dataset' | 'tool'

const TYPE_CONFIG: Record<
  ResourceType,
  { label: string; color: string; symbol: string; size: number }
> = {
  publication: {
    label: 'Publications',
    color: '#7AAEC8',
    symbol: 'circle',
    size: 9,
  },
  dataset: { label: 'Datasets', color: '#5BB247', symbol: 'square', size: 10 },
  tool: { label: 'Tools', color: '#E07B39', symbol: 'triangle-up', size: 11 },
}

const CROSS_COLOR = '#E0473D'
const ALL_TYPES: ResourceType[] = ['publication', 'dataset', 'tool']

type SizeMetric = 'users' | 'downloads' | 'egress' | 'resources'
const SIZE_METRIC_LABELS: Record<SizeMetric, string> = {
  users: 'Unique Users',
  downloads: 'Downloads',
  egress: 'Data Egress',
  resources: 'Research Outputs',
}

const STUDY_COLORS = [
  '#125e81',
  '#3FA9C9',
  '#5BB247',
  '#F2B718',
  '#E0473D',
  '#7B5EA7',
  '#E07B39',
  '#2E8B57',
  '#C0407A',
  '#4682B4',
  '#8B7355',
  '#20B2AA',
]

// Fallback SQLs keep hooks always-active (Rules of Hooks)
const DISABLED_PUB_SQL = 'SELECT studyName, title FROM syn16857542 LIMIT 0'
const DISABLED_DS_SQL = 'SELECT studyName, title FROM syn50913342 LIMIT 0'
const DISABLED_TOOL_SQL =
  'SELECT studyName, resourceName FROM syn51730943 LIMIT 0'
const DISABLED_STATS_SQL =
  'SELECT studyName, n_unique_users, n_downloads, egress_size_in_gb FROM syn55719099 LIMIT 0'
const DISABLED_COLOR_SQL = 'SELECT studyName, dataType FROM syn52694652 LIMIT 0'

/** Strip Synapse multi-value list formatting: ["value"] → value */
function parseListValue(raw: string): string {
  const s = raw.trim()
  if (s.startsWith('[') && s.endsWith(']')) {
    try {
      const parsed = JSON.parse(s)
      if (Array.isArray(parsed) && parsed.length > 0) return String(parsed[0])
    } catch {
      // fall through
    }
    return s.replace(/^\[?"?/, '').replace(/"?\]$/, '')
  }
  return s
}

/** Deterministic [-0.5, 0.5] offset derived from a string + axis index */
function deterministicOffset(str: string, axis: number): number {
  let h = 0
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0
  if (axis === 1) h = (h * 1664525 + 1013904223) | 0
  return (h & 0xffff) / 0x10000 - 0.5
}

/** Place n points in a golden-angle spiral within radius r centred at (cx, cy) */
function goldenSpiral(
  cx: number,
  cy: number,
  n: number,
  r: number,
): [number, number][] {
  if (n === 0) return []
  if (n === 1) return [[cx, cy]]
  const phi = Math.PI * (3 - Math.sqrt(5))
  return Array.from({ length: n }, (_, i) => {
    const ri = Math.sqrt((i + 0.5) / n) * r * 0.82
    return [cx + ri * Math.cos(i * phi), cy + ri * Math.sin(i * phi)] as [
      number,
      number,
    ]
  })
}

/**
 * Force layout for study bubble centres only (not resources).
 * Uses size-aware repulsion so bubbles don't overlap, with weak
 * attraction between studies that share cross-study resources.
 */
function bubbleLayout(
  radii: number[],
  sharedEdges: Array<[number, number]>,
  iterations = 140,
): { centers: [number, number][]; scaledRadii: number[] } {
  const S = radii.length
  if (S === 0) return { centers: [], scaledRadii: [] }
  if (S === 1) return { centers: [[0, 0]], scaledRadii: [radii[0]] }

  const maxR = Math.max(...radii)
  const centers: [number, number][] = Array.from({ length: S }, (_, i) => {
    const angle = (2 * Math.PI * i) / S
    return [maxR * 3 * Math.cos(angle), maxR * 3 * Math.sin(angle)]
  })
  const disp: [number, number][] = Array.from({ length: S }, () => [0, 0])
  const t0 = maxR * 5

  for (let iter = 0; iter < iterations; iter++) {
    const t = t0 * Math.pow(1 - iter / iterations, 1.5)
    for (let i = 0; i < S; i++) {
      disp[i][0] = 0
      disp[i][1] = 0
    }

    // Size-aware repulsion: minimum separation = sum of bubble radii + gap
    for (let i = 0; i < S; i++) {
      for (let j = i + 1; j < S; j++) {
        const dx = centers[i][0] - centers[j][0]
        const dy = centers[i][1] - centers[j][1]
        const d = Math.sqrt(dx * dx + dy * dy) || 0.01
        const minDist = radii[i] + radii[j] + maxR * 0.22
        const f = (minDist * minDist) / d
        const fx = (dx / d) * f
        const fy = (dy / d) * f
        disp[i][0] += fx
        disp[i][1] += fy
        disp[j][0] -= fx
        disp[j][1] -= fy
      }
    }

    // Attraction between studies sharing cross-study resources
    for (const [a, b] of sharedEdges) {
      const dx = centers[a][0] - centers[b][0]
      const dy = centers[a][1] - centers[b][1]
      const d = Math.sqrt(dx * dx + dy * dy) || 0.01
      const k = (radii[a] + radii[b]) * 3.0
      const f = (d * d) / k
      const fx = (dx / d) * f
      const fy = (dy / d) * f
      disp[a][0] -= fx
      disp[a][1] -= fy
      disp[b][0] += fx
      disp[b][1] += fy
    }

    // Weak gravity toward centre
    for (let i = 0; i < S; i++) {
      disp[i][0] -= 0.04 * centers[i][0]
      disp[i][1] -= 0.04 * centers[i][1]
    }

    for (let i = 0; i < S; i++) {
      const dLen = Math.sqrt(disp[i][0] ** 2 + disp[i][1] ** 2) || 0.01
      const scale = Math.min(dLen, t) / dLen
      centers[i][0] += disp[i][0] * scale
      centers[i][1] += disp[i][1] * scale
    }
  }

  // Normalise centres and radii together so the layout fills ~2×2 data units
  const allX = centers.map(c => c[0])
  const allY = centers.map(c => c[1])
  const minX = Math.min(...allX) - maxR
  const maxX = Math.max(...allX) + maxR
  const minY = Math.min(...allY) - maxR
  const maxY = Math.max(...allY) + maxR
  const spanX = maxX - minX || 1
  const spanY = maxY - minY || 1
  const normScale = Math.min(2.0 / spanX, 2.0 / spanY)
  const cx = (minX + maxX) / 2
  const cy = (minY + maxY) / 2

  return {
    centers: centers.map(([x, y]): [number, number] => [
      (x - cx) * normScale,
      (y - cy) * normScale,
    ]),
    scaledRadii: radii.map(r => r * normScale),
  }
}

function buildRequest(
  sql: string,
  additionalFilters?: QueryFilter[],
): QueryBundleRequest {
  return {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    entityId: parseEntityIdFromSqlStatement(sql),
    query: { sql, additionalFilters },
  }
}

export type SynapseResearchNetworkPlotProps = {
  /** SQL returning 2 columns: studyName, publicationTitle */
  publicationSql?: string
  /** SQL returning 2 columns: studyName, datasetTitle */
  datasetSql?: string
  /** SQL returning 2 columns: studyName, toolName */
  toolSql?: string
  additionalFilters?: QueryFilter[]
  /** Cap on number of studies shown (largest by resource count kept). */
  maxStudies?: number
  height?: number
  /**
   * SQL returning studyName, n_unique_users, n_downloads, egress_size_in_gb.
   * Enables the size-by-metric toggle chips.
   */
  studyStatsSql?: string
  /**
   * Pre-computed stats rows (alternative to studyStatsSql).
   * Allows the caller to do a client-side join (e.g. syn55259224 + syn52694652)
   * without requiring a Synapse INNER JOIN. Takes precedence over studyStatsSql.
   */
  studyStatsRows?: Array<{
    studyName: string
    n_unique_users: number
    n_downloads: number
    egress_size_in_gb: number
  }>
  /**
   * SQL returning studyName, colorAttr.
   * Enables the color-by-attribute toggle chip.
   */
  studyColorSql?: string
  /** Display label for the color attribute, e.g. "Data Type". */
  studyColorLabel?: string
}

/** @deprecated Use SynapseResearchNetworkPlot */
export type SynapsePublicationNetworkPlotProps = {
  sql: string
  additionalFilters?: QueryFilter[]
  maxStudies?: number
  height?: number
}

function SidebarLabel({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      variant="caption"
      sx={{
        fontWeight: 700,
        color: '#354A63',
        display: 'block',
        mb: 0.5,
        textTransform: 'uppercase',
        letterSpacing: '0.04em',
        fontSize: '0.68rem',
      }}
    >
      {children}
    </Typography>
  )
}

export const SynapseResearchNetworkPlot = (
  props: SynapseResearchNetworkPlotProps,
): React.ReactNode => {
  const {
    publicationSql,
    datasetSql,
    toolSql,
    additionalFilters,
    maxStudies = Infinity,
    height = 560,
    studyStatsSql,
    studyStatsRows,
    studyColorSql,
    studyColorLabel,
  } = props

  const availableTypes = useMemo<ResourceType[]>(() => {
    const types: ResourceType[] = []
    if (publicationSql) types.push('publication')
    if (datasetSql) types.push('dataset')
    if (toolSql) types.push('tool')
    return types
  }, [publicationSql, datasetSql, toolSql])

  const [activeTypes, setActiveTypes] = useState<Set<ResourceType>>(
    () => new Set(ALL_TYPES),
  )
  const [sizeMetric, setSizeMetric] = useState<SizeMetric>('users')
  const [colorByAttr, setColorByAttr] = useState(() => !!studyColorSql)

  const toggleType = (type: ResourceType) => {
    setActiveTypes(prev => {
      const next = new Set(prev)
      if (next.has(type)) {
        if (next.size > 1) next.delete(type)
      } else {
        next.add(type)
      }
      return next
    })
  }

  // Always call all 5 hooks; disable via options when SQL not provided (Rules of Hooks)
  const { data: pubData, isLoading: pubLoading } = useGetFullTableQueryResults(
    buildRequest(publicationSql ?? DISABLED_PUB_SQL, additionalFilters),
    { enabled: !!publicationSql },
  )
  const { data: dsData, isLoading: dsLoading } = useGetFullTableQueryResults(
    buildRequest(datasetSql ?? DISABLED_DS_SQL, additionalFilters),
    { enabled: !!datasetSql },
  )
  const { data: toolData, isLoading: toolLoading } =
    useGetFullTableQueryResults(
      buildRequest(toolSql ?? DISABLED_TOOL_SQL, additionalFilters),
      { enabled: !!toolSql },
    )
  const { data: statsData, isLoading: statsLoading } =
    useGetFullTableQueryResults(
      buildRequest(studyStatsSql ?? DISABLED_STATS_SQL),
      { enabled: !!studyStatsSql },
    )
  const { data: colorData } = useGetFullTableQueryResults(
    buildRequest(studyColorSql ?? DISABLED_COLOR_SQL),
    { enabled: !!studyColorSql },
  )

  const hasStats =
    !!studyStatsSql || (studyStatsRows != null && studyStatsRows.length > 0)
  const effectiveSizeMetric: SizeMetric = hasStats ? sizeMetric : 'resources'

  // Derive colorAttrMap (study → attr) and attrColorMap (attr → color) from colorData.
  // Kept in a separate memo so toggling colorByAttr doesn't re-run the heavy layout memo.
  const { colorAttrMap, attrColorMap } = useMemo(() => {
    const colorAttrMap = new Map<string, string>()
    ;(colorData?.queryResult?.queryResults?.rows ?? []).forEach(row => {
      const study = parseListValue(String(row.values?.[0] ?? ''))
        .trim()
        .toLowerCase()
      const attr = parseListValue(String(row.values?.[1] ?? '')).trim()
      if (study && study !== 'null' && attr && attr !== 'null')
        colorAttrMap.set(study, attr)
    })
    const uniqueAttrs = [...new Set([...colorAttrMap.values()])].sort()
    const attrColorMap = new Map<string, string>()
    uniqueAttrs.forEach((attr, i) =>
      attrColorMap.set(attr, STUDY_COLORS[i % STUDY_COLORS.length]),
    )
    return { colorAttrMap, attrColorMap }
  }, [colorData])

  const isLoading =
    (!!publicationSql && pubLoading) ||
    (!!datasetSql && dsLoading) ||
    (!!toolSql && toolLoading) ||
    (!!studyStatsSql && statsLoading)

  // activeTypes / sizeMetric in deps so layout recomputes when those change
  const graphData = useMemo(() => {
    // Build stats map: study → { users, downloads, egress }
    const statsMap = new Map<
      string,
      { users: number; downloads: number; egress: number }
    >()
    if (studyStatsRows) {
      studyStatsRows.forEach(row => {
        const study = row.studyName.trim().toLowerCase()
        if (!study || study === 'null') return
        statsMap.set(study, {
          users: row.n_unique_users,
          downloads: row.n_downloads,
          egress: row.egress_size_in_gb,
        })
      })
    } else {
      ;(statsData?.queryResult?.queryResults?.rows ?? []).forEach(row => {
        const study = parseListValue(String(row.values?.[0] ?? ''))
          .trim()
          .toLowerCase()
        if (!study || study === 'null') return
        statsMap.set(study, {
          users: Number(row.values?.[1] ?? 0) || 0,
          downloads: Number(row.values?.[2] ?? 0) || 0,
          egress: Number(row.values?.[3] ?? 0) || 0,
        })
      })
    }

    const rawByType: Record<ResourceType, Array<[string, string]>> = {
      publication: [],
      dataset: [],
      tool: [],
    }
    const dataByType: [ResourceType, typeof pubData][] = [
      ['publication', pubData],
      ['dataset', dsData],
      ['tool', toolData],
    ]
    dataByType.forEach(([type, qData]) => {
      // Always populate rawByType from all types so study bubbles persist when
      // a resource type is toggled off. activeTypes filters display, not presence.
      ;(qData?.queryResult?.queryResults?.rows ?? []).forEach(row => {
        const study = parseListValue(String(row.values?.[0] ?? '')).trim()
        const resource = parseListValue(String(row.values?.[1] ?? '')).trim()
        if (study && study !== 'null' && resource && resource !== 'null') {
          rawByType[type].push([study, resource])
        }
      })
    })

    // study → type → resource set
    const studyMap = new Map<string, Record<ResourceType, Set<string>>>()
    ALL_TYPES.forEach(type => {
      rawByType[type].forEach(([study, resource]) => {
        if (!studyMap.has(study)) {
          studyMap.set(study, {
            publication: new Set(),
            dataset: new Set(),
            tool: new Set(),
          })
        }
        studyMap.get(study)![type].add(resource)
      })
    })

    const sortedStudies = [...studyMap.entries()]
      .sort((a, b) => {
        const ta = ALL_TYPES.reduce((s, t) => s + a[1][t].size, 0)
        const tb = ALL_TYPES.reduce((s, t) => s + b[1][t].size, 0)
        return tb - ta
      })
      .slice(0, maxStudies)

    const S = sortedStudies.length
    if (S === 0) return null

    // Cross-study detection keyed by 'type:resourceName' to avoid
    // collisions between a publication and dataset with the same name
    const resourceStudyMap = new Map<string, Set<string>>()
    sortedStudies.forEach(([study, typeMap]) => {
      ALL_TYPES.forEach(type => {
        if (!activeTypes.has(type)) return
        typeMap[type].forEach(r => {
          const key = `${type}:${r}`
          if (!resourceStudyMap.has(key)) resourceStudyMap.set(key, new Set())
          resourceStudyMap.get(key)!.add(study)
        })
      })
    })
    const crossStudySet = new Set<string>()
    resourceStudyMap.forEach((studies, key) => {
      if (studies.size > 1) crossStudySet.add(key)
    })

    // Compute max stat value across visible studies for normalisation
    let maxStatValue = 1
    if (effectiveSizeMetric !== 'resources') {
      sortedStudies.forEach(([study]) => {
        const s = statsMap.get(study.toLowerCase())
        if (!s) return
        const v =
          effectiveSizeMetric === 'users'
            ? s.users
            : effectiveSizeMetric === 'downloads'
            ? s.downloads
            : s.egress
        if (v > maxStatValue) maxStatValue = v
      })
    }

    // Bubble radii: stat-based when available, else sqrt(exclusive resources)
    const studyInfoList = sortedStudies.map(([study, typeMap], idx) => {
      let singleCount = 0
      let totalCount = 0
      ALL_TYPES.forEach(type => {
        if (!activeTypes.has(type)) return
        typeMap[type].forEach(r => {
          totalCount++
          if (!crossStudySet.has(`${type}:${r}`)) singleCount++
        })
      })
      const stats = statsMap.get(study.toLowerCase()) ?? null
      let r: number
      if (effectiveSizeMetric !== 'resources' && stats) {
        const v =
          effectiveSizeMetric === 'users'
            ? stats.users
            : effectiveSizeMetric === 'downloads'
            ? stats.downloads
            : stats.egress
        r = 0.03 + 0.22 * Math.sqrt(Math.max(v, 0) / maxStatValue)
      } else {
        r = 0.06 + 0.05 * Math.sqrt(Math.max(singleCount, 1))
      }
      return {
        study,
        typeMap,
        idx,
        r,
        color: STUDY_COLORS[idx % STUDY_COLORS.length],
        singleCount,
        totalCount,
        stats,
      }
    })

    // Shared edges between studies with at least one common cross-study resource
    const studyPairSet = new Set<string>()
    const sharedEdges: [number, number][] = []
    crossStudySet.forEach(key => {
      const studies = [...(resourceStudyMap.get(key) ?? [])]
      for (let i = 0; i < studies.length; i++) {
        for (let j = i + 1; j < studies.length; j++) {
          const si = sortedStudies.findIndex(([s]) => s === studies[i])
          const sj = sortedStudies.findIndex(([s]) => s === studies[j])
          if (si < 0 || sj < 0) continue
          const pairKey = `${Math.min(si, sj)}-${Math.max(si, sj)}`
          if (!studyPairSet.has(pairKey)) {
            studyPairSet.add(pairKey)
            sharedEdges.push([si, sj])
          }
        }
      }
    })

    const { centers, scaledRadii } = bubbleLayout(
      studyInfoList.map(s => s.r),
      sharedEdges,
    )

    // Place exclusive resources inside each bubble with golden-angle spiral
    const resourcePositions = new Map<string, [number, number]>()
    studyInfoList.forEach(({ typeMap, idx: si }) => {
      const [cx, cy] = centers[si]
      const br = scaledRadii[si]
      const singleResources: { key: string }[] = []
      ALL_TYPES.forEach(type => {
        if (!activeTypes.has(type)) return
        typeMap[type].forEach(r => {
          const key = `${type}:${r}`
          if (!crossStudySet.has(key)) singleResources.push({ key })
        })
      })
      const positions = goldenSpiral(cx, cy, singleResources.length, br)
      singleResources.forEach(({ key }, i) => {
        resourcePositions.set(key, positions[i])
      })
    })

    // Place cross-study resources at centroid of their studies + small offset
    const maxR = Math.max(...scaledRadii)
    crossStudySet.forEach(key => {
      const studies = [...(resourceStudyMap.get(key) ?? [])]
      let sumX = 0,
        sumY = 0,
        count = 0
      studies.forEach(study => {
        const si = sortedStudies.findIndex(([s]) => s === study)
        if (si >= 0) {
          sumX += centers[si][0]
          sumY += centers[si][1]
          count++
        }
      })
      if (count === 0) return
      const offX = deterministicOffset(key, 0) * maxR * 0.6
      const offY = deterministicOffset(key, 1) * maxR * 0.6
      resourcePositions.set(key, [sumX / count + offX, sumY / count + offY])
    })

    // Edge lines from cross-study nodes to each connected study centre
    const crossEdgeX: number[] = []
    const crossEdgeY: number[] = []
    crossStudySet.forEach(key => {
      const pos = resourcePositions.get(key)
      if (!pos) return
      const studies = [...(resourceStudyMap.get(key) ?? [])]
      studies.forEach(study => {
        const si = sortedStudies.findIndex(([s]) => s === study)
        if (si < 0) return
        crossEdgeX.push(pos[0], centers[si][0], NaN)
        crossEdgeY.push(pos[1], centers[si][1], NaN)
      })
    })

    // Build resource node arrays grouped by type (exclusive) and cross-study
    const resourceNodesByType: Record<
      ResourceType,
      {
        x: number[]
        y: number[]
        labels: string[]
        studyLabels: string[]
      }
    > = {
      publication: { x: [], y: [], labels: [], studyLabels: [] },
      dataset: { x: [], y: [], labels: [], studyLabels: [] },
      tool: { x: [], y: [], labels: [], studyLabels: [] },
    }
    const seenCrossKeys = new Set<string>()
    const crossNodesByType: Record<
      ResourceType,
      { x: number[]; y: number[]; labels: string[]; studyLabels: string[] }
    > = {
      publication: { x: [], y: [], labels: [], studyLabels: [] },
      dataset: { x: [], y: [], labels: [], studyLabels: [] },
      tool: { x: [], y: [], labels: [], studyLabels: [] },
    }

    sortedStudies.forEach(([study, typeMap]) => {
      ALL_TYPES.forEach(type => {
        if (!activeTypes.has(type)) return
        typeMap[type].forEach(r => {
          const key = `${type}:${r}`
          const pos = resourcePositions.get(key)
          if (!pos) return
          const studiesForResource = [...(resourceStudyMap.get(key) ?? [])]
          const studyLabel = studiesForResource.join(', ')
          if (crossStudySet.has(key)) {
            if (!seenCrossKeys.has(key)) {
              seenCrossKeys.add(key)
              crossNodesByType[type].x.push(pos[0])
              crossNodesByType[type].y.push(pos[1])
              crossNodesByType[type].labels.push(r)
              crossNodesByType[type].studyLabels.push(studyLabel)
            }
          } else {
            resourceNodesByType[type].x.push(pos[0])
            resourceNodesByType[type].y.push(pos[1])
            resourceNodesByType[type].labels.push(r)
            resourceNodesByType[type].studyLabels.push(study)
          }
        })
      })
    })

    const studyBubbles = studyInfoList.map(
      ({ study, color, singleCount, totalCount, stats }, si) => ({
        study,
        cx: centers[si][0],
        cy: centers[si][1],
        r: scaledRadii[si],
        color,
        singleCount,
        totalCount,
        stats,
      }),
    )

    return {
      studyBubbles,
      resourceNodesByType,
      crossNodesByType,
      crossEdgeX,
      crossEdgeY,
      crossStudySet,
      effectiveSizeMetric,
    }
  }, [
    pubData,
    dsData,
    toolData,
    statsData,
    studyStatsRows,
    maxStudies,
    activeTypes,
    effectiveSizeMetric,
  ])

  // Derive per-bubble colors from colorAttrMap without re-running the layout memo
  const effectiveStudyBubbles = useMemo(() => {
    if (!graphData) return []
    return graphData.studyBubbles.map((b, i) => {
      if (colorByAttr && colorAttrMap.size > 0) {
        const attr = colorAttrMap.get(b.study.toLowerCase())
        const color = attr
          ? attrColorMap.get(attr) ?? STUDY_COLORS[i % STUDY_COLORS.length]
          : STUDY_COLORS[i % STUDY_COLORS.length]
        return { ...b, color }
      }
      return b
    })
  }, [graphData, colorByAttr, colorAttrMap, attrColorMap])

  if (isLoading) {
    return <Skeleton variant="rectangular" height={height} />
  }

  if (!graphData || graphData.studyBubbles.length === 0) {
    return (
      <Typography variant="body2" color="text.secondary">
        No research output data available for this organization.
      </Typography>
    )
  }

  const {
    resourceNodesByType,
    crossNodesByType,
    crossEdgeX,
    crossEdgeY,
    crossStudySet,
  } = graphData
  const studyBubbles = effectiveStudyBubbles

  // Study bubbles as Plotly shapes (data-coordinate circles, scale with zoom)
  const shapes = studyBubbles.map(b => ({
    type: 'circle' as const,
    xref: 'x' as const,
    yref: 'y' as const,
    x0: b.cx - b.r,
    y0: b.cy - b.r,
    x1: b.cx + b.r,
    y1: b.cy + b.r,
    fillcolor: `${b.color}18`,
    line: { color: b.color, width: 1.5, dash: 'dot' as const },
    layer: 'below' as const,
  }))

  // Study name annotations just above each bubble
  const annotations = studyBubbles.map(b => ({
    x: b.cx,
    y: b.cy + b.r + 0.005,
    text: b.study.length > 24 ? b.study.slice(0, 22) + '…' : b.study,
    showarrow: false,
    font: { size: 9, color: b.color },
    xanchor: 'center' as const,
    yanchor: 'bottom' as const,
  }))

  const traces: Data[] = [
    // Dashed edges from cross-study resources to their study centres
    {
      type: 'scatter',
      mode: 'lines',
      x: crossEdgeX,
      y: crossEdgeY,
      line: { color: `${CROSS_COLOR}55`, width: 1 },
      hoverinfo: 'none',
      showlegend: false,
    },

    // Single-study resource nodes by type (inside their bubble)
    ...availableTypes
      .filter(t => activeTypes.has(t))
      .map(type => {
        const n = resourceNodesByType[type]
        return {
          type: 'scatter' as const,
          mode: 'markers' as const,
          x: n.x,
          y: n.y,
          marker: {
            size: TYPE_CONFIG[type].size,
            color: TYPE_CONFIG[type].color,
            symbol: TYPE_CONFIG[type].symbol,
            opacity: 0.85,
            line: { width: 0.5, color: '#fff' },
          },
          text: n.labels,
          customdata: n.studyLabels,
          hovertemplate: `<b>%{text}</b><br><i>%{customdata}</i><extra></extra>`,
          showlegend: false,
        }
      }),

    // Cross-study resource nodes: type's shape + red colour so shape encodes type
    ...availableTypes
      .filter(t => activeTypes.has(t))
      .map(type => {
        const n = crossNodesByType[type]
        return {
          type: 'scatter' as const,
          mode: 'markers' as const,
          x: n.x,
          y: n.y,
          marker: {
            size: TYPE_CONFIG[type].size + 3,
            color: CROSS_COLOR,
            symbol: TYPE_CONFIG[type].symbol,
            opacity: 1,
            line: { width: 1.5, color: '#fff' },
          },
          text: n.labels,
          customdata: n.studyLabels,
          hovertemplate:
            '<b>%{text}</b><br><i>In: %{customdata}</i><extra></extra>',
          showlegend: false,
        }
      }),

    // Coloured dots at bubble centres — hover target for the whole bubble via
    // hoverdistance in layout (larger invisible hit area than the rendered dot)
    {
      type: 'scatter' as const,
      mode: 'markers' as const,
      x: studyBubbles.map(b => b.cx),
      y: studyBubbles.map(b => b.cy),
      marker: {
        size: 8,
        color: studyBubbles.map(b => b.color),
        opacity: 0.7,
        line: { width: 1.5, color: '#fff' },
      },
      text: studyBubbles.map(b => b.study),
      customdata: studyBubbles.map(b => {
        const lines: string[] = []
        const attrLabel =
          colorByAttr && colorAttrMap.size > 0
            ? colorAttrMap.get(b.study.toLowerCase()) ?? null
            : null
        if (attrLabel && studyColorLabel)
          lines.push(`${studyColorLabel}: ${attrLabel}`)
        if (
          b.stats &&
          (b.stats.users > 0 || b.stats.downloads > 0 || b.stats.egress > 0)
        ) {
          const parts: string[] = []
          if (b.stats.users > 0)
            parts.push(`${b.stats.users.toLocaleString()} unique users`)
          if (b.stats.downloads > 0)
            parts.push(`${b.stats.downloads.toLocaleString()} downloads`)
          if (b.stats.egress > 0)
            parts.push(`${b.stats.egress.toFixed(1)} GB egress`)
          lines.push(parts.join(' · '))
        } else {
          lines.push(`${b.totalCount} resource${b.totalCount !== 1 ? 's' : ''}`)
        }
        return lines.join('<br>')
      }),
      hovertemplate: '<b>%{text}</b><br>%{customdata}<extra></extra>',
      showlegend: false,
    },

    // Dummy traces for Plotly built-in legend
    ...availableTypes
      .filter(t => activeTypes.has(t))
      .map(type => ({
        type: 'scatter' as const,
        mode: 'markers' as const,
        x: [] as number[],
        y: [] as number[],
        name: TYPE_CONFIG[type].label,
        marker: {
          size: TYPE_CONFIG[type].size,
          color: TYPE_CONFIG[type].color,
          symbol: TYPE_CONFIG[type].symbol,
        },
        showlegend: true,
      })),
    ...(crossStudySet.size > 0
      ? [
          {
            type: 'scatter' as const,
            mode: 'markers' as const,
            x: [] as number[],
            y: [] as number[],
            name: `Multi-study (${crossStudySet.size})`,
            marker: {
              size: 10,
              color: CROSS_COLOR,
              symbol: 'square' as const,
            },
            showlegend: true,
          },
        ]
      : []),
  ]

  const layout: Partial<Layout> = {
    shapes,
    annotations,
    xaxis: {
      showgrid: false,
      zeroline: false,
      showticklabels: false,
    },
    yaxis: {
      showgrid: false,
      zeroline: false,
      showticklabels: false,
      scaleanchor: 'x',
    },
    showlegend: true,
    legend: {
      orientation: 'h' as const,
      x: 0.5,
      xanchor: 'center' as const,
      y: -0.06,
      font: { size: 11, color: '#354A63' },
    },
    margin: { t: 24, b: 56, l: 16, r: 16 },
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    dragmode: 'pan' as const,
    hoverdistance: 80,
  }

  return (
    <Box sx={{ display: 'flex', gap: 2.5, alignItems: 'flex-start' }}>
      {/* Left sidebar: all controls & legend */}
      <Box sx={{ width: 200, flexShrink: 0, pt: 0.5 }}>
        {/* Resource type filter */}
        {availableTypes.length > 1 && (
          <Box sx={{ mb: 2.5 }}>
            <SidebarLabel>Show</SidebarLabel>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              {availableTypes.map(type => {
                const cfg = TYPE_CONFIG[type]
                const isActive = activeTypes.has(type)
                return (
                  <Chip
                    key={type}
                    label={cfg.label}
                    size="small"
                    clickable
                    onClick={() => toggleType(type)}
                    sx={{
                      justifyContent: 'flex-start',
                      fontWeight: 600,
                      fontSize: '0.75rem',
                      bgcolor: isActive ? cfg.color : 'transparent',
                      color: isActive ? '#fff' : cfg.color,
                      borderColor: cfg.color,
                      border: '1.5px solid',
                      '&:hover': {
                        bgcolor: isActive ? cfg.color : `${cfg.color}18`,
                        opacity: 0.9,
                      },
                    }}
                  />
                )
              })}
            </Box>
          </Box>
        )}

        {/* Bubble size metric */}
        {(studyStatsSql || studyStatsRows != null) && (
          <Box sx={{ mb: 2.5 }}>
            <SidebarLabel>Bubble size</SidebarLabel>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              {(Object.keys(SIZE_METRIC_LABELS) as SizeMetric[]).map(m => (
                <Chip
                  key={m}
                  label={SIZE_METRIC_LABELS[m]}
                  size="small"
                  clickable
                  onClick={() => setSizeMetric(m)}
                  color={sizeMetric === m ? 'primary' : 'default'}
                  variant={sizeMetric === m ? 'filled' : 'outlined'}
                  sx={{ justifyContent: 'flex-start' }}
                />
              ))}
            </Box>
            {!statsLoading && !!studyStatsSql && statsData == null && (
              <Typography
                variant="caption"
                sx={{
                  fontSize: '0.65rem',
                  color: 'text.secondary',
                  mt: 0.75,
                  display: 'block',
                  lineHeight: 1.4,
                }}
              >
                Log in to enable usage metrics
              </Typography>
            )}
          </Box>
        )}

        {/* Color by attribute */}
        {studyColorSql && colorAttrMap.size > 0 && (
          <Box sx={{ mb: 2.5 }}>
            <SidebarLabel>Color by</SidebarLabel>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              <Chip
                label="Study"
                size="small"
                clickable
                onClick={() => setColorByAttr(false)}
                color={!colorByAttr ? 'primary' : 'default'}
                variant={!colorByAttr ? 'filled' : 'outlined'}
                sx={{ justifyContent: 'flex-start' }}
              />
              <Chip
                label={studyColorLabel ?? 'Attribute'}
                size="small"
                clickable
                onClick={() => setColorByAttr(true)}
                color={colorByAttr ? 'primary' : 'default'}
                variant={colorByAttr ? 'filled' : 'outlined'}
                sx={{ justifyContent: 'flex-start' }}
              />
            </Box>
            {colorByAttr && attrColorMap.size > 0 && (
              <Box
                sx={{
                  mt: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 0.5,
                }}
              >
                {[...attrColorMap.entries()].map(([attr, color]) => (
                  <Box
                    key={attr}
                    sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}
                  >
                    <Box
                      sx={{
                        width: 9,
                        height: 9,
                        borderRadius: '50%',
                        bgcolor: color,
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ fontSize: '0.7rem', lineHeight: 1.3 }}
                    >
                      {attr}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        )}

        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ fontSize: '0.68rem', lineHeight: 1.4, display: 'block' }}
        >
          Each bubble = one study
          <br />
          Red = shared by 2+ studies
          <br />
          Scroll to zoom · drag to pan
          <br />
          Hover for details
        </Typography>
      </Box>

      {/* Plot — takes all remaining width */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <NetworkPlot
          data={traces}
          layout={layout}
          config={{ displayModeBar: false, scrollZoom: true, responsive: true }}
          style={{ width: '100%', height }}
        />
      </Box>
    </Box>
  )
}

/** @deprecated Use SynapseResearchNetworkPlot */
export const SynapsePublicationNetworkPlot = (
  props: SynapsePublicationNetworkPlotProps,
): React.ReactNode => (
  <SynapseResearchNetworkPlot
    publicationSql={props.sql}
    additionalFilters={props.additionalFilters}
    maxStudies={props.maxStudies}
    height={props.height}
  />
)
