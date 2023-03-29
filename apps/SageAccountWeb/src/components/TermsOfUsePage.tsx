import React, { useState } from 'react'
import { SynapseClient } from 'synapse-react-client'
import IconSvg from 'synapse-react-client/dist/containers/IconSvg'
import TermsAndConditions from 'synapse-react-client/dist/containers/TermsAndConditions'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import { useSynapseContext } from 'synapse-react-client/dist/utils/SynapseContext'
import { useSourceApp, SourceAppLogo } from './SourceApp'
import { Button, Box } from '@mui/material'
import { StyledInnerContainer, StyledOuterContainer } from './StyledComponents'
import { TermsOfUseRightPanelText } from './TermsOfUsePageRightPanelText'

export type TermsOfUsePageProps = {}

export const TermsOfUsePage = (props: TermsOfUsePageProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isFormComplete, setIsFormComplete] = useState(false)
  const [isDone, setIsDone] = useState(false)
  const { accessToken } = useSynapseContext()
  const sourceApp = useSourceApp()

  const tcAgreement =
    'https://s3.amazonaws.com/static.synapse.org/governance/SageBionetworksSynapseTermsandConditionsofUse.pdf'
  const onSignTermsOfUse = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    setIsLoading(true)
    try {
      if (accessToken) {
        SynapseClient.signSynapseTermsOfUse(accessToken)
          .then(() => {
            setIsDone(true)
          })
          .catch((err: any) => {
            displayToast(err.reason as string, 'danger')
          })
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
          '& > div:nth-of-type(1)': { paddingTop: 10, width: '750px' },
          '& > div:nth-of-type(2)': { paddingTop: 10 },
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
                Accept and Continue <IconSvg icon="arrowForward" />
              </Button>
              <Button
                sx={buttonSx}
                variant="text"
                href={tcAgreement}
                target="_blank"
              >
                View and Complete Terms and Conditions for Use
              </Button>
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
