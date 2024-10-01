import React, { useEffect, useState } from 'react'
import { SkeletonParagraph } from '../Skeleton'
import MarkdownSynapse from './MarkdownSynapse'
import { Box } from '@mui/material'
import { useLatestTag } from '../../synapse-queries/github/useGithub'

export type MarkdownGithubProps = {
  repoOwner: string
  repoName: string
  filePath: string
}

/**
 * Loads the latest tagged version of the (presumably MD) file from GitHub
 * @returns
 */
export const MarkdownGithub: React.FunctionComponent<MarkdownGithubProps> = ({
  repoOwner,
  repoName,
  filePath,
}) => {
  const [fileContent, setFileContent] = useState<string | undefined>(undefined)
  const { data: latestTag } = useLatestTag(repoOwner, repoName)

  useEffect(() => {
    const fetchFileContent = async () => {
      if (latestTag) {
        try {
          // Fetch the raw file contents from the latest tag
          const fileUrl = `https://raw.githubusercontent.com/${repoOwner}/${repoName}/${latestTag}/${filePath}`
          const fileResponse = await fetch(fileUrl)
          if (!fileResponse.ok) {
            throw new Error(`Error fetching file: ${fileResponse.statusText}`)
          }

          const content = await fileResponse.text()
          setFileContent(content)
        } catch (error) {
          console.error(error)
        }
      }
    }

    fetchFileContent()
  }, [repoOwner, repoName, latestTag])

  const loadingUI = (
    <Box sx={{ width: '100%' }}>
      <SkeletonParagraph rowHeight="30px" numRows={70} />
    </Box>
  )
  return (
    <Box
      sx={{
        display: 'flex',
        maxWidth: '1100px',
        alignItems: 'center',
        justifyContent: 'center',
        p: { xs: '5px', sm: '30px' },
        ml: { xs: '5px', md: 'auto' },
        mr: { xs: '5px', md: 'auto' },
        '> .markdown': {
          p: '5px',
        },
      }}
    >
      {fileContent ? <MarkdownSynapse markdown={fileContent} /> : loadingUI}
    </Box>
  )
}
