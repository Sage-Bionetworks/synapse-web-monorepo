import { Dictionary } from 'lodash'
import React from 'react'
import { SynapseComponents } from 'synapse-react-client'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import { RowSynapseConfig } from '../../types/portal-util-types'
import { scrollToWithOffset } from '../../utils'
import { getComponentId } from './utils'

export const handleMenuClick = (id: string) => {
  window.history.pushState(null, '', `#${id}`)
  const wrapper = document.querySelector<HTMLElement>(`#${id}`)
  if (wrapper) {
    scrollToWithOffset(wrapper)
  } else {
    console.error('Could not scroll to element with id ', id)
  }
}

export const SideNavMenu: React.FC<{
  synapseConfigArray?: RowSynapseConfig[]
  queryResultBundle?: QueryResultBundle
}> = ({ synapseConfigArray, queryResultBundle }) => {
  const mapColumnHeaderToRowIndex: Dictionary<number> = {}
  let row: (string | null)[] = []
  if (queryResultBundle?.queryResult) {
    queryResultBundle.queryResult.queryResults.headers.forEach((el, index) => {
      mapColumnHeaderToRowIndex[el.name] = index
    })
    row = queryResultBundle.queryResult.queryResults.rows[0].values
  }
  return (
    <>
      {synapseConfigArray &&
        synapseConfigArray.map((el: RowSynapseConfig, index) => {
          const style: React.CSSProperties = {}
          const { columnName = '' } = el
          const isDisabled =
            queryResultBundle &&
            !row[mapColumnHeaderToRowIndex[columnName]] &&
            !el.standalone
          if (isDisabled) {
            style.color = '#BBBBBC'
            style.cursor = 'not-allowed'
          }
          const className = `menu-row-button ${
            isDisabled ? '' : 'SRC-primary-background-color-hover'
          }`
          if (el.name === 'ExternalFileHandleLink') {
            return (
              <SynapseComponents.ExternalFileHandleLink
                key={index}
                className={className}
                synId={el.props.synId}
              />
            )
          }
          if (!el.title) {
            return <React.Fragment key={index}></React.Fragment>
          }
          return (
            <button
              style={style}
              key={JSON.stringify(el)}
              onClick={
                isDisabled
                  ? undefined
                  : () => handleMenuClick(getComponentId(el))
              }
              className={className}
            >
              {el.title}
            </button>
          )
        })}
    </>
  )
}
