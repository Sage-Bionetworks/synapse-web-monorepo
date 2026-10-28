import { ReactNode, useState } from 'react'
import { useGetAridhiaRequests } from '@/aridhia-queries'
import { useGetFeatureFlag } from '@/synapse-queries'
import { useSynapseContext } from '@/utils'
import { FeatureFlagEnum } from '@/utils/featureflag/FeatureFlags'
import { SRC_SIGN_IN_CLASS } from '@/utils/SynapseConstants'
import { Button } from '@mui/material'
import { DialogBase } from '../DialogBase'
import AccessIcon, { RestrictionUiType } from '../HasAccess/AccessIcon'
import {
  findRequestsForDataset,
  getRestrictionUiTypeFromAridhiaRequests,
} from './aridhiaAccessStatusUtils'
import { getAridhiaFairPortalDatasetUrl } from './aridhiaFairPortalUrls'
import AridhiaDarStatusPopover from './AridhiaDarStatusPopover'
import { useAridhiaDarWizardParts } from './DarWizard/AridhiaDarWizard'
import RdcaDapEligibilityDialog from './RdcaDapEligibilityDialog'

const buttonSx = { p: '0px', minWidth: 'unset' }

export type AridhiaAccessStatusProps = {
  /**
   * dataset code
   */
  datasetCode: string
  /** Base URL of the RDCA-DAP FAIR portal's browsable UI, e.g. `https://fair.dap.c-path.org`. */
  fairPortalUrl?: string
}

/**
 * Component that displays the Aridhia data access request status.
 * If the user is not authenticated with Aridhia, shows a sign-in button.
 * Otherwise, shows the access status based on the data access requests.
 */
export default function AridhiaAccessStatus(props: AridhiaAccessStatusProps) {
  const { datasetCode, fairPortalUrl } = props
  const { isAuthenticated } = useSynapseContext()
  const isDarFormEnabled = useGetFeatureFlag(
    FeatureFlagEnum.AMPALS_RDCA_DAP_FORM_ENABLED,
  )

  const {
    data: requestsResponse,
    isLoading,
    isError,
    error,
  } = useGetAridhiaRequests()
  const [popoverAnchorEl, setPopoverAnchorEl] = useState<HTMLElement | null>(
    null,
  )
  const [eligibilityDialogOpen, setEligibilityDialogOpen] = useState(false)
  const [requestDialogOpen, setRequestDialogOpen] = useState(false)
  // Every opening of the wizard remounts it under a new session key, so a submitted request's
  // confirmation screen never carries over. The remounted wizard resumes this dataset's
  // unsubmitted draft if one exists, and otherwise starts a draft with a fresh request code.
  const [wizardSession, setWizardSession] = useState(0)

  function openRequestWizard() {
    setPopoverAnchorEl(null)
    setWizardSession(session => session + 1)
    setRequestDialogOpen(true)
  }

  if (!isAuthenticated) {
    return (
      <Button
        sx={buttonSx}
        className={SRC_SIGN_IN_CLASS}
        onClick={ev => {
          if (ev.isTrusted) {
            /*
                There is a tricky problem - 
                The portals listens to click events for buttons with the class SRC_SIGN_IN_CLASS set, it listens to this event
                so that it can display the login modal.

                This button has an svg inside of it which is problematic because more often than not clicking this button will 
                instead click that svg. The event listener in the portals will break as a result.

                Though the svg may get the actual click event, because of event bubbling this button will get its onClick called.
                Once onClick is called we can manually dispatch an event off of this button. This does pose a problem, we end up in a 
                infinite loop because this button keeps dispatching click events, so we can use the isTrusted to recognize if onClick was
                triggered programmatically or by user click. Lastly, using { bubbles: true } ensures the event bubbles up to the document level.

              */
            const clickEvent = new MouseEvent('click', { bubbles: true })
            ev.currentTarget.dispatchEvent(clickEvent)
          }
        }}
      >
        <AccessIcon
          restrictionUiType={RestrictionUiType.AccessBlockedToAnonymous}
        />
      </Button>
    )
  }

  let content: ReactNode = null
  if (isLoading) {
    // Show loading state — nothing to render yet.
  } else if (isError && error.isEligibilityFailure) {
    // The token exchange (or any other request) failed because this user has no linked
    // RDCA-DAP account yet — the DAR wizard is unreachable until that's resolved.
    content = (
      <>
        <Button
          sx={buttonSx}
          onClick={() => setEligibilityDialogOpen(true)}
          aria-label="Link your RDCA-DAP account"
        >
          <AccessIcon
            restrictionUiType={
              RestrictionUiType.AccessBlockedByRDCADAPAccountNotLinked
            }
          />
        </Button>
        <RdcaDapEligibilityDialog
          open={eligibilityDialogOpen}
          onClose={() => setEligibilityDialogOpen(false)}
        />
      </>
    )
  } else {
    const datasetRequests = findRequestsForDataset(
      requestsResponse?.items ?? [],
      datasetCode,
    )
    const restrictionUiType =
      getRestrictionUiTypeFromAridhiaRequests(datasetRequests)
    const icon = <AccessIcon restrictionUiType={restrictionUiType} />

    if (
      !isDarFormEnabled &&
      (datasetRequests.length === 0 ||
        restrictionUiType === RestrictionUiType.AccessibleOnRDCADAP)
    ) {
      // Without the in-app request form, RDCA-DAP is where the user accesses or requests the
      // data — link straight out to it.
      content = fairPortalUrl ? (
        <a
          href={getAridhiaFairPortalDatasetUrl(fairPortalUrl, datasetCode)}
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon}
        </a>
      ) : (
        icon
      )
    } else if (datasetRequests.length > 0) {
      // The popover lists every request for this dataset; with the in-app form enabled it also
      // offers another request (more tables, or a resubmission after a denial).
      content = (
        <>
          <Button
            sx={buttonSx}
            onClick={ev => setPopoverAnchorEl(ev.currentTarget)}
            aria-label="View data access request status"
          >
            {icon}
          </Button>
          <AridhiaDarStatusPopover
            open={!!popoverAnchorEl}
            anchorEl={popoverAnchorEl}
            onClose={() => setPopoverAnchorEl(null)}
            datasetCode={datasetCode}
            requests={datasetRequests}
            fairPortalUrl={fairPortalUrl}
            onNewRequest={isDarFormEnabled ? openRequestWizard : undefined}
          />
        </>
      )
    } else {
      // No request yet, and the in-app request form is enabled — the icon opens the request
      // wizard in a dialog. The same wizard also renders at the route-based, non-modal
      // `AridhiaDarWizard` page for a full-page entry point.
      content = (
        <Button
          sx={buttonSx}
          onClick={openRequestWizard}
          aria-label="Request data access"
        >
          {icon}
        </Button>
      )
    }
  }

  return (
    <>
      {content}
      {/*  Ensure all authenticated return paths render the wizard dialog to prevent flicker as the DAR state changes (e.g. on the confirmation screen). */}
      <AridhiaDarWizardDialog
        key={wizardSession}
        datasetCode={datasetCode}
        open={requestDialogOpen}
        onClose={() => setRequestDialogOpen(false)}
      />
    </>
  )
}

function AridhiaDarWizardDialog(props: {
  datasetCode: string
  open: boolean
  onClose: () => void
}) {
  const { datasetCode, open, onClose } = props
  const { content, actions } = useAridhiaDarWizardParts(
    { datasetCode },
    { enabled: open, onClose },
  )
  return (
    <DialogBase
      open={open}
      onCancel={onClose}
      maxWidth="md"
      title="Request Data Access"
      content={content}
      actions={actions}
    />
  )
}
