import styles from './DownloadCartPage.module.scss'
import SynapseClient from '@/synapse-client'
import { useGetDownloadListStatistics } from '@/synapse-queries/download/useDownloadList'
import { useGetFeatureFlag } from '@/synapse-queries/featureflags/useGetFeatureFlag'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { DeleteTwoTone } from '@mui/icons-material'
import { Button, Tooltip, Typography } from '@mui/material'
import {
  AvailableFilter,
  FeatureFlagEnum,
  FilesStatisticsResponse,
} from '@sage-bionetworks/synapse-types'
import { useEffect, useRef, useState } from 'react'
import { ErrorBanner } from '../error/ErrorBanner'
import FullWidthAlert from '../FullWidthAlert/FullWidthAlert'
import IconSvg from '../IconSvg/IconSvg'
import { ProgrammaticInstructionsModal } from '../ProgrammaticInstructionsModal/ProgrammaticInstructionsModal'
import AvailableForDownloadTable from './AvailableForDownloadTable'
import { CreatePackageV2 } from './CreatePackageV2'
import { PYTHON_CLIENT_IMPORT_AND_LOGIN } from './DirectProgrammaticDownload'
import { calculateFriendlyFileSize } from '@/utils/functions/calculateFriendlyFileSize'
import { DownloadIneligibleForPackagingFilesFromListButton } from './DownloadIneligibleForPackagingFilesFromListButton'
import {
  DownloadListActionsRequired,
  DownloadListActionsRequiredProps,
} from './DownloadListActionsRequired'
import ComponentCollapse from '../ComponentCollapse'

const pythonDownloadCode = `${PYTHON_CLIENT_IMPORT_AND_LOGIN}
dl_list_file_entities = syn.get_download_list()`

const cliDownloadCode = `synapse get-download-list`

const filterTabs: { label: string; filter: AvailableFilter }[] = [
  { label: 'All Files', filter: undefined },
  { label: 'Files included in ZIP', filter: 'eligibleForPackaging' },
  { label: 'Files not included in ZIP', filter: 'ineligibleForPackaging' },
]

/**
 * Show the Download Cart page.
 */
