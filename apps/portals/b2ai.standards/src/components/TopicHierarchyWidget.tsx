import { Box, Typography } from '@mui/material'
import { TOPIC_TABLE_COLUMN_CONSTS as T } from '@/config/resources'

export type TopicRow = Record<string, string | null>

type Props = {
  topics: TopicRow[]
  currentTopicId: string
}

// Placeholder for the hierarchy widget. The full boxless-DAG rendering will be
// implemented next; for now this just confirms the widget receives data so we
// can flesh out the rest of the details page.
export default function TopicHierarchyWidget({
  topics,
  currentTopicId,
}: Props) {
  const current = topics.find(t => t[T.ID] === currentTopicId)
  return (
    <Box
      sx={{
        border: '1px dashed',
        borderColor: 'divider',
        borderRadius: 1,
        p: 2,
        backgroundColor: 'action.hover',
      }}
    >
      <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
        Topic Hierarchy Widget — placeholder
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
        Current topic: <strong>{current?.[T.NAME] ?? currentTopicId}</strong>
        {' · '}
        {topics.length} topics loaded
      </Typography>
      <Typography
        variant="caption"
        sx={{ color: 'text.secondary', display: 'block', mt: 1 }}
      >
        Design mockup:{' '}
        <code>portal-planning-docs/topic-hierarchy-mock.html</code> (Part D).
      </Typography>
    </Box>
  )
}
