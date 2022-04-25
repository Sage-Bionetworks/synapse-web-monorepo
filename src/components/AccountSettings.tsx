import React, { useState, useEffect } from 'react'
import { Button, Col, Container, FormControl, FormGroup, FormLabel, Modal, Row } from 'react-bootstrap'
import { useSynapseContext } from 'synapse-react-client/dist/utils/SynapseContext'
import { UserProfile, UserBundle, VerificationSubmission, VerificationStateEnum, VerificationState } from 'synapse-react-client/dist/utils/synapseTypes'
import { SynapseConstants, Typography } from 'synapse-react-client'
import { getMyUserBundle, updateMyUserProfile } from 'synapse-react-client/dist/utils/SynapseClient'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import StarterAccount from '../assets/StarterAccount.svg'
import VerifedAccount from '../assets/VerifiedAccount.svg'
import CheckmarkBadgeLight from '../assets/CheckmarkBadgeLight.svg'
import CheckmarkBadgeDark from '../assets/CheckmarkBadge.svg'
import EditIcon from '../assets/RedEditPencil.svg'
import { ChangePassword } from './ChangePassword'
import { getSearchParam } from 'URLUtils'
import { getSourceAppRedirectURL } from './SourceApp'
import { ConfigureEmail } from './ConfigureEmail'
import { UnbindORCiDDialog } from './UnbindORCiD'
import { ORCiDButton } from './ORCiDButton'

export type AccountSettingsProps = {
}

