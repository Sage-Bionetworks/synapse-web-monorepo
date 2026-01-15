import useGetQueryResultBundle from '@/synapse-queries/entity/useGetQueryResultBundle'
import { BUNDLE_MASK_QUERY_COUNT } from '@/utils/SynapseConstants'
import { parseEntityIdFromSqlStatement } from '@/utils/functions/SqlFunctions'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { Box, Button, ButtonProps } from '@mui/material'
import { NavigateNext } from '@mui/icons-material'
import React from 'react'
import { Link as RouterLink, useInRouterContext } from 'react-router'

export type QueryCountButtonProps = {
  /**
   * The SQL query to execute to get the count
   */
  sql: string
  /**
   * The target URL when the button is clicked
   */
  href: string
  /**
   * Text to display before the count (e.g., "Explore")
   */
  prefixText?: string
  /**
   * Text to display after the count (e.g., "files")
   */
  suffixText?: string
  /**
   * Additional MUI Button props
   */
} & Omit<ButtonProps, 'children'>

/**
 * A button component that displays text with an inline count.
 * The count is fetched by executing a SQL query against a Synapse table.
 * Example: "Explore 42 files"
 */
export function QueryCountButton(props: QueryCountButtonProps) {
  const { sql, href, prefixText = '', suffixText = '', ...buttonProps } = props
  const entityId = parseEntityIdFromSqlStatement(sql)
  const inRouterContext = useInRouterContext()

  const request: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    query: { sql },
    entityId,
    partMask: BUNDLE_MASK_QUERY_COUNT,
  }

  const { data: queryResult, isLoading } = useGetQueryResultBundle(request)

  const count = queryResult?.queryCount

  const isExternalLink =
    href?.startsWith('http://') || href?.startsWith('https://')

  // Determine the appropriate link props based on context
  let linkProps: Partial<ButtonProps> & { target?: string; to?: string } = {}

  if (isExternalLink) {
    linkProps = {
      href,
      target: '_blank',
      rel: 'noopener noreferrer',
      component: 'a',
    }
  } else if (inRouterContext) {
    // For internal links, if we are in a react-router context, use RouterLink
    linkProps = {
      to: href,
      component: RouterLink,
    }
  } else {
    linkProps = {
      href,
      component: 'a',
    }
  }

  // Build the button text: "prefixText count suffixText"
  const buttonText = React.useMemo(() => {
    const parts: string[] = []

    if (prefixText) {
      parts.push(prefixText)
    }

    if (!isLoading && count !== undefined) {
      parts.push(count.toLocaleString())
    }

    if (suffixText) {
      parts.push(suffixText)
    }

    return parts.join(' ')
  }, [prefixText, count, suffixText, isLoading])

  // Icon with theme-aware circular background
  const endIcon = (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'background.paper',
        borderRadius: '50%',
        width: 24,
        height: 24,
      }}
    >
      <NavigateNext sx={{ color: 'primary.main', fontSize: 20 }} />
    </Box>
  )

  return (
    <Button
      {...buttonProps}
      {...linkProps}
      endIcon={endIcon}
      loading={isLoading}
    >
      {buttonText}
    </Button>
  )
}

export default QueryCountButton
