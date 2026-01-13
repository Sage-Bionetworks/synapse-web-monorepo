import SynapseClient from '@/synapse-client'
import { useGetDownloadListStatistics } from '@/synapse-queries/download/useDownloadList'
import { useGetFeatureFlag } from '@/synapse-queries/featureflags/useGetFeatureFlag'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { DeleteTwoTone } from '@mui/icons-material'
import { Button, Tooltip, Typography } from '@mui/material'
import { FeatureFlagEnum } from '@sage-bionetworks/synapse-types'
import { useEffect, useState } from 'react'
import { ErrorBanner } from '../error/ErrorBanner'
import FullWidthAlert from '../FullWidthAlert/FullWidthAlert'
import { HelpPopover } from '../HelpPopover/HelpPopover'
import IconSvg from '../IconSvg/IconSvg'
import { ProgrammaticInstructionsModal } from '../ProgrammaticInstructionsModal/ProgrammaticInstructionsModal'
import AvailableForDownloadTable from './AvailableForDownloadTable'
import { CreatePackageV2 } from './CreatePackageV2'
import { PYTHON_CLIENT_IMPORT_AND_LOGIN } from './DirectProgrammaticDownload'
import { DownloadAllFilesFromListButton } from './DownloadAllFilesFromListButton'
import {
  DownloadListActionsRequired,
  DownloadListActionsRequiredProps,
} from './DownloadListActionsRequired'

const pythonDownloadCode = `${PYTHON_CLIENT_IMPORT_AND_LOGIN}
dl_list_file_entities = syn.get_download_list()`

const cliDownloadCode = `synapse get-download-list`

/**
 * Show the Download Cart page.
 */
