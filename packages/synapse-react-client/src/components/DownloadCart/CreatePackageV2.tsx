import {
  createPackageFromDownloadListV2,
  getFileHandleByIdURL,
} from '@/synapse-client/SynapseClient'
import React from 'react'
import { useSynapseContext } from '@/stores/SynapseContext/SynapseContext'
import { Box, Button, InputAdornment, TextField } from '@mui/material'
import { DownloadListPackageResponse } from '@sage-bionetworks/synapse-types'
import { ChangeEvent, SyntheticEvent, useState } from 'react'
import FullWidthAlert, {
  FullWidthAlertVariant,
} from '../FullWidthAlert/FullWidthAlert'

export type CreatePackageV2Props = {
  onPackageCreation: () => void
}

type AlertConfig = {
  message: string
  variant?: FullWidthAlertVariant
}

export const TEMPLATE_ERROR_FILE_NAME =
  'Please provide a package file name and try again.'

export const CreatePackageV2 = (
  props: CreatePackageV2Props,
): React.ReactNode => {
  const { accessToken } = useSynapseContext()
  const [isLoading, setIsLoading] = useState(false)
  const [fileName, setZipFileName] = useState('')
  const [alert, setAlert] = useState<AlertConfig>()
  const [bulkFileDownloadResponse, setBulkFileDownloadResponse] = useState<
    DownloadListPackageResponse | undefined
  >(undefined)
  const { onPackageCreation } = props
  const createPackageHandler = async (event: SyntheticEvent) => {
    event.preventDefault()
    if (!fileName) {
      setAlert({
        message: TEMPLATE_ERROR_FILE_NAME,
        variant: 'danger',
      })
      return
    }
    setIsLoading(true)
    try {
      const fileNameWithZipExtension = `${fileName}.zip`
      const currentBulkFileDownloadResponse =
        await createPackageFromDownloadListV2(
          fileNameWithZipExtension,
          accessToken,
        )

      setBulkFileDownloadResponse(currentBulkFileDownloadResponse)
      const { resultFileHandleId } = currentBulkFileDownloadResponse
      try {
        //reset
        window.location.href = await getFileHandleByIdURL(
          resultFileHandleId,
          accessToken,
        )
        setZipFileName('')
        setBulkFileDownloadResponse(undefined)
        onPackageCreation()
      } catch (err) {
        console.error('Err on getFileHandleByIdURL = ', err)
      }
    } catch (err) {
      setAlert({
        message: err.reason as string,
        variant: 'danger',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setZipFileName(event.target.value)
  }

  return (
    <>
      <div className="CreatePackageV2">
        <div className="createPackageStep">
          <span className="createPackageTitle">
            Create your Download Package
          </span>
          <span className="createPackageDescription">
            Name your download package and select Download Package to get
            started.
          </span>
          {!isLoading && !bulkFileDownloadResponse && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'stretch',
              }}
            >
              <TextField
                onChange={onChange}
                type="text"
                placeholder="PackageName"
                sx={{ width: '233px' }}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">.zip</InputAdornment>
                    ),
                  },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={e => {
                  createPackageHandler(e)
                }}
                sx={{ marginLeft: '20px' }}
                disabled={!fileName}
              >
                Download Package
              </Button>
            </Box>
          )}
          {isLoading && (
            <div className="creatingPackage">
              <span className="spinner" />
              <span style={{ marginLeft: 5 }}>Creating package...</span>
            </div>
          )}
        </div>
      </div>
      <FullWidthAlert
        show={!!alert}
        variant={alert?.variant ? alert.variant : 'success'}
        description={alert?.message}
        autoCloseAfterDelayInSeconds={10}
        onClose={() => {
          setAlert(undefined)
        }}
      />
    </>
  )
}
