import React from 'react'
import { HeaderContext } from '@tanstack/react-table'
import { EntityBundleRow } from '../EntityTreeTable'
import ColumnHeader from '../../TanStackTable/ColumnHeader'

export const NameColumnHeader: React.FC<
  HeaderContext<EntityBundleRow, unknown>
> = props => <ColumnHeader {...props} title={'Name'} />

export const CreatedOnColumnHeader: React.FC<
  HeaderContext<EntityBundleRow, unknown>
> = props => <ColumnHeader {...props} title={'Created On'} />

export const ModifiedOnColumnHeader: React.FC<
  HeaderContext<EntityBundleRow, unknown>
> = props => <ColumnHeader {...props} title={'Modified On'} />
