import { useQuery } from '@tanstack/react-query'
import { WordPressPost } from '../SynapseHomepageV2/WordPressNewsItem'

async function fetchWordPressPosts(
  wordpressSiteUrl: string,
  postCount: number,
): Promise<WordPressPost[]> {
  const url = new URL(`${wordpressSiteUrl}/wp-json/wp/v2/posts`)
  url.searchParams.set('per_page', String(postCount))
  url.searchParams.set('orderby', 'date')
  url.searchParams.set('order', 'desc')
  url.searchParams.set('_fields', 'id,date,link,title,excerpt,categories')
  const response = await fetch(url.toString())
  if (!response.ok) {
    throw new Error(`Failed to fetch WordPress posts: ${response.statusText}`)
  }
  return response.json() as Promise<WordPressPost[]>
}

export function useWordPressPosts(wordpressSiteUrl: string, postCount: number) {
  return useQuery({
    queryKey: ['wordpressPosts', wordpressSiteUrl, postCount],
    queryFn: () => fetchWordPressPosts(wordpressSiteUrl, postCount),
  })
}
