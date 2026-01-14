import useGetQueryResultBundle from '@/synapse-queries/entity/useGetQueryResultBundle'
import { BUNDLE_MASK_QUERY_COUNT } from '@/utils/SynapseConstants'
import { parseEntityIdFromSqlStatement } from '@/utils/functions/SqlFunctions'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { Box, Button, ButtonProps } from '@mui/material'
import { NavigateNext } from '@mui/icons-material'
import React from 'react'

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

  const request: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    query: { sql },
    entityId,
    partMask: BUNDLE_MASK_QUERY_COUNT,
  }

  const { data: queryResult, isLoading } = useGetQueryResultBundle(request)

  const count = queryResult?.queryCount

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonProps.onClick) {
      buttonProps.onClick(event)
    }
    if (href && !event.defaultPrevented) {
      window.location.href = href
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

  // Icon with white circular background
  const endIcon = (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
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
      onClick={handleClick}
      disabled={isLoading || buttonProps.disabled}
      endIcon={endIcon}
    >
      {buttonText}
    </Button>
  )
}

export default QueryCountButton