const AccountSettings = (props: AccountSettingsProps) => {
    const { accessToken } = useSynapseContext()
    const [ userProfile, setUserProfile ] = useState<UserProfile>()
    const [ showDialog, setShowDialog ] = useState<boolean>(false)
    const [ orcid, setOrcid ] = useState<string>()
    const [ verified, setVerfied ] = useState<boolean>()
    const [ editUsername, setEditUsername] = useState<boolean>(false)
    const [ changePW, setChangePW] = useState<boolean>(false)
    const [ isShowingWelcomeScreen, setIsShowingWelcomeScreen] = useState<boolean>(false)
    const [ updatedUsername, setUpdatedUsername] = useState<string>('')
    const [ verificationSubmission, setVerificationSubmission] = useState<VerificationSubmission>()
    const [ verificationState, setVerificationState] = useState<VerificationState>()
    const [ showORCiDDialog, setShowORCiDDialog ] = useState(false)

    const SUSPENDED_TEXT = 'Your account has been suspended.'
    const REJECTED_TEXT = 'Sorry we could not verify your account.'

    // on initial mount, check query parameter for showWelcomeScreen
    const showWelcomeScreenURLParam = getSearchParam('showWelcomeScreen')
    if (showWelcomeScreenURLParam && showWelcomeScreenURLParam === 'true' && !isShowingWelcomeScreen) {
        setIsShowingWelcomeScreen(true)
    }
    const onUpdateUserProfile = async (event: React.SyntheticEvent) => {
        event.preventDefault()
        try{
            if(userProfile && editUsername && updatedUsername){
                userProfile.userName = updatedUsername
                const updatedProfile = await updateMyUserProfile(userProfile, accessToken)
                setUserProfile(updatedProfile)
            }
            cancelEdit()
        } catch(err:any) {
            displayToast(err.reason, 'danger')
        }
    }

    useEffect(() => {
        const getData = async() => {
            try {
                const mask =
                  SynapseConstants.USER_BUNDLE_MASK_ORCID |
                  SynapseConstants.USER_BUNDLE_MASK_USER_PROFILE |
                  SynapseConstants.USER_BUNDLE_MASK_IS_VERIFIED |
                  SynapseConstants.USER_BUNDLE_MASK_VERIFICATION_SUBMISSION

                const bundle:UserBundle = await getMyUserBundle(
                    mask,
                    accessToken
                )
                setUserProfile(bundle.userProfile)
                setOrcid(bundle.ORCID)
                setVerfied(bundle.isVerified)
                setVerificationSubmission(bundle.verificationSubmission)
                setVerificationState(bundle.verificationSubmission?.stateHistory?.slice(-1)[0])

            } catch (err: any) {
                displayToast(err.reason as string, 'danger')
            }
        }
        getData()
    }, [accessToken])

    const ProfileValidationState = (verificationStateEnum: VerificationStateEnum | undefined) => {
        const profileValidationStatus = () => {
            if(verificationStateEnum === 'SUBMITTED'){
                return <><img className="verifyBadgeIcon" src={CheckmarkBadgeDark} alt='CheckmarkBadgeDark'/>Pending Verification</>
            } else if(verificationStateEnum === 'REJECTED' || verificationStateEnum ==='SUSPENDED'){
                return (
                    <div className='ValidationStateContainer'>
                        <Typography variant='headline3'>
                            {verificationStateEnum === 'REJECTED' ? REJECTED_TEXT : SUSPENDED_TEXT}
                        </Typography>
                        <Typography variant='body1' >
                            {verificationState?.reason}
                        </Typography>
                        <Button
                         onClick={()=>{window.location.assign('/authenticated/validate')}}
                         variant='secondary'>
                            <img className='verifyBadgeIcon' src={CheckmarkBadgeLight} alt='empty checkmark'/> Verify Account
                        </Button>
                    </div>
                )
            } else {
                return <></>
            }
        }
        return <>{profileValidationStatus()}</>
    }

    // Closes any forms and resets the fields.
    const cancelEdit = () => {
        setEditUsername(false)
        setUpdatedUsername('')
        setChangePW(false)
    }

    // Component to edit fields (username / email)
    const EditField = (label: string, updatedValue: string, updateFn: Function) => {
        return(
        <div>
            <FormGroup className='required'>
                <FormLabel>{label}</FormLabel>
                <FormControl 
                    onChange={e => updateFn(e.target.value)} 
                    style={{maxWidth:'320px'}}
                    value = {updatedValue}/>
                <Button className='btn-container emptyButton' onClick={cancelEdit}>
                    Cancel
                </Button>
                <Button className='btn-container'  variant='secondary' onClick={onUpdateUserProfile}>
                    Save Changes
                </Button>
            </FormGroup>
        </div>
        )
    }
    return(  
        <div className="bootstrap-4-backport blue-background AccountSettings">
            <Container>
                <Row>
                    <Col sm={4} style={{padding:0}}>
                        {verified ? 
                        <div className='verified-img-container'>
                            <img src={VerifedAccount} alt="verified"/> 
                            <p className='verified-text'>Verified Account</p>
                        </div>
                        : 
                        <div className='verified-img-container'>
                            <img src={StarterAccount} alt="starter"/>
                            <p className='verified-text'>Starter Account</p>
                        </div>
                        }
                        {!!!verified && ProfileValidationState(verificationState?.state as VerificationStateEnum)}
                    </Col>
                    <Col sm={8}>
                        <div className="grid-container">
                            {editUsername ? 
                                <div className='edit-cell'>{EditField('Username', updatedUsername,setUpdatedUsername)}</div>
                                : <>
                                    <div className='label-cell'>Username:</div>
                                    <div>
                                        {userProfile?.userName}
                                        <button onClick={()=>{
                                            setEditUsername(true) 
                                            setChangePW(false)}}>
                                        
                                            <img src={EditIcon} alt="edit icon"/>
                                        </button>
                                    </div>
                                </>
                            }
                            <div className='label-cell'>Email:</div>
                            <ConfigureEmail returnToUrl='/authenticated/myaccount' />
                            {changePW ?
                                <div className='edit-cell'><ChangePassword onCancel={cancelEdit} /></div>
                                : <>
                                    <div className='label-cell'>Password: </div>
                                    <div>
                                        **********
                                        <button onClick={()=>setChangePW(true)}><img src={EditIcon} alt="edit icon"/></button>
                                    </div>
                                </>
                            }
                            {orcid ?
                            <>
                                <div className='label-cell'>OrcID: </div>
                                <div className='orcid-cell'>
                                    <a href={orcid}>{orcid}</a>
                                    <button onClick={()=>setShowORCiDDialog(true)}><img src={EditIcon} alt="edit icon"/></button>
                                </div>
                            </> :
                            <>
                                <div className='label-cell'>OrcID: </div>
                                <ORCiDButton />
                            </>
                            }
                        </div>
                    </Col>
                </Row>
                     {verified 
                     && 
                     <div className='account-setting-footer'>
                         <div>Your account was last verified on: {verificationSubmission?.createdOn}</div>
                         <div>Please update if necessary.</div>
                         <Button className='btn-container emptyButton' style={{marginTop:'16px'}} onClick={()=>setShowDialog(true)}>View Verified Profile</Button>
                     </div>}
            </Container>
            {isShowingWelcomeScreen && <Modal
                className="WelcomeScreenModal bootstrap-4-backport"
                show={isShowingWelcomeScreen}
                animation={false}
                size="lg"
                onHide={()=> {setIsShowingWelcomeScreen(false)}}
                backdrop='static'
            >
                <Modal.Body>
                    <Row>
                        <Col lg={2} />
                        <Col lg={8} >
                            <div className="startAccountIconContainer"><img src={StarterAccount} alt="starter"/></div>
                            <Typography variant='headline1'>
                                Welcome to your Starter Sage Account
                            </Typography>
                            <Typography variant='body1'>
                                You’ve created a Starter Sage Account.
                            </Typography>
                            <Typography variant='body1'>
                                This account will allow you to explore Sage's products and its many capabilities.
                            </Typography>
                            <Typography variant='body1'>
                                For full access to data and ability to launch real studies, we will need additional information to verify your identity.
                            </Typography>
                            <Typography variant='body1'>
                                Would you like to verify your account?
                            </Typography>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                <div className="ButtonContainer">
                    <Button
                        variant="white"
                        onClick={()=>{window.location.assign(getSourceAppRedirectURL())}}
                        >
                        Verify later
                    </Button>
                    <Button
                        variant="primary"
                        onClick={()=>{window.location.assign('/authenticated/validate')}}
                    >
                        <img className="verifyBadgeIcon" src={CheckmarkBadgeLight} alt="verify"/>Verify now
                    </Button>
                </div>
                </Modal.Footer>
            </Modal>}

            <Modal
                className='verifiedModal bootstrap-4-backport'
                show={showDialog}
                onHide={()=>setShowDialog(false)}
                animation={false}
                backdrop='static'
                centered
            >   
                <Modal.Body style={{margin:0, padding:'32px 0'}}>
                    <Row>
                        <Col xs={12} style={{textAlign:'center', marginBottom:'32px'}}><img src={VerifedAccount} alt="verified"/></Col>
                    </Row>
                    <Row>
                        <Col><Typography variant='headline3' className='modal-column label-cell'>First Name:</Typography></Col>
                        <Col><Typography variant='body1' className='modal-column'>{verificationSubmission?.firstName}</Typography></Col>
                    </Row>
                    <Row>
                        <Col><Typography variant='headline3' className='label-cell'>Last Name:</Typography></Col>
                        <Col><Typography variant='body1' className='modal-column'>{verificationSubmission?.lastName}</Typography></Col>
                    </Row>
                    <Row>
                        <Col><Typography variant='headline3' className='label-cell'>Current Affiliation:</Typography></Col>
                        <Col><Typography variant='body1' className='modal-column'>{verificationSubmission?.company}</Typography></Col>
                    </Row>
                    <Row>
                        <Col><Typography variant='headline3' className='label-cell'>Location: </Typography> </Col>
                        <Col><Typography variant='body1' className='modal-column'>{verificationSubmission?.location}</Typography></Col>
                    </Row>
                    <Row>
                        <Col sm={6}><Button className='btn-container emptyButton' onClick={()=>{window.location.assign('/authenticated/validate')}}>Re-verify information</Button></Col>
                        <Col sm={6}><Button className='btn-container' variant='secondary' onClick={()=>setShowDialog(false)}>Close</Button></Col>
                    </Row>
                </Modal.Body>
            </Modal>
            <UnbindORCiDDialog show={showORCiDDialog} setShow={setShowORCiDDialog} orcid={orcid} redirectAfter='/authenticated/myaccount'/>
        </div>
    )
}

export default AccountSettings