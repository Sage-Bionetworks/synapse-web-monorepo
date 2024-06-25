import React from 'react'
import {
  SynapseComponents,
  SynapseContextConsumer,
  SynapseContextType,
} from 'synapse-react-client'
import { SynapseConfig } from '../types/portal-config'
import PortalComponents from './index'

type SynapseComponentProps = {
  synapseConfig: SynapseConfig
}

function SynapseComponentNoContext({ synapseConfig }: SynapseComponentProps) {
  const Component =
    (PortalComponents as any)[synapseConfig.name] ??
    (SynapseComponents as any)[synapseConfig.name]
  if (!Component) {
    throw Error(`No synapse object could be mapped for ${synapseConfig.name}`)
  }
  const component = <Component {...synapseConfig.props} />
  const { style, className } = synapseConfig
  if (style || className) {
    return (
      <div className={className} style={style}>
        {component}
      </div>
    )
  } else {
    return component
  }
}

type SynapseComponentWithContextProps = {
  synapseConfig: SynapseConfig
  searchParams?: any
}

export const SynapseComponent: React.FC<SynapseComponentWithContextProps> = ({
  synapseConfig,
  searchParams,
}) => {
  // return the synapse object but with token/search params injected into its props from the context created in AppInitializer
  const { props, ...rest } = synapseConfig
  return (
    <SynapseContextConsumer>
      {(ctx?: SynapseContextType) => {
        const propsWithSearchAndToken = {
          ...props,
          searchParams,
          token: ctx?.accessToken,
          accessToken: ctx?.accessToken,
        }
        // TODO: Understand why typescript is throwing an error below
        // @ts-ignore
        const synapseObjectWithTokenAndSearch: SynapseConfig = {
          props: propsWithSearchAndToken,
          ...rest,
        }
        return (
          <SynapseComponentNoContext
            synapseConfig={synapseObjectWithTokenAndSearch}
          />
        )
      }}
    </SynapseContextConsumer>
  )
}
