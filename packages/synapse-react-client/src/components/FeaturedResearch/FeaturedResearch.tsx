import { Box, Link, Stack, Typography } from '@mui/material'

export type FeaturedResearchProps = {
  affiliation: string
  publishedDate: string
  title: string
  description: string
  tags: string[]
  link: string
  image: string
}

type Card = FeaturedResearchProps

function FeaturedResearch(props: FeaturedResearchProps) {
  // order date by descending
  const dummyData = [
    {
      affiliation: 'Scripps Research',
      publishedDate: '2024-12-20',
      title: 'Exploring the Future of AI',
      description:
        'A deep dive into how artificial intelligence is shaping the future of technology and society.',
      tags: ['AI', 'Technology', 'Future'],
      link: 'https://example.com/exploring-the-future-of-ai',
      image:
        'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg',
    },
    {
      affiliation: 'Some University 1',
      publishedDate: '2024-12-18',
      title: '10 Tips for Better Coding',
      description:
        'Learn how to write cleaner, more efficient code with these practical tips.',
      tags: ['Coding', 'Programming', 'Tips'],
      link: 'https://example.com/10-tips-for-better-coding',
      image: 'https://example.com/images/better-coding.jpg',
    },
    {
      affiliation: 'Some University 2',
      publishedDate: '2024-12-15',
      title: 'Understanding Quantum Computing',
      description:
        'An introductory guide to quantum computing and its potential applications.',
      tags: ['Quantum Computing', 'Technology', 'Innovation'],
      link: 'https://example.com/understanding-quantum-computing',
      image: 'https://example.com/images/quantum-computing.jpg',
    },
    {
      affiliation: 'Some University 3',
      publishedDate: '2024-12-12',
      title: 'The Rise of Green Energy',
      description:
        'How renewable energy sources are transforming the global energy landscape.',
      tags: ['Green Energy', 'Renewables', 'Environment'],
      link: 'https://example.com/the-rise-of-green-energy',
      image: 'https://example.com/images/green-energy.jpg',
    },
    {
      affiliation: 'Some University 4',
      publishedDate: '2024-12-10',
      title: 'The Art of Mindfulness',
      description:
        'Discover the benefits of mindfulness and how to incorporate it into your daily routine.',
      tags: ['Mindfulness', 'Wellness', 'Health'],
      link: 'https://example.com/the-art-of-mindfulness',
      image: 'https://example.com/images/mindfulness.jpg',
    },
  ]

  const topCard = dummyData[0]
  const remainingCards = dummyData.slice(1)

  const FeaturedResearchCard = (card: Card) => (
    <Stack
      useFlexGap
      gap={'30px'}
      direction={'row'}
      borderBottom={"1px solid var('grey.300', #EAECEE)"}
    >
      <Stack useFlexGap gap={'10px'}>
        <Typography
          fontSize={'14px'}
          lineHeight={'normal'}
          fontWeight={500}
          color={'grey.600'}
        >
          {card.affiliation}
        </Typography>
        <Typography variant="headline2" fontSize={'21px'}>
          {card.title}
        </Typography>
        <Stack direction={'row'} useFlexGap gap={'16px'}>
          <Typography
            variant="overline"
            fontSize={'14px'}
            whiteSpace={'nowrap'}
            sx={{
              backgroundColor: 'grey.300',
              borderRadius: '3px',
              padding: '4px 8px',
              border: 'none',
              lineHeight: 'initial',
            }}
          >
            {card.tags[0]}
          </Typography>
          <Typography lineHeight={'normal'} color={'grey.600'}>
            {topCard.affiliation}
          </Typography>
        </Stack>
      </Stack>
      <Box
        width="140px"
        height="93.8px"
        borderRadius="6px"
        sx={{
          backgroundImage:
            "url('https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </Stack>
  )

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' },
        gap: { xs: '30px', md: '40px' },
        padding: { xs: '40px', lg: '80px' },
      }}
    >
      <Box>
        <Box
          width="100%"
          height={{ xs: '250px', sm: '400px', lg: '600.3px', xl: '800px' }}
          borderRadius="10px"
          sx={{
            backgroundImage:
              "url('https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            marginBottom: '30px',
          }}
        />
        <Stack direction="row" useFlexGap gap={'10px'} paddingBottom={'20px'}>
          <Typography
            fontSize={'14px'}
            lineHeight={'normal'}
            sx={{
              fontWeight: 700,
              backgroundColor: 'primary.main',
              color: '#FFFF',
              padding: '3px 8px',
              borderRadius: '3px',
            }}
          >
            {topCard.tags[0]}
          </Typography>
          <Typography lineHeight={'normal'} color={'grey.600'}>
            {topCard.affiliation}
          </Typography>
        </Stack>
        <Stack useFlexGap gap={'16px'}>
          <Typography variant="headline2" fontSize={'36px'}>
            {topCard.title}
          </Typography>
          <Typography fontSize={'18px'} lineHeight={'22.4px'}>
            {topCard.description}
          </Typography>
          <Link href={topCard.link}>Read more</Link>
        </Stack>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gap="16px"
        sx={{
          borderTop: '3px solid',
          borderColor: 'grey.400',
          padding: '30px 0',
        }}
      >
        <Typography variant="headline2" color="grey.1000" fontSize={'24px'}>
          Featured Research
        </Typography>
        {remainingCards.map((card, index) => (
          <FeaturedResearchCard key={index} {...card} />
        ))}
      </Box>
    </Box>
  )
}

export default FeaturedResearch
