import { Button, Chip } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useWordPressCategories } from './useWordPressCategories'
import { useWordPressPosts } from './useWordPressPosts'
import styles from './WordPressLatestPostChip.module.scss'

export type WordPressLatestPostChipProps = {
  wordpressSiteUrl: string
}

export function WordPressLatestPostChip({
  wordpressSiteUrl,
}: WordPressLatestPostChipProps) {
  const { data: posts } = useWordPressPosts(wordpressSiteUrl, 1)
  const { data: categories } = useWordPressCategories(wordpressSiteUrl)

  const post = posts?.[0]
  if (!post) return null

  const categoryName = categories?.find(c => c.id === post.categories[0])?.name

  return (
    <Button
      component="a"
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.chip}
      endIcon={<ArrowForwardIcon />}
    >
      <Chip label={categoryName} size="small" className={styles.categoryChip} />
      <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
    </Button>
  )
}
