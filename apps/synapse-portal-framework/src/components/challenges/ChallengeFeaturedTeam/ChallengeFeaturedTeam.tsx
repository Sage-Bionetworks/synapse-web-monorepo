import { Box, Typography } from '@mui/material'
import styles from './ChallengeFeaturedTeam.module.scss'
import { parseEntityIdFromSqlStatement } from 'synapse-react-client/utils/functions'
import {
  FileHandleAssociateType,
  FileHandleAssociation,
  QueryBundleRequest,
} from '@sage-bionetworks/synapse-types'
import { SynapseConstants } from 'synapse-react-client'
import useGetQueryResultBundle from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'
import { getFieldIndex } from 'synapse-react-client/utils/functions/queryUtils'
import { useGetStablePresignedUrl } from 'synapse-react-client/synapse-queries'
import MarkdownSynapse from 'synapse-react-client/components/Markdown/MarkdownSynapse'
import { ReactComponent as BkgImage } from '../assets/featuredTeamBkg.svg'
import { ReactComponent as Vectors } from '../assets/featuredTeamVectors.svg'

type FeaturedTeamProps = {
  sql: string
}

type TeamImageCardProps = {
  teamPhotoFileHandleId: string
  entityId: string
  teamMemberNames: string[]
}

const UseTeamPhotoUrl = (teamPhotoFileHandleId: string, entityId: string) => {
  const fha: FileHandleAssociation = {
    associateObjectId: entityId,
    associateObjectType: FileHandleAssociateType.TableEntity,
    fileHandleId: teamPhotoFileHandleId ?? '',
  }
  const stablePresignedUrl = useGetStablePresignedUrl(fha, false, {
    enabled: !!teamPhotoFileHandleId,
  })

  return stablePresignedUrl?.dataUrl
}

const TeamImageCard = (props: TeamImageCardProps) => {
  return (
    <Box className={styles.FeaturedTeam__imageCard}>
      <img
        src={UseTeamPhotoUrl(props.teamPhotoFileHandleId, props.entityId)}
        alt="Team"
        className={styles.FeaturedTeam__image}
      />
      <Typography variant="smallText1" className={styles.FeaturedTeam__caption}>
        From left to right: {props.teamMemberNames.join(', ')}
      </Typography>
    </Box>
  )
}

const FeaturedTeam = ({ sql }: FeaturedTeamProps) => {
  const entityId = parseEntityIdFromSqlStatement(sql)

  const queryBundleRequest: QueryBundleRequest = {
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId,
    query: {
      sql,
    },
  }

  const { data: queryResultBundle } =
    useGetQueryResultBundle(queryBundleRequest)

  const dataRows = queryResultBundle?.queryResult!.queryResults.rows ?? []

  enum ExpectedColumns {
    TEAM_PHOTO = 'teamPhoto',
    TEAM_MEMBER_NAMES = 'teamMemberNames',
  }

  const teamPhotoColumnIndex = getFieldIndex(
    ExpectedColumns.TEAM_PHOTO,
    queryResultBundle,
  )

  const teamMemberNamesColumnIndex = getFieldIndex(
    ExpectedColumns.TEAM_MEMBER_NAMES,
    queryResultBundle,
  )

  return (
    <Box className={styles.FeaturedTeam}>
      <BkgImage
        className={styles.FeaturedTeam__bkgImage}
        preserveAspectRatio="none"
      />
      <Box className={styles.FeaturedTeam__headerSection}>
        <Box className={styles.FeaturedTeam__vectorsContainer}>
          <Vectors className={styles.FeaturedTeam__vectors} />
        </Box>
        <Typography variant="headline1" className={styles.FeaturedTeam__title}>
          Featured Team
        </Typography>
      </Box>
      <Box className={styles.FeaturedTeam__content}>
        <Box className={styles.FeaturedTeam__imageSection}>
          {dataRows.map(row => {
            const rawTeamMemberNames =
              row?.values[teamMemberNamesColumnIndex] ?? ''
            let teamMemberNames: string[] = []
            try {
              teamMemberNames = JSON.parse(rawTeamMemberNames)
              if (!Array.isArray(teamMemberNames)) {
                teamMemberNames = [String(teamMemberNames)]
              }
            } catch {
              teamMemberNames = [rawTeamMemberNames]
            }
            return (
              <TeamImageCard
                teamPhotoFileHandleId={row.values[teamPhotoColumnIndex] ?? ''}
                entityId={entityId}
                teamMemberNames={teamMemberNames}
              />
            )
          })}
        </Box>
        <Box className={styles.FeaturedTeam__textSection}>
          <MarkdownSynapse wikiId="635914" ownerId="syn51476216" />
        </Box>
      </Box>
    </Box>
  )
}

export default FeaturedTeam
