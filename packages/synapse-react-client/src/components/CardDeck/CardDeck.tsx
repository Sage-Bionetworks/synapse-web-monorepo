import {
  FileHandleAssociation,
  QueryBundleRequest,
} from '@sage-bionetworks/synapse-types'
import { SynapseConstants } from '../../utils'

import useGetQueryResultBundle from '../../synapse-queries/entity/useGetQueryResultBundle'
import useShowDesktop from '../../utils/hooks/useShowDesktop'
import CardDeckMobile from './CardDeck.Mobile'
import CardDeckDesktop from './CardDeck.Desktop'
import { getColorPalette } from '../ColorGradient/ColorGradient'
import { CardLink } from '../CardContainerLogic'
import { getFieldIndex } from '../../utils/functions/queryUtils'
import { useGetEntity } from '../../synapse-queries/entity/useEntity'
import { getFileHandleAssociation, getLinkParams } from '../GenericCard'

export type CardDeckProps = {
  entityId: string
  rgbIndex: number
  titleColumnName: string
  descriptionColumnName: string
  ctaButtonTextColumnName: string
  ctaButtonURLColumnName: string
  titleIconFileHandleColumnName?: string
  headerImageFileHandleColumnName?: string
  cardDeckType?: string
  linkConfig: CardLink
}

export type CardDeckDataProps = {
  title: string
  description: string
  ctaButtonText: string
  ctaButtonURL: string
  color: string
  titleIconFileHandleAssociation?: FileHandleAssociation
  headerImageFileHandleAssociation?: FileHandleAssociation
  cardDeckType?: string
}

export function CardDeck(props: CardDeckProps) {
  const {
    entityId,
    titleColumnName,
    descriptionColumnName,
    ctaButtonTextColumnName,
    ctaButtonURLColumnName,
    titleIconFileHandleColumnName,
    headerImageFileHandleColumnName,
    cardDeckType,
    linkConfig,
    rgbIndex,
  } = props
  const showDesktop = useShowDesktop()
  const entity = useGetEntity(entityId)
  const color: string = getColorPalette(rgbIndex ?? 0, 2).colorPalette[0]
  const queryBundleRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId,
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    query: {
      sql: `select * from ${entityId}`,
    },
  }
  const { data: queryResultBundle } =
    useGetQueryResultBundle(queryBundleRequest)

  const titleColumnIndex = getFieldIndex(titleColumnName, queryResultBundle)
  const descriptionColumnIndex = getFieldIndex(
    descriptionColumnName,
    queryResultBundle,
  )
  const ctaButtonTextColumnIndex = getFieldIndex(
    ctaButtonTextColumnName,
    queryResultBundle,
  )
  const ctaButtonURLColumnIndex = getFieldIndex(
    ctaButtonURLColumnName,
    queryResultBundle,
  )
  const titleIconColumnIndex = getFieldIndex(
    titleIconFileHandleColumnName,
    queryResultBundle,
  )
  const headerImageColumnIndex = getFieldIndex(
    headerImageFileHandleColumnName,
    queryResultBundle,
  )
  return (
    <div className={`CardDeck${showDesktop ? '__Desktop' : ''}`}>
      {queryResultBundle?.queryResult!.queryResults.rows.map(el => {
        const values = el.values as string[]
        if (values.some(value => value === null)) {
          // We cast values above assuming there are no null values, emit a warning just in case.
          console.warn('Row has null value(s) when no nulls expected')
        }

        const title = values[titleColumnIndex]
        const description = values[descriptionColumnIndex]
        const ctaButtonText = values[ctaButtonTextColumnIndex]
        const ctaButtonURL = values[ctaButtonURLColumnIndex] ?? ''
        const titleIconFileHandleIdValue = values[titleIconColumnIndex] ?? ''
        const headerImageFileHandleIdValue =
          values[headerImageColumnIndex] ?? ''

        const schema: Record<string, number> = {}
        queryResultBundle?.queryResult!.queryResults.headers.forEach(
          (header, colIndex) => {
            schema[header.name] = colIndex
          },
        )
        const { href } = getLinkParams(ctaButtonURL, linkConfig, values, schema)

        const titleIconFileHandleAssociation = getFileHandleAssociation(
          entity.data,
          titleIconFileHandleIdValue,
          `syn${el.rowId}`,
        )
        const headerImageFileHandleAssociation = getFileHandleAssociation(
          entity.data,
          headerImageFileHandleIdValue,
          `syn${el.rowId}`,
        )
        const CardDeckDataProps: CardDeckDataProps = {
          title,
          description,
          ctaButtonText,
          ctaButtonURL: href,
          color,
          titleIconFileHandleAssociation,
          headerImageFileHandleAssociation,
          cardDeckType,
        }
        return showDesktop ? (
          <CardDeckDesktop {...CardDeckDataProps} />
        ) : (
          <CardDeckMobile {...CardDeckDataProps} />
        )
      })}
    </div>
  )
}

export default CardDeck
