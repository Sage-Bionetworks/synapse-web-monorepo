import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import {
  createPackageFromDownloadListV2,
  getFileHandleByIdURL,
} from '../../utils/SynapseClient'
import { useSynapseContext } from '../../utils/SynapseContext'
import { DownloadListPackageResponse } from '../../utils/synapseTypes/DownloadListV2/DownloadListPackageResponse'
import FullWidthAlert from '../FullWidthAlert'

export type CreatePackageV2Props = {
  onPackageCreation: () => void
}

type AlertConfig = {
  message: string
  variant?: string
}

export const TEMPLATE_ERROR_FILE_NAME =
  'Please provide a package file name and try again.'

export const CreatePackageV2 = (props: CreatePackageV2Props) => {
  const { accessToken } = useSynapseContext()
  const [isLoading, setIsLoading] = useState(false)
  const [fileName, setZipFileName] = useState('')
  const [alert, setAlert] = useState<AlertConfig>()
  const [bulkFileDownloadResponse, setBulkFileDownloadResponse] = useState<
    DownloadListPackageResponse | undefined
  >(undefined)
  const { onPackageCreation } = props
  const createPackageHandler = async (event: React.SyntheticEvent) => {
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

  const onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setZipFileName(event.currentTarget.value)
  }

  return (
    <>
      <div className="CreatePackageV2 bootstrap-4-backport">
        <div className="createPackageStep">
          <span className="createPackageTitle">
            Create your Download Package
          </span>
          <span className="createPackageDescription">
            Name your download package and select Download Package to get
            started.
          </span>
          {!isLoading && !bulkFileDownloadResponse && (
            <div className="inputAndCreateButton">
              <input
                onChange={onChange}
                type="text"
                placeholder="PackageName"
                style={{ width: '233px' }}
              ></input>
              <span className="zipUI">.zip</span>
              <Button
                variant={fileName ? 'primary' : 'dark'}
                onClick={e => {
                  createPackageHandler(e)
                }}
                type="button"
                style={{ marginLeft: 20 }}
                disabled={fileName ? false : true}
              >
                Download Package
              </Button>
            </div>
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
