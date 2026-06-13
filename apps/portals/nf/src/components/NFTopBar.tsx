import { Box } from '@mui/material'
import { Link } from 'react-router'
import { PortalFullTextSearchField } from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/PortalFullTextSearchField'
import logo from '/logo.svg?url'

/**
 * Persistent white top bar with the NF logo and a full-width search input.
 * Renders above the dark Navbar on every page.
 */
export default function NFTopBar() {
  return (
    <Box
      component="div"
      sx={{
        background: '#fff',
        borderBottom: '1px solid #DDE3EA',
        display: 'flex',
        alignItems: 'center',
        px: { xs: 2, md: 4 },
        py: 1.25,
        gap: 3,
        minHeight: 56,
        zIndex: 1200,
      }}
    >
      <Box
        component={Link}
        to="/"
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexShrink: 0,
          textDecoration: 'none',
        }}
      >
        <img src={logo} alt="NF Data Portal" style={{ height: 36 }} />
      </Box>

      <Box sx={{ flex: 1, maxWidth: 800 }}>
        <PortalFullTextSearchField
          path="/Search"
          placeholder="Search studies, datasets, tools, publications…"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '6px',
              background: '#F5F7FA',
            },
          }}
        />
      </Box>
    </Box>
  )
}
