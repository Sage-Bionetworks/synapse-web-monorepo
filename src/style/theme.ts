import { createTheme, Theme } from "@mui/material";
import { deepmerge } from '@mui/utils'
import { getSourceAppTheme } from "components/SourceApp";

export const latoFont = ['Lato', 'Roboto', 'Helvetica', 'Arial'].join(',')

const themeObject = {
    components: {
        MuiCssBaseline: {
        },
        MuiButton: {
            styleOverrides: {
                contained: {
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '14px 16px',
                    height: '52px',
                    fontWeight: '900',
                    fontSize: '16px',
                    borderRadius: '3px',
                },
                containedSecondary: {
                    height: '48px',
                    background: '#FFFFFF',
                    border: '1px solid #EAECEE',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.03), 0px 2px 2px rgba(0, 0, 0, 0.03), 0px 1px 1px rgba(0, 0, 0, 0.03)',
                    borderRadius: '3px',
                }
            },
        }
    },

    typography: {
        allVariants: {
            fontFamily: latoFont,
            fontSize: '14px',
        },
        headline1: {},
        headline2: {
            fontWeight: 700,
            fontSize: '24px',
            lineHeight: '28px',
            color: '#353A3F',
            alignItems: 'center',
            marginBottom: '20px',
        },
        headline3: {
            fontWeight: '700',
            fontSize: '18px',
            lineHeight: '20px',
        },
        body1: {
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '150%',
            letterSpacing: '-0.019em',
            color: '#4A5056',
        },
        body1Italic: {},
        body2: {
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
        },
        breadcrumb1: {},
        breadcrumb2: {},
        smallText1: {
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '21px',
            color: '#878E95',
        },
        smallText2: {},
        smallLink: {},
        label: {},
        buttonLink: {},
        hintText: {},
        sectionTitle: {},
        subsectionHeader: {},
        dataFieldKey: {},
    },
}

const theme: Theme = createTheme(deepmerge(getSourceAppTheme(), themeObject))

export default theme
