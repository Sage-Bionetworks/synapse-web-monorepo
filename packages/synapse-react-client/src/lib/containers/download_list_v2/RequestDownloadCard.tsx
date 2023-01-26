import React, { useEffect } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { useGetEntityHeaders } from '../../utils/hooks/SynapseAPI/entity/useGetEntityHeaders'
import { EntityHeader } from '../../utils/synapseTypes'
import { Icon } from '../row_renderers/utils'
import { DOWNLOAD_PERMISSION_REQUIRED } from '../../utils/SynapseConstants'
import { Button } from 'react-bootstrap'
import { LoadingAccessRequirementCard } from './MeetAccessRequirementCard'
import { Typography } from '@mui/material'

export type RequestDownloadCardProps = {
  entityId: string
  count: number
  /** Invoked when a user clicks "View Sharing Settings" for a set of files that require the Download permission*/
  onViewSharingSettingsClicked: (benefactorId: string) => void
}

export const REQUEST_DOWNLOAD_TITLE = 'Download Permission Required'
export const RequestDownloadCard: React.FunctionComponent<
  RequestDownloadCardProps
> = ({
  entityId,
  count,
  onViewSharingSettingsClicked,
}: RequestDownloadCardProps) => {
  const handleError = useErrorHandler()
  const {
    data,
    isLoading,
    isError,
    error: newError,
  } = useGetEntityHeaders([{ targetId: entityId }])
  const entityHeader: EntityHeader | undefined = data?.results[0]
  useEffect(() => {
    if (isError && newError) {
      handleError(newError)
    }
  }, [isError, newError, handleError])

  return (
    <>
      {!isError && !isLoading && (
        <div className="RequestDownloadCart actionRequiredCard">
          <Icon type={DOWNLOAD_PERMISSION_REQUIRED} />
          <div className="metadata">
            <Typography variant="headline3" className="title">
              {REQUEST_DOWNLOAD_TITLE}
            </Typography>
            <div className="fileCount">{count} File(s)</div>
            <div className="description">
              You must be granted the download permission on{' '}
              <strong>{entityHeader?.name}</strong> in order to download this
              set of files.
            </div>
          </div>
          <div className="startButtonContainer">
            <Typography variant="smallText1" className="contactAdminNote">
              Contact an administrator to request download permission
            </Typography>
            <Button
              className="startButton"
              variant="outline-primary"
              onClick={() => {
                onViewSharingSettingsClicked(entityId)
              }}
            >
              View Sharing Settings
            </Button>
          </div>
        </div>
      )}
      {isLoading && <LoadingAccessRequirementCard />}
    </>
  )
}