export function DownloadCartPage(props: DownloadListActionsRequiredProps) {
  const { accessToken } = useSynapseContext()
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0)
  const [selectedFilterTabIndex, setSelectedFilterTabIndex] =
    useState<number>(0)
  const selectedFilter = filterTabs[selectedFilterTabIndex].filter
  const [isShowingCreatePackageUI, setIsShowingCreatePackageUI] =
    useState<boolean>(false)
  const createPackageRef = useRef<HTMLDivElement>(null)
  // scroll to the CreatePackageV2 component when it is shown so that the user is aware of the next steps after clicking the button to create a package
  useEffect(() => {
    if (isShowingCreatePackageUI) {
      createPackageRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }, [isShowingCreatePackageUI])
  const [isShowingModal, setIsShowingModal] = useState<boolean>(false)
  const [isShowingDownloadSuccessAlert, setIsShowingDownloadSuccessAlert] =
    useState(false)
  const [error, setError] = useState<Error>()
  const isDownloadAllEnabled = useGetFeatureFlag(
    FeatureFlagEnum.DOWNLOAD_CART_INELIGIBLE_FILE_DOWNLOADS,
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

  const getFilterCount = (
    data: FilesStatisticsResponse,
    filter: AvailableFilter,
  ) => {
    if (filter === undefined) return data.numberOfFilesAvailableForDownload
    if (filter === 'eligibleForPackaging')
      return data.numberOfFilesAvailableForDownloadAndEligibleForPackaging
    return (
      data.numberOfFilesAvailableForDownload -
      data.numberOfFilesAvailableForDownloadAndEligibleForPackaging
    )
  }
  // SWC-5874: When arriving at the download cart when there are no ARs, the user should start in the Download list
  useEffect(() => {
    if (data && data.numberOfFilesRequiringAction == 0) {
      setSelectedTabIndex(1)
    }
    // also hide the Create Package UI if there are no files available for download
    if (
      data &&
      data.numberOfFilesAvailableForDownloadAndEligibleForPackaging === 0
    ) {
      setIsShowingCreatePackageUI(false)
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
    <div className={styles.DownloadCartPage}>
      <div>
        <div className={`${styles.pageHeader}`}>
          <div className="container">
            <div className={styles.grid}>
              <h3 className="pageHeaderTitle">Your Download List</h3>
              <Tooltip
                title="Immediately removes all items from your download list"
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
                  Clear Your Download List
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tabsContainer}>
        <div className="container">
          <ul className={styles.navTabs}>
            <li
              className={`${styles.navItem}${
                selectedTabIndex == 0 ? ` ${styles.active}` : ''
              }`}
              aria-selected={selectedTabIndex == 0}
            >
              <button onClick={() => setSelectedTabIndex(0)}>
                Access Actions Required
                {!isError && !isLoading && data && (
                  <span className={styles.fileCount}>
                    {data.totalNumberOfFiles -
                      data.numberOfFilesAvailableForDownload}
                  </span>
                )}
              </button>
            </li>
            <li
              className={`${styles.navItem}${
                selectedTabIndex == 1 ? ` ${styles.active}` : ''
              }`}
              aria-selected={selectedTabIndex == 1}
            >
              <button onClick={() => setSelectedTabIndex(1)}>
                Download List
                {!isError && !isLoading && data && (
                  <span className={styles.fileCount}>
                    {data.numberOfFilesAvailableForDownload}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={
          /*
           The DownloadListActionsRequired component stores actions in local state to track which actions are completed.

           Mount the actions required component and hide it with style to ensure actions stored in component state are persisted as the user switches tabs
           */
          !(selectedTabIndex == 0 && !isError && !isLoading && data)
            ? styles.hidden
            : undefined
        }
      >
        {data?.numberOfFilesRequiringAction &&
          data.numberOfFilesRequiringAction > 0 && (
            // Unmount instead of hiding the DownloadListActionsRequired component when there are 0 actions required
            // The DownloadListActionsRequired cannot discern between a fulfilled action and an action that is no longer required because the
            // file was removed from the download cart.
            // In the typical case where the download cart is cleared, unmounting the component ensures that the actions are cleared out.
            <div>
              <div className="container">
                <DownloadListActionsRequired {...props} />
              </div>
            </div>
          )}
        {data?.numberOfFilesRequiringAction === 0 && (
          <div className={styles.placeholder}>
            <div>No actions are currently required.</div>
          </div>
        )}
      </div>

      {selectedTabIndex == 1 && !isError && !isLoading && data && (
        <div>
          {data.numberOfFilesAvailableForDownload > 0 && (
            <div className={`container ${styles.DownloadListTabContent}`}>
              <h3 className={`${styles.sectionTitle} pageHeaderTitle`}>
                Bulk Download Options
                {data.sumOfFileSizesAvailableForDownload != null && (
                  <Tooltip
                    placement="right"
                    title={
                      <>
                        Total file size
                        <br />
                        Does not include files hosted outside Synapse
                      </>
                    }
                    slotProps={{ tooltip: { sx: { maxWidth: 400 } } }}
                  >
                    <span className={styles.totalFileSize}>
                      {calculateFriendlyFileSize(
                        data.sumOfFileSizesAvailableForDownload,
                      )}{' '}
                      total*
                    </span>
                  </Tooltip>
                )}
              </h3>
              <div>
                <div className={styles.subSectionOverview}>
                  <div className={styles.subSection}>
                    <div className={styles.subSectionHeader}>
                      <div className={styles.headline}>
                        <Typography variant={'headline3'}>
                          <IconSvg icon="packagableFile" /> Web Download (.ZIP)
                        </Typography>
                      </div>
                      <div className={styles.subSectionActions}>
                        {data.numberOfFilesAvailableForDownloadAndEligibleForPackaging >
                          0 && (
                          <Button
                            variant="contained"
                            onClick={() => {
                              setIsShowingCreatePackageUI(true)
                            }}
                            startIcon={<IconSvg icon="download" wrap={false} />}
                          >
                            Download Packages
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
                                startIcon={
                                  <IconSvg icon="download" wrap={false} />
                                }
                              >
                                Download Packages
                              </Button>
                            </span>
                          </Tooltip>
                        )}
                      </div>
                    </div>
                    <ComponentCollapse
                      component={
                        <Typography variant={'body1'} component={'div'}>
                          Only some files may be eligible for packaging as ZIP.
                          Use the Individual Downloads tab, below, to download
                          non-packageable files.&nbsp;
                          <a
                            href="https://help.synapse.org/docs/Downloading-Data-From-the-Synapse-UI.2004254837.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            More Information.
                          </a>
                        </Typography>
                      }
                      collapseBoxSx={{
                        backgroundColor: 'transparent',
                        p: 0,
                        mt: '15px',
                      }}
                      componentContainerSx={{
                        backgroundColor: 'transparent',
                        p: 0,
                      }}
                      iconSx={{ width: '25px', height: '25px' }}
                    >
                      <Typography
                        variant={'body1'}
                        component={'div'}
                        sx={{ marginBottom: '15px' }}
                      >
                        <ul>
                          <li>Files are bundled into .ZIPs up to 1 GB each.</li>
                          <li>
                            Larger selections are split into multiple packages.
                          </li>
                          <li>
                            Includes only files stored in Synapse native
                            storage.
                          </li>
                          <li>
                            Each package contains a CSV manifest with file
                            annotations and metadata.
                          </li>
                        </ul>
                      </Typography>
                    </ComponentCollapse>
                  </div>
                  <div className={styles.subSection}>
                    <div className={styles.subSectionHeader}>
                      <div className={styles.headline}>
                        <Typography variant={'headline3'}>
                          <IconSvg icon="code" /> Programmatic Download
                        </Typography>
                      </div>
                      <div className={styles.subSectionActions}>
                        <Button
                          variant="contained"
                          onClick={() => {
                            setIsShowingModal(true)
                          }}
                          startIcon={<IconSvg icon="download" wrap={false} />}
                        >
                          Get R / Python / CLI Code
                        </Button>
                      </div>
                    </div>
                    <ComponentCollapse
                      component={
                        <Typography variant={'body1'} component={'div'}>
                          Use our Python, R, or command line clients to download
                          files quickly.&nbsp;
                          <a
                            href="https://help.synapse.org/docs/Downloading-Data-Programmatically.2003796248.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            More Information.
                          </a>
                        </Typography>
                      }
                      collapseBoxSx={{
                        backgroundColor: 'transparent',
                        p: 0,
                        mt: '15px',
                      }}
                      componentContainerSx={{
                        backgroundColor: 'transparent',
                        p: 0,
                      }}
                      iconSx={{ width: '25px', height: '25px' }}
                    >
                      <Typography
                        variant={'body1'}
                        component={'div'}
                        sx={{ marginBottom: '15px' }}
                      >
                        <ul>
                          <li>Requires a client (R, Python, or CLI).</li>
                          <li>
                            No limits on individual file size or total download
                            size.
                          </li>
                          <li>
                            Includes files stored both on and off Synapse native
                            storage.
                          </li>
                          <li>
                            Downloads include a CSV manifest with file
                            annotations and metadata.
                          </li>
                        </ul>
                      </Typography>
                    </ComponentCollapse>
                  </div>
                  {isDownloadAllEnabled &&
                    data.numberOfFilesAvailableForDownloadAndEligibleForPackaging <
                      data.numberOfFilesAvailableForDownload && (
                      <div className={styles.subSection}>
                        <div className={styles.subSectionHeader}>
                          <div className={styles.headline}>
                            <Typography variant={'headline3'}>
                              <IconSvg icon="multiFile" /> Multi-file Download
                            </Typography>
                          </div>
                          <div className={styles.subSectionActions}>
                            <div className={styles.ineligibleDownloadContainer}>
                              <DownloadIneligibleForPackagingFilesFromListButton />
                            </div>
                          </div>
                        </div>
                        <ComponentCollapse
                          component={
                            <Typography variant={'body1'} component={'div'}>
                              Files which <strong>aren't</strong> included in a
                              ZIP package may be downloaded as a multi-file
                              download.&nbsp;
                            </Typography>
                          }
                          collapseBoxSx={{
                            backgroundColor: 'transparent',
                            p: 0,
                            mt: '15px',
                          }}
                          componentContainerSx={{
                            backgroundColor: 'transparent',
                            p: 0,
                          }}
                          iconSx={{ width: '25px', height: '25px' }}
                        >
                          <Typography
                            variant={'body1'}
                            component={'div'}
                            sx={{ marginBottom: '15px' }}
                          >
                            Clicking “Start Multi-file Download” initiates a
                            download of all files in your Download List that
                            can’t be bundled into a ZIP—such as large files or
                            external links—in one step. Files are saved one by
                            one with clear progress updates, automatic handling
                            of duplicate names, and retry support if something
                            fails. You can cancel anytime.
                            <br />
                            <br />
                            Note: in some browsers, files download individually
                            to your default Downloads folder instead of a
                            selected location.
                          </Typography>
                        </ComponentCollapse>
                      </div>
                    )}
                </div>
              </div>

              <div className="container">
                {isShowingCreatePackageUI && (
                  <div ref={createPackageRef}>
                    <CreatePackageV2
                      onPackageCreation={() => {
                        setIsShowingDownloadSuccessAlert(true)
                      }}
                    />
                  </div>
                )}
                <h3 className={`${styles.sectionTitle} pageHeaderTitle`}>
                  Download Individual Files
                </h3>
                <div className={styles.tabsContainer}>
                  <ul className={styles.navTabs}>
                    <li className={styles.navLabel}>View:</li>
                    {filterTabs.map((tab, index) => (
                      <li
                        key={tab.label}
                        className={`${styles.navItem}${
                          selectedFilterTabIndex === index
                            ? ` ${styles.active}`
                            : ''
                        }`}
                        aria-selected={selectedFilterTabIndex === index}
                      >
                        <button
                          onClick={() => setSelectedFilterTabIndex(index)}
                        >
                          {tab.label}
                          {!isError && !isLoading && data && (
                            <span className={styles.fileCount}>
                              {getFilterCount(data, tab.filter)}
                            </span>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.availableForDownloadTableContainer}>
                  <AvailableForDownloadTable
                    key={selectedFilter ?? 'all'}
                    filter={selectedFilter}
                  />
                </div>
              </div>
            </div>
          )}
          {data.numberOfFilesAvailableForDownload === 0 && (
            <div className={styles.placeholder}>
              <Typography variant="body1Italic">
                Your Download List is currently empty.
              </Typography>
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
