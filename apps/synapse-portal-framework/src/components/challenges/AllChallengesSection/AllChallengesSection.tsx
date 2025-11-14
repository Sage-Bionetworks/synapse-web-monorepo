import { Box, Button, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { SynapseConstants } from 'synapse-react-client'
import useGetQueryResultBundle from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'
import { parseEntityIdAndVersionFromSqlStatement } from 'synapse-react-client/utils/functions'
import { getFieldIndex } from 'synapse-react-client/utils/functions/queryUtils'
import styles from './AllChallengesSection.module.scss'
import ColorfulPortalCardWithChips from 'synapse-react-client/components/BasePortalCard/ColorfulPortalCardWithChips/ColorfulPortalCardWithChips'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import stringListToArray from '@/utils/stringListToArray'

type AllChallengesSectionProps = {
  sql: string
  borderRadiusPx?: number
}

const AllChallengesSection = ({
  sql,
  borderRadiusPx,
}: AllChallengesSectionProps) => {
  const { entityId } = parseEntityIdAndVersionFromSqlStatement(sql)

  const queryBundleRequest: QueryBundleRequest = {
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId: entityId ?? '',
    query: { sql },
  }

  const { data: queryResultBundle } =
    useGetQueryResultBundle(queryBundleRequest)

  const dataRows = queryResultBundle?.queryResult?.queryResults.rows ?? []

  const filteredDataRows =
    dataRows.filter(row => {
      const landingPageSectionValues =
        row.values[getFieldIndex('landingPageSection', queryResultBundle)] ?? ''
      const landingPageSectionArray = stringListToArray(
        landingPageSectionValues,
      )
      return landingPageSectionArray.includes('all')
    }) ?? []

  return (
    <Stack className={styles.AllChallengesSection__root}>
      <Box className={styles.AllChallengesSection__header}>
        <Typography
          variant="headline1"
          className={styles.AllChallengesSection__sectionTitle}
        >
          All Challenges
        </Typography>
      </Box>
      <Box className={styles.AllChallengesSection__container}>
        {filteredDataRows.map(row => {
          const chips =
            row.values[getFieldIndex('chips', queryResultBundle)] ?? ''
          const chipsArray = stringListToArray(chips)

          return (
            <ColorfulPortalCardWithChips
              key={row.rowId}
              title={
                row.values[getFieldIndex('title', queryResultBundle)] ?? ''
              }
              subtitle={
                row.values[getFieldIndex('challengeName', queryResultBundle)] ??
                ''
              }
              description={
                row.values[getFieldIndex('description', queryResultBundle)] ??
                ''
              }
              learnMoreLink={
                row.values[getFieldIndex('learnMoreLink', queryResultBundle)] ??
                ''
              }
              chips={chipsArray}
              tag={
                row.values[
                  getFieldIndex('registrationStatus', queryResultBundle)
                ] ?? ''
              }
              backgroundImage={
                row.values[
                  getFieldIndex('backgroundImage', queryResultBundle)
                ] ?? ''
              }
              backgroundColor={
                row.values[getFieldIndex('cardColor', queryResultBundle)] ?? ''
              }
              entityId={entityId}
              borderRadiusPx={borderRadiusPx}
            />
          )
        })}
      </Box>
      <Button
        component={RouterLink}
        variant="outlined"
        to="/Challenge List"
        endIcon={<ArrowForwardIcon />}
        className={styles.AllChallengesSection__viewChallengeListButton}
      >
        View Challenge List
      </Button>
    </Stack>
  )
}

export default AllChallengesSection
