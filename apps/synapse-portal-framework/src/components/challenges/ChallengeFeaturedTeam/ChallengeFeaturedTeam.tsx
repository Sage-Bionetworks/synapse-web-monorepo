import { Box, Typography, Button, Link } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
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
import { ReactComponent as BkgImage } from '../assets/featuredTeamBkg.svg'
import { ReactComponent as TriangleImage } from '../assets/featuredTeamTriangle.svg'
import { ReactComponent as MedalImage } from '../assets/featuredTeamMedal.svg'
import { ReactComponent as TopLineImage } from '../assets/featuredTeamTopLine.svg'
import { ReactComponent as BottomLineImage } from '../assets/featuredTeamBottomLine.svg'

type FeaturedTeamProps = {
  sql: string
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
    TEAM_NAME = 'teamName',
    TEAM_PHOTO = 'teamPhoto',
    TEAM_MEMBER_NAMES = 'teamMemberNames',
    CHALLENGE_NAME = 'challengeName',
    CHALLENGE_LINK = 'challengeLink',
    READMORE_LINK = 'readMoreLink',
    Q1 = 'Q1',
    A1 = 'A1',
    Q2 = 'Q2',
    A2 = 'A2',
    Q3 = 'Q3',
    A3 = 'A3',
  }

  const teamNameColumnIndex = getFieldIndex(
    ExpectedColumns.TEAM_NAME,
    queryResultBundle,
  )

  const teamPhotoColumnIndex = getFieldIndex(
    ExpectedColumns.TEAM_PHOTO,
    queryResultBundle,
  )

  const challengeNameColumnIndex = getFieldIndex(
    ExpectedColumns.CHALLENGE_NAME,
    queryResultBundle,
  )

  const teamMemberNamesColumnIndex = getFieldIndex(
    ExpectedColumns.TEAM_MEMBER_NAMES,
    queryResultBundle,
  )

  const challengeLinkColumnIndex = getFieldIndex(
    ExpectedColumns.CHALLENGE_LINK,
    queryResultBundle,
  )

  const readMoreLinkColumnIndex = getFieldIndex(
    ExpectedColumns.READMORE_LINK,
    queryResultBundle,
  )

  const q1ColumnIndex = getFieldIndex(ExpectedColumns.Q1, queryResultBundle)
  const a1ColumnIndex = getFieldIndex(ExpectedColumns.A1, queryResultBundle)

  const q2ColumnIndex = getFieldIndex(ExpectedColumns.Q2, queryResultBundle)
  const a2ColumnIndex = getFieldIndex(ExpectedColumns.A2, queryResultBundle)

  const q3ColumnIndex = getFieldIndex(ExpectedColumns.Q3, queryResultBundle)
  const a3ColumnIndex = getFieldIndex(ExpectedColumns.A3, queryResultBundle)

  const teamName = dataRows[0]?.values[teamNameColumnIndex] ?? ''
  const rawTeamMemberNames =
    dataRows[0]?.values[teamMemberNamesColumnIndex] ?? ''
  let teamMemberNames: string[] = []
  try {
    teamMemberNames = JSON.parse(rawTeamMemberNames)
    if (!Array.isArray(teamMemberNames)) {
      teamMemberNames = [String(teamMemberNames)]
    }
  } catch {
    teamMemberNames = [rawTeamMemberNames]
  }
  const teamPhotoFileHandleId = dataRows[0]?.values[teamPhotoColumnIndex] ?? ''
  const challengeName = dataRows[0]?.values[challengeNameColumnIndex] ?? ''
  const challengeLink = dataRows[0]?.values[challengeLinkColumnIndex] ?? '#'
  const readMoreLink = dataRows[0]?.values[readMoreLinkColumnIndex] ?? '#'
  const q1 = dataRows[0]?.values[q1ColumnIndex] ?? ''
  const a1 = dataRows[0]?.values[a1ColumnIndex] ?? ''
  const q2 = dataRows[0]?.values[q2ColumnIndex] ?? ''
  const a2 = dataRows[0]?.values[a2ColumnIndex] ?? ''
  const q3 = dataRows[0]?.values[q3ColumnIndex] ?? ''
  const a3 = dataRows[0]?.values[a3ColumnIndex] ?? ''

  const questionsAndAnswers: { question: string; answer: string }[] = [
    { question: q1, answer: a1 },
    { question: q2, answer: a2 },
    { question: q3, answer: a3 },
  ]

  const fha: FileHandleAssociation = {
    associateObjectId: entityId,
    associateObjectType: FileHandleAssociateType.TableEntity,
    fileHandleId: teamPhotoFileHandleId ?? '',
  }
  const stablePresignedUrl = useGetStablePresignedUrl(fha, false, {
    enabled: !!teamPhotoFileHandleId,
  })
  const dataUrl = stablePresignedUrl?.dataUrl

  return (
    <Box className={styles.FeaturedTeam}>
      <BkgImage
        className={styles.FeaturedTeam__bkgImage}
        preserveAspectRatio="none"
      />
      <TriangleImage className={styles.FeaturedTeam__triangleImage} />
      <MedalImage className={styles.FeaturedTeam__medalImage} />
      <TopLineImage className={styles.FeaturedTeam__topLineImage} />
      <BottomLineImage className={styles.FeaturedTeam__bottomLineImage} />
      <Box className={styles.FeaturedTeam__header}>
        <Typography variant="headline1" className={styles.FeaturedTeam__title}>
          Featured Team
        </Typography>
      </Box>
      <Box className={styles.FeaturedTeam__content}>
        <Box className={styles.FeaturedTeam__imageSection}>
          <img
            src={dataUrl}
            alt="Team"
            className={styles.FeaturedTeam__image}
          />
          <Typography
            variant="smallText1"
            className={styles.FeaturedTeam__caption}
          >
            From left to right: {teamMemberNames.join(', ')}
          </Typography>
        </Box>
        <Box className={styles.FeaturedTeam__infoSection}>
          <Box className={styles.FeaturedTeam__winnerSection}>
            <Typography
              variant="headline1"
              className={styles.FeaturedTeam__winnerTitle}
            >
              Meet our {challengeName} Challenge winners:
            </Typography>
            <Typography
              variant="headline1"
              className={styles.FeaturedTeam__winnerTitle}
            >
              {teamName}
            </Typography>
          </Box>
          <Link
            href={challengeLink}
            className={styles.FeaturedTeam__challengeLink}
            variant="smallText1"
          >
            View the {challengeName} Challenge here.
          </Link>
          {questionsAndAnswers.map(
            (qa, index) =>
              qa.question && (
                <Box key={index} className={styles.FeaturedTeam__qaSection}>
                  <Typography
                    variant="body1"
                    className={styles.FeaturedTeam__question}
                  >
                    Q: {qa.question}
                  </Typography>
                  <Typography
                    variant="body1"
                    className={styles.FeaturedTeam__answer}
                  >
                    A: {qa.answer}
                  </Typography>
                </Box>
              ),
          )}
          <Button
            variant="outlined"
            className={styles.FeaturedTeam__readMoreButton}
            endIcon={<ArrowForwardIcon />}
            href={readMoreLink}
          >
            Read More
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default FeaturedTeam
