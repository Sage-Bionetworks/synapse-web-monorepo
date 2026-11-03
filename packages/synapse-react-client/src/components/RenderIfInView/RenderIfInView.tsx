import VisibilityObserver from '@/components/utils/VisibilityObserver'
import { Component, PropsWithChildren } from 'react'

export class RenderIfInView extends Component<PropsWithChildren<unknown>> {
  public render() {
    return <VisibilityObserver renderInView={this.getChildren} />
  }

  private readonly getChildren = () => {
    return <>{this.props.children}</>
  }
}

export default RenderIfInView
