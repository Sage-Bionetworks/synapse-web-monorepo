import Skeleton from '@mui/material/Skeleton'
import Slider from '@mui/material/Slider'
import VerifiedBorder from 'assets/VerifiedProfilePic.svg'
import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { Modal } from 'react-bootstrap'
import Cropper from 'react-easy-crop'
import { Area } from 'react-easy-crop/types'
import { SynapseConstants } from 'synapse-react-client'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import {
  getFileHandleByIdURL,
  getMyUserBundle,
  updateMyUserProfile,
  uploadFile,
} from 'synapse-react-client/dist/utils/SynapseClient'
import { useSynapseContext } from 'synapse-react-client/dist/utils/SynapseContext'
import {
  FileUploadComplete,
  UserBundle,
} from 'synapse-react-client/dist/utils/synapseTypes'
import { getCroppedImg } from './CropImage'

export type ProfileAvatarProps = {}

export const ProfileAvatar = (props: ProfileAvatarProps) => {
  const { accessToken } = useSynapseContext()

  const [userBundle, setUserBundle] = useState<UserBundle>()
  const [profilePicUrl, setProfilePicUrl] = useState<string | undefined>()
  const [verified, setVerfied] = useState<boolean>()
  const [isLoading, setIsLoading] = useState(true)
  const [image, setImage] = useState<string | undefined>()
  const [croppedArea, setCroppedArea] = useState<Area | undefined>()
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [openCropModal, setOpenCropModal] = useState(false)
  const [imageLoading, setImageLoading] = useState(false)

  const getProfile = async () => {
    setIsLoading(true)
    try {
      const mask =
        SynapseConstants.USER_BUNDLE_MASK_IS_VERIFIED |
        SynapseConstants.USER_BUNDLE_MASK_USER_PROFILE

      const bundle: UserBundle = await getMyUserBundle(mask, accessToken)
      let picUrl
      if (bundle.userProfile?.profilePicureFileHandleId) {
        picUrl = await getFileHandleByIdURL(
          bundle.userProfile?.profilePicureFileHandleId as string,
          accessToken,
        )
      }
      setUserBundle(bundle)
      setVerfied(bundle.isVerified)
      setProfilePicUrl(picUrl)
    } catch (err: any) {
      displayToast(err.reason as string, 'danger')
    } finally {
      setIsLoading(false)
    }
  }

  const updateUserProfile = async (newFileHandleId: string) => {
    try {
      if (userBundle?.userProfile) {
        userBundle.userProfile.profilePicureFileHandleId =
          newFileHandleId as string
        await updateMyUserProfile(userBundle.userProfile, accessToken)
        displayToast('Profile picture has been successfully updated', 'success')
        getProfile()
      }
    } catch (err: any) {
      displayToast(err.reason as string, 'danger')
    }
  }

  useEffect(() => {
    try {
      getProfile()
    } catch (err: any) {
      displayToast(err.reason as string, 'danger')
    }
    getProfile()
  }, [accessToken])

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader()
      reader.addEventListener('load', () => {
        setImage(reader.result as string)
        setOpenCropModal(true)
      })
      reader.readAsDataURL(e.target.files[0])
    }
  }

  const hiddenFileInput = React.useRef<HTMLInputElement>(null)
  const clickHandler = () => {
    if (hiddenFileInput?.current) {
      hiddenFileInput.current.click()
    }
  }

  const UploadImageButton = () => {
    return (
      <>
        <input
          type={'file'}
          ref={hiddenFileInput}
          onChange={onSelectFile}
          style={{ display: 'none' }}
        />
        <Button
          className="upload-btn"
          variant="contained"
          onClick={clickHandler}
        >
          Upload File
        </Button>
      </>
    )
  }

  const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedArea(croppedAreaPixels)
  }

  const onCrop = async () => {
    const file: File = await getCroppedImg(image!, croppedArea!)
    try {
      setImageLoading(true)
      const resp: FileUploadComplete = await uploadFile(
        accessToken,
        file.name,
        file,
      )
      updateUserProfile(resp.fileHandleId)
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
    <div className="profile-avatar">
      <>
        {isLoading ? (
          <Skeleton variant="circular" width="130px" height="130px" />
        ) : (
          <>
            {verified ? (
              <>
                <div className="verified-img-container">
                  <img className="verified-border" src={VerifiedBorder} />
                  <img className="verified-img" src={profilePicUrl} />
                </div>
                <UploadImageButton />
              </>
            ) : (
              <>
                <div className="non-verified-profile-pic">
                  <img className="non-verified-img" src={profilePicUrl} />
                </div>
                <UploadImageButton />
              </>
            )}
          </>
        )}
      </>

      <Modal
        className="bootstrap-4-backport"
        show={openCropModal}
        onHide={() => setOpenCropModal(false)}
        animation={false}
        centered
      >
        <Modal.Body className="cropper-modal-body">
          <div>
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              aspect={1}
              cropShape="round"
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
        <div className="modal-btn-container">
          <Button
            className="modal-btn btn-container emptyButton"
            onClick={closeCropModal}
          >
            Cancel
          </Button>
          <Button
            disabled={imageLoading}
            className="modal-btn btn-container"
            variant="contained"
            onClick={!imageLoading ? onCrop : () => ''}
          >
            {imageLoading ? 'Loading...' : 'Save'}
          </Button>
        </div>
      </Modal>
    </div>
  )
}
