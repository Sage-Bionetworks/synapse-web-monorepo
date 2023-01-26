import React, { useMemo } from 'react'
import {
  isVersionableEntityType,
  convertToEntityType,
} from '../../utils/functions/EntityTypeUtils'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'
import { EntityHeader } from '../../utils/synapseTypes'
import { Tooltip } from '@mui/material'
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
              <a
                href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Synapse:${entityVersionString}`}
              >
                {data.name}
              </a>
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
