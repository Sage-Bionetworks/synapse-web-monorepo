import { useGetEntity } from '@/synapse-queries'
import { useAddFileToDownloadList } from '@/synapse-queries/download/useDownloadList'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { Link, Tooltip } from '@mui/material'
import IconSvg from './IconSvg/IconSvg'
import { displayToast } from './ToastMessage/ToastMessage'

export type AddToDownloadListV2Props = {
  entityId: string
  entityVersionNumber?: number
}

function AddToDownloadListV2(props: AddToDownloadListV2Props) {
  const { entityId, entityVersionNumber } = props
  const { accessToken } = useSynapseContext()
  const isAuthenticated = !!accessToken

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

  if (!isAuthenticated) {
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
