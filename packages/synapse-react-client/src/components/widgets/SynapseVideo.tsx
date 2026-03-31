import { getEntity, getFiles } from '@/synapse-client/SynapseClient'
import { SynapseConstants } from '@/utils'
import { useSynapseContext } from '@/utils/context/SynapseContext'
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
    vttSynapseId?: string
  }
}

export default function SynapseVideo({ params }: SynapseVideoProps) {
  const { accessToken, isAuthenticated } = useSynapseContext()
  const [externalVideoUrl, setExternalVideoUrl] = useState<string>()
  const [synapseVideoPresignedUrl, setSynapseVideoPresignedUrl] =
    useState<string>()
  const [synapseVideoVttPresignedUrl, setSynapseVideoVttPresignedUrl] =
    useState<string>()

  const videoWidth = params.width ?? ''
  const videoHeight = params.height ?? ''
  useEffect(() => {
    const getVideo = async () => {
      if (params.videoId)
        setExternalVideoUrl(`https://www.youtube.com/embed/${params.videoId}`)
      else if (params.vimeoId)
        setExternalVideoUrl(`https://player.vimeo.com/video/${params.vimeoId}`)
      else {
        const videoKey =
          params.oggSynapseId || params.mp4SynapseId || params.webmSynapseId

        const videoEntity = await getEntity<FileEntity>(accessToken, videoKey!)
        const fileHandleAssociationList: FileHandleAssociation[] = [
          {
            associateObjectId: videoKey!,
            associateObjectType: FileHandleAssociateType.FileEntity,
            fileHandleId: videoEntity.dataFileHandleId,
          },
        ]

        let vttFileHandleId: string | undefined
        if (params.vttSynapseId) {
          const vttEntity = await getEntity<FileEntity>(
            accessToken,
            params.vttSynapseId,
          )
          vttFileHandleId = vttEntity.dataFileHandleId
          fileHandleAssociationList.push({
            associateObjectId: params.vttSynapseId,
            associateObjectType: FileHandleAssociateType.FileEntity,
            fileHandleId: vttEntity.dataFileHandleId,
          })
        }

        getSynapseFiles(
          fileHandleAssociationList,
          videoEntity.dataFileHandleId,
          vttFileHandleId,
        )
      }
    }

    const getSynapseFiles = (
      fileHandleAssociationList: FileHandleAssociation[],
      videoFileHandleId: string,
      vttFileHandleId?: string,
    ) => {
      const request: BatchFileRequest = {
        includeFileHandles: false,
        includePreSignedURLs: true,
        includePreviewPreSignedURLs: false,
        requestedFiles: fileHandleAssociationList,
      }

      getFiles(request, accessToken)
        .then((data: BatchFileResult) => {
          const videoFile = data.requestedFiles.find(
            el => el.fileHandleId === videoFileHandleId,
          )
          if (videoFile?.preSignedURL) {
            setSynapseVideoPresignedUrl(videoFile.preSignedURL)
          }

          if (vttFileHandleId) {
            const vttFile = data.requestedFiles.find(
              el => el.fileHandleId === vttFileHandleId,
            )
            if (vttFile?.preSignedURL) {
              setSynapseVideoVttPresignedUrl(vttFile.preSignedURL)
            }
          }
        })
        .catch(err => {
          console.error('Error on getting video ', err)
        })
    }
    getVideo()
  }, [externalVideoUrl, params, accessToken, videoHeight, videoWidth])

  if (!isAuthenticated && !externalVideoUrl) {
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
  if (synapseVideoPresignedUrl) {
    return (
      <video
        controls
        width={videoWidth}
        height={videoHeight}
        data-testid="synapse-video-url"
        crossOrigin="anonymous"
      >
        <source src={synapseVideoPresignedUrl} />
        {synapseVideoVttPresignedUrl && (
          <track src={synapseVideoVttPresignedUrl} kind="subtitles" default />
        )}
        It does not support the HTML5 Video element.
      </video>
    )
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
