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
  entityId: string /* The table entity which should be queried */
  rgbIndex: number /* The index of the color palette to use */
  titleColumnName: string /* The column name for the title */
  descriptionColumnName: string /* The column name for the description */
  ctaButtonTextColumnName: string /* The column name for the call to action button text */
  ctaButtonURLColumnName: string /* The column name for the call to action button URL */
  titleIconFileHandleColumnName?: string /* The column name for the title icon image file */
  headerImageFileHandleColumnName?: string /* The column name for the header image file */
  cardDeckType?: 'cckp' | 'b2ai' /* The type of card deck (cckp or b2ai)*/
  linkConfig: CardLink /* The link configuration */
}

export type CardDeckDataProps = {
  title: string /* title of card */
  description: string /* description of card */
  ctaButtonText: string /* call to action button text */
  ctaButtonURL: string /* call to action button URL */
  color: string /* color pallette to use */
  titleIconFileHandleAssociation?: FileHandleAssociation /* title icon file handle association */
  headerImageFileHandleAssociation?: FileHandleAssociation /* header image file handle association */
  cardDeckType?: 'cckp' | 'b2ai' /* The type of card deck (cckp or b2ai)*/
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
