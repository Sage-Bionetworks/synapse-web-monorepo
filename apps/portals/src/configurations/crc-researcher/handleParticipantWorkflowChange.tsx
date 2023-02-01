import {
  PartialRow,
  TableUpdateTransactionRequest,
} from 'synapse-react-client/dist/utils/synapseTypes/Table/TableUpdate'
import {
  Row,
  QueryResultBundle,
} from 'synapse-react-client/dist/utils/synapseTypes'
import { SynapseClient } from 'synapse-react-client'

type CustomControlCallbackData = {
  data: QueryResultBundle | undefined
  selectedRowIndices: number[] | undefined
  refresh: () => void
}

const handleParticipantWorkflowChange = async (
  event: CustomControlCallbackData,
  newWorkflowState: string,
) => {
  // Demo custom control updates all values in a particular column for the selected rows (CRC)
  // test Updating a Synapse Table for the first time from SRC, by updating the WorkflowState column value
  const entityId: string = event.data?.queryResult!.queryResults.tableId!
  // find target column
  const targetColumn = event.data?.columnModels!.find(
    (cm: any) => cm.name === 'WorkflowState',
  )
  // collect all selected rows (create PartialRow objects)
  const rowUpdates: PartialRow[] = []
  const rows: Row[] = event.data?.queryResult!.queryResults!.rows!
  for (let index = 0; index < event.selectedRowIndices!.length; index++) {
    rowUpdates.push({
      rowId: rows[event.selectedRowIndices![index]].rowId!,
      values: [
        {
          key: targetColumn?.id!,
          value: newWorkflowState,
        },
      ],
    })
  }

  const request: TableUpdateTransactionRequest = {
    concreteType:
      'org.sagebionetworks.repo.model.table.TableUpdateTransactionRequest',
    entityId,
    changes: [
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.AppendableRowSetRequest',
        entityId,
        toAppend: {
          concreteType: 'org.sagebionetworks.repo.model.table.PartialRowSet',
          tableId: entityId,
          rows: rowUpdates,
        },
      },
    ],
  }
  const token = await SynapseClient.getAccessTokenFromCookie()
  SynapseClient.updateTable(request, token)
    .then(() => {
      // refresh data after successful update
      event.refresh()
    })
    .catch((err) => {
      console.error(err)
    })
}

export default handleParticipantWorkflowChange
