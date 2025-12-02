import { Button } from '@mui/material'
import { useGetAridhiaRequests } from '@/aridhia-queries'
import { useAridhiaContextOptional } from '@/utils/context/AridhiaContext'
import AccessIcon, { RestrictionUiType } from '../HasAccess/AccessIcon'
import { SRC_SIGN_IN_CLASS } from '@/utils/SynapseConstants'
import { Request } from '@sage-bionetworks/aridhia-client/generated/models'

const buttonSx = { p: '0px', minWidth: 'unset' }

export type AridhiaAccessStatusProps = {
  /**
   * dataset code
   */
  datasetCode: string
  url?: string
}

/**
 * Component that displays the Aridhia data access request status.
 * If the user is not authenticated with Aridhia, shows a sign-in button.
 * Otherwise, shows the access status based on the data access requests.
 */
export default function AridhiaAccessStatus(props: AridhiaAccessStatusProps) {
  const { datasetCode, url } = props
  const aridhiaContext = useAridhiaContextOptional()

  const { data: requestsResponse, isLoading } = useGetAridhiaRequests()

  // If no Aridhia access token is available, show sign-in button
  if (!aridhiaContext?.accessToken) {
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

  // Show loading state
  if (isLoading) {
    return <></>
  }

  // Check if there's a request for this entity

  const requests: Request[] = requestsResponse?.items ?? []

  const entityRequest = requests.find(request => {
    return (
      request.code === datasetCode || request.workspace_uuid === datasetCode
    )
  })

  if (!entityRequest) {
    // No request found - user may need to request access
    const icon = (
      <AccessIcon
        restrictionUiType={RestrictionUiType.AccessBlockedByRestriction}
      />
    )
    return url ? (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    ) : (
      icon
    )
  }

  // Show status based on request status
  let icon: React.ReactNode
  switch (entityRequest.status) {
    case 'approved':
      icon = <AccessIcon restrictionUiType={RestrictionUiType.Accessible} />
      break
    case 'pending':
      icon = (
        <AccessIcon
          restrictionUiType={RestrictionUiType.AccessBlockedByRestriction}
        />
      )
      break
    case 'denied':
    case 'error':
      icon = (
        <AccessIcon restrictionUiType={RestrictionUiType.AccessBlockedByACL} />
      )
      break
    default:
      icon = (
        <AccessIcon
          restrictionUiType={RestrictionUiType.AccessBlockedByRestriction}
        />
      )
  }

  return url ? (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  ) : (
    icon
  )
}
