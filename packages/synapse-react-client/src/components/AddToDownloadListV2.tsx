import React from 'react'
import { Link, Tooltip } from '@mui/material'
import { useSynapseContext } from '../utils/context/SynapseContext'
import { useAddFileToDownloadList } from '../synapse-queries/download/useDownloadList'
import { useGetEntity } from '../synapse-queries'
import { displayToast } from './ToastMessage/ToastMessage'
import IconSvg from './IconSvg/IconSvg'

export type AddToDownloadListV2Props = {
  entityId: string
  entityVersionNumber?: number
}

const AddToDownloadListV2: React.FunctionComponent<
  AddToDownloadListV2Props
> = props => {
  const { entityId, entityVersionNumber } = props
  const { accessToken } = useSynapseContext()
  const isLoggedIn = !!accessToken

  const { data: entity } = useGetEntity(entityId, entityVersionNumber)

  const { mutate: addToDownloadList } = useAddFileToDownloadList({
    onSuccess: () => {
      displayToast(
        `${
          entity?.name ?? entityId
        } was successfully added to your Download Cart.`,
        'success',
      )
    },
    onError: e => {
      displayToast(
        `Unable to add the file to your Download Cart. ${e.reason}`,
        'danger',
      )
    },
  })

  if (!isLoggedIn) {
    return <></>
  }

  return (
    <>
      <Tooltip
        title="Add this file to your Download Cart"
        placement="right"
        enterNextDelay={300}
      >
        <Link
          data-testid="AddToDownloadListV2"
          onClick={() => {
            addToDownloadList({ entityId, entityVersionNumber })
          }}
          className="ignoreLink"
        >
          <IconSvg icon={'addToCart'} />
        </Link>
      </Tooltip>
    </>
  )
}

export default AddToDownloadListV2
