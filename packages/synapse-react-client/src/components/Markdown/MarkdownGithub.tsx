import { useFileContent } from '@/synapse-queries/file/useFiles'
import { useLatestTag } from '@/synapse-queries/github/useGithub'
import { useTermsOfServiceInfo } from '@/synapse-queries/termsOfService/useTermsOfService'
import { Box, Container } from '@mui/material'
import { SkeletonParagraph } from '../Skeleton'
import MarkdownSynapse from './MarkdownSynapse'

export type MarkdownGithubProps = {
  repoOwner: string
  repoName: string
  filePath: string
}
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

/**
 * Loads the latest tagged version of the (presumably MD) file from GitHub
 * @returns
 */
export function MarkdownGithubLatestTag(props: MarkdownGithubProps) {
  const { repoOwner, repoName } = props
  const { data: latestTag } = useLatestTag(repoOwner, repoName)
  return <MarkdownGithub {...props} tagName={latestTag} />
}

/**
 * Load MD file content from GitHub (using the given tag)
 * @returns
 */
function MarkdownGithub({
  repoOwner,
  repoName,
  filePath,
  tagName,
}: MarkdownGithubProps & {
  tagName?: string
}) {
  const { data: fileContent } = useFileContent(
    `https://cdn.jsdelivr.net/gh/${repoOwner}/${repoName}@${tagName}/${filePath}`,
    {
      enabled: !!tagName,
    },
  )
  const loadingUI = (
    <Box sx={{ width: '100%' }}>
      <SkeletonParagraph rowHeight="30px" numRows={70} />
    </Box>
  )
  return (
    <Container
      sx={{
        '> .markdown': {
          px: '10px', //without this, numbered lists in the md overflow left (and are cut off)
        },
      }}
    >
      {fileContent ? <MarkdownSynapse markdown={fileContent} /> : loadingUI}
    </Container>
  )
}

export default MarkdownGithub
