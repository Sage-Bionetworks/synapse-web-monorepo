import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  Button,
  Link,
  Typography,
  Stack,
} from '@mui/material'
import {
  useGetEntity,
  useGetFeatureFlag,
} from 'synapse-react-client/synapse-queries'
import { isFileEntity } from 'synapse-react-client'
import { FeatureFlagEnum } from '@sage-bionetworks/synapse-types'
import { useLocation, useNavigate } from 'react-router'
import { SynapseSpinner } from 'synapse-react-client/components/LoadingScreen/LoadingScreen'

export type RedirectDialogProps = {
  onCancelRedirect: () => void
  redirectUrl?: string
}

export const redirectInstructionsMap = {
  'https://sites.google.com/sagebase.org/mc2intranet/home?authuser=0': (
    <>
      <Typography variant="body1" sx={{ paddingBottom: '20px' }}>
        <strong>
          You are currently being redirected to the Multi-Consortia Coordinating
          (MC2) Center Intranet.
        </strong>
      </Typography>
      <Typography variant="body1" sx={{ paddingBottom: '20px' }}>
        The MC2 Center Intranet is a protected website containing MC2 Center
        resources. If you are not a participating member of the MC2 Center
        community, you will not be able to access the intranet.
      </Typography>
      <Typography variant="body1" sx={{ paddingBottom: '20px' }}>
        Feel free to{' '}
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://help.cancercomplexity.synapse.org/doc/contact-us"
        >
          contact the MC2 Center
        </Link>{' '}
        to learn more, or if you have any questions.
      </Typography>
    </>
  ),
}

export const synapseRedirectInstructions = (
  <Typography variant="body1" sx={{ paddingBottom: '20px' }}>
    <strong>You are being redirected to Synapse to view this data.</strong>
  </Typography>
)

const isSynapseURL = (url: string) => {
  if (!url) return false
  const parsedURL = new URL(url)
  return (
    parsedURL.hostname.toLowerCase() === 'www.synapse.org' &&
    parsedURL.pathname.startsWith('/Synapse')
  )
}

const getInitialCountdownSeconds = (redirectURL: string) => {
  return isSynapseURL(redirectURL) ? 10 : 30
}

const parseSynIdFromRedirectUrl = (redirectUrl: string | undefined) => {
  if (!redirectUrl) return null
  const regex = /Synapse:(syn\d+)(?:\.(\d+))?/i
  const matches = regex.exec(redirectUrl)
  if (!matches) {
    return null
  }

  return {
    entityId: matches[1],
    versionNumber: matches[2] ? parseInt(matches[2]) : undefined,
  }
}

const RedirectDialog = (props: RedirectDialogProps) => {
  const [countdownSeconds, setCountdownSeconds] = useState<number | undefined>()
  const { redirectUrl, onCancelRedirect } = props
  const [redirectInstructions, setRedirectInstructions] = useState()
  const navigate = useNavigate()

  const { entityId, versionNumber } =
    parseSynIdFromRedirectUrl(redirectUrl) ?? {}
  const { data: entity, isLoading } = useGetEntity(entityId)
  const location = useLocation()

  const isRedirectTargetFileEntity = entity ? isFileEntity(entity) : false

  const isFeatureFlagEnabled = useGetFeatureFlag(
    FeatureFlagEnum.FILE_ENTITY_PAGE,
  )

  useEffect(() => {
    if (
      redirectUrl &&
      isRedirectTargetFileEntity &&
      !isLoading &&
      isFeatureFlagEnabled
    ) {
      const currentUrl = `${location.pathname}${location.search}`
      const internalUrl = `/FileEntity?entityId=${entityId}${
        versionNumber ? `&version=${versionNumber}` : ''
      }`

      if (currentUrl === internalUrl) {
        return
      }

      navigate(internalUrl)
      onCancelRedirect()
    }
  }, [
    redirectUrl,
    entityId,
    versionNumber,
    isRedirectTargetFileEntity,
    isFeatureFlagEnabled,
    navigate,
    onCancelRedirect,
    isLoading,
    location.pathname,
    location.search,
  ])

  useEffect(() => {
    if (redirectUrl && countdownSeconds) {
      // You would expect that we should redirect when countdownSeconds reaches 0,
      // but it actually takes about a second to perform the redirect.
      // So let's start the process when we get to 1.
      if (countdownSeconds <= 1) {
        window.location.assign(redirectUrl)
      }
      setTimeout(() => {
        if (countdownSeconds) {
          setCountdownSeconds(countdownSeconds => countdownSeconds! - 1)
        }
      }, 1000)
    }
  }, [redirectUrl, countdownSeconds])

  useEffect(() => {
    if (redirectUrl) {
      const isRedirectToSynapse = isSynapseURL(redirectUrl)
      setRedirectInstructions(
        isRedirectToSynapse
          ? synapseRedirectInstructions
          : redirectInstructionsMap[redirectUrl],
      )
    }
  }, [redirectUrl])

  useEffect(() => {
    if (redirectUrl && !countdownSeconds) {
      setCountdownSeconds(getInitialCountdownSeconds(redirectUrl))
    }
  }, [countdownSeconds, redirectUrl])

  const onClose = () => {
    // cancel the redirect
    onCancelRedirect()
    // and reset countdown seconds
    setCountdownSeconds(undefined)
  }

  // Show loading state while fetching entity for FileEntity redirect
  if (redirectUrl && entityId && isLoading && isFeatureFlagEnabled) {
    return (
      <Dialog
        open={true}
        onClose={onClose}
        className="RedirectDialog"
        PaperProps={{ sx: { padding: 0 } }}
      >
        <DialogContent
          sx={{
            p: 0,
            ml: 0,
            mr: 0,
          }}
        >
          <Stack className="redirect-dialog-body">
            <Typography
              variant="headline1"
              sx={{
                padding: '50px 0px 20px 0px',
              }}
            >
              Loading...
            </Typography>
            <SynapseSpinner size={40} />
          </Stack>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <>
      {redirectUrl && (
        <Dialog
          open={true}
          onClose={onClose}
          className="RedirectDialog"
          PaperProps={{ sx: { padding: 0 } }}
        >
          <DialogContent sx={{ p: 0, ml: 0, mr: 0 }}>
            <div className="redirect-dialog-body">
              <Typography
                variant="headline1"
                sx={{ padding: '50px 0px 20px 0px' }}
              >
                Redirecting
              </Typography>
              {redirectInstructions}
              <p>
                <Typography variant="body1" sx={{ paddingBottom: '20px' }}>
                  You will be redirected in{' '}
                  <strong>{countdownSeconds} seconds</strong>
                </Typography>
                <div className="links-container">
                  <Button
                    variant="contained"
                    onClick={() => {
                      window.location.assign(redirectUrl)
                    }}
                  >
                    Go to the site now
                  </Button>
                  <Button variant="outlined" onClick={onClose}>
                    Stay in the Portal
                  </Button>
                </div>
              </p>
            </div>
            {isSynapseURL(redirectUrl) && (
              <div className="redirect-dialog-footer">
                <img
                  className="synapse-logo-image"
                  src="https://www.synapse.org/images/logo.svg"
                  alt=""
                />
                <h3 className="synapse-logo-text">SYNAPSE</h3>
                <img
                  className="synapse-hero-image"
                  src="https://s3.amazonaws.com/static.synapse.org/images/homepage-composite.svg"
                  alt=""
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}

export default RedirectDialog
