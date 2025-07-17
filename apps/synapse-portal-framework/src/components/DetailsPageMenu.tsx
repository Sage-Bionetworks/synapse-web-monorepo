import { DetailsPageSectionLayoutType } from '@/components/DetailsPage/DetailsPageSectionLayout'
import { scrollToWithOffset } from '@/utils'
import { Button, Stack, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router'

const DetailsPageMenu = ({
  menuSections,
}: {
  menuSections: DetailsPageSectionLayoutType[]
}) => {
  const location = useLocation()
  const navigate = useNavigate()

  function handleMenuClick(id: string) {
    navigate(`${location.search}#${id}`)
    // An ID may have spaces, so use [id="..."] style selector
    // Using a hash will treat spaces as a query for descendants
    const query = `[id="${id}"]`
    const wrapper = document.querySelector<HTMLElement>(query)
    if (wrapper) {
      scrollToWithOffset(wrapper)
    } else {
      console.error(`Could not find id ${id} in document (query: ${query})`)
    }
  }

  return (
    <Stack
      sx={{
        position: 'sticky',
        top: '100px',
        zIndex: 1000,
        paddingBottom: '16px',
        padding: '10px 0px 20px 0px',
        gap: '10px',
        borderRadius: '3px',
        border: '1px solid',
        borderColor: 'grey.400',
        height: 'fit-content',
        boxShadow: 1,
        backgroundColor: '#FCFCFD',
        minWidth: '220px',
      }}
    >
      <Typography
        variant="subsectionHeader"
        sx={{
          borderBottom: '1px solid',
          borderColor: 'grey.400',
          padding: '10px 30px',
        }}
      >
        Contents
      </Typography>
      {menuSections.map(option => (
        <Button
          sx={{
            padding: '8px 30px',
            color: 'inherit !important',
            textDecoration: 'none !important',
            justifyContent: 'flex-start',
          }}
          key={option.id}
          onClick={() => handleMenuClick(option.id)}
        >
          {option.title}
        </Button>
      ))}
    </Stack>
  )
}

export default DetailsPageMenu
