import { useQuery } from '@tanstack/react-query'

export const fetchCitation = async (
  doi: string | undefined,
  format: string,
) => {
  const formattedDoi = doi ? doi.replace('https://doi.org/', '') : ''
  const response = await fetch(
    `https://citation.doi.org/format?doi=${formattedDoi}&style=${format}&lang=en-US`,
    {
      headers: {
        Accept: `text/x-${format}`,
      },
    },
  )
  if (!response.ok) {
    throw new Error(
      `Failed to fetch citation: ${response.status}: ${response.statusText}`,
    )
  }
  return await response.text()
}

export const useCitation = (doi: string, format: string, enabled: boolean) => {
  return useQuery({
    queryKey: ['citation', doi, format],
    queryFn: () => fetchCitation(doi, format),
    enabled: !!doi && !!format && enabled,
  })
}