export function DownloadCartPage(props: DownloadListActionsRequiredProps) {
  const { accessToken } = useSynapseContext()
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0)
  const [isShowingCreatePackageUI, setIsShowingCreatePackageUI] =
    useState<boolean>(false)
  const [isShowingModal, setIsShowingModal] = useState<boolean>(false)
  const [isShowingDownloadSuccessAlert, setIsShowingDownloadSuccessAlert] =
    useState(false)
  const [error, setError] = useState<Error>()
  const isDownloadAllEnabled = useGetFeatureFlag(
    FeatureFlagEnum.DOWNLOAD_CART_INDIVIDUAL_FILE_DOWNLOADS,
  )
  const {
    data,
    isLoading,
    isError,
    error: newError,
    refetch,
  } = useGetDownloadListStatistics()
  useEffect(() => {
    if (isError && newError) {
      setError(newError)
    }
  }, [isError, newError])

  // SWC-5874: When arriving at the download cart when there are no ARs, the user should start in the Download list
  useEffect(() => {
    if (data && data.numberOfFilesRequiringAction == 0) {
      setSelectedTabIndex(1)
    }
  }, [data])

  if (error) {
    return <ErrorBanner error={error} />
  }
  const clearDownloadList = async () => {
    await SynapseClient.clearDownloadListV2(accessToken)
    refetch()
  }
  return (
    <div className="DownloadCartPage">
      <div>
        <div className="pageHeader">
          <div className="grid">
            <h3 className="pageHeaderTitle">Your Download Cart</h3>
            <Tooltip
              title="Immediately removes all items from your download cart"
              enterNextDelay={300}
              placement="right"
            >
              <Button
                onClick={() => {
                  clearDownloadList()
                }}
                variant="text"
                color="primary"
                startIcon={<DeleteTwoTone />}
              >
                Clear Your Download Cart
              </Button>
            </Tooltip>
          </div>
          <Typography
            className="description"
            variant="body1"
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          >
            Your added files can be found in the tabs below. Files requiring
            actions before download are listed in the Access Actions Required
            tab, while those ready for download can be found in the Download
            List tab.
          </Typography>
        </div>
      </div>
      <div className="tabs-container">
        <div className="container">
          <ul className="nav nav-tabs">
            <li
              className={`nav-item ${selectedTabIndex == 0 ? 'active' : ''}`}
              aria-selected={selectedTabIndex == 0}
            >
              <button onClick={() => setSelectedTabIndex(0)}>
                Access Actions Required
                {!isError && !isLoading && data && (
                  <span className="fileCount">
                    {data.totalNumberOfFiles -
                      data.numberOfFilesAvailableForDownload}
                  </span>
                )}
              </button>
            </li>
            <li
              className={`nav-item ${selectedTabIndex == 1 ? 'active' : ''}`}
              aria-selected={selectedTabIndex == 1}
            >
              <button onClick={() => setSelectedTabIndex(1)}>
                Download List
                {!isError && !isLoading && data && (
                  <span className="fileCount">
                    {data.numberOfFilesAvailableForDownload}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div
        style={{
          /*
           The DownloadListActionsRequired component stores actions in local state to track which actions are completed.

           Mount the actions required component and hide it with style to ensure actions stored in component state are persisted as the user switches tabs
           */
          display:
            selectedTabIndex == 0 && !isError && !isLoading && data
              ? 'block'
              : 'none',
        }}
      >
        {data?.numberOfFilesRequiringAction &&
          data.numberOfFilesRequiringAction > 0 && (
            // Unmount instead of hiding the DownloadListActionsRequired component when there are 0 actions required
            // The DownloadListActionsRequired cannot discern between a fulfilled action and an action that is no longer required because the
            // file was removed from the download cart.
            // In the typical case where the download cart is cleared, unmounting the component ensures that the actions are cleared out.
            <div>
              <div className="actionsRequiredContainer container">
                <DownloadListActionsRequired {...props} />
              </div>
            </div>
          )}
        {data?.numberOfFilesRequiringAction === 0 && (
          <div className="placeholder">
            <div>No actions are currently required.</div>
          </div>
        )}
      </div>

      {selectedTabIndex == 1 && !isError && !isLoading && data && (
        <div>
          {data.numberOfFilesAvailableForDownload > 0 && (
            <div className="DownloadListTabContent">
              <div className="subSectionOverviewContainer">
                <div className="subSectionOverview container">
                  <div>
                    <div className="headlineWithHelp">
                      <Typography variant={'headline3'} sx={{ mb: 2 }}>
                        <IconSvg icon="packagableFile" /> Web Download (.ZIP
                        Packages)
                      </Typography>
                      <HelpPopover
                        markdownText="This will allow you to create a .zip file that contains eligible files. Files greater that 100 MB, external links, or files which are not stored on Synapse native storage are ineligible. In most cases, ineligible files can be downloaded individually. External links will require navigation to an external site, which may require a separate login process."
                        helpUrl="https://help.synapse.org/docs/Downloading-Data-From-the-Synapse-UI.2004254837.html"
                      />
                    </div>
                    <Typography
                      variant={'body1'}
                      component={'div'}
                      sx={{
                        mb: 2,
                        display: { xs: 'none', md: 'block' },
                      }}
                    >
                      <ul>
                        <li>
                          Eligible files will be added to .ZIP packages of up to
                          1GB in size
                        </li>
                        <li>
                          If you have more than 1GB, you can create multiple
                          packages
                        </li>
                        <li>
                          Will only include files which are hosted on Synapse
                          native storage
                        </li>
                        <li>
                          Packages include a CSV manifest that contains file
                          annotations and other information for each file
                        </li>
                      </ul>
                    </Typography>
                    {data.numberOfFilesAvailableForDownloadAndEligibleForPackaging >
                      0 && (
                      <Button
                        variant="contained"
                        onClick={() => {
                          setIsShowingCreatePackageUI(true)
                        }}
                        startIcon={<IconSvg icon="download" wrap={false} />}
                      >
                        Download As .Zip Packages
                      </Button>
                    )}
                    {data.numberOfFilesAvailableForDownloadAndEligibleForPackaging ==
                      0 && (
                      <Tooltip
                        title="You cannot create a .zip package because there are no eligible files."
                        enterNextDelay={300}
                        placement="top"
                      >
                        <span>
                          <Button
                            variant="contained"
                            disabled
                            startIcon={<IconSvg icon="download" wrap={false} />}
                          >
                            Download As .Zip Packages
                          </Button>
                        </span>
                      </Tooltip>
                    )}
                  </div>
                  {isDownloadAllEnabled && (
                    <div>
                      <div className="headlineWithHelp">
                        <Typography variant={'headline3'} sx={{ mb: 2 }}>
                          <IconSvg icon="download" /> Download All Files
                          Individually
                        </Typography>
                        <HelpPopover
                          markdownText="This will trigger individual downloads for all files in your download list. The files will be removed from your list as they are downloaded."
                          helpUrl="https://help.synapse.org/docs/Downloading-Data-From-the-Synapse-UI.2004254837.html"
                        />
                      </div>
                      <Typography
                        variant={'body1'}
                        component={'div'}
                        sx={{
                          mb: 2,
                          display: { xs: 'none', md: 'block' },
                        }}
                      >
                        <ul>
                          <li>
                            Downloads all files individually through your
                            browser
                          </li>
                          <li>
                            Files are automatically removed from your download
                            list as they are downloaded
                          </li>
                          <li>
                            Works with all file types including external links
                          </li>
                        </ul>
                      </Typography>
                      <DownloadAllFilesFromListButton />
                    </div>
                  )}
                  <div>
                    <div className="headlineWithHelp">
                      <Typography variant={'headline3'} sx={{ mb: 2 }}>
                        <IconSvg icon="code" /> Programmatic Download
                      </Typography>
                      <HelpPopover
                        markdownText="This will provide syntax which you can enter into your programmatic client. It is suitable for large files (>100 MB), for packages > 1GB, and for files which aren’t stored on Synapse native storage (e.g. in a special AWS S3 or Google Cloud bucket).  External links will require navigation to an external site, which may require a separate login process."
                        helpUrl="https://help.synapse.org/docs/Downloading-Data-Programmatically.2003796248.html"
                      />
                    </div>
                    <Typography
                      variant={'body1'}
                      component={'div'}
                      sx={{
                        mb: 2,
                        display: { xs: 'none', md: 'block' },
                      }}
                    >
                      <ul>
                        <li>
                          Requires installation of a programmatic client (R,
                          Python, CLI)
                        </li>
                        <li>
                          No limit to the file size or the size of the package
                          that can be downloaded
                        </li>
                        <li>
                          Will include files which are hosted on and off Synapse
                          native storage
                        </li>
                        <li>
                          Packages include a CSV manifest that contains file
                          annotations and other information for each file
                        </li>
                      </ul>
                    </Typography>
                    <Button
                      variant="contained"
                      onClick={() => {
                        setIsShowingModal(true)
                      }}
                      startIcon={<IconSvg icon="code" wrap={false} />}
                    >
                      Create Programmatic Package
                    </Button>
                  </div>
                </div>
              </div>
              <div className="availableForDownloadTableContainer container">
                {isShowingCreatePackageUI && (
                  <CreatePackageV2
                    onPackageCreation={() => {
                      setIsShowingDownloadSuccessAlert(true)
                      // we refetch the data because the backend will instantly remove the downloadable files from the download list after a package has been created
                      refetch()
                    }}
                  />
                )}
                <AvailableForDownloadTable />
              </div>
            </div>
          )}
          {data.numberOfFilesAvailableForDownload === 0 && (
            <div className="placeholder">
              <div>Your Download Cart is currently empty.</div>
            </div>
          )}
        </div>
      )}
      <FullWidthAlert
        show={isShowingDownloadSuccessAlert}
        variant="success"
        title="Package Created"
        description="A package has been created with eligible files. The items contained in this .zip file have been removed from your list. If your package is over 1GB, you will need to create multiple packages."
        autoCloseAfterDelayInSeconds={10}
        onClose={() => {
          setIsShowingDownloadSuccessAlert(false)
        }}
      />
      {isShowingModal && (
        <ProgrammaticInstructionsModal
          show={true}
          onClose={() => setIsShowingModal(false)}
          title="Download Programmatically"
          pythonCode={pythonDownloadCode}
          cliCode={cliDownloadCode}
          // rCode={rDownloadCode}
        />
      )}
    </div>
  )
}

export default DownloadCartPage
