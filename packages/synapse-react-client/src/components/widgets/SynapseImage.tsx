import { getEntity, getFiles } from '@/synapse-client/SynapseClient'
import { SynapseContext } from '@/utils/context/SynapseContext'
import {
  BatchFileRequest,
  BatchFileResult,
  FileEntity,
  FileHandle,
  FileHandleAssociateType,
  FileHandleAssociation,
} from '@sage-bionetworks/synapse-types'
import { Component, ContextType, CSSProperties } from 'react'

export type SynapseImageProps = {
  wikiId?: string
  synapseId?: string
  fileName?: string
  fileResults?: FileHandle[]
  params: {
    align: string
    scale: string
    // this should be treated as a boolean, but the actual type that will come through
    // is a string which I don't want to mis-represent
    responsive: string
    altText: string
  }
}

type SynapseImageState = {
  preSignedURL: string
}

class SynapseImage extends Component<SynapseImageProps, SynapseImageState> {
  constructor(props: SynapseImageProps) {
    super(props)
    this.getEntity = this.getEntity.bind(this)
    this.getSynapseFiles = this.getSynapseFiles.bind(this)
    this.state = {
      preSignedURL: '',
    }
  }

  static contextType = SynapseContext
  declare context: NonNullable<ContextType<typeof SynapseContext>>

  public getEntity() {
    const { synapseId } = this.props
    if (synapseId) {
      getEntity<FileEntity>(this.context.accessToken, synapseId).then(
        // https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/FileEntity.html
        (data: FileEntity) => {
          const fileHandleAssociationList = [
            {
              associateObjectId: synapseId,
              associateObjectType: FileHandleAssociateType.FileEntity,
              fileHandleId: data.dataFileHandleId,
            },
          ]
          this.getSynapseFiles(fileHandleAssociationList, data.dataFileHandleId)
        },
      )
    }
  }
  public getSynapseFiles(
    fileHandleAssociationList: FileHandleAssociation[],
    id: string,
  ) {
    // overload the method for two different use cases, one where
    // the image is attached to an entity and creates a list on the spot,
    // the other where list is passed in from componentDidMount in MarkdownSynapse
    const request: BatchFileRequest = {
      includeFileHandles: false,
      includePreSignedURLs: true,
      includePreviewPreSignedURLs: false,
      requestedFiles: fileHandleAssociationList,
    }
    getFiles(request, this.context.accessToken)
      .then((data: BatchFileResult) => {
        const { preSignedURL } = data.requestedFiles.filter(
          el => el.fileHandleId === id,
        )[0]
        this.setState({
          preSignedURL: preSignedURL!,
        })
      })
      .catch(err => {
        console.error('Error on getting image ', err)
      })
  }
  public componentDidMount() {
    if (!this.props.wikiId) {
      // Get file handle as external attachment
      this.getEntity()
    } else {
      // Can get presigned url right away from wiki association
      const { fileName, fileResults = [] } = this.props
      const { id } = fileResults.filter(el => el.fileName === fileName)[0]
      const fileHandleAssociationList: FileHandleAssociation[] = [
        {
          associateObjectId: this.props.wikiId,
          associateObjectType: FileHandleAssociateType.WikiAttachment,
          fileHandleId: id,
        },
      ]
      this.getSynapseFiles(fileHandleAssociationList, id)
    }
  }

  public render() {
    const { params } = this.props
    const { align = '', altText = 'synapse image' } = params

    let scale = 'auto'
    if (params.scale && params.scale !== '100') {
      scale = `${Number(params.scale)}%`
    }

    const alignLowerCase = align.toLowerCase()
    let className = ''
    if (alignLowerCase === 'left') {
      className = 'floatLeft'
    }
    if (alignLowerCase === 'right') {
      className = 'floatright'
    }
    if (alignLowerCase === 'center') {
      className = 'align-center'
    }
    const style: CSSProperties = {
      maxWidth: scale,
      height: 'auto',
    }
    if (!this.state.preSignedURL) {
      return null
    }
    return (
      <>
        <img
          alt={altText}
          className={'img-fluid  ' + className}
          src={this.state.preSignedURL}
          style={style}
        />
      </>
    )
  }
}
export default SynapseImage
