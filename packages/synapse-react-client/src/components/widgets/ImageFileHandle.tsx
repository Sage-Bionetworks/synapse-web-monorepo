import SynapseClient from '@/synapse-client'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { FileHandleAssociation } from '@sage-bionetworks/synapse-types'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

type ImageFileHandleProps = {
  fileHandleAssociation: FileHandleAssociation
}

export const ImageFileHandle = (props: ImageFileHandleProps) => {
  const {
    fileHandleAssociation: {
      fileHandleId,
      associateObjectId,
      associateObjectType,
    },
  } = props
  const { accessToken } = useSynapseContext()
  const [url, setUrl] = useState<string>()
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '500px 0px',
  })

  useEffect(() => {
    const getData = () => {
      if (fileHandleId && associateObjectId && associateObjectType && inView) {
        SynapseClient.getActualFileHandleByIdURL(
          fileHandleId,
          accessToken,
          associateObjectType,
          associateObjectId,
          false,
        )
          .then(url => {
            setUrl(url)
          })
          .catch(err => {
            console.error('Error on retrieving file handle url ', err)
          })
      }
    }

    getData()
  }, [
    inView,
    fileHandleId,
    associateObjectId,
    accessToken,
    associateObjectType,
  ])

  return (
    <span ref={ref}>
      {url && (
        <img src={url} alt="" className="ImageFileHandle" loading="lazy"></img>
      )}
    </span>
  )
}
