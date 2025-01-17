import { Box, Button, Stack, Typography } from '@mui/material'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { SynapseConstants } from '../../utils'
import { parseEntityIdFromSqlStatement } from '../../utils/functions'
import useGetQueryResultBundle from '../../synapse-queries/entity/useGetQueryResultBundle'
import { getFieldIndex } from '../../utils/functions/queryUtils'
import Partners from './Partners'

export type HeaderProps = {
  sql: string
  backgroundImage: string
}

interface TopSectionProps {
  backgroundImage: string
}

const TopSection = ({ backgroundImage }: TopSectionProps) => {
  return (
    <Box
      sx={{
        background: `
        linear-gradient(90deg, #F2F5F5 50.5%, rgba(255, 255, 255, 0.00) 100%), 
        linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), 
        url(${backgroundImage}) lightgray 50% / cover no-repeat
      `,
        padding: '120px 80px 50px 80px',
      }}
    >
      <Stack
        sx={{
          alignItems: 'flex-start',
          padding: '40px 0px',
          gap: '24px',
          width: '746px',
        }}
      >
        <Typography
          variant="headline2"
          sx={{ fontWeight: 300, fontSize: '42px', color: 'grey.1000' }}
        >
          Discover and explore data about centenarians
        </Typography>
        <Typography
          variant="headline3"
          sx={{ fontSize: '24px', fontWeight: '400', lineHeight: '160%' }}
        >
          The open science hub for breakthroughs in lifespan and healthspan
        </Typography>
        <Typography sx={{ fontSize: '18px', lineHeight: '140%' }}>
          People with Exceptional Longevity (EL) can live in good health to 95,
          100, or even beyond. The ELITE Portal brings together the latest
          research so that we can crack the code of longevity and all live
          longer, healthier lives.
        </Typography>
        <Button
          href={''}
          target="_blank"
          variant="contained"
          sx={{
            whiteSpace: 'nowrap',
            alignSelf: 'flex-start',
            padding: '6px 24px',
            fontWeight: 600,
            boxShadow:
              '0px 16px 16px 0px rgba(0, 0, 0, 0.10), 0px 4px 4px 0px rgba(0, 0, 0, 0.10), 0px 1px 1px 0px rgba(0, 0, 0, 0.10)',
          }}
        >
          Learn more
        </Button>
      </Stack>
    </Box>
  )
}

const Header = ({ sql, backgroundImage }: HeaderProps) => {
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
  const { data: queryResultBundle, isLoading } =
    useGetQueryResultBundle(queryBundleRequest)

  const dataRows = queryResultBundle?.queryResult!.queryResults.rows ?? []

  enum ExpectedColumns {
    CARDLOGO = 'cardLogo',
    ORGANIZATIONNAME = 'organizationName',
  }

  const imageColIndex = getFieldIndex(
    ExpectedColumns.CARDLOGO,
    queryResultBundle,
  )

  const organizationNameColIndex = getFieldIndex(
    ExpectedColumns.ORGANIZATIONNAME,
    queryResultBundle,
  )

  return (
    <>
      <TopSection backgroundImage={backgroundImage} />
      <Partners
        entityId={entityId}
        imageColIndex={imageColIndex}
        organizationNameColIndex={organizationNameColIndex}
        dataRows={dataRows}
        isLoading={isLoading}
      />
    </>
  )
}

export default Header
