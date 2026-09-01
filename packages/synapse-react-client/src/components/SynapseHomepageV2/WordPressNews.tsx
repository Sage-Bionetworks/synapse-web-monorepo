import { Box } from '@mui/material'
import { useWordPressCategories } from '../WordPress/useWordPressCategories'
import { useWordPressPosts } from '../WordPress/useWordPressPosts'
import { WordPressNewsItem } from './WordPressNewsItem'
import styles from './HotdropsAndNews.module.scss'

export type WordPressNewsProps = {
  /** Base URL of the WordPress site, e.g. "https://news.adknowledgeportal.org" */
  wordpressSiteUrl: string
  /** Number of posts to display. Defaults to 10. */
  postCount?: number
  showCategoryChips?: boolean
  showDescription?: boolean
  variant?: 'adkp'
}

export function WordPressNews({
  wordpressSiteUrl,
  postCount = 10,
  showCategoryChips = true,
  showDescription = false,
  variant,
}: WordPressNewsProps) {
  const { data: posts } = useWordPressPosts(wordpressSiteUrl, postCount)
  const { data: categories } = useWordPressCategories(wordpressSiteUrl)

  const categoryMap = new Map<number, string>(
    (categories ?? []).map(c => [c.id, c.name]),
  )

  if (!posts || posts.length === 0) {
    return <></>
  }

  return (
    <Box
      className={`${styles.container}${
        variant === 'adkp' ? ` ${styles.adkpVariant}` : ''
      }`}
      sx={{ color: 'primary.100' }}
    >
      {posts.map(post => (
        <WordPressNewsItem
          key={post.id}
          post={post}
          categoryName={categoryMap.get(post.categories[0])}
          showCategoryChip={showCategoryChips}
          showDescription={showDescription}
        />
      ))}
    </Box>
  )
}
