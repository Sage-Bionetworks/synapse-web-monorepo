import { Box, Link, Typography } from '@mui/material'
import { CollapsibleDescription } from 'synapse-react-client/components/GenericCard/CollapsibleDescription'

export type CardData = {
  key?: string
  title: string
  subtitle?: string
  description: string
  links?: string[]
}

export type CardsFromDataProps = {
  data: CardData[]
}

export function CardsFromData({ data }: CardsFromDataProps) {
  if (!data || data.length === 0) {
    return null
  }

  return (
    <>
      {data.map((card, i) => (
        <Box
          key={card.key || i}
          sx={{
            border: '1px solid',
            borderColor: 'grey.300',
            borderRadius: 1,
            p: 3,
            mb: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>
            {card.title}
          </Typography>
          {card.subtitle && (
            <Typography
              variant="body2"
              sx={{ fontStyle: 'italic', color: 'text.secondary', mb: 1 }}
            >
              {card.subtitle}
            </Typography>
          )}
          <CollapsibleDescription
            description={card.description}
            descriptionSubTitle=""
          />
          {card.links?.length ? (
            <Box sx={{ mt: 2 }}>
              <Typography
                variant="subtitle2"
                sx={{ color: 'text.secondary', mb: 0.5 }}
              >
                Links
              </Typography>
              {card.links.map(url => (
                <Box key={url}>
                  <Link href={url} target="_blank" rel="noopener noreferrer">
                    {url}
                  </Link>
                </Box>
              ))}
            </Box>
          ) : null}
        </Box>
      ))}
    </>
  )
}
