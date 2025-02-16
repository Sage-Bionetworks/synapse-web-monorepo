import { EntityLink, EntityLinkProps } from '../../EntityLink'
import { useGetEntityHeaders } from '../../../synapse-queries'
import { Stack } from '@mui/material'

export type EntityIdListProps = {
  entityIdList: string[]
} & Omit<EntityLinkProps, 'entity' | 'versionNumber'>

function EntityIdList(props: EntityIdListProps) {
  const { entityIdList, ...rest } = props

  const { data: entityHeaders } = useGetEntityHeaders(
    entityIdList.map(id => ({ targetId: id })),
    {},
  )

  return (
    <Stack gap={1}>
      {entityHeaders?.results.map(header => (
        <EntityLink key={header.id} entity={header} {...rest} />
      ))}
    </Stack>
  )
}

export default EntityIdList
