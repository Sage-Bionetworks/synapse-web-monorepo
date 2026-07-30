import React from 'react'
import { HeaderContext } from '@tanstack/react-table'
import { EntityBundleRow } from '../EntityTreeTable'
import ColumnHeader from '../../TanStackTable/ColumnHeader'
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded'

function renderSortIcon({ isSorted }: { isSorted: false | 'asc' | 'desc' }) {
  return (
    <ArrowDownwardRoundedIcon
      sx={{
        fontSize: '16px',
        transform: isSorted === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)',
      }}
    />
  )
}

export const NameColumnHeader: React.FC<
  HeaderContext<EntityBundleRow, unknown>
> = props => (
  <ColumnHeader
    {...props}
    title={'Name'}
    iconPlacement={'left'}
    sortIconRenderer={renderSortIcon}
  />
)

export const CreatedOnColumnHeader: React.FC<
  HeaderContext<EntityBundleRow, unknown>
> = props => (
  <ColumnHeader
    {...props}
    title={'Created On'}
    iconPlacement={'left'}
    iconSize="16px"
  />
)

export const ModifiedOnColumnHeader: React.FC<
  HeaderContext<EntityBundleRow, unknown>
> = props => (
  <ColumnHeader
    {...props}
    title={'Modified On'}
    iconPlacement={'left'}
    iconSize="16px"
  />
)
