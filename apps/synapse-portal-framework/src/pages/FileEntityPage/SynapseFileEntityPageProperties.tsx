import { Table, TableRow, TableCell, TableBody } from '@mui/material'
import { Entity } from '@sage-bionetworks/synapse-client'

type SynapseFileEntityPagePropertiesProps = {
  entity: Entity | undefined
}

const SynapseFileEntityPageProperties = ({
  entity,
}: SynapseFileEntityPagePropertiesProps) => {
  console.log('entity:', entity)

  if (!entity) {
    return
  }

  const selectedKeys = [
    { key: 'name', label: 'File Name' },
    { key: 'id', label: 'Synapse ID (SynID)' },
    { key: 'versionLabel', label: 'Version' },
  ]

  return (
    <div>
      <Table size="small">
        <TableBody>
          {selectedKeys.map(({ key, label }, index) => (
            <TableRow
              key={index}
              sx={{
                backgroundColor: index % 2 === 1 ? 'grey.100' : 'transparent',
              }}
            >
              <TableCell sx={{ border: 'none' }}>{label}</TableCell>
              <TableCell sx={{ border: 'none' }}>{entity[key]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default SynapseFileEntityPageProperties
