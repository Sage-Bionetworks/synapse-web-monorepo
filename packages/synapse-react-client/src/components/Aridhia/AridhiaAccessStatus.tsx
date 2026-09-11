import { ReactNode, useState } from 'react'
import { useGetAridhiaRequests } from '@/aridhia-queries'
import { useSynapseContext } from '@/utils'
import { SRC_SIGN_IN_CLASS } from '@/utils/SynapseConstants'
import { Button } from '@mui/material'
import { DialogBase } from '../DialogBase'
import AccessIcon, { RestrictionUiType } from '../HasAccess/AccessIcon'
import {
  findRequestForDataset,
  getRestrictionUiTypeFromAridhiaRequest,
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
  const { content: wizardContent, actions: wizardActions } =
    useAridhiaDarWizardParts(
      { datasetCode },
      {
        enabled: requestDialogOpen,
        onClose: () => setRequestDialogOpen(false),
      },
    )

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
    // Check if there's a request for this dataset
    const entityRequest = findRequestForDataset(
      requestsResponse?.items ?? [],
      datasetCode,
    )
    const restrictionUiType =
      getRestrictionUiTypeFromAridhiaRequest(entityRequest)
    const icon = <AccessIcon restrictionUiType={restrictionUiType} />

    if (restrictionUiType === RestrictionUiType.Accessible) {
      // Approved, or the RDCA-DAP request form is not yet enabled — keep the existing
      // link-out to RDCA-DAP to access or request the data.
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
    } else if (entityRequest) {
      // Pending or denied — click opens the status popover.
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
            request={entityRequest}
            fairPortalUrl={fairPortalUrl}
          />
        </>
      )
    } else {
      // No request yet — the icon opens the request wizard in a dialog. The same wizard also
      // renders at the route-based, non-modal `AridhiaDarWizard` page for a full-page entry
      // point.
      content = (
        <Button
          sx={buttonSx}
          onClick={() => setRequestDialogOpen(true)}
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
      <DialogBase
        open={requestDialogOpen}
        onCancel={() => setRequestDialogOpen(false)}
        maxWidth="md"
        title="Request Data Access"
        content={wizardContent}
        actions={wizardActions}
      />
    </>
  )
}
