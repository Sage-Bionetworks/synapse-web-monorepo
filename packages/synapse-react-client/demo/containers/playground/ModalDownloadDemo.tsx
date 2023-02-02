import * as React from 'react'
import ModalDownload from '../../../lib/containers/ModalDownload'

type State = {
  showModal: boolean
}

class ModalDownloadDemo extends React.Component<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      showModal: false,
    }
  }

  onClose = () => {
    this.setState({
      showModal: false,
    })
  }

  onOpen = () => {
    console.log('opening')
    this.setState({
      showModal: true,
    })
  }

  render() {
    return (
      <div className="container">
        <button onClick={this.onOpen} className="btn btn-primary">
          {' '}
          Show ModalDownload{' '}
        </button>
        {this.state.showModal && (
          <ModalDownload
            queryBundleRequest={{
              concreteType:
                'org.sagebionetworks.repo.model.table.QueryBundleRequest',
              entityId: '',
              // @ts-ignore
              partMask: undefined,
              query: {
                sql: 'SELECT * from syn17328596',
              },
            }}
            onClose={this.onClose}
          />
        )}
      </div>
    )
  }
}

export default ModalDownloadDemo
