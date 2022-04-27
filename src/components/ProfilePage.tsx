import React, { useState, useEffect } from 'react'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import { getUserProfile, updateMyUserProfile } from 'synapse-react-client/dist/utils/SynapseClient'
import { UserProfile } from 'synapse-react-client/dist/utils/synapseTypes'
import { useSynapseContext } from 'synapse-react-client/dist/utils/SynapseContext'
import { Col, Container, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'
import MailIcon from 'assets/mail.svg'
import LinkIcon from 'assets/link.svg'
import EditIcon from '../assets/RedEditPencil.svg'
import { Typography } from 'synapse-react-client'

// import { useGetUserProfileWithProfilePic } from 'synapse-react-client/src/lib/utils/hooks/SynapseAPI/useUserBundle'

export type ProfilePageProps={}

export const ProfilePage = (props: ProfilePageProps) => {
    const { accessToken } = useSynapseContext()
    const [ userProfile, setUserProfile ] = useState<UserProfile>()
    const [userName, setUserName] = useState<string|undefined>()
    const [firstName, setFirstName] = useState<string|undefined>()
    const [lastName, setLastName] = useState<string|undefined>()
    const [position, setPosition] = useState<string|undefined>()
    const [company, setCompany] = useState<string|undefined>()
    const [location, setLocation] = useState<string|undefined>()
    const [summary, setSummary] = useState<string|undefined>()
    const [url, setUrl] = useState<string|undefined>()
    const [editing, setEditing] = useState(false)

    useEffect(()=>{
        const getProfile = async () => {
        try{
            const user = await getUserProfile(accessToken)
            setUserProfile(user)
            setUserName(user.userName)
            setFirstName(user.firstName)
            setLastName(user.lastName)
            setPosition(user.position)
            setCompany(user.company)
            setLocation(user.location)
            setSummary(user.summary)
            setUrl(user.url)
        } catch(err:any) {
            displayToast(err.reason as string, 'danger')
        }
    }
    getProfile()
    },[])
    

    // Profile Pic - PORTALS-2161
    // const { data: profileAndImage } = useGetUserProfileWithProfilePic(
    //     userProfile?.ownerId as string
    // )

    // console.log(userProfile && profileAndImage)
    // const profilePic = () => {
    //     return(
    //         <svg width="134" height="132" viewBox="0 0 134 132" fill="none" xmlns="http://www.w3.org/2000/svg">
    //             <circle cx="66" cy="66" r="65.5" stroke="black"/>
    //             <path d="M114.928 92.4041C115.126 92.187 115.468 92.187 115.666 92.4041L119.883 97.0199C119.994 97.1408 120.156 97.1999 120.319 97.1783L126.516 96.353C126.807 96.3142 127.069 96.5339 127.082 96.8276L127.345 103.074C127.352 103.238 127.438 103.387 127.577 103.475L132.855 106.827C133.103 106.984 133.162 107.321 132.983 107.554L129.169 112.508C129.07 112.638 129.04 112.808 129.089 112.964L130.978 118.924C131.067 119.204 130.896 119.5 130.609 119.564L124.503 120.908C124.343 120.943 124.21 121.054 124.148 121.205L121.764 126.985C121.652 127.257 121.331 127.374 121.07 127.238L115.529 124.343C115.384 124.267 115.211 124.267 115.066 124.343L109.524 127.238C109.264 127.374 108.943 127.257 108.831 126.985L106.447 121.205C106.384 121.054 106.252 120.943 106.092 120.908L99.9859 119.564C99.6988 119.5 99.5279 119.204 99.6167 118.924L101.506 112.964C101.555 112.808 101.525 112.638 101.425 112.508L97.6118 107.554C97.4325 107.321 97.4919 106.984 97.74 106.827L103.018 103.475C103.156 103.387 103.243 103.238 103.25 103.074L103.513 96.8276C103.525 96.5339 103.787 96.3142 104.079 96.353L110.276 97.1783C110.438 97.1999 110.601 97.1408 110.711 97.0199L114.928 92.4041Z" fill="#2A2A2A"/>
    //             <path d="M108.436 109.725L113.697 115.279L123.303 105.723" stroke="#FEFEFE" stroke-width="2"/>
    //         </svg>
    //     )
    // }

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
                await updateMyUserProfile(userProfile, accessToken)
                displayToast('Profile has been successfully updated', 'success')
                setEditing(false)
            }
        } catch(err:any){
            displayToast(err.reason as string, 'danger')
        }
    }

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
                    <button onClick={()=>setEditing(false)}>Cancel</button>
                    </> 
                    }
                </div>
                <Row>
                    <Col sm={4} >
                        IMAGE GOES HERE
                    </Col>
                    <Col sm={8}>
                        <div className='grid-container'>
                            <div className='containers'>
                                {!!!editing ? 
                                    <Typography variant='headline3'>{`${firstName} ${lastName}`}</Typography>
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
                                    {position} <br/>
                                    {company} <br/>
                                    {location}
                                </div> : 
                                <FormGroup>
                                    {EditField('Position', position, setPosition)}
                                    {EditField('Company', company, setCompany)}
                                    {EditField('Location', location, setLocation)}
                                </FormGroup>   
                            }
                            </div>
                            <div className='containers'>
                                {!!!editing ? summary : 
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
                                <a href={"mailto:" + userName}><img className='contact-icon' src={MailIcon}/>{userName}</a>
                            </div>
                            <div className='containers'>
                                {!!!editing ? <a href={url}><img className='contact-icon' src={LinkIcon}/>{url}</a> : EditField('Website', url, setUrl)}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}