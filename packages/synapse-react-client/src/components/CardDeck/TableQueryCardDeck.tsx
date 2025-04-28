import { CardDeck } from '@/components/CardDeck/CardDeck'
import { CardDeckCardProps } from '@/components/CardDeck/CardDeckCardProps'
import { ImageFileHandle } from '@/components/widgets/ImageFileHandle'
import { useGetEntity } from '@/synapse-queries/entity/useEntity'
import useGetQueryResultBundle from '@/synapse-queries/entity/useGetQueryResultBundle'
import { SynapseConstants } from '@/utils'
import { getFieldIndex } from '@/utils/functions/queryUtils'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { CardLink } from '../CardContainer/CardLink'
import { getFileHandleAssociation, getLinkParams } from '../GenericCard'

export type TableQueryCardDeckProps = {
  entityId: string /* The table entity which should be queried */
  titleColumnName: string /* The column name for the title */
  descriptionColumnName: string /* The column name for the description */
  ctaButtonTextColumnName: string /* The column name for the call to action button text */
  ctaButtonURLColumnName: string /* The column name for the call to action button URL */
  titleIconFileHandleColumnName?: string /* The column name for the title icon image file */
  headerImageFileHandleColumnName?: string /* The column name for the header image file */
  cardDeckType?: 'cckp' | 'b2ai' /* The type of card deck (cckp or b2ai)*/
  linkConfig: CardLink /* The link configuration */
}

/**
 * Transforms a Synapse table into a card deck.
 */
export function TableQueryCardDeck(props: TableQueryCardDeckProps) {
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
  } = props
  const entity = useGetEntity(entityId)
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

  const cards = queryResultBundle?.queryResult!.queryResults.rows.map(
    (el): CardDeckCardProps => {
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
      const headerImageFileHandleIdValue = values[headerImageColumnIndex] ?? ''

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

      const titleIcon = titleIconFileHandleAssociation ? (
        <ImageFileHandle
          fileHandleAssociation={titleIconFileHandleAssociation}
        />
      ) : undefined

      const headerImageFileHandleAssociation = getFileHandleAssociation(
        entity.data,
        headerImageFileHandleIdValue,
        `syn${el.rowId}`,
      )

      const headerImage = headerImageFileHandleAssociation ? (
        <ImageFileHandle
          fileHandleAssociation={headerImageFileHandleAssociation}
        />
      ) : undefined

      return {
        title,
        description,
        ctaButtonText,
        ctaButtonURL: href,
        titleIcon,
        headerImage,
        cardDeckType,
      } satisfies CardDeckCardProps
    },
  )

  return <CardDeck cards={cards || []} cardDeckType={cardDeckType} />
}

export default TableQueryCardDeck
