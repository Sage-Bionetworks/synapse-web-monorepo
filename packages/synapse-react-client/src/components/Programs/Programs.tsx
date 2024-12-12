import {
  FileHandleAssociation,
  QueryBundleRequest,
} from '@sage-bionetworks/synapse-types'
import * as SynapseConstants from '../../utils/SynapseConstants'

import useGetQueryResultBundle from '../../synapse-queries/entity/useGetQueryResultBundle'
import useShowDesktop from '../../utils/hooks/useShowDesktop'
import ProgramsMobile from './Programs.Mobile'
import ProgramsDesktop from './Programs.Desktop'
import { getColorPalette } from '../ColorGradient/ColorGradient'
import { CardLink } from '../CardContainerLogic'
import { getFieldIndex } from '../../utils/functions/queryUtils'
import { useGetEntity } from '../../synapse-queries/entity/useEntity'
import {
  getFileHandleAssociation,
  getLinkParams,
} from '../GenericCard/GenericCard'

export type ProgramsProps = {
  entityId: string
  rgbIndex: number
  titleColumnName: string
  linkColumnName: string
  summaryColumnName: string
  imageFileHandleColumnName: string
  linkConfig: CardLink
}

export type ProgramsDataProps = {
  title: string
  summary: string
  link: string
  exploreLink: string
  color: string
  fileHandleAssociation?: FileHandleAssociation
}

export function Programs(props: ProgramsProps) {
  const {
    entityId,
    titleColumnName,
    linkColumnName,
    summaryColumnName,
    imageFileHandleColumnName,
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
  const summaryColumnIndex = getFieldIndex(summaryColumnName, queryResultBundle)
  const linkColumnIndex = getFieldIndex(linkColumnName, queryResultBundle)
  const iconColumnIndex = getFieldIndex(
    imageFileHandleColumnName,
    queryResultBundle,
  )
  return (
    <div className={`Programs${showDesktop ? '__Desktop' : ''}`}>
      {queryResultBundle?.queryResult!.queryResults.rows.map(el => {
        const values = el.values as string[]
        if (values.some(value => value === null)) {
          // We cast values above assuming there are no null values, emit a warning just in case.
          console.warn('Row has null value(s) when no nulls expected')
        }

        const title = values[titleColumnIndex]
        const summary = values[summaryColumnIndex]
        const link = values[linkColumnIndex] ?? ''
        const iconFileHandleIdValue = values[iconColumnIndex]

        const schema: Record<string, number> = {}
        queryResultBundle?.queryResult!.queryResults.headers.forEach(
          (header, colIndex) => {
            schema[header.name] = colIndex
          },
        )
        const { href } = getLinkParams(link, linkConfig, values, schema)

        const fileHandleAssociation = getFileHandleAssociation(
          entity.data,
          iconFileHandleIdValue,
          `syn${el.rowId}`,
        )
        const ProgramsDataProps: ProgramsDataProps = {
          title,
          summary,
          link,
          color,
          exploreLink: href,
          fileHandleAssociation,
        }
        return showDesktop ? (
          <ProgramsDesktop {...ProgramsDataProps} />
        ) : (
          <ProgramsMobile {...ProgramsDataProps} />
        )
      })}
    </div>
  )
}

export default Programs
