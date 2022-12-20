import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { UserBundle,
    //  VerificationSubmission, VerificationState
     } from 'synapse-react-client/dist/utils/synapseTypes'
import { SynapseClient, SynapseConstants } from 'synapse-react-client'
import { useSynapseContext } from 'synapse-react-client/dist/utils/SynapseContext'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap'

export const AccountSettings = () => {
  const { accessToken } = useSynapseContext()
  const [ firstName, setFirstName ] = useState<string | undefined>()
  const [ lastName, setLastName ] = useState<string | undefined>()
  const [ position, setPosition ] = useState<string | undefined>()
  const [ company, setCompany ] = useState<string | undefined>()
  const [ location, setLocation ] = useState<string | undefined>()
  const [ url, setUrl ] = useState<string | undefined>()
//   const [ orcid, setOrcid ] = useState<string>()
  const [ industry, setIndustry ] = useState<string>()
//   const [ verified, setVerified ] = useState<boolean>()
//   const [ isCertified, setIsCertified ] = useState<boolean>()
  const [ username, setUsername ] = useState<string>()
//   const [ changePW, setChangePW ] = useState<boolean>(false)  
  const [ primaryEmail, setPrimaryEmail ] = useState<string>()
//   const [ verificationSubmission, setVerificationSubmission ] = useState<VerificationSubmission>()
//   const [ verificationState, setVerificationState ] = useState<VerificationState>()

  const unpackBundle = (bundle: UserBundle) => {
    setFirstName(bundle.userProfile?.firstName)
    setLastName(bundle.userProfile?.lastName)
    setPosition(bundle.userProfile?.position)
    setCompany(bundle.userProfile?.company)
    setLocation(bundle.userProfile?.location)
    setIndustry(bundle.userProfile?.industry)
    setUrl(bundle.userProfile?.url)
    setUsername(bundle.userProfile?.userName)
    // setVerified(bundle.isVerified)
    // setOrcid(bundle.ORCID)
    // setVerfied(bundle.isVerified)
    // setIsCertified(bundle.isCertified)
    // setVerificationSubmission(bundle.verificationSubmission)
    // setVerificationState(bundle.verificationSubmission?.stateHistory?.slice(-1)[0])
}

  useEffect(() => {
    const getUserData = async() => {
      try{
        const mask =
          SynapseConstants.USER_BUNDLE_MASK_ORCID |
          SynapseConstants.USER_BUNDLE_MASK_USER_PROFILE |
          SynapseConstants.USER_BUNDLE_MASK_IS_VERIFIED |
          SynapseConstants.USER_BUNDLE_MASK_IS_CERTIFIED |
          SynapseConstants.USER_BUNDLE_MASK_VERIFICATION_SUBMISSION  
        const getPrimaryEmail = await SynapseClient.getNotificationEmail(accessToken)
        const bundle: UserBundle = await SynapseClient.getMyUserBundle(mask, accessToken)
        setPrimaryEmail(getPrimaryEmail.email)
        unpackBundle(bundle)
      } catch (err: any) {
        displayToast(err.reason as string, 'danger')
      }
    }
    getUserData()
  }, []
  )
  return (
    <>
      <div>
        <span>Profile Information</span> 
        <span>Change Password</span>
        <span>Trust & Credentials</span>
        <span>Personal Access Tokens</span>
      </div>
      <div>
        <div>
          <h3>Profile Information</h3>
          <p>This information is reused across all Sage products. Lorem ipsum dolor sit amet consectetuer adapiscing elit, sed do euismod tempore incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Quis nostrud exercitation ullamco laboris.</p>
          <FormGroup className='required'>
            <FormLabel>Username</FormLabel>
            <FormControl onChange={e => setUsername(e.target.value)} value={username}/>
          </FormGroup>
          <FormGroup className='required'>
            <FormLabel>Email address</FormLabel>
            <FormControl onChange={e => setPrimaryEmail(e.target.value)} value={primaryEmail}/>
          </FormGroup>
          <FormGroup>
            <FormLabel>First name</FormLabel>
            <FormControl onChange={e => setFirstName(e.target.value)} value={firstName}/>
          </FormGroup>
          <FormGroup>
            <FormLabel>Last name</FormLabel>
            <FormControl onChange={e => setLastName(e.target.value)} value={lastName}/>
          </FormGroup>
          <FormGroup>
            <FormLabel>Current position</FormLabel>
            <FormControl placeholder='e.g Principal Investigator' onChange={e => setPosition(e.target.value)} value={position}/>
          </FormGroup>
          <FormGroup>
            <FormLabel>Current affiliation</FormLabel>
            <FormControl placeholder='e.g. Example University' onChange={e => setCompany(e.target.value)} value={company}/>
          </FormGroup>
          <FormGroup>
            <FormLabel>Industry</FormLabel>
            <FormControl onChange={e => setIndustry(e.target.value)} value={industry}/>
          </FormGroup>
          <FormGroup>
            <FormLabel>Website</FormLabel>
            <FormControl placeholder='https://example.com' onChange={e => setUrl(e.target.value)} value={url}/>
          </FormGroup>
          <FormGroup>
            <FormLabel>City, Country</FormLabel>
            <FormControl onChange={e => setLocation(e.target.value)} value={location}/>
          </FormGroup>
          <FormGroup>
            <FormLabel>Institutional affiliation</FormLabel>
            <FormControl/>
          </FormGroup>
          <Button>Save Changes</Button>
        </div>
      </div>
    </>
    )
}