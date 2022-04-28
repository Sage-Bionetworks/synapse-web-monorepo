import React, { useState, useEffect } from 'react'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import { getFileHandleByIdURL, getMyUserBundle, updateMyUserProfile, uploadFile } from 'synapse-react-client/dist/utils/SynapseClient'
import { FileUploadComplete, UserBundle } from 'synapse-react-client/dist/utils/synapseTypes'
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

    const [ bundleState, setBundleState] = useState<UserBundle>()
    const [ firstName, setFirstName ] = useState<string|undefined>()
    const [ lastName, setLastName ] = useState<string|undefined>()
    const [ position, setPosition ] = useState<string|undefined>()
    const [ company, setCompany ] = useState<string|undefined>()
    const [ location, setLocation ] = useState<string|undefined>()
    const [ summary, setSummary ] = useState<string|undefined>()
    const [ url, setUrl ] = useState<string|undefined>()
    const [ profilePicUrl, setProfilePicUrl ] = useState<string|undefined>()
    const [ originalPicUrl, setOriginalPicUrl ] = useState<string|undefined>()
    const [ fileHandleId, setFileHandleId ] = useState<string|undefined>()
    const [ verified, setVerfied ] = useState<boolean>()
    const [ editing, setEditing ] = useState(false)

    const unpackBundle = (bundle: UserBundle) => {
        setFirstName(bundle.userProfile?.firstName)
        setLastName(bundle.userProfile?.lastName)
        setPosition(bundle.userProfile?.position)
        setCompany(bundle.userProfile?.company)
        setLocation(bundle.userProfile?.location)
        setSummary(bundle.userProfile?.summary)
        setUrl(bundle.userProfile?.url)
        setFileHandleId(bundle.userProfile?.profilePicureFileHandleId)
        setVerfied(bundle.isVerified)
    }

    const getProfile = async () => {
        try {
            const mask =
            SynapseConstants.USER_BUNDLE_MASK_IS_VERIFIED |
            SynapseConstants.USER_BUNDLE_MASK_USER_PROFILE

            const bundle: UserBundle = await getMyUserBundle(mask, accessToken)
            let picUrl
            if(bundle.userProfile?.profilePicureFileHandleId){
                picUrl = await getFileHandleByIdURL(bundle.userProfile?.profilePicureFileHandleId as string,accessToken)
            }
            setBundleState(bundle)
            unpackBundle(bundle)
            setProfilePicUrl(picUrl)
            setOriginalPicUrl(picUrl)
        } catch(err:any) {
            displayToast(err.reason as string, 'danger')
        }
    }

    const updateUserProfile = async () => {
        try {
            if(bundleState?.userProfile){
                bundleState.userProfile.firstName = firstName as string
                bundleState.userProfile.lastName = lastName as string
                bundleState.userProfile.position = position as string
                bundleState.userProfile.company = company as string
                bundleState.userProfile.location = location as string
                bundleState.userProfile.summary = summary as string
                bundleState.userProfile.url = url as string
                bundleState.userProfile.profilePicureFileHandleId = fileHandleId as string
                await updateMyUserProfile(bundleState.userProfile, accessToken)
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
        unpackBundle(bundleState!)
        setProfilePicUrl(originalPicUrl)
        setEditing(false)
    }

    const uploadHandler = async(e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files){
            const file = e.target.files[0]
            try {
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

    const decoratedProfilePic = (
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
                    {!editing ? 
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
                        {decoratedProfilePic}   
                    </Col>
                    <Col sm={9}>
                        <div className='grid-container'>
                            <div className='containers'>
                                {!editing ? 
                                    <Typography variant='headline3'>{`${bundleState?.userProfile?.firstName} ${bundleState?.userProfile?.lastName}`}</Typography>
                                : 
                                <FormGroup style={{display:'inline-block'}}>
                                    {EditField('First name', firstName, setFirstName)}
                                    {EditField('Last name', lastName, setLastName)}
                                </FormGroup>
                                }
                            </div>
                            <div className='containers'>
                                {!editing ? 
                                <div>
                                    {bundleState?.userProfile?.position} <br/>
                                    {bundleState?.userProfile?.company} <br/>
                                    {bundleState?.userProfile?.location}
                                </div> : 
                                <FormGroup>
                                    {EditField('Position', position, setPosition)}
                                    {EditField('Company', company, setCompany)}
                                    {EditField('Location', location, setLocation)}
                                </FormGroup>   
                            }
                            </div>
                            <div className='containers'>
                                {!editing ? bundleState?.userProfile?.summary : 
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
                                <a href={"mailto:" + bundleState?.userProfile?.userName + "@synapse.org"}><img className='contact-icon' src={MailIcon}/>{bundleState?.userProfile?.userName}</a>
                            </div>
                            {bundleState?.userProfile?.url && <div className='containers'>
                                {!editing ? <a href={bundleState?.userProfile?.url}><img className='contact-icon' src={LinkIcon}/>{bundleState?.userProfile?.url}</a> : EditField('Website', url, setUrl)}
                            </div>}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}