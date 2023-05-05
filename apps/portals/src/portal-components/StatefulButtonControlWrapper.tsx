import * as React from 'react'
import { SynapseConfig } from '../types/portal-config'
import QueryCount from 'synapse-react-client/dist/containers/QueryCount'
import { RouteControl, RouteControlProps } from '../RouteControl'
import { SynapseComponent } from '../SynapseComponent'

export type StatefulButtonControlConfigs = {
  synapseConfigArray: SynapseConfig[]
  name: string
  sql?: string
  entityId?: string
}

export type StatefulButtonControlWrapperProps = {
  configs: StatefulButtonControlConfigs[]
}

export type ButtonControlState = {
  index: number
}

/**
 * StatefulButtonControl is the set of buttons used to navigate between
 * the preview of the various SRC components.
 *
 * @class StatefulButtonControl
 * @extends {React.Component<Props, ButtonControlState>}
 */
class StatefulButtonControl extends React.Component<
  StatefulButtonControlWrapperProps,
  ButtonControlState
> {
  constructor(props: StatefulButtonControlWrapperProps) {
    super(props)
    this.state = {
      index: 0,
    }
  }

  /*
    This sets the synapse config from the corresponding click event
    of the explore buttons
  */
  public handleChange = (_val: string, index: number) => {
    this.setState({
      index,
    })
  }

  render() {
    const { configs } = this.props
    const { name, synapseConfigArray, sql, entityId } =
      configs[this.state.index]
    const buttonControlProps: RouteControlProps = {
      customRoutes: configs.map((el) => el.name),
      handleChanges: this.handleChange,
      isSelected: (val: string) => val === name,
    }
    return (
      <React.Fragment>
        <RouteControl {...buttonControlProps} />
        {sql && entityId && (
          <h3 className="SRC-boldText queryCountHeader">
            {name} <QueryCount query={{ sql: sql }} />
          </h3>
        )}
        {synapseConfigArray.map((config) => {
          return (
            <React.Fragment key={JSON.stringify(config.props)}>
              {config.title && (
                <h2 className="title statefulButtonTitle"> {config.title} </h2>
              )}
              <SynapseComponent synapseConfig={config} />
            </React.Fragment>
          )
        })}
      </React.Fragment>
    )
  }
}

export default StatefulButtonControl
