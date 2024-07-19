import { Box, Chip, Link, Paper, Typography } from '@mui/material'
import React from 'react'
import { EastTwoTone } from '@mui/icons-material'
import { BackendDestinationEnum, getEndpoint } from '../../utils/functions'
import ImageFromSynapseTable from '../ImageFromSynapseTable'

export type SynapseFeaturedDatasetItemProps = {
  sourceTable: string
  id?: string | null
  community?: string | null
  name?: string | null
  description?: string | null
  contributors?: string | null
  keywords?: string | null
  individuals?: string | null
  imageFileId?: string | null
  size?: string | null
  sizeUnit?: string | null
}

export const SynapseFeaturedDatasetItem: React.FunctionComponent<
  SynapseFeaturedDatasetItemProps
> = ({
  sourceTable,
  id,
  community,
  name,
  description,
  contributors,
  keywords,
  imageFileId,
  individuals,
  size,
  sizeUnit,
}) => {
  const tags: string[] = keywords ? JSON.parse(keywords) : []
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '30px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '15px',
          p: '30px 30px 0px 30px',
        }}
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', rowGap: '5px' }}>
          {tags &&
            tags.map(tag => {
              return (
                <Chip
                  key={tag}
                  sx={{
                    mr: '5px',
                    color: 'secondary.600',
                    backgroundColor: 'secondary.100',
                  }}
                  label={tag}
                />
              )
            })}
        </Box>
        <Typography
          variant="headline3"
          sx={{
            fontSize: '24px',
            fontWeight: 600,
            lineHeight: '32px',
            minHeight: '80px',
          }}
        >
          {name}
        </Typography>
      </Box>
      {imageFileId && (
        <Box sx={{ p: '30px', backgroundColor: 'primary.100' }}>
          <ImageFromSynapseTable
            tableId={sourceTable}
            fileHandleId={imageFileId}
          />
        </Box>
      )}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: '0px 30px 30px 30px',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '24px',
            mb: '20px',
          }}
        >
          {description}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: '14px', fontWeight: 700, lineHeight: '20px' }}
        >
          Dimensions
        </Typography>
        <Typography variant="body1" sx={{ mb: '20px' }}>
          {individuals} individuals, {size}
          {sizeUnit}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: '14px', fontWeight: 700, lineHeight: '20px' }}
        >
          Contributors
        </Typography>
        <Typography variant="body1">{contributors}</Typography>
        <Box sx={{ mt: '32px' }}>
          <Link
            href={`${getEndpoint(
              BackendDestinationEnum.PORTAL_ENDPOINT,
            )}Synapse:${id}`}
            target="_blank"
          >
            Explore dataset
            <EastTwoTone sx={{ mb: '-8px', ml: '6px' }} />
          </Link>
        </Box>
      </Box>
    </Paper>
  )
}
