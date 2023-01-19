import { styled, Box } from "@mui/material";

export const StyledOuterContainer = styled(Box, { label: 'StyledOuterContainer' })(({ theme }) => ({
    minHeight: '100vh',
    paddingTop: '100px',
    background: '#d5dbe1',
}))

export const StyledInnerContainer = styled(Box, { label: 'StyledInnerContainer' })(({ theme }) => ({
    width: '900px',
    margin: '0 auto',
    display: 'flex',
    '& > div:nth-of-type(1), & > div:nth-of-type(2)': {
        width: '450px',
        position: 'relative',
        padding: theme.spacing(8)
    },
    '& > div:nth-of-type(1)': {
        backgroundColor: '#FFF',
    },
    '& > div:nth-of-type(2)': {
        backgroundColor: '#F1F3F5',
    }
}))