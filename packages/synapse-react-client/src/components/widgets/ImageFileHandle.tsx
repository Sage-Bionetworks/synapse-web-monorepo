import React from 'react'
import SynapseClient from '@/synapse-client'
import { useSynapseContext } from '@/stores/SynapseContext/SynapseContext'
import { FileHandleAssociation } from '@sage-bionetworks/synapse-types'
import { ComponentProps, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

type ImageFileHandleProps = {
  fileHandleAssociation: FileHandleAssociation
  imgProps?: ComponentProps<'img'>
}

export const ImageFileHandle = (
  props: ImageFileHandleProps,
): React.ReactNode => {
  const {
    fileHandleAssociation: {
      fileHandleId,
      associateObjectId,
      associateObjectType,
    },
    imgProps,
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
        <img
          className="ImageFileHandle"
          src={url}
          alt=""
          loading="lazy"
          {...imgProps}
        ></img>
      )}
    </span>
  )
}
