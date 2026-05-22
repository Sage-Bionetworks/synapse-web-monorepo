import { useMemo } from 'react'
import { TOPIC_TABLE_COLUMN_CONSTS as T } from '@/config/resources'
import HierarchyWidget, { type Node } from './HierarchyWidget'
import { topicHref } from '../TopicHierarchyShared'

export type TopicRow = Record<string, string | null>

type LinkedItem = { id: string; name?: string }

function parseJsonArray(value: string | null | undefined): LinkedItem[] {
  if (!value) return []
  try {
    const parsed = JSON.parse(value)
    return Array.isArray(parsed) ? (parsed as LinkedItem[]) : []
  } catch {
    return []
  }
}

function topicsToNodes(topics: TopicRow[]): Node[] {
  return topics
    .filter(t => !!t[T.ID])
    .map(t => ({
      id: t[T.ID] as string,
      name: t[T.NAME] ?? (t[T.ID] as string),
      parentIds: parseJsonArray(t[T.PARENT_TOPICS_JSON]).map(p => p.id),
    }))
}

type Props = {
  topics: TopicRow[]
  currentTopicId: string
}

export default function TopicHierarchyWidget({
  topics,
  currentTopicId,
}: Props) {
  const nodes = useMemo(() => topicsToNodes(topics), [topics])
  return (
    <HierarchyWidget
      nodes={nodes}
      chosenNodeId={currentTopicId}
      getHref={topicHref}
    />
  )
}
