import React, { useState, useEffect } from 'react'
import { Button, Col, Container, FormControl, FormGroup, FormLabel, Modal, Row } from 'react-bootstrap'
import { useSynapseContext } from 'synapse-react-client/dist/utils/SynapseContext'
import { UserProfile, UserBundle } from 'synapse-react-client/dist/utils/synapseTypes'
import { SynapseConstants, Typography } from 'synapse-react-client'
import { getMyUserBundle, updateMyUserProfile } from 'synapse-react-client/dist/utils/SynapseClient'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import StarterAccount from '../assets/StarterAccount.svg'
import VerifedAccount from '../assets/VerifiedAccount.svg'
import CheckmarkBadgeLight from '../assets/CheckmarkBadgeLight.svg'
import EditIcon from '../assets/RedEditPencil.svg'
import ChangePasswordPage from './ChangePassword'
import { ORCiDButton } from './ORCiDButton'
import { getSearchParam } from 'URLUtils'
import { getSourceAppRedirectURL } from './SourceApp'
export type AccountSettingsProps = {
}

const AccountSettings = (props: AccountSettingsProps) => {
    const { accessToken } = useSynapseContext()
    const [ userProfile, setUserProfile ] = useState<UserProfile>()
    const [ orcid, setOrcid ] = useState<string>()
    const [ verified, setVerfied ] = useState<boolean>()
    const [ editUsername, setEditUsername] = useState<boolean>(false)
    const [ editEmail, setEditEmail] = useState<boolean>(false)
    const [ changePW, setChangePW] = useState<boolean>(false)
    const [ isShowingWelcomeScreen, setIsShowingWelcomeScreen] = useState<boolean>(false)
    const [ updatedUsername, setUpdatedUsername] = useState<string>('')
    const [ updatedEmail, setUpdatedEmail] = useState<string>('')

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
            } catch (err: any) {
                displayToast(err.reason as string, 'danger')
            }
        }
        getData()
    }, [accessToken])

    // Closes any forms and resets the fields.
    const cancelEdit = () => {
        setEditUsername(false)
        setUpdatedUsername('')
        setEditEmail(false)
        setUpdatedEmail('')
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
                <Button className='btn-container' variant='secondary' onClick={onUpdateUserProfile}>
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
                    <Col sm={3}>
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
                    </Col>
                    <Col sm={9}>
                        <div className="grid-container">
                            {editUsername ? 
                                <div className='edit-cell'>{EditField('Username', updatedUsername,setUpdatedUsername)}</div>
                                : <>
                                    <div className='label-cell'>Username:</div>
                                    <div>
                                        {userProfile?.userName}
                                        <button onClick={()=>{
                                            setEditUsername(true) 
                                            setChangePW(false)
                                            setEditEmail(false)}}>
                                            <img src={EditIcon} alt="edit icon"/>
                                        </button>
                                    </div>
                                </>
                            }
                            {editEmail ? 
                                <div className='edit-cell'>{EditField('Email', updatedEmail, setUpdatedEmail)}</div>
                                : <>
                                    <div className='label-cell'>Email: </div>
                                        <div>
                                        {userProfile?.emails?.slice(-1)[0]}
                                        <button onClick={()=>{
                                            setEditEmail(true)
                                            setChangePW(false)
                                            setEditUsername(false)}}>
                                            <img src={EditIcon} alt="edit icon"/>
                                        </button>
                                    </div>
                                </>
                            }
                            {changePW ?
                            <div className='edit-cell'><ChangePasswordPage /></div>
                            : <>
                                <div className='label-cell'>Password: </div>
                                <div className='password-cell'>
                                    **********
                                    <button onClick={()=>setChangePW(true)}><img src={EditIcon} alt="edit icon"/></button>
                                </div>
                            </>
                            }
                            {orcid &&
                            <>
                                <div className='label-cell'>OrcID: </div>
                                <div className='orcid-cell'>
                                    {orcid}
                                    <ORCiDButton editButton={true} redirectAfter={window.location.href}/>
                                </div>
                            </>
                            }
                        </div>
                    </Col>
                </Row>
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
                            <div className="welcomeTitle">
                                <Typography variant='headline1'>
                                    Welcome to your Starter Sage Account
                                </Typography>
                            </div>
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
                        variant="default"
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
        </div>
    )
}

export default AccountSettings