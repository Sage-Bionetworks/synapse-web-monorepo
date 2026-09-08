import { SyntheticEvent, useState } from 'react'
import { SourceAppLogo } from '../components/SourceApp'
import { Box, Button } from '@mui/material'
import {
  DESKTOP_RIGHT_PANEL_TEST_ID,
  getWideDesktopTwoColumnSx,
  StyledInnerContainer,
  StyledOuterContainer,
} from '../components/StyledComponents'
import { TermsOfUseExplanationSection } from '../components/TermsOfUseExplanation'
import { TermsOfUseMobileAccordion } from '../components/TermsOfUseMobileAccordion'
import { TermsAndConditionsLink } from '../components/TermsAndConditionsLink'
import { useSourceApp } from '../components/useSourceApp'
import TermsAndConditions from 'synapse-react-client/components/TermsAndConditions/TermsAndConditions'
import { useSynapseContext } from 'synapse-react-client/utils/context/SynapseContext'
import {
  useSignTermsOfService,
  useTermsOfServiceInfo,
} from 'synapse-react-client/synapse-queries/termsOfService/useTermsOfService'
import { displayToast } from 'synapse-react-client/components/ToastMessage/ToastMessage'
import IconSvg from 'synapse-react-client/components/IconSvg/IconSvg'

function TermsOfUsePage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isFormComplete, setIsFormComplete] = useState(false)
  const [isDone, setIsDone] = useState(false)
  const { isAuthenticated, accessToken } = useSynapseContext()
  const sourceApp = useSourceApp()

  const { mutate: signTermsOfService } = useSignTermsOfService()
  const { data: tosInfo } = useTermsOfServiceInfo()

  const onSignTermsOfUse = async (event: SyntheticEvent) => {
    event.preventDefault()
    setIsLoading(true)
    try {
      if (isAuthenticated && accessToken) {
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
      <StyledInnerContainer sx={getWideDesktopTwoColumnSx}>
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
              <TermsOfUseMobileAccordion />
              <TermsAndConditions
                termsAndConditionsTableID={
                  import.meta.env.VITE_TERMS_AND_CONDITIONS_TABLE_ID
                }
                termsAndConditionsTableVersion={
                  import.meta.env.VITE_TERMS_AND_CONDITIONS_TABLE_VERSION
                }
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
        <Box
          data-testid={DESKTOP_RIGHT_PANEL_TEST_ID}
          sx={{ display: { xs: 'none', md: 'block' } }}
        >
          <Box sx={{ marginTop: '100px' }}>
            <TermsOfUseExplanationSection />
          </Box>
        </Box>
      </StyledInnerContainer>
    </StyledOuterContainer>
  )
}

export default TermsOfUsePage
