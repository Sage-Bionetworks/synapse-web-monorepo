import React, { useMemo } from 'react'
import {
  isVersionableEntityType,
  convertToEntityType,
} from '../../utils/functions/EntityTypeUtils'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'
import { EntityHeader } from '@sage-bionetworks/synapse-types'
import { Link, Tooltip } from '@mui/material'
import { ProvenanceEntityIcon } from './ProvenanceEntityIcon'

export const EntityNodeLabel = (data: EntityHeader) => {
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
