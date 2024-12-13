import { Box, Button, useTheme } from '@mui/material'
import { SyntheticEvent, useState } from 'react'
import IconSvg from 'synapse-react-client/components/IconSvg/IconSvg'
import TermsAndConditions from 'synapse-react-client/components/TermsAndConditions/TermsAndConditions'
import { displayToast } from 'synapse-react-client/components/ToastMessage/ToastMessage'
import {
  useSignTermsOfService,
  useTermsOfServiceInfo,
} from 'synapse-react-client/synapse-queries/termsOfService/useTermsOfService'
import { useSynapseContext } from 'synapse-react-client/utils/context/SynapseContext'
import { SourceAppLogo } from './SourceApp'
import { StyledInnerContainer, StyledOuterContainer } from './StyledComponents'
import { TermsAndConditionsLink } from './TermsAndConditionsLink'
import { TermsOfUseRightPanelText } from './TermsOfUseRightPanelText'
import { useSourceApp } from './useSourceApp'

export function TermsOfUsePage() {
  const theme = useTheme()
  const [isLoading, setIsLoading] = useState(false)
  const [isFormComplete, setIsFormComplete] = useState(false)
  const [isDone, setIsDone] = useState(false)
  const { accessToken } = useSynapseContext()
  const sourceApp = useSourceApp()

  const { mutate: signTermsOfService } = useSignTermsOfService()
  const { data: tosInfo } = useTermsOfServiceInfo()

  const onSignTermsOfUse = async (event: SyntheticEvent) => {
    event.preventDefault()
    setIsLoading(true)
    try {
      if (accessToken) {
        signTermsOfService(
          {
            accessToken,
            termsOfServiceVersion: tosInfo?.latestTermsOfServiceVersion!,
          },
          {
            onSuccess: () => {
              setIsDone(true)
            },
            onError: err => {
              displayToast(err.reason as string, 'danger')
            },
          },
        )
      }
    } catch (err: any) {
      displayToast(err.reason as string, 'danger')
    } finally {
      setIsLoading(false)
    }
  }

  const buttonSx = {
    width: '100%',
    padding: '10px',
    '&.MuiButton-contained': {
      marginTop: '20px',
      marginBottom: '10px',
    },
  }

  if (isDone) {
    // AppInitializer still thinks the ToU are not signed.
    if (sourceApp?.requestAffiliation) {
      window.location.assign('/authenticated/currentaffiliation')
    } else {
      window.location.assign('/authenticated/accountcreated')
    }
  }
  return (
    <StyledOuterContainer className="TermsOfUsePage">
      <StyledInnerContainer
        sx={{
          width: '1200px',
          '& > div:nth-of-type(1)': {
            paddingTop: theme.spacing(10),
            width: '750px',
          },
          '& > div:nth-of-type(2)': { paddingTop: theme.spacing(10) },
        }}
      >
        <Box
          sx={{
            height: '100%',
            position: 'relative',
          }}
        >
          <Box sx={{ minHeight: '530px' }}>
            <div className={'panel-logo'}>
              <SourceAppLogo />
            </div>
            <div className={'terms-of-use-panel'}>
              <TermsAndConditions
                onFormChange={(completed: boolean) => {
                  setIsFormComplete(completed)
                }}
                hideLinkToFullTC={true}
              />
              <Button
                sx={buttonSx}
                variant="contained"
                onClick={onSignTermsOfUse}
                disabled={isLoading || !isFormComplete}
              >
                Agree and Continue <IconSvg icon="arrowForward" />
              </Button>
              <TermsAndConditionsLink sx={buttonSx} />
            </div>
          </Box>
        </Box>
        <Box>
          <Box sx={{ marginTop: '100px' }}>
            <TermsOfUseRightPanelText />
          </Box>
        </Box>
      </StyledInnerContainer>
    </StyledOuterContainer>
  )
}
