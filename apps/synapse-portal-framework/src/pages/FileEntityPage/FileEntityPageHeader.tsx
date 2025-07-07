import { Box, Container, Stack, Typography } from '@mui/material'
import { EntityBundle } from '@sage-bionetworks/synapse-types'
// import CroissantButton from 'synapse-react-client/components/GenericCard/CroissantButton/CroissantButton'
import { IconSvg } from 'synapse-react-client'
import { FileEntity } from '@sage-bionetworks/synapse-types'
import CitationPopover from 'synapse-react-client/components/CitationPopover'
import CroissantButton from 'synapse-react-client/components/GenericCard/CroissantButton/CroissantButton'

const FileEntityPageHeader = ({ data }: { data: EntityBundle }) => {
  console.log('data in header', data)

  const entity = data.entity as FileEntity

  console.log('entity id', entity.id)

  return (
    <Box
      sx={{
        color: 'primary.contrastText',
        backgroundColor: 'primary.main',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          gap: '20px',
          padding: '60px 0',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Box
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.08)',
              borderRadius: '50%',
              width: '72px',
              height: '72px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconSvg
              icon={'file'}
              wrap={false}
              sx={{ width: '32px', height: '32px' }}
            />
          </Box>
          <Box>
            <Typography
              variant="smallText1"
              sx={{ textTransform: 'uppercase' }}
            >
              {data.entityType}
            </Typography>
            <Typography
              variant="headline1"
              sx={{ fontSize: '36px', marginTop: '20px' }}
            >
              {entity.name}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: '10px', marginLeft: 'auto' }}>
          {entity.id && (
            <CitationPopover
              doi={data.doiAssociation?.doiUri}
              buttonSx={{
                color: 'primary.contrastText',
                borderColor: 'primary.contrastText',
                '&:hover': { color: 'primary.contrastText' },
              }}
            />
          )}
        </Box>
      </Container>
    </Box>
  )
}

export default FileEntityPageHeader
