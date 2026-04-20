import { Box, Chip, Typography } from '@mui/material'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import styles from './HotdropsAndNews.module.scss'

dayjs.extend(relativeTime)

export type WordPressPost = {
  id: number
  date: string
  link: string
  title: { rendered: string }
  categories: number[]
}

export type WordPressCategory = {
  id: number
  name: string
  slug: string
}

export type WordPressNewsItemProps = {
  post: WordPressPost
  categoryName: string | undefined
}

export function WordPressNewsItem({
  post,
  categoryName,
}: WordPressNewsItemProps) {
  return (
    <Box
      onClick={() => {
        window.open(post.link, '_blank', 'noopener,noreferrer')
      }}
      className={styles.item}
    >
      <Box className={styles.itemContent}>
        <Typography
          variant="body1"
          sx={{ color: 'grey.900', fontSize: '16px' }}
          noWrap
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        <Typography variant="body1" sx={{ color: 'grey.700' }}>
          {dayjs(post.date).fromNow()}
        </Typography>
      </Box>
      <Box className={styles.itemAction}>
        {categoryName && (
          <Chip className={styles.chip} label={categoryName} color="primary" />
        )}
      </Box>
    </Box>
  )
}
