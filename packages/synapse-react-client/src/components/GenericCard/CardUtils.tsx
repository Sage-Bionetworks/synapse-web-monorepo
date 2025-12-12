import { CardLink } from '@/components/CardContainer/CardLink'
import { isTableEntity } from '@/utils/functions/EntityTypeUtils'
import { PRODUCTION_ENDPOINT_CONFIG } from '@/utils/functions/getEndpoint'
import {
  convertDoiToLink,
  SYNAPSE_ENTITY_ID_REGEX,
} from '@/utils/functions/RegularExpressions'
import { TargetEnum } from '@/utils/html/TargetEnum'
import { isExternalLink } from '@/utils/functions/IsExternalLink'
import {
  ColumnModel,
  Entity,
  FileHandleAssociateType,
  FileHandleAssociation,
  SelectColumn,
} from '@sage-bionetworks/synapse-types'

export const getFileHandleAssociation = (
  table?: Entity,
  fileHandleId?: string,
  rowSynapseId?: string, // only applicable if this is an EntityView
) => {
  let fileHandleAssociation: FileHandleAssociation | undefined = undefined
  if (table && fileHandleId) {
    if (isTableEntity(table)) {
      // The file handle is in the table
      fileHandleAssociation = {
        fileHandleId,
        associateObjectId: table?.id ?? '',
        associateObjectType: FileHandleAssociateType.TableEntity,
      }
    } else if (rowSynapseId) {
      // We're looking at a view, so the FileEntity (whose ID matches the row ID) gives permission to download the file handle
      fileHandleAssociation = {
        fileHandleId,
        associateObjectId: rowSynapseId,
        associateObjectType: FileHandleAssociateType.FileEntity,
      }
    }
  }
  return fileHandleAssociation
}
export const getValueOrMultiValue = ({
  columnName,
  value,
  selectColumns,
  columnModels,
}: {
  columnName?: string
  value?: string
  selectColumns?: SelectColumn[]
  columnModels?: ColumnModel[]
}): ValueOrMultiValue => {
  if (!value) {
    return {
      str: '',
      strList: undefined,
      selectColumn: undefined,
    }
  }
  const selectedColumnOrUndefined =
    selectColumns?.find(el => el.name === columnName) ||
    columnModels?.find(el => el.name === columnName)
  const isMultiValue = selectedColumnOrUndefined?.columnType.endsWith('_LIST')

  if (isMultiValue) {
    let val: any = value
    let strList: any
    try {
      strList = JSON.parse(val)
      val = (strList as string[]).join(', ')
      return {
        strList,
        str: val,
        selectColumn: selectedColumnOrUndefined,
      }
    } catch (e) {
      console.error(
        'Could not parse multivalue string ',
        val,
        ' caught err ',
        e,
      )
    }
  }
  return {
    str: value,
    selectColumn: selectedColumnOrUndefined,
  }
}
type ValueOrMultiValue = {
  str: string
  strList?: string[]
  selectColumn?: SelectColumn
}

export function getCardLinkHref(
  cardLink: CardLink | undefined,
  data: string[] | undefined,
  schema?: Record<string, number>,
  rowId?: number,
): string | undefined {
  if (cardLink) {
    if (!data || !schema) {
      throw Error('Must specify CardLink and data for linking to work')
    }
    const { matchColumnName, overrideValueWithRowID } = cardLink

    // PORTALS-2088:  Return the link, unless...
    // an overrideLinkURLColumnName has been set and its value is defined.
    // In this case, just use the overrideLinkURLColumnName value
    if ('overrideLinkURLColumnName' in cardLink) {
      const { overrideLinkURLColumnName, overrideLinkURLColumnTransform } =
        cardLink
      if (schema[overrideLinkURLColumnName]) {
        const indexOfOverrideLinkURLColumnName =
          schema[overrideLinkURLColumnName]
        const overrideLinkValue = data[indexOfOverrideLinkURLColumnName]
        if (overrideLinkValue && overrideLinkURLColumnTransform) {
          return overrideLinkURLColumnTransform(overrideLinkValue)
        } else if (overrideLinkValue) {
          return overrideLinkValue
        }
      }
    }

    const indexInData = schema[matchColumnName]
    if (indexInData === undefined) {
      console.error(
        `Could not find match for data: ${data} with columnName ${matchColumnName}`,
      )
    } else if ('baseURL' in cardLink) {
      const { baseURL, URLColumnName } = cardLink
      const value = overrideValueWithRowID ? `syn${rowId}` : data[indexInData]
      if (value) {
        // value is defined!
        return `/${baseURL}?${URLColumnName}=${encodeURIComponent(value)}`
      }
    }
  }
  return undefined
}

export function getLinkParams(
  link: string,
  cardLinkConfig: CardLink | undefined,
  data: string[] | undefined,
  schema?: Record<string, number>,
  rowId?: number,
) {
  link = link.trim()
  let href = link
  const doiLink = convertDoiToLink(href)
  if (link.match(SYNAPSE_ENTITY_ID_REGEX)) {
    // its a synId
    href = `${PRODUCTION_ENDPOINT_CONFIG.PORTAL}Synapse:${link}`
  } else if (doiLink) {
    href = doiLink
  } else if (cardLinkConfig) {
    href = getCardLinkHref(cardLinkConfig, data, schema, rowId) ?? ''
  }

  const defaultTarget =
    href && isExternalLink(href)
      ? TargetEnum.NEW_WINDOW
      : TargetEnum.CURRENT_WINDOW

  const target = cardLinkConfig?.target ?? defaultTarget
  return { href, target }
}
