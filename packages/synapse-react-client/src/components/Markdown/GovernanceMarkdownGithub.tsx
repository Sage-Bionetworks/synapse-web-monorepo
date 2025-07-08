import { useTermsOfServiceInfo } from '@/synapse-queries/termsOfService/useTermsOfService'
import MarkdownGithub, { MarkdownGithubProps } from './MarkdownGithub'

/**
 * Loads the version of the Governance Github Markdown file that the Synapse backend determines is the current version
 * @returns
 */
export function GovernanceMarkdownGithub(props: MarkdownGithubProps) {
  //Get latest ToS tag (from Synapse backend)
  const { data } = useTermsOfServiceInfo()
  const tosTag = data?.latestTermsOfServiceVersion
  return <MarkdownGithub {...props} tagName={tosTag} />
}

export default GovernanceMarkdownGithub
