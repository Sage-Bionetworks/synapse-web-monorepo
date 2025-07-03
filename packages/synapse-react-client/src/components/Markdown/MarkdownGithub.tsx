import { useFileContent } from '@/synapse-queries/file/useFiles'
import { useLatestTag } from '@/synapse-queries/github/useGithub'
import { Box, Button, Container } from '@mui/material'
import { SkeletonParagraph } from '../Skeleton'
import MarkdownSynapse from './MarkdownSynapse'
import { useMemo, useState } from 'react'
import { replaceFileExtension } from '@/utils/functions/StringUtils'

export type MarkdownGithubProps = {
  repoOwner: string
  repoName: string
  filePath: string
  showDownloadButton?: boolean
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

const handleDownload = (htmlContent: string, outputFileHtmlName: string) => {
  if (!htmlContent) return

  // Wrap in full HTML document structure
  const fullHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>${outputFileHtmlName}</title>
        </head>
        <body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; line-height: 24px;">
          ${htmlContent}
        </body>
      </html>
    `

  // Create a Blob and a download link
  const blob = new Blob([fullHtml], { type: 'text/html' })
  const url = URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.href = url
  a.download = outputFileHtmlName
  a.click()

  URL.revokeObjectURL(url)
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
  showDownloadButton = false,
}: MarkdownGithubProps & {
  tagName?: string
}) {
  const [htmlContent, setHtmlContent] = useState<string | null | undefined>(
    null,
  )

  const outputFileHtmlName = useMemo(
    () => replaceFileExtension(filePath, 'html'),
    [filePath],
  )

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
      {showDownloadButton && htmlContent && (
        <Box
          sx={{
            display: 'flex',
            float: 'right',
            mt: '15px',
          }}
        >
          <Button
            variant={'outlined'}
            color="primary"
            sx={{ mb: 1 }}
            onClick={() => handleDownload(htmlContent, outputFileHtmlName)}
          >
            Download
          </Button>
        </Box>
      )}
      {fileContent ? (
        <MarkdownSynapse
          markdown={fileContent}
          onMarkdownProcessingDone={setHtmlContent}
        />
      ) : (
        loadingUI
      )}
    </Container>
  )
}

export default MarkdownGithub
