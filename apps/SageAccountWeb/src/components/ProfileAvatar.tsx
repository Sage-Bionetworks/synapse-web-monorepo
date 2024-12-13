import Person from '@mui/icons-material/Person'
import { Box, IconButton, SxProps } from '@mui/material'
import Slider from '@mui/material/Slider'
import {
  FileUploadComplete,
  UserProfile,
} from '@sage-bionetworks/synapse-types'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import Cropper, { Area } from 'react-easy-crop'
import { ConfirmationDialog } from 'synapse-react-client/components/ConfirmationDialog/ConfirmationDialog'
import IconSvg from 'synapse-react-client/components/IconSvg/IconSvg'
import { displayToast } from 'synapse-react-client/components/ToastMessage/ToastMessage'
import SynapseClient from 'synapse-react-client/synapse-client'
import { useSynapseContext } from 'synapse-react-client/utils/context/SynapseContext'
import { getCroppedImg } from './CropImage'

export type ProfileAvatarProps = {
  userProfile?: UserProfile
  onProfileUpdated: () => void
}

export const ProfileAvatar = (props: ProfileAvatarProps) => {
  const { userProfile, onProfileUpdated } = props
  const { accessToken } = useSynapseContext()
  const [profilePicUrl, setProfilePicUrl] = useState<string | undefined>()
  const [image, setImage] = useState<string | undefined>()
  const [croppedArea, setCroppedArea] = useState<Area | undefined>()
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [openCropModal, setOpenCropModal] = useState(false)
  const [imageLoading, setImageLoading] = useState(false)

  useEffect(() => {
    if (userProfile?.profilePicureFileHandleId) {
      SynapseClient.getFileHandleByIdURL(
        userProfile.profilePicureFileHandleId,
        accessToken,
      ).then(picUrl => {
        setProfilePicUrl(picUrl)
      })
    }
  }, [accessToken, userProfile])

  const updateUserProfile = async (newFileHandleId: string) => {
    try {
      if (userProfile) {
        userProfile.profilePicureFileHandleId = newFileHandleId
        await SynapseClient.updateMyUserProfile(userProfile, accessToken)
        displayToast('Profile picture has been successfully updated', 'success')
        onProfileUpdated()
      }
    } catch (err: any) {
      displayToast(err.reason as string, 'danger')
    }
  }

  const onSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader()
      reader.addEventListener('load', () => {
        setImage(reader.result as string)
        setOpenCropModal(true)
      })
      reader.readAsDataURL(e.target.files[0])
    }
  }

  const hiddenFileInput = useRef<HTMLInputElement>(null)
  const clickHandler = () => {
    if (hiddenFileInput?.current) {
      hiddenFileInput.current.click()
    }
  }

  const UploadImageButton = () => {
    const uploadButtonStyle: SxProps = {
      backgroundColor: 'grey.200',
      position: 'absolute',
      marginLeft: '100px',
      marginTop: '-65px',
      '&:hover': { backgroundColor: 'grey.300' },
    }

    return (
      <>
        <input
          type={'file'}
          ref={hiddenFileInput}
          onChange={onSelectFile}
          style={{ display: 'none' }}
        />
        <IconButton sx={uploadButtonStyle} onClick={clickHandler}>
          <IconSvg icon="edit" wrap={false} />
        </IconButton>
      </>
    )
  }

  const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedArea(croppedAreaPixels)
  }

  const onCrop = async () => {
    const file: File = await getCroppedImg(
      image!,
      croppedArea!,
      cropperSize,
      cropperSize,
    )
    try {
      setImageLoading(true)
      const resp: FileUploadComplete = await SynapseClient.uploadFile(
        accessToken,
        file.name,
        file,
      )
      await updateUserProfile(resp.fileHandleId)
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
  const cropperSize = 400
  const cropperSizePx = `${cropperSize}px`

  return (
    <div className="profile-avatar">
      <>
        {userProfile?.profilePicureFileHandleId ? (
          <>
            <div className="profile-pic">
              <img src={profilePicUrl} />
            </div>
          </>
        ) : (
          <Person
            sx={{
              color: 'lightgrey',
              height: '130px',
              width: '130px',
              display: 'block',
              margin: '20px 0px',
            }}
          />
        )}
        <UploadImageButton />
      </>

      <ConfirmationDialog
        open={openCropModal}
        title="Crop Image"
        fullWidth
        onCancel={() => setOpenCropModal(false)}
        content={
          <>
            <Box
              width={cropperSizePx}
              height={cropperSizePx}
              margin="20px auto"
              position="relative"
            >
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
            </Box>
            <Box justifyContent="center" display="flex">
              <Slider
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e, zoom) => setZoom(zoom as number)}
                sx={{ width: cropperSizePx }}
              />
            </Box>
          </>
        }
        onConfirm={() => {
          if (!imageLoading) {
            onCrop()
          }
        }}
        confirmButtonProps={{
          children: imageLoading ? 'Loading...' : 'Save',
          disabled: imageLoading,
        }}
      />
    </div>
  )
}
