import { useMemo, useState } from 'react'
import { Box, Chip, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Link as RouterLink } from 'react-router'
import { TOPIC_TABLE_COLUMN_CONSTS as T } from '@/config/resources'

export type TopicRow = Record<string, string | null>

type Index = {
  byId: Record<string, TopicRow>
  // child id -> parent ids (parsed from each topic's subclass_of JSON)
  parentsOf: Record<string, string[]>
  // parent id -> child ids
  childrenOf: Record<string, string[]>
}

function parseJsonArray(value: string | null | undefined): string[] {
  if (!value) return []
  try {
    const parsed = JSON.parse(value)
    return Array.isArray(parsed) ? parsed.map(String) : []
  } catch {
    return []
  }
}

function buildIndex(topics: TopicRow[]): Index {
  const byId: Record<string, TopicRow> = {}
  const parentsOf: Record<string, string[]> = {}
  const childrenOf: Record<string, string[]> = {}
  for (const t of topics) {
    const id = t[T.ID]
    if (!id) continue
    byId[id] = t
  }
  for (const t of topics) {
    const id = t[T.ID]
    if (!id) continue
    const parents = parseJsonArray(t[T.SUBCLASS_OF]).filter(p => byId[p])
    parentsOf[id] = parents
    for (const p of parents) {
      ;(childrenOf[p] ??= []).push(id)
    }
  }
  // Sort children alphabetically by name
  for (const parent in childrenOf) {
    childrenOf[parent].sort((a, b) =>
      (byId[a]?.[T.NAME] ?? '').localeCompare(byId[b]?.[T.NAME] ?? ''),
    )
  }
  return { byId, parentsOf, childrenOf }
}

const COUNT_FIELDS: Array<{ key: string; label: string }> = [
  { key: T.PARENT_COUNT, label: 'parents' },
  { key: T.CHILD_COUNT, label: 'children' },
  { key: T.RELATED_TOPIC_COUNT, label: 'related topics' },
  { key: T.STANDARD_COUNT, label: 'standards' },
  { key: T.DATASET_COUNT, label: 'datasets' },
  { key: T.MANIFEST_COUNT, label: 'data parts' },
]

type RowProps = {
  topicId: string
  index: Index
  currentTopicId: string
  depth: number
  // To prevent infinite recursion in the DAG, track ancestor ids on the
  // path from the root. (Topics shouldn't form cycles, but we defend.)
  ancestorPath?: Set<string>
  defaultExpandedUp?: boolean
  defaultExpandedDown?: boolean
}

function CountBadges({ topic }: { topic: TopicRow }) {
  const items = COUNT_FIELDS.map(f => {
    const raw = topic[f.key]
    if (raw == null || raw === '') return null
    const n = Number(raw)
    if (!Number.isFinite(n)) return null
    return { ...f, n }
  }).filter(Boolean) as Array<{ key: string; label: string; n: number }>
  if (items.length === 0) return null
  return (
    <Stack direction="row" spacing={0.5} sx={{ flexWrap: 'wrap', gap: 0.5 }}>
      {items.map(it => (
        <Tooltip key={it.key} title={it.label}>
          <Chip
            size="small"
            label={`${it.n} ${it.label}`}
            variant="outlined"
            sx={{ height: 20, fontSize: '0.7rem' }}
          />
        </Tooltip>
      ))}
    </Stack>
  )
}

