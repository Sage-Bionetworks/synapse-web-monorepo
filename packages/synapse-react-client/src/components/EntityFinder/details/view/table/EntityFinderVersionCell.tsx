'use no memo' // don't use react-compiler until MD5 test failure is resolved

import { useGetVersionsInfinite } from '@/synapse-queries/index'
import { isTableType } from '@/utils/functions/EntityTypeUtils'
import { Select } from '@mui/material'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { Reference } from '@sage-bionetworks/synapse-types'
import { CellContext } from '@tanstack/react-table'
import { useEffect } from 'react'
import IconSvg from '../../../../IconSvg/IconSvg'
import { VersionSelectionType } from '../../../VersionSelectionType'
import { EntityFinderTableViewRowData } from '../DetailsView'

function getLatestVersionText(
  versionSelection: VersionSelectionType,
  entityType: EntityType,
) {
  let versionDisplay = 'Latest'
  let snapshotDisplay = ''
  if (isTableType(entityType)) {
    if (entityType === EntityType.dataset) {
      versionDisplay = 'Draft'
      snapshotDisplay = 'Stable Version'
    } else {
      versionDisplay = 'Current'
      snapshotDisplay = 'Snapshot'
    }
  }

  if (versionSelection === VersionSelectionType.TRACKED) {
    return `Always ${versionDisplay} Version`
  } else if (versionSelection === VersionSelectionType.REQUIRED) {
    return (
      <>
        {versionDisplay}

        <IconSvg
          icon="helpOutlineTwoTone"
          label={`No ${snapshotDisplay} exists. The ${versionDisplay} version will be referenced until a new ${snapshotDisplay} is created.`}
          sx={{
            width: '12px',
            paddingLeft: '0.2rem',
          }}
        />
      </>
    )
  }

  return `${versionDisplay} Version`
}

type EntityFinderVersionCellProps = {
  context: CellContext<EntityFinderTableViewRowData, any>
  versionSelection: VersionSelectionType
  toggleSelection: (entity: Reference | Reference[]) => void
}

export function EntityFinderVersionCell(props: EntityFinderVersionCellProps) {
  const { context, toggleSelection, versionSelection } = props
  const { row } = context

  const {
    id,
    entityType,
    isVersionableEntity,
    isSelected,
    currentSelectedVersion,
  } = row.original

  const NO_VERSION_NUMBER_OPTION_VALUE = -1

  const { data: versionData } = useGetVersionsInfinite(id, {
    enabled: isVersionableEntity,
    staleTime: 60 * 1000, // 60 seconds
  })
  const versions = versionData?.pages.flatMap(page => page.results) ?? []

  useEffect(() => {
    // If VersionSelectionType.REQUIRED, and the user has selected this entity and hasn't selected a version, then we force a version selection
    if (
      isSelected &&
      versionSelection == VersionSelectionType.REQUIRED &&
      currentSelectedVersion == null &&
      versions.length > 0
    ) {
      toggleSelection({
        targetId: id,
        targetVersionNumber: versions[0].versionNumber,
      })
    }
  }, [
    currentSelectedVersion,
    id,
    isSelected,
    versionSelection,
    toggleSelection,
    versions,
  ])

  const showLatestVersion =
    versionSelection === VersionSelectionType.TRACKED ||
    (versionSelection === VersionSelectionType.UNTRACKED &&
      isTableType(entityType))

  const latestVersionText = getLatestVersionText(versionSelection, entityType)

  if (!isSelected || !isVersionableEntity) {
    return <></>
  }

  const currentSelectedVersionOptionValue =
    currentSelectedVersion ?? NO_VERSION_NUMBER_OPTION_VALUE

  return (
    <div>
      {versions && versions.length > 0 ? (
        <Select
          native
          fullWidth
          value={currentSelectedVersionOptionValue}
          onClick={event => {
            event.stopPropagation()
          }}
          sx={{ height: '30px' }}
          onChange={event => {
            event.stopPropagation()
            let version = event.target.value
            if (typeof version === 'string') {
              version = parseInt(version)
            }
            toggleSelection({
              targetId: id,
              targetVersionNumber:
                version === NO_VERSION_NUMBER_OPTION_VALUE
                  ? undefined
                  : version,
            })
          }}
        >
          {showLatestVersion && (
            <option value={NO_VERSION_NUMBER_OPTION_VALUE}>
              {latestVersionText}
            </option>
          )}
          {versions.map(version => {
            return (
              <option key={version.versionNumber} value={version.versionNumber}>
                Version {version.versionNumber}
              </option>
            )
          })}
        </Select>
      ) : (
        latestVersionText
      )}
    </div>
  )
}
