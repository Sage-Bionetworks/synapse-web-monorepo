import React, { useState, useEffect } from 'react'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import { getFileHandleByIdURL, getMyUserBundle, updateMyUserProfile, uploadFile } from 'synapse-react-client/dist/utils/SynapseClient'
import { FileUploadComplete, UserBundle, UserProfile } from 'synapse-react-client/dist/utils/synapseTypes'
import { useSynapseContext } from 'synapse-react-client/dist/utils/SynapseContext'
import { Button, Col, Container, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'
import MailIcon from 'assets/mail.svg'
import LinkIcon from 'assets/link.svg'
import EditIcon from 'assets/RedEditPencil.svg'
import VerifiedBorder from 'assets/VerifiedProfilePic.svg'
import { SynapseConstants, Typography } from 'synapse-react-client'

export type ProfilePageProps={}

export const ProfilePage = (props: ProfilePageProps) => {
    const { accessToken } = useSynapseContext()

    const [ userProfile, setUserProfile ] = useState<UserProfile>()
    const [ firstName, setFirstName ] = useState<string|undefined>()
    const [ lastName, setLastName ] = useState<string|undefined>()
    const [ position, setPosition ] = useState<string|undefined>()
    const [ company, setCompany ] = useState<string|undefined>()
    const [ location, setLocation ] = useState<string|undefined>()
    const [ summary, setSummary ] = useState<string|undefined>()
    const [ url, setUrl ] = useState<string|undefined>()
    const [ profilePicUrl, setProfilePicUrl ] = useState<string|undefined>()
    const [ fileHandleId, setFileHandleId ] = useState<string|undefined>()
    const [ verified, setVerfied ] = useState<boolean>()
    const [ editing, setEditing ] = useState(false)

    const getProfile = async () => {
        try{
            const mask =
            SynapseConstants.USER_BUNDLE_MASK_IS_VERIFIED |
            SynapseConstants.USER_BUNDLE_MASK_USER_PROFILE

            const bundle: UserBundle = await getMyUserBundle(mask, accessToken)
            const picUrl = await getFileHandleByIdURL(bundle.userProfile?.profilePicureFileHandleId as string,accessToken)
            setUserProfile(bundle.userProfile)
            setFirstName(bundle.userProfile?.firstName)
            setLastName(bundle.userProfile?.lastName)
            setPosition(bundle.userProfile?.position)
            setCompany(bundle.userProfile?.company)
            setLocation(bundle.userProfile?.location)
            setSummary(bundle.userProfile?.summary)
            setUrl(bundle.userProfile?.url)
            setProfilePicUrl(picUrl)
            setVerfied(bundle.isVerified)
        } catch(err:any) {
            displayToast(err.reason as string, 'danger')
        }
    }

    const updateUserProfile = async () => {
        try{
            if(userProfile){
                userProfile.firstName = firstName as string
                userProfile.lastName = lastName as string
                userProfile.position = position as string
                userProfile.company = company as string
                userProfile.location = location as string
                userProfile.summary = summary as string
                userProfile.url = url as string
                userProfile.profilePicureFileHandleId = fileHandleId as string
                await updateMyUserProfile(userProfile, accessToken)
                displayToast('Profile has been successfully updated', 'success')
                getProfile()
                setEditing(false)
            }
        } catch(err:any){
            displayToast(err.reason as string, 'danger')
        }
    }

    useEffect(()=>{
        getProfile()
    },[accessToken,])

    const EditField = (label: string, updatedValue: string|undefined, updateFn: Function) => {
        return(
            <div className='edit-field'>
                <FormLabel>{label}</FormLabel>
                <FormControl
                    onChange={e=>updateFn(e.target.value)}
                    value={updatedValue}
                    placeholder= {`Enter ${label}`}
                /> 
            </div>
        )
    }

    const onCancel = async () => {
        getProfile()
        setEditing(false)
    }

    const uploadHandler = async(e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files){
            const file = e.target.files[0]
            try{
                const resp: FileUploadComplete = await uploadFile(accessToken, file.name, file)
                const picUrl = await getFileHandleByIdURL(resp.fileHandleId,accessToken)
                setFileHandleId(resp.fileHandleId)
                setProfilePicUrl(picUrl)
            } catch(err:any){
                console.error(err)
            }
        }
    }

    const hiddenFileInput = React.useRef<HTMLInputElement>(null)
    const clickHandler = () => {
        if (hiddenFileInput?.current!) {
          hiddenFileInput.current?.click()
        }
    }

    const uploadImg = (
        <>
            <input
                type={'file'}
                ref={hiddenFileInput}
                onChange={uploadHandler}
                style={{display: 'none'}}
            />
            <Button style={{marginTop:'16px'}} variant='secondary' onClick={clickHandler}>Upload File</Button>
        </>
    )

    const validProfilePic = (
        <>
            {verified ? <div className='verified-img-container'>
                <img className='verified-border' src={VerifiedBorder}/>
                <img className='verified-img' src={profilePicUrl}/>
                {editing && uploadImg}
            </div> :
            <div className='non-verified-profile-pic'>
                <img className='non-verified-img' src={profilePicUrl}/>
                {editing && uploadImg}
            </div>
            }
        </>
    ) 

    return(
        <div className="bootstrap-4-backport blue-background profile-page">
            <Container>
                <div className='edit-btn-container'>
                    {!!!editing ? 
                    <>
                        <img src={EditIcon} alt="edit icon"/>
                        <button onClick={()=>setEditing(true)}>Edit Public Profile</button> 
                    </>
                    :
                    <>
                        <button onClick={()=>updateUserProfile()}>Save Changes</button>
                        <button onClick={onCancel}>Cancel</button>
                    </> 
                    }
                </div>
                <Row>
                    <Col sm={3} >
                        {validProfilePic}   
                    </Col>
                    <Col sm={9}>
                        <div className='grid-container'>
                            <div className='containers'>
                                {!!!editing ? 
                                    <Typography variant='headline3'>{`${userProfile?.firstName} ${userProfile?.lastName}`}</Typography>
                                : 
                                <FormGroup style={{display:'inline-block'}}>
                                    {EditField('First name', firstName, setFirstName)}
                                    {EditField('Last name', lastName, setLastName)}
                                </FormGroup>
                                }
                            </div>
                            <div className='containers'>
                                {!!!editing ? 
                                <div>
                                    {userProfile?.position} <br/>
                                    {userProfile?.company} <br/>
                                    {userProfile?.location}
                                </div> : 
                                <FormGroup>
                                    {EditField('Position', position, setPosition)}
                                    {EditField('Company', company, setCompany)}
                                    {EditField('Location', location, setLocation)}
                                </FormGroup>   
                            }
                            </div>
                            <div className='containers'>
                                {!!!editing ? userProfile?.summary : 
                                <FormGroup>
                                <FormLabel>Summary</FormLabel>
                                <FormControl
                                    onChange={e=>setSummary(e.target.value)}
                                    value={summary}
                                    placeholder='Enter summary'
                                    as='textarea'
                                    rows={3}
                                /> 
                                </FormGroup>
                                }
                            </div>
                            <div className='containers'>
                                <a href={"mailto:" + userProfile?.userName}><img className='contact-icon' src={MailIcon}/>{userProfile?.userName}</a>
                            </div>
                            <div className='containers'>
                                {!!!editing ? <a href={userProfile?.url}><img className='contact-icon' src={LinkIcon}/>{userProfile?.url}</a> : EditField('Website', url, setUrl)}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}