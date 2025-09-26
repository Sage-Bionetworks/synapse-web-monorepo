import React from 'react'
import { ModifiedOnCell as BaseModifiedOnCell } from '../../EntityFinder/details/view/table/ModifiedOnCell'
import { ModifiedByCell as BaseModifiedByCell } from '../../EntityFinder/details/view/table/ModifiedByCell'
import { CreatedOnCell as BaseCreatedOnCell } from '../../EntityFinder/details/view/table/CreatedOnCell'
import { FileEntitySizeCell as BaseFileEntitySizeCell } from '../../EntityFinder/details/view/table/FileEntitySizeCell'
import { FileEntityMD5Cell as BaseFileEntityMD5Cell } from '../../EntityFinder/details/view/table/FileEntityMD5Cell'
import { AddFileToDownloadListCell as BaseAddFileToDownloadListCell } from '../../EntityFinder/details/view/table/AddToDownloadListCell'

import { CellContext } from '@tanstack/react-table'
import { EntityBundleRow } from '../EntityTreeTable'
import { convertToEntityType } from '../../../utils/functions/EntityTypeUtils'

/**
 * Generic adapter function that transforms EntityBundleRow context to EntityFinderTableViewRowData context
 * This eliminates code duplication across all cell wrapper components
 */
function createCellAdapter<T extends React.ComponentType<any>>(
  BaseComponent: T,
) {
  return (context: CellContext<EntityBundleRow, unknown>) => {
    // Transform EntityBundleRow to match EntityFinderTableViewRowData format
    const adaptedContext = {
      ...context,
      row: {
        ...context.row,
        original: {
          ...context.row.original.entityHeader, // Spread EntityHeader properties
          entityId: context.row.original.entityId,
          versionNumber: context.row.original.versionNumber,
          entityType: convertToEntityType(
            context.row.original.entityHeader.type,
          ),
          isSelected: false,
          isDisabled: false,
          isVersionableEntity: false,
          currentSelectedVersion: undefined,
        },
      },
    } as any // Type assertion needed due to complex generic transformation

    return <BaseComponent {...adaptedContext} />
  }
}

// Create adapted cell components using the generic adapter
export const CreatedOnCell = createCellAdapter(BaseCreatedOnCell)
export const ModifiedOnCell = createCellAdapter(BaseModifiedOnCell)
export const ModifiedByCell = createCellAdapter(BaseModifiedByCell)
export const AddFileToDownloadListCell = createCellAdapter(
  BaseAddFileToDownloadListCell,
)
export const FileEntitySizeCell = createCellAdapter(BaseFileEntitySizeCell)
export const FileEntityMD5Cell = createCellAdapter(BaseFileEntityMD5Cell)
