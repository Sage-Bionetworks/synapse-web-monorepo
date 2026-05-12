import { useQuery } from '@tanstack/react-query'
import { Box } from '@mui/material'
import {
  WordPressCategory,
  WordPressNewsItem,
  WordPressPost,
} from './WordPressNewsItem'
import styles from './HotdropsAndNews.module.scss'

export type WordPressNewsProps = {
  /** Base URL of the WordPress site, e.g. "https://news.adknowledgeportal.org" */
  wordpressSiteUrl: string
  /** Number of posts to display. Defaults to 10. */
  postCount?: number
  showCategoryChips?: boolean
  variant?: 'default' | 'adkp'
}

async function fetchWordPressPosts(
  wordpressSiteUrl: string,
  postCount: number,
): Promise<WordPressPost[]> {
  const url = new URL(`${wordpressSiteUrl}/wp-json/wp/v2/posts`)
  url.searchParams.set('per_page', String(postCount))
  url.searchParams.set('orderby', 'date')
  url.searchParams.set('order', 'desc')
  url.searchParams.set('_fields', 'id,date,link,title,categories')
  const response = await fetch(url.toString())
  if (!response.ok) {
    throw new Error(`Failed to fetch WordPress posts: ${response.statusText}`)
  }
  return response.json() as Promise<WordPressPost[]>
}

async function fetchWordPressCategories(
  wordpressSiteUrl: string,
): Promise<WordPressCategory[]> {
  const url = new URL(`${wordpressSiteUrl}/wp-json/wp/v2/categories`)
  url.searchParams.set('_fields', 'id,name,slug')
  const response = await fetch(url.toString())
  if (!response.ok) {
    throw new Error(
      `Failed to fetch WordPress categories: ${response.statusText}`,
    )
  }
  return response.json() as Promise<WordPressCategory[]>
}

export function WordPressNews({
  wordpressSiteUrl,
  postCount = 10,
  showCategoryChips = true,
  variant = 'default',
}: WordPressNewsProps) {
  const { data: posts } = useQuery({
    queryKey: ['wordpressPosts', wordpressSiteUrl, postCount],
    queryFn: () => fetchWordPressPosts(wordpressSiteUrl, postCount),
  })

  const { data: categories } = useQuery({
    queryKey: ['wordpressCategories', wordpressSiteUrl],
    queryFn: () => fetchWordPressCategories(wordpressSiteUrl),
  })

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
        />
      ))}
    </Box>
  )
}
