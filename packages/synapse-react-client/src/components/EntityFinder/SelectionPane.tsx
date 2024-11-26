import { Clear } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import useGetEntityBundle from '../../synapse-queries/entity/useEntityBundle'
import { Reference } from '@sage-bionetworks/synapse-types'
import { Typography } from '@mui/material'
import { EntityTypeIcon } from '../EntityIcon'
import { NO_VERSION_NUMBER } from './EntityFinder'
import { Map } from 'immutable'
import { Skeleton } from '@mui/material'
import { Tooltip } from '@mui/material'
import { TOOLTIP_DELAY_SHOW } from '../SynapseTable/SynapseTableConstants'

export type SelectionPaneProps = {
  title: string | ((count: number) => string)
  selectedEntities: Map<string, number>
  toggleSelection: (entity: Reference) => void
}

export const SelectionPane: React.FC<SelectionPaneProps> = ({
  title,
  selectedEntities,
  toggleSelection,
}: SelectionPaneProps) => {
  if (typeof title === 'function') {
    title = title(selectedEntities.size)
  }
  return (
    <div className="EntityFinderSelectionPane alert alert-warning">
      <Typography variant={'headline3'} display={'inline'}>
        {title}
      </Typography>
      {selectedEntities.size <= 200 ? (
        <div className={'EntityFinderSelectionPane__Items'}>
          {Array.from(selectedEntities.keys()).map(id => {
            const version = selectedEntities.get(id)
            return (
              <div
                key={`${id}${
                  version !== NO_VERSION_NUMBER ? `.${version}` : ''
                }`}
              >
                <EntityPathDisplay
                  entity={{
                    targetId: id,
                    targetVersionNumber:
                      version !== NO_VERSION_NUMBER ? version : undefined,
                  }}
                  toggleSelection={toggleSelection}
                ></EntityPathDisplay>
              </div>
            )
          })}
        </div>
      ) : (
        <Typography variant="smallText1">
          Too many items to show here
        </Typography>
      )}
    </div>
  )
}

const EntityPathDisplay: React.FunctionComponent<{
  entity: Reference
  toggleSelection: (entity: Reference) => void
}> = ({ entity, toggleSelection }) => {
  const { data: bundle } = useGetEntityBundle(
    entity.targetId,
    entity.targetVersionNumber,
  )

  const [entityName, setEntityName] = useState('')
  const [fullPath, setFullPath] = useState('')
  const [displayedPath, setDisplayedPath] = useState('')

  useEffect(() => {
    if (bundle?.path?.path) {
      const header = bundle.path.path[bundle.path.path.length - 1]
      setEntityName(header.name ?? header.id)
      const path = bundle.path.path.slice(1, bundle.path.path.length - 1) // drop the first element, which is always syn4489 "root"
      setFullPath(path.map(header => header.name).join('/'))
      if (path.length < 4) {
        // Show the full path from project to entity
        setDisplayedPath(fullPath)
      } else {
        const projectName: string = path[0].name
        // Truncate the path, showing only project, parent, and self
        setDisplayedPath(
          projectName + // Project
            '/…/' +
            path
              .slice(path.length - 1) // drop everything except parent and self
              .map(header => header.name)
              .join('/'),
        )
      }
    }
  }, [bundle, fullPath])

  return (
    <div className="EntityFinderSelectionPane__Row">
      {bundle && (
        <EntityTypeIcon className="EntityIcon" type={bundle.entityType} />
      )}
      <Tooltip
        title={`${fullPath}/${entityName}`}
        enterNextDelay={TOOLTIP_DELAY_SHOW}
        placement="top"
      >
        <span>{displayedPath ? displayedPath + '/' : ''}</span>
      </Tooltip>
      {entityName ? (
        <span className="EntityFinderSelectionPane__Row__EntityName">
          {entityName}
        </span>
      ) : (
        <Skeleton width={500} />
      )}
      {entity.targetVersionNumber && (
        <span> (Version {entity.targetVersionNumber})</span>
      )}
      <Clear
        className="EntityFinderSelectionPane__Row__DeselectButton"
        onClick={() => {
          toggleSelection(entity)
        }}
      />
    </div>
  )
}
