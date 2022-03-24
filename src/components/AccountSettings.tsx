import React, { useState, useEffect } from 'react'
import { Button, Col, Container, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'
import { useSynapseContext } from 'synapse-react-client/dist/utils/SynapseContext'
import { UserProfile, UserBundle } from 'synapse-react-client/dist/utils/synapseTypes'
import { SynapseConstants } from 'synapse-react-client'
import { getMyUserBundle, updateMyUserProfile } from 'synapse-react-client/dist/utils/SynapseClient'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import StarterAccount from '../assets/StarterAccount.svg'
import VerifedAccount from '../assets/VerifiedAccount.svg'
import EditIcon from '../assets/RedEditPencil.svg'
import ChangePasswordPage from './ChangePassword'
import { ORCiDButton } from './ORCiDButton'
export type AccountSettingsProps = {
}

const AccountSettings = (props: AccountSettingsProps) => {
    const { accessToken } = useSynapseContext()
    const [ userProfile, setUserProfile ] = useState<UserProfile>()
    const [ orcid, setOrcid ] = useState<string>()
    const [ verified, setVerfied ] = useState<boolean>()
    const [ editUsername, setEditUsername] = useState<boolean>()
    const [ editEmail, setEditEmail] = useState<boolean>()
    const [ changePW, setChangePW] = useState<boolean>()
    const [ updatedUsername, setUpdatedUsername] = useState<string>('')
    const [ updatedEmail, setUpdatedEmail] = useState<string>('')

    const onUpdateUserProfile = async (event: React.SyntheticEvent) => {
        event.preventDefault()
        try{
            if(userProfile && editUsername && updatedUsername){
                userProfile.userName = updatedUsername
                const updatedProfile = await updateMyUserProfile(userProfile, accessToken)
                setUserProfile(updatedProfile)
            }

            // Placeholder for updating emails
            // if(userProfile && editEmail && updatedEmail){
            //     userProfile.emails = [...userProfile.emails!, updatedEmail]
            //     const updatedProfile = await updateMyUserProfile(userProfile, accessToken)
            //     setUserProfile(updatedProfile)
            //     console.log(updatedProfile)
            //     console.log(userProfile)
            // }
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
                console.log(bundle.verificationSubmission)
            } catch (err: any) {
                displayToast(err.reason as string, 'danger')
            }
        }
        getData()
        console.log('hello')
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
                    value = {updatedValue}/>
                <Button style={{width:'190px'}} className='btn-container emptyButton' onClick={cancelEdit}>Cancel</Button>&nbsp;&nbsp;
                <Button style={{width:'190px'}} className='btn-container' variant='secondary' onClick={onUpdateUserProfile}>Save Changes</Button>
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
                        <div>
                            <img src={VerifedAccount} alt="verified"/> 
                            <p style={{marginTop:'8px'}}>Verified Account</p>
                        </div>
                        : 
                        <div>
                            <img src={StarterAccount} alt="starter"/>
                            <p style={{marginTop:'8px'}}>Starter Account</p>
                        </div>
                        }
                    </Col>
                    <Col sm={9}>
                        <table style={{display:"inline-block"}}>
                            <tbody>
                                <tr>
                                    {!!!editUsername ? 
                                    <>
                                        <td>Username: </td>
                                        <td>
                                            {userProfile?.userName}
                                            &nbsp;&nbsp;&nbsp;
                                            <button onClick={()=>{
                                                setEditUsername(true) 
                                                setChangePW(false)
                                                setEditEmail(false)}}>
                                                <img src={EditIcon} alt="edit icon"/>
                                            </button>
                                        </td>
                                    </>
                                    : <td colSpan={2}>{EditField('Username', updatedUsername,setUpdatedUsername)}</td>
                                    }
                                </tr>
                                <tr>
                                    {!!!editEmail ? 
                                    <>
                                        <td>Email: </td>
                                        <td>
                                            {userProfile?.emails?.slice(-1)[0]}
                                            &nbsp;&nbsp;&nbsp;
                                            <button onClick={()=>{
                                                setEditEmail(true)
                                                setChangePW(false)
                                                setEditUsername(false)}}>
                                                <img src={EditIcon} alt="edit icon"/>
                                            </button>
                                        </td>
                                    </>
                                    : <td colSpan={2}>{EditField('Email', updatedEmail, setUpdatedEmail)}</td>
                                    }
                                </tr>
                                <tr>
                                    {!!!changePW ?
                                    <>
                                        <td>Password: </td>
                                        <td>
                                            **********
                                            &nbsp;&nbsp;&nbsp;
                                            <button onClick={()=>setChangePW(true)}><img src={EditIcon} alt="edit icon"/></button>
                                        </td>
                                    </>
                                    : <td colSpan={2}><ChangePasswordPage/></td>
                                    }
                                </tr>
                                {orcid &&
                                    <tr>
                                        <td>ORCiD: </td>
                                        <td>
                                            {orcid}
                                            &nbsp;&nbsp;&nbsp;
                                            <ORCiDButton editButton={true} redirectAfter={window.location.href}/>
                                        </td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AccountSettings