function TopicHierarchyRow({
  topicId,
  index,
  currentTopicId,
  depth,
  ancestorPath = new Set(),
  defaultExpandedUp = false,
  defaultExpandedDown = false,
}: RowProps) {
  const topic = index.byId[topicId]
  const [expandedUp, setExpandedUp] = useState(defaultExpandedUp)
  const [expandedDown, setExpandedDown] = useState(defaultExpandedDown)

  if (!topic) return null

  const isCurrent = topicId === currentTopicId
  const parents = index.parentsOf[topicId] ?? []
  const children = index.childrenOf[topicId] ?? []

  // Skip drawing a parent if it would create a cycle with already-rendered
  // ancestors on this branch of the render tree.
  const nextAncestorPath = new Set(ancestorPath)
  nextAncestorPath.add(topicId)

  const indent = depth * 24

  return (
    <Box>
      {expandedUp &&
        parents
          .filter(p => !ancestorPath.has(p))
          .map(parentId => (
            <TopicHierarchyRow
              key={`up-${parentId}`}
              topicId={parentId}
              index={index}
              currentTopicId={currentTopicId}
              depth={depth}
              ancestorPath={nextAncestorPath}
            />
          ))}

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          py: 0.5,
          pl: `${indent}px`,
          borderLeft: '2px solid',
          borderLeftColor: 'divider',
          ml: depth > 0 ? '8px' : 0,
          backgroundColor: isCurrent ? 'action.selected' : 'transparent',
          fontWeight: isCurrent ? 600 : 400,
        }}
      >
        <Tooltip
          title={
            parents.length === 0
              ? 'No parent topics'
              : expandedUp
                ? 'Hide parents'
                : `Show ${parents.length} parent${parents.length === 1 ? '' : 's'}`
          }
        >
          <span>
            <IconButton
              size="small"
              disabled={parents.length === 0}
              onClick={() => setExpandedUp(v => !v)}
              aria-label="toggle parents"
            >
              {expandedUp ? (
                <ExpandLessIcon fontSize="small" />
              ) : (
                <ExpandMoreIcon
                  fontSize="small"
                  sx={{ transform: 'rotate(180deg)' }}
                />
              )}
            </IconButton>
          </span>
        </Tooltip>

        <Tooltip
          title={
            children.length === 0
              ? 'No child topics'
              : expandedDown
                ? 'Hide children'
                : `Show ${children.length} child${children.length === 1 ? '' : 'ren'}`
          }
        >
          <span>
            <IconButton
              size="small"
              disabled={children.length === 0}
              onClick={() => setExpandedDown(v => !v)}
              aria-label="toggle children"
            >
              {expandedDown ? (
                <ExpandLessIcon
                  fontSize="small"
                  sx={{ transform: 'rotate(180deg)' }}
                />
              ) : (
                <ExpandMoreIcon fontSize="small" />
              )}
            </IconButton>
          </span>
        </Tooltip>

        {isCurrent ? (
          <Typography sx={{ fontWeight: 700 }}>{topic[T.NAME]}</Typography>
        ) : (
          <Typography
            component={RouterLink}
            to={`/Explore/DataTopic/DetailsPage?id=${encodeURIComponent(topicId)}`}
            sx={{
              color: 'primary.main',
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            {topic[T.NAME]}
          </Typography>
        )}

        <ChevronRightIcon sx={{ fontSize: 14, color: 'text.disabled' }} />
        <CountBadges topic={topic} />
      </Box>

      {expandedDown &&
        children
          .filter(c => !ancestorPath.has(c))
          .map(childId => (
            <TopicHierarchyRow
              key={`down-${childId}`}
              topicId={childId}
              index={index}
              currentTopicId={currentTopicId}
              depth={depth + 1}
              ancestorPath={nextAncestorPath}
            />
          ))}
    </Box>
  )
}

type WidgetProps = {
  topics: TopicRow[]
  currentTopicId: string
}

export default function TopicHierarchyWidget({
  topics,
  currentTopicId,
}: WidgetProps) {
  const index = useMemo(() => buildIndex(topics), [topics])

  if (!index.byId[currentTopicId]) {
    return (
      <Typography sx={{ color: 'text.secondary' }}>
        Topic not found in hierarchy.
      </Typography>
    )
  }

  return (
    <Box sx={{ fontSize: '0.95rem' }}>
      <TopicHierarchyRow
        topicId={currentTopicId}
        index={index}
        currentTopicId={currentTopicId}
        depth={0}
        defaultExpandedUp
        defaultExpandedDown
      />
    </Box>
  )
}
