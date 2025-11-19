import { getEntity, getFiles } from '@/synapse-client/SynapseClient'
import { SynapseConstants } from '@/utils'
import { useSynapseContext } from '@/stores/SynapseContext/SynapseContext'
import {
  BatchFileRequest,
  BatchFileResult,
  FileEntity,
  FileHandleAssociateType,
  FileHandleAssociation,
} from '@sage-bionetworks/synapse-types'
import { useEffect, useState } from 'react'

export type SynapseVideoProps = {
  params: {
    width?: string
    height?: string
    videoId?: string
    vimeoId?: string
    oggSynapseId?: string
    mp4SynapseId?: string
    webmSynapseId?: string
  }
}

export default function SynapseVideo({ params }: SynapseVideoProps) {
  const { accessToken } = useSynapseContext()
  const [externalVideoUrl, setExternalVideoUrl] = useState<string>()
  const [synapseVideoPresignedUrl, setSynapseVideoPresignedUrl] =
    useState<string>()

  const videoWidth = params.width ?? ''
  const videoHeight = params.height ?? ''
  useEffect(() => {
    const getVideo = () => {
      if (params.videoId)
        setExternalVideoUrl(`https://www.youtube.com/embed/${params.videoId}`)
      else if (params.vimeoId)
        setExternalVideoUrl(`https://player.vimeo.com/video/${params.vimeoId}`)
      else {
        const videoKey =
          params.oggSynapseId || params.mp4SynapseId || params.webmSynapseId

        getEntity<FileEntity>(accessToken, videoKey!).then(
          (data: FileEntity) => {
            const fileHandleAssociationList: FileHandleAssociation[] = [
              {
                associateObjectId: videoKey!,
                associateObjectType: FileHandleAssociateType.FileEntity,
                fileHandleId: data.dataFileHandleId,
              },
            ]
            getSynapseFiles(fileHandleAssociationList, data.dataFileHandleId)
          },
        )
      }
    }

    const getSynapseFiles = (
      fileHandleAssociationList: FileHandleAssociation[],
      id: string,
    ) => {
      const request: BatchFileRequest = {
        includeFileHandles: false,
        includePreSignedURLs: true,
        includePreviewPreSignedURLs: false,
        requestedFiles: fileHandleAssociationList,
      }

      getFiles(request, accessToken)
        .then((data: BatchFileResult) => {
          const { preSignedURL } = data.requestedFiles.filter(
            el => el.fileHandleId === id,
          )[0]
          setSynapseVideoPresignedUrl(preSignedURL)
        })
        .catch(err => {
          console.error('Error on getting video ', err)
        })
    }
    getVideo()
  }, [externalVideoUrl, params, accessToken, videoHeight, videoWidth])

  if (synapseVideoPresignedUrl) {
    if (accessToken) {
      return (
        <video
          controls
          src={synapseVideoPresignedUrl}
          width={videoWidth}
          height={videoHeight}
          data-testid="synapse-video-url"
        >
          It does not support the HTML5 Video element.
        </video>
      )
    } else {
      // if not logged in, show login button
      return (
        <p>
          You will need to
          <button
            data-testid="video-login"
            className={`${SynapseConstants.SRC_SIGN_IN_CLASS} sign-in-btn default
                `}
          >
            Sign in
          </button>
          in for access to that resource.
        </p>
      )
    }
  } else if (externalVideoUrl) {
    return (
      <iframe
        title="video frame"
        src={externalVideoUrl}
        width={videoWidth}
        height={videoHeight}
      ></iframe>
    )
  } else {
    return <></>
  }
}
