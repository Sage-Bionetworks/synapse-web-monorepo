import React, { useState, useEffect } from 'react'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import { getFileHandleByIdURL, getMyUserBundle, updateMyUserProfile, uploadFile } from 'synapse-react-client/dist/utils/SynapseClient'
import { FileUploadComplete } from 'synapse-react-client/dist/utils/synapseTypes'
import { UserBundle } from 'synapse-react-client/dist/utils/synapseTypes'
import { useSynapseContext } from 'synapse-react-client/dist/utils/SynapseContext'
import { Button, Col, Container, FormControl, FormGroup, FormLabel, Modal, Row } from 'react-bootstrap'
import MailIcon from 'assets/mail.svg'
import LinkIcon from 'assets/link.svg'
import EditIcon from 'assets/RedEditPencil.svg'
import VerifiedBorder from 'assets/VerifiedProfilePic.svg'
import { SynapseConstants, Typography } from 'synapse-react-client'
import Cropper from "react-easy-crop"
import { Area } from 'react-easy-crop/types'
import Slider from "@material-ui/core/Slider"
import { getCroppedImg } from './CropImage'

export type ProfilePageProps = {}

export const ProfilePage = (props: ProfilePageProps) => {
    const { accessToken } = useSynapseContext()

    const [userBundle, setUserBundle] = useState<UserBundle>()
    const [firstName, setFirstName] = useState<string | undefined>()
    const [lastName, setLastName] = useState<string | undefined>()
    const [position, setPosition] = useState<string | undefined>()
    const [company, setCompany] = useState<string | undefined>()
    const [location, setLocation] = useState<string | undefined>()
    const [summary, setSummary] = useState<string | undefined>()
    const [url, setUrl] = useState<string | undefined>()
    const [profilePicUrl, setProfilePicUrl] = useState<string | undefined>()
    const [originalPicUrl, setOriginalPicUrl] = useState<string | undefined>()
    const [fileHandleId, setFileHandleId] = useState<string | undefined>()
    const [verified, setVerfied] = useState<boolean>()
    const [editing, setEditing] = useState(false)

    const [image, setImage] = useState<string | undefined>();
    const [croppedArea, setCroppedArea] = useState<Area | undefined>();
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [openCropModal, setOpenCropModal] = useState(false)
    const [imageLoading, setImageLoading] = useState(false)

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
            if (bundle.userProfile?.profilePicureFileHandleId) {
                picUrl = await getFileHandleByIdURL(bundle.userProfile?.profilePicureFileHandleId as string, accessToken)
            }
            setUserBundle(bundle)
            unpackBundle(bundle)
            setProfilePicUrl(picUrl)
            setOriginalPicUrl(picUrl)
        } catch (err: any) {
            displayToast(err.reason as string, 'danger')
        }
    }

    const updateUserProfile = async () => {
        try {
            if (userBundle?.userProfile) {
                userBundle.userProfile.firstName = firstName as string
                userBundle.userProfile.lastName = lastName as string
                userBundle.userProfile.position = position as string
                userBundle.userProfile.company = company as string
                userBundle.userProfile.location = location as string
                userBundle.userProfile.summary = summary as string
                userBundle.userProfile.url = url as string
                userBundle.userProfile.profilePicureFileHandleId = fileHandleId as string
                await updateMyUserProfile(userBundle.userProfile, accessToken)
                displayToast('Profile has been successfully updated', 'success')
                getProfile()
                setEditing(false)
            }
        } catch (err: any) {
            displayToast(err.reason as string, 'danger')
        }
    }

    useEffect(() => {
        getProfile()
    }, [accessToken,])

    interface EditFieldProps {
        label: string
        updatedValue: string | undefined
        updateFn: Function
    }

    const EditField: React.FC<EditFieldProps> = ({ label, updatedValue, updateFn }) => {
        return (
            <div className='edit-field'>
                <FormLabel>{label}</FormLabel>
                <FormControl
                    onChange={e => updateFn(e.target.value)}
                    value={updatedValue}
                    placeholder={`Enter ${label}`}
                />
            </div>
        )
    }

    const onCancel = async () => {
        unpackBundle(userBundle!)
        setProfilePicUrl(originalPicUrl)
        setEditing(false)
    }

    const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImage(reader.result as string);
                setOpenCropModal(true)
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };

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
                onChange={onSelectFile}
                style={{ display: 'none' }}
            />
            <Button style={{ marginTop: '16px' }} variant='secondary' onClick={clickHandler}>Upload File</Button>
        </>
    )

    const decoratedProfilePic = (
        <>
            {verified ? <div className='verified-img-container'>
                <img className='verified-border' src={VerifiedBorder} />
                <img className='verified-img' src={profilePicUrl} />
                {editing && uploadImg}
            </div> :
                <div className='non-verified-profile-pic'>
                    <img className='non-verified-img' src={profilePicUrl} />
                    {editing && uploadImg}
                </div>
            }
        </>
    )

    const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
        setCroppedArea(croppedAreaPixels);
    };

    const onCrop = async () => {
        const file: File = await getCroppedImg(image!, croppedArea!)
        console.log(file)
        try {
            setImageLoading(true)
            const resp: FileUploadComplete = await uploadFile(accessToken, file.name, file)
            const picUrl = await getFileHandleByIdURL(resp.fileHandleId, accessToken)
            setFileHandleId(resp.fileHandleId)
            setProfilePicUrl(picUrl)
        } catch (err: any) {
            displayToast(err.reason as string, 'danger')
        }
        setImageLoading(false)
        closeCropModal()
    }

    const closeCropModal = () => {
        setCroppedArea(undefined)
        setCrop({ x: 0, y: 0 })
        setImage('')
        setZoom(1)
        setOpenCropModal(false)
    }

    return (
        <div className="bootstrap-4-backport blue-background profile-page">
            <Container>
                <div className='edit-btn-container'>
                    {!editing ?
                        <>
                            <img src={EditIcon} alt="edit icon" />
                            <button onClick={() => setEditing(true)}>Edit Public Profile</button>
                        </>
                        :
                        <>
                            <button onClick={() => updateUserProfile()}>Save Changes</button>
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
                                    <Typography variant='headline3'>
                                        {`${userBundle?.userProfile?.firstName} ${userBundle?.userProfile?.lastName}`}
                                    </Typography>
                                    :
                                    <FormGroup style={{ display: 'inline-block' }}>
                                        <EditField label='First name' updatedValue={firstName} updateFn={setFirstName} />
                                        <EditField label='Last name' updatedValue={lastName} updateFn={setLastName} />
                                    </FormGroup>
                                }
                            </div>
                            <div className='containers'>
                                {!editing ?
                                    <div>
                                        {userBundle?.userProfile?.position} <br />
                                        {userBundle?.userProfile?.company} <br />
                                        {userBundle?.userProfile?.location}
                                    </div>
                                    :
                                    <FormGroup>
                                        <EditField label='Position' updatedValue={position} updateFn={setPosition} />
                                        <EditField label='Company' updatedValue={company} updateFn={setCompany} />
                                        <EditField label='Location' updatedValue={location} updateFn={setLocation} />
                                    </FormGroup>
                                }
                            </div>
                            <div className='containers'>
                                {!editing ? userBundle?.userProfile?.summary :
                                    <FormGroup>
                                        <FormLabel>Summary</FormLabel>
                                        <FormControl
                                            onChange={e => setSummary(e.target.value)}
                                            value={summary}
                                            placeholder='Enter summary'
                                            as='textarea'
                                            rows={3}
                                        />
                                    </FormGroup>
                                }
                            </div>
                            <div className='containers'>
                                <a href={"mailto:" + userBundle?.userProfile?.userName + "@synapse.org"}>
                                    <img className='contact-icon' src={MailIcon} />
                                    {userBundle?.userProfile?.userName}
                                </a>
                            </div>
                            <div className='containers'>
                                {!editing ?
                                    userBundle?.userProfile?.url &&
                                    <a href={userBundle?.userProfile?.url}>
                                        <img className='contact-icon' src={LinkIcon} />{userBundle?.userProfile?.url}
                                    </a>
                                    :
                                    <EditField label='Website' updatedValue={url} updateFn={setUrl} />
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Modal
                className='bootstrap-4-backport'
                show={openCropModal}
                onHide={() => setOpenCropModal(false)}
                animation={false}
                centered
            >
                <Modal.Body style={{ width: '400px', height: '400px', margin: '20px auto' }}>
                    <div>
                        <Cropper
                            image={image}
                            crop={crop}
                            zoom={zoom}
                            aspect={1}
                            cropShape='round'
                            onCropChange={setCrop}
                            onZoomChange={setZoom}
                            onCropComplete={onCropComplete}
                        />
                    </div>
                </Modal.Body>
                <Slider
                    min={1}
                    max={3}
                    step={0.1}
                    value={zoom}
                    onChange={(e, zoom) => setZoom(zoom as number)}
                />
                <div className='modal-btn-container'>
                    <Button
                        className='modal-btn btn-container emptyButton'
                        onClick={closeCropModal}>
                        Cancel
                    </Button>
                    <Button
                        disabled={imageLoading}
                        className='modal-btn btn-container'
                        variant='secondary'
                        onClick={!imageLoading ? onCrop : () => ''}>
                        {imageLoading ? 'Loading...' : 'Save'}
                    </Button>
                </div>
            </Modal>
        </div>
    )
}