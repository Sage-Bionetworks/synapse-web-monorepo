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
import { CheckboxCell } from '../components/CheckboxCell'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'

export const useTableColumns = (
  enableSorting: boolean,
  showCheckboxColumn = false,
) => {
  // Responsive design hooks
  const theme = useTheme()
  const isXtraLarge = useMediaQuery(theme.breakpoints.up('xl'))
  const isMediumAndUp = useMediaQuery(theme.breakpoints.up('md'))

  // Table columns
  const columns = useMemo<ColumnDef<EntityBundleRow>[]>(() => {
    const baseColumns: ColumnDef<EntityBundleRow>[] = []

    if (showCheckboxColumn) {
      baseColumns.push({
        id: 'select',
        header: '',
        cell: CheckboxCell,
        enableSorting: false,
        size: 45,
        minSize: 45,
        maxSize: 45,
      })
    }

    baseColumns.push({
      accessorKey: 'entityHeader.name',
      id: 'name',
      header: NameColumnHeader,
      cell: NameCell,
      enableSorting: enableSorting,
      size: 600,
    })
    if (isMediumAndUp) {
      baseColumns.push({
        id: 'badges',
        header: '',
        cell: EntityBadgeIconsCell,
        enableSorting: false,
        enableResizing: false,
        size: 120,
      })
      baseColumns.push({
        id: 'id',
        header: IdColumnHeader,
        cell: IdCell,
        enableSorting: false,
        size: 110,
      })
    }
    if (isXtraLarge) {
      baseColumns.push({
        accessorKey: 'entityHeader.createdOn',
        id: 'createdOn',
        header: CreatedOnColumnHeader,
        cell: CreatedOnCell,
        enableSorting: enableSorting,
        size: 130,
      })
    }

    if (isMediumAndUp) {
      baseColumns.push({
        accessorKey: 'entityHeader.modifiedOn',
        id: 'modifiedOn',
        header: ModifiedOnColumnHeader,
        cell: ModifiedOnCell,
        enableSorting: enableSorting,
        size: 130,
      })
    }

    if (isXtraLarge) {
      baseColumns.push({
        id: 'modifiedBy',
        header: 'Modified By',
        cell: ModifiedByCell,
        enableSorting: false,
        size: 130,
      })
    }

    if (isMediumAndUp) {
      baseColumns.push({
        id: 'size',
        header: 'Size',
        cell: FileEntitySizeCell,
        enableSorting: false,
        size: 80,
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
      cell: props => (
        <AddFileToDownloadListCell
          {...props}
          downloadIcon={<PlaylistAddIcon />}
        />
      ),
      enableSorting: false,
      size: 90,
    })

    return baseColumns
  }, [enableSorting, isXtraLarge, isMediumAndUp, showCheckboxColumn])

  return columns
}
