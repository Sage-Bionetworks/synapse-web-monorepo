import { cloneDeep } from 'lodash'
import {
  ChallengeDataDownloadProps,
  MarkdownSynapseProps,
} from 'synapse-react-client'
import { RowSynapseConfig } from '../types/portal-util-types'
import { ChallengeSubmissionWrapperProps } from './challengeportal/ChallengeSubmissionWrapper'
import { EntityType } from '@sage-bionetworks/synapse-types'

/**
 * Given a value and synapse config, returns the props with the value injected into the synapse object accordingly.
 *
 * @param {string} value
 * @param {RowSynapseConfig} el
 * @param {*} props
 * @returns {*}
 */
const injectPropsIntoConfig = (
  value: string,
  el: RowSynapseConfig,
  props: any,
): any => {
  const internalProps = cloneDeep(props)
  if (el.name === 'Markdown' || el.name === 'MarkdownCollapse') {
    const markdownProps = internalProps as MarkdownSynapseProps
    if (el.injectMarkdown) {
      markdownProps.markdown = value
    } else {
      if (value.includes('wiki')) {
        // value looks like syn20681023/wiki/594680
        const split = value.split('/')
        const ownerId = split[0]
        const wikiId = split[2]
        markdownProps.ownerId = ownerId
        markdownProps.wikiId = wikiId
      } else {
        // else assume its an ownerId
        markdownProps.ownerId = value
      }
    }
  } else if (el.name === 'ChallengeDataDownloadWrapper') {
    const challengeDataDownloadProps =
      internalProps as ChallengeDataDownloadProps
    challengeDataDownloadProps.parentContainerId = value
  } else if (el.name === 'ChallengeSubmissionWrapper') {
    const challengeSubmissionWrapperProps =
      internalProps as ChallengeSubmissionWrapperProps
    challengeSubmissionWrapperProps.entityType =
      value === 'Docker' ? EntityType.DOCKER_REPO : EntityType.FILE
  }
  return internalProps
}
export default injectPropsIntoConfig
