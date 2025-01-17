import { Box, Typography, Stack, CardMedia, Skeleton } from '@mui/material'
import {
  FileHandleAssociateType,
  FileHandleAssociation,
  Row,
} from '@sage-bionetworks/synapse-types'
import { useGetStablePresignedUrl } from '../../synapse-queries'

type PartnersSectionProps = {
  imageColIndex?: number
  organizationNameColIndex?: number
  dataRows?: Row[]
  entityId?: string
  isLoading?: boolean
}

const UseImageUrl = (fileId: string, entityId: string) => {
  const fha: FileHandleAssociation = {
    associateObjectId: entityId,
    associateObjectType: FileHandleAssociateType.TableEntity,
    fileHandleId: fileId || '',
  }
  const stablePresignedUrl = useGetStablePresignedUrl(fha, false, {
    enabled: !!fileId,
  })
  const dataUrl = stablePresignedUrl?.dataUrl

  return dataUrl
}

const renderPartnerIcon = (
  partner: Row,
  imageColIndex: number | undefined,
  organizationNameColIndex: number | undefined,
  entityId: string | undefined,
) => {
  const fileId =
    imageColIndex !== undefined ? partner?.values[imageColIndex] : ''
  const url = UseImageUrl(fileId || '', entityId || '')

  if (!url && !partner?.values[organizationNameColIndex ?? -1]) {
    return
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {url ? (
        <CardMedia
          component="img"
          image={url}
          aria-hidden="true"
          sx={{
            width: '156px',
            height: '101px',
            objectFit: 'contain',
            borderRadius: '10px',
          }}
        />
      ) : (
        <Box
          sx={{
            display: 'flex',
            width: '165px',
            padding: '3px',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '10px',
            border: '2px solid',
            borderColor: 'grey.900',
            background: '#FFF',
            height: 'fit-content',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              padding: '10px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              border: '1px solid',
              borderColor: 'grey.900',
            }}
          >
            <Typography
              variant="headline3"
              sx={{
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '130%',
              }}
            >
              {partner?.values[organizationNameColIndex ?? -1]}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  )
}

const Partners = ({
  imageColIndex,
  organizationNameColIndex,
  dataRows,
  entityId,
  isLoading,
}: PartnersSectionProps) => {
  if (isLoading) {
    return <Skeleton variant="rectangular" height={142} width="100%" />
  }

  return (
    <Stack
      sx={{
        flexDirection: 'row',
        padding: '20px 80px',
        gap: '10px',
        backgroundColor: 'grey.100',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          borderTop: '3px solid',
          borderColor: 'grey.400',
          width: '330px',
          gap: '16px',
        }}
      >
        <Typography
          color="grey.1000"
          variant="headline2"
          paddingTop="26px"
          fontSize="24px"
        >
          Our Partners
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          paddingLeft: '40px',
          alignContent: 'center',
          gap: '64px',
          flex: '1 0 0',
        }}
      >
        {dataRows?.map(partner =>
          renderPartnerIcon(
            partner,
            imageColIndex,
            organizationNameColIndex,
            entityId,
          ),
        )}
      </Box>
    </Stack>
  )
}

export default Partners
