import { useMemo } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { useTheme, useMediaQuery } from '@mui/material'
import { EntityBundleRow } from '../EntityTreeTable'
import { NameCell } from '../components/EntityNameCell'
import { IdCell } from '../components/IdCell'
import { IdColumnHeader } from '../components/IdColumnHeader'
import { ModifiedOnCell } from '../../EntityFinder/details/view/table/ModifiedOnCell'
import { ModifiedByCell } from '../../EntityFinder/details/view/table/ModifiedByCell'
import { CreatedOnCell } from '../../EntityFinder/details/view/table/CreatedOnCell'
import { FileEntitySizeCell } from '../../EntityFinder/details/view/table/FileEntitySizeCell'
import { FileEntityMD5Cell } from '../../EntityFinder/details/view/table/FileEntityMD5Cell'
import { AddFileToDownloadListCell } from '../../EntityFinder/details/view/table/AddToDownloadListCell'
import {
  NameColumnHeader,
  CreatedOnColumnHeader,
  ModifiedOnColumnHeader,
} from '../components/ColumnHeaders'
import { EntityBadgeIconsCell } from '../components/EntityBadgeIconsCell'

export const useTableColumns = (enableSorting: boolean) => {
  // Responsive design hooks
  const theme = useTheme()
  const isXtraLarge = useMediaQuery(theme.breakpoints.up('xl'))
  const isMediumAndUp = useMediaQuery(theme.breakpoints.up('md'))

  // Table columns
  const columns = useMemo<ColumnDef<EntityBundleRow>[]>(() => {
    const baseColumns: ColumnDef<EntityBundleRow>[] = [
      {
        accessorKey: 'entityHeader.name',
        id: 'name',
        header: NameColumnHeader,
        cell: NameCell,
        enableSorting: enableSorting,
        size: 450, // Default width for Name column
      },
    ]
    if (isMediumAndUp) {
      baseColumns.push({
        id: 'badges',
        header: '',
        cell: EntityBadgeIconsCell,
        enableSorting: false,
        size: 120, // Default width for Badges column
      })
      baseColumns.push({
        id: 'id',
        header: IdColumnHeader,
        cell: IdCell,
        enableSorting: false,
      })
    }
    if (isXtraLarge) {
      baseColumns.push({
        accessorKey: 'entityHeader.createdOn',
        id: 'createdOn',
        header: CreatedOnColumnHeader,
        cell: CreatedOnCell,
        enableSorting: enableSorting,
      })
    }

    if (isMediumAndUp) {
      baseColumns.push({
        accessorKey: 'entityHeader.modifiedOn',
        id: 'modifiedOn',
        header: ModifiedOnColumnHeader,
        cell: ModifiedOnCell,
        enableSorting: enableSorting,
      })
    }

    if (isXtraLarge) {
      baseColumns.push({
        id: 'modifiedBy',
        header: 'Modified By',
        cell: ModifiedByCell,
        enableSorting: false,
      })
    }

    if (isMediumAndUp) {
      baseColumns.push({
        id: 'size',
        header: 'Size',
        cell: FileEntitySizeCell,
        enableSorting: false,
      })
    }
    if (isXtraLarge) {
      baseColumns.push({
        id: 'md5',
        header: 'MD5',
        cell: FileEntityMD5Cell,
        enableSorting: false,
      })
    }

    baseColumns.push({
      id: 'download',
      header: 'Download',
      cell: AddFileToDownloadListCell,
      enableSorting: false,
      size: 90,
    })

    return baseColumns
  }, [enableSorting, isXtraLarge, isMediumAndUp])

  return columns
}
