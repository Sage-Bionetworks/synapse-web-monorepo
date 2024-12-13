import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import { useSynapseContext } from '../../utils/context/SynapseContext'
const GITHUB_API_URL = 'https://api.github.com/repos'

export function useLatestTag(
  repoOwner: string,
  repoName: string,
  options?: Partial<UseQueryOptions<string, SynapseClientError>>,
) {
  const { keyFactory } = useSynapseContext()
  const queryFn = async () => {
    const response = await fetch(
      `${GITHUB_API_URL}/${repoOwner}/${repoName}/tags`,
    )
    if (!response.ok) {
      throw new Error(`Error fetching tags: ${response.statusText}`)
    }
    const tags = await response.json()
    if (tags.length === 0) {
      throw new Error('No tags found.')
    }

    const latestTag = tags[0].name
    return latestTag
  }
  return useQuery<string, SynapseClientError>({
    ...options,
    queryKey: keyFactory.getGithubLatestTagKey(repoOwner, repoName),
    queryFn,
  })
}
