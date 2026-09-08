import { useQuery } from '@tanstack/react-query'
import { WordPressCategory } from '../SynapseHomepageV2/WordPressNewsItem'

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

export function useWordPressCategories(wordpressSiteUrl: string) {
  return useQuery({
    queryKey: ['wordpressCategories', wordpressSiteUrl],
    queryFn: () => fetchWordPressCategories(wordpressSiteUrl),
  })
}
