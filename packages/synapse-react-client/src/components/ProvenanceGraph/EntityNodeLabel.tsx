import {
  convertToEntityType,
  isVersionableEntityType,
} from '@/utils/functions/EntityTypeUtils'
import React from 'react'
import { PRODUCTION_ENDPOINT_CONFIG } from '@/utils/functions/getEndpoint'
import { Link, Tooltip } from '@mui/material'
import { EntityHeader } from '@sage-bionetworks/synapse-types'
import { useMemo } from 'react'
import { ProvenanceEntityIcon } from './ProvenanceEntityIcon'

export const EntityNodeLabel = (data: EntityHeader): React.ReactNode => {
  const targetVersionNumberString = data.versionNumber
    ? `.${data.versionNumber}`
    : ''
  const entityVersionString = `${data.id}${targetVersionNumberString}`
  return useMemo(
    () => (
      <>
        <div>
          <ProvenanceEntityIcon entityHeader={data} />
        </div>
        <>
          <div>
            <Tooltip title={data.name} placement="top" enterNextDelay={300}>
              <Link
                href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}Synapse:${entityVersionString}`}
              >
                {data.name}
              </Link>
            </Tooltip>
          </div>
          {isVersionableEntityType(convertToEntityType(data.type)) && (
            <div>
              <div>v.{data.versionNumber}</div>
              {!data.isLatestVersion && <div>(old version)</div>}
            </div>
          )}
        </>
      </>
    ),
    [data, entityVersionString],
  )
}
