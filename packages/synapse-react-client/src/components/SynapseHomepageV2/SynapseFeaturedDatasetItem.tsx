import { EastTwoTone } from '@mui/icons-material'
import { Box, Card, Chip, Link, SxProps, Typography } from '@mui/material'
import ImageFromSynapseTable from '../ImageFromSynapseTable'

export type SynapseFeaturedDatasetItemProps = {
  sourceTable: string
  community?: string | null
  name?: string | null
  description?: string | null
  contributors?: string | null
  keywords?: string | null
  individuals?: string | null
  imageFileId?: string | null
  size?: string | null
  sizeUnit?: string | null
  link: string
}
const clampedTextSx: SxProps = {
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  display: '-webkit-box',
  '-webkit-box-orient': 'vertical',
  // height: YOUR HEIGHT,
  // '-webkit-line-clamp': NUMBER OF LINES,
}
export function SynapseFeaturedDatasetItem({
  sourceTable,
  name,
  description,
  contributors,
  keywords,
  imageFileId,
  individuals,
  size,
  sizeUnit,
  link,
}: SynapseFeaturedDatasetItemProps) {
  const tags: string[] = keywords ? JSON.parse(keywords) : []
  return (
    <Card
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
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            rowGap: '5px',
            minHeight: '70px',
            overflow: 'hidden',
          }}
        >
          {tags &&
            tags.map(tag => {
              return (
                <Chip
                  key={tag}
                  sx={{
                    mr: '5px',
                    color: 'secondary.600',
                    backgroundColor: 'secondary.100',
                    borderWidth: '0px',
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
            ...clampedTextSx,
            height: '70px',
            '-webkit-line-clamp': '2',
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
            ...clampedTextSx,
            height: '120px',
            '-webkit-line-clamp': '5',
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
        <Typography
          variant="body1"
          sx={{
            mb: '20px',
            ...clampedTextSx,
            height: '24px',
            '-webkit-line-clamp': '1',
          }}
        >
          {individuals} individuals, {size}
          {sizeUnit}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: '14px', fontWeight: 700, lineHeight: '20px' }}
        >
          Contributors
        </Typography>
        <Typography
          variant="body1"
          sx={{
            ...clampedTextSx,
            height: '48px',
            '-webkit-line-clamp': '2',
          }}
        >
          {contributors}
        </Typography>
        <Box sx={{ mt: '32px' }}>
          <Link href={link} target="_blank">
            Explore dataset
            <EastTwoTone sx={{ mb: '-8px', ml: '6px' }} />
          </Link>
        </Box>
      </Box>
    </Card>
  )
}
