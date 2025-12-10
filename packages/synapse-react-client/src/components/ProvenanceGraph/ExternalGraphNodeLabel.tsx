import React from 'react'
import { useMemo } from 'react'
import { UsedURL } from '@sage-bionetworks/synapse-types'
import { Tooltip } from '@mui/material'
import { ProvenanceExternalIcon } from './ProvenanceExternalIcon'

export const ExternalGraphNodeLabel = (data: UsedURL): React.ReactNode => {
  return useMemo(
    () => (
      <>
        <div>
          <ProvenanceExternalIcon url={data.url} />
        </div>
        <Tooltip title={data.name} placement="top" enterNextDelay={300}>
          <a href={data.url} rel="noopener noreferrer">
            {data.name}
          </a>
        </Tooltip>
      </>
    ),
    [data.name, data.url],
  )
}
