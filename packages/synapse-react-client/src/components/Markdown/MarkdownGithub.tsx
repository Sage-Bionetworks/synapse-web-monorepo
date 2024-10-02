import React from 'react'
import { SkeletonParagraph } from '../Skeleton'
import MarkdownSynapse from './MarkdownSynapse'
import { Box, Container } from '@mui/material'
import { useLatestTag } from '../../synapse-queries/github/useGithub'
import { useFileContent } from '../../synapse-queries/file/useFiles'

export type MarkdownGithubProps = {
  repoOwner: string
  repoName: string
  filePath: string
}
/**
 * Loads the version of the Governance Github Markdown file that the Synapse backend determines is the current version
 * @returns
 */
export const GovernanceMarkdownGithub: React.FunctionComponent<
  MarkdownGithubProps
> = props => {
  const { repoOwner, repoName } = props
  //TODO: replace with call to get latest ToS tag (from Synapse backend)
  const { data: tosTag } = useLatestTag(repoOwner, repoName)
  return <MarkdownGithub {...props} tagName={tosTag} />
}

/**
 * Loads the latest tagged version of the (presumably MD) file from GitHub
 * @returns
 */
export const MarkdownGithubLatestTag: React.FunctionComponent<
  MarkdownGithubProps
> = props => {
  const { repoOwner, repoName } = props
  const { data: latestTag } = useLatestTag(repoOwner, repoName)
  return <MarkdownGithub {...props} tagName={latestTag} />
}

/**
 * Loads the latest tagged version of the (presumably MD) file from GitHub
 * @returns
 */
const MarkdownGithub: React.FunctionComponent<
  MarkdownGithubProps & {
    tagName?: string
  }
> = ({ repoOwner, repoName, filePath, tagName }) => {
  const { data: fileContent } = useFileContent(
    `https://raw.githubusercontent.com/${repoOwner}/${repoName}/${tagName}/${filePath}`,
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